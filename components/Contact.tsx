
import React, { useState } from 'react';

export const Contact: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <button onClick={onBack} className="mb-8 text-sm font-bold text-pink-600 hover:underline flex items-center gap-2">
          ← Back to Home
        </button>
        <h1 className="text-4xl font-black mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-12 text-lg">Have a question, feedback, or a bug report? We'd love to hear from you.</p>

        {submitted ? (
          <div className="bg-green-50 border border-green-100 p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h2>
            <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly if needed.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                <input required type="text" className="w-full px-5 py-3 rounded-xl border-2 border-gray-100 focus:border-pink-500 focus:outline-none transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                <input required type="email" className="w-full px-5 py-3 rounded-xl border-2 border-gray-100 focus:border-pink-500 focus:outline-none transition-all" placeholder="hello@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
              <textarea required rows={5} className="w-full px-5 py-3 rounded-xl border-2 border-gray-100 focus:border-pink-500 focus:outline-none transition-all" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all shadow-lg active:scale-[0.98]">
              Send Message
            </button>
            <p className="text-center text-sm text-gray-400">
              Or email us directly at: <span className="font-medium text-gray-600">support@watchtiktokwithoutapp.com</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
