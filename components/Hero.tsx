
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white pt-20 pb-40 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          Watch TikTok <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
            Anywhere, Anytime.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-medium">
          The simple, clean way to open TikTok links in your browser. No app install, no redirects to the App Store, and no tracking cookies.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> No App Required
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Privacy Focused
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span> Mobile Optimized
          </span>
        </div>
      </div>
    </section>
  );
};
