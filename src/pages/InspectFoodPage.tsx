import React, { useState } from 'react';
import { RoutePath } from '../types';
import { ASSET_IMAGES } from '../data/mockData';

interface InspectFoodPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const InspectFoodPage: React.FC<InspectFoodPageProps> = ({
  onNavigate,
  onOpenBookDemo,
}) => {
  const [activeChecklist, setActiveChecklist] = useState('Critical CCP-1 Cooking Temp');
  const [tempReading, setTempReading] = useState(168.4);

  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-[#4edea3]">Compliance & Inspection</span>
          <span>/</span>
          <span className="text-white">Inspect360 Food & Facility</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4edea3] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">fact_check</span>
              MOBILE FDA FSMA & HACCP AUDITING WORKFLOWS
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Mobile Inspection Software for Food Safety & Regulated Facilities
            </h1>
            <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
              Empower plant QA teams and field auditors with offline mobile checklists, BLE thermometer sync, instant non-conformance quarantine tagging, and audit-ready FDA reports.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBookDemo('Inspect360 Food & Facility Demo')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#007d55] text-white hover:bg-[#009667] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Request Facility Demo</span>
                <span>→</span>
              </button>
              <a
                href="https://app.inspect360suite.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#8d90a0] hover:text-[#4edea3] transition-colors flex items-center gap-1 ml-1"
              >
                <span>External App Login</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-4 shadow-2xl">
              <div className="flex items-center justify-between pb-2 border-b border-[#434655]/30">
                <span className="text-xs font-bold text-white uppercase">Inspect360 Mobile Station</span>
                <span className="text-[10px] font-mono text-[#4edea3] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                  BLE PROBE SYNCED
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#8d90a0]">Active CCP Checkpoint:</span>
                  <span className="text-xs font-semibold text-white">{activeChecklist}</span>
                </div>
                <div className="flex items-baseline justify-between p-3 rounded-lg bg-[#1c1f2a]">
                  <span className="text-xs text-[#8d90a0]">Internal Core Temp:</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline font-bold text-3xl text-[#4edea3]">{tempReading.toFixed(1)}°F</span>
                    <span className="text-[10px] text-[#4edea3]">PASS (≥165°F)</span>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-[#8d90a0]">
                  <span>Inspector ID: QA-4091</span>
                  <span>SHA-256 Validated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">cloud_off</span>
            </div>
            <h3 className="font-headline font-bold text-lg text-white">100% Offline Mobile Operation</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Conduct inspections inside cold-storage freezers, clean-rooms, and remote warehouses with zero Wi-Fi drops. Automatically syncs when back online.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">bluetooth</span>
            </div>
            <h3 className="font-headline font-bold text-lg text-white">Hardware Probe Integration</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Direct Bluetooth pairing with industrial food thermometers and calibration instruments to eradicate manual data tampering and pencil whipping.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">policy</span>
            </div>
            <h3 className="font-headline font-bold text-lg text-white">Instant FDA FSMA & HACCP Audit Packet</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              When an unannounced health inspector or customer auditor walks in, generate a complete 6-month cryptographic verification binder in 3 clicks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
