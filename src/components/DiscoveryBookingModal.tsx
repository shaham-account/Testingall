import React, { useState } from 'react';

interface DiscoveryBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVertical?: string;
}

export const DiscoveryBookingModal: React.FC<DiscoveryBookingModalProps> = ({
  isOpen,
  onClose,
  defaultVertical = 'Creative Production (Videography, Product Photos, Hotel Reels, UGC Ads)',
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [selectedVertical, setSelectedVertical] = useState(defaultVertical);
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 2:00 PM EST');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleReset = () => {
    setStep('details');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div
        className="relative w-full max-w-xl bg-[#171b26] border border-[#434655]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1c1f2a] border-b border-[#434655]/40">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            </span>
            <div>
              <h3 className="font-semibold text-white text-base">Schedule 15-Min Discovery Call</h3>
              <p className="text-xs text-[#8d90a0]">Direct consultation with AllBiz Digital Practice Directors</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#262a35] hover:bg-[#313540] text-[#8d90a0] hover:text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {step === 'details' ? (
          <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium text-[#8d90a0] mb-1 uppercase tracking-wider">
                Select Practice Area
              </label>
              <select
                value={selectedVertical}
                onChange={(e) => setSelectedVertical(e.target.value)}
                className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2563eb]"
              >
                <option>Creative Production (Videography, Product Photos, Hotel Reels, UGC Ads)</option>
                <option>Compliance360 / Inspect360 Software Demo</option>
                <option>Accredited ISO Certification or Third-Party Inspection</option>
                <option>Custom Corporate Chocolates & Bulk Event Gifting</option>
                <option>Multi-Vertical Enterprise Master Agreement</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8d90a0] mb-1 uppercase tracking-wider">
                Select Preferred Time Slot
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Today, 4:30 PM EST', 'Tomorrow, 10:00 AM EST', 'Tomorrow, 2:00 PM EST', 'Thursday, 11:30 AM EST', 'Thursday, 3:00 PM EST', 'Friday, 1:00 PM EST'].map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedDate(slot)}
                    className={`p-2 rounded-lg text-xs font-medium border text-left transition-all ${
                      selectedDate === slot
                        ? 'bg-[#2563eb]/20 border-[#2563eb] text-white'
                        : 'bg-[#0f131d] border-[#434655]/30 text-[#8d90a0] hover:border-[#8d90a0]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#8d90a0] mb-1 uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Jordan Miller"
                  className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2 text-sm text-white placeholder-[#8d90a0]/50 focus:outline-none focus:border-[#2563eb]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#8d90a0] mb-1 uppercase tracking-wider">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jordan@company.com"
                  className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2 text-sm text-white placeholder-[#8d90a0]/50 focus:outline-none focus:border-[#2563eb]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8d90a0] mb-1 uppercase tracking-wider">
                Company / Organization *
              </label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Nexus Industrial Systems"
                className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2 text-sm text-white placeholder-[#8d90a0]/50 focus:outline-none focus:border-[#2563eb]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8d90a0] mb-1 uppercase tracking-wider">
                Specific Objectives or Timelines
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Provide any key goals, target standards, or production dates..."
                className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2 text-sm text-white placeholder-[#8d90a0]/50 focus:outline-none focus:border-[#2563eb]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-medium text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Discovery Session</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-headline font-bold text-xl text-white">Discovery Session Reserved!</h3>
              <p className="text-sm text-[#8d90a0] max-w-sm">
                A calendar invitation with secure video conference link has been dispatched to{' '}
                <span className="text-white font-medium">{email || 'your email'}</span> for{' '}
                <span className="text-[#4edea3] font-medium">{selectedDate}</span>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#0f131d] border border-[#434655]/30 text-left w-full text-xs flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-[#8d90a0]">Assigned Practice Director:</span>
                <span className="text-white font-semibold">David Vance, Partner</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8d90a0]">Vertical Scope:</span>
                <span className="text-[#b4c5ff] font-medium truncate max-w-[280px]">{selectedVertical}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8d90a0]">Direct Dial Concierge:</span>
                <span className="font-mono text-[#4edea3]">+1 (800) 492-8812</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-2 px-6 py-2.5 rounded-lg bg-[#262a35] hover:bg-[#313540] text-sm text-white font-medium transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
