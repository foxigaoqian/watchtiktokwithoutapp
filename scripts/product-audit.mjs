import fs from 'node:fs';

const read = file => fs.readFileSync(file,'utf8');
const index=read('index.html');
const component=read('components/TiktokTool.tsx');
const seo=read('components/CompleteSeoContent.tsx');
const service=read('services/tiktokService.ts');
const api=read('api/expand.js');
const copy=read('i18n/en-safe.ts');
const vercel=JSON.parse(read('vercel.json'));

for(const token of ['TikTok Link Expander & Browser Link Cleaner','rel="canonical" href="https://watchtiktokwithoutapp.com/"','FAQPage','How to open a TikTok link in a browser','Short links vs full links','Troubleshooting']) if(!index.includes(token)) throw new Error(`Homepage missing: ${token}`);
if((index.match(/<h2>/g)||[]).length<6) throw new Error('Homepage static content is too thin.');
for(const token of ['Short links vs full links','What the tool can and cannot do','Troubleshooting TikTok links','Frequently asked questions','Related TikTok link tools']) if(!seo.includes(token)) throw new Error(`SEO component missing: ${token}`);
for(const token of ["fetch('/api/expand'",'isTikTokShortLink','TikTok may still show login','role="alert"']) if(!component.includes(token)) throw new Error(`Resolver UI missing: ${token}`);
for(const token of ["'vm.tiktok.com'","'vt.tiktok.com'","'t.tiktok.com'",'parseTikTokLink']) if(!service.includes(token)) throw new Error(`Parser missing: ${token}`);
for(const token of ['MAX_REDIRECTS','AbortSignal.timeout',"redirect: 'manual'",'ALLOWED_HOSTS','Too many requests']) if(!api.includes(token)) throw new Error(`API protection missing: ${token}`);
for(const pattern of [/no App Store redirect/i,/no login, no redirect/i,/automatically redirected by TikTok/i,/all URL cleaning happens client-side/i]) if(pattern.test(copy)||pattern.test(index)||pattern.test(component)||pattern.test(seo)) throw new Error(`Overstated claim: ${pattern}`);
if(!Array.isArray(vercel.redirects)||!Array.isArray(vercel.rewrites)) throw new Error('Vercel routing is incomplete.');
console.log('TikTok complete on-page SEO and resolver audit passed.');
