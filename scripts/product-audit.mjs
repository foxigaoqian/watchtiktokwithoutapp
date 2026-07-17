import fs from 'node:fs';

const read = (file) => fs.readFileSync(file, 'utf8');
const index = read('index.html');
const component = read('components/TiktokTool.tsx');
const service = read('services/tiktokService.ts');
const api = read('api/expand.js');
const copy = read('i18n/en-safe.ts');
const vercel = JSON.parse(read('vercel.json'));

for (const token of [
  'TikTok Link Expander & Browser Link Cleaner',
  'rel="canonical" href="https://watchtiktokwithoutapp.com/"',
  'application/ld+json',
]) {
  if (!index.includes(token)) throw new Error(`Homepage missing: ${token}`);
}

for (const token of [
  "fetch('/api/expand'",
  'isTikTokShortLink',
  'TikTok may still show login',
  'role="alert"',
]) {
  if (!component.includes(token)) throw new Error(`Resolver UI missing: ${token}`);
}

for (const token of [
  "'vm.tiktok.com'",
  "'vt.tiktok.com'",
  "'t.tiktok.com'",
  'parseTikTokLink',
]) {
  if (!service.includes(token)) throw new Error(`TikTok parser missing: ${token}`);
}

for (const token of [
  'MAX_REDIRECTS',
  'AbortSignal.timeout',
  "redirect: 'manual'",
  'ALLOWED_HOSTS',
  'Too many requests',
]) {
  if (!api.includes(token)) throw new Error(`Expansion API protection missing: ${token}`);
}

for (const pattern of [
  /no App Store redirect/i,
  /no login, no redirect/i,
  /automatically redirected by TikTok/i,
  /all URL cleaning happens client-side/i,
]) {
  if (pattern.test(copy) || pattern.test(index) || pattern.test(component)) {
    throw new Error(`Overstated product claim found: ${pattern}`);
  }
}

if (!Array.isArray(vercel.redirects) || !Array.isArray(vercel.rewrites)) {
  throw new Error('Vercel redirect and SPA rewrite configuration is incomplete.');
}

console.log('TikTok resolver audit passed.');
