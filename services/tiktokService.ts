import { TikTokLinkInfo } from '../types';

const ALLOWED_HOSTS = new Set([
  'tiktok.com',
  'www.tiktok.com',
  'm.tiktok.com',
  'vm.tiktok.com',
  'vt.tiktok.com',
  't.tiktok.com',
]);

export function isTikTokShortLink(value: string): boolean {
  try {
    const parsed = new URL(value.trim());
    return parsed.protocol === 'https:' && ['vm.tiktok.com', 'vt.tiktok.com', 't.tiktok.com'].includes(parsed.hostname.toLowerCase());
  } catch {
    return false;
  }
}

export const parseTikTokLink = (url: string): TikTokLinkInfo => {
  const trimmedUrl = url.trim();
  const info: TikTokLinkInfo = {
    originalUrl: trimmedUrl,
    cleanUrl: '',
    embedUrl: '',
    videoId: null,
    isValid: false,
    type: 'unknown',
  };

  if (!trimmedUrl) return info;

  let parsed: URL;
  try {
    parsed = new URL(trimmedUrl);
  } catch {
    return info;
  }

  const hostname = parsed.hostname.toLowerCase().replace(/\.$/, '');
  if (parsed.protocol !== 'https:' || !ALLOWED_HOSTS.has(hostname)) return info;

  const videoMatch = parsed.pathname.match(/^\/@([^/]+)\/video\/(\d+)/i);
  if (videoMatch) {
    const username = decodeURIComponent(videoMatch[1]);
    const videoId = videoMatch[2];
    info.videoId = videoId;
    info.isValid = true;
    info.type = 'full';
    info.cleanUrl = `https://www.tiktok.com/@${encodeURIComponent(username)}/video/${videoId}`;
    info.embedUrl = `https://www.tiktok.com/embed/v2/${videoId}`;
    return info;
  }

  const profileMatch = parsed.pathname.match(/^\/@([^/]+)\/?$/i);
  if (profileMatch) {
    const username = decodeURIComponent(profileMatch[1]);
    info.isValid = true;
    info.type = 'full';
    info.cleanUrl = `https://www.tiktok.com/@${encodeURIComponent(username)}`;
    return info;
  }

  if (isTikTokShortLink(trimmedUrl)) {
    info.type = 'short';
  }

  return info;
};
