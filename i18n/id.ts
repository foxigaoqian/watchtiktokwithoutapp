import { Locale } from './types';

export const id: Locale = {
  lang: 'id',
  dir: 'ltr',
  meta: {
    title: 'Tonton TikTok Tanpa Aplikasi – Buka Link TikTok di Browser',
    description: 'Tonton TikTok tanpa mengunduh aplikasi. Tempel link TikTok dan buka langsung di browser — tanpa unduhan, tanpa login. Berfungsi di iPhone, Android, dan desktop.',
  },
  hero: {
    h1: 'Tonton TikTok',
    h1Highlight: 'Tanpa Aplikasi',
    subtitle: 'Buka link TikTok langsung di browser — tanpa instal aplikasi, tanpa redirect App Store, tanpa login. Berfungsi di iPhone, Android, dan desktop.',
  },
  tool: {
    label: 'Tempel link TikTok Anda',
    placeholder: 'https://www.tiktok.com/@username/video/12345678',
    button: 'Tonton Sekarang',
    processing: 'Memproses...',
    error: 'Masukkan link TikTok yang valid (contoh: https://www.tiktok.com/@user/video/123 atau https://vm.tiktok.com/...)',
    ready: 'Link Browser Anda Siap!',
    readyNote: 'Link pendek akan diarahkan ulang oleh TikTok. Klik di bawah untuk membuka di browser.',
    readyNoteFull: 'Kami telah menghapus semua parameter pelacakan dan pemicu redirect aplikasi.',
    openLink: 'Buka Link Bersih',
    copyLink: 'Salin Link',
  },
  faq: {
    title: 'Pertanyaan yang Sering Diajukan',
    subtitle: 'Semua yang perlu Anda ketahui tentang menonton TikTok tanpa aplikasi.',
    items: [
      { q: 'Bisakah saya menonton TikTok tanpa menginstal aplikasi?', a: 'Ya. Alat ini memungkinkan Anda menonton video TikTok publik langsung di browser tanpa mengunduh aplikasi TikTok.' },
      { q: 'Mengapa link TikTok mengarahkan ke App Store?', a: 'TikTok menggunakan deep link dan parameter redirect yang memicu App Store. Alat kami menghapus parameter ini agar Anda tetap di browser.' },
      { q: 'Apakah ini berfungsi di Safari iPhone?', a: 'Ya. Berfungsi di Safari, Chrome, Firefox, dan sebagian besar browser mobile di iOS dan Android.' },
      { q: 'Apakah saya perlu akun TikTok?', a: 'Tidak. Video TikTok publik dapat ditonton tanpa akun atau login.' },
      { q: 'Apakah alat ini aman?', a: 'Ya. Kami tidak menyimpan riwayat atau link yang Anda tempel. Semua pemrosesan terjadi di browser Anda.' },
      { q: 'Bagaimana cara menonton TikTok di PC tanpa aplikasi?', a: 'Tempel link TikTok ke alat di atas dan klik Buka. Video akan terbuka langsung di browser desktop Anda.' },
      { q: 'Apakah ini berfungsi dengan link pendek TikTok (vm.tiktok.com)?', a: 'Ya. Alat ini menangani link tiktok.com standar, link pendek vm.tiktok.com, dan t.tiktok.com.' },
      { q: 'Bisakah menonton TikTok tanpa aplikasi di Android?', a: 'Ya. Buka halaman ini di Chrome atau browser Android, tempel link TikTok, dan video akan diputar tanpa membuka aplikasi TikTok.' },
    ],
  },
  seo: {
    h2Open: 'Buka Link TikTok Langsung di Browser',
    pOpen: 'Link TikTok sering memaksa pengguna membuka aplikasi atau redirect ke App Store. Alat kami membantu Anda menonton video TikTok langsung di browser dengan membersihkan parameter redirect.',
    h2Why: 'Mengapa TikTok Memaksa Anda Mengunduh Aplikasi',
    pWhy: 'TikTok menggunakan parameter redirect khusus yang memicu pembukaan aplikasi otomatis. Alat kami menghapusnya agar video terbuka langsung di browser.',
    h2PC: 'Tonton TikTok di PC Tanpa Aplikasi',
    pPC: 'Di desktop, link TikTok sering meminta Anda mengunduh aplikasi. Alat kami melewati ini dengan menghasilkan URL embed langsung.',
    h2NoAccount: 'Tonton TikTok Tanpa Akun',
    pNoAccount: 'Video TikTok publik dapat diakses tanpa login. Alat ini tidak pernah meminta kredensial Anda.',
  },
  tools: {
    sectionTitle: 'Alat TikTok Lainnya',
    sectionSubtitle: 'Utilitas gratis untuk bekerja dengan link dan profil TikTok.',
  },
  nav: { noApp: 'Tanpa Aplikasi', privacy: 'Fokus Privasi', mobile: 'Dioptimalkan Mobile' },
};
