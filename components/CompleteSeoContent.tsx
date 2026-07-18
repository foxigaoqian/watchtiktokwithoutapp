import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
  'Paste a full TikTok URL or an official vm.tiktok.com, vt.tiktok.com, or t.tiktok.com short link.',
  'The tool validates the host. Short links are expanded by the resolver; recognized full links are cleaned in the browser.',
  'When a public video ID is available, the result includes a standard web URL and an embed URL.',
  'Open the result and follow any login, consent, region, or app prompt displayed by TikTok or the device.',
];

const problems = [
  ['Short link does not resolve','The link may be expired, malformed, blocked, or unavailable from the resolver region. Copy a fresh share link.'],
  ['TikTok still opens the app','App prompts are controlled by TikTok, the operating system, and browser link settings. The cleaner cannot guarantee browser-only behavior.'],
  ['TikTok asks for login','Public access varies by region, age gate, browser, and TikTok policy. This tool does not bypass access controls.'],
  ['No video ID appears','Profile, search, live, and some redirect destinations do not contain a standard /video/ ID.'],
  ['Video is unavailable','The creator may have removed it, made it private, restricted it by region, or limited it to signed-in viewers.'],
  ['Result opens another page','The resolver accepts official TikTok hosts, but TikTok controls the final public destination.'],
];

const faqs = [
  ['Can I watch TikTok without installing the app?','A public web page or embed may play in a browser, but TikTok and the device may still display login, consent, or app prompts.'],
  ['Does this tool download videos?','No. It expands and cleans recognized TikTok links. It does not download media or bypass restrictions.'],
  ['What is a TikTok short link?','It is an official redirect link such as vm.tiktok.com that must be expanded to discover the final TikTok destination.'],
  ['Does it remove every tracking parameter?','It removes recognized common share parameters. TikTok may add new parameters or redirects outside this site’s control.'],
  ['Are pasted links stored?','Short-link expansion sends the URL to the resolver. The interface does not create a personal history, but hosting and security providers may process normal request logs.'],
  ['Does it work on mobile and desktop?','The interface is responsive. Playback and app prompts depend on TikTok, the browser, device, and region.'],
];

export const CompleteSeoContent: React.FC = () => <div className="max-w-6xl mx-auto">
  <section className="grid lg:grid-cols-2 gap-10 items-start">
    <div><h2 className="text-3xl md:text-4xl font-black mb-5">How to open a TikTok link in a browser</h2><p className="text-lg leading-8 text-gray-600">Use the tool to expand an official short link or normalize a recognized full TikTok URL. It changes the link format; it does not control TikTok’s access rules.</p><p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900"><strong>Important:</strong> TikTok may still require login, show a consent screen, apply an age or regional restriction, or suggest opening the app.</p></div>
    <ol className="rounded-3xl border bg-gray-50 p-7 space-y-5">{steps.map((step,i)=><li key={step} className="flex gap-4"><b className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">{i+1}</b><span className="text-sm leading-7 text-gray-600">{step}</span></li>)}</ol>
  </section>

  <section className="mt-20"><h2 className="text-3xl md:text-4xl font-black">Short links vs full links</h2><p className="mt-4 max-w-3xl leading-8 text-gray-600">Short links require a redirect lookup. Full links can usually be cleaned locally when their structure is recognized.</p><div className="mt-8 overflow-x-auto rounded-2xl border"><table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-black text-white"><tr><th className="p-4">Type</th><th className="p-4">Example</th><th className="p-4">Processing</th><th className="p-4">Result</th></tr></thead><tbody className="divide-y text-gray-600"><tr><th className="p-4 text-black">Full video</th><td className="p-4 font-mono">tiktok.com/@user/video/...</td><td className="p-4">Cleaned in browser</td><td className="p-4">Web and embed URL</td></tr><tr><th className="p-4 text-black">Official short link</th><td className="p-4 font-mono">vm.tiktok.com/...</td><td className="p-4">Expanded by resolver</td><td className="p-4">Official destination</td></tr><tr><th className="p-4 text-black">Profile</th><td className="p-4 font-mono">tiktok.com/@user</td><td className="p-4">Share parameters removed</td><td className="p-4">Clean profile URL</td></tr></tbody></table></div></section>

  <section className="mt-20 grid md:grid-cols-3 gap-5"><article className="rounded-2xl border p-6"><h2 className="text-xl font-black">iPhone and iPad</h2><p className="mt-3 text-sm leading-7 text-gray-600">Open the result in Safari. iOS and TikTok may still offer to open the installed app.</p></article><article className="rounded-2xl border p-6"><h2 className="text-xl font-black">Android</h2><p className="mt-3 text-sm leading-7 text-gray-600">Browser and Android app-link settings influence whether a TikTok URL stays on the web.</p></article><article className="rounded-2xl border p-6"><h2 className="text-xl font-black">Desktop</h2><p className="mt-3 text-sm leading-7 text-gray-600">Standard video and embed URLs usually provide the clearest browser path, subject to TikTok rules.</p></article></section>

  <section className="mt-20 rounded-3xl border bg-gray-50 p-8"><h2 className="text-3xl font-black">What the tool can and cannot do</h2><div className="mt-7 grid md:grid-cols-2 gap-8 text-sm leading-7"><div><h3 className="font-black text-green-700">It can</h3><ul className="mt-3 list-disc pl-5 text-gray-600"><li>Validate official TikTok hosts.</li><li>Expand supported official short links.</li><li>Remove common share parameters.</li><li>Extract a public video ID when present.</li><li>Create standard and embed URLs.</li></ul></div><div><h3 className="font-black text-red-700">It cannot</h3><ul className="mt-3 list-disc pl-5 text-gray-600"><li>Bypass private, deleted, age-gated, or region-restricted content.</li><li>Guarantee playback without login or an app prompt.</li><li>Download the video file.</li><li>Control TikTok redirects or policy changes.</li></ul></div></div></section>

  <section className="mt-20"><h2 className="text-3xl md:text-4xl font-black">Troubleshooting TikTok links</h2><div className="mt-8 grid md:grid-cols-2 gap-5">{problems.map(([q,a])=><article key={q} className="rounded-2xl border p-6"><h3 className="font-black">{q}</h3><p className="mt-2 text-sm leading-7 text-gray-600">{a}</p></article>)}</div></section>

  <section className="mt-20"><h2 className="text-3xl md:text-4xl font-black">Related TikTok link tools</h2><div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"><Link className="rounded-2xl border p-5 font-bold" to="/tools/username-extractor">Username Extractor<span className="mt-2 block text-sm font-normal text-gray-500">Read a username from a full link.</span></Link><Link className="rounded-2xl border p-5 font-bold" to="/tools/video-id-extractor">Video ID Extractor<span className="mt-2 block text-sm font-normal text-gray-500">Find a numeric video ID.</span></Link><Link className="rounded-2xl border p-5 font-bold" to="/tools/profile-link-generator">Profile Link Generator<span className="mt-2 block text-sm font-normal text-gray-500">Create a clean profile URL.</span></Link><Link className="rounded-2xl border p-5 font-bold" to="/tools/bulk-link-cleaner">Bulk Link Cleaner<span className="mt-2 block text-sm font-normal text-gray-500">Clean multiple full links.</span></Link></div></section>

  <section className="mt-20 max-w-4xl mx-auto"><h2 className="text-3xl md:text-4xl font-black">Frequently asked questions</h2><div className="mt-8 divide-y rounded-2xl border px-6">{faqs.map(([q,a])=><details key={q} className="py-5"><summary className="cursor-pointer font-black">{q}</summary><p className="mt-3 text-sm leading-7 text-gray-600">{a}</p></details>)}</div></section>
</div>;
