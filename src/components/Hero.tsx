import React from 'react';
import { ArrowRight, MapPin, Sparkles, ShieldCheck, Clock, Flame } from 'lucide-react';
import { DeliveryHub } from '../types';
import thaliSpecialImg from '../assets/images/thali_special_meal_1789751984115.jpg';

interface HeroProps {
  onSeeMenu: () => void;
  onOrderNow: () => void;
  selectedLocation: DeliveryHub;
  onSelectLocationClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSeeMenu,
  onOrderNow,
  selectedLocation,
  onSelectLocationClick
}) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF4EA] to-[#FDF8F0] border-b border-[#EEDFCB]/60">
      {/* Subtle Warm Background Accent Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FEF0D4]/70 to-[#FDE8D0]/20 rounded-full blur-3xl pointer-events-none -mr-32 -mt-24" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#FDEDEC]/80 via-[#FEE8D6]/40 to-transparent rounded-full blur-3xl pointer-events-none -ml-28 -mb-28" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#FEF6E8]/50 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Playful Gen-Z Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FEF3DE] border border-[#EAA221]/40 text-[#1C1917] shadow-[0_2px_10px_rgba(234,162,33,0.12)]">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#EAA221] animate-ping" />
              <span className="text-xs font-bold tracking-tight">Today's Kitchen Live in Delhi NCR</span>
              <span className="text-xs text-[#9C7F58]">•</span>
              <span className="text-xs font-bold text-[#C5221F]">Lunch dabbas packing now</span>
            </div>

            {/* Main Headline (Exact requested text) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1C1917] tracking-tight leading-[1.08] font-display">
              Ghar jaisa khana. <br className="hidden sm:inline" />
              <span className="text-[#C5221F] relative inline-block">
                Ab ghar se door bhi.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#EAA221] -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,12" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline (Exact requested text) */}
            <p className="text-lg sm:text-xl text-[#57534E] font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Wholesome daily meals, familiar flavours and the comfort of home — delivered.
            </p>

            {/* Location Selector Bar */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onSelectLocationClick}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-[#EADDCE] hover:border-[#C5221F] rounded-2xl text-xs font-bold text-[#1C1917] transition-all shadow-xs group"
              >
                <div className="w-6 h-6 rounded-full bg-[#FDEDEC] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-3.5 h-3.5 text-[#C5221F]" />
                </div>
                <span>Delivering to: <strong className="text-[#C5221F] underline decoration-dotted underline-offset-2">{selectedLocation.name}</strong> ▼</span>
              </button>
              
              <div className="inline-flex items-center gap-1.5 text-xs text-[#78716C] font-medium bg-[#F5EFE6] px-3 py-2 rounded-xl">
                <Clock className="w-3.5 h-3.5 text-[#EAA221]" />
                <span>Avg delivery: <strong>{selectedLocation.estimatedTime}</strong></span>
              </div>
            </div>

            {/* CTAs (Exact requested buttons) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-see-menu-btn"
                onClick={onSeeMenu}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C5221F] text-white text-base font-extrabold shadow-md hover:bg-[#9F1714] active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>See Today’s Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-order-now-btn"
                onClick={onOrderNow}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border-2 border-[#1C1917] text-[#1C1917] text-base font-extrabold hover:bg-[#1C1917] hover:text-white active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Flame className="w-4 h-4 text-[#EAA221]" />
                <span>Order Now</span>
              </button>
            </div>

            {/* Micro Highlights / Trust Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 border-t border-[#EADDCE]">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xs font-bold text-[#1C1917]">Zero Soda</span>
                <span className="text-[11px] text-[#78716C]">Light on stomach</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-[#EADDCE] px-2">
                <span className="text-xs font-bold text-[#1C1917]">Pure Desi Ghee</span>
                <span className="text-[11px] text-[#78716C]">Hot puffed phulkas</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xs font-bold text-[#1C1917]">Rotating Daily</span>
                <span className="text-[11px] text-[#78716C]">Never boring</span>
              </div>
            </div>

          </div>

          {/* Right Column: Wholesome Food Visual & Playful Annotations */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* The Main Thali Image Container */}
            <div className="relative w-full max-w-md">
              {/* Outer Decorative Ring */}
              <div className="relative z-10 rounded-[32px] overflow-hidden border-4 border-white shadow-2xl aspect-[4/3] sm:aspect-square bg-[#FAF7F2] group">
                <img
                  src={thaliSpecialImg}
                  alt="GKK Wholesome Ghar Ki Thali with Dal Tadka, Seasonal Sabzi, Roti, and Rice"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-[#EAA221] uppercase tracking-wider">Today's Special Thali</p>
                      <h3 className="text-lg font-bold font-display">Ghar Ki Thali • ₹190</h3>
                    </div>
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold">
                      Full Meal
                    </span>
                  </div>
                </div>
              </div>

              {/* Playful Floating Annotation 1: POV sticker (Exact requested text) */}
              <div className="absolute -top-5 -left-4 sm:-left-8 z-20 bg-white border-2 border-[#1C1917] px-4 py-2 rounded-2xl shadow-lg rotate-[-6deg] hover:rotate-0 transition-transform cursor-pointer">
                <p className="text-xs sm:text-sm font-bold text-[#1C1917] font-display flex items-center gap-1.5">
                  <span>POV: ghar ka khana finally found you</span>
                  <span className="text-base">👀</span>
                </p>
                <p className="text-[10px] text-[#78716C] font-medium -mt-0.5">no mess drama anymore</p>
              </div>

              {/* Playful Floating Annotation 2: Ghee roti sticker */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 z-20 bg-[#FAF7F2] border-2 border-[#C5221F] px-4 py-2.5 rounded-2xl shadow-lg rotate-[4deg] hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🫓</span>
                  <div>
                    <p className="text-xs font-extrabold text-[#C5221F]">Ghee roti warm inside</p>
                    <p className="text-[10px] text-[#78716C]">Tawa-fresh, wrapped in foil</p>
                  </div>
                </div>
              </div>

              {/* Playful Annotation 3: Handwritten sticker */}
              <div className="hidden sm:block absolute top-1/2 -right-10 z-20 bg-[#FEF6E8] border border-[#EAA221] px-3 py-1.5 rounded-xl shadow-md rotate-[12deg]">
                <p className="font-hand text-base font-bold text-[#9F1714] leading-tight">
                  "Like mom packed it ❤️"
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
