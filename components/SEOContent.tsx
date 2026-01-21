
import React from 'react';

export const SEOContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto prose prose-slate prose-headings:font-black prose-p:text-gray-600 prose-li:text-gray-600">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl mb-4">Open TikTok Links Directly in Your Browser</h2>
          <p>
            TikTok links often force users to open the mobile app or redirect to the App Store. 
            This behavior can be frustrating, especially if you just want to see a single video 
            without installing a new application or logging in.
          </p>
          <p>
            Our tool helps you watch TikTok videos directly in your browser by cleaning the links 
            of redirect parameters and tracking identifiers that trigger the "Open in App" banner.
          </p>
        </div>
        
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
          <h2 className="text-2xl mb-4">How This Tool Works</h2>
          <ul className="space-y-3 list-none pl-0">
            {[
              "Paste any TikTok share link",
              "The tool identifies the Video ID",
              "Redirect and tracking parameters are removed",
              "A clean browser-safe link is generated",
              "The video opens directly in your browser"
            ].map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-bold">{idx + 1}</span>
                <span className="text-sm font-medium">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl mb-6">Why TikTok Forces You to Download the App</h2>
        <p className="text-lg">
          TikTok uses special redirect parameters and shortened URLs that trigger automatic app 
          opening on mobile devices. This behavior is designed to increase app installs but 
          creates frustration for users who prefer browser viewing. By using our tool, you 
          strip away these "forced" behaviors and regain control over your browsing experience.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Standard Links", examples: "tiktok.com/@user/video/..." },
          { title: "Short Links", examples: "vm.tiktok.com/..." },
          { title: "T-Mobile Links", examples: "t.tiktok.com/..." }
        ].map((type, idx) => (
          <div key={idx} className="p-6 border border-gray-200 rounded-xl hover:border-pink-300 transition-colors">
            <h3 className="text-lg font-bold mb-2">{type.title}</h3>
            <p className="text-sm font-mono text-gray-400 break-all">{type.examples}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
