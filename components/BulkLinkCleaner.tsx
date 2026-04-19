import React, { useState } from 'react';
import { parseTikTokLink } from '../services/tiktokService';

export const BulkLinkCleaner: React.FC = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState<{ original: string; clean: string; valid: boolean }[]>([]);

  const process = () => {
    const lines = input.split('\n').map(l => l.trim()).filter(Boolean);
    setResults(lines.map(line => {
      const info = parseTikTokLink(line);
      return { original: line, clean: info.cleanUrl, valid: info.isValid };
    }));
  };

  const copyAll = () => {
    const valid = results.filter(r => r.valid).map(r => r.clean).join('\n');
    navigator.clipboard.writeText(valid);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-black mb-1">TikTok Bulk Link Cleaner</h3>
      <p className="text-sm text-gray-500 mb-4">Paste multiple TikTok links (one per line) to clean them all at once.</p>
      <textarea
        rows={5}
        placeholder={"https://www.tiktok.com/@user/video/111\nhttps://vm.tiktok.com/abc\n..."}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-pink-500 focus:outline-none text-sm font-mono resize-none"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={process} disabled={!input} className="mt-3 px-6 py-3 bg-black text-white font-bold rounded-xl disabled:opacity-50 w-full">
        Clean All Links
      </button>
      {results.length > 0 && (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-gray-500">{results.filter(r => r.valid).length}/{results.length} valid</span>
            <button onClick={copyAll} className="px-4 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-bold">Copy All</button>
          </div>
          {results.map((r, i) => (
            <div key={i} className={`flex items-center gap-2 p-3 rounded-xl text-sm ${r.valid ? 'bg-green-50' : 'bg-red-50'}`}>
              <span className={`w-2 h-2 rounded-full shrink-0 ${r.valid ? 'bg-green-500' : 'bg-red-400'}`} />
              <span className="font-mono flex-grow truncate">{r.valid ? r.clean : r.original}</span>
              {r.valid && (
                <button onClick={() => navigator.clipboard.writeText(r.clean)}
                  className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-bold shrink-0">Copy</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
