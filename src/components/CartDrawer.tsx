import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag, Sparkles, MapPin } from 'lucide-react';
import { CartItem, DeliveryHub } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
  onProceedToCheckout: (appliedDiscount: number, note: string) => void;
  selectedLocation: DeliveryHub;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
  onProceedToCheckout,
  selectedLocation
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>({
    code: 'PGVALA',
    discount: 30
  });
  const [couponError, setCouponError] = useState('');
  const [kitchenNote, setKitchenNote] = useState('');

  if (!isOpen) return null;

  const itemTotal = cartItems.reduce((acc, item) => acc + item.foodItem.price * item.quantity, 0);
  const deliveryFee = itemTotal >= 199 || itemTotal === 0 ? 0 : 35;
  const packagingFee = itemTotal > 0 ? 15 : 0;
  const discountAmount = appliedCoupon ? Math.min(appliedCoupon.discount, itemTotal) : 0;
  const gst = itemTotal > 0 ? Math.round((itemTotal - discountAmount) * 0.05) : 0;
  const finalTotal = Math.max(0, itemTotal - discountAmount + deliveryFee + packagingFee + gst);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();

    if (code === 'PGVALA' || code === 'HOSTEL') {
      setAppliedCoupon({ code, discount: 30 });
      setCouponCode('');
    } else if (code === 'GHAR') {
      setAppliedCoupon({ code, discount: 50 });
      setCouponCode('');
    } else {
      setCouponError('Invalid coupon. Try "PGVALA" for ₹30 student discount!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#EADDCE] animate-in slide-in-from-right duration-250">
          
          {/* Header */}
          <div className="p-5 border-b border-[#F5EFE6] bg-[#FAF7F2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#FDEDEC] text-[#C5221F] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-[#1C1917] font-display">
                  Your Ghar Ka Dabba
                </h3>
                <div className="flex items-center gap-1 text-xs text-[#78716C]">
                  <MapPin className="w-3 h-3 text-[#C5221F]" />
                  <span>Delivering to {selectedLocation.name.split('(')[0].trim()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white text-[#78716C] hover:text-[#1C1917] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-20 h-20 rounded-full bg-[#FAF7F2] border border-[#EADDCE] flex items-center justify-center text-3xl">
                  🍲
                </div>
                <h4 className="font-extrabold text-lg text-[#1C1917] font-display">
                  Your dabba is empty
                </h4>
                <p className="text-xs text-[#78716C] max-w-xs">
                  Add wholesome Ghar Ki Thali, freshly puffed rotis, or build your custom meal!
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-6 py-2.5 bg-[#C5221F] text-white rounded-full text-xs font-bold shadow-xs hover:bg-[#9F1714]"
                >
                  Explore Today’s Menu
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between pb-2 border-b border-[#F5EFE6]">
                  <span className="text-xs font-bold text-[#78716C] uppercase">Items ({cartItems.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-xs text-[#C5221F] hover:underline font-semibold"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EADDCE] flex items-start gap-3"
                    >
                      <img
                        src={item.foodItem.image}
                        alt={item.foodItem.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-bold text-xs text-[#1C1917] leading-snug truncate">
                            {item.foodItem.name}
                          </h4>
                          <span className="text-xs font-extrabold text-[#1C1917]">
                            ₹{item.foodItem.price * item.quantity}
                          </span>
                        </div>

                        {item.customDetails ? (
                          <p className="text-[10px] text-[#C5221F] font-medium line-clamp-1 mt-0.5">
                            {item.customDetails}
                          </p>
                        ) : (
                          <p className="text-[10px] text-[#78716C] line-clamp-1 mt-0.5">
                            {item.foodItem.serves || '1 Person'}
                          </p>
                        )}

                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-[11px] text-[#78716C]">₹{item.foodItem.price} each</span>
                          
                          <div className="flex items-center gap-1.5 bg-white border border-[#EADDCE] rounded-full px-2 py-0.5 shadow-2xs">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="text-[#C5221F] hover:text-[#9F1714] p-0.5"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-extrabold text-[#1C1917] w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="text-[#C5221F] hover:text-[#9F1714] p-0.5"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Kitchen Special Instructions */}
                <div className="pt-2">
                  <label className="text-xs font-bold text-[#1C1917] block mb-1">
                    Cooking Instructions for Maa's Kitchen
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kam mirchi, no onion in salad, extra hot phulkas..."
                    value={kitchenNote}
                    onChange={(e) => setKitchenNote(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-[#EADDCE] bg-[#FAF7F2] focus:bg-white focus:outline-none focus:border-[#C5221F]"
                  />
                </div>

                {/* Coupon Code Section */}
                <div className="pt-2">
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter promo code (e.g. PGVALA)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 text-xs p-2.5 rounded-xl border border-[#EADDCE] bg-white uppercase tracking-wider focus:outline-none focus:border-[#C5221F]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#1C1917] text-white text-xs font-bold rounded-xl hover:bg-[#C5221F] transition-colors"
                    >
                      Apply
                    </button>
                  </form>

                  {couponError && (
                    <p className="text-[11px] text-[#C5221F] mt-1 font-semibold">{couponError}</p>
                  )}

                  {appliedCoupon && (
                    <div className="mt-2 p-2 bg-[#FEF6E8] border border-[#EAA221]/40 rounded-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-[#9F1714] font-bold">
                        <Tag className="w-3.5 h-3.5 text-[#EAA221]" />
                        <span>'{appliedCoupon.code}' applied (-₹{discountAmount})</span>
                      </div>
                      <button
                        onClick={() => setAppliedCoupon(null)}
                        className="text-[11px] text-[#78716C] hover:text-[#C5221F] font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Free Delivery Threshold Alert */}
                <div className="p-2.5 rounded-xl bg-[#FDEDEC] text-[#C5221F] text-xs font-bold flex items-center justify-between">
                  <span>{itemTotal >= 199 ? '🎉 Free delivery unlocked!' : `Add ₹${199 - itemTotal} more for FREE delivery!`}</span>
                  <span className="text-[10px] bg-white px-2 py-0.5 rounded-md">Hostel deal</span>
                </div>
              </>
            )}
          </div>

          {/* Bill Breakdown & Checkout Button */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#EADDCE] bg-[#FAF7F2] space-y-3">
              <div className="space-y-1.5 text-xs text-[#57534E]">
                <div className="flex justify-between">
                  <span>Item Total</span>
                  <span className="font-semibold text-[#1C1917]">₹{itemTotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-bold">
                    <span>Student Discount (PGVALA)</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery Partner Fee</span>
                  <span className={deliveryFee === 0 ? 'text-emerald-700 font-bold' : 'font-semibold text-[#1C1917]'}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Hygienic Foil Packaging</span>
                  <span className="font-semibold text-[#1C1917]">₹{packagingFee}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (GST 5%)</span>
                  <span className="font-semibold text-[#1C1917]">₹{gst}</span>
                </div>

                <div className="pt-2 border-t border-[#EADDCE] flex justify-between items-baseline text-base font-extrabold text-[#1C1917]">
                  <span className="font-display">To Pay</span>
                  <span className="text-xl text-[#C5221F] font-display">₹{finalTotal}</span>
                </div>
              </div>

              <button
                id="cart-checkout-btn"
                onClick={() => onProceedToCheckout(discountAmount, kitchenNote)}
                className="w-full py-3.5 bg-[#C5221F] hover:bg-[#9F1714] active:scale-95 text-white font-extrabold text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout (₹{finalTotal})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
