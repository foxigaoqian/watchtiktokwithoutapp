import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Locale } from '../i18n/types';

interface ToolPageLayoutProps {
  t: Locale;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  howTitle: string;
  howSteps: string[];
  faqItems: { q: string; a: string }[];
  children: React.ReactNode;
}

export const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({ t, title, description, h1, subtitle, howTitle, howSteps, faqItems, children }) => {
  const { lang } = useParams<{ lang?: string }>();
  const base = lang ? `/${lang}` : '';

  React.useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: h1,
    description,
    url: `https://watchtiktokwithoutapp.com${base}${window.location.pathname.replace(base, '')}`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  return (
    <div className="min-h-screen bg-gray-50" dir={t.dir}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container mx-auto px-4 text-sm text-gray-500">
          <Link to={base || '/'} className="hover:text-black">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{h1}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-4">{h1}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
        </div>
      </section>

      {/* Tool */}
      <div className="container mx-auto px-4 -mt-8 relative z-10 max-w-3xl">
        {children}
      </div>

      {/* How it works */}
      <section className="py-16 container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-black mb-6">{howTitle}</h2>
        <ol className="space-y-3">
          {howSteps.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-black text-white text-sm flex items-center justify-center font-bold shrink-0">{i + 1}</span>
              <span className="text-gray-700 pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="py-8 pb-16 container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-black mb-6">FAQ</h2>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-600 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
