
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded bg-black flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">TT</span>
              </div>
              <span className="font-bold text-lg">WatchTikTokWithoutApp.com</span>
            </div>
            <p className="text-sm text-gray-400">Making the web more accessible, one link at a time.</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Terms</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Privacy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-50 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} WatchTikTokWithoutApp.com – All rights reserved. 
            <br className="md:hidden" />
            <span className="hidden md:inline mx-2">•</span>
            Not affiliated with TikTok or ByteDance.
          </p>
        </div>
      </div>
    </footer>
  );
};
