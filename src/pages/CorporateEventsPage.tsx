import React from 'react';
import { RoutePath } from '../types';
import { ASSET_IMAGES } from '../data/mockData';

interface CorporateEventsPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const CorporateEventsPage: React.FC<CorporateEventsPageProps> = ({
  onNavigate,
  onOpenBookDemo,
}) => {
  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-[#ffb77d]">Corporate Gifting</span>
          <span>/</span>
          <span className="text-white">Trade Show & VIP Gifting</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffb77d] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">celebration</span>
              BULK EVENT GIVEAWAYS & LUXURY VIP HAMPERS
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Trade Show Bites & Executive Gift Boxes That People Actually Keep
            </h1>
            <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
              Standard pens and cheap branded swag end up in convention hall trash cans. Custom embossed Belgian couverture chocolates create immediate sensory connection, delightful taste memories, and unforgettable brand prestige.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBookDemo('Corporate Gifting - Trade Show & Event Bulk')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#d97707] text-white hover:bg-[#b45309] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Request Event Quote</span>
                <span>→</span>
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#171b26] border border-[#434655]/40 shadow-2xl">
              <img
                src={ASSET_IMAGES.chocolateBarSlate}
                alt="Executive Box"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#0f131d]/90 backdrop-blur-md p-3 rounded-lg flex items-center justify-between text-xs">
                <span className="text-white font-medium">Soft-Touch Rigid Presentation Box</span>
                <span className="text-[#ffb77d] font-bold">12 Assorted Medallions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Event Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#ffb77d]">VOLUME GIVEAWAYS</span>
            <h3 className="font-headline font-bold text-lg text-white">Conference & Expo Bites</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Individually foil-wrapped Crafty Bites (8–9g) with your 3D embossed logo. High-volume pricing from $1.25/piece with 5–6 day domestic turnaround.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#ffb77d]">BOARDROOM AMENITIES</span>
            <h3 className="font-headline font-bold text-lg text-white">Executive Medallion Sleeves</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              3-piece and 4-piece custom printed gold foil slider sleeves featuring Crafty Squares (12–13g). Perfect for keynote speaker gifts and investor packages.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#ffb77d]">VIP DROP-SHIPPING</span>
            <h3 className="font-headline font-bold text-lg text-white">Direct-to-Recipient Logistics</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Provide an address CSV and we handle insulated, temperature-controlled direct fulfillment to your executives and high-value clients across all 50 US states.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
