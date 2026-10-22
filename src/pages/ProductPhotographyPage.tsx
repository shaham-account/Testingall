import React, { useState } from 'react';
import { RoutePath } from '../types';
import { ASSET_IMAGES } from '../data/mockData';

interface ProductPhotographyPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const ProductPhotographyPage: React.FC<ProductPhotographyPageProps> = ({
  onNavigate,
  onOpenBookDemo,
}) => {
  const [whiteBgCount, setWhiteBgCount] = useState(15);
  const [heroProppedCount, setHeroProppedCount] = useState(5);
  const [lifestyleCount, setLifestyleCount] = useState(4);
  const [include360, setInclude360] = useState(false);

  const calculateTotal = () => {
    let total = whiteBgCount * 45 + heroProppedCount * 120 + lifestyleCount * 95;
    if (include360) total += 450;
    return total;
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
          <span className="text-white">Product Photography</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b4c5ff] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              E-COMMERCE & STUDIO PRODUCT SHOOTS
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Scroll-Stopping Product Photos That Boost Checkout Conversion
            </h1>
            <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
              High-resolution studio photography engineered for Amazon listings, Shopify stores, CPG packaging, and paid social catalogs.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBookDemo('Creative Production - Product Photography')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Book Your Product Shoot</span>
                <span>→</span>
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#171b26] border border-[#434655]/40 shadow-2xl">
              <img
                src={ASSET_IMAGES.cameraRigWaterSplash}
                alt="Product Studio Macro"
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#0f131d]/90 backdrop-blur-md px-3 py-1 rounded text-xs text-[#b4c5ff] font-mono border border-white/10">
                100MP Hasselblad • Pure 255 RGB
              </div>
            </div>
          </div>
        </div>

        {/* Core Styles We Shoot (4 Columns) */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b4c5ff]">SPECIALIZED STYLES</span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">Core Styles We Shoot</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">crop_free</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">Amazon & Marketplace White</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Pure RGB (255,255,255) studio-lit shots with razor-sharp detail, callout infographics, and dimension overlays optimized for catalog compliance.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">water_drop</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">Stylized Hero & Propped Studio</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Bold colored backdrops, dramatic lighting, water splashes, and raw ingredient styling (ideal for cosmetics, beverages, supplements, and food).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">pan_tool</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">Lifestyle & Hand-Model Staging</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Real-world context shots showing ergonomic scale, material texture, and everyday usage that trigger consumer purchase confidence.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">360</span>
              </div>
              <h3 className="font-headline font-bold text-base text-white">360° Spins & Stop-Motion Loops</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Interactive rotating 360° product viewers and dynamic stop-motion loops that elevate Shopify product landing page engagement.
              </p>
            </div>
          </div>
        </div>

        {/* How Ship-and-Shoot Works */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4edea3]">STREAMLINED LOGISTICS</span>
            <h2 className="font-headline text-2xl font-bold text-white">How Ship-and-Shoot Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-2">
              <span className="text-xs font-bold text-[#4edea3] font-mono">01. PLAN</span>
              <h3 className="font-headline font-bold text-base text-white">Pick Your Shot List</h3>
              <p className="text-xs text-[#8d90a0]">
                Select the angles, backgrounds, propping preferences, and aspect ratios via our online creative brief.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-2">
              <span className="text-xs font-bold text-[#4edea3] font-mono">02. SHIP</span>
              <h3 className="font-headline font-bold text-base text-white">Ship to Our Studio</h3>
              <p className="text-xs text-[#8d90a0]">
                Send your product units to our climate-controlled domestic photography lab with prepaid tracking.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-2">
              <span className="text-xs font-bold text-[#4edea3] font-mono">03. DOWNLOAD</span>
              <h3 className="font-headline font-bold text-base text-white">Retouched in 7 Days</h3>
              <p className="text-xs text-[#8d90a0]">
                Approve digital proofs in real-time and download retouched, color-calibrated high-res files ready for deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Shot List Cost Estimator */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-[#b4c5ff]">INSTANT ESTIMATOR</span>
              <h3 className="font-headline font-bold text-2xl text-white">Calculate Your Studio Shot List</h3>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between text-xs font-medium text-white mb-1.5">
                  <span>Pure White (255,255,255) Marketplace Angles: {whiteBgCount} shots</span>
                  <span className="text-[#b4c5ff]">${whiteBgCount * 45}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={whiteBgCount}
                  onChange={(e) => setWhiteBgCount(Number(e.target.value))}
                  className="w-full accent-[#2563eb]"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-white mb-1.5">
                  <span>Stylized Hero & Splash Studio Shots: {heroProppedCount} setups</span>
                  <span className="text-[#b4c5ff]">${heroProppedCount * 120}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={heroProppedCount}
                  onChange={(e) => setHeroProppedCount(Number(e.target.value))}
                  className="w-full accent-[#2563eb]"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-white mb-1.5">
                  <span>Hand-Model & Lifestyle Staging: {lifestyleCount} shots</span>
                  <span className="text-[#b4c5ff]">${lifestyleCount * 95}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={lifestyleCount}
                  onChange={(e) => setLifestyleCount(Number(e.target.value))}
                  className="w-full accent-[#2563eb]"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={include360}
                    onChange={(e) => setInclude360(e.target.checked)}
                    className="accent-[#2563eb]"
                  />
                  <span>Add 360° Interactive Turntable Spin Asset (+$450)</span>
                </label>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 bg-[#0a0e18] rounded-xl p-6 flex flex-col justify-between border border-[#434655]/40">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase text-[#8d90a0]">TOTAL ESTIMATED INVESTMENT</span>
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-4xl font-bold text-white">${calculateTotal().toLocaleString()}</span>
                <span className="text-xs text-[#4edea3]">Full Retouching Included</span>
              </div>
              <div className="flex flex-col gap-2 pt-3 border-t border-[#434655]/30 text-xs text-[#8d90a0]">
                <div className="flex justify-between">
                  <span>Total Delivered Assets:</span>
                  <span className="text-white font-semibold">{whiteBgCount + heroProppedCount + lifestyleCount} Images</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Cost per Asset:</span>
                  <span className="text-[#4edea3]">
                    ${Math.round(calculateTotal() / (whiteBgCount + heroProppedCount + lifestyleCount || 1))}/image
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Turnaround Guarantee:</span>
                  <span className="text-white">7 Business Days</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenBookDemo(`Product Photography ($${calculateTotal().toLocaleString()} list)`)}
              className="mt-6 w-full py-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
            >
              Reserve Studio Date →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
