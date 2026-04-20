import React, { useState } from 'react';
import { Locale } from '../i18n/types';
import { ToolPageLayout } from './ToolPageLayout';

export const UsernameExtractorPage: React.FC<{ t: Locale }> = ({ t }) => {
  const tp = t.toolPages.usernameExtractor;
  const [input, setInput] = useState('');
  const [username, setUsername] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const extract = () => {
    const match = input.trim().match(/tiktok\.com\/@([^/?&\s]+)/);
    if (match) { setUsername(match[1]); setError(null); }
    else { setUsername(null); setError(tp.errorMsg); }
  };

  return (
    <ToolPageLayout t={t} title={tp.title} description={tp.description} h1={tp.h1} subtitle={tp.subtitle} howTitle={tp.howTitle} howSteps={tp.howSteps} faqItems={tp.faqItems}>
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">{tp.label}</label>
        <div className="flex flex-col md:flex-row gap-3">
          <input type="text" placeholder={tp.placeholder} className="flex-grow px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-pink-500 focus:outline-none text-sm" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && extract()} />
          <button type="button" onClick={extract} disabled={!input} className="px-6 py-3 bg-black text-white font-bold rounded-xl disabled:opacity-50">{tp.button}</button>
        </div>
        {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
        {username && (
          <div className="mt-4 flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
            <span className="font-mono font-bold text-lg flex-grow">@{username}</span>
            <button type="button" onClick={() => navigator.clipboard.writeText('@' + username)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-bold">{tp.copyBtn}</button>
            <a href={`https://www.tiktok.com/@${username}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white rounded-lg text-sm font-bold">{tp.profileBtn}</a>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
