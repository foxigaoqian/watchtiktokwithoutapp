import React, { useState } from 'react';

export const ProfileLinkGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [profileUrl, setProfileUrl] = useState<string | null>(null);

  const generate = () => {
    const clean = input.trim().replace(/^@/, '');
    if (clean) setProfileUrl(`https://www.tiktok.com/@${clean}`);
  };

  const copy = () => profileUrl && navigator.clipboard.writeText(profileUrl);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-black mb-1">TikTok Profile Link Generator</h3>
      <p className="text-sm text-gray-500 mb-4">Enter a username to get a clean TikTok profile link.</p>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-grow flex items-center border-2 border-gray-100 focus-within:border-pink-500 rounded-xl overflow-hidden">
          <span className="px-3 text-gray-400 font-bold">@</span>
          <input
            type="text"
            placeholder="username"
            className="flex-grow py-3 pr-4 focus:outline-none text-sm"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && generate()}
          />
        </div>
        <button onClick={generate} disabled={!input} className="px-6 py-3 bg-black text-white font-bold rounded-xl disabled:opacity-50">
          Generate
        </button>
      </div>
      {profileUrl && (
        <div className="mt-4 flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
          <span className="font-mono text-sm flex-grow break-all">{profileUrl}</span>
          <button onClick={copy} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-bold shrink-0">Copy</button>
          <a href={profileUrl} target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-black text-white rounded-lg text-sm font-bold shrink-0">Open</a>
        </div>
      )}
    </div>
  );
};
