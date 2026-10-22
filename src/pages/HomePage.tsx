import React, { useState } from 'react';
import { RoutePath } from '../types';
import {
  ASSET_IMAGES,
  CERTIFICATE_DATABASE,
  CHOCOLATE_PIECES,
  COCOA_PROFILES,
  FOIL_OPTIONS,
} from '../data/mockData';
import { ThreeChocolateCanvas } from '../components/ThreeChocolateCanvas';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenVideoModal: (title: string, subtitle: string) => void;
  onOpenCertLedger: (cert: typeof CERTIFICATE_DATABASE[0]) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenVideoModal,
  onOpenCertLedger,
  onOpenBookDemo,
}) => {
  // Mega tray state
  const [megaTrayTab, setMegaTrayTab] = useState<'creative' | 'compliance' | 'gifting'>('creative');
  const [isTrayCollapsed, setIsTrayCollapsed] = useState(false);

  // Certificate checker state
  const [certInput, setCertInput] = useState('VG-9001-2024-8841');
  const [searchedCert, setSearchedCert] = useState(CERTIFICATE_DATABASE[0]);
  const [certError, setCertError] = useState<string | null>(null);

  // Chocolate 3D configurator state
  const [selectedPiece, setSelectedPiece] = useState(CHOCOLATE_PIECES[0]);
  const [selectedCocoa, setSelectedCocoa] = useState(COCOA_PROFILES[0]);
  const [selectedFoil, setSelectedFoil] = useState(FOIL_OPTIONS[0]);
  const [logoText, setLogoText] = useState('ALLBIZDIGITAL');
  const [embossDepth, setEmbossDepth] = useState(1.8);

  // Pricing tab state
  const [priceTab, setPriceTab] = useState<'saas' | 'creative' | 'gifting'>('saas');

  const handleCertLookup = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = certInput.trim().toUpperCase();
    const found = CERTIFICATE_DATABASE.find(
      (c) =>
        c.registryNumber.toUpperCase() === query ||
        c.companyName.toUpperCase().includes(query)
    );
    if (found) {
      setSearchedCert(found);
      setCertError(null);
    } else {
      setCertError(`No active accredited record found for ID: "${certInput}". Try VG-9001-2024-8841 or VG-27001-2024-9102.`);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* ========================================== */}
      {/* INTERACTIVE MEGA-MENU ARCHITECTURE VIEWER  */}
      {/* ========================================== */}
      <section className="w-full bg-[#0a0e18] border-b border-[#434655]/30 px-6 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#2563eb]/20 text-[#b4c5ff]">
                <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse"></span>
                ENTERPRISE CONSOLE
              </span>
              <span className="font-headline font-bold text-sm text-white">Interactive Mega-Menu Explorer</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setMegaTrayTab('creative');
                  setIsTrayCollapsed(false);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  megaTrayTab === 'creative' && !isTrayCollapsed
                    ? 'bg-[#262a35] text-white shadow'
                    : 'bg-[#1c1f2a] text-[#8d90a0] hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span> Creative & Media
              </button>
              <button
                type="button"
                onClick={() => {
                  setMegaTrayTab('compliance');
                  setIsTrayCollapsed(false);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  megaTrayTab === 'compliance' && !isTrayCollapsed
                    ? 'bg-[#262a35] text-white shadow'
                    : 'bg-[#1c1f2a] text-[#8d90a0] hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span> Compliance & Inspection
              </button>
              <button
                type="button"
                onClick={() => {
                  setMegaTrayTab('gifting');
                  setIsTrayCollapsed(false);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  megaTrayTab === 'gifting' && !isTrayCollapsed
                    ? 'bg-[#262a35] text-white shadow'
                    : 'bg-[#1c1f2a] text-[#8d90a0] hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#ffb77d]"></span> Corporate Gifting
              </button>
              <button
                type="button"
                onClick={() => setIsTrayCollapsed(!isTrayCollapsed)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#2563eb]/20 text-[#b4c5ff] hover:bg-[#2563eb]/30 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {isTrayCollapsed ? 'expand_more' : 'expand_less'}
                </span>
                <span>{isTrayCollapsed ? 'Expand Tray' : 'Collapse Tray'}</span>
              </button>
            </div>
          </div>

          {/* Mega-Menu Drawer Panel */}
          {!isTrayCollapsed && (
            <div className="w-full transition-all duration-300">
              {/* CREATIVE TRAY */}
              {megaTrayTab === 'creative' && (
                <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/40 shadow-xl grid grid-cols-12 gap-6 animate-fade-in">
                  <div className="col-span-12 lg:col-span-7 flex flex-col gap-1">
                    <div className="flex items-center justify-between pb-2 border-b border-[#434655]/20 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#b4c5ff]">
                        Cinematic Production & DTC Media Verticals
                      </span>
                      <span className="text-xs text-[#8d90a0]">5 Active Services</span>
                    </div>

                    <button
                      onClick={() => onNavigate('/services/videography')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 flex items-center justify-center text-[#b4c5ff] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">videocam</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#b4c5ff] transition-colors">
                          Commercial Videography
                        </span>
                        <span className="text-xs text-[#8d90a0]">Brand films, founder stories, and high-impact commercial spots.</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('/services/product-photography')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 flex items-center justify-center text-[#b4c5ff] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#b4c5ff] transition-colors">
                          Product Photography
                        </span>
                        <span className="text-xs text-[#8d90a0]">Crisp e-commerce studio shots, macro textures, and lifestyle staging.</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('/services/hotel-short-videos')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 flex items-center justify-center text-[#b4c5ff] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">flight</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#b4c5ff] transition-colors">
                          Hotel & Hospitality Reels
                        </span>
                        <span className="text-xs text-[#8d90a0]">Viral 9:16 vertical tours and drone reels that drive direct bookings.</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('/services/ugc-ads')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 flex items-center justify-center text-[#b4c5ff] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">smart_display</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#b4c5ff] transition-colors">
                          UGC Ads Studio
                        </span>
                        <span className="text-xs text-[#8d90a0]">Creator-led TikTok & Meta video ads built for maximum thumb-stop rate.</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('/services/promotional-advertising')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#2563eb]/20 flex items-center justify-center text-[#b4c5ff] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">campaign</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#b4c5ff] transition-colors">
                          Promotional Ad Campaigns
                        </span>
                        <span className="text-xs text-[#8d90a0]">Full-funnel ad scripting, creative testing, and paid media scaling.</span>
                      </div>
                    </button>
                  </div>

                  <div className="col-span-12 lg:col-span-5 bg-[#0a0e18] rounded-xl p-4 flex flex-col justify-between border border-[#434655]/30">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#2563eb]/20 text-[#b4c5ff]">
                          FEATURED CASE STUDY
                        </span>
                        <span className="text-xs text-[#4edea3] font-bold">+340% ROAS</span>
                      </div>
                      <div
                        onClick={() =>
                          onOpenVideoModal(
                            'AeroTech Global Ad Launch & St. Regis Campaign',
                            'Unified creative production transformed conversion rates'
                          )
                        }
                        className="relative h-40 rounded-lg overflow-hidden bg-[#262a35] group cursor-pointer"
                      >
                        <img
                          src={ASSET_IMAGES.cinemaSet}
                          alt="Featured Case Study"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                          <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[28px]">play_arrow</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#8d90a0]">
                          Direct-To-Consumer & Hospitality
                        </span>
                        <span className="font-semibold text-sm text-white">AeroTech & St. Regis Campaign</span>
                        <p className="text-xs text-[#8d90a0]">
                          How unified commercial storytelling transformed conversion rates across 14 European and North American markets.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigate('/work')}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#b4c5ff] hover:text-white transition-colors text-left"
                    >
                      See how we boosted client ROAS by 3.4x →
                    </button>
                  </div>
                </div>
              )}

              {/* COMPLIANCE TRAY */}
              {megaTrayTab === 'compliance' && (
                <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/40 shadow-xl grid grid-cols-12 gap-6 animate-fade-in">
                  <div className="col-span-12 lg:col-span-7 flex flex-col gap-1">
                    <div className="flex items-center justify-between pb-2 border-b border-[#434655]/20 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#4edea3]">
                        Institutional SaaS & Digital Registries
                      </span>
                      <span className="text-xs text-[#8d90a0]">Accreditation IAR-112 USA</span>
                    </div>

                    <button
                      onClick={() => onNavigate('/solutions/compliance-platform')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#007d55]/30 flex items-center justify-center text-[#4edea3] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#4edea3] transition-colors">
                          Compliance360 Platform
                        </span>
                        <span className="text-xs text-[#8d90a0]">AI-assisted ISO management system across 21 connected modules.</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('/solutions/food-inspection-software')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#007d55]/30 flex items-center justify-center text-[#4edea3] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">fact_check</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#4edea3] transition-colors">
                          Inspect360 Food & Facility
                        </span>
                        <span className="text-xs text-[#8d90a0]">Mobile FDA FSMA, HACCP, and third-party inspection workflows.</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('/solutions/iso-certification')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#007d55]/30 flex items-center justify-center text-[#4edea3] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#4edea3] transition-colors">
                          ISO Certification & Audits
                        </span>
                        <span className="text-xs text-[#8d90a0]">IAR-112 (USA) accredited certification & IAF MD 4 remote audits.</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('/verify-certificate')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#007d55]/30 flex items-center justify-center text-[#4edea3] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#4edea3] transition-colors">
                          Instant Certificate Check
                        </span>
                        <span className="text-xs text-[#8d90a0]">Verify any ISO certificate instantly via QR code or registry number.</span>
                      </div>
                    </button>
                  </div>

                  <div className="col-span-12 lg:col-span-5 bg-[#0a0e18] rounded-xl p-4 flex flex-col justify-between border border-[#434655]/30">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#007d55]/30 text-[#4edea3]">
                          IAR-112 USA ACCREDITED
                        </span>
                        <span className="text-xs text-[#8d90a0]">IAF MD 4 Compliant</span>
                      </div>
                      <div className="p-3.5 rounded-lg bg-[#1c1f2a] flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#262a35] flex items-center justify-center text-[#4edea3]">
                            <span className="material-symbols-outlined text-[24px]">verified_user</span>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-white block">Accredited Certification Node</span>
                            <span className="text-[11px] text-[#8d90a0]">Cryptographic Registry Validation</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-[#434655]/30 flex items-center justify-between text-[11px] text-[#8d90a0]">
                          <span>SHA-256 Public Key Hash</span>
                          <span className="font-mono text-[#4edea3]">0x89F4...B29A</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-sm text-white">Institutional Audit Portal</span>
                        <p className="text-xs text-[#8d90a0]">
                          Instant third-party vendor validation for defense contractors, food processing networks, and enterprise IT.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigate('/verify-certificate')}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#4edea3] hover:text-[#6ffbbe] transition-colors text-left"
                    >
                      Access Public Certificate Registry →
                    </button>
                  </div>
                </div>
              )}

              {/* GIFTING TRAY */}
              {megaTrayTab === 'gifting' && (
                <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/40 shadow-xl grid grid-cols-12 gap-6 animate-fade-in">
                  <div className="col-span-12 lg:col-span-7 flex flex-col gap-1">
                    <div className="flex items-center justify-between pb-2 border-b border-[#434655]/20 mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#ffb77d]">
                        Crafty Chocolates Atelier • Zero Outsourcing
                      </span>
                      <span className="text-xs text-[#8d90a0]">Belgian Couverture</span>
                    </div>

                    <button
                      onClick={() => onNavigate('/gifting/custom-corporate-chocolates')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#d97707]/20 flex items-center justify-center text-[#ffb77d] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">cookie</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#ffb77d] transition-colors">
                          Custom Logo Chocolates
                        </span>
                        <span className="text-xs text-[#8d90a0]">Your brand precision-molded into imported Belgian couverture chocolate.</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('/gifting/design-studio')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#d97707]/20 flex items-center justify-center text-[#ffb77d] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#ffb77d] transition-colors">
                          3D Chocolate Design Studio
                        </span>
                        <span className="text-xs text-[#8d90a0]">Upload your vector logo and preview your custom chocolate in real time.</span>
                      </div>
                    </button>

                    <button
                      onClick={() => onNavigate('/gifting/corporate-events')}
                      className="p-2.5 rounded-lg hover:bg-[#262a35] transition-colors group flex items-start gap-3 text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#d97707]/20 flex items-center justify-center text-[#ffb77d] shrink-0 group-hover:scale-105 transition-transform">
                        <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white group-hover:text-[#ffb77d] transition-colors">
                          Trade Show & VIP Gifting
                        </span>
                        <span className="text-xs text-[#8d90a0]">Bulk giveaway bites and luxury executive gift boxes for US events.</span>
                      </div>
                    </button>
                  </div>

                  <div className="col-span-12 lg:col-span-5 bg-[#0a0e18] rounded-xl p-4 flex flex-col justify-between border border-[#434655]/30">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#d97707]/20 text-[#ffb77d]">
                          FREE 48-HR 3D MOCKUP
                        </span>
                        <span className="text-xs text-[#ffb77d] font-bold">100% Clean Room</span>
                      </div>
                      <div className="relative h-40 rounded-lg overflow-hidden bg-[#262a35] flex items-center justify-center">
                        <img
                          src={ASSET_IMAGES.chocolateBarSlate}
                          alt="Bespoke Dark Chocolate"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 left-2 right-2 bg-[#0f131d]/85 backdrop-blur-md px-3 py-1.5 rounded flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">54.5% Dark Belgian</span>
                          <span className="text-xs text-[#ffb77d] font-bold">48-Hr CAD Turnaround</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold text-sm text-white">Precision Molecular Molding</span>
                        <p className="text-xs text-[#8d90a0]">
                          Food-grade silicone tooling machined in our domestic clean-room for micrometer-accurate vector logo transfers.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigate('/gifting/design-studio')}
                      className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#ffb77d] hover:text-[#ffdcc3] transition-colors text-left"
                    >
                      Launch 3D Configurator Studio →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ========================================== */}
      {/* HERO SECTION                               */}
      {/* ========================================== */}
      <section className="w-full relative overflow-hidden px-6 lg:px-12 py-16 lg:py-24">
        {/* Subtle Ambient Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#2563eb]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-[#d97707]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-[#007d55]/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-8">
          {/* Eyebrow Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#1c1f2a] text-[#dfe2f1] border border-[#434655]/40 shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-[#4edea3]">verified_user</span>
              <span className="tracking-wider uppercase">MULTI-DISCIPLINARY ENTERPRISE ECOSYSTEM</span>
            </div>
            <span className="text-xs text-[#8d90a0]">
              IAR-112 USA Accredited Registry • ISO/IEC 27001 Certified ISMS
            </span>
          </div>

          {/* H1 Headline & Subtitle */}
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.12]">
                Built to Help Modern Organizations Prove Their Quality
                <span className="text-[#2563eb]">—</span>and Show It to the World.
              </h1>
              <p className="text-base sm:text-lg text-[#8d90a0] max-w-3xl leading-relaxed">
                From accredited ISO compliance SaaS and FDA inspection workflows to viral cinema-grade commercial
                production and bespoke Belgian chocolate gifting—engineered under one unified standard of excellence.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-3 justify-end">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('/solutions/compliance-platform')}
                  className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-all duration-200 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Solutions & Demo</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/gifting/design-studio')}
                  className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#d97707] text-white hover:bg-[#b45309] transition-all duration-200 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
                  <span>Launch 3D Chocolate Studio</span>
                </button>
              </div>
              <span className="text-xs text-[#8d90a0] text-center lg:text-left">
                Immediate self-service sandbox or dedicated procurement consultations.
              </span>
            </div>
          </div>

          {/* Live Division Pill Selectors */}
          <div className="mt-4 p-1.5 rounded-xl bg-[#171b26] border border-[#434655]/40 max-w-3xl flex flex-wrap items-center gap-2">
            <button
              onClick={() => onNavigate('/services/videography')}
              className="flex-1 min-w-[200px] px-4 py-3 rounded-lg bg-[#1c1f2a] hover:bg-[#262a35] transition-colors flex items-center gap-3 text-left"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] shrink-0"></span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Creative & Media</span>
                <span className="text-xs text-[#8d90a0]">Production • Ads • UGC</span>
              </div>
            </button>
            <button
              onClick={() => onNavigate('/solutions/compliance-platform')}
              className="flex-1 min-w-[200px] px-4 py-3 rounded-lg bg-[#1c1f2a] hover:bg-[#262a35] transition-colors flex items-center gap-3 text-left"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] shrink-0"></span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Compliance360 SaaS</span>
                <span className="text-xs text-[#8d90a0]">ISO • FSMA • Audits</span>
              </div>
            </button>
            <button
              onClick={() => onNavigate('/gifting/custom-corporate-chocolates')}
              className="flex-1 min-w-[200px] px-4 py-3 rounded-lg bg-[#1c1f2a] hover:bg-[#262a35] transition-colors flex items-center gap-3 text-left"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffb77d] shrink-0"></span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Crafty Chocolates</span>
                <span className="text-xs text-[#8d90a0]">3D Logos • VIP Gifting</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* AUTHORITY TRUST METRICS TICKER             */}
      {/* ========================================== */}
      <section className="w-full bg-[#0a0e18] border-y border-[#434655]/20 py-8 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="flex flex-col gap-1 p-3.5 rounded-lg bg-[#1c1f2a]/50 border border-[#434655]/20">
            <span className="font-headline text-3xl font-bold text-white">250+</span>
            <span className="text-xs text-[#8d90a0]">Organizations Served Since 1997</span>
          </div>
          <div className="flex flex-col gap-1 p-3.5 rounded-lg bg-[#1c1f2a]/50 border border-[#434655]/20">
            <span className="font-headline text-3xl font-bold text-[#4edea3]">IAR-112</span>
            <span className="text-xs text-[#8d90a0]">USA Accredited Certification</span>
          </div>
          <div className="flex flex-col gap-1 p-3.5 rounded-lg bg-[#1c1f2a]/50 border border-[#434655]/20">
            <span className="font-headline text-3xl font-bold text-[#b4c5ff]">27001</span>
            <span className="text-xs text-[#8d90a0]">ISO/IEC Certified ISMS Platform</span>
          </div>
          <div className="flex flex-col gap-1 p-3.5 rounded-lg bg-[#1c1f2a]/50 border border-[#434655]/20">
            <span className="font-headline text-3xl font-bold text-white">21</span>
            <span className="text-xs text-[#8d90a0]">Connected Enterprise Modules</span>
          </div>
          <div className="flex flex-col gap-1 p-3.5 rounded-lg bg-[#1c1f2a]/50 border border-[#434655]/20">
            <span className="font-headline text-3xl font-bold text-[#ffb77d]">100%</span>
            <span className="text-xs text-[#8d90a0]">In-House Chocolate Factory</span>
          </div>
          <div className="flex flex-col gap-1 p-3.5 rounded-lg bg-[#1c1f2a]/50 border border-[#434655]/20">
            <span className="font-headline text-3xl font-bold text-white">48-Hr</span>
            <span className="text-xs text-[#8d90a0]">Free 3D Prototyping Turnaround</span>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* DIVISION 1: CREATIVE & MEDIA SERVICES      */}
      {/* ========================================== */}
      <section className="w-full px-6 lg:px-12 py-20" id="creative">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b4c5ff] flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">movie</span>
                CINEMA-GRADE PRODUCTION & VIRAL SHORT-FORM
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white">
                Visual Storytelling Engineered for Modern ROAS
              </h2>
              <p className="text-sm sm:text-base text-[#8d90a0]">
                Full-stack commercial broadcast capabilities paired with rapid UGC iteration teams to command
                consumer retention and scale enterprise customer acquisition.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#2563eb]/20 text-[#b4c5ff] border border-[#2563eb]/30">
                4K/6K Cinema Rigging • In-House Color Lab
              </span>
            </div>
          </div>

          {/* 5 Core Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Commercial Videography */}
            <div
              onClick={() => onNavigate('/services/videography')}
              className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6 hover:border-[#2563eb]/60 hover:bg-[#1c1f2a] transition-all cursor-pointer group"
            >
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">movie_edit</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-white group-hover:text-[#b4c5ff] transition-colors">
                  Commercial Videography
                </h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  4K/6K cinema camera setups, pre-production storyboarding, multi-aspect ratio master deliverables for broadcast, connected TV, and high-impact digital showcases.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#434655]/30">
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">ARRI/RED RAW</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">Scriptwriting</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">Full Licensing</span>
              </div>
            </div>

            {/* 2. Product Photography */}
            <div
              onClick={() => onNavigate('/services/product-photography')}
              className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6 hover:border-[#2563eb]/60 hover:bg-[#1c1f2a] transition-all cursor-pointer group"
            >
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">camera</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-white group-hover:text-[#b4c5ff] transition-colors">
                  Product Photography
                </h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Pure RGB 255 studio-lit Amazon shots, propped macro textures, and luxury lifestyle staging crafted to elevate brand perception and increase click-through metrics.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#434655]/30">
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">Pure White 255</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">Macro 1:1</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">100MP Medium Format</span>
              </div>
            </div>

            {/* 3. Hotel & Hospitality Reels */}
            <div
              onClick={() => onNavigate('/services/hotel-short-videos')}
              className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6 hover:border-[#2563eb]/60 hover:bg-[#1c1f2a] transition-all cursor-pointer group"
            >
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">travel_explore</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-white group-hover:text-[#b4c5ff] transition-colors">
                  Hotel & Hospitality Reels
                </h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  First-person POV guest journeys, agile FPV drone architectural fly-throughs, and culinary micro-reels engineered to drive direct booking channel conversion.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#434655]/30">
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">FPV Interior Drones</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">9:16 Viral Cuts</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">Direct Booking CTA</span>
              </div>
            </div>

            {/* 4. UGC Ads Studio */}
            <div
              onClick={() => onNavigate('/services/ugc-ads')}
              className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6 hover:border-[#2563eb]/60 hover:bg-[#1c1f2a] transition-all cursor-pointer group"
            >
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[28px]">group_work</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-white group-hover:text-[#b4c5ff] transition-colors">
                  UGC Ads Studio
                </h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Engineered 3-second visual hooks, Problem-Agitation-Solution narrative frameworks, and an active vetted US creator roster built specifically for TikTok & Meta.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#434655]/30">
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">3-Sec Hook Variants</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">US Creator Network</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">Ad Testing Sprints</span>
              </div>
            </div>

            {/* 5. Promotional Ad Campaigns */}
            <div
              onClick={() => onNavigate('/services/promotional-advertising')}
              className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6 hover:border-[#2563eb]/60 hover:bg-[#1c1f2a] transition-all cursor-pointer group md:col-span-2 lg:col-span-2"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex flex-col gap-3 max-w-lg">
                  <div className="w-12 h-12 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">trending_up</span>
                  </div>
                  <h3 className="font-headline font-bold text-lg text-white group-hover:text-[#b4c5ff] transition-colors">
                    Promotional Ad Campaigns
                  </h3>
                  <p className="text-xs text-[#8d90a0] leading-relaxed">
                    Weekly multi-variant creative testing, BFCM tentpole production, script matrices, and cross-channel landing page alignment engineered to sustainably drop customer acquisition costs.
                  </p>
                </div>

                {/* Quick ROAS mini callout */}
                <div className="p-4 rounded-lg bg-[#262a35] flex flex-col gap-1 min-w-[220px] border border-[#434655]/40">
                  <span className="text-[10px] font-bold uppercase text-[#b4c5ff]">Average Retention</span>
                  <span className="font-headline text-3xl font-bold text-white">68.4%</span>
                  <span className="text-xs text-[#8d90a0]">Past 3-second threshold across 4.2M paid impressions</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#434655]/30">
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">Multi-Variant Testing</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">BFCM Scaling</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#dfe2f1]">Full-Funnel Scripting</span>
              </div>
            </div>
          </div>

          {/* Visual Showreel & Case Study Spotlight Card */}
          <div className="p-8 lg:p-10 rounded-2xl bg-[#171b26] border border-[#434655]/40 grid grid-cols-12 gap-8 items-center shadow-xl">
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#2563eb]/20 text-[#b4c5ff] border border-[#2563eb]/30">
                  CASE SPOTLIGHT
                </span>
                <span className="text-xs text-[#8d90a0]">Consumer Hardware • North America</span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white leading-snug">
                How Apex Creative Transformed AeroTech’s Direct Channel with a 3.4x ROAS Boost in 60 Days
              </h3>
              <p className="text-sm text-[#8d90a0] leading-relaxed">
                By shifting from static 3D renders to cinema-lit high-speed macro product shots and authentic founder
                storytelling, we slashed CPA from $84 to $31 while scaling daily ad spend across Meta and TikTok.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-2">
                <div className="flex flex-col">
                  <span className="font-headline text-2xl font-bold text-[#b4c5ff]">+340%</span>
                  <span className="text-xs text-[#8d90a0]">ROAS Improvement</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-2xl font-bold text-white">-63%</span>
                  <span className="text-xs text-[#8d90a0]">Blended CAC</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-headline text-2xl font-bold text-[#4edea3]">2.8M</span>
                  <span className="text-xs text-[#8d90a0]">Organic Reel Views</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div
                onClick={() =>
                  onOpenVideoModal(
                    'AeroTech Global Ad Launch & St. Regis Campaign',
                    'High-speed macro cinematography & authentic founder storytelling'
                  )
                }
                className="relative rounded-xl overflow-hidden bg-[#262a35] group cursor-pointer shadow-2xl"
              >
                <img
                  src={ASSET_IMAGES.cameraRigWaterSplash}
                  alt="Film Production Set"
                  className="h-64 sm:h-72 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-[#2563eb] flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[36px]">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* DIVISION 2: COMPLIANCE & INSPECTION SAAS   */}
      {/* ========================================== */}
      <section className="w-full bg-[#0a0e18] border-t border-[#434655]/20 px-6 lg:px-12 py-20" id="compliance">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4edea3] flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                INTEGRATED COMPLIANCE & MANAGEMENT SYSTEM SAAS
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white">
                Run Your Entire Management System in One Connected Platform
              </h2>
              <p className="text-sm sm:text-base text-[#8d90a0]">
                AI-assisted ISO documentation, mobile FDA inspection workflows, and institutional IAR-112
                certification—eliminating spreadsheets and manual auditor audits.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#007d55]/30 text-[#4edea3] border border-[#4edea3]/40 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">shield_lock</span>
                21 CFR Part 11 • ISO/IEC 27001 ISMS
              </span>
            </div>
          </div>

          {/* 3-Step Flow Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#007d55]/30 text-[#4edea3] font-headline font-bold text-sm flex items-center justify-center">
                  1
                </span>
                <span className="text-[11px] font-bold text-[#8d90a0] uppercase">STEP ONE</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline font-bold text-base text-white">Subscribe to Your Standards</h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Select any combination of standards: ISO 9001, ISO 27001, ISO 45001, ISO 14001, SOC 2, FDA QMSR, and HACCP with instant clause activation.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#4edea3]">ISO 9001</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#4edea3]">ISO 27001</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#4edea3]">FDA QMSR</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#007d55]/30 text-[#4edea3] font-headline font-bold text-sm flex items-center justify-center">
                  2
                </span>
                <span className="text-[11px] font-bold text-[#8d90a0] uppercase">STEP TWO</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline font-bold text-base text-white">Generate AI Documentation</h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Tailored, clause-mapped policies, process SOPs, cryptographic SHA-256 e-signatures, and real-time gap analysis produced in minutes, not months.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#4edea3]">Clause Mapping</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#4edea3]">SHA-256 Sign</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#007d55]/30 text-[#4edea3] font-headline font-bold text-sm flex items-center justify-center">
                  3
                </span>
                <span className="text-[11px] font-bold text-[#8d90a0] uppercase">STEP THREE</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline font-bold text-base text-white">Implement, Operate & Improve</h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Mobile non-conformance logs (NCRs), automated corrective actions (CAPAs), digital audit trails, and 100% remote IAF MD 4 audit readiness.
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#4edea3]">NCR • CAPA</span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#262a35] text-[#4edea3]">Remote Audits</span>
              </div>
            </div>
          </div>

          {/* 21 Workspace Modules & Registry Widget Split */}
          <div className="grid grid-cols-12 gap-6">
            {/* 21 Modules Bento Block */}
            <div className="col-span-12 lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="font-headline font-bold text-lg text-white">21 Connected Workspace Modules</h3>
                  <span className="text-xs text-[#8d90a0]">Four structured quadrants covering complete governance life cycle</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#007d55]/30 text-[#4edea3]">
                  UNIFIED DATA CORE
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#4edea3] uppercase">1. GOVERN</span>
                  <div className="flex flex-col text-xs text-[#8d90a0] gap-1">
                    <span className="text-white font-medium">• Policy Studio</span>
                    <span className="text-white font-medium">• Objectives & KPIs</span>
                    <span className="text-white font-medium">• Org Context Map</span>
                    <span className="text-white font-medium">• Legal Registry</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#4edea3] uppercase">2. MANAGE</span>
                  <div className="flex flex-col text-xs text-[#8d90a0] gap-1">
                    <span className="text-white font-medium">• Asset Registers</span>
                    <span className="text-white font-medium">• Risk Assessments</span>
                    <span className="text-white font-medium">• Supplier Auditing</span>
                    <span className="text-white font-medium">• Training Logs</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#4edea3] uppercase">3. ASSURE</span>
                  <div className="flex flex-col text-xs text-[#8d90a0] gap-1">
                    <span className="text-white font-medium">• Inspect360 Mobile</span>
                    <span className="text-white font-medium">• Internal Audits</span>
                    <span className="text-white font-medium">• HACCP Checkpoints</span>
                    <span className="text-white font-medium">• Evidence Locker</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#4edea3] uppercase">4. IMPROVE</span>
                  <div className="flex flex-col text-xs text-[#8d90a0] gap-1">
                    <span className="text-white font-medium">• CAPA Workflows</span>
                    <span className="text-white font-medium">• NCR Incident Hub</span>
                    <span className="text-white font-medium">• Mgmt Review</span>
                    <span className="text-white font-medium">• Change Logs</span>
                  </div>
                </div>
              </div>

              <div className="mt-auto p-3.5 rounded-lg bg-[#0a0e18] flex items-center justify-between border border-[#434655]/30 text-xs">
                <span className="text-[#8d90a0]">Cross-module bidirectional traceability: Clause → Policy → Record → Audit Evidence</span>
                <button
                  onClick={() => onNavigate('/solutions/compliance-platform')}
                  className="text-[#4edea3] hover:underline font-semibold flex items-center gap-1"
                >
                  <span>Explore Architecture</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Instant Certificate Verification Interactive Widget */}
            <div className="col-span-12 lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#171b26] border border-[#434655]/40 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-headline font-bold text-lg text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4edea3] text-[22px]">verified</span>
                    Instant Certificate Check
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#007d55]/30 text-[#4edea3]">
                    PUBLIC NODE
                  </span>
                </div>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Validate any accredited AllBiz Digital/Apex ISO certificate cryptographically. Test with our sample registry ID below:
                </p>

                {/* Search Input Box */}
                <form onSubmit={handleCertLookup} className="flex gap-2 pt-1">
                  <input
                    type="text"
                    value={certInput}
                    onChange={(e) => setCertInput(e.target.value)}
                    placeholder="Enter Certificate Registry Number..."
                    className="flex-1 bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#4edea3]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#007d55] text-white text-xs font-bold hover:bg-[#009667] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">search</span>
                    <span>Verify</span>
                  </button>
                </form>

                {certError && (
                  <div className="p-2.5 rounded bg-red-950/40 border border-red-500/30 text-xs text-red-300">
                    {certError}
                  </div>
                )}

                {/* Live Verification Result Box */}
                {searchedCert && (
                  <div className="p-4 rounded-lg bg-[#0f131d] border border-[#4edea3]/40 flex flex-col gap-3 shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping"></span>
                        <span className="text-xs font-bold text-[#4edea3]">STATUS: VALID & ACCREDITED</span>
                      </div>
                      <span className="text-[11px] text-[#8d90a0] font-mono">{searchedCert.registryNumber}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div>
                        <span className="text-[#8d90a0] text-[11px] block">Organization:</span>
                        <span className="text-white font-semibold block truncate">{searchedCert.companyName}</span>
                      </div>
                      <div>
                        <span className="text-[#8d90a0] text-[11px] block">Standard:</span>
                        <span className="text-white font-semibold block truncate">{searchedCert.standard}</span>
                      </div>
                      <div>
                        <span className="text-[#8d90a0] text-[11px] block">Accreditation:</span>
                        <span className="text-white font-semibold block">{searchedCert.accreditationNumber}</span>
                      </div>
                      <div>
                        <span className="text-[#8d90a0] text-[11px] block">Valid Through:</span>
                        <span className="text-[#4edea3] font-semibold block">{searchedCert.expiryDate}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-[#434655]/30 flex items-center justify-between text-xs text-[#8d90a0]">
                <span>256-bit ECDSA signature</span>
                <button
                  type="button"
                  onClick={() => searchedCert && onOpenCertLedger(searchedCert)}
                  className="text-[#4edea3] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Download IAF Certificate Ledger</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* DIVISION 3: BESPOKE CORPORATE CHOCOLATES   */}
      {/* ========================================== */}
      <section className="w-full px-6 lg:px-12 py-20" id="gifting">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ffb77d] flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">palette</span>
                BESPOKE CORPORATE GIFTING & EVENT BRANDING
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white">
                Your Idea, in Cocoa. Your Logo, Molded in Belgian Chocolate.
              </h2>
              <p className="text-sm sm:text-base text-[#8d90a0]">
                Unforgettable custom-molded logo chocolates and executive gift boxes—designed in our 3D CAD studio
                and cast in our own dedicated domestic clean-room with zero third-party outsourcing.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#d97707]/20 text-[#ffb77d] border border-[#ffb77d]/40 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                100% Belgian Couverture • Zero Outsourcing
              </span>
            </div>
          </div>

          {/* Fast Facts Ribbon */}
          <div className="p-4 sm:p-6 rounded-xl bg-[#171b26] border border-[#434655]/40 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d97707]/20 text-[#ffb77d] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">timer</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Free 3D Mockup</span>
                <span className="text-xs text-[#8d90a0]">Within 48 hours</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d97707]/20 text-[#ffb77d] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">5–6 Day Lead Time</span>
                <span className="text-xs text-[#8d90a0]">Fastest in the US</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d97707]/20 text-[#ffb77d] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">eco</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Imported Couverture</span>
                <span className="text-xs text-[#8d90a0]">Finest Belgian cocoa butter</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#d97707]/20 text-[#ffb77d] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">fact_check</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">100% Halal & Gluten-Free</span>
                <span className="text-xs text-[#8d90a0]">Certified clean facility</span>
              </div>
            </div>
          </div>

          {/* Interactive 3D Studio Mockup Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 grid grid-cols-12 gap-8 shadow-xl">
            {/* Interactive Controls */}
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline font-bold text-lg text-white">Interactive 3D Chocolate Configurator</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#d97707]/20 text-[#ffb77d]">
                    LIVE 3D VIEWPORT
                  </span>
                </div>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Select chocolate silhouette, cocoa profile, and foil wrapping to preview your branded confection:
                </p>

                {/* 1. Form Factor Selectors */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#c3c6d7] uppercase">Select Silhouette Size</span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {CHOCOLATE_PIECES.map((piece) => (
                      <button
                        key={piece.id}
                        type="button"
                        onClick={() => setSelectedPiece(piece)}
                        className={`p-2.5 rounded-lg text-left transition-all border cursor-pointer ${
                          selectedPiece.id === piece.id
                            ? 'bg-[#1c1f2a] border-[#ffb77d] shadow-sm'
                            : 'bg-[#262a35] border-transparent hover:border-[#434655]'
                        }`}
                      >
                        <span className="text-xs font-semibold text-white block">{piece.name}</span>
                        <span className="text-[11px] text-[#ffb77d] block">{piece.weight}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Cocoa Blend Selectors */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#c3c6d7] uppercase">Couverture Cocoa Profile</span>
                  <div className="grid grid-cols-3 gap-2">
                    {COCOA_PROFILES.map((cocoa) => (
                      <button
                        key={cocoa.id}
                        type="button"
                        onClick={() => setSelectedCocoa(cocoa)}
                        className={`p-2.5 rounded-lg text-left transition-all border flex items-center gap-2 cursor-pointer ${
                          selectedCocoa.id === cocoa.id
                            ? 'bg-[#1c1f2a] border-[#ffb77d] shadow-sm'
                            : 'bg-[#262a35] border-transparent hover:border-[#434655]'
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full shrink-0 border border-white/20"
                          style={{ backgroundColor: cocoa.colorHex }}
                        ></span>
                        <div>
                          <span className="text-xs font-semibold text-white block">{cocoa.name.split(' ')[0]}</span>
                          <span className="text-[10px] text-[#8d90a0]">{cocoa.percentage}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Logo Text Customization */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#c3c6d7] uppercase">Brand Vector / Text</span>
                    <span className="text-[10px] text-[#8d90a0]">Emboss Height: {embossDepth}mm</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={logoText}
                      onChange={(e) => setLogoText(e.target.value.toUpperCase())}
                      placeholder="ENTER BRAND LOGO TEXT..."
                      className="flex-1 bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#ffb77d]"
                    />
                    <div className="flex items-center gap-1 bg-[#0a0e18] px-2 py-1 rounded-lg border border-[#434655]/50">
                      <button
                        type="button"
                        onClick={() => setEmbossDepth(0.8)}
                        className={`px-2 py-1 rounded text-[10px] font-mono ${
                          embossDepth === 0.8 ? 'bg-[#ffb77d] text-[#4d2600] font-bold' : 'text-[#8d90a0]'
                        }`}
                      >
                        0.8mm
                      </button>
                      <button
                        type="button"
                        onClick={() => setEmbossDepth(1.8)}
                        className={`px-2 py-1 rounded text-[10px] font-mono ${
                          embossDepth === 1.8 ? 'bg-[#ffb77d] text-[#4d2600] font-bold' : 'text-[#8d90a0]'
                        }`}
                      >
                        1.8mm
                      </button>
                    </div>
                  </div>
                </div>

                {/* 4. Foil Wrap Selector */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a0e18] border border-[#434655]/30">
                  <span className="text-xs text-[#8d90a0]">Foil Wrapping Option:</span>
                  <div className="flex items-center gap-2">
                    {FOIL_OPTIONS.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setSelectedFoil(f)}
                        className={`w-6 h-6 rounded-full border transition-all ${
                          selectedFoil.id === f.id ? 'ring-2 ring-[#ffb77d] scale-110' : 'opacity-70 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: f.colorHex }}
                        title={f.name}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('/gifting/design-studio')}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#d97707] text-white font-headline font-bold text-xs sm:text-sm hover:bg-[#b45309] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Claim Free 48-Hour 3D CAD Mockup</span>
                </button>
              </div>
            </div>

            {/* Visual 3D Preview Panel */}
            <div className="col-span-12 lg:col-span-6 bg-[#0a0e18] rounded-xl p-6 flex flex-col justify-between border border-[#434655]/40 relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8d90a0]">
                  CAD Tooling Real-Time Simulation
                </span>
                <span className="font-mono text-xs text-[#ffb77d] font-bold">
                  {selectedPiece.dimensions} • {selectedPiece.weight}
                </span>
              </div>

              {/* Three.js Interactive Chocolate Canvas */}
              <div className="my-4">
                <ThreeChocolateCanvas
                  piece={selectedPiece}
                  cocoa={selectedCocoa}
                  foil={selectedFoil}
                  logoText={logoText}
                  embossDepth={embossDepth}
                  className="h-72 w-full"
                />
              </div>

              {/* Interactive badge overlays & specifications */}
              <div className="p-3 rounded-lg bg-[#171b26]/90 border border-[#434655]/30 flex items-center justify-between z-10 text-xs">
                <div>
                  <span className="text-[11px] text-[#8d90a0] block">Selected Recipe:</span>
                  <span className="text-white font-semibold">{selectedCocoa.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#8d90a0] block">Unit MOQ:</span>
                  <span className="text-[#ffb77d] font-semibold">{selectedPiece.moq} units (${selectedPiece.basePrice.toFixed(2)}/pc)</span>
                </div>
              </div>

              {/* Bottom Factory Guarantee String */}
              <div className="flex items-center justify-between text-[11px] text-[#8d90a0] border-t border-[#434655]/30 pt-3 mt-3 z-10">
                <span>Domestic Clean-Room Batching • Temperature Controlled Shipping</span>
                <span className="text-white font-medium">Halal & Gluten-Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* UNIFIED PRICING & CROSS-DIVISION TIERS     */}
      {/* ========================================== */}
      <section className="w-full bg-[#0a0e18] border-t border-[#434655]/20 px-6 lg:px-12 py-20" id="pricing">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563eb]">
              TRANSPARENT ENTERPRISE COMMERCE
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white">
              Unified Tiers Across All Three Verticals
            </h2>
            <p className="text-sm sm:text-base text-[#8d90a0]">
              Predictable flat-rate pricing, dedicated SLAs, and packaged enterprise procurement workflows.
            </p>

            {/* Pricing Tab Switcher */}
            <div className="mt-4 p-1 rounded-xl bg-[#171b26] border border-[#434655]/40 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setPriceTab('saas')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  priceTab === 'saas' ? 'bg-[#262a35] text-white shadow' : 'text-[#8d90a0] hover:text-white'
                }`}
              >
                Compliance SaaS
              </button>
              <button
                type="button"
                onClick={() => setPriceTab('creative')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  priceTab === 'creative' ? 'bg-[#262a35] text-white shadow' : 'text-[#8d90a0] hover:text-white'
                }`}
              >
                Creative Shoot Packs
              </button>
              <button
                type="button"
                onClick={() => setPriceTab('gifting')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  priceTab === 'gifting' ? 'bg-[#262a35] text-white shadow' : 'text-[#8d90a0] hover:text-white'
                }`}
              >
                Custom Chocolates & VIP
              </button>
            </div>
          </div>

          {/* PRICE VIEW 1: COMPLIANCE SAAS */}
          {priceTab === 'saas' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              <div className="p-6 sm:p-8 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">
                    STARTER GOVERNANCE
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-bold text-white">$39</span>
                    <span className="text-xs text-[#8d90a0]">/ month billed annually</span>
                  </div>
                  <p className="text-xs text-[#8d90a0] leading-relaxed">
                    For growing teams standardizing on their first ISO or HACCP compliance framework.
                  </p>
                  <div className="flex flex-col gap-2.5 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>1 Active Standard (e.g., ISO 9001)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>Up to 5 Internal Auditors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>AI SOP Generator (50/mo)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>Inspect360 Mobile App</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('/solutions/compliance-platform')}
                  className="w-full py-2.5 rounded-lg bg-[#262a35] text-white text-xs font-semibold hover:bg-[#313540] transition-colors cursor-pointer"
                >
                  Start 14-Day Free Sandbox
                </button>
              </div>

              <div className="p-6 sm:p-8 rounded-xl bg-[#1c1f2a] border-2 border-[#4edea3] flex flex-col justify-between gap-6 relative shadow-2xl">
                <div className="absolute -top-3 right-6 bg-[#4edea3] text-[#002113] px-3 py-0.5 rounded-full text-[11px] font-bold">
                  MOST POPULAR
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#4edea3] uppercase tracking-wider">
                    ENTERPRISE AUDIT GATEWAY
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-bold text-white">$49</span>
                    <span className="text-xs text-[#8d90a0]">/ seat / mo billed annually</span>
                  </div>
                  <p className="text-xs text-[#8d90a0] leading-relaxed">
                    Complete multi-standard ISO & FDA platform with full cryptographic audit log.
                  </p>
                  <div className="flex flex-col gap-2.5 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>All 21 Connected Modules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>Unlimited ISO Standards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>IAR-112 Verification Node</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>21 CFR Part 11 SHA-256 Sign</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('/solutions/compliance-platform')}
                  className="w-full py-2.5 rounded-lg bg-[#007d55] text-white text-xs font-semibold hover:bg-[#009667] transition-colors cursor-pointer"
                >
                  Deploy Enterprise Suite
                </button>
              </div>

              <div className="p-6 sm:p-8 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#8d90a0] uppercase tracking-wider">
                    ACCREDITED CERTIFICATION
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-bold text-white">Custom</span>
                    <span className="text-xs text-[#8d90a0]">/ fixed engagement</span>
                  </div>
                  <p className="text-xs text-[#8d90a0] leading-relaxed">
                    Turnkey Stage 1 & Stage 2 formal accredited IAR-112 certification audits.
                  </p>
                  <div className="flex flex-col gap-2.5 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>Remote IAF MD 4 Auditing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>Accredited Registrar Seal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>3-Year Certification Cycle</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#4edea3] text-[18px]">check</span>
                      <span>Public QR Code Registry Host</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('/solutions/iso-certification')}
                  className="w-full py-2.5 rounded-lg bg-[#262a35] text-white text-xs font-semibold hover:bg-[#313540] transition-colors cursor-pointer"
                >
                  Schedule Pre-Audit Review
                </button>
              </div>
            </div>
          )}

          {/* PRICE VIEW 2: CREATIVE PACKS */}
          {priceTab === 'creative' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              <div className="p-6 sm:p-8 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#b4c5ff] uppercase tracking-wider">
                    UGC SPRINT STUDIO
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-bold text-white">$2,450</span>
                    <span className="text-xs text-[#8d90a0]">/ sprint pack</span>
                  </div>
                  <p className="text-xs text-[#8d90a0] leading-relaxed">
                    8 Tested 9:16 Video Ad Variants with 3 dynamic hooks each for TikTok/Meta.
                  </p>
                  <div className="flex flex-col gap-2.5 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2563eb] text-[18px]">check</span>
                      <span>Vetted US Creator Castings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2563eb] text-[18px]">check</span>
                      <span>PAS Scripting Framework</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2563eb] text-[18px]">check</span>
                      <span>Native Captions & Overlays</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('/services/ugc-ads')}
                  className="w-full py-2.5 rounded-lg bg-[#262a35] text-white text-xs font-semibold hover:bg-[#313540] transition-colors cursor-pointer"
                >
                  Book UGC Batch
                </button>
              </div>

              <div className="p-6 sm:p-8 rounded-xl bg-[#1c1f2a] border-2 border-[#2563eb] flex flex-col justify-between gap-6 relative shadow-2xl">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#b4c5ff] uppercase tracking-wider">
                    E-COMMERCE HERO LAB
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-bold text-white">$4,800</span>
                    <span className="text-xs text-[#8d90a0]">/ full catalog day</span>
                  </div>
                  <p className="text-xs text-[#8d90a0] leading-relaxed">
                    35 Retouched Pure RGB 255 Studio assets + 10 Macro & Propped Lifestyle scenes.
                  </p>
                  <div className="flex flex-col gap-2.5 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2563eb] text-[18px]">check</span>
                      <span>Medium-Format 100MP Resolution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2563eb] text-[18px]">check</span>
                      <span>Amazon & Shopify Master Sets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2563eb] text-[18px]">check</span>
                      <span>Color Precision Proofing</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('/services/product-photography')}
                  className="w-full py-2.5 rounded-lg bg-[#2563eb] text-white text-xs font-semibold hover:bg-[#1d4ed8] transition-colors cursor-pointer"
                >
                  Reserve Studio Date
                </button>
              </div>

              <div className="p-6 sm:p-8 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#b4c5ff] uppercase tracking-wider">
                    CINEMA BROADCAST FILM
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-bold text-white">$12,500+</span>
                    <span className="text-xs text-[#8d90a0]">/ commercial spot</span>
                  </div>
                  <p className="text-xs text-[#8d90a0] leading-relaxed">
                    60-sec anthem spot + 30s/15s cutdowns with FPV drone and full cinema crew.
                  </p>
                  <div className="flex flex-col gap-2.5 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2563eb] text-[18px]">check</span>
                      <span>RED V-Raptor / ARRI Rigs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2563eb] text-[18px]">check</span>
                      <span>Full Sound Design & Color Grade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#2563eb] text-[18px]">check</span>
                      <span>Global Broadcast Buyout</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('/services/videography')}
                  className="w-full py-2.5 rounded-lg bg-[#262a35] text-white text-xs font-semibold hover:bg-[#313540] transition-colors cursor-pointer"
                >
                  Inquire Commercial Shoot
                </button>
              </div>
            </div>
          )}

          {/* PRICE VIEW 3: GIFTING TIERS */}
          {priceTab === 'gifting' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
              <div className="p-6 sm:p-8 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#ffb77d] uppercase tracking-wider">
                    EVENT GIVEAWAY BITES
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-bold text-white">$1.25</span>
                    <span className="text-xs text-[#8d90a0]">/ piece (MOQ 250)</span>
                  </div>
                  <p className="text-xs text-[#8d90a0] leading-relaxed">
                    Individually wrapped Crafty Bites (8-9g) with custom embossed vector relief.
                  </p>
                  <div className="flex flex-col gap-2.5 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb77d] text-[18px]">check</span>
                      <span>Choice of Gold / Silver Foil</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb77d] text-[18px]">check</span>
                      <span>100% Belgian Couverture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb77d] text-[18px]">check</span>
                      <span>5-6 Day Production Lead</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('/gifting/custom-corporate-chocolates')}
                  className="w-full py-2.5 rounded-lg bg-[#262a35] text-white text-xs font-semibold hover:bg-[#313540] transition-colors cursor-pointer"
                >
                  Order Event Bites
                </button>
              </div>

              <div className="p-6 sm:p-8 rounded-xl bg-[#1c1f2a] border-2 border-[#d97707] flex flex-col justify-between gap-6 relative shadow-2xl">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#ffb77d] uppercase tracking-wider">
                    EXECUTIVE GIFT BOX
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-bold text-white">$28.00</span>
                    <span className="text-xs text-[#8d90a0]">/ luxury set (MOQ 25)</span>
                  </div>
                  <p className="text-xs text-[#8d90a0] leading-relaxed">
                    Rigid magnetic black presentation box containing 12 assorted bespoke medallions.
                  </p>
                  <div className="flex flex-col gap-2.5 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb77d] text-[18px]">check</span>
                      <span>Soft-Touch Foil Box Branding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb77d] text-[18px]">check</span>
                      <span>Dark, Milk & White Medallions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb77d] text-[18px]">check</span>
                      <span>Individual Address Drop-Shipping</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('/gifting/corporate-events')}
                  className="w-full py-2.5 rounded-lg bg-[#d97707] text-white text-xs font-semibold hover:bg-[#b45309] transition-colors cursor-pointer"
                >
                  Customize VIP Boxes
                </button>
              </div>

              <div className="p-6 sm:p-8 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#ffb77d] uppercase tracking-wider">
                    BESPOKE ARCHITECTURAL MOLDS
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-bold text-white">Custom</span>
                    <span className="text-xs text-[#8d90a0]">/ enterprise custom</span>
                  </div>
                  <p className="text-xs text-[#8d90a0] leading-relaxed">
                    Complex 3D dimensional chocolate sculptures modeled after products or headquarters.
                  </p>
                  <div className="flex flex-col gap-2.5 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb77d] text-[18px]">check</span>
                      <span>Custom 3D CAD Mold Tooling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb77d] text-[18px]">check</span>
                      <span>Multi-Layered Relief Casting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ffb77d] text-[18px]">check</span>
                      <span>Full Food-Grade Tooling Retainer</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('/gifting/design-studio')}
                  className="w-full py-2.5 rounded-lg bg-[#262a35] text-white text-xs font-semibold hover:bg-[#313540] transition-colors cursor-pointer"
                >
                  Request 3D Sculpt CAD
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================== */}
      {/* FINAL CROSS-DIVISION INQUIRY CTA BANNER    */}
      {/* ========================================== */}
      <section className="w-full px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto p-8 lg:p-12 rounded-2xl bg-[#1c1f2a] border border-[#434655]/40 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div className="flex flex-col gap-2 max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b4c5ff]">
              ONE CONSOLIDATED MASTER AGREEMENT
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white">
              Ready to Unify Your Creative, Compliance, and Gifting Operations?
            </h3>
            <p className="text-sm text-[#8d90a0] leading-relaxed">
              Connect with a dedicated AllBiz Digital director to structure your enterprise subscription, multi-city media production, or custom confection order.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 relative z-10 shrink-0">
            <button
              onClick={() => onOpenBookDemo('Multi-Vertical Enterprise Master Agreement')}
              className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#2563eb] text-white hover:bg-[#1d4ed8] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Book Group Discovery</span>
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
