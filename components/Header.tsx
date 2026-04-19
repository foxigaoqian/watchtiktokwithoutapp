import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Locale } from '../i18n/types';
import { localeRoutes } from '../i18n';

interface HeaderProps {
  onHome: () => void;
  t: Locale;
}

const langLabels: Record<string, string> = {
  en: 'EN', vi: 'VI', id: 'ID', tl: 'TL', ur: 'UR', 'pt-BR': 'PT',
};

export const Header: React.FC<HeaderProps> = ({ onHome, t }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button type="button" onClick={onHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
            <span className="font-bold text-white text-xs">TT</span>
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            WatchTikTok<span className="text-pink-600">Without</span>App
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {localeRoutes.map(r => (
              <button
                key={r.locale}
                type="button"
                onClick={() => navigate(r.path)}
                className={`px-2 py-1 rounded text-xs font-bold transition-colors ${t.lang === r.locale ? 'bg-black text-white' : 'text-gray-400 hover:text-black'}`}
              >
                {langLabels[r.locale]}
              </button>
            ))}
          </div>
          <a href="https://ko-fi.com/Y8Y11S17NY" target="_blank" rel="noopener noreferrer">
            <img src="https://storage.ko-fi.com/cdn/kofi5.png?v=6" alt="Buy Me a Coffee at ko-fi.com" className="h-9 border-0" />
          </a>
        </div>
      </div>
    </header>
  );
};
