import React, { useState } from 'react';
import { RoutePath } from '../types';

interface IsoCertificationPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const IsoCertificationPage: React.FC<IsoCertificationPageProps> = ({
  onNavigate,
  onOpenBookDemo,
}) => {
  const [selectedStandard, setSelectedStandard] = useState('ISO 9001:2015');
  const [headcount, setHeadcount] = useState('25–100 employees');
  const [selectedPathway, setSelectedPathway] = useState<'option-a' | 'option-b'>('option-b');

  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-[#4edea3]">Compliance & Inspection</span>
          <span>/</span>
          <span className="text-white">Accredited ISO Certification</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4edea3] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
              ACCREDITED CERTIFICATION, INSPECTION & TRAINING
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              ISO Certification You Can Verify—Delivered On-Site or 100% Remotely
            </h1>
            <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
              Accredited by the International Accreditation Registrar (IAR-112, USA) with international MRA partnership options. Fast, transparent certification across ISO 9001, 14001, 45001, 27001, and 22000—with every certificate verifiable online via QR code.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBookDemo('ISO Certification Application')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#007d55] text-white hover:bg-[#009667] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Apply Online for Certification</span>
                <span>→</span>
              </button>
              <button
                onClick={() => onNavigate('/verify-certificate')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#1c1f2a] hover:bg-[#262a35] text-white border border-[#434655]/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#4edea3]">qr_code_scanner</span>
                <span>Verify a Certificate Instantly</span>
              </button>
              <a
                href="https://companycertification.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#8d90a0] hover:text-[#4edea3] transition-colors flex items-center gap-1 ml-1"
              >
                <span>Official Registry Portal</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-4 shadow-2xl">
              <span className="text-xs font-bold uppercase text-[#4edea3]">ACCREDITATION SEAL</span>
              <div className="p-4 rounded-xl bg-[#0f131d] border border-[#4edea3]/40 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px]">military_tech</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-base text-white">IAR-112 USA Accredited</h3>
                  <p className="text-xs text-[#8d90a0]">International Accreditation Registrar, Washington D.C.</p>
                  <span className="text-[10px] font-mono text-[#4edea3]">IAF MD 4 REMOTE AUDIT SANCTIONED</span>
                </div>
              </div>
              <div className="text-xs text-[#8d90a0] leading-relaxed">
                Accepted by major US defense contractors, enterprise SaaS procurement teams, global retail distribution networks, and international trade bodies.
              </div>
            </div>
          </div>
        </div>

        {/* Authority Stats */}
        <div className="p-4 sm:p-6 rounded-xl bg-[#0a0e18] border border-[#434655]/30 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-headline text-3xl font-bold text-white">250+</span>
            <span className="text-xs text-[#8d90a0]">Organizations Served Since 1997</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline text-3xl font-bold text-[#4edea3]">120+</span>
            <span className="text-xs text-[#8d90a0]">Active Certificates Issued</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline text-3xl font-bold text-white">6–8 Wks</span>
            <span className="text-xs text-[#8d90a0]">Typical Decision Timeline</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-headline text-3xl font-bold text-[#b4c5ff]">IAR-112</span>
            <span className="text-xs text-[#8d90a0]">USA Federal Accreditation</span>
          </div>
        </div>

        {/* Two Transparent Pathways */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4edea3]">ACCREDITATION ARCHITECTURE</span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">
              Two Transparent Certification Pathways
            </h2>
            <p className="text-xs text-[#8d90a0]">Choose the exact level of global tender recognition your business requires.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Option A */}
            <div
              onClick={() => setSelectedPathway('option-a')}
              className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-6 ${
                selectedPathway === 'option-a'
                  ? 'bg-[#1c1f2a] border-[#4edea3] shadow-xl'
                  : 'bg-[#171b26] border-[#434655]/30 hover:border-[#434655]'
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#4edea3]/20 text-[#4edea3]">
                    OPTION A: GLOBAL TENDERS
                  </span>
                  <span className="text-xs font-mono text-[#8d90a0]">IAF MLA / MRA</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-white">Internationally Recognized (MRA) Certification</h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Delivered through our established partnership with an international certification body accredited by a signatory to the IAF MLA (Global ACI MRA). Ideal when global government tenders or multinational enterprise buyers require MRA-recognized accreditation marks. We coordinate your certification end-to-end while the partner body issues the certificate in its own accredited name.
                </p>
                <div className="flex flex-col gap-1.5 pt-2 text-xs text-[#dfe2f1]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check</span>
                    <span>Signatory to IAF Multilateral Recognition Arrangement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check</span>
                    <span>Accepted in 100+ countries worldwide</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenBookDemo('ISO Certification - Option A (IAF MRA)')}
                className="w-full py-2.5 rounded-lg bg-[#262a35] text-white text-xs font-semibold hover:bg-[#313540] transition-colors"
              >
                Inquire Option A (MRA Pathway)
              </button>
            </div>

            {/* Option B */}
            <div
              onClick={() => setSelectedPathway('option-b')}
              className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-6 ${
                selectedPathway === 'option-b'
                  ? 'bg-[#1c1f2a] border-[#4edea3] shadow-xl'
                  : 'bg-[#171b26] border-[#434655]/30 hover:border-[#434655]'
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#007d55]/40 text-[#4edea3]">
                    OPTION B: STREAMLINED USA
                  </span>
                  <span className="text-xs font-mono text-[#4edea3] font-bold">MOST POPULAR</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-white">Direct Certification by CCI (IAR-112, USA)</h3>
                <p className="text-xs text-[#8d90a0] leading-relaxed">
                  Issued directly under our US IAR accreditation (IAR-112). A streamlined, cost-effective option with one clear certification fee, remote or on-site audits, and instant online QR verification. Ideal for US defense vendors, tech companies, and commercial supply chain qualification.
                </p>
                <div className="flex flex-col gap-1.5 pt-2 text-xs text-[#dfe2f1]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check</span>
                    <span>Direct issuance under IAR-112 US Accreditation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check</span>
                    <span>Single fixed audit fee with zero hidden re-test fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#4edea3] text-[16px]">check</span>
                    <span>Instant cryptographic QR code registry lookup</span>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenBookDemo('ISO Certification - Option B (IAR-112)')}
                className="w-full py-2.5 rounded-lg bg-[#007d55] text-white text-xs font-semibold hover:bg-[#009667] transition-colors"
              >
                Inquire Option B (Direct IAR-112)
              </button>
            </div>
          </div>
        </div>

        {/* IAF MD 4 Remote Auditing Service */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-bold uppercase text-[#4edea3]">VIRTUAL AUDIT PROTOCOL</span>
            <h3 className="font-headline font-bold text-2xl text-white">IAF MD 4 Remote Auditing Service</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Complete your ISO audit from anywhere using secure video conferencing, live interviews, digital document review, and virtual site tours in strict accordance with IAF MD 4 international guidelines—slashing travel costs and scheduling delays.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/verify-certificate')}
            className="px-6 py-3 rounded-lg bg-[#262a35] hover:bg-[#313540] text-white text-xs font-semibold shrink-0 transition-colors border border-[#434655]/40"
          >
            Check Live Certificate Registry →
          </button>
        </div>
      </div>
    </div>
  );
};
