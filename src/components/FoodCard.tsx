import React from 'react';
import { Plus, Minus, Check, Eye } from 'lucide-react';
import { FoodItem } from '../types';

interface FoodCardProps {
  item: FoodItem;
  quantityInCart: number;
  onAddToCart: (item: FoodItem) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onOpenDetails: (item: FoodItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({
  item,
  quantityInCart,
  onAddToCart,
  onUpdateQuantity,
  onOpenDetails
}) => {
  return (
    <div
      id={`food-card-${item.id}`}
      className="group bg-white rounded-3xl border border-[#E8DFC8] overflow-hidden flex flex-col hover:border-[#EAA221]/70 hover:shadow-[0_8px_30px_rgba(234,162,33,0.12)] transition-all duration-300 relative"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF7F2]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          onClick={() => onOpenDetails(item)}
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          {/* Veg Indicator */}
          <div className="w-5 h-5 bg-white/95 backdrop-blur-xs rounded-md flex items-center justify-center shadow-xs border border-emerald-600/30">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
          </div>

          {item.isBestseller && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#C5221F] text-white shadow-xs">
              Bestseller 🔥
            </span>
          )}

          {item.isSpecial && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#EAA221] text-[#1C1917] shadow-xs">
              Chef Special ✨
            </span>
          )}
        </div>

        {/* Quick View Button on Image */}
        <button
          onClick={() => onOpenDetails(item)}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-[#57534E] hover:text-[#C5221F] opacity-0 group-hover:opacity-100 transition-opacity shadow-xs"
          title="View ingredients and details"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Serves / Calories Tag at Bottom of Image */}
        {item.serves && (
          <div className="absolute bottom-2 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[11px] font-medium text-white">
            {item.serves} {item.calories ? `• ${item.calories} kcal` : ''}
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3
                onClick={() => onOpenDetails(item)}
                className="font-bold text-lg text-[#1C1917] font-display hover:text-[#C5221F] transition-colors cursor-pointer leading-snug"
              >
                {item.name}
              </h3>
              {item.hindiName && (
                <span className="text-xs text-[#9C7F58] font-medium block -mt-0.5">
                  {item.hindiName}
                </span>
              )}
            </div>
          </div>

          <p className="mt-2 text-xs text-[#57534E] line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {item.homestyleNote && (
            <p className="mt-2.5 text-[11px] text-[#B45309] bg-[#FEF4E8] border border-[#FDE68A]/70 px-2.5 py-1 rounded-lg font-medium inline-block">
              {item.homestyleNote}
            </p>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="mt-5 pt-3 border-t border-[#F2E8DC] flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-extrabold text-[#C5221F] font-display">
              ₹{item.price}
            </span>
            {item.originalPrice && (
              <span className="text-xs text-[#A8A29E] line-through font-medium">
                ₹{item.originalPrice}
              </span>
            )}
          </div>

          {/* Add / Quantity Stepper Button */}
          {quantityInCart === 0 ? (
            <button
              id={`add-btn-${item.id}`}
              onClick={() => onAddToCart(item)}
              className="px-4 py-2 bg-[#FDEDEC] border border-red-200/80 text-[#C5221F] hover:bg-[#C5221F] hover:text-white rounded-full text-xs font-extrabold transition-all active:scale-95 flex items-center gap-1 shadow-xs cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-[#FDEDEC] border border-[#C5221F]/30 rounded-full px-2 py-1 shadow-xs">
              <button
                onClick={() => onUpdateQuantity(item.id, -1)}
                className="w-6 h-6 rounded-full bg-white text-[#C5221F] flex items-center justify-center hover:bg-[#C5221F] hover:text-white transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-extrabold text-[#C5221F] w-4 text-center">
                {quantityInCart}
              </span>
              <button
                onClick={() => onUpdateQuantity(item.id, 1)}
                className="w-6 h-6 rounded-full bg-[#C5221F] text-white flex items-center justify-center hover:bg-[#9F1714] transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
