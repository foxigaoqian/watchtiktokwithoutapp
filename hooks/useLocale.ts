import { useParams } from 'react-router-dom';
import { locales } from '../i18n';

export const useLocale = () => {
  const { lang } = useParams<{ lang?: string }>();
  const key = lang ?? 'en';
  return locales[key] ?? locales['en'];
};
