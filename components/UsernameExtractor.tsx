import React, { useState } from 'react';

export const UsernameExtractor: React.FC = () => {
  const [input, setInput] = useState('');
  const [username, setUsername] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const extract = () => {
    const match = input.trim().match(/tiktok\.com\/@([^/?&\s]+)/);
    if (match) {
      setUsername(match[1]);
      setError(null);
    } else {
      setUsername(null);
      setError('No username found. Paste a full TikTok video or profile link.');
    }
  };

  const copy = () => username && navigator.clipboard.writeText('@' + username);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-black mb-1">TikTok Username Extractor</h3>
      <p className="text-sm text-gray-500 mb-4">Extract the @username from any TikTok link.</p>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="https://www.tiktok.com/@username/video/..."
          className="flex-grow px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-pink-500 focus:outline-none text-sm"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && extract()}
        />
        <button onClick={extract} disabled={!input} className="px-6 py-3 bg-black text-white font-bold rounded-xl disabled:opacity-50">
          Extract
        </button>
      </div>
      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
      {username && (
        <div className="mt-4 flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
          <span className="font-mono font-bold text-lg flex-grow">@{username}</span>
          <button onClick={copy} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-bold">Copy</button>
          <a href={`https://www.tiktok.com/@${username}`} target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-black text-white rounded-lg text-sm font-bold">Profile</a>
        </div>
      )}
    </div>
  );
};
