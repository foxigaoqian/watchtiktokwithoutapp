import { Locale } from './types';

export const en: Locale = {
  lang: 'en',
  dir: 'ltr',
  meta: {
    title: 'Watch TikTok Without App – Open TikTok Links in Browser',
    description: 'Watch TikTok without the app. Paste any TikTok link and open it directly in your browser — no download, no login, no redirect. Works on iPhone, Android, and desktop.',
  },
  hero: {
    h1: 'Watch TikTok',
    h1Highlight: 'Without App',
    subtitle: 'Open any TikTok link directly in your browser — no app install, no App Store redirect, no login required. Works on iPhone, Android, and desktop.',
  },
  tool: {
    label: 'Paste your TikTok link',
    placeholder: 'https://www.tiktok.com/@username/video/12345678',
    button: 'Watch Now',
    processing: 'Processing...',
    error: 'Please enter a valid TikTok link (e.g., https://www.tiktok.com/@user/video/123 or https://vm.tiktok.com/...)',
    ready: 'Your Browser-Safe Link is Ready!',
    readyNote: "Shortened links will be automatically redirected by TikTok. Click below to open in browser.",
    readyNoteFull: "We've removed all tracking parameters and app-redirect triggers.",
    openLink: 'Open Clean Link',
    copyLink: 'Copy Link',
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about watching TikTok without the app.',
    items: [
      { q: 'Can I watch TikTok without installing the app?', a: "Yes. This tool lets you watch public TikTok videos directly in your browser without downloading the TikTok app." },
      { q: 'Why do TikTok links redirect to the App Store?', a: "TikTok uses deep links and redirect parameters (like _r=1) that trigger the App Store. Our tool strips these so you stay in the browser." },
      { q: 'Does this work on iPhone Safari?', a: "Yes. It works on Safari, Chrome, Firefox, and most mobile browsers on both iOS and Android." },
      { q: 'Do I need a TikTok account?', a: "No. Public TikTok videos can be viewed without an account or login." },
      { q: 'Is it safe to use this tool?', a: "Yes. We don't store your history or the links you paste. All URL cleaning happens client-side." },
      { q: 'How do I watch TikTok on PC without the app?', a: "Paste your TikTok link into the tool above and click Open. The video will open directly in your desktop browser." },
      { q: 'Does this work with TikTok short links (vm.tiktok.com)?', a: "Yes. The tool handles standard tiktok.com links, short vm.tiktok.com links, and t.tiktok.com links." },
      { q: 'Can I watch TikTok without the app on Android?', a: "Yes. Open this page in Chrome or any Android browser, paste your TikTok link, and the video will play without opening the TikTok app." },
    ],
  },
  seo: {
    h2Open: 'Open TikTok Links Directly in Your Browser',
    pOpen: 'TikTok links often force users to open the mobile app or redirect to the App Store. Our tool helps you watch TikTok videos directly in your browser by cleaning the links of redirect parameters.',
    h2Why: 'Why TikTok Forces You to Download the App',
    pWhy: "TikTok uses special redirect parameters and shortened URLs that trigger automatic app opening. Our tool strips these so videos open directly in your browser — no download, no login, no redirect.",
    h2PC: 'Watch TikTok on PC Without the App',
    pPC: 'On desktop, TikTok links often prompt you to download the app. Our tool bypasses this by generating a direct embed URL, so you can watch TikTok on PC without any app or account.',
    h2NoAccount: 'Watch TikTok Without Account',
    pNoAccount: 'Public TikTok videos are accessible without signing in. This tool never asks for your credentials — just paste the link and watch TikTok without an account.',
  },
  tools: {
    sectionTitle: 'More TikTok Tools',
    sectionSubtitle: 'Free utilities to work with TikTok links and profiles.',
  },
  nav: { noApp: 'No App Required', privacy: 'Privacy Focused', mobile: 'Mobile Optimized' },
};
