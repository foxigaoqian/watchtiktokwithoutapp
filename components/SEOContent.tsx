import React from 'react';
import { Locale } from '../i18n/types';

export const SEOContent: React.FC<{ t: Locale }> = ({ t }) => (
  <div className="max-w-4xl mx-auto prose prose-slate prose-headings:font-black prose-p:text-gray-600 prose-li:text-gray-600">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-3xl mb-4">{t.seo.h2Open}</h2>
        <p>{t.seo.pOpen}</p>
      </div>
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
        <h2 className="text-2xl mb-4">How This Tool Works</h2>
        <ul className="space-y-3 list-none pl-0">
          {["Paste any TikTok share link","The tool identifies the Video ID","Redirect and tracking parameters are removed","A clean browser-safe link is generated","The video opens directly in your browser"].map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-bold">{idx + 1}</span>
              <span className="text-sm font-medium">{step}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-16">
      <h2 className="text-3xl mb-6">{t.seo.h2Why}</h2>
      <p className="text-lg">{t.seo.pWhy}</p>
    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {[{ title: "Standard Links", examples: "tiktok.com/@user/video/..." },{ title: "Short Links", examples: "vm.tiktok.com/..." },{ title: "T-Mobile Links", examples: "t.tiktok.com/..." }].map((type, idx) => (
        <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:border-pink-300 transition-colors">
          <h3 className="text-lg font-bold mb-2">{type.title}</h3>
          <p className="text-sm font-mono text-gray-400 break-all">{type.examples}</p>
        </div>
      ))}
    </div>

    <div className="mt-16 grid md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-2xl font-black mb-4">{t.seo.h2PC}</h2>
        <p className="text-gray-600">{t.seo.pPC}</p>
      </div>
      <div>
        <h2 className="text-2xl font-black mb-4">{t.seo.h2NoAccount}</h2>
        <p className="text-gray-600">{t.seo.pNoAccount}</p>
      </div>
    </div>
  </div>
);
