
import React from 'react';

export const Terms: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <button onClick={onBack} className="mb-8 text-sm font-bold text-pink-600 hover:underline flex items-center gap-2">
          ← Back to Home
        </button>
        <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none">
          <p className="text-gray-500 mb-6">Last Updated: January 21, 2026</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing WatchTikTokWithoutApp.com, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the service.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Description of Service</h2>
          <p>WatchTikTokWithoutApp.com provides a utility to clean TikTok URLs of tracking parameters and bypass app redirects for browser-based viewing. We do not host any video content; we only provide a redirect service to TikTok's official web player.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Non-Affiliation</h2>
          <p>This website is not affiliated, associated, authorized, endorsed by, or in any way officially connected with TikTok, ByteDance, or any of its subsidiaries or its affiliates. The official TikTok website can be found at tiktok.com.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
          <p>The name "TikTok" and related trademarks are the property of ByteDance. Our service uses these names solely for identification and descriptive purposes under fair use. All other content on this site is the property of WatchTikTokWithoutApp.com.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>The service is provided "as is". We are not responsible for the content of external websites or any technical issues arising from the use of our tool. Users use the tool at their own risk.</p>
        </div>
      </div>
    </div>
  );
};
