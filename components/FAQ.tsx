
import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Can I watch TikTok without installing the app?",
    answer: "Yes. This tool allows you to watch public TikTok videos directly in your browser without downloading the TikTok app. It works by generating a 'clean' URL that tells TikTok to display the web version of the player."
  },
  {
    question: "Why do TikTok links redirect to the App Store?",
    answer: "TikTok uses deep links and redirect parameters (like _r=1) that are configured to trigger the App Store or the installed app on your device. Our tool removes these parameters to keep you in the browser."
  },
  {
    question: "Does this work on iPhone Safari?",
    answer: "Absolutely. It works on Safari, Chrome, and most mobile browsers on both iOS and Android. No matter which device you use, you can stay in your favorite browser."
  },
  {
    question: "Do I need a TikTok account?",
    answer: "No. Public videos can be viewed without an account or login. Our tool maintains your anonymity by not requiring any personal data or credentials."
  },
  {
    question: "Is it safe to use this tool?",
    answer: "Yes. We don't store your history or the links you paste. We simply perform client-side URL cleaning to improve your viewing experience."
  }
];

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-pink-600' : 'text-gray-900'}`}>
          {item.question}
        </span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-pink-600' : 'text-gray-400'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-500">Everything you need to know about watching TikTok without the app.</p>
      </div>
      <div className="space-y-0">
        {faqData.map((item, index) => (
          <AccordionItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
