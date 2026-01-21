
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TiktokTool } from './components/TiktokTool';
import { SEOContent } from './components/SEOContent';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10">
          <TiktokTool />
        </div>

        <section id="how-it-works" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <SEOContent />
          </div>
        </section>

        <section id="faq" className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <FAQ />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
