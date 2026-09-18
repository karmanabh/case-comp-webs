import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { FoodItem, MenuCategory, CartItem } from '../types';
import { FoodCard } from './FoodCard';

interface TodaysMenuProps {
  items: FoodItem[];
  cartItems: CartItem[];
  onAddToCart: (item: FoodItem) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onOpenDetails: (item: FoodItem) => void;
}

const CATEGORIES: MenuCategory[] = [
  'TODAY',
  'COMBOS',
  'DAL',
  'SABZI',
  'ROTI & RICE',
  'REGIONAL SPECIALS'
];

export const TodaysMenu: React.FC<TodaysMenuProps> = ({
  items,
  cartItems,
  onAddToCart,
  onUpdateQuantity,
  onOpenDetails
}) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('TODAY');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCategory = 
        selectedCategory === 'TODAY' 
          ? true 
          : item.category === selectedCategory;
      
      const matchesSearch = 
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.hindiName && item.hindiName.includes(searchQuery));

      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  const getQuantityInCart = (id: string) => {
    const found = cartItems.find(c => c.foodItem.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <section id="menu-section" className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF5EC] to-[#FFFDF9] border-y border-[#EADDCE] relative overflow-hidden">
      {/* Warm Ambient Accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#FEF6E8]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#FDEDEC]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#EEDFCB]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDEDEC] border border-red-200/60 text-[#C5221F] text-xs font-extrabold uppercase tracking-wider mb-2.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Today's Fresh Batch</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-display">
              Today’s Ghar Ka Menu
            </h2>
            
            <p className="mt-2 text-base sm:text-lg text-[#57534E] font-medium">
              New day. New menu. Same ghar wali feeling.
            </p>
          </div>

          {/* Quick Notice Sticker */}
          <div className="bg-[#FEF6E8] border-2 border-[#EAA221] px-4 py-2.5 rounded-2xl shadow-sm self-start md:self-auto rotate-1 hover:rotate-0 transition-transform">
            <p className="font-hand text-base sm:text-lg font-bold text-[#9F1714]">
              “Ghar ki thali @ ₹190 • Phulkas brushed with desi ghee”
            </p>
          </div>
        </div>

        {/* Controls: Category Tabs & Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Categories Pill Tabs */}
          <div className="w-full md:w-auto flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map(category => (
              <button
                key={category}
                id={`cat-tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#C5221F] text-white shadow-md shadow-red-900/15'
                    : 'bg-white text-[#57534E] hover:bg-[#FEF6E8] hover:text-[#C5221F] border border-[#E5DAC8]'
                }`}
              >
                {category === 'TODAY' ? "ALL TODAY'S MENU" : category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-[#8C827A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dal, thali, sabzi, roti..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5DAC8] rounded-full text-xs text-[#1C1917] placeholder-[#8C827A] focus:outline-none focus:border-[#C5221F] focus:ring-2 focus:ring-[#C5221F]/10 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#8C827A] hover:text-[#1C1917]"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Featured Combo Spotlight Banner (Ghar Ki Thali) */}
        {selectedCategory === 'TODAY' && !searchQuery && (
          <div className="mt-8 p-6 sm:p-8 bg-gradient-to-r from-[#FFF6E8] via-[#FEF2DA] to-[#FDEADA] rounded-3xl border-2 border-[#EAA221]/50 relative overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5221F] text-white text-[11px] font-extrabold uppercase">
                  <span>Chef's Choice • Today's Special Combo</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1C1917] font-display">
                  Ghar Ki Thali
                </h3>
                <p className="text-sm sm:text-base text-[#57534E] font-medium leading-relaxed">
                  Dal Tadka + Seasonal Sabzi + 4 Tawa Phulkas + Rice + Sirka Pyaaz & Aam Ka Achaar.
                </p>
                <p className="font-hand text-xl font-bold text-[#C5221F]">
                  “Simple. Wholesome. No drama.”
                </p>
                <div className="pt-1 flex items-center gap-4">
                  <span className="text-2xl font-extrabold text-[#1C1917] font-display">₹190</span>
                  <span className="text-xs text-[#78716C] line-through">₹220</span>
                  <button
                    onClick={() => {
                      const thali = items.find(i => i.id === 'ghar-ki-thali');
                      if (thali) onAddToCart(thali);
                    }}
                    className="px-5 py-2.5 bg-[#C5221F] text-white rounded-full text-xs font-extrabold hover:bg-[#9F1714] active:scale-95 transition-all shadow-sm"
                  >
                    + Add Ghar Ki Thali (₹190)
                  </button>
                </div>
              </div>
              <div className="md:col-span-4 flex justify-center">
                <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-md border-2 border-white rotate-2 hover:rotate-0 transition-transform">
                  <img
                    src={items.find(i => i.id === 'ghar-ki-thali')?.image}
                    alt="Ghar Ki Thali"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Menu Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map(item => (
            <FoodCard
              key={item.id}
              item={item}
              quantityInCart={getQuantityInCart(item.id)}
              onAddToCart={onAddToCart}
              onUpdateQuantity={onUpdateQuantity}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>

        {/* Empty State if search yields no results */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center">
            <div className="w-16 h-16 bg-[#FEF6E8] rounded-full flex items-center justify-center mx-auto text-[#EAA221] mb-3">
              🍲
            </div>
            <h4 className="text-lg font-bold text-[#1C1917]">No dish found for "{searchQuery}"</h4>
            <p className="text-sm text-[#78716C] mt-1">Try searching for dal, thali, roti, bhindi or khichdi</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('TODAY');
              }}
              className="mt-4 px-4 py-2 bg-[#C5221F] text-white rounded-full text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
