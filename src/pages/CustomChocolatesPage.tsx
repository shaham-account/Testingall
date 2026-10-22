import React from 'react';
import { RoutePath } from '../types';
import { ASSET_IMAGES } from '../data/mockData';

interface CustomChocolatesPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const CustomChocolatesPage: React.FC<CustomChocolatesPageProps> = ({
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
          <span className="text-white">Custom Corporate Chocolates</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ffb77d] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">palette</span>
              BESPOKE CORPORATE GIFTING & EVENT BRANDING
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Idea, in Cocoa. Your Logo, Molded in Belgian Chocolate.
            </h1>
            <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
              Unforgettable custom-molded logo chocolates and executive gift boxes—designed in our studio, engineered in our own factory with zero outsourcing, and previewed live in 3D before you order.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('/gifting/design-studio')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#d97707] text-white hover:bg-[#b45309] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Launch the 3D Chocolate Design Studio</span>
                <span>→</span>
              </button>
              <button
                onClick={() => onOpenBookDemo('Corporate Gifting - Bulk Quote')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#1c1f2a] hover:bg-[#262a35] text-white border border-[#434655]/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Corporate Bulk Quote</span>
              </button>
              <a
                href="https://craftychocolates.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#8d90a0] hover:text-[#ffb77d] transition-colors flex items-center gap-1 ml-1"
              >
                <span>External Atelier Studio</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-[#171b26] border border-[#434655]/40 shadow-2xl">
              <img
                src={ASSET_IMAGES.chocolateMedallionEmboss}
                alt="Embossed Belgian Chocolate"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#0f131d]/90 backdrop-blur-md p-3 rounded-lg flex items-center justify-between text-xs">
                <span className="text-white font-medium">0.8mm Vector Precision Emboss</span>
                <span className="text-[#ffb77d] font-bold">Belgian Couverture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fast Facts Bar */}
        <div className="p-4 sm:p-6 rounded-xl bg-[#0a0e18] border border-[#434655]/30 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#ffb77d]">timer</span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Free 3D Mockup</span>
              <span className="text-[11px] text-[#8d90a0]">Within 48 Hours</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#ffb77d]">local_shipping</span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">5–6 Day Lead Time</span>
              <span className="text-[11px] text-[#8d90a0]">Domestic US Factory</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#ffb77d]">cookie</span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Belgian Couverture</span>
              <span className="text-[11px] text-[#8d90a0]">Pure Single-Origin Cocoa</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#ffb77d]">verified</span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">100% Clean Room</span>
              <span className="text-[11px] text-[#8d90a0]">Halal & Gluten-Free</span>
            </div>
          </div>
        </div>

        {/* Two Signature Recipes */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ffb77d]">RECIPE FORMULATION</span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">
              Two Signature Recipes, One Uncompromising Standard
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#d97707]/20 text-[#ffb77d] w-fit">
                  EXECUTIVE BOARDROOM & VIP
                </span>
                <h3 className="font-headline font-bold text-xl text-white">1. Premium Blend (Belgian Couverture)</h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Deeper, rounder flavor profile crafted for VIP client retention gifts, executive boardrooms, luxury hotel turndown service, and milestone closing hampers. Made with 100% pure cocoa butter and single-origin beans.
                </p>
              </div>
              <div className="pt-3 border-t border-[#434655]/30 flex justify-between text-xs text-[#ffb77d] font-semibold">
                <span>Available in 54.5% Dark & 33.6% Milk</span>
                <span>MOQ 25 units</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#2563eb]/20 text-[#b4c5ff] w-fit">
                  HIGH-VOLUME TRADE SHOWS
                </span>
                <h3 className="font-headline font-bold text-xl text-white">2. Signature Blend (Event Recipe)</h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  The same imported, gluten-free, Halal-certified ingredient standard in a lighter recipe priced for high-volume trade show giveaways, conferences, and large staff appreciation orders with maximum shelf-stability.
                </p>
              </div>
              <div className="pt-3 border-t border-[#434655]/30 flex justify-between text-xs text-[#b4c5ff] font-semibold">
                <span>Optimized for Volume Bites</span>
                <span>From $1.25/unit (MOQ 250)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 100% Under One Roof (Zero Outsourcing) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase text-[#ffb77d]">IN-HOUSE MANUFACTURING</span>
            <h3 className="font-headline font-bold text-2xl text-white">100% Under One Roof (Zero Outsourcing)</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Unlike promotional merch brokers who slap stickers on generic boxes, we laser-cut and vacuum-form your custom chocolate mold in-house (up to 28 × 19 cm with 0.8 mm precision emboss height), cast the chocolate, print the wrappers, and assemble the luxury ribboned packaging under one roof.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded bg-[#0a0e18] text-xs font-mono text-[#ffb77d] border border-[#434655]/40">
                0.8mm Laser Relief
              </span>
              <span className="px-3 py-1 rounded bg-[#0a0e18] text-xs font-mono text-[#ffb77d] border border-[#434655]/40">
                Up to 28 × 19 cm Mold Beds
              </span>
              <span className="px-3 py-1 rounded bg-[#0a0e18] text-xs font-mono text-[#ffb77d] border border-[#434655]/40">
                Domestic Food-Grade Clean-Room
              </span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 flex justify-end">
            <button
              onClick={() => onNavigate('/gifting/design-studio')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#d97707] hover:bg-[#b45309] text-white font-headline font-bold text-sm transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">view_in_ar</span>
              <span>Launch 3D Studio Preview</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
