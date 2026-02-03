
import React from 'react';
import { PageView } from '../App';

interface FooterProps {
  setView: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
             <button onClick={() => setView('home')} className="flex items-center gap-2 mb-2 hover:opacity-80">
              <div className="w-6 h-6 rounded bg-black flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">TT</span>
              </div>
              <span className="font-bold text-lg">WatchTikTokWithoutApp.com</span>
            </button>
            <p className="text-sm text-gray-400">Making the web more accessible, one link at a time.</p>
          </div>
          
          <div className="flex gap-8">
            <button onClick={() => setView('terms')} className="text-sm text-gray-500 hover:text-black transition-colors">Terms</button>
            <button onClick={() => setView('privacy')} className="text-sm text-gray-500 hover:text-black transition-colors">Privacy</button>
            <button onClick={() => setView('contact')} className="text-sm text-gray-500 hover:text-black transition-colors">Contact</button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-50 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} WatchTikTokWithoutApp.com – All rights reserved. 
            <br className="md:hidden" />
            <span className="hidden md:inline mx-2">•</span>
            TikTok is a registered trademark of ByteDance. This website is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance.
          </p>
          <p><a href="https://spanishwordunscrambler.com/">spanish word unscrambler</a><a href="https://lewisstructuregenerator.org/">lewis structure generator</a></p>
        </div>
      </div>
    </footer>
  );
};
