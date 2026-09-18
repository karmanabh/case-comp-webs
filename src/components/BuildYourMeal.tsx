import React, { useState } from 'react';
import { Check, ArrowRight, Sparkles, Flame, Plus, Minus, Info } from 'lucide-react';
import { FoodItem } from '../types';
import thaliSpecialImg from '../assets/images/thali_special_meal_1789751984115.jpg';
import dalTadkaImg from '../assets/images/dal_tadka_bowl_1789752001962.jpg';
import yellowDalFryImg from '../assets/images/yellow_dal_fry_1789752115685.jpg';
import dalMakhaniMaaImg from '../assets/images/dal_makhani_maa_1789752084464.jpg';
import alooGobiMatarImg from '../assets/images/aloo_gobi_matar_1789752015400.jpg';
import bhindiMasalaImg from '../assets/images/bhindi_masala_crisp_1789752070180.jpg';
import paneerBhurjiImg from '../assets/images/paneer_bhurji_plate_1789752028911.jpg';
import kadhiPakodaImg from '../assets/images/kadhi_pakoda_bowl_1789752044815.jpg';

interface BuildYourMealProps {
  onAddCustomMealToCart: (customItem: FoodItem, customDescription: string) => void;
}

interface BaseOption {
  id: string;
  name: string;
  detail: string;
  priceDelta: number;
}

interface DalOption {
  id: string;
  name: string;
  detail: string;
  image: string;
  priceDelta: number;
}

interface SabziOption {
  id: string;
  name: string;
  detail: string;
  image: string;
  priceDelta: number;
}

interface ExtraOption {
  id: string;
  name: string;
  price: number;
}

const BASES: BaseOption[] = [
  { id: 'both', name: 'Both', detail: '2 phulkas + half rice', priceDelta: 0 },
  { id: 'roti', name: 'Roti', detail: '4 soft phulkas with desi ghee', priceDelta: -5 },
  { id: 'rice', name: 'Rice', detail: 'Aged basmati jeera rice', priceDelta: -10 },
  { id: 'paratha', name: 'Paratha', detail: '2 flaky ajwain tawa parathas', priceDelta: 25 }
];

const DALS: DalOption[] = [
  { 
    id: 'dal-of-the-day', 
    name: 'Dal of the day', 
    detail: 'Pahadi toor dal with garlic & Kashmiri mirch tadka', 
    image: dalTadkaImg, 
    priceDelta: 0 
  },
  { 
    id: 'yellow-dal-fry', 
    name: 'Yellow dal fry', 
    detail: 'Gentle moong-masoor with fresh coriander', 
    image: yellowDalFryImg, 
    priceDelta: -10 
  },
  { 
    id: 'chana-dal-tadka', 
    name: 'Dhaba chana dal', 
    detail: 'Thick nutty chana dal with roasted cumin & hing tadka', 
    image: dalTadkaImg, 
    priceDelta: 15 
  },
  { 
    id: 'maa-ki-dal', 
    name: 'Maa ki dal', 
    detail: '12-hr slow-simmered black urad with white butter', 
    image: dalMakhaniMaaImg, 
    priceDelta: 30 
  }
];

const SABZIS: SabziOption[] = [
  { 
    id: 'sabzi-of-the-day', 
    name: 'Sabzi of the day', 
    detail: 'Homestyle aloo gobi matar cooked in steam', 
    image: alooGobiMatarImg, 
    priceDelta: 0 
  },
  { 
    id: 'jeera-aloo', 
    name: 'Banarasi jeera aloo', 
    detail: 'Tender baby potatoes tossed in cumin, hing & amchur', 
    image: alooGobiMatarImg, 
    priceDelta: -15 
  },
  { 
    id: 'kurkuri-bhindi', 
    name: 'Kurkuri bhindi', 
    detail: 'Crisp baby okra with ajwain & dry mango', 
    image: bhindiMasalaImg, 
    priceDelta: 15 
  },
  { 
    id: 'paneer-bhurji', 
    name: 'Paneer bhurji', 
    detail: 'Fresh crumbled cottage cheese with peppers', 
    image: paneerBhurjiImg, 
    priceDelta: 40 
  }
];

const EXTRAS: ExtraOption[] = [
  { id: 'extra-roti', name: 'Extra roti (2 pcs)', price: 20 },
  { id: 'extra-dal', name: 'Extra dal (250ml)', price: 40 },
  { id: 'regional-special', name: 'Regional special (Kadhi Pakoda)', price: 50 },
  { id: 'boondi-raita', name: 'Boondi raita', price: 30 },
  { id: 'gulab-jamun', name: 'Warm gulab jamun (2 pcs)', price: 40 }
];

export const BuildYourMeal: React.FC<BuildYourMealProps> = ({ onAddCustomMealToCart }) => {
  // Basic combo defaults: Both + Dal of the day + Sabzi of the day = 190 INR
  const [selectedBase, setSelectedBase] = useState<BaseOption>(BASES[0]); // 'Both' (0)
  const [selectedDal, setSelectedDal] = useState<DalOption>(DALS[0]);     // 'Dal of the day' (0)
  const [selectedSabzi, setSelectedSabzi] = useState<SabziOption>(SABZIS[0]); // 'Sabzi of the day' (0)
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Baseline combo price is 190 INR
  const BASE_PRICE = 190;
  const deltaPrice = selectedBase.priceDelta + selectedDal.priceDelta + selectedSabzi.priceDelta;
  const extrasPrice = selectedExtras.reduce((acc, extraId) => {
    const found = EXTRAS.find(e => e.id === extraId);
    return acc + (found ? found.price : 0);
  }, 0);

  const totalPrice = BASE_PRICE + deltaPrice + extrasPrice;

  const toggleExtra = (id: string) => {
    if (selectedExtras.includes(id)) {
      setSelectedExtras(selectedExtras.filter(e => e !== id));
    } else {
      setSelectedExtras([...selectedExtras, id]);
    }
  };

  const handleAddToCart = () => {
    const extrasNames = selectedExtras.map(id => EXTRAS.find(e => e.id === id)?.name).filter(Boolean);
    const customSummary = `${selectedBase.name} + ${selectedDal.name} + ${selectedSabzi.name}${
      extrasNames.length > 0 ? ` + ${extrasNames.join(', ')}` : ''
    }`;

    const customFoodItem: FoodItem = {
      id: `custom-thali-${Date.now()}`,
      name: 'Ghar Ka Meal (Custom)',
      hindiName: 'कस्टम घर का मील',
      category: 'COMBOS',
      description: customSummary,
      price: totalPrice,
      image: thaliSpecialImg,
      isVeg: true,
      serves: '1 Person',
      calories: 540 + (selectedBase.priceDelta * 4) + (selectedExtras.length * 60),
      protein: '19g',
      homestyleNote: 'Custom-assembled fresh from tawa and clay pot with zero shortcuts.',
      ingredients: [selectedBase.name, selectedDal.name, selectedSabzi.name, ...extrasNames as string[]]
    };

    onAddCustomMealToCart(customFoodItem, customSummary);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const formatDelta = (delta: number) => {
    if (delta === 0) return 'Basic';
    if (delta > 0) return `+₹${delta}`;
    return `-₹${Math.abs(delta)}`;
  };

  return (
    <section 
      id="build-your-meal" 
      className="py-12 md:py-20 bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#FAF5EC] border-b border-[#E8DFC8] relative overflow-hidden transition-colors"
    >
      {/* Subtle Warm Backdrop Lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FEE2B3]/35 via-transparent to-transparent pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FDEDEC]/40 via-transparent to-transparent pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP ROW: "Make your ghar ka meal" AND "Choose your base" SIDE BY SIDE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-10 border-b border-[#E8DFC8]">
          
          {/* Left Block: "Build your ghar ka meal." */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-1.5 text-[#C5221F] text-xs font-black uppercase tracking-[0.18em]">
              <span>MAKE IT YOURS</span>
              <span className="text-[10px]">✦</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#1C1917] tracking-tight leading-[1.1] mt-3 font-display">
              Build your <br />
              <span className="text-[#D97706]">ghar ka meal.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#57534E] font-normal leading-relaxed mt-3 max-w-sm">
              Your plate. Your rules. Every click tailors your plate and recalculates the bill in real-time.
            </p>
          </div>

          {/* Right Block: "Choose your base" JUST BESIDE IT (SIDE BY SIDE) */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xs p-5 sm:p-6 rounded-3xl border border-[#E8DFC8] shadow-[0_4px_25px_rgba(234,162,33,0.06)]">
            <div className="flex items-baseline justify-between mb-3.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-mono font-bold text-[#C5221F] bg-[#FDEDEC] px-2 py-0.5 rounded-md">01</span>
                <h3 className="text-lg font-bold text-[#1C1917] tracking-tight">Choose your base</h3>
              </div>
              <span className="text-xs text-[#9C7F58] font-medium hidden sm:inline">Phulkas brushed with pure desi ghee</span>
            </div>

            {/* Base Option Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5">
              {BASES.map(base => {
                const isSelected = selectedBase.id === base.id;
                return (
                  <button
                    key={base.id}
                    type="button"
                    onClick={() => setSelectedBase(base)}
                    className={`flex flex-col justify-between p-3.5 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                      isSelected
                        ? 'bg-[#FDF1ED] border-[#C5221F] text-[#C5221F] shadow-xs'
                        : 'bg-white border-[#E5DAC8] text-[#1C1917] hover:border-[#D6CBB8] hover:bg-[#FDFBF7]'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-bold text-sm">{base.name}</span>
                      <span
                        className={`text-[11px] font-bold px-1.5 py-0.5 rounded-md ${
                          isSelected
                            ? 'bg-[#C5221F] text-white'
                            : base.priceDelta === 0
                            ? 'bg-[#FEF6E8] text-[#D97706]'
                            : base.priceDelta > 0
                            ? 'bg-red-50 text-[#C5221F]'
                            : 'bg-emerald-50 text-emerald-700'
                        }`}
                      >
                        {formatDelta(base.priceDelta)}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#78716C] mt-1.5 line-clamp-1">
                      {base.detail}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: 02 Dal, 03 Sabzi, 04 Extras on Left & Sticky Live Price Calculation on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10 items-start">
          
          {/* Left Column: Dal, Sabzi & Extras */}
          <div className="lg:col-span-8 space-y-9">
            
            {/* 02 Choose your dal */}
            <div>
              <div className="flex items-baseline justify-between mb-3.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono font-bold text-[#C5221F] bg-[#FDEDEC] px-2 py-0.5 rounded-md">02</span>
                  <h3 className="text-lg font-bold text-[#1C1917] tracking-tight">Choose your dal</h3>
                </div>
                <span className="text-xs text-[#78716C]">Slow-cooked in clay pots</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DALS.map(dal => {
                  const isSelected = selectedDal.id === dal.id;
                  return (
                    <button
                      key={dal.id}
                      type="button"
                      onClick={() => setSelectedDal(dal)}
                      className={`flex items-center gap-3.5 p-3.5 rounded-2xl font-bold text-sm transition-all duration-200 border cursor-pointer text-left ${
                        isSelected
                          ? 'bg-[#FDF1ED] border-[#C5221F] text-[#C5221F] shadow-xs'
                          : 'bg-white border-[#E5DAC8] text-[#1C1917] hover:border-[#D6CBB8] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      {/* Dish Thumbnail */}
                      <img
                        src={dal.image}
                        alt={dal.name}
                        className="w-12 h-12 rounded-xl object-cover shrink-0 border border-white shadow-xs"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-center justify-between">
                          <span className="leading-tight truncate font-bold text-sm">{dal.name}</span>
                          <span
                            className={`text-[11px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ml-1.5 ${
                              isSelected
                                ? 'bg-[#C5221F] text-white'
                                : dal.priceDelta === 0
                                ? 'bg-[#FEF6E8] text-[#D97706]'
                                : dal.priceDelta > 0
                                ? 'bg-red-50 text-[#C5221F]'
                                : 'bg-emerald-50 text-emerald-700'
                            }`}
                          >
                            {formatDelta(dal.priceDelta)}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#78716C] font-normal mt-1 line-clamp-1">
                          {dal.detail}
                        </p>
                      </div>

                      {/* Check indicator */}
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isSelected ? 'text-[#C5221F]' : 'border-2 border-[#D6CBB8]'
                        }`}
                      >
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 03 Choose your sabzi */}
            <div>
              <div className="flex items-baseline justify-between mb-3.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono font-bold text-[#C5221F] bg-[#FDEDEC] px-2 py-0.5 rounded-md">03</span>
                  <h3 className="text-lg font-bold text-[#1C1917] tracking-tight">Choose your sabzi</h3>
                </div>
                <span className="text-xs text-[#78716C]">Daily seasonal greens & spices</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SABZIS.map(sabzi => {
                  const isSelected = selectedSabzi.id === sabzi.id;
                  return (
                    <button
                      key={sabzi.id}
                      type="button"
                      onClick={() => setSelectedSabzi(sabzi)}
                      className={`flex items-center gap-3.5 p-3.5 rounded-2xl font-bold text-sm transition-all duration-200 border cursor-pointer text-left ${
                        isSelected
                          ? 'bg-[#FDF1ED] border-[#C5221F] text-[#C5221F] shadow-xs'
                          : 'bg-white border-[#E5DAC8] text-[#1C1917] hover:border-[#D6CBB8] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      {/* Dish Thumbnail */}
                      <img
                        src={sabzi.image}
                        alt={sabzi.name}
                        className="w-12 h-12 rounded-xl object-cover shrink-0 border border-white shadow-xs"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 min-w-0 pr-1">
                        <div className="flex items-center justify-between">
                          <span className="leading-tight truncate font-bold text-sm">{sabzi.name}</span>
                          <span
                            className={`text-[11px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ml-1.5 ${
                              isSelected
                                ? 'bg-[#C5221F] text-white'
                                : sabzi.priceDelta === 0
                                ? 'bg-[#FEF6E8] text-[#D97706]'
                                : sabzi.priceDelta > 0
                                ? 'bg-red-50 text-[#C5221F]'
                                : 'bg-emerald-50 text-emerald-700'
                            }`}
                          >
                            {formatDelta(sabzi.priceDelta)}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#78716C] font-normal mt-1 line-clamp-1">
                          {sabzi.detail}
                        </p>
                      </div>

                      {/* Check indicator */}
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all ${
                          isSelected ? 'text-[#C5221F]' : 'border-2 border-[#D6CBB8]'
                        }`}
                      >
                        {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 04 Add extras */}
            <div>
              <div className="flex items-baseline justify-between mb-3.5">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono font-bold text-[#C5221F] bg-[#FDEDEC] px-2 py-0.5 rounded-md">04</span>
                  <h3 className="text-lg font-bold text-[#1C1917] tracking-tight">Add extras</h3>
                </div>
                <span className="text-xs text-[#78716C]">Multiple selection</span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {EXTRAS.map(extra => {
                  const isChecked = selectedExtras.includes(extra.id);
                  return (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => toggleExtra(extra.id)}
                      className={`flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl font-bold text-sm transition-all duration-200 border cursor-pointer ${
                        isChecked
                          ? 'bg-[#FDF1ED] border-[#C5221F] text-[#C5221F] shadow-xs'
                          : 'bg-white border-[#E5DAC8] text-[#1C1917] hover:border-[#D6CBB8] hover:bg-[#FDFBF7]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span>{extra.name}</span>
                        <span className="text-xs font-extrabold text-[#C5221F]">(+₹{extra.price})</span>
                      </div>

                      {/* Circle indicator */}
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                          isChecked ? 'text-[#C5221F]' : 'border-2 border-[#D6CBB8]'
                        }`}
                      >
                        {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Live Meal Price & Cart Action */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#E8DFC8] shadow-[0_8px_30px_rgba(234,162,33,0.08)]">
              
              <div className="flex items-center justify-between pb-3 border-b border-[#F2E8DC]">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#78716C]">
                  YOUR MEAL
                </span>
                <span className="text-[11px] font-bold px-2 py-0.5 bg-[#FEF6E8] text-[#D97706] rounded-full border border-[#FDE68A]">
                  Basic combo = ₹190
                </span>
              </div>

              {/* Dynamic volatile price display */}
              <div className="mt-4 flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span 
                      key={totalPrice}
                      className="text-4xl sm:text-5xl font-black text-[#C5221F] font-display transition-transform inline-block animate-[pulse_0.4s_ease-out]"
                    >
                      ₹{totalPrice}
                    </span>
                    {totalPrice !== BASE_PRICE && (
                      <span className="text-xs font-bold text-[#78716C]">
                        ({totalPrice > BASE_PRICE ? `+₹${totalPrice - BASE_PRICE}` : `-₹${BASE_PRICE - totalPrice}`})
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-[#78716C] mt-0.5">Taxes & container included</p>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">
                    Zero Soda
                  </span>
                </div>
              </div>

              {/* Active Selection Formula Breakdown */}
              <div className="mt-5 p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#EADDCE] text-xs space-y-1.5">
                <div className="flex items-center justify-between text-[#1C1917] font-semibold">
                  <span>Base: {selectedBase.name}</span>
                  <span className="text-[#78716C]">{formatDelta(selectedBase.priceDelta)}</span>
                </div>
                <div className="flex items-center justify-between text-[#1C1917] font-semibold">
                  <span>Dal: {selectedDal.name}</span>
                  <span className="text-[#78716C]">{formatDelta(selectedDal.priceDelta)}</span>
                </div>
                <div className="flex items-center justify-between text-[#1C1917] font-semibold">
                  <span>Sabzi: {selectedSabzi.name}</span>
                  <span className="text-[#78716C]">{formatDelta(selectedSabzi.priceDelta)}</span>
                </div>
                {selectedExtras.length > 0 && (
                  <div className="pt-1.5 border-t border-[#EADDCE] flex items-center justify-between text-[#C5221F] font-bold">
                    <span>{selectedExtras.length} Extra{selectedExtras.length > 1 ? 's' : ''} added</span>
                    <span>+₹{extrasPrice}</span>
                  </div>
                )}
              </div>

              {/* Add To Cart CTA Button */}
              <button
                id="build-meal-add-cart-btn"
                onClick={handleAddToCart}
                className="mt-6 w-full bg-[#C5221F] hover:bg-[#A81B18] active:scale-[0.98] text-white font-bold py-4 px-6 rounded-full text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-md shadow-red-900/15 transition-all duration-200 cursor-pointer group"
              >
                <span>{addedAnimation ? 'ADDED TO CART! ✓' : 'ADD TO CART'}</span>
                {!addedAnimation && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#78716C]">
                <Flame className="w-3.5 h-3.5 text-[#EAA221]" />
                <span>Packed fresh within 20 mins of ordering</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
