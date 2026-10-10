const ALLOWED_HOSTS = new Set([
  'www.tiktok.com',
  'm.tiktok.com',
  'tiktok.com',
  'vm.tiktok.com',
  'vt.tiktok.com',
  't.tiktok.com',
]);

const REDIRECT_STATUSES = new Set([301, 302, 303, 307, 308]);
const MAX_REDIRECTS = 5;
const TIMEOUT_MS = 8000;
const buckets = new Map();

// --- Server-side result cache ---
// Short-link contents almost never change, so resolved results are memoized
// in memory for 6 hours, keyed by the normalized input URL and by the
// resolved target URL. NOTE: this is per-process memory. On Vercel serverless
// every function instance has its own memory, so cache hits are NOT shared
// across instances (the `buckets` rate-limit map above has the same
// limitation). For cross-instance sharing, use Vercel KV or Redis instead.
const resultCache = new Map(); // key -> { result, expiresAt }
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const MAX_CACHE_ENTRIES = 2000;

function getCachedResult(key) {
  const entry = resultCache.get(key);
  if (!entry) return null;
  if (entry.expiresAt <= Date.now()) {
    resultCache.delete(key);
    return null;
  }
  return entry.result;
}

function setCachedResult(key, result) {
  if (resultCache.size >= MAX_CACHE_ENTRIES) {
    const now = Date.now();
    for (const [k, v] of resultCache) {
      if (v.expiresAt <= now) resultCache.delete(k);
      if (resultCache.size < MAX_CACHE_ENTRIES) break;
    }
    if (resultCache.size >= MAX_CACHE_ENTRIES) {
      resultCache.delete(resultCache.keys().next().value);
    }
  }
  resultCache.set(key, { result, expiresAt: Date.now() + CACHE_TTL_MS });
}

function clientKey(request) {
  const forwarded = String(request.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return forwarded || request.socket?.remoteAddress || 'unknown';
}

function allowRequest(key) {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (current.count >= 30) return false;
  current.count += 1;
  return true;
}

function parseTikTokUrl(raw) {
  if (typeof raw !== 'string' || raw.length > 2048) throw new Error('Paste a valid TikTok URL.');
  let parsed;
  try {
    parsed = new URL(raw.trim());
  } catch {
    throw new Error('Paste a complete TikTok URL beginning with https://.');
  }
  if (parsed.protocol !== 'https:') throw new Error('Only secure HTTPS TikTok links are accepted.');
  const host = parsed.hostname.toLowerCase().replace(/\.$/, '');
  if (!ALLOWED_HOSTS.has(host)) throw new Error('Only official TikTok links are accepted.');
  if (parsed.username || parsed.password || (parsed.port && parsed.port !== '443')) {
    throw new Error('This URL contains unsupported connection details.');
  }
  parsed.hash = '';
  return parsed;
}

function cleanFinalUrl(value) {
  const parsed = parseTikTokUrl(value);
  const videoMatch = parsed.pathname.match(/^\/@([^/]+)\/video\/(\d+)/i);
  const profileMatch = parsed.pathname.match(/^\/@([^/]+)\/?$/i);

  if (videoMatch) {
    return {
      cleanUrl: `https://www.tiktok.com/@${encodeURIComponent(decodeURIComponent(videoMatch[1]))}/video/${videoMatch[2]}`,
      username: decodeURIComponent(videoMatch[1]),
      videoId: videoMatch[2],
      type: 'video',
      embedUrl: `https://www.tiktok.com/embed/v2/${videoMatch[2]}`,
    };
  }

  if (profileMatch) {
    return {
      cleanUrl: `https://www.tiktok.com/@${encodeURIComponent(decodeURIComponent(profileMatch[1]))}`,
      username: decodeURIComponent(profileMatch[1]),
      videoId: null,
      type: 'profile',
      embedUrl: '',
    };
  }

  parsed.search = '';
  return {
    cleanUrl: parsed.toString(),
    username: null,
    videoId: null,
    type: 'other',
    embedUrl: '',
  };
}

async function expand(rawUrl) {
  const cacheKey = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  const cached = cacheKey ? getCachedResult(cacheKey) : null;
  if (cached) return cached;

  let current = parseTikTokUrl(rawUrl);

  for (let index = 0; index <= MAX_REDIRECTS; index += 1) {
    const response = await fetch(current, {
      method: 'GET',
      redirect: 'manual',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; TikTokLinkResolver/1.0)',
        Accept: 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.1',
        Range: 'bytes=0-1023',
      },
    });

    if (response.body) response.body.cancel().catch(() => {});

    if (REDIRECT_STATUSES.has(response.status)) {
      const location = response.headers.get('location');
      if (!location) throw new Error('TikTok returned an incomplete redirect.');
      current = parseTikTokUrl(new URL(location, current).toString());
      continue;
    }

    if (!response.ok && response.status !== 206) {
      throw new Error(`TikTok returned HTTP ${response.status}.`);
    }

    const result = cleanFinalUrl(current.toString());
    if (cacheKey) {
      setCachedResult(cacheKey, result);
      // Also index by the resolved target URL so different short links
      // resolving to the same video share one cached entry.
      setCachedResult(result.cleanUrl, result);
    }
    return result;
  }

  throw new Error('The TikTok link redirected too many times.');
}

export default async function handler(request, response) {
  response.setHeader('Cache-Control', 'no-store, max-age=0');
  response.setHeader('X-Content-Type-Options', 'nosniff');

  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Use POST for this endpoint.' });
  }

  if (!allowRequest(clientKey(request))) {
    response.setHeader('Retry-After', '60');
    return response.status(429).json({ error: 'Too many requests. Wait briefly and try again.' });
  }

  try {
    const result = await expand(request.body?.url);
    return response.status(200).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'The TikTok link could not be resolved.';
    const timeout = error instanceof Error && (error.name === 'TimeoutError' || error.name === 'AbortError');
    return response.status(timeout ? 504 : 400).json({ error: timeout ? 'TikTok took too long to respond.' : message });
  }
}
