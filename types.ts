
export interface TikTokLinkInfo {
  originalUrl: string;
  cleanUrl: string;
  embedUrl: string;
  videoId: string | null;
  isValid: boolean;
  type: 'full' | 'short' | 'unknown';
}

export interface FAQItem {
  question: string;
  answer: string;
}
