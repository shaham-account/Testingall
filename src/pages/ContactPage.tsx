import React, { useState } from 'react';
import { RoutePath } from '../types';

interface ContactPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenBookDemo: (vertical?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenBookDemo,
}) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [inquiryType, setInquiryType] = useState('Creative Production (Videography, Product Photos, Hotel Reels, UGC Ads)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-white">Contact & Strategy Desk</span>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#2563eb]/20 text-[#b4c5ff] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse"></span>
            EXECUTIVE STRATEGY DESK • DEDICATED DIRECTORS
          </div>
          <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-white">
            Let's Build, Certify, or Scale Your Brand.
          </h1>
          <p className="text-sm sm:text-base text-[#8d90a0] leading-relaxed">
            Reach out to our specialized practice directors for an exploratory strategy session, formal accredited audit proposal, creative media quote, or custom confectionery prototype.
          </p>
        </div>

        {/* 2-Column Split: Smart Routing Form & Direct Channels Sidebar */}
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Smart Routing Form */}
          <div className="col-span-12 lg:col-span-7 bg-[#171b26] rounded-2xl p-6 sm:p-8 border border-[#434655]/40 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <h2 className="font-headline font-bold text-xl text-white">Direct Inquiry Routing</h2>
                  <p className="text-xs text-[#8d90a0]">Routed automatically to the lead partner in your vertical.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-white block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#2563eb]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-white block mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#2563eb]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-white block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#2563eb]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-white block mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Acme Holdings"
                      className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#2563eb]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-white block mb-1">
                    What can we help you with today? *
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#2563eb]"
                  >
                    <option>Creative Production (Videography, Product Photos, Hotel Reels, UGC Ads)</option>
                    <option>Compliance360 / Inspect360 Software Demo</option>
                    <option>Accredited ISO Certification or Third-Party Inspection</option>
                    <option>Custom Corporate Chocolates & Bulk Event Gifting</option>
                    <option>Multi-Vertical Enterprise Master Agreement</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-white block mb-1">Project Details or Requirements</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your upcoming project, target standards, or production deadlines..."
                    className="w-full bg-[#0a0e18] border border-[#434655]/50 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#2563eb]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-headline font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit & Book a 15-Min Discovery Call</span>
                  <span>→</span>
                </button>
              </form>
            ) : (
              <div className="py-12 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[36px]">check_circle</span>
                </div>
                <h3 className="font-headline font-bold text-2xl text-white">Inquiry Successfully Dispatched!</h3>
                <p className="text-xs text-[#8d90a0] max-w-md">
                  Thank you, <span className="text-white font-semibold">{fullName}</span>. Your request regarding "{inquiryType}" has been routed to our Senior Practice Director. We will reply within 4 business hours.
                </p>
                <button
                  onClick={() => onOpenBookDemo(inquiryType)}
                  className="mt-2 px-6 py-2.5 rounded-lg bg-[#2563eb] text-white text-xs font-semibold hover:bg-[#1d4ed8] transition-colors"
                >
                  Pick Immediate Calendar Time Slot →
                </button>
              </div>
            )}
          </div>

          {/* Direct Channels Sidebar */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            {/* 1-Click Calendar Booking Embed Simulation */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">calendar_month</span>
                </span>
                <div>
                  <h3 className="font-headline font-bold text-base text-white">Instant Calendar Booking</h3>
                  <span className="text-xs text-[#8d90a0]">Direct 15-min discovery slot</span>
                </div>
              </div>
              <p className="text-xs text-[#8d90a0] leading-relaxed">
                Skip the back-and-forth email scheduling. Select an open appointment with our group directors.
              </p>
              <button
                type="button"
                onClick={() => onOpenBookDemo(inquiryType)}
                className="w-full py-2.5 rounded-lg bg-[#262a35] hover:bg-[#313540] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 border border-[#434655]/40 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] text-[#4edea3]">schedule</span>
                <span>Open Interactive Scheduler</span>
              </button>
            </div>

            {/* Direct Concierge Channels */}
            <div className="p-6 rounded-2xl bg-[#171b26] border border-[#434655]/40 flex flex-col gap-4 shadow-xl">
              <h3 className="font-headline font-bold text-base text-white">Direct Executive Channels</h3>

              <a
                href="https://wa.me/18004928812"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex items-center gap-3 hover:border-[#4edea3] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#007d55]/30 text-[#4edea3] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block group-hover:text-[#4edea3]">
                    Instant WhatsApp Concierge
                  </span>
                  <span className="text-[11px] text-[#8d90a0]">Avg response: &lt; 5 minutes</span>
                </div>
              </a>

              <a
                href="mailto:partnerships@allbizdigital.com"
                className="p-3.5 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex items-center gap-3 hover:border-[#2563eb] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#2563eb]/20 text-[#b4c5ff] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block group-hover:text-[#b4c5ff]">
                    Direct Sales Email
                  </span>
                  <span className="text-[11px] text-[#8d90a0] font-mono">partnerships@allbizdigital.com</span>
                </div>
              </a>

              <div className="p-3.5 rounded-xl bg-[#0f131d] border border-[#434655]/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#d97707]/20 text-[#ffb77d] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">Toll-Free USA Support</span>
                  <span className="text-[11px] text-[#8d90a0] font-mono">+1 (800) 492-8812</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
