import React, { useState } from 'react';
import { RoutePath } from '../types';

interface PricingPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onOpenBookDemo,
}) => {
  const [activeTab, setActiveTab] = useState<'saas' | 'creative' | 'iso-choc'>('saas');
  const [annualBilling, setAnnualBilling] = useState(true);

  // SaaS Add-ons State
  const [extraUsers, setExtraUsers] = useState(0);
  const [extraSites, setExtraSites] = useState(0);
  const [hasAiPack, setHasAiPack] = useState(false);

  const calculateAddons = () => {
    let add = extraUsers * 10 + extraSites * 10;
    if (hasAiPack) add += 39;
    return add;
  };

  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-white">Unified Pricing</span>
        </div>

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563eb]">
            TRANSPARENT ENTERPRISE COMMERCE
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-white">
            Unified Pricing Across All Divisions
          </h1>
          <p className="text-sm sm:text-base text-[#8d90a0]">
            Transparent flat-rate software pricing, fixed creative production bundles, and direct-factory confectionery rates.
          </p>

          {/* 3 Clean Tabs */}
          <div className="mt-4 p-1.5 rounded-xl bg-[#171b26] border border-[#434655]/40 flex flex-wrap items-center justify-center gap-1.5">
            <button
              onClick={() => setActiveTab('saas')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'saas'
                  ? 'bg-[#2563eb] text-white shadow-lg'
                  : 'text-[#8d90a0] hover:text-white'
              }`}
            >
              Tab 1: Compliance & Inspection SaaS
            </button>
            <button
              onClick={() => setActiveTab('creative')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'creative'
                  ? 'bg-[#2563eb] text-white shadow-lg'
                  : 'text-[#8d90a0] hover:text-white'
              }`}
            >
              Tab 2: Creative & Media Packages
            </button>
            <button
              onClick={() => setActiveTab('iso-choc')}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'iso-choc'
                  ? 'bg-[#2563eb] text-white shadow-lg'
                  : 'text-[#8d90a0] hover:text-white'
              }`}
            >
              Tab 3: ISO Certification & Custom Chocolates
            </button>
          </div>
        </div>

        {/* TAB 1: COMPLIANCE & INSPECTION SAAS */}
        {activeTab === 'saas' && (
          <div className="flex flex-col gap-10 animate-fade-in">
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-3 text-xs">
              <span className={annualBilling ? 'text-white font-bold' : 'text-[#8d90a0]'}>Annual (Save 20%)</span>
              <button
                type="button"
                onClick={() => setAnnualBilling(!annualBilling)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  annualBilling ? 'bg-[#007d55]' : 'bg-[#434655]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    annualBilling ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={!annualBilling ? 'text-white font-bold' : 'text-[#8d90a0]'}>Monthly Billed</span>
            </div>

            {/* 4 SaaS Tier Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Standalone Audit */}
              <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#8d90a0] uppercase">STANDALONE AUDIT</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-3xl font-bold text-white">
                      ${annualBilling ? '39' : '49'}
                    </span>
                    <span className="text-xs text-[#8d90a0]">/ mo</span>
                  </div>
                  <p className="text-xs text-[#8d90a0]">Checklists, facility inspections, NCRs & CAPAs.</p>
                  <div className="flex flex-col gap-2 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                      <span>Inspect360 Mobile App</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                      <span>Offline Checkpoint Sync</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                      <span>NCR & CAPA Workflow</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenBookDemo('SaaS - Standalone Audit ($39/mo)')}
                  className="w-full py-2.5 rounded-lg bg-[#262a35] hover:bg-[#313540] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Start Sandbox
                </button>
              </div>

              {/* Single Standard */}
              <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#8d90a0] uppercase">SINGLE STANDARD</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-3xl font-bold text-white">
                      ${annualBilling ? '49' : '59'}
                    </span>
                    <span className="text-xs text-[#8d90a0]">/ mo</span>
                  </div>
                  <p className="text-xs text-[#8d90a0]">1 Standard • 3 Users • 1 Site • AI Documentation Toolkit.</p>
                  <div className="flex flex-col gap-2 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                      <span>1 Standard (e.g. ISO 9001)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                      <span>3 Active User Seats</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                      <span>AI Documentation Toolkit</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenBookDemo('SaaS - Single Standard ($49/mo)')}
                  className="w-full py-2.5 rounded-lg bg-[#262a35] hover:bg-[#313540] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Start 14-Day Trial
                </button>
              </div>

              {/* Multi-Standard (Most Popular) */}
              <div className="p-6 rounded-2xl bg-[#1c1f2a] border-2 border-[#4edea3] flex flex-col justify-between gap-6 relative shadow-2xl">
                <div className="absolute -top-3 right-6 bg-[#4edea3] text-[#002113] px-3 py-0.5 rounded-full text-[10px] font-bold">
                  MOST POPULAR
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#4edea3] uppercase">MULTI-STANDARD</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-3xl font-bold text-white">
                      ${annualBilling ? '99' : '119'}
                    </span>
                    <span className="text-xs text-[#8d90a0]">/ mo</span>
                  </div>
                  <p className="text-xs text-[#8d90a0]">Up to 3 Standards (e.g. ISO 9001 + 14001 + 45001) • 5 Users • 3 Sites.</p>
                  <div className="flex flex-col gap-2 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                      <span>Up to 3 ISO/FDA Standards</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                      <span>5 Seats • 3 Facilities</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                      <span>SHA-256 E-Signatures</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                      <span>Full Management Review Generator</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenBookDemo('SaaS - Multi-Standard ($99/mo)')}
                  className="w-full py-2.5 rounded-lg bg-[#007d55] hover:bg-[#009667] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Deploy Multi-Standard
                </button>
              </div>

              {/* Enterprise */}
              <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/30 flex flex-col justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-[#b4c5ff] uppercase">ENTERPRISE</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline text-3xl font-bold text-white">
                      ${annualBilling ? '349' : '399'}
                    </span>
                    <span className="text-xs text-[#8d90a0]">/ mo</span>
                  </div>
                  <p className="text-xs text-[#8d90a0]">Up to 10 Standards • 20 Users • 10 Sites • ERP Sync.</p>
                  <div className="flex flex-col gap-2 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#2563eb]">check</span>
                      <span>Up to 10 Standards</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#2563eb]">check</span>
                      <span>20 Seats • 10 Facilities</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#2563eb]">check</span>
                      <span>SAP/Oracle REST & OData Sync</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-[#2563eb]">check</span>
                      <span>Dedicated Compliance Director</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenBookDemo('SaaS - Enterprise ($349/mo)')}
                  className="w-full py-2.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Contact Enterprise Sales
                </button>
              </div>
            </div>

            {/* Add-ons Calculator Bar */}
            <div className="p-6 rounded-2xl bg-[#0a0e18] border border-[#434655]/40 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase text-[#4edea3]">CONFIGURABLE SAAS ADD-ONS</span>
                <div className="flex flex-wrap items-center gap-6 text-xs text-white">
                  <div className="flex items-center gap-2">
                    <span>Extra User Seats ($10/mo):</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setExtraUsers(Math.max(0, extraUsers - 1))}
                        className="w-6 h-6 rounded bg-[#262a35] text-white flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="font-mono w-6 text-center">{extraUsers}</span>
                      <button
                        onClick={() => setExtraUsers(extraUsers + 1)}
                        className="w-6 h-6 rounded bg-[#262a35] text-white flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span>Extra Plant Sites ($10/mo):</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setExtraSites(Math.max(0, extraSites - 1))}
                        className="w-6 h-6 rounded bg-[#262a35] text-white flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="font-mono w-6 text-center">{extraSites}</span>
                      <button
                        onClick={() => setExtraSites(extraSites + 1)}
                        className="w-6 h-6 rounded bg-[#262a35] text-white flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasAiPack}
                      onChange={(e) => setHasAiPack(e.target.checked)}
                      className="accent-[#007d55]"
                    />
                    <span>AI Usage Pack ($39/mo)</span>
                  </label>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[11px] text-[#8d90a0] block">Additional Monthly Cost:</span>
                <span className="font-headline font-bold text-2xl text-[#4edea3]">+${calculateAddons()}/mo</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CREATIVE & MEDIA BUNDLES */}
        {activeTab === 'creative' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <div className="p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#2563eb]/20 text-[#b4c5ff] w-fit">
                  STARTER BUNDLE
                </span>
                <h3 className="font-headline font-bold text-2xl text-white">
                  Starter UGC & Product Shoot Pack
                </h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  The ideal creative foundation for DTC brands and Amazon sellers launching a new SKU or scaling paid traffic.
                </p>
                <div className="flex flex-col gap-2 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#2563eb]">check</span>
                    <span>5 High-Converting UGC Video Ad Variations (with 3 hooks each)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#2563eb]">check</span>
                    <span>15 Studio Product Photos (Pure RGB 255 White + Macro Callouts)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#2563eb]">check</span>
                    <span>Full Commercial Usage Rights & Raw Video B-Roll Files</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onOpenBookDemo('Creative Starter UGC & Product Shoot Pack')}
                className="w-full py-3 rounded-lg bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors"
              >
                Inquire Starter Pack Quote →
              </button>
            </div>

            <div className="p-8 rounded-2xl bg-[#1c1f2a] border-2 border-[#2563eb] flex flex-col justify-between gap-6 shadow-2xl">
              <div className="flex flex-col gap-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#2563eb] text-white w-fit">
                  MONTHLY RETAINER
                </span>
                <h3 className="font-headline font-bold text-2xl text-white">
                  Hospitality & Brand Growth Retainer
                </h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  End-to-end creative production engine designed for luxury hotels, resorts, and high-velocity e-commerce brands.
                </p>
                <div className="flex flex-col gap-2 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                    <span>Monthly Short-Form Reels & FPV Drone Shoot Days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                    <span>Weekly Paid Ad Creative Testing & Hook Iteration Sprints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                    <span>Dedicated Creative Director & Performance Copywriting Team</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onOpenBookDemo('Creative Growth Retainer')}
                className="w-full py-3 rounded-lg bg-[#2563eb] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1d4ed8] transition-colors"
              >
                Discuss Custom Retainer →
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: ISO AUDITS & CORPORATE CHOCOLATES */}
        {activeTab === 'iso-choc' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            {/* ISO Certification */}
            <div className="p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#007d55]/30 text-[#4edea3] w-fit">
                  ACCREDITED AUDIT FEES
                </span>
                <h3 className="font-headline font-bold text-2xl text-white">Accredited ISO Certification</h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Fixed, transparent audit fees based on standard, headcount, and Option A (MRA) vs. Option B (IAR-112)—typically 6–8 weeks to certification decision.
                </p>
                <div className="flex flex-col gap-2 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                    <span>Zero travel costs with IAF MD 4 100% Remote Video Auditing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                    <span>3-Year Certification Validity with Annual Surveillance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check</span>
                    <span>Tamper-proof online QR verification registry</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/solutions/iso-certification')}
                className="w-full py-3 rounded-lg bg-[#007d55] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#009667] transition-colors"
              >
                View Certification Details →
              </button>
            </div>

            {/* Corporate Chocolates */}
            <div className="p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#d97707]/20 text-[#ffb77d] w-fit">
                  DIRECT FACTORY PRICING
                </span>
                <h3 className="font-headline font-bold text-2xl text-white">Bespoke Corporate Chocolates</h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Instant live pricing inside our 3D Design Studio with zero outsourcing. Includes free 48-hour mockup and custom mold engineering.
                </p>
                <div className="flex flex-col gap-2 pt-3 border-t border-[#434655]/30 text-xs text-[#dfe2f1]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#ffb77d]">check</span>
                    <span>Crafty Bites from $1.25/pc (MOQ 100)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#ffb77d]">check</span>
                    <span>Executive Medallion Gift Boxes from $28.00/set</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#ffb77d]">check</span>
                    <span>100% Belgian Couverture • Halal & Gluten-Free</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onNavigate('/gifting/design-studio')}
                className="w-full py-3 rounded-lg bg-[#d97707] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#b45309] transition-colors"
              >
                Launch 3D Studio & Instant Price →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
