import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TiktokTool } from './components/TiktokTool';
import { SEOContent } from './components/SEOContent';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';
import { Contact } from './components/Contact';
import { UsernameExtractor } from './components/UsernameExtractor';
import { VideoIdExtractor } from './components/VideoIdExtractor';
import { ProfileLinkGenerator } from './components/ProfileLinkGenerator';
import { BulkLinkCleaner } from './components/BulkLinkCleaner';
import { locales, localeRoutes, Locale } from './i18n';

export type PageView = 'home' | 'terms' | 'privacy' | 'contact';

const HomePage: React.FC<{ t: Locale; setView: (v: PageView) => void }> = ({ t, setView }) => (
  <>
    <Hero t={t} />
    <div className="container mx-auto px-4 -mt-16 md:-mt-24 relative z-10">
      <TiktokTool t={t} />
    </div>
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SEOContent t={t} />
      </div>
    </section>
    <section id="faq" className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <FAQ t={t} />
      </div>
    </section>
    <section id="tools" className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black mb-2">{t.tools.sectionTitle}</h2>
          <p className="text-gray-500">{t.tools.sectionSubtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <UsernameExtractor />
          <VideoIdExtractor />
          <ProfileLinkGenerator />
          <BulkLinkCleaner />
        </div>
      </div>
    </section>
  </>
);

const LocalePage: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const localeKey = lang === 'pt-br' ? 'pt-BR' : (lang ?? 'en');
  const t = locales[localeKey] ?? locales['en'];
  const [view, setView] = useState<PageView>('home');
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [view]);

  useEffect(() => {
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
  }, [t]);

  const basePath = lang ? `/${lang}` : '';
  const goHome = () => { setView('home'); navigate(basePath || '/'); };

  const renderContent = () => {
    switch (view) {
      case 'terms':   return <Terms onBack={() => setView('home')} />;
      case 'privacy': return <Privacy onBack={() => setView('home')} />;
      case 'contact': return <Contact onBack={() => setView('home')} />;
      default:        return <HomePage t={t} setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onHome={goHome} t={t} />
      <main className="flex-grow">{renderContent()}</main>
      <Footer setView={setView} />
    </div>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LocalePage />} />
      <Route path="/:lang" element={<LocalePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
