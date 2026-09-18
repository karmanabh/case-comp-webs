import React, { useState } from 'react';
import { Calendar, Flame, UtensilsCrossed, Sparkles, Moon, Sun, ArrowRight } from 'lucide-react';
import { WEEKLY_MENU } from '../data/weeklyData';
import { DailyMenuItem } from '../types';

interface WeeklyRotationProps {
  onOrderNow: () => void;
}

export const WeeklyRotation: React.FC<WeeklyRotationProps> = ({ onOrderNow }) => {
  // Current day of week or default to MON
  const [selectedDay, setSelectedDay] = useState<string>('MON');

  const activeDayData = WEEKLY_MENU.find(d => d.day === selectedDay) || WEEKLY_MENU[0];

  return (
    <section id="weekly-rotation" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E8] to-[#FFFDF9] relative overflow-hidden border-b border-[#E8DFC8]">
      {/* Warm Ambient Accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FEF0D4]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FDE2D2]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF6E8] border border-[#EAA221]/40 text-[#1C1917] text-xs font-bold shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#EAA221]" />
            <span>Daily Menu Rotation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-display">
            What’s Cooking This Week?
          </h2>

          <p className="text-base sm:text-lg text-[#57534E] font-medium font-hand sm:text-xl text-[#C5221F]">
            “Because eating the same thing every day is not the vibe.”
          </p>
          
          <p className="text-xs sm:text-sm text-[#78716C] max-w-xl mx-auto">
            Our cloud kitchen rotates recipes every sunrise so your palate stays excited, while the comfort remains 100% homestyle.
          </p>
        </div>

        {/* Weekly Day Strip (Tabs) */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-7 gap-1.5 sm:gap-3 bg-white/90 backdrop-blur-xs p-2.5 rounded-2xl border border-[#E8DFC8] shadow-sm">
            {WEEKLY_MENU.map((item) => {
              const isSelected = item.day === selectedDay;
              return (
                <button
                  key={item.day}
                  onClick={() => setSelectedDay(item.day)}
                  className={`py-3 px-1 sm:px-3 rounded-xl flex flex-col items-center justify-center transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#C5221F] text-white shadow-md shadow-red-900/15 scale-102'
                      : 'hover:bg-[#FEF6E8] text-[#57534E] hover:text-[#C5221F]'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-extrabold font-display">{item.day}</span>
                  <span className={`text-[9px] sm:text-[10px] font-semibold truncate max-w-full hidden md:block mt-0.5 ${
                    isSelected ? 'text-[#FAF7F2]' : 'text-[#8C827A]'
                  }`}>
                    {item.theme.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Day Detail Card */}
        <div className="mt-8 max-w-4xl mx-auto bg-white rounded-3xl border border-[#E8DFC8] p-6 sm:p-10 shadow-[0_10px_30px_rgba(234,162,33,0.08)] transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F2E8DC]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#C5221F] font-display">
                  {activeDayData.day}
                </span>
                <span className="text-xl text-[#B8AEA2]">•</span>
                <span className="text-xl sm:text-2xl font-bold text-[#1C1917] font-display">
                  {activeDayData.theme}
                </span>
              </div>
              <p className="text-xs text-[#78716C] mt-1">
                Cooked fresh twice daily • Batch 1 at 11:30 AM • Batch 2 at 7:00 PM
              </p>
            </div>

            <div className="px-3.5 py-1.5 bg-[#FEF4E8] text-[#9F1714] rounded-full text-xs font-bold border border-[#FDE68A]/80 shadow-xs self-start md:self-auto">
              {activeDayData.specialBadge}
            </div>
          </div>

          {/* Meals Grid: Lunch & Dinner */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Lunch Combo */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFFBF2] to-[#FEF6E6] border border-[#FDE68A]/60 flex flex-col justify-between space-y-3 shadow-xs">
              <div>
                <div className="flex items-center gap-2 text-[#D97706] text-xs font-extrabold uppercase">
                  <Sun className="w-4 h-4" />
                  <span>Afternoon Lunch Dabba</span>
                </div>
                <h4 className="mt-2 text-base font-bold text-[#1C1917] font-display">
                  {activeDayData.lunchCombo}
                </h4>
                <p className="mt-1.5 text-xs text-[#57534E] leading-relaxed font-normal">
                  {activeDayData.lunchDetail}
                </p>
              </div>
              <div className="pt-3 border-t border-[#F3E5C8] flex items-center justify-between text-xs">
                <span className="font-bold text-[#1C1917]">Delivery: 12:00 PM - 2:30 PM</span>
                <span className="text-[#C5221F] font-extrabold text-sm">₹190</span>
              </div>
            </div>

            {/* Dinner Special */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFF8F6] to-[#FDF0EC] border border-[#FECACA]/60 flex flex-col justify-between space-y-3 shadow-xs">
              <div>
                <div className="flex items-center gap-2 text-[#C5221F] text-xs font-extrabold uppercase">
                  <Moon className="w-4 h-4" />
                  <span>Evening Dinner Special</span>
                </div>
                <h4 className="mt-2 text-base font-bold text-[#1C1917] font-display">
                  {activeDayData.dinnerSpecial}
                </h4>
                <p className="mt-1.5 text-xs text-[#57534E] leading-relaxed font-normal">
                  Cooked light so you sleep comfortable. Hot rotis wrapped in insulation foil.
                </p>
              </div>
              <div className="pt-3 border-t border-[#FCD5CC] flex items-center justify-between text-xs">
                <span className="font-bold text-[#1C1917]">Delivery: 7:30 PM - 10:30 PM</span>
                <span className="text-[#C5221F] font-extrabold text-sm">₹190 - ₹210</span>
              </div>
            </div>

          </div>

          {/* Quick CTA */}
          <div className="mt-8 text-center pt-2">
            <button
              onClick={onOrderNow}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1917] text-white hover:bg-[#C5221F] rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>Explore Today’s Available Dabbas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
