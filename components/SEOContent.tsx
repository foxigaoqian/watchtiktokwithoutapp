import React from 'react';
import { Locale } from '../i18n/types';
import { CompleteSeoContent } from './CompleteSeoContent';

export const SEOContent: React.FC<{ t: Locale }> = ({ t }) => (
  <>
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div><h2 className="text-3xl font-black mb-4">{t.seo.h2Open}</h2><p className="leading-8 text-gray-600">{t.seo.pOpen}</p></div>
        <div className="bg-gray-50 p-8 rounded-2xl border">
          <h2 className="text-2xl font-black mb-4">What happens to the link</h2>
          <ol className="space-y-3 text-sm text-gray-600"><li>The official host is validated.</li><li>Supported short links are expanded.</li><li>Recognized share parameters are removed.</li><li>A standard web link is created when possible.</li></ol>
        </div>
      </div>
      <div className="mt-16"><h2 className="text-3xl font-black mb-5">{t.seo.h2Why}</h2><p className="leading-8 text-gray-600">{t.seo.pWhy}</p></div>
    </div>
    <div className="mt-20"><CompleteSeoContent /></div>
  </>
);
