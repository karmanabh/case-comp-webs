import React from 'react';

export const GkkPromise: React.FC = () => {
  return (
    <section id="gkk-promise" className="py-20 md:py-32 bg-[#C5221F] text-white relative overflow-hidden">
      {/* Decorative Subtle Geometry / Traditional Thali Motif in Background */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border-[24px] border-white/5 pointer-events-none" />
      <div className="absolute -left-10 -top-10 w-60 h-60 rounded-full border-[18px] border-white/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Playful Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
          The GKK Promise
        </div>

        {/* Exact Requested Typography */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display leading-[1.08]">
          Not fancy. <br />
          Not complicated. <br />
          <span className="text-[#EAA221]">Just good food.</span>
        </h2>

        {/* Exact Requested Subtext */}
        <p className="text-lg sm:text-2xl text-[#FDEDEC] font-medium max-w-2xl mx-auto pt-2">
          Food that feels familiar, wherever you are.
        </p>

        {/* Small subtle stamp */}
        <div className="pt-6">
          <div className="inline-block border-2 border-[#EAA221] px-4 py-1.5 rounded-full rotate-[-2deg]">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#FAF7F2]">
              100% Homestyle Standards • Zero Soda • Desi Ghee
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
