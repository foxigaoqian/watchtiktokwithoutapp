export interface Locale {
  lang: string;
  dir: 'ltr' | 'rtl';
  meta: { title: string; description: string };
  hero: { h1: string; h1Highlight: string; subtitle: string };
  tool: { label: string; placeholder: string; button: string; processing: string; error: string; ready: string; readyNote: string; readyNoteFull: string; openLink: string; copyLink: string };
  faq: { title: string; subtitle: string; items: { q: string; a: string }[] };
  seo: {
    h2Open: string; pOpen: string;
    h2Why: string; pWhy: string;
    h2PC: string; pPC: string;
    h2NoAccount: string; pNoAccount: string;
    h2Download?: string; pDownload?: string;
  };
  tools: { sectionTitle: string; sectionSubtitle: string };
  nav: { noApp: string; privacy: string; mobile: string };
  toolPages: {
    usernameExtractor: { title: string; description: string; h1: string; subtitle: string; label: string; placeholder: string; button: string; resultLabel: string; copyBtn: string; profileBtn: string; errorMsg: string; howTitle: string; howSteps: string[]; faqItems: { q: string; a: string }[] };
    videoIdExtractor: { title: string; description: string; h1: string; subtitle: string; label: string; placeholder: string; button: string; resultLabel: string; copyBtn: string; embedBtn: string; errorMsg: string; howTitle: string; howSteps: string[]; faqItems: { q: string; a: string }[] };
    profileLinkGenerator: { title: string; description: string; h1: string; subtitle: string; label: string; placeholder: string; button: string; copyBtn: string; openBtn: string; howTitle: string; howSteps: string[]; faqItems: { q: string; a: string }[] };
    bulkLinkCleaner: { title: string; description: string; h1: string; subtitle: string; label: string; placeholder: string; button: string; copyAllBtn: string; validLabel: string; howTitle: string; howSteps: string[]; faqItems: { q: string; a: string }[] };
  };
}
