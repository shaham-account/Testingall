import React, { useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  videoUrl?: string;
  posterImage?: string;
  metrics?: { label: string; value: string }[];
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  posterImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2zOmzjJn7NOdJYn9fupAYfg4RM7dlvIcjowMBmjhwfutiXWAwUge-zrkFmKTEUAg1Sa8v93wYP6R5F-GGXOXZqtwhfRtprXOIOh8dOfFHikLnVnx6-FIuIsOaDqgbu5HQyrJ4A_CGvrPnpIwEXN919nL7rYafoveSN7FK8oZzCE9-3KcDbngUObZgEOZ-S-EAVl9veKg7pE-5aVA-kfqnF7EFPk0XXfK2GINm97W6Khb-pnQQtZDnqw',
  metrics = [
    { label: 'Client ROAS Boost', value: '3.4x' },
    { label: 'CPA Slashed', value: '-63%' },
    { label: 'Resolution', value: '6K Cinema RAW' },
  ],
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl bg-[#171b26] border border-[#434655]/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1c1f2a] border-b border-[#434655]/40">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] animate-pulse"></span>
            <div>
              <h3 className="font-semibold text-white text-base leading-tight">{title}</h3>
              {subtitle && <p className="text-xs text-[#8d90a0]">{subtitle}</p>}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#262a35] hover:bg-[#313540] text-[#8d90a0] hover:text-white flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Cinematic Video Simulation Stage */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={posterImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

          {/* Center Play/Pause Overlay */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 w-20 h-20 rounded-full bg-[#2563eb]/90 hover:bg-[#2563eb] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[44px]">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          {/* Status HUD Overlays */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono text-[#4edea3] border border-[#4edea3]/30">
              ● REC 24.000 FPS • ARRI ALEXA MINI LF
            </span>
            <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/80 border border-white/20">
              6048 × 3190 PRORES 4444 XQ
            </span>
          </div>

          <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-xs text-white hover:bg-black/90 transition-colors flex items-center gap-1 border border-white/20"
            >
              <span className="material-symbols-outlined text-[16px]">
                {isMuted ? 'volume_off' : 'volume_up'}
              </span>
              <span>{isMuted ? 'Muted' : 'Spatial Audio'}</span>
            </button>
          </div>

          {/* Scrub Bar & Player Controls Bottom */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col gap-2">
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
              <div className="bg-[#2563eb] h-full w-2/3 relative">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow"></span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-white/80 font-mono">
              <div className="flex items-center gap-3">
                <span>00:38 / 01:00</span>
                <span className="text-white/40">|</span>
                <span className="text-[#b4c5ff]">Master Cut: Omnichannel 16:9 + 9:16</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4edea3] font-semibold">Live Color Grade: DaVinci ACES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Metrics Footer */}
        <div className="px-6 py-4 bg-[#171b26] border-t border-[#434655]/30 grid grid-cols-3 gap-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-xs text-[#8d90a0] uppercase tracking-wider">{m.label}</span>
              <span className="text-xl font-bold text-white font-headline">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
