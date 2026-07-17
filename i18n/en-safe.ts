import { Locale } from './types';
import { en as legacyEn } from './en';

export const enSafe: Locale = {
  ...legacyEn,
  meta: {
    title: 'TikTok Link Expander & Browser Link Cleaner',
    description: 'Expand official TikTok short links and remove common share parameters from full TikTok URLs. Get a standard web link and embed preview when available.',
  },
  hero: {
    h1: 'TikTok Link',
    h1Highlight: 'Expander & Cleaner',
    subtitle: 'Expand official TikTok short links and generate a standard web URL. TikTok may still show login, consent, regional, or app-opening prompts.',
  },
  tool: {
    ...legacyEn.tool,
    label: 'Paste an official TikTok link',
    placeholder: 'https://vm.tiktok.com/... or https://www.tiktok.com/@user/video/...',
    button: 'Resolve Link',
    processing: 'Expanding short link...',
    error: 'Paste a valid HTTPS link on tiktok.com, vm.tiktok.com, vt.tiktok.com, or t.tiktok.com.',
    ready: 'TikTok Link Resolved',
    readyNote: 'The official short-link redirect was expanded by this site’s server.',
    readyNoteFull: 'Common share parameters were removed from the standard TikTok web URL.',
    openLink: 'Open TikTok Web Link',
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'What link cleaning can and cannot control.',
    items: [
      { q: 'Can this guarantee that TikTok stays in my browser?', a: 'No. The tool creates a standard TikTok web URL, but TikTok and your device control login, consent, regional, and app-opening prompts.' },
      { q: 'What happens with TikTok short links?', a: 'Official vm.tiktok.com, vt.tiktok.com, and t.tiktok.com links are sent to this site’s resolver, which follows TikTok’s redirect chain.' },
      { q: 'What happens with a full video link?', a: 'The username and numeric video ID are read in your browser and used to build a standard URL without common share parameters.' },
      { q: 'Do I always get a preview?', a: 'No. A preview is shown only when a public numeric video ID is available and TikTok permits the embed to load.' },
      { q: 'Do I need a TikTok account?', a: 'This tool does not request credentials. TikTok may still require login or consent for some videos, devices, or regions.' },
      { q: 'Are pasted links stored?', a: 'Full links can be cleaned locally. Short links must be sent to the resolver, and hosting or security systems may process standard request data.' },
      { q: 'Which domains are accepted?', a: 'Only HTTPS links on official tiktok.com, vm.tiktok.com, vt.tiktok.com, and t.tiktok.com hosts are accepted.' },
      { q: 'Why did a short link fail?', a: 'The redirect may have expired, the video may be unavailable, or TikTok may have blocked the resolver request.' },
    ],
  },
  seo: {
    h2Open: 'Expand TikTok Short Links',
    pOpen: 'TikTok share links often use official redirect domains. The resolver follows that redirect chain and returns the final web address when available.',
    h2Why: 'Clean Common TikTok Share Parameters',
    pWhy: 'Full video links can include share parameters. The tool rebuilds a standard URL from the username and numeric video ID.',
    h2PC: 'Open a Standard TikTok Web URL',
    pPC: 'Use the resolved URL on desktop or mobile. Whether the page plays, requests login, or opens the app remains controlled by TikTok and your device.',
    h2NoAccount: 'No Credentials Requested by This Tool',
    pNoAccount: 'The resolver never asks for a TikTok password. TikTok itself may still require an account for particular content.',
  },
  nav: {
    noApp: 'Standard Web Links',
    privacy: 'Clear Data Scope',
    mobile: 'Mobile Friendly',
  },
};
