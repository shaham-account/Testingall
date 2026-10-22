import React from 'react';
import { RoutePath } from '../types';

interface AboutPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
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
          <span className="text-white">About Us & Governance</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col gap-5 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#1c1f2a] text-[#b4c5ff] w-fit border border-[#434655]/40">
            ESTABLISHED 1997 • 250+ ENTERPRISE CLIENTS
          </div>
          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Built to Help Modern Organizations Prove Their Quality—and Show It to the World.
          </h1>
          <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
            With roots serving over 250+ organizations since 1997, our group brings together accredited compliance engineering, enterprise SaaS, custom manufacturing, and high-converting digital media. Whether you are a food manufacturer automating HACCP checks, a SaaS company certifying to ISO 27001, or a hospitality brand scaling direct bookings through vertical video and custom VIP amenities, our specialized divisions operate with one shared standard of excellence.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#b4c5ff]">DIVISION 01</span>
            <h3 className="font-headline font-bold text-xl text-white">Creative & Media</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Cinema-grade commercial production, high-throughput e-commerce photography, viral hospitality reels, and performance UGC ad testing engineered to scale ROAS.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#4edea3]">DIVISION 02</span>
            <h3 className="font-headline font-bold text-xl text-white">Compliance & SaaS</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Compliance360 ISMS suite, Inspect360 mobile facility auditing, and IAR-112 USA accredited ISO certification delivered on-site or 100% remotely under IAF MD 4.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#ffb77d]">DIVISION 03</span>
            <h3 className="font-headline font-bold text-xl text-white">Corporate Gifting</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Bespoke Belgian chocolate factory with 100% in-house CAD mold engineering, domestic clean-room casting, and temperature-controlled event delivery with zero outsourcing.
            </p>
          </div>
        </div>

        {/* Governance & Impartiality Callout */}
        <div className="p-8 rounded-2xl bg-[#1c1f2a] border border-[#4edea3]/40 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase text-[#4edea3] tracking-wider">
              REGULATORY INDEPENDENCE & IMPARTIALITY
            </span>
            <h2 className="font-headline font-bold text-2xl text-white">
              Institutional Governance & Impartiality Protocol
            </h2>
            <p className="text-xs text-[#8d90a0] leading-relaxed max-w-3xl">
              In accordance with international accreditation guidelines (ISO/IEC 17021-1 and IAR-112 policies), AllBiz Digital maintains strict operational separation between its consulting/creative advisory arms and its accredited certification decision bodies. No audit outcome is ever conditioned upon the purchase of ancillary software or creative production services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-white">Accreditation & Recognition</span>
              <span className="text-[11px] text-[#4edea3] font-mono">IAR-112 (USA) Validated</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-white">Impartiality & Independence</span>
              <span className="text-[11px] text-[#8d90a0]">ISO 17021-1 Clause 5.2</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-white">Complaints & Appeals Board</span>
              <span className="text-[11px] text-[#8d90a0]">Formal Redress Committee</span>
            </div>
            <div className="p-4 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-1.5">
              <span className="text-xs font-bold text-white">ISO/IEC 27001 Security Trust</span>
              <span className="text-[11px] text-[#4edea3] font-mono">SOC 2 Type II Certified</span>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <h3 className="font-headline font-bold text-xl text-white">Headquarters & Domestic Atelier</h3>
            <p className="text-xs text-[#8d90a0]">
              New York Creative Lab • Washington D.C. Regulatory Node • Austin Chocolate Clean-Room
            </p>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            Connect With Leadership →
          </button>
        </div>
      </div>
    </div>
  );
};
