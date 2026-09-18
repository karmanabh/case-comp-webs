import React from 'react';
import { X, Check, Flame, ShieldAlert, HeartHandshake, Plus, Minus } from 'lucide-react';
import { FoodItem } from '../types';

interface DishDetailModalProps {
  item: FoodItem | null;
  onClose: () => void;
  quantityInCart: number;
  onAddToCart: (item: FoodItem) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({
  item,
  onClose,
  quantityInCart,
  onAddToCart,
  onUpdateQuantity
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-[32px] max-w-lg w-full overflow-hidden shadow-2xl border border-[#EADDCE] flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative aspect-[16/10] bg-[#FAF7F2]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-[#1C1917] hover:bg-white flex items-center justify-center shadow-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center shadow-xs border border-emerald-600/30">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            </div>
            <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
              {item.category}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-[#1C1917] font-display">
                {item.name}
              </h2>
              <span className="text-2xl font-extrabold text-[#C5221F] font-display">
                ₹{item.price}
              </span>
            </div>
            {item.hindiName && (
              <p className="text-sm font-medium text-[#78716C]">{item.hindiName}</p>
            )}
            <p className="mt-2 text-sm text-[#57534E] leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Homestyle Note Badge */}
          {item.homestyleNote && (
            <div className="p-3.5 bg-[#FEF6E8] border border-[#EAA221]/40 rounded-2xl flex items-start gap-3">
              <HeartHandshake className="w-5 h-5 text-[#EAA221] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-[#1C1917]">Ghar Ka Standout</p>
                <p className="text-xs text-[#57534E] mt-0.5">{item.homestyleNote}</p>
              </div>
            </div>
          )}

          {/* Nutrition & Serving Specs */}
          <div className="grid grid-cols-3 gap-3 p-3 bg-[#FAF7F2] rounded-2xl border border-[#EADDCE] text-center">
            <div>
              <p className="text-[11px] font-bold text-[#78716C]">PORTION</p>
              <p className="text-xs font-extrabold text-[#1C1917] mt-0.5">{item.serves || '1 Person'}</p>
            </div>
            <div className="border-x border-[#EADDCE]">
              <p className="text-[11px] font-bold text-[#78716C]">ENERGY</p>
              <p className="text-xs font-extrabold text-[#1C1917] mt-0.5">{item.calories || 320} kcal</p>
            </div>
            <div>
              <p className="text-[11px] font-bold text-[#78716C]">PROTEIN</p>
              <p className="text-xs font-extrabold text-[#1C1917] mt-0.5">{item.protein || '10g'}</p>
            </div>
          </div>

          {/* Ingredients list */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <p className="text-xs font-bold text-[#1C1917] uppercase tracking-wider mb-2">
                Pure Kitchen Ingredients
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-white border border-[#EADDCE] rounded-lg text-xs font-medium text-[#44403C]"
                  >
                    ✓ {ing}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="p-4 sm:p-6 border-t border-[#F5EFE6] bg-[#FAF7F2] flex items-center justify-between">
          <div>
            <p className="text-xs text-[#78716C]">Item Total</p>
            <p className="text-xl font-extrabold text-[#1C1917] font-display">
              ₹{item.price * Math.max(1, quantityInCart)}
            </p>
          </div>

          {quantityInCart === 0 ? (
            <button
              onClick={() => onAddToCart(item)}
              className="px-6 py-3 bg-[#C5221F] text-white rounded-full font-bold text-sm hover:bg-[#9F1714] active:scale-95 transition-all shadow-sm"
            >
              Add to Ghar Ka Dabba
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white border border-[#C5221F]/30 rounded-full px-3 py-1.5 shadow-xs">
                <button
                  onClick={() => onUpdateQuantity(item.id, -1)}
                  className="w-7 h-7 rounded-full bg-[#FDEDEC] text-[#C5221F] flex items-center justify-center hover:bg-[#C5221F] hover:text-white transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-extrabold text-[#C5221F] w-6 text-center">
                  {quantityInCart}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.id, 1)}
                  className="w-7 h-7 rounded-full bg-[#C5221F] text-white flex items-center justify-center hover:bg-[#9F1714] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#1C1917] text-white text-xs font-bold rounded-full"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
