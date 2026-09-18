import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Clock, MapPin, Phone, User, ShieldCheck, Flame, Bike, Heart } from 'lucide-react';
import { CartItem, DeliveryHub } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  selectedLocation: DeliveryHub;
  discount: number;
  kitchenNote: string;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  selectedLocation,
  discount,
  kitchenNote,
  onOrderSuccess
}) => {
  const [step, setStep] = useState<'details' | 'confirmed'>('details');
  const [name, setName] = useState('Raghav Sharma');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [address, setAddress] = useState('Room 204, Ganga Boys PG, Satya Niketan');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod'>('upi');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [prepProgress, setPrepProgress] = useState(1);

  useEffect(() => {
    if (step === 'confirmed') {
      const interval = setInterval(() => {
        setPrepProgress(prev => (prev < 3 ? prev + 1 : prev));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [step]);

  if (!isOpen) return null;

  const itemTotal = cartItems.reduce((acc, item) => acc + item.foodItem.price * item.quantity, 0);
  const deliveryFee = itemTotal >= 199 ? 0 : 35;
  const packagingFee = 15;
  const gst = Math.round((itemTotal - discount) * 0.05);
  const totalAmount = Math.max(0, itemTotal - discount + deliveryFee + packagingFee + gst);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setOrderId(`GKK-${Math.floor(100000 + Math.random() * 900000)}`);
      setStep('confirmed');
      setIsSubmitting(false);
      onOrderSuccess();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-[32px] max-w-lg w-full overflow-hidden shadow-2xl border border-[#EADDCE] flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-[#F5EFE6] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#C5221F] text-white flex items-center justify-center font-bold text-xs">
              GKK
            </div>
            <div>
              <h3 className="font-extrabold text-base text-[#1C1917] font-display">
                {step === 'details' ? 'Delivery & Payment Details' : 'Ghar Ka Dabba On The Way!'}
              </h3>
              <p className="text-[11px] text-[#78716C]">
                {step === 'details' ? `Hub: ${selectedLocation.name}` : `Order ID: #${orderId}`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white text-[#78716C] hover:text-[#1C1917] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {step === 'details' ? (
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              
              {/* Order Quick Summary */}
              <div className="p-3.5 bg-[#FAF7F2] rounded-2xl border border-[#EADDCE]">
                <div className="flex items-center justify-between text-xs font-bold text-[#1C1917] pb-2 border-b border-[#EADDCE]">
                  <span>{cartItems.length} Dishes in Dabba</span>
                  <span className="text-[#C5221F] font-extrabold font-display text-sm">₹{totalAmount}</span>
                </div>
                <div className="pt-2 text-[11px] text-[#78716C] flex items-center justify-between">
                  <span>Estimated Arrival</span>
                  <span className="font-bold text-[#1C1917] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#EAA221]" />
                    {selectedLocation.estimatedTime}
                  </span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="text-xs font-bold text-[#1C1917] block mb-1">Your Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF7F2] border border-[#EADDCE] rounded-xl text-xs text-[#1C1917] focus:bg-white focus:outline-none focus:border-[#C5221F]"
                    placeholder="Enter full name"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-bold text-[#1C1917] block mb-1">Mobile Number (For Delivery OTP)</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF7F2] border border-[#EADDCE] rounded-xl text-xs text-[#1C1917] focus:bg-white focus:outline-none focus:border-[#C5221F]"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Address / PG / Hostel / Room */}
              <div>
                <label className="text-xs font-bold text-[#1C1917] block mb-1">Hostel / PG / Flat Address</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#78716C] absolute left-3 top-3" />
                  <textarea
                    required
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 bg-[#FAF7F2] border border-[#EADDCE] rounded-xl text-xs text-[#1C1917] focus:bg-white focus:outline-none focus:border-[#C5221F]"
                    placeholder="Room/Flat No., Building Name, Lane, Landmark"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="text-xs font-bold text-[#1C1917] block mb-1.5">Payment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                      paymentMethod === 'upi'
                        ? 'bg-[#FEF6E8] border-[#EAA221] ring-2 ring-[#EAA221]/30'
                        : 'bg-[#FAF7F2] border-[#EADDCE]'
                    }`}
                  >
                    <p className="text-xs font-extrabold text-[#1C1917]">UPI Instant</p>
                    <p className="text-[10px] text-[#78716C]">GPay, PhonePe, Paytm</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-2xl border text-left cursor-pointer transition-all ${
                      paymentMethod === 'cod'
                        ? 'bg-[#FEF6E8] border-[#EAA221] ring-2 ring-[#EAA221]/30'
                        : 'bg-[#FAF7F2] border-[#EADDCE]'
                    }`}
                  >
                    <p className="text-xs font-extrabold text-[#1C1917]">Cash on Delivery</p>
                    <p className="text-[10px] text-[#78716C]">Pay when dabba arrives</p>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#C5221F] hover:bg-[#9F1714] active:scale-95 text-white font-extrabold text-sm rounded-full shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Confirming your ghar ka order...</span>
                  ) : (
                    <span>Place Ghar Ka Order (₹{totalAmount})</span>
                  )}
                </button>
              </div>

            </form>
          ) : (
            /* Order Placed Success & Live Tracking State */
            <div className="space-y-6 text-center py-2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h4 className="text-2xl font-extrabold text-[#1C1917] font-display">
                  Order Received with Love!
                </h4>
                <p className="text-xs text-[#57534E] mt-1">
                  Our cook has started rolling fresh phulkas and reheating dal tadka for you.
                </p>
              </div>

              {/* Live Status Tracker */}
              <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADDCE] text-left space-y-4">
                <p className="text-[11px] font-bold uppercase text-[#78716C]">Kitchen Live Status</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1C1917]">Order Accepted by {selectedLocation.name}</p>
                      <p className="text-[10px] text-[#78716C]">Payment mode: {paymentMethod.toUpperCase()}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                      prepProgress >= 2 ? 'bg-emerald-600 text-white' : 'bg-[#EAA221] text-white animate-pulse'
                    }`}>
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1C1917]">Simmering on Stove & Tawa</p>
                      <p className="text-[10px] text-[#78716C]">Fresh tawa phulkas being prepared with pure desi cow ghee</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                      prepProgress >= 3 ? 'bg-emerald-600 text-white' : 'bg-neutral-200 text-neutral-500'
                    }`}>
                      <Bike className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1C1917]">Delivery Partner Assigned</p>
                      <p className="text-[10px] text-[#78716C]">Reaching {address.split(',')[0]} in ~{selectedLocation.estimatedTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Friendly Quote */}
              <div className="p-3 bg-[#FEF6E8] rounded-xl border border-[#EAA221]/30 text-xs font-medium text-[#9F1714]">
                <Heart className="w-4 h-4 inline mr-1 text-[#C5221F]" />
                Sit back, drink some water, your homestyle food will be at your door soon.
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-[#1C1917] text-white rounded-full text-xs font-bold hover:bg-[#C5221F] transition-colors"
              >
                Back to Website
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
