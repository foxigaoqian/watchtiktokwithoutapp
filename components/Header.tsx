
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center overflow-hidden">
             <div className="w-full h-full flex items-center justify-center font-bold text-white text-xs">TT</div>
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            WatchTikTok<span className="text-pink-600">Without</span>App
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">How it Works</a>
          <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">FAQ</a>
          <a href="https://github.com" className="text-sm font-medium px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">Github</a>
        </nav>
      </div>
    </header>
  );
};
