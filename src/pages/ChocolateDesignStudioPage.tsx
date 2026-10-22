import React, { useState } from 'react';
import { RoutePath, ChocolatePieceConfig, CocoaProfile, FoilOption } from '../types';
import { CHOCOLATE_PIECES, COCOA_PROFILES, FOIL_OPTIONS } from '../data/mockData';
import { ThreeChocolateCanvas } from '../components/ThreeChocolateCanvas';

interface ChocolateDesignStudioPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const ChocolateDesignStudioPage: React.FC<ChocolateDesignStudioPageProps> = ({
  onNavigate,
  onOpenBookDemo,
}) => {
  const [selectedPiece, setSelectedPiece] = useState<ChocolatePieceConfig>(CHOCOLATE_PIECES[0]);
  const [selectedCocoa, setSelectedCocoa] = useState<CocoaProfile>(COCOA_PROFILES[0]);
  const [selectedFoil, setSelectedFoil] = useState<FoilOption>(FOIL_OPTIONS[0]);
  const [logoText, setLogoText] = useState('ACME CORP');
  const [embossDepth, setEmbossDepth] = useState(1.8);
  const [quantity, setQuantity] = useState(250);
  const [customFileLoaded, setCustomFileLoaded] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Price calculations with volume discounts
  const calculateUnitPrice = () => {
    let unit = selectedPiece.basePrice;
    if (quantity >= 1000) unit *= 0.78;
    else if (quantity >= 500) unit *= 0.88;
    else if (quantity >= 250) unit *= 0.94;
    return unit;
  };

  const unitPrice = calculateUnitPrice();
  const totalPrice = unitPrice * quantity;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCustomFileLoaded(true);
      const name = e.target.files[0].name.split('.')[0].toUpperCase();
      setLogoText(name);
    }
  };

  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-[#ffb77d]">Corporate Gifting</span>
          <span>/</span>
          <span className="text-white">3D Chocolate Design Studio</span>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#d97707]/20 text-[#ffb77d] w-fit">
            <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
            LIVE 3D CAD ATELIER • 48-HR PROTOTYPE
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-extrabold text-white">
            3D Chocolate Design Studio & Real-Time Configurator
          </h1>
          <p className="text-sm text-[#8d90a0] leading-relaxed">
            Upload your vector logo (SVG/PDF), choose your chocolate piece silhouette, select pure Belgian couverture, and preview your custom branded confection in real-time 3D before placing an order.
          </p>
        </div>

        {/* Main 2-Column Studio Grid */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 3D Canvas Viewport */}
          <div className="col-span-12 lg:col-span-6 bg-[#0a0e18] rounded-2xl p-6 border border-[#434655]/40 flex flex-col justify-between gap-6 shadow-2xl sticky top-24">
            <div className="flex items-center justify-between z-10">
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase text-[#ffb77d]">Real-Time WebGL Viewport</span>
                <span className="text-xs text-[#8d90a0]">CAD Mold Depth: {embossDepth} mm</span>
              </div>
              <span className="font-mono text-xs text-white font-bold bg-[#1c1f2a] px-3 py-1 rounded-full border border-[#434655]/30">
                {selectedPiece.dimensions} • {selectedPiece.weight}
              </span>
            </div>

            {/* 3D Canvas */}
            <div className="w-full">
              <ThreeChocolateCanvas
                piece={selectedPiece}
                cocoa={selectedCocoa}
                foil={selectedFoil}
                logoText={logoText}
                embossDepth={embossDepth}
                className="h-80 sm:h-96 w-full"
              />
            </div>

            {/* Live Specs Bar */}
            <div className="p-4 rounded-xl bg-[#171b26] border border-[#434655]/30 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-[#8d90a0] text-[11px] block">Piece Silhouette:</span>
                <span className="text-white font-semibold">{selectedPiece.name}</span>
              </div>
              <div>
                <span className="text-[#8d90a0] text-[11px] block">Recipe Couverture:</span>
                <span className="text-[#ffb77d] font-semibold">{selectedCocoa.name.split(' ')[0]}</span>
              </div>
              <div>
                <span className="text-[#8d90a0] text-[11px] block">Foil Wrap:</span>
                <span className="text-white font-semibold">{selectedFoil.name}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[#8d90a0] border-t border-[#434655]/20 pt-3">
              <span>Clean-Room Mold Bed: 28 × 19 cm</span>
              <span className="text-[#4edea3] font-medium">100% Halal & Gluten-Free</span>
            </div>
          </div>

          {/* Right Column: Customization Controls */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
            {/* 1. Silhouette Selectors */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-3 shadow-lg">
              <span className="text-xs font-bold uppercase text-[#ffb77d]">Step 1: Choose Silhouette Size</span>
              <div className="grid grid-cols-2 gap-2.5">
                {CHOCOLATE_PIECES.map((piece) => (
                  <button
                    key={piece.id}
                    type="button"
                    onClick={() => setSelectedPiece(piece)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      selectedPiece.id === piece.id
                        ? 'bg-[#1c1f2a] border-[#ffb77d] shadow-sm'
                        : 'bg-[#0f131d] border-[#434655]/30 hover:border-[#434655]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-white">{piece.name}</span>
                      <span className="text-[11px] font-mono text-[#ffb77d]">{piece.weight}</span>
                    </div>
                    <span className="text-[11px] text-[#8d90a0] block">{piece.dimensions}</span>
                    <span className="text-[10px] text-[#dfe2f1]/70 block mt-1">{piece.recommendedFor}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Cocoa Blend Selectors */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-3 shadow-lg">
              <span className="text-xs font-bold uppercase text-[#ffb77d]">Step 2: Choose Belgian Cocoa Blend</span>
              <div className="grid grid-cols-3 gap-2.5">
                {COCOA_PROFILES.map((cocoa) => (
                  <button
                    key={cocoa.id}
                    type="button"
                    onClick={() => setSelectedCocoa(cocoa)}
                    className={`p-3 rounded-xl text-left border transition-all flex flex-col gap-2 cursor-pointer ${
                      selectedCocoa.id === cocoa.id
                        ? 'bg-[#1c1f2a] border-[#ffb77d] shadow-sm'
                        : 'bg-[#0f131d] border-[#434655]/30 hover:border-[#434655]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: cocoa.colorHex }}
                      />
                      <span className="text-xs font-bold text-white">{cocoa.percentage}</span>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-white block">{cocoa.name.split(' ')[0]}</span>
                      <span className="text-[10px] text-[#8d90a0] leading-tight block">{cocoa.flavor}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Logo & Relief Depth */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-4 shadow-lg">
              <span className="text-xs font-bold uppercase text-[#ffb77d]">Step 3: Upload Logo & Set Emboss Height</span>

              {/* Upload Dropzone */}
              <label className="p-5 rounded-xl bg-[#0f131d] border-2 border-dashed border-[#434655]/50 hover:border-[#ffb77d] flex flex-col items-center justify-center text-center gap-2 cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-[32px] text-[#ffb77d]">cloud_upload</span>
                <span className="text-xs font-semibold text-white">
                  {customFileLoaded ? `Logo Loaded: "${logoText}"` : 'Upload Vector Logo (SVG, PDF, AI, EPS)'}
                </span>
                <span className="text-[11px] text-[#8d90a0]">Click to browse or drop vector file</span>
                <input type="file" accept=".svg,.png,.pdf,.ai" onChange={handleFileUpload} className="hidden" />
              </label>

              {/* Text Input Fallback */}
              <div>
                <label className="text-xs font-semibold text-white block mb-1">
                  Brand Name Text for 3D Tooling
                </label>
                <input
                  type="text"
                  value={logoText}
                  onChange={(e) => setLogoText(e.target.value.toUpperCase())}
                  placeholder="ACME CORP"
                  className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2 text-xs text-white font-mono focus:outline-none focus:border-[#ffb77d]"
                />
              </div>

              {/* Emboss Depth Controls */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-white mb-1.5">
                  <span>Mold Emboss Relief: {embossDepth} mm</span>
                  <span className="text-[#ffb77d] font-mono">0.8mm Standard • 2.4mm Bold</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="2.4"
                  step="0.2"
                  value={embossDepth}
                  onChange={(e) => setEmbossDepth(Number(e.target.value))}
                  className="w-full accent-[#d97707]"
                />
              </div>

              {/* Foil Options */}
              <div>
                <span className="text-xs font-semibold text-white block mb-2">Outer Foil Wrapping</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {FOIL_OPTIONS.map((foil) => (
                    <button
                      key={foil.id}
                      type="button"
                      onClick={() => setSelectedFoil(foil)}
                      className={`p-2.5 rounded-lg border text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${
                        selectedFoil.id === foil.id
                          ? 'bg-[#1c1f2a] border-[#ffb77d] text-white'
                          : 'bg-[#0f131d] border-[#434655]/30 text-[#8d90a0]'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: foil.colorHex }} />
                      <span className="truncate">{foil.name.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Live Pricing & Instant Mockup Claim */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-4 shadow-lg">
              <span className="text-xs font-bold uppercase text-[#4edea3]">Step 4: Quantity & Live Pricing</span>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-semibold text-white">
                  <span>Production Quantity: {quantity} units</span>
                  <span className="text-[#4edea3] font-mono">
                    {quantity >= 1000 ? '22% Enterprise Discount' : quantity >= 500 ? '12% Tier Discount' : 'Standard Rate'}
                  </span>
                </div>
                <input
                  type="range"
                  min={selectedPiece.moq}
                  max="3000"
                  step="50"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-[#007d55]"
                />
                <div className="flex justify-between text-[11px] text-[#8d90a0]">
                  <span>MOQ: {selectedPiece.moq} units</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>3,000+ units</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0e18] border border-[#434655]/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#8d90a0] block">Unit Price:</span>
                  <span className="font-headline font-bold text-xl text-white">${unitPrice.toFixed(2)}/pc</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#8d90a0] block">Total Batch Estimate:</span>
                  <span className="font-headline font-bold text-2xl text-[#ffb77d]">${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>

              {!submitted ? (
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="w-full py-3.5 rounded-lg bg-[#d97707] hover:bg-[#b45309] text-white font-headline font-bold text-sm uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>Claim Free 48-Hour 3D CAD Mockup</span>
                </button>
              ) : (
                <div className="p-4 rounded-xl bg-[#007d55]/20 border border-[#4edea3]/40 text-center flex flex-col gap-2">
                  <span className="text-xs font-bold text-[#4edea3] flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    Mockup Request Queued with In-House Tooling Lab!
                  </span>
                  <p className="text-xs text-[#8d90a0]">
                    Our CAD engineers will machine a digital simulation of "{logoText}" on {selectedPiece.name} within 48 hours.
                  </p>
                  <button
                    onClick={() => onOpenBookDemo(`Chocolate Mockup for ${logoText}`)}
                    className="mt-1 text-xs text-[#b4c5ff] hover:underline font-semibold"
                  >
                    Schedule Direct Delivery Details →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
