import React from 'react';
import { Home, Sparkles, RefreshCw, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyGKK: React.FC = () => {
  const cards = [
    {
      id: 'taste',
      icon: '🏠',
      title: 'GHAR KA TASTE',
      description: 'Familiar flavours inspired by everyday home cooking.',
      tag: 'No Excess Masalas',
      bgGradient: 'bg-gradient-to-br from-[#FFFDF7] to-[#FEF6E8]',
      accentColor: 'text-[#D97706]',
      border: 'border-[#FDE68A]/80 shadow-[0_4px_20px_rgba(234,162,33,0.06)]',
      details: 'Recipes refined with moms and dadas. We use cold-pressed oils, freshly ground spices, and zero commercial thickening starches.'
    },
    {
      id: 'hygiene',
      icon: '🧼',
      title: 'HYGIENE',
      description: 'The comfort of homemade food with professional hygiene standards.',
      tag: '100% FSSAI Certified',
      bgGradient: 'bg-gradient-to-br from-[#FFF9F9] to-[#FDEDEC]',
      accentColor: 'text-[#C5221F]',
      border: 'border-[#FECACA]/80 shadow-[0_4px_20px_rgba(197,34,31,0.06)]',
      details: 'Commercial grade stainless steel cloud kitchens, RO water throughout, ultraviolet vegetable sanitization, and temperature-controlled dispatch.'
    },
    {
      id: 'consistency',
      icon: '🔁',
      title: 'CONSISTENCY',
      description: 'Same familiar experience, even as GKK grows across cities.',
      tag: 'Exact Pinch of Salt',
      bgGradient: 'bg-gradient-to-br from-[#FFFDF9] to-[#F5ECE1]',
      accentColor: 'text-[#1C1917]',
      border: 'border-[#E5DAC8]/90 shadow-[0_4px_20px_rgba(120,113,108,0.06)]',
      details: 'Whether you order in North Campus Delhi or Cyber City Gurugram, your dal tadka and phulkas taste just like your family kitchen.'
    },
    {
      id: 'convenience',
      icon: '⚡',
      title: 'CONVENIENCE',
      description: 'Home-style meals without cooking, planning or cleaning.',
      tag: 'Sub-30 Min Delivery',
      bgGradient: 'bg-gradient-to-br from-[#FFFDF0] to-[#FEF3D6]',
      accentColor: 'text-[#D97706]',
      border: 'border-[#FDE047]/60 shadow-[0_4px_20px_rgba(234,162,33,0.08)]',
      details: 'Delivered in food-grade, hot-insulating, compostable meal trays with cutleries and tissues. Eat straight from the box, zero dishwashing.'
    }
  ];

  return (
    <section id="why-gkk" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EB] to-[#FFFDF9] relative overflow-hidden border-b border-[#E8DFC8]">
      {/* Warm Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#FEF0D4]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Exact requested headline) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDEDEC] border border-red-200/70 text-[#C5221F] text-xs font-extrabold uppercase tracking-wider shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The GKK Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-display">
            Feels homemade. Works like a modern food brand.
          </h2>

          <p className="text-base sm:text-lg text-[#57534E] font-medium">
            Bridging the gap between shady dabba services and over-greasy restaurant delivery.
          </p>
        </div>

        {/* 4 Large Visual Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`p-7 sm:p-9 rounded-3xl ${card.bgGradient} border ${card.border} hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/90 shadow-xs border border-[#EADDCE] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/90 text-[#1C1917] border border-[#EADDCE] shadow-2xs">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#1C1917] font-display tracking-tight">
                  {card.title}
                </h3>

                <p className="mt-2 text-base font-bold text-[#C5221F] font-display">
                  {card.description}
                </p>

                <p className="mt-3 text-sm text-[#57534E] leading-relaxed">
                  {card.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2 text-xs font-semibold text-[#78716C]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Verified in all Delhi NCR cloud kitchens</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
