import React, { useState } from 'react';

export const VideoIdExtractor: React.FC = () => {
  const [input, setInput] = useState('');
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const extract = () => {
    const match = input.trim().match(/\/video\/(\d+)/);
    if (match) {
      setVideoId(match[1]);
      setError(null);
    } else {
      setVideoId(null);
      setError('No video ID found. Paste a full TikTok video link (not a short link).');
    }
  };

  const copy = () => videoId && navigator.clipboard.writeText(videoId);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-black mb-1">TikTok Video ID Extractor</h3>
      <p className="text-sm text-gray-500 mb-4">Get the numeric video ID from any TikTok link.</p>
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="https://www.tiktok.com/@username/video/1234567890"
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
      {videoId && (
        <div className="mt-4 flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
          <span className="font-mono font-bold text-lg flex-grow">{videoId}</span>
          <button onClick={copy} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-bold">Copy</button>
          <a href={`https://www.tiktok.com/embed/v2/${videoId}`} target="_blank" rel="noopener noreferrer"
            className="px-4 py-2 bg-black text-white rounded-lg text-sm font-bold">Embed</a>
        </div>
      )}
    </div>
  );
};
