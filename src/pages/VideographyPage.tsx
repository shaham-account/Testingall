import React, { useState } from 'react';
import { RoutePath } from '../types';
import { ASSET_IMAGES } from '../data/mockData';

interface VideographyPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenVideoModal: (title: string, subtitle: string) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const VideographyPage: React.FC<VideographyPageProps> = ({
  onNavigate,
  onOpenVideoModal,
  onOpenBookDemo,
}) => {
  // Interactive Quote Estimator
  const [format, setFormat] = useState<'brand' | 'explainer' | 'documentary'>('brand');
  const [resolution, setResolution] = useState<'4k' | '6k-raw'>('6k-raw');
  const [includeDrone, setIncludeDrone] = useState(true);
  const [includeActors, setIncludeActors] = useState(true);

  const calculateEstimate = () => {
    let base = format === 'brand' ? 12500 : format === 'explainer' ? 7800 : 9500;
    if (resolution === '6k-raw') base += 2200;
    if (includeDrone) base += 1800;
    if (includeActors) base += 2500;
    return base;
  };

  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-[#b4c5ff]">Creative & Media</span>
          <span>/</span>
          <span className="text-white">Commercial Videography</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b4c5ff] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">movie_filter</span>
              CINEMA-GRADE COMMERCIAL PRODUCTION
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Brand Films & Commercials That Command Authority
            </h1>
            <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
              From 60-second flagship brand anthems to B2B product explainers and customer testimonials, we script, shoot, and edit video assets that turn cold traffic into lifelong buyers.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBookDemo('Creative Production - Commercial Videography')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Request a Production Quote</span>
                <span>→</span>
              </button>
              <button
                onClick={() =>
                  onOpenVideoModal(
                    'AllBiz Digital Cinema Showreel 2025',
                    'ARRI Alexa Mini LF & RED V-Raptor Commercial Master Reel'
                  )
                }
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#1c1f2a] hover:bg-[#262a35] text-white border border-[#434655]/40 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px] text-[#b4c5ff]">play_arrow</span>
                <span>Watch Showreel ▶</span>
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div
              onClick={() =>
                onOpenVideoModal(
                  'AeroTech Global Ad Launch',
                  'RED Digital Cinema High-Speed Camera Rigging'
                )
              }
              className="relative rounded-2xl overflow-hidden bg-[#171b26] border border-[#434655]/40 shadow-2xl group cursor-pointer"
            >
              <img
                src={ASSET_IMAGES.cinemaSet}
                alt="Cinema Set"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#2563eb] flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[36px]">play_arrow</span>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-[#0f131d]/85 backdrop-blur-md p-3 rounded-lg flex items-center justify-between text-xs">
                <span className="text-white font-medium">RED V-Raptor 8K • Cooke Anamorphic</span>
                <span className="text-[#4edea3] font-mono">24 FPS RAW</span>
              </div>
            </div>
          </div>
        </div>

        {/* What We Deliver (3-Column Grid) */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b4c5ff]">CORE CAPABILITIES</span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">What We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">flag</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-white">Flagship Brand Commercials</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Full-scripted, cinema-lit commercials designed for YouTube pre-roll, Connected TV (CTV), national broadcast, and your primary website homepage hero.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">devices</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-white">B2B & SaaS Explainers</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Clear, dynamic live-action and motion-graphics videos that simplify complex enterprise software, hardware architecture, or high-tech manufacturing processes.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">record_voice_over</span>
              </div>
              <h3 className="font-headline font-bold text-lg text-white">Founder & Client Documentary Shorts</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Authentic, story-driven interviews and customer case spotlights that humanize your brand and build immediate enterprise trust before a sales call.
              </p>
            </div>
          </div>
        </div>

        {/* Included in Every Shoot Banner */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#1c1f2a] border border-[#434655]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4edea3]">GUARANTEED PRODUCTION STANDARDS</span>
            <h3 className="font-headline font-bold text-xl text-white">Included in Every Shoot</h3>
            <p className="text-xs text-[#8d90a0]">
              Pre-production storyboarding & scripting • 4K/6K cinema camera capture • Professional sound design & color grading • Multi-aspect ratio exports (16:9, 9:16, 1:1) for omnichannel use.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-[#262a35] text-xs font-mono text-[#b4c5ff] border border-[#434655]/40">
              Full Master Buyout Included
            </span>
          </div>
        </div>

        {/* Interactive Production Quote Estimator */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-[#b4c5ff]">INTERACTIVE ESTIMATOR</span>
              <h3 className="font-headline font-bold text-2xl text-white">Configure Your Commercial Production</h3>
              <p className="text-xs text-[#8d90a0]">Select your format and filming parameters to preview transparent budgeting.</p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-white">Production Scope</span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormat('brand')}
                  className={`p-3 rounded-lg text-left text-xs border transition-all ${
                    format === 'brand' ? 'bg-[#2563eb]/20 border-[#2563eb] text-white' : 'bg-[#1c1f2a] border-transparent text-[#8d90a0]'
                  }`}
                >
                  <span className="font-semibold block">Flagship Anthem</span>
                  <span className="text-[10px] text-[#8d90a0]">60s Master + Cuts</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormat('explainer')}
                  className={`p-3 rounded-lg text-left text-xs border transition-all ${
                    format === 'explainer' ? 'bg-[#2563eb]/20 border-[#2563eb] text-white' : 'bg-[#1c1f2a] border-transparent text-[#8d90a0]'
                  }`}
                >
                  <span className="font-semibold block">B2B SaaS Explainer</span>
                  <span className="text-[10px] text-[#8d90a0]">90s Dynamic Demo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormat('documentary')}
                  className={`p-3 rounded-lg text-left text-xs border transition-all ${
                    format === 'documentary' ? 'bg-[#2563eb]/20 border-[#2563eb] text-white' : 'bg-[#1c1f2a] border-transparent text-[#8d90a0]'
                  }`}
                >
                  <span className="font-semibold block">Founder Doc Short</span>
                  <span className="text-[10px] text-[#8d90a0]">3-5 Min Interview</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs font-semibold text-white block mb-2">Camera Package</span>
                <select
                  value={resolution}
                  onChange={(e) => setResolution(e.target.value as any)}
                  className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3 py-2 text-xs text-white"
                >
                  <option value="4k">4K Cinema (Sony FX6 / FX9)</option>
                  <option value="6k-raw">6K/8K Cinema RAW (RED / ARRI)</option>
                </select>
              </div>

              <div>
                <span className="text-xs font-semibold text-white block mb-2">Add-On Rigging</span>
                <div className="flex flex-col gap-1.5">
                  <label className="flex items-center gap-2 text-xs text-[#dfe2f1]">
                    <input
                      type="checkbox"
                      checked={includeDrone}
                      onChange={(e) => setIncludeDrone(e.target.checked)}
                      className="accent-[#2563eb]"
                    />
                    <span>Licensed FPV & Aerial Drone Rig</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-[#dfe2f1]">
                    <input
                      type="checkbox"
                      checked={includeActors}
                      onChange={(e) => setIncludeActors(e.target.checked)}
                      className="accent-[#2563eb]"
                    />
                    <span>Professional On-Camera Talent</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 bg-[#0a0e18] rounded-xl p-6 flex flex-col justify-between border border-[#434655]/40">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase text-[#8d90a0]">ESTIMATED PRODUCTION BUDGET</span>
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-4xl font-bold text-white">${calculateEstimate().toLocaleString()}</span>
                <span className="text-xs text-[#4edea3]">Turnkey Engagement</span>
              </div>
              <div className="flex flex-col gap-2 pt-3 border-t border-[#434655]/30 text-xs text-[#8d90a0]">
                <div className="flex justify-between">
                  <span>Pre-Production & Scripting:</span>
                  <span className="text-white">Included (7 Days)</span>
                </div>
                <div className="flex justify-between">
                  <span>Studio & Location Shoot:</span>
                  <span className="text-white">1–2 Production Days</span>
                </div>
                <div className="flex justify-between">
                  <span>Editorial & Sound Design:</span>
                  <span className="text-white">ACES Color + Dolby 5.1</span>
                </div>
                <div className="flex justify-between">
                  <span>Master Deliverables:</span>
                  <span className="text-[#b4c5ff]">16:9 + 9:16 + 1:1 Cuts</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBookDemo(`Commercial Videography ($${calculateEstimate().toLocaleString()} package)`)}
              className="mt-6 w-full py-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              Lock In Production Date →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
