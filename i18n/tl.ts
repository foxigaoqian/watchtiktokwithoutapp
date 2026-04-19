import { Locale } from './types';

export const tl: Locale = {
  lang: 'tl',
  dir: 'ltr',
  meta: {
    title: 'Manood ng TikTok Nang Walang App – Buksan ang TikTok Links sa Browser',
    description: 'Manood ng TikTok nang walang app. I-paste ang anumang TikTok link at buksan ito direkta sa iyong browser — walang download, walang login. Gumagana sa iPhone, Android, at desktop.',
  },
  hero: {
    h1: 'Manood ng TikTok',
    h1Highlight: 'Nang Walang App',
    subtitle: 'Buksan ang anumang TikTok link direkta sa iyong browser — walang app install, walang App Store redirect, walang login. Gumagana sa iPhone, Android, at desktop.',
  },
  tool: {
    label: 'I-paste ang iyong TikTok link',
    placeholder: 'https://www.tiktok.com/@username/video/12345678',
    button: 'Panoorin Ngayon',
    processing: 'Pinoproseso...',
    error: 'Mangyaring maglagay ng valid na TikTok link (hal. https://www.tiktok.com/@user/video/123 o https://vm.tiktok.com/...)',
    ready: 'Handa na ang Iyong Browser-Safe Link!',
    readyNote: 'Ang mga pinaikling link ay awtomatikong ire-redirect ng TikTok. I-click sa ibaba para buksan sa browser.',
    readyNoteFull: 'Inalis namin ang lahat ng tracking parameters at app-redirect triggers.',
    openLink: 'Buksan ang Clean Link',
    copyLink: 'Kopyahin ang Link',
  },
  faq: {
    title: 'Mga Madalas Itanong',
    subtitle: 'Lahat ng kailangan mong malaman tungkol sa panonood ng TikTok nang walang app.',
    items: [
      { q: 'Maaari bang manood ng TikTok nang hindi nag-iinstall ng app?', a: 'Oo. Pinapayagan ka ng tool na ito na manood ng mga pampublikong TikTok video direkta sa iyong browser nang hindi dina-download ang TikTok app.' },
      { q: 'Bakit nire-redirect ang mga TikTok link sa App Store?', a: 'Gumagamit ang TikTok ng mga deep link at redirect parameter na nag-trigger ng App Store. Inaalis ng aming tool ang mga ito para manatili ka sa browser.' },
      { q: 'Gumagana ba ito sa iPhone Safari?', a: 'Oo. Gumagana sa Safari, Chrome, Firefox, at karamihan sa mga mobile browser sa iOS at Android.' },
      { q: 'Kailangan ko ba ng TikTok account?', a: 'Hindi. Ang mga pampublikong TikTok video ay maaaring panoorin nang walang account o login.' },
      { q: 'Ligtas ba ang tool na ito?', a: 'Oo. Hindi namin iniimbak ang iyong kasaysayan o mga link na ini-paste mo. Lahat ng URL cleaning ay nangyayari sa iyong browser.' },
      { q: 'Paano manood ng TikTok sa PC nang walang app?', a: 'I-paste ang iyong TikTok link sa tool sa itaas at i-click ang Buksan. Magbubukas ang video direkta sa iyong desktop browser.' },
      { q: 'Gumagana ba ito sa mga maikling TikTok link (vm.tiktok.com)?', a: 'Oo. Hinahawakan ng tool ang mga standard na tiktok.com link, maikling vm.tiktok.com link, at t.tiktok.com link.' },
      { q: 'Maaari bang manood ng TikTok nang walang app sa Android?', a: 'Oo. Buksan ang page na ito sa Chrome o anumang Android browser, i-paste ang iyong TikTok link, at maglalaro ang video nang hindi binubuksan ang TikTok app.' },
    ],
  },
  seo: {
    h2Open: 'Buksan ang mga TikTok Link Direkta sa Iyong Browser',
    pOpen: 'Ang mga TikTok link ay madalas na pinipilit ang mga user na buksan ang mobile app o mag-redirect sa App Store. Tinutulungan ka ng aming tool na manood ng mga TikTok video direkta sa iyong browser.',
    h2Why: 'Bakit Pinipilit ka ng TikTok na Mag-download ng App',
    pWhy: 'Gumagamit ang TikTok ng mga espesyal na redirect parameter na nag-trigger ng awtomatikong pagbubukas ng app. Inaalis ng aming tool ang mga ito para direktang mabuksan ang mga video sa browser.',
    h2PC: 'Manood ng TikTok sa PC Nang Walang App',
    pPC: 'Sa desktop, ang mga TikTok link ay madalas na nag-uudyok sa iyo na mag-download ng app. Nilalampasan ng aming tool ito sa pamamagitan ng pagbuo ng direktang embed URL.',
    h2NoAccount: 'Manood ng TikTok Nang Walang Account',
    pNoAccount: 'Ang mga pampublikong TikTok video ay naa-access nang walang pag-sign in. Hindi kailanman hihilingin ng tool na ito ang iyong mga kredensyal.',
  },
  tools: {
    sectionTitle: 'Iba Pang TikTok Tools',
    sectionSubtitle: 'Mga libreng utility para sa pagtatrabaho sa mga TikTok link at profile.',
  },
  nav: { noApp: 'Walang App', privacy: 'Privacy Focused', mobile: 'Mobile Optimized' },
};
