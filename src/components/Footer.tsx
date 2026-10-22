import React from 'react';
import { RoutePath } from '../types';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (path: RoutePath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0a0e18] border-t border-[#434655]/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1: Creative Production */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#b4c5ff]">
              <span className="material-symbols-outlined text-[22px]">movie</span>
              <span className="font-headline font-bold text-white text-base">Creative Production</span>
            </div>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Commercial broadcast films, DTC performance assets, and immersive hospitality visual campaigns engineered for direct conversion.
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={() => handleNav('/services/videography')}
                className="text-left text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors"
              >
                Commercial Videography
              </button>
              <button
                onClick={() => handleNav('/services/product-photography')}
                className="text-left text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors"
              >
                Studio Product Photography
              </button>
              <button
                onClick={() => handleNav('/services/hotel-short-videos')}
                className="text-left text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors"
              >
                Hospitality & Drone Media
              </button>
              <button
                onClick={() => handleNav('/services/ugc-ads')}
                className="text-left text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors"
              >
                UGC Performance Ads Studio
              </button>
              <button
                onClick={() => handleNav('/services/promotional-advertising')}
                className="text-left text-[#c3c6d7] hover:text-[#b4c5ff] transition-colors"
              >
                Full-Funnel Ad Campaigns
              </button>
            </div>
          </div>

          {/* Col 2: Enterprise Compliance */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#4edea3]">
              <span className="material-symbols-outlined text-[22px]">verified</span>
              <span className="font-headline font-bold text-white text-base">Enterprise Compliance</span>
            </div>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              IAR-112 USA accredited compliance management, digital audit registries, and OSHA/FDA automated workflows.
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={() => handleNav('/solutions/compliance-platform')}
                className="text-left text-[#c3c6d7] hover:text-[#4edea3] transition-colors"
              >
                Compliance360 SaaS Platform
              </button>
              <button
                onClick={() => handleNav('/solutions/food-inspection-software')}
                className="text-left text-[#c3c6d7] hover:text-[#4edea3] transition-colors"
              >
                Inspect360 Facility Auditor
              </button>
              <button
                onClick={() => handleNav('/solutions/iso-certification')}
                className="text-left text-[#c3c6d7] hover:text-[#4edea3] transition-colors"
              >
                Accredited ISO Certification
              </button>
              <button
                onClick={() => handleNav('/verify-certificate')}
                className="text-left text-[#c3c6d7] hover:text-[#4edea3] transition-colors"
              >
                Instant Certificate Registry Check
              </button>
            </div>
          </div>

          {/* Col 3: Corporate Gifting */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#ffb77d]">
              <span className="material-symbols-outlined text-[22px]">cookie</span>
              <span className="font-headline font-bold text-white text-base">Corporate Gifting</span>
            </div>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Precision-molded artisan Belgian chocolates, CAD custom shapes, and luxury packaging suites for executive events.
            </p>
            <div className="flex flex-col gap-2 text-xs">
              <button
                onClick={() => handleNav('/gifting/custom-corporate-chocolates')}
                className="text-left text-[#c3c6d7] hover:text-[#ffb77d] transition-colors"
              >
                Custom Logo Chocolates
              </button>
              <button
                onClick={() => handleNav('/gifting/design-studio')}
                className="text-left text-[#c3c6d7] hover:text-[#ffb77d] transition-colors"
              >
                3D Studio Configurator
              </button>
              <button
                onClick={() => handleNav('/gifting/corporate-events')}
                className="text-left text-[#c3c6d7] hover:text-[#ffb77d] transition-colors"
              >
                VIP & Trade Show Bulk Gifting
              </button>
            </div>
          </div>

          {/* Col 4: Governance & Trust */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-[22px]">policy</span>
              <span className="font-headline font-bold text-white text-base">Governance & Trust</span>
            </div>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Institutional holding protocols, cryptographic auditing records, and corporate legal disclosures.
            </p>
            <div className="flex flex-col gap-2.5 text-xs">
              <div className="flex items-center gap-2 text-[#4edea3] font-semibold text-[11px]">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>IAR-112 USA Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-[#4edea3] font-semibold text-[11px]">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span>ISO/IEC 27001 Certified ISMS</span>
              </div>
              <div className="flex items-center gap-2 text-[#8d90a0] font-semibold text-[11px]">
                <span className="material-symbols-outlined text-[16px]">gavel</span>
                <span>21 CFR Part 11 Compliant</span>
              </div>
              <div className="pt-2 flex flex-col gap-1">
                <button
                  onClick={() => handleNav('/about')}
                  className="text-left text-[#c3c6d7] hover:text-white transition-colors"
                >
                  Impartiality & Independence Policy
                </button>
                <button
                  onClick={() => handleNav('/about')}
                  className="text-left text-[#c3c6d7] hover:text-white transition-colors"
                >
                  Complaints & Appeals Procedure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#434655]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8d90a0]">
          <div>
            © 2025 AllBiz Digital Holdings LLC. All rights reserved. Creative • Compliance • Gifting Verticals.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('/about')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleNav('/about')} className="hover:text-white transition-colors">
              Terms of Master Service
            </button>
            <button onClick={() => handleNav('/verify-certificate')} className="text-[#4edea3] hover:underline transition-colors">
              Public Audit Log
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
