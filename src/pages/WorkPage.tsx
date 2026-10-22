import React, { useState } from 'react';
import { RoutePath } from '../types';
import { CASE_STUDIES } from '../data/mockData';

interface WorkPageProps {
  onNavigate: (path: RoutePath) => void;
  onOpenVideoModal: (title: string, subtitle: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  onNavigate,
  onOpenVideoModal,
}) => {
  const [filter, setFilter] = useState<'all' | 'creative' | 'compliance' | 'gifting'>('all');

  const filteredCases = filter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.vertical === filter);

  return (
    <div className="flex flex-col w-full py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8d90a0]">
          <button onClick={() => onNavigate('/')} className="hover:text-white transition-colors">Home</button>
          <span>/</span>
          <span className="text-white">Work & Case Studies</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563eb]">
              PROVEN ENTERPRISE IMPACT
            </span>
            <h1 className="font-headline text-3xl sm:text-5xl font-extrabold text-white">
              Work & Performance Case Studies
            </h1>
            <p className="text-sm sm:text-base text-[#8d90a0]">
              Explore verified client outcomes across cinema-grade media scaling, cryptographic ISO compliance audits, and luxury corporate confectionery.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="p-1 rounded-xl bg-[#171b26] border border-[#434655]/40 flex items-center gap-1">
            {(['all', 'creative', 'compliance', 'gifting'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                  filter === cat ? 'bg-[#2563eb] text-white shadow' : 'text-[#8d90a0] hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Case Studies' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="flex flex-col gap-10">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-8 rounded-2xl bg-[#171b26] border border-[#434655]/40 grid grid-cols-12 gap-8 items-center shadow-xl hover:border-[#2563eb]/50 transition-all"
            >
              <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#2563eb]/20 text-[#b4c5ff]">
                    {cs.vertical.toUpperCase()}
                  </span>
                  <span className="text-xs text-[#8d90a0]">{cs.industry}</span>
                </div>
                <h2 className="font-headline font-bold text-xl sm:text-2xl text-white leading-snug">
                  {cs.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#8d90a0] leading-relaxed">{cs.summary}</p>

                {cs.quote && (
                  <div className="p-3.5 rounded-xl bg-[#0f131d] border-l-2 border-[#2563eb] text-xs text-[#dfe2f1] italic">
                    "{cs.quote}"
                    {cs.author && <span className="block mt-1 font-semibold text-[#8d90a0] not-italic">— {cs.author}</span>}
                  </div>
                )}

                {/* Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {cs.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#0f131d] border border-[#434655]/20">
                      <span className="text-[10px] text-[#8d90a0] uppercase block">{m.label}</span>
                      <span className="font-headline font-bold text-lg text-white">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5">
                <div
                  onClick={() => onOpenVideoModal(cs.title, cs.client)}
                  className="relative rounded-xl overflow-hidden bg-[#262a35] group cursor-pointer shadow-lg"
                >
                  <img
                    src={cs.image}
                    alt={cs.client}
                    className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                    <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[30px]">play_arrow</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
