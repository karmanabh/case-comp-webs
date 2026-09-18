import React from 'react';
import { ShoppingBag, ArrowRight, Flame } from 'lucide-react';
import { CartItem } from '../types';

interface MobileBottomBarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onSeeMenu: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  cartItems,
  onOpenCart,
  onSeeMenu
}) => {
  const totalCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.foodItem.price * curr.quantity, 0);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-[#EADDCE] shadow-2xl">
      {totalCount > 0 ? (
        <button
          onClick={onOpenCart}
          className="w-full py-3.5 px-5 bg-[#C5221F] hover:bg-[#9F1714] text-white rounded-full flex items-center justify-between shadow-lg active:scale-98 transition-all"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-white text-[#C5221F] text-xs font-extrabold flex items-center justify-center">
              {totalCount}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">View Dabba</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm font-display">₹{totalPrice}</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </button>
      ) : (
        <button
          onClick={onSeeMenu}
          className="w-full py-3 px-5 bg-[#C5221F] hover:bg-[#9F1714] text-white rounded-full flex items-center justify-center gap-2 shadow-sm font-bold text-xs"
        >
          <Flame className="w-4 h-4 text-[#EAA221]" />
          <span>See Today's Ghar Ka Menu & Order</span>
        </button>
      )}
    </div>
  );
};
