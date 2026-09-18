import React from 'react';
import logoImg from '../assets/images/gkk_foods_brand_logo_1789752709110.jpg';

interface GkkLogoProps {
  className?: string;
  variant?: 'banner' | 'pill' | 'compact';
  showTagline?: boolean;
}

export const GkkLogo: React.FC<GkkLogoProps> = ({
  className = '',
  variant = 'banner',
  showTagline = false
}) => {
  if (variant === 'compact') {
    return (
      <div className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-xs border border-red-700/20 bg-[#C5221F] ${className}`}>
        <img
          src={logoImg}
          alt="gkk foods logo"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-white/80 bg-[#C5221F] shrink-0 h-10 sm:h-12 aspect-[2.3/1] hover:scale-105 transition-transform duration-300">
        <img
          src={logoImg}
          alt="gkk foods - ghar ka khana"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {showTagline && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1C1917] font-display">GKK Foods</span>
            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-[#FDEDEC] text-[#C5221F] rounded uppercase tracking-wider border border-red-200/60">
              Cloud Kitchen
            </span>
          </div>
          <span className="text-[11px] font-medium text-[#78716C] -mt-0.5 tracking-wide flex items-center gap-1">
            <span>ghar ka khana</span>
            <span className="w-1 h-1 rounded-full bg-[#EAA221]" />
            <span>simple & fresh</span>
          </span>
        </div>
      )}
    </div>
  );
};
