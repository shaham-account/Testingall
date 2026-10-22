import React, { useState } from 'react';
import { RoutePath } from '../types';

interface PromotionalAdsPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const PromotionalAdsPage: React.FC<PromotionalAdsPageProps> = ({
  onNavigate,
  onOpenBookDemo,
}) => {
  const [adSpend, setAdSpend] = useState('$25,000 – $50,000 / month');
  const [channels, setChannels] = useState(['Meta (FB/IG)', 'TikTok Ads']);

  const toggleChannel = (ch: string) => {
    if (channels.includes(ch)) {
      setChannels(channels.filter((c) => c !== ch));
    } else {
      setChannels([...channels, ch]);
    }
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
          <span className="text-white">Promotional Ad Campaigns</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b4c5ff] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">campaign</span>
              FULL-FUNNEL AD CREATIVE & CAMPAIGN SCALING
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Creative Strategy Meets Relentless Ad Performance
            </h1>
            <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
              Great video is only half the equation. We pair high-velocity promotional ad production with data-backed campaign structuring across Meta, TikTok, YouTube, and Google.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBookDemo('Promotional Ads - Free Ad Account Audit')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Book a Free Ad Account Audit</span>
                <span>→</span>
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-4 shadow-2xl">
              <span className="text-xs font-bold uppercase text-[#4edea3]">BENCHMARK BENCH</span>
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-4xl font-bold text-white">+3.4x</span>
                <span className="text-xs text-[#8d90a0]">Average ROAS Scaled</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-1.5 text-xs">
                <span className="text-white font-semibold">Weekly Creative Velocity</span>
                <p className="text-[#8d90a0]">
                  12 fresh hook iterations + 4 carousel breakdowns refreshed each sprint to combat ad fatigue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Deliverables (3 Columns) */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b4c5ff]">CORE DELIVERABLES</span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">Full-Funnel Campaign Architecture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">troubleshoot</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">Multi-Variant Ad Testing</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Static image ads, carousel breakdowns, founder video ads, and promotional offer overlays tested weekly with disciplined statistical significance thresholds.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">event_repeat</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">Seasonal & Launch Campaigns</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Black Friday/Cyber Monday (BFCM) preparation, new product drop countdowns, and aggressive B2B lead-generation blitzes mapped across paid media channels.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">web</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">Landing Page & Offer Alignment</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Matching your top video ad hook directly to your landing page headline and offer stack to eliminate cognitive friction and maximize conversion rates.
              </p>
            </div>
          </div>
        </div>

        {/* Free Ad Account Audit Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-[#b4c5ff]">DIAGNOSTIC AUDIT</span>
            <h3 className="font-headline font-bold text-2xl text-white">Request a 48-Hour Ad Creative Audit</h3>
            <p className="text-xs text-[#8d90a0]">
              Our performance media directors analyze your current creative decay rate, hook retention drop-offs, and CPA opportunities at zero cost.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <div>
                <label className="text-xs font-semibold text-white block mb-1">Monthly Paid Media Spend</label>
                <select
                  value={adSpend}
                  onChange={(e) => setAdSpend(e.target.value)}
                  className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3 py-2 text-xs text-white"
                >
                  <option>$10,000 – $25,000 / month</option>
                  <option>$25,000 – $50,000 / month</option>
                  <option>$50,000 – $150,000 / month</option>
                  <option>$150,000+ / month (Enterprise)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-white block mb-1">Active Ad Channels</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Meta (FB/IG)', 'TikTok Ads', 'YouTube / CTV', 'Google Search/PMax'].map((ch) => (
                    <button
                      type="button"
                      key={ch}
                      onClick={() => toggleChannel(ch)}
                      className={`p-2 rounded-lg text-xs font-medium border text-center transition-all ${
                        channels.includes(ch)
                          ? 'bg-[#2563eb]/20 border-[#2563eb] text-white'
                          : 'bg-[#0f131d] border-[#434655]/30 text-[#8d90a0]'
                      }`}
                    >
                      {ch}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 bg-[#0a0e18] rounded-xl p-6 flex flex-col justify-between border border-[#434655]/40">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase text-[#4edea3]">WHAT YOU RECEIVE</span>
              <div className="flex flex-col gap-2 text-xs text-[#dfe2f1]">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check</span>
                  <span>Creative Fatigue Heatmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check</span>
                  <span>3-Sec Hook Retention Scorecard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check</span>
                  <span>3 High-Impact Creative Brief Concepts</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBookDemo(`Free Ad Account Audit (${adSpend})`)}
              className="mt-6 w-full py-3 rounded-lg bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider transition-colors hover:bg-[#1d4ed8] shadow-lg cursor-pointer"
            >
              Submit for 48-Hr Review →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
