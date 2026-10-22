import React, { useState } from 'react';
import { RoutePath } from '../types';

interface UgcAdsPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const UgcAdsPage: React.FC<UgcAdsPageProps> = ({
  onNavigate,
  onOpenBookDemo,
}) => {
  const [demographic, setDemographic] = useState('Millennial Parents (28–42)');
  const [selectedHookType, setSelectedHookType] = useState('Negative / Agitation');

  const hookSamples: Record<string, string> = {
    'Negative / Agitation': '"Stop using traditional products if you are still experiencing breakout flare-ups..."',
    'Curiosity / Contrast': '"I tested the viral $300 gadget versus this $49 alternative—here’s what happened..."',
    'Secret / Insider': '"My friend who works in procurement told me this before buying enterprise software..."',
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
          <span className="text-white">UGC Ads Studio</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b4c5ff] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">smart_display</span>
              PERFORMANCE USER-GENERATED CONTENT
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Authentic Creator Ads Engineered to Lower Your CPA
            </h1>
            <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
              Polished studio ads get skipped; native creator content gets watched. We script, cast, and edit high-converting UGC ads built around proven direct-response psychology.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBookDemo('Creative Production - UGC Ad Bundle')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Order Your UGC Ad Bundle</span>
                <span>→</span>
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-4 shadow-2xl">
              <span className="text-xs font-bold uppercase text-[#b4c5ff]">CREATOR ROSTER AUDIT</span>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0f131d] border border-[#434655]/30">
                <div className="w-10 h-10 rounded-full bg-[#2563eb]/30 text-[#b4c5ff] flex items-center justify-center font-bold">
                  US
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">450+ Vetted US Creators</span>
                  <span className="text-[11px] text-[#8d90a0]">Gen Z, Parents, Tech Professionals, Foodies</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded bg-[#0f131d]">
                  <span className="text-[#8d90a0] block">Average Thumb-Stop:</span>
                  <span className="text-[#4edea3] font-bold text-lg">68.4%</span>
                </div>
                <div className="p-3 rounded bg-[#0f131d]">
                  <span className="text-[#8d90a0] block">Hook Variations:</span>
                  <span className="text-white font-bold text-lg">3 per Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Direct-Response UGC Formula (4 Cards) */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b4c5ff]">METHODOLOGY</span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">Our Direct-Response UGC Formula</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">timer_3</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">3-Second Visual & Verbal Hooks</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Every video comes with 3 distinct opening hooks so you can A/B test what stops the scroll fastest on Meta and TikTok.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">psychology</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">Problem → Agitation → Solution</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Written by performance copywriters—not left up to guesswork by influencers—to methodically drive conversion intent.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">diversity_3</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">Vetted Creator Casting</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                On-camera talent matched to your exact US buyer demographic (Gen Z, Millennial Parents, B2B Professionals, Fitness, Beauty, or Foodies).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">Full Usage & Raw Footage</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Run your ads across paid social forever with zero monthly licensing headaches, plus complete access to raw B-roll cuts.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Hook Testing Console */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-[#b4c5ff]">INTERACTIVE HOOK LAB</span>
            <h3 className="font-headline font-bold text-xl text-white">Test Creator Hook Angles</h3>
            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-semibold text-white block mb-1">Target US Demographic</label>
                <select
                  value={demographic}
                  onChange={(e) => setDemographic(e.target.value)}
                  className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3 py-2 text-xs text-white"
                >
                  <option>Millennial Parents (28–42)</option>
                  <option>Gen-Z Trendsetters (18–26)</option>
                  <option>Corporate B2B Decision Makers (35–55)</option>
                  <option>Health & Functional Fitness Enthusiasts</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-white block mb-1">Psychological Hook Angle</label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.keys(hookSamples).map((hookType) => (
                    <button
                      key={hookType}
                      onClick={() => setSelectedHookType(hookType)}
                      className={`p-2.5 rounded-lg text-xs font-medium border text-left transition-all ${
                        selectedHookType === hookType
                          ? 'bg-[#2563eb]/20 border-[#2563eb] text-white'
                          : 'bg-[#0f131d] border-[#434655]/30 text-[#8d90a0]'
                      }`}
                    >
                      {hookType}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 bg-[#0a0e18] rounded-xl p-6 flex flex-col justify-between border border-[#434655]/30">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-mono text-[#4edea3]">GENERATED PAS OPENING HOOK (0.0s – 3.2s)</span>
              <p className="text-sm font-medium text-white italic bg-[#171b26] p-4 rounded-lg border border-[#434655]/30">
                {hookSamples[selectedHookType]}
              </p>
              <div className="flex items-center justify-between text-xs text-[#8d90a0] pt-2">
                <span>Audience: {demographic}</span>
                <span className="text-[#4edea3] font-bold">Estimated Thumb-Stop: 71.2%</span>
              </div>
            </div>
            <button
              onClick={() => onOpenBookDemo(`UGC Bundle for ${demographic}`)}
              className="mt-4 py-2.5 rounded-lg bg-[#2563eb] text-white text-xs font-bold uppercase transition-colors hover:bg-[#1d4ed8]"
            >
              Order 8-Ad Sprint Bundle ($2,450)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
