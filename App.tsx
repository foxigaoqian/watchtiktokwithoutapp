
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TiktokTool } from './components/TiktokTool';
import { SEOContent } from './components/SEOContent';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';
import { Contact } from './components/Contact';

export type PageView = 'home' | 'terms' | 'privacy' | 'contact';

const App: React.FC = () => {
  const [view, setView] = useState<PageView>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'terms':
        return <Terms onBack={() => setView('home')} />;
      case 'privacy':
        return <Privacy onBack={() => setView('home')} />;
      case 'contact':
        return <Contact onBack={() => setView('home')} />;
      default:
        return (
          <>
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
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onHome={() => setView('home')} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer setView={setView} />
    </div>
  );
};

export default App;
