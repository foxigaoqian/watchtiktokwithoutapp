import React, { useState } from 'react';
import { parseTikTokLink } from '../services/tiktokService';
import { TikTokLinkInfo } from '../types';
import { Locale } from '../i18n/types';

export const TiktokTool: React.FC<{ t: Locale }> = ({ t }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<TikTokLinkInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleProcess = () => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      const info = parseTikTokLink(input);
      if (info.isValid) { setResult(info); } else { setError(t.tool.error); setResult(null); }
      setLoading(false);
    }, 600);
  };

  const handleCopy = (text: string) => { navigator.clipboard.writeText(text); };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
        <div className="mb-6">
          <label htmlFor="tiktok-url" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">{t.tool.label}</label>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              id="tiktok-url" type="text" placeholder={t.tool.placeholder}
              className="flex-grow px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-pink-500 focus:outline-none transition-all text-gray-800 font-medium placeholder:text-gray-400 shadow-sm"
              value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleProcess()}
            />
            <button type="button" onClick={handleProcess} disabled={!input || loading}
              className={`px-8 py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${loading ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'}`}>
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t.tool.processing}
                </span>
              ) : t.tool.button}
            </button>
          </div>
          {error && <p className="mt-3 text-red-500 text-sm font-medium">{error}</p>}
        </div>

        {result && (
          <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900">{t.tool.ready}</h3>
              <p className="text-gray-500 max-w-sm mt-2">{result.type === 'short' ? t.tool.readyNote : t.tool.readyNoteFull}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href={result.cleanUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                {t.tool.openLink}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
              <button onClick={() => handleCopy(result.cleanUrl)}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition-all">
                {t.tool.copyLink}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                </svg>
              </button>
            </div>
            {result.embedUrl && (
              <div className="mt-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-4">Preview</p>
                <div className="aspect-[9/16] max-w-[320px] mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl border-4 border-black">
                  <iframe src={result.embedUrl} className="w-full h-full" allowFullScreen title="TikTok Video Preview"></iframe>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
