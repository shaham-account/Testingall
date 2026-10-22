import React, { useState } from 'react';
import { RoutePath, CertificateRecord } from '../types';
import { CERTIFICATE_DATABASE } from '../data/mockData';

interface VerifyCertificatePageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenCertLedger: (cert: CertificateRecord) => void;
}

export const VerifyCertificatePage: React.FC<VerifyCertificatePageProps> = ({
  onNavigate,
  onOpenCertLedger,
}) => {
  const [query, setQuery] = useState('VG-9001-2024-8841');
  const [selectedCert, setSelectedCert] = useState<CertificateRecord | null>(CERTIFICATE_DATABASE[0]);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    const clean = searchTerm.trim().toUpperCase();
    const match = CERTIFICATE_DATABASE.find(
      (c) => c.registryNumber.toUpperCase() === clean || c.companyName.toUpperCase().includes(clean)
    );
    if (match) {
      setSelectedCert(match);
      setNotFound(false);
    } else {
      setSelectedCert(null);
      setNotFound(true);
    }
  };

  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-[#4edea3]">Compliance & Inspection</span>
          <span>/</span>
          <span className="text-white">Instant Certificate Registry</span>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#007d55]/30 text-[#4edea3] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            FEDERAL REGISTRY NODE • IAR-112 USA
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-white">
            Instant Cryptographic Certificate Registry Check
          </h1>
          <p className="text-sm text-[#8d90a0] leading-relaxed">
            Every certificate issued by AllBiz Digital carries an immutable 256-bit SHA-256 cryptographic signature. Validate any client certificate in real time or search our public registry below.
          </p>
        </div>

        {/* Search Bar & Sample Pills */}
        <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-4 shadow-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(query);
            }}
            className="flex gap-2"
          >
            <div className="relative flex-1">
              <span className="material-symbols-outlined text-[20px] text-[#8d90a0] absolute left-3.5 top-1/2 -translate-y-1/2">
                search
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by Registry Number (e.g. VG-9001-2024-8841) or Company Name..."
                className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg pl-11 pr-4 py-3 text-sm text-white font-mono focus:outline-none focus:border-[#4edea3]"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#007d55] hover:bg-[#009667] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Verify Registry</span>
            </button>
          </form>

          {/* Quick Click Samples */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#8d90a0]">Verified Sample IDs:</span>
            {CERTIFICATE_DATABASE.map((c) => (
              <button
                key={c.registryNumber}
                type="button"
                onClick={() => handleSearch(c.registryNumber)}
                className={`px-2.5 py-1 rounded font-mono text-[11px] border transition-all ${
                  selectedCert?.registryNumber === c.registryNumber
                    ? 'bg-[#007d55]/30 border-[#4edea3] text-[#4edea3]'
                    : 'bg-[#0f131d] border-[#434655]/30 text-[#8d90a0] hover:text-white'
                }`}
              >
                {c.registryNumber} ({c.companyName.split(' ')[0]})
              </button>
            ))}
          </div>
        </div>

        {notFound && (
          <div className="p-6 rounded-xl bg-red-950/30 border border-red-500/40 text-center flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-[32px] text-red-400">warning</span>
            <span className="text-sm font-bold text-white">No Certificate Found</span>
            <p className="text-xs text-[#8d90a0] max-w-md">
              The query "{query}" did not match any active certificate in the IAR-112 USA registry. Please check the registry ID on the official credential or QR code.
            </p>
          </div>
        )}

        {/* Verified Certificate Display Card */}
        {selectedCert && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border-2 border-[#4edea3]/50 shadow-2xl flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#434655]/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[28px]">verified</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#4edea3]">STATUS: VALID & ACCREDITED</span>
                    <span className="text-[11px] text-[#8d90a0]">|</span>
                    <span className="text-xs font-mono text-[#8d90a0]">{selectedCert.registryNumber}</span>
                  </div>
                  <h2 className="font-headline font-bold text-2xl text-white mt-0.5">{selectedCert.companyName}</h2>
                </div>
              </div>
              <button
                onClick={() => onOpenCertLedger(selectedCert)}
                className="px-4 py-2.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                <span>Open IAF Cryptographic Ledger</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 rounded-lg bg-[#0f131d] border border-[#434655]/30">
                <span className="text-[#8d90a0] block mb-1">Standard Certified:</span>
                <span className="text-white font-bold text-sm block">{selectedCert.standard}</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#0f131d] border border-[#434655]/30">
                <span className="text-[#8d90a0] block mb-1">Accrediting Registrar:</span>
                <span className="text-white font-semibold block">{selectedCert.accreditationBody}</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#0f131d] border border-[#434655]/30">
                <span className="text-[#8d90a0] block mb-1">Initial Issue Date:</span>
                <span className="text-white font-mono block">{selectedCert.issueDate}</span>
              </div>
              <div className="p-3.5 rounded-lg bg-[#0f131d] border border-[#434655]/30">
                <span className="text-[#8d90a0] block mb-1">Current Expiration:</span>
                <span className="text-[#4edea3] font-mono font-bold text-sm block">{selectedCert.expiryDate}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex flex-col gap-1.5 text-xs">
              <span className="text-[#8d90a0] uppercase tracking-wider font-semibold">Certified Scope of Registration:</span>
              <p className="text-white leading-relaxed">{selectedCert.scope}</p>
            </div>

            {/* Cryptographic SHA-256 Ledger Banner */}
            <div className="p-4 rounded-xl bg-[#0a0e18] border border-[#4edea3]/30 flex flex-col gap-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#8d90a0] font-mono">256-BIT ECDSA CRYPTOGRAPHIC HASH (OFFICIAL REGISTRY LEDGER)</span>
                <span className="text-[#4edea3] font-mono">IMMUTABLE ANCHOR</span>
              </div>
              <span className="font-mono text-xs text-[#4edea3] break-all bg-black/40 p-2.5 rounded border border-[#434655]/30">
                {selectedCert.sha256Hash}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
