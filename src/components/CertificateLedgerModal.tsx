import React, { useState } from 'react';
import { CertificateRecord } from '../types';

interface CertificateLedgerModalProps {
  cert: CertificateRecord | null;
  onClose: () => void;
}

export const CertificateLedgerModal: React.FC<CertificateLedgerModalProps> = ({
  cert,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!cert) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(cert.sha256Hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl bg-[#171b26] border border-[#434655]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1c1f2a] border-b border-[#434655]/40">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">verified</span>
            </span>
            <div>
              <h3 className="font-semibold text-white text-base">Cryptographic Registry Ledger</h3>
              <p className="text-xs text-[#8d90a0]">Accreditation Registrar IAR-112 USA • Verified Node</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#262a35] hover:bg-[#313540] text-[#8d90a0] hover:text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Certificate Body (Pristine Formal Document Look) */}
        <div className="p-6 overflow-y-auto max-h-[75vh] flex flex-col gap-6">
          {/* Certificate Card Frame */}
          <div className="relative p-6 sm:p-8 rounded-xl bg-[#0f131d] border-2 border-[#4edea3]/30 shadow-inner flex flex-col gap-6">
            {/* Top Seals */}
            <div className="flex items-center justify-between pb-4 border-b border-[#434655]/30">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#4edea3]">
                  INTERNATIONAL ACCREDITATION REGISTRAR
                </span>
                <span className="font-headline font-bold text-lg text-white">
                  CERTIFICATE OF REGISTRATION
                </span>
                <span className="text-xs text-[#8d90a0]">IAR-112 USA Registry Identification</span>
              </div>
              <div className="text-right">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#007d55]/30 text-[#4edea3] border border-[#4edea3]/40">
                  {cert.status} & ACCREDITED
                </span>
              </div>
            </div>

            {/* Certified Org */}
            <div className="flex flex-col gap-1 text-center py-2">
              <span className="text-xs uppercase text-[#8d90a0] tracking-wider">
                This is to certify that the management system of:
              </span>
              <h2 className="font-headline font-bold text-2xl text-white tracking-tight">
                {cert.companyName}
              </h2>
              <span className="text-xs text-[#4edea3] font-mono">Registry ID: {cert.registryNumber}</span>
            </div>

            {/* Standard & Scope */}
            <div className="p-4 rounded-lg bg-[#1c1f2a] border border-[#434655]/30 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#8d90a0]">Standard Certified:</span>
                <span className="text-sm font-semibold text-[#b4c5ff]">{cert.standard}</span>
              </div>
              <div className="pt-2 border-t border-[#434655]/20">
                <span className="text-xs uppercase tracking-wider text-[#8d90a0] block mb-1">Applicable Scope:</span>
                <p className="text-xs text-[#dfe2f1] leading-relaxed">{cert.scope}</p>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 rounded bg-[#1c1f2a]">
                <span className="text-[#8d90a0] block">Initial Issue:</span>
                <span className="font-mono text-white font-medium">{cert.issueDate}</span>
              </div>
              <div className="p-2.5 rounded bg-[#1c1f2a]">
                <span className="text-[#8d90a0] block">Valid Through:</span>
                <span className="font-mono text-[#4edea3] font-medium">{cert.expiryDate}</span>
              </div>
              <div className="p-2.5 rounded bg-[#1c1f2a]">
                <span className="text-[#8d90a0] block">Audit Protocol:</span>
                <span className="font-medium text-white">{cert.auditMethod}</span>
              </div>
              <div className="p-2.5 rounded bg-[#1c1f2a]">
                <span className="text-[#8d90a0] block">Assessor ID:</span>
                <span className="font-mono text-white">{cert.auditorId.split(' ')[0]}</span>
              </div>
            </div>

            {/* Cryptographic SHA-256 Proof */}
            <div className="p-3.5 rounded-lg bg-[#0a0e18] border border-[#434655]/40 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#8d90a0] font-mono">256-BIT ECDSA CRYPTOGRAPHIC SIGNATURE</span>
                <button
                  onClick={handleCopy}
                  className="text-[#4edea3] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Copied Hash!' : 'Copy Hash'}</span>
                </button>
              </div>
              <div className="p-2 rounded bg-black/40 font-mono text-[11px] text-[#4edea3] break-all leading-relaxed">
                {cert.sha256Hash}
              </div>
              <span className="text-[10px] text-[#8d90a0]">
                Cryptographically anchored in the IAR-112 Federal Verification Ledger. Tamper-evident & verifiable offline.
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 py-4 bg-[#1c1f2a] border-t border-[#434655]/40 flex items-center justify-between">
          <span className="text-xs text-[#8d90a0]">
            Tamper-proof verifiable credential
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-[#262a35] hover:bg-[#313540] text-sm text-[#dfe2f1] font-medium transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>Print Certificate</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-sm text-white font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
