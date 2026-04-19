import { Locale } from './types';

export const vi: Locale = {
  lang: 'vi',
  dir: 'ltr',
  meta: {
    title: 'Xem TikTok Không Cần Cài App – Mở Link TikTok Trên Trình Duyệt',
    description: 'Xem TikTok không cần tải app. Dán link TikTok bất kỳ và mở trực tiếp trên trình duyệt — không cần tải xuống, không cần đăng nhập. Hoạt động trên iPhone, Android và máy tính.',
  },
  hero: {
    h1: 'Xem TikTok',
    h1Highlight: 'Không Cần App',
    subtitle: 'Mở link TikTok trực tiếp trên trình duyệt — không cần cài app, không chuyển hướng App Store, không cần đăng nhập. Hoạt động trên iPhone, Android và máy tính.',
  },
  tool: {
    label: 'Dán link TikTok của bạn',
    placeholder: 'https://www.tiktok.com/@username/video/12345678',
    button: 'Xem Ngay',
    processing: 'Đang xử lý...',
    error: 'Vui lòng nhập link TikTok hợp lệ (ví dụ: https://www.tiktok.com/@user/video/123 hoặc https://vm.tiktok.com/...)',
    ready: 'Link Trình Duyệt Của Bạn Đã Sẵn Sàng!',
    readyNote: 'Link rút gọn sẽ được TikTok tự động chuyển hướng. Nhấn bên dưới để mở trên trình duyệt.',
    readyNoteFull: 'Chúng tôi đã xóa tất cả tham số theo dõi và kích hoạt chuyển hướng app.',
    openLink: 'Mở Link Sạch',
    copyLink: 'Sao Chép Link',
  },
  faq: {
    title: 'Câu Hỏi Thường Gặp',
    subtitle: 'Tất cả những gì bạn cần biết về xem TikTok không cần app.',
    items: [
      { q: 'Tôi có thể xem TikTok mà không cài app không?', a: 'Có. Công cụ này cho phép bạn xem video TikTok công khai trực tiếp trên trình duyệt mà không cần tải app TikTok.' },
      { q: 'Tại sao link TikTok lại chuyển hướng đến App Store?', a: 'TikTok sử dụng deep link và tham số chuyển hướng kích hoạt App Store. Công cụ của chúng tôi loại bỏ các tham số này để bạn ở lại trình duyệt.' },
      { q: 'Có hoạt động trên Safari iPhone không?', a: 'Có. Hoạt động trên Safari, Chrome, Firefox và hầu hết trình duyệt di động trên iOS và Android.' },
      { q: 'Tôi có cần tài khoản TikTok không?', a: 'Không. Video TikTok công khai có thể xem mà không cần tài khoản hay đăng nhập.' },
      { q: 'Công cụ này có an toàn không?', a: 'Có. Chúng tôi không lưu lịch sử hay link bạn dán. Tất cả xử lý diễn ra trên trình duyệt của bạn.' },
      { q: 'Làm sao xem TikTok trên máy tính không cần app?', a: 'Dán link TikTok vào công cụ trên và nhấn Mở. Video sẽ mở trực tiếp trên trình duyệt máy tính.' },
      { q: 'Có hoạt động với link rút gọn TikTok (vm.tiktok.com) không?', a: 'Có. Công cụ xử lý link tiktok.com thông thường, link rút gọn vm.tiktok.com và t.tiktok.com.' },
      { q: 'Có thể xem TikTok không cần app trên Android không?', a: 'Có. Mở trang này trên Chrome hoặc trình duyệt Android, dán link TikTok và video sẽ phát mà không mở app TikTok.' },
    ],
  },
  seo: {
    h2Open: 'Mở Link TikTok Trực Tiếp Trên Trình Duyệt',
    pOpen: 'Link TikTok thường buộc người dùng mở app hoặc chuyển hướng đến App Store. Công cụ của chúng tôi giúp bạn xem video TikTok trực tiếp trên trình duyệt bằng cách xóa các tham số chuyển hướng.',
    h2Why: 'Tại Sao TikTok Bắt Bạn Tải App',
    pWhy: 'TikTok sử dụng tham số chuyển hướng đặc biệt kích hoạt mở app tự động. Công cụ của chúng tôi loại bỏ chúng để video mở trực tiếp trên trình duyệt — không tải xuống, không đăng nhập.',
    h2PC: 'Xem TikTok Trên Máy Tính Không Cần App',
    pPC: 'Trên máy tính, link TikTok thường nhắc bạn tải app. Công cụ của chúng tôi bỏ qua điều này bằng cách tạo URL nhúng trực tiếp.',
    h2NoAccount: 'Xem TikTok Không Cần Tài Khoản',
    pNoAccount: 'Video TikTok công khai có thể xem mà không cần đăng nhập. Công cụ này không yêu cầu thông tin đăng nhập của bạn.',
  },
  tools: {
    sectionTitle: 'Công Cụ TikTok Khác',
    sectionSubtitle: 'Tiện ích miễn phí để làm việc với link và hồ sơ TikTok.',
  },
  nav: { noApp: 'Không Cần App', privacy: 'Bảo Mật', mobile: 'Tối Ưu Di Động' },
};
