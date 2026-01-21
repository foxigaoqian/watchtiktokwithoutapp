
import React from 'react';

export const Privacy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <button onClick={onBack} className="mb-8 text-sm font-bold text-pink-600 hover:underline flex items-center gap-2">
          ← Back to Home
        </button>
        <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-gray-500 mb-6">Last Updated: October 2023</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>WatchTikTokWithoutApp.com does not collect, store, or share any personal information. The tool processes URL strings client-side or via simple redirect logic. We do not maintain logs of URLs entered into our tool.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Cookies</h2>
          <p>We do not use tracking cookies. We may use local storage to remember your preferences (such as theme) locally on your device, but this data never reaches our servers.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Third-Party Links</h2>
          <p>Our tool generates links to TikTok.com. Once you leave our site, you are subject to TikTok's privacy policy and terms. We are not responsible for the data collection practices of third-party platforms.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Ads and Analytics</h2>
          <p>If we use Google Analytics, it is configured for anonymized tracking only to help us understand site performance. We do not sell user data to third parties.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Information</h2>
          <p>If you have questions about this policy, please contact us via our Contact page.</p>
        </div>
      </div>
    </div>
  );
};
