import React, { useState } from 'react';
import { Locale } from '../i18n/types';
import { ToolPageLayout } from './ToolPageLayout';

export const ProfileLinkGeneratorPage: React.FC<{ t: Locale }> = ({ t }) => {
  const tp = t.toolPages.profileLinkGenerator;
  const [input, setInput] = useState('');
  const [profileUrl, setProfileUrl] = useState<string | null>(null);

  const generate = () => {
    const clean = input.trim().replace(/^@/, '');
    if (clean) setProfileUrl(`https://www.tiktok.com/@${clean}`);
  };

  return (
    <ToolPageLayout t={t} title={tp.title} description={tp.description} h1={tp.h1} subtitle={tp.subtitle} howTitle={tp.howTitle} howSteps={tp.howSteps} faqItems={tp.faqItems}>
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">{tp.label}</label>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-grow flex items-center border-2 border-gray-100 focus-within:border-pink-500 rounded-xl overflow-hidden">
            <span className="px-3 text-gray-400 font-bold">@</span>
            <input type="text" placeholder={tp.placeholder} className="flex-grow py-3 pr-4 focus:outline-none text-sm" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && generate()} />
          </div>
          <button type="button" onClick={generate} disabled={!input} className="px-6 py-3 bg-black text-white font-bold rounded-xl disabled:opacity-50">{tp.button}</button>
        </div>
        {profileUrl && (
          <div className="mt-4 flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
            <span className="font-mono text-sm flex-grow break-all">{profileUrl}</span>
            <button type="button" onClick={() => navigator.clipboard.writeText(profileUrl)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-bold shrink-0">{tp.copyBtn}</button>
            <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white rounded-lg text-sm font-bold shrink-0">{tp.openBtn}</a>
          </div>
        )}
      </div>
    </ToolPageLayout>
  );
};
