import React from 'react';
import { Heart, ArrowRight, Sparkles, MessageCircle, MapPin } from 'lucide-react';

interface MissHomeSectionProps {
  onOrderNow: () => void;
}

export const MissHomeSection: React.FC<MissHomeSectionProps> = ({ onOrderNow }) => {
  return (
    <section id="miss-home" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E8] to-[#FFFDF9] border-b border-[#E8DFC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gen-Z & Emotional Bento Card */}
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#FFF9F3] via-[#FEF5E7] to-[#FEEADC] border-2 border-[#EAA221]/50 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_12px_40px_rgba(234,162,33,0.1)]">
          
          {/* Subtle Background Warm Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FDEDEC] rounded-full blur-3xl opacity-80 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FEF0D4] rounded-full blur-3xl opacity-70 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#EAA221]/40 text-[#C5221F] text-xs font-extrabold tracking-wide shadow-xs">
                <Heart className="w-3.5 h-3.5 fill-[#C5221F]" />
                <span>The Unspoken Dabba Feeling</span>
              </div>

              {/* Exact Requested Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-display leading-tight">
                Moved out? We got you.
              </h2>

              {/* Exact Requested Copy */}
              <div className="text-base sm:text-lg text-[#57534E] font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 space-y-2">
                <p className="font-bold text-[#1C1917]">
                  College hostel. PG life. First job in a new city.
                </p>
                <p>
                  Some days you don't want another burger.
                </p>
                <p className="text-xl sm:text-2xl font-extrabold text-[#C5221F] font-display">
                  You just want dal, roti and sabzi.
                </p>
              </div>

              {/* CTA (Exact requested label) */}
              <div className="pt-2">
                <button
                  id="miss-home-cta-btn"
                  onClick={onOrderNow}
                  className="px-8 py-4 bg-[#C5221F] hover:bg-[#9F1714] text-white rounded-full font-extrabold text-base shadow-md active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Get Your Ghar Ka Khana</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Relatable Hostel Quotes */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span className="text-xs px-3 py-1 bg-white/90 rounded-full border border-[#E8DFC8] text-[#57534E] font-semibold shadow-2xs">
                  #SayNoToOilyMess
                </span>
                <span className="text-xs px-3 py-1 bg-white/90 rounded-full border border-[#E8DFC8] text-[#57534E] font-semibold shadow-2xs">
                  #WarmPhulkasDaily
                </span>
                <span className="text-xs px-3 py-1 bg-white/90 rounded-full border border-[#E8DFC8] text-[#57534E] font-semibold shadow-2xs">
                  #PocketFriendlyForStudents
                </span>
              </div>

            </div>

            {/* Right Visual Collage (Hostel, Sticky note, WhatsApp mom bubble) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm space-y-4">
                
                {/* Simulated Relatable Mom Message Card */}
                <div className="bg-white rounded-2xl p-4 border border-[#EADDCE] shadow-md -rotate-2 hover:rotate-0 transition-transform">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F5EFE6]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold">
                        M
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#1C1917]">Maa ❤️</p>
                        <p className="text-[10px] text-[#78716C]">WhatsApp • 1:15 PM</p>
                      </div>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Online</span>
                  </div>
                  <div className="mt-3 p-2.5 bg-[#E7F6EA] rounded-xl text-xs text-[#1C1917] font-medium">
                    "Beta, lunch kiya? Bahar ka junk mat khana aaj..."
                  </div>
                  <div className="mt-2 text-right">
                    <span className="inline-block p-2 bg-[#FDEDEC] text-[#C5221F] rounded-xl text-xs font-bold">
                      "Haan mumma, GKK Foods se dal roti order ki hai!" ✨
                    </span>
                  </div>
                </div>

                {/* Sticky Note Badge */}
                <div className="bg-[#FEF6E8] border-2 border-[#EAA221] p-4 rounded-2xl shadow-md rotate-3 hover:rotate-0 transition-transform">
                  <p className="font-hand text-xl font-bold text-[#9F1714]">
                    "No soda bloat. Just solid food that gives you energy to study or code till 2 AM."
                  </p>
                  <p className="text-[11px] font-bold text-[#78716C] text-right mt-1">
                    — Aryan, DU North Campus hosteler
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
