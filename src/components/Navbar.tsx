import React, { useState, useRef, useEffect } from 'react';
import { RoutePath } from '../types';
import { ASSET_IMAGES } from '../data/mockData';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
  onOpenVideoModal?: (title: string, subtitle: string) => void;
  onOpenBookDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenVideoModal,
  onOpenBookDemo,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<'creative' | 'compliance' | 'gifting' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = (path: RoutePath) => {
    onNavigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-40 bg-[#0f131d]/90 backdrop-blur-xl border-b border-[#434655]/20 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Crest & Group Title */}
        <button
          onClick={() => handleLinkClick('/')}
          className="flex items-center gap-3 shrink-0 text-left cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-lg bg-[#262a35] flex items-center justify-center text-[#b4c5ff] group-hover:scale-105 group-hover:bg-[#2563eb]/20 transition-all shadow-[0_0_24px_-4px_rgba(37,99,235,0.25)]">
            <span className="material-symbols-outlined text-[24px]">corporate_fare</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-[17px] font-bold tracking-tight text-white uppercase group-hover:text-[#b4c5ff] transition-colors">
              AllBiz Digital
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8d90a0]">
              Creative • Compliance • Gifting
            </span>
          </div>
        </button>

        {/* Desktop Nav Items & Mega-Menus */}
        <nav className="hidden xl:flex items-center gap-1">
          {/* Dropdown 1: Creative & Media */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('creative')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'creative' ? null : 'creative')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeDropdown === 'creative' || currentPath.startsWith('/services')
                  ? 'text-white bg-[#262a35]'
                  : 'text-[#c3c6d7] hover:text-white hover:bg-[#262a35]/50'
              }`}
            >
              <span>Creative & Media</span>
              <span
                className={`material-symbols-outlined text-[16px] text-[#8d90a0] transition-transform duration-200 ${
                  activeDropdown === 'creative' ? 'rotate-180 text-[#b4c5ff]' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {/* Mega-Menu 1 Popover */}
            {activeDropdown === 'creative' && (
              <div className="absolute top-full left-0 pt-2 w-[790px] animate-fade-in z-50">
                <div className="bg-[#171b26] rounded-xl border border-[#434655]/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] p-6 grid grid-cols-12 gap-6">
                  {/* Left Column: 5 Production Services */}
                  <div className="col-span-7 flex flex-col gap-1">
                    <div className="flex items-center justify-between pb-2 border-b border-[#434655]/30 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#b4c5ff]">
                        Production Services & Media Verticals
                      </span>
                      <span className="text-[11px] text-[#8d90a0]">5 Active Services</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/services/videography')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">videocam</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#b4c5ff] transition-colors">
                          Commercial Videography
                        </span>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          Brand films, founder stories, and high-impact commercial spots.
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/services/product-photography')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#b4c5ff] transition-colors">
                          Product Photography
                        </span>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          Crisp e-commerce studio shots, macro textures, and lifestyle staging.
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/services/hotel-short-videos')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">travel_explore</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#b4c5ff] transition-colors">
                          Hotel & Hospitality Reels
                        </span>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          Viral 9:16 vertical tours and drone reels that drive direct bookings.
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/services/ugc-ads')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">smart_display</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#b4c5ff] transition-colors">
                          UGC Ads Studio
                        </span>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          Creator-led TikTok & Meta video ads built for maximum thumb-stop rate.
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/services/promotional-advertising')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">campaign</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#b4c5ff] transition-colors">
                          Promotional Ad Campaigns
                        </span>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          Full-funnel ad scripting, creative testing, and paid media scaling.
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Right Column: Featured Reel Thumbnail */}
                  <div className="col-span-5 bg-[#0a0e18] rounded-xl p-4 flex flex-col justify-between border border-[#434655]/20">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#2563eb]/20 text-[#b4c5ff]">
                          FEATURED REEL
                        </span>
                        <span className="text-xs text-[#4edea3] font-bold">+340% ROAS</span>
                      </div>
                      <div
                        onClick={() =>
                          onOpenVideoModal &&
                          onOpenVideoModal(
                            'AeroTech Global Ad Launch & St. Regis Campaign',
                            'Cinema-grade commercial production scaled across 14 markets'
                          )
                        }
                        className="relative h-32 rounded-lg overflow-hidden bg-[#262a35] group/thumb cursor-pointer"
                      >
                        <img
                          src={ASSET_IMAGES.cinemaSet}
                          alt="Showreel Preview"
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 flex items-center justify-center transition-colors">
                          <div className="w-10 h-10 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[24px]">play_arrow</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-bold uppercase text-[#8d90a0]">DTC & Hospitality</span>
                        <span className="font-semibold text-sm text-white leading-tight">
                          AeroTech & St. Regis Campaign
                        </span>
                        <p className="text-xs text-[#8d90a0] leading-relaxed">
                          How unified commercial storytelling transformed conversion across European and US markets.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleLinkClick('/work')}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#b4c5ff] hover:text-white transition-colors"
                    >
                      <span>See how we boosted client ROAS by 3.4x</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown 2: Compliance & Inspection */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('compliance')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'compliance' ? null : 'compliance')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeDropdown === 'compliance' || currentPath.startsWith('/solutions') || currentPath === '/verify-certificate'
                  ? 'text-white bg-[#262a35]'
                  : 'text-[#c3c6d7] hover:text-white hover:bg-[#262a35]/50'
              }`}
            >
              <span>Compliance & Inspection</span>
              <span
                className={`material-symbols-outlined text-[16px] text-[#8d90a0] transition-transform duration-200 ${
                  activeDropdown === 'compliance' ? 'rotate-180 text-[#4edea3]' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {/* Mega-Menu 2 Popover */}
            {activeDropdown === 'compliance' && (
              <div className="absolute top-full left-0 pt-2 w-[790px] animate-fade-in z-50">
                <div className="bg-[#171b26] rounded-xl border border-[#434655]/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] p-6 grid grid-cols-12 gap-6">
                  {/* Left Column: Software Platforms & Audits */}
                  <div className="col-span-7 flex flex-col gap-1">
                    <div className="flex items-center justify-between pb-2 border-b border-[#434655]/30 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#4edea3]">
                        Software Platforms & Institutional Audits
                      </span>
                      <span className="text-[11px] text-[#8d90a0]">IAR-112 USA Registry</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/solutions/compliance-platform')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white group-hover:text-[#4edea3] transition-colors">
                            Compliance360 Platform
                          </span>
                          <span className="text-[10px] font-mono text-[#8d90a0]">compliance360.isoxpert.com</span>
                        </div>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          AI-assisted ISO management system across 21 connected modules.
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/solutions/food-inspection-software')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">fact_check</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white group-hover:text-[#4edea3] transition-colors">
                            Inspect360 Food & Facility
                          </span>
                          <span className="text-[10px] font-mono text-[#8d90a0]">inspect360suite.com</span>
                        </div>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          Mobile FDA FSMA, HACCP, and third-party inspection workflows.
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/solutions/iso-certification')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white group-hover:text-[#4edea3] transition-colors">
                            ISO Certification & Audits
                          </span>
                          <span className="text-[10px] font-mono text-[#8d90a0]">companycertification.com</span>
                        </div>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          IAR-112 (USA) accredited certification & IAF MD 4 remote audits.
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/verify-certificate')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#4edea3] transition-colors">
                          Instant Certificate Check
                        </span>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          Verify any ISO certificate instantly via QR code or registry number.
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Right Column: Accredited Certification & Verification Portal */}
                  <div className="col-span-5 bg-[#0a0e18] rounded-xl p-4 flex flex-col justify-between border border-[#434655]/20">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#007d55]/30 text-[#4edea3]">
                          ACCREDITED REGISTRY
                        </span>
                        <span className="text-xs text-[#8d90a0] font-mono">IAR-112 USA</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#1c1f2a] border border-[#434655]/40 flex flex-col items-center justify-center text-center gap-1.5 py-4">
                        <span className="material-symbols-outlined text-[32px] text-[#4edea3]">verified_user</span>
                        <span className="text-xs font-bold uppercase tracking-wider text-white">
                          Federal Verification Node
                        </span>
                        <span className="text-[11px] text-[#8d90a0]">
                          256-bit cryptographically signed ISO certificates
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-sm text-white">Enterprise Audit Gateway</span>
                        <p className="text-xs text-[#8d90a0] leading-relaxed">
                          Direct API and portal access for Fortune 500 vendor risk validation and IAF MLA accreditation.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleLinkClick('/verify-certificate')}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#4edea3] hover:text-[#6ffbbe] transition-colors"
                    >
                      <span>Open Certificate Registry Console</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dropdown 3: Corporate Gifting */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('gifting')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === 'gifting' ? null : 'gifting')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeDropdown === 'gifting' || currentPath.startsWith('/gifting')
                  ? 'text-white bg-[#262a35]'
                  : 'text-[#c3c6d7] hover:text-white hover:bg-[#262a35]/50'
              }`}
            >
              <span>Corporate Gifting</span>
              <span
                className={`material-symbols-outlined text-[16px] text-[#8d90a0] transition-transform duration-200 ${
                  activeDropdown === 'gifting' ? 'rotate-180 text-[#ffb77d]' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {/* Mega-Menu 3 Popover */}
            {activeDropdown === 'gifting' && (
              <div className="absolute top-full left-0 pt-2 w-[790px] animate-fade-in z-50">
                <div className="bg-[#171b26] rounded-xl border border-[#434655]/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] p-6 grid grid-cols-12 gap-6">
                  {/* Left Column: B2B Custom Chocolates */}
                  <div className="col-span-7 flex flex-col gap-1">
                    <div className="flex items-center justify-between pb-2 border-b border-[#434655]/30 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb77d]">
                        Bespoke B2B Chocolatier & Atelier
                      </span>
                      <span className="text-[11px] text-[#8d90a0]">Belgian Couverture</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/gifting/custom-corporate-chocolates')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#d97707]/20 text-[#ffb77d] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">cookie</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white group-hover:text-[#ffb77d] transition-colors">
                            Custom Logo Chocolates
                          </span>
                          <span className="text-[10px] font-mono text-[#8d90a0]">craftychocolates.com</span>
                        </div>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          Your brand precision-molded into imported Belgian couverture chocolate.
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/gifting/design-studio')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#d97707]/20 text-[#ffb77d] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#ffb77d] transition-colors">
                          3D Chocolate Design Studio
                        </span>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          Upload your vector logo and preview custom chocolates in real time.
                        </span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleLinkClick('/gifting/corporate-events')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors text-left flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#d97707]/20 text-[#ffb77d] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#ffb77d] transition-colors">
                          Trade Show & VIP Gifting
                        </span>
                        <span className="text-xs text-[#8d90a0] leading-snug">
                          Bulk giveaway bites and luxury executive gift boxes for US events.
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Right Column: Live 3D Studio Preview Badge */}
                  <div className="col-span-5 bg-[#0a0e18] rounded-xl p-4 flex flex-col justify-between border border-[#434655]/20">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#d97707]/20 text-[#ffb77d]">
                          EXECUTIVE TIER
                        </span>
                        <span className="text-xs text-[#ffb77d] font-bold">Free 48-Hr Mockup</span>
                      </div>
                      <div className="relative h-28 rounded-lg overflow-hidden bg-[#262a35]">
                        <img
                          src={ASSET_IMAGES.chocolateMedallionEmboss}
                          alt="3D Chocolate Studio"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                          <span className="text-[11px] font-mono text-[#ffdcc3]">0.8mm Laser Mold Relief</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-sm text-white">Live 3D Studio Preview</span>
                        <p className="text-xs text-[#8d90a0] leading-relaxed">
                          CAD-grade rendering allows instant structural, mold-depth, and packaging proofing before batching.
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleLinkClick('/gifting/design-studio')}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#ffb77d] hover:text-[#ffdcc3] transition-colors"
                    >
                      <span>Launch 3D Design Studio</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Top-Level Direct Links */}
          <button
            type="button"
            onClick={() => handleLinkClick('/work')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              currentPath === '/work'
                ? 'text-white bg-[#262a35]'
                : 'text-[#c3c6d7] hover:text-white hover:bg-[#262a35]/50'
            }`}
          >
            Work & Case Studies
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('/pricing')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              currentPath === '/pricing'
                ? 'text-white bg-[#262a35]'
                : 'text-[#c3c6d7] hover:text-white hover:bg-[#262a35]/50'
            }`}
          >
            Pricing
          </button>

          <button
            type="button"
            onClick={() => handleLinkClick('/about')}
            className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              currentPath === '/about'
                ? 'text-white bg-[#262a35]'
                : 'text-[#c3c6d7] hover:text-white hover:bg-[#262a35]/50'
            }`}
          >
            About Us
          </button>
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              if (onOpenBookDemo) {
                onOpenBookDemo();
              } else {
                handleLinkClick('/contact');
              }
            }}
            className="px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all duration-200 shadow-[0_0_24px_-4px_rgba(37,99,235,0.35)] flex items-center gap-2 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            <span>Book Demo / Contact</span>
          </button>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 rounded-lg bg-[#1c1f2a] border border-[#434655]/40 text-[#c3c6d7] flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0f131d] border-b border-[#434655]/30 px-6 py-6 max-h-[85vh] overflow-y-auto flex flex-col gap-6 animate-fade-in">
          {/* Creative Section */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b4c5ff]">Creative & Media</span>
            <div className="grid grid-cols-1 gap-1 text-sm">
              <button
                onClick={() => handleLinkClick('/services/videography')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#b4c5ff]"
              >
                Commercial Videography
              </button>
              <button
                onClick={() => handleLinkClick('/services/product-photography')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#b4c5ff]"
              >
                Product Photography
              </button>
              <button
                onClick={() => handleLinkClick('/services/hotel-short-videos')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#b4c5ff]"
              >
                Hotel & Hospitality Reels
              </button>
              <button
                onClick={() => handleLinkClick('/services/ugc-ads')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#b4c5ff]"
              >
                UGC Ads Studio
              </button>
              <button
                onClick={() => handleLinkClick('/services/promotional-advertising')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#b4c5ff]"
              >
                Promotional Ad Campaigns
              </button>
            </div>
          </div>

          {/* Compliance Section */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4edea3]">Compliance & Inspection</span>
            <div className="grid grid-cols-1 gap-1 text-sm">
              <button
                onClick={() => handleLinkClick('/solutions/compliance-platform')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#4edea3]"
              >
                Compliance360 Platform
              </button>
              <button
                onClick={() => handleLinkClick('/solutions/food-inspection-software')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#4edea3]"
              >
                Inspect360 Food & Facility
              </button>
              <button
                onClick={() => handleLinkClick('/solutions/iso-certification')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#4edea3]"
              >
                ISO Certification & Audits
              </button>
              <button
                onClick={() => handleLinkClick('/verify-certificate')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#4edea3]"
              >
                Instant Certificate Check
              </button>
            </div>
          </div>

          {/* Gifting Section */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ffb77d]">Corporate Gifting</span>
            <div className="grid grid-cols-1 gap-1 text-sm">
              <button
                onClick={() => handleLinkClick('/gifting/custom-corporate-chocolates')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#ffb77d]"
              >
                Custom Logo Chocolates
              </button>
              <button
                onClick={() => handleLinkClick('/gifting/design-studio')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#ffb77d]"
              >
                3D Chocolate Design Studio
              </button>
              <button
                onClick={() => handleLinkClick('/gifting/corporate-events')}
                className="text-left py-1.5 text-[#dfe2f1] hover:text-[#ffb77d]"
              >
                Trade Show & VIP Gifting
              </button>
            </div>
          </div>

          {/* Direct Links */}
          <div className="pt-4 border-t border-[#434655]/30 flex flex-col gap-2 text-sm font-semibold">
            <button
              onClick={() => handleLinkClick('/work')}
              className="text-left py-1.5 text-[#dfe2f1] hover:text-white"
            >
              Work & Case Studies
            </button>
            <button
              onClick={() => handleLinkClick('/pricing')}
              className="text-left py-1.5 text-[#dfe2f1] hover:text-white"
            >
              Pricing
            </button>
            <button
              onClick={() => handleLinkClick('/about')}
              className="text-left py-1.5 text-[#dfe2f1] hover:text-white"
            >
              About Us & Governance
            </button>
            <button
              onClick={() => handleLinkClick('/contact')}
              className="text-left py-1.5 text-[#2563eb] hover:text-[#b4c5ff]"
            >
              Contact & Strategy Desk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
