
import React from 'react';

interface HeaderProps {
  onHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onHome }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={onHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center overflow-hidden">
             <div className="w-full h-full flex items-center justify-center font-bold text-white text-xs">TT</div>
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            WatchTikTok<span className="text-pink-600">Without</span>App
          </span>
        </button>
        
        <a href="https://ko-fi.com/Y8Y11S17NY" target="_blank" rel="noopener noreferrer" className="flex items-center">
          <img 
            src="https://storage.ko-fi.com/cdn/kofi5.png?v=6" 
            alt="Buy Me a Coffee at ko-fi.com"
            className="h-9 border-0"
            style={{ height: '36px', border: '0px' }}
          />
        </a>
      </div>
    </header>
  );
};
