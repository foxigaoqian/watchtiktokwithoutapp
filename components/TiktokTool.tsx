import React, { useState } from 'react';
import { isTikTokShortLink, parseTikTokLink } from '../services/tiktokService';
import { TikTokLinkInfo } from '../types';
import { Locale } from '../i18n/types';

type ExpandResponse = {
  cleanUrl?: string;
  embedUrl?: string;
  videoId?: string | null;
  type?: string;
  error?: string;
};

export const TiktokTool: React.FC<{ t: Locale }> = ({ t }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<TikTokLinkInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copyMessage, setCopyMessage] = useState('');

  const handleProcess = async () => {
    const value = input.trim();
    setError(null);
    setResult(null);
    setCopyMessage('');

    if (!value) {
      setError(t.tool.error);
      return;
    }

    const localInfo = parseTikTokLink(value);
    if (localInfo.isValid) {
      setResult(localInfo);
      return;
    }

    if (!isTikTokShortLink(value)) {
      setError(t.tool.error);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/expand', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: value }),
      });
      const data = (await response.json()) as ExpandResponse;
      if (!response.ok || !data.cleanUrl) {
        setError(data.error || 'The TikTok short link could not be expanded.');
        return;
      }

      setResult({
        originalUrl: value,
        cleanUrl: data.cleanUrl,
        embedUrl: data.embedUrl || '',
        videoId: data.videoId || null,
        isValid: true,
        type: 'full',
      });
    } catch {
      setError('The short-link resolver is temporarily unavailable. Try a full tiktok.com video link.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyMessage('Link copied.');
    } catch {
      setCopyMessage('Copy failed. Select and copy the link manually.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
        <div className="mb-6">
          <label htmlFor="tiktok-url" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">{t.tool.label}</label>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              id="tiktok-url"
              type="url"
              placeholder={t.tool.placeholder}
              className="flex-grow px-5 py-4 rounded-xl border-2 border-gray-100 focus:border-pink-500 focus:outline-none transition-all text-gray-800 font-medium placeholder:text-gray-400 shadow-sm"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => event.key === 'Enter' && handleProcess()}
              autoComplete="url"
              inputMode="url"
            />
            <button
              type="button"
              onClick={handleProcess}
              disabled={!input.trim() || loading}
              className={`px-8 py-4 rounded-xl font-bold text-white transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${loading ? 'bg-gray-400' : 'bg-black hover:bg-gray-800'}`}
            >
              {loading ? t.tool.processing : t.tool.button}
            </button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-gray-500">
            Full video links are cleaned in your browser. TikTok short links are sent to this site&apos;s resolver so their official redirect can be expanded. TikTok may still show login, consent, regional, or app prompts.
          </p>
          {error && <p className="mt-3 rounded-lg border border-red-200 bg-red-50 p-3 text-red-700 text-sm font-medium" role="alert">{error}</p>}
        </div>

        {result && (
          <div className="mt-8 pt-8 border-t border-gray-100 space-y-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4" aria-hidden="true">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900">TikTok link resolved</h3>
              <p className="text-gray-500 max-w-lg mt-2">
                The result is a standard TikTok web URL with share parameters removed. Browser behavior remains controlled by TikTok, your device, consent status, and region.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm break-all text-gray-700">
              {result.cleanUrl}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href={result.cleanUrl} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                {t.tool.openLink}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <button onClick={() => handleCopy(result.cleanUrl)} className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 text-gray-800 font-bold rounded-xl hover:bg-gray-200 transition-all">
                {t.tool.copyLink}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10" /></svg>
              </button>
            </div>
            {copyMessage && <p className="text-center text-sm text-gray-500" role="status">{copyMessage}</p>}

            {result.embedUrl && (
              <div className="mt-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-4">TikTok embed preview</p>
                <div className="aspect-[9/16] max-w-[320px] mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl border-4 border-black">
                  <iframe src={result.embedUrl} className="w-full h-full" allowFullScreen title="TikTok video preview" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
