import { Locale } from './types';
import { en } from './en';
import { vi } from './vi';
import { id } from './id';
import { tl } from './tl';
import { ur } from './ur';
import { ptBR } from './pt-BR';

export const locales: Record<string, Locale> = { en, vi, id, tl, ur, 'pt-BR': ptBR };

export const localeRoutes: { path: string; locale: string; hreflang: string }[] = [
  { path: '/',      locale: 'en',   hreflang: 'en' },
  { path: '/vi',    locale: 'vi',   hreflang: 'vi' },
  { path: '/id',    locale: 'id',   hreflang: 'id' },
  { path: '/tl',    locale: 'tl',   hreflang: 'tl' },
  { path: '/ur',    locale: 'ur',   hreflang: 'ur' },
  { path: '/pt-br', locale: 'pt-BR', hreflang: 'pt-BR' },
];

export type { Locale };
