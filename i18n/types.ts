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
  };
  tools: { sectionTitle: string; sectionSubtitle: string };
  nav: { noApp: string; privacy: string; mobile: string };
}
