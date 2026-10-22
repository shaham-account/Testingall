import React, { useState } from 'react';
import { RoutePath } from '../types';
import { ASSET_IMAGES } from '../data/mockData';

interface HotelVideosPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenVideoModal: (title: string, subtitle: string) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const HotelVideosPage: React.FC<HotelVideosPageProps> = ({
  onNavigate,
  onOpenVideoModal,
  onOpenBookDemo,
}) => {
  const [activeReelIndex, setActiveReelIndex] = useState(0);

  const reels = [
    {
      title: 'POV Oceanfront Villa Check-in',
      duration: '0:28',
      views: '1.4M views',
      image: ASSET_IMAGES.luxuryHotelSuite,
      hook: '"Wait until you see the bathroom view in room 402..."',
    },
    {
      title: 'FPV Drone Sunset Infinity Pool',
      duration: '0:34',
      views: '2.8M views',
      image: ASSET_IMAGES.resortPoolDrone,
      hook: '"Single-take flight from the lobby to the private reef..."',
    },
    {
      title: 'Michelin Chef Tasting Micro-Reel',
      duration: '0:22',
      views: '940K views',
      image: ASSET_IMAGES.cinemaSet,
      hook: '"120fps slow-motion chocolate gold leaf finish..."',
    },
  ];

  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-[#b4c5ff]">Creative & Media</span>
          <span>/</span>
          <span className="text-white">Hotel & Hospitality Short Videos</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b4c5ff] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">travel_explore</span>
              HOSPITALITY, RESORT & AIRBNB SHORT-FORM MEDIA
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Turn Views Into Direct Bookings With Viral Hotel Reels
            </h1>
            <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
              Travelers don't read hotel brochures anymore—they book what they experience on Instagram Reels, TikTok, and YouTube Shorts. We capture the sensory magic of your property in 15 to 45 seconds.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBookDemo('Creative Production - Hospitality Reels')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Schedule a Property Shoot</span>
                <span>→</span>
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-center">
            {/* Phone Simulator Frame */}
            <div className="relative w-72 h-[480px] bg-[#0a0e18] rounded-[36px] p-3 border-4 border-[#434655]/50 shadow-2xl flex flex-col overflow-hidden">
              <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-black flex flex-col justify-between p-4 group">
                <img
                  src={reels[activeReelIndex].image}
                  alt={reels[activeReelIndex].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Phone HUD */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-white font-mono">
                  <span className="bg-black/60 px-2 py-0.5 rounded-full">9:16 VERTICAL</span>
                  <span className="bg-[#4edea3]/30 text-[#4edea3] px-2 py-0.5 rounded-full font-bold">
                    {reels[activeReelIndex].views}
                  </span>
                </div>

                {/* Center Play Button */}
                <button
                  type="button"
                  onClick={() =>
                    onOpenVideoModal(
                      reels[activeReelIndex].title,
                      'First-person POV luxury hospitality reel'
                    )
                  }
                  className="relative z-10 self-center w-14 h-14 rounded-full bg-[#2563eb]/90 flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[30px]">play_arrow</span>
                </button>

                {/* Bottom Video Meta */}
                <div className="relative z-10 flex flex-col gap-1 text-white">
                  <span className="text-[11px] text-[#ffb77d] font-semibold">{reels[activeReelIndex].hook}</span>
                  <span className="text-xs font-bold">{reels[activeReelIndex].title}</span>
                  <div className="flex items-center justify-between text-[10px] text-[#dfe2f1]/80 pt-1">
                    <span>Direct Booking Link in Bio</span>
                    <span className="text-[#4edea3] font-bold">4.8x ROI</span>
                  </div>
                </div>
              </div>

              {/* Selector Pills Below Phone */}
              <div className="flex justify-center gap-1.5 pt-2">
                {reels.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveReelIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeReelIndex === i ? 'bg-[#2563eb] scale-125' : 'bg-[#434655]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Hotels & Resorts Choose Us */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b4c5ff]">DIFFERENTIATION</span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">Why Hotels & Resorts Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">visibility</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">First-Person POV Guest Journeys</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                From the private airport transfer and lobby suite reveal to poolside signature cocktails and turndown details—filmed from the guest’s direct perspective.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">flight</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">FPV Drone & Architectural Fly-Throughs</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Seamless single-take aerial and indoor drone tours that reveal your property's oceanfront layout, secluded private villas, and breathtaking scale.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">restaurant</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">F&B & Culinary Micro-Reels</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                High-frame-rate, mouth-watering close-ups of your executive chef’s signature dishes, private cellar tastings, and mixology bar program.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">savings</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">OTA & Direct-Booking Ad Cuts</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Ready-to-run vertical ad variations formatted with hook captions and clear direct-booking incentives to bypass high-commission booking portals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
