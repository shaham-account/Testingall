import React, { useState } from 'react';
import { RoutePath } from '../types';
import { COMPLIANCE_MODULES_21 } from '../data/mockData';

interface CompliancePlatformPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const CompliancePlatformPage: React.FC<CompliancePlatformPageProps> = ({
  onNavigate,
  onOpenBookDemo,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'govern' | 'manage' | 'assure' | 'improve'>('all');
  const [selectedStandard, setSelectedStandard] = useState('ISO 9001:2015');

  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-[#4edea3]">Compliance & Inspection</span>
          <span>/</span>
          <span className="text-white">Compliance360 Platform</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4edea3] flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              INTEGRATED COMPLIANCE & MANAGEMENT SYSTEM SAAS
            </span>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Run Your Entire Management System in One Connected Platform
            </h1>
            <p className="text-base sm:text-lg text-[#8d90a0] leading-relaxed">
              Connect requirements, controlled documents, risks, audits, corrective actions, suppliers, and sustainability—supported by AI and governed by your team. Start with an AI-assisted documentation framework, then operate from one source of truth.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBookDemo('Compliance360 14-Day Free Trial')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#007d55] text-white hover:bg-[#009667] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Start 14-Day Free Trial</span>
                <span>→</span>
              </button>
              <button
                onClick={() => onOpenBookDemo('Compliance360 1:1 Live Demo')}
                className="px-6 py-3.5 rounded-lg font-headline font-bold text-sm bg-[#1c1f2a] hover:bg-[#262a35] text-white border border-[#434655]/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px] text-[#4edea3]">calendar_month</span>
                <span>Book a 1:1 Demo</span>
              </button>
              <a
                href="https://compliance360.isoxpert.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#8d90a0] hover:text-[#4edea3] transition-colors flex items-center gap-1 ml-1"
              >
                <span>External App Console</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            {/* Live Interactive Module Sandbox */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-4 shadow-2xl">
              <div className="flex items-center justify-between pb-2 border-b border-[#434655]/30">
                <span className="text-xs font-bold text-white uppercase">AI Clause-to-Policy Mapping</span>
                <span className="text-[10px] font-mono text-[#4edea3]">ISO 9.3 REVIEW READY</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs text-[#8d90a0]">Active Standard Framework:</span>
                <select
                  value={selectedStandard}
                  onChange={(e) => setSelectedStandard(e.target.value)}
                  className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3 py-2 text-xs text-white"
                >
                  <option>ISO 9001:2015 (Quality)</option>
                  <option>ISO 27001:2022 (ISMS Cyber)</option>
                  <option>ISO 14001:2015 (Environmental)</option>
                  <option>ISO 45001:2018 (Occupational Health & Safety)</option>
                  <option>FDA QMSR (21 CFR Part 820)</option>
                  <option>HACCP FSMA Food Safety</option>
                </select>
              </div>
              <div className="p-3 rounded-lg bg-[#0a0e18] border border-[#434655]/30 flex flex-col gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8d90a0]">Clause Traceability:</span>
                  <span className="text-[#4edea3] font-bold">100% Clause-Mapped</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8d90a0]">E-Signature Standard:</span>
                  <span className="text-white font-mono">SHA-256 (21 CFR Part 11)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8d90a0]">Tenant Security:</span>
                  <span className="text-white">PostgreSQL Row-Level Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <div className="p-4 sm:p-6 rounded-xl bg-[#0a0e18] border border-[#434655]/30 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#4edea3]">verified_user</span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">ISO/IEC 27001 Certified</span>
              <span className="text-[11px] text-[#8d90a0]">SOC 2 Type II ISMS</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#4edea3]">hub</span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">21 Connected Modules</span>
              <span className="text-[11px] text-[#8d90a0]">Unified Enterprise Core</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#4edea3]">file_download</span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">100% Data Exportable</span>
              <span className="text-[11px] text-[#8d90a0]">Word, Excel & Cryptographic PDF</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[24px] text-[#4edea3]">payments</span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">From $49/mo</span>
              <span className="text-[11px] text-[#8d90a0]">Per Organization Tier</span>
            </div>
          </div>
        </div>

        {/* How It Works (3 Steps) */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4edea3]">OPERATIONAL FLOW</span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <span className="w-8 h-8 rounded-full bg-[#007d55]/30 text-[#4edea3] font-bold text-sm flex items-center justify-center">
                1
              </span>
              <h3 className="font-headline font-bold text-lg text-white">Subscribe to Your Standards</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Pick ISO 9001, 27001, 45001, 14001, SOC 2, FDA QMSR (21 CFR 820), or HACCP. Every standard includes the Documentation Toolkit, audit checklists, and gap-analysis support.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <span className="w-8 h-8 rounded-full bg-[#007d55]/30 text-[#4edea3] font-bold text-sm flex items-center justify-center">
                2
              </span>
              <h3 className="font-headline font-bold text-lg text-white">Generate Your AI Documentation</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Draft a tailored, clause-mapped set of policies, procedures, SOPs, and record templates in an afternoon. AI proposes; your team reviews, edits, and routes through controlled SHA-256 e-signature approval.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-3">
              <span className="w-8 h-8 rounded-full bg-[#007d55]/30 text-[#4edea3] font-bold text-sm flex items-center justify-center">
                3
              </span>
              <h3 className="font-headline font-bold text-lg text-white">Implement, Operate & Improve</h3>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Run risks, obligations, audits, NCRs, corrective actions, and management review on the same data model—and invite your external consultant with permission-controlled access.
              </p>
            </div>
          </div>
        </div>

        {/* 21 Workspace Modules Grouped by Job */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4edea3]">ARCHITECTURE DIRECTORY</span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">
                21 Workspace Modules Grouped by Job
              </h2>
            </div>
            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#171b26] border border-[#434655]/40 text-xs">
              {(['all', 'govern', 'manage', 'assure', 'improve'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-md font-medium uppercase text-[11px] transition-all cursor-pointer ${
                    activeTab === tab ? 'bg-[#007d55] text-white shadow' : 'text-[#8d90a0] hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(activeTab === 'all' || activeTab === 'govern') &&
              COMPLIANCE_MODULES_21.govern.map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-[#4edea3] uppercase font-mono">GOVERN</span>
                  <span className="text-sm font-semibold text-white">{m.name}</span>
                  <p className="text-xs text-[#8d90a0]">{m.desc}</p>
                </div>
              ))}

            {(activeTab === 'all' || activeTab === 'manage') &&
              COMPLIANCE_MODULES_21.manage.map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-[#4edea3] uppercase font-mono">MANAGE</span>
                  <span className="text-sm font-semibold text-white">{m.name}</span>
                  <p className="text-xs text-[#8d90a0]">{m.desc}</p>
                </div>
              ))}

            {(activeTab === 'all' || activeTab === 'assure') &&
              COMPLIANCE_MODULES_21.assure.map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-[#4edea3] uppercase font-mono">ASSURE</span>
                  <span className="text-sm font-semibold text-white">{m.name}</span>
                  <p className="text-xs text-[#8d90a0]">{m.desc}</p>
                </div>
              ))}

            {(activeTab === 'all' || activeTab === 'improve') &&
              COMPLIANCE_MODULES_21.improve.map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#171b26] border border-[#434655]/30 flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold text-[#4edea3] uppercase font-mono">IMPROVE</span>
                  <span className="text-sm font-semibold text-white">{m.name}</span>
                  <p className="text-xs text-[#8d90a0]">{m.desc}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Native ERP & Security Architecture */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase text-[#4edea3]">ENTERPRISE INTEGRATIONS</span>
            <h3 className="font-headline font-bold text-2xl text-white">Two-Way ERP Sync</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Connect SAP, Oracle, Microsoft Dynamics, and Odoo via REST & OData endpoints across 6 core entities: Employees, Customers, Suppliers, Products, Assets, and Nonconformities (NCRs).
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded bg-[#0a0e18] text-xs font-mono text-[#4edea3] border border-[#434655]/40">
                SAP NetWeaver OData
              </span>
              <span className="px-3 py-1 rounded bg-[#0a0e18] text-xs font-mono text-[#4edea3] border border-[#434655]/40">
                Oracle Fusion REST
              </span>
              <span className="px-3 py-1 rounded bg-[#0a0e18] text-xs font-mono text-[#4edea3] border border-[#434655]/40">
                Odoo API v16+
              </span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase text-[#4edea3]">CRYPTOGRAPHIC GOVERNANCE</span>
            <h3 className="font-headline font-bold text-2xl text-white">Regulated Security Architecture</h3>
            <p className="text-xs text-[#8d90a0] leading-relaxed">
              Tenant isolation via PostgreSQL Row-Level Security (RLS), 21 CFR Part 11 SHA-256 electronic signatures with audit log timestamps, GDPR/PDPL DSAR instant exports, and Google Workspace SSO.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 rounded bg-[#0a0e18] text-xs font-mono text-[#4edea3] border border-[#434655]/40">
                21 CFR Part 11 SHA-256
              </span>
              <span className="px-3 py-1 rounded bg-[#0a0e18] text-xs font-mono text-[#4edea3] border border-[#434655]/40">
                Google Workspace SAML 2.0
              </span>
              <span className="px-3 py-1 rounded bg-[#0a0e18] text-xs font-mono text-[#4edea3] border border-[#434655]/40">
                PostgreSQL RLS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
