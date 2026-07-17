import { Locale } from './types';
import { enSafe } from './en-safe';

export const locales: Record<string, Locale> = { en: enSafe };

export const localeRoutes: { path: string; locale: string; hreflang: string }[] = [
  { path: '/', locale: 'en', hreflang: 'en' },
];

export type { Locale };
