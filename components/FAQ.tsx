import React, { useState } from 'react';
import { Locale } from '../i18n/types';

const AccordionItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-full py-6 flex items-center justify-between text-left focus:outline-none">
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-pink-600' : 'text-gray-900'}`}>{q}</span>
        <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-pink-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC<{ t: Locale }> = ({ t }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": t.faq.items.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  return (
    <div className="max-w-3xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black mb-4">{t.faq.title}</h2>
        <p className="text-gray-500">{t.faq.subtitle}</p>
      </div>
      <div className="space-y-0">
        {t.faq.items.map((item, i) => <AccordionItem key={i} q={item.q} a={item.a} />)}
      </div>
    </div>
  );
};
