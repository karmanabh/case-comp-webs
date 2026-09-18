import React, { useState } from 'react';
import { ShoppingBag, MapPin, Menu as MenuIcon, X, Sparkles, ChevronDown } from 'lucide-react';
import { DeliveryHub } from '../types';
import { GkkLogo } from './GkkLogo';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  selectedLocation: DeliveryHub;
  onSelectLocation: (hub: DeliveryHub) => void;
  availableHubs: DeliveryHub[];
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  selectedLocation,
  onSelectLocation,
  availableHubs
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);

  return (
    <header id="navbar" className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADDCE] shadow-[0_2px_15px_rgba(234,162,33,0.08)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Wordmark */}
          <div className="flex items-center gap-5 sm:gap-6">
            <a href="#" className="flex items-center group">
              <GkkLogo showTagline={true} />
            </a>

            {/* Location Selector Dropdown for Desktop */}
            <div className="hidden md:block relative">
              <button
                id="location-selector-btn"
                onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full bg-white border border-[#EADDCE] text-[#1C1917] hover:border-[#C5221F] hover:text-[#C5221F] transition-colors shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5221F]" />
                <span>Delivering to: <strong className="font-bold text-[#1C1917]">{selectedLocation.name.split('(')[0].trim()}</strong></span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              {locationDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-[#EADDCE] p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-2 border-b border-[#F5EFE6]">
                    <p className="text-xs font-bold text-[#1C1917]">Select your campus / area</p>
                    <p className="text-[11px] text-[#78716C]">Hot homestyle dabbas in 25-35 mins</p>
                  </div>
                  <div className="max-h-64 overflow-y-auto py-1">
                    {availableHubs.map((hub) => (
                      <button
                        key={hub.id}
                        onClick={() => {
                          onSelectLocation(hub);
                          setLocationDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                          selectedLocation.id === hub.id
                            ? 'bg-[#FDEDEC] text-[#C5221F] font-bold'
                            : 'hover:bg-[#FAF7F2] text-[#44403C]'
                        }`}
                      >
                        <div>
                          <p className="font-semibold">{hub.name}</p>
                          <p className="text-[10px] text-[#78716C] truncate max-w-[180px]">{hub.region} • {hub.estimatedTime}</p>
                        </div>
                        {hub.status === 'Active' ? (
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        ) : (
                          <span className="text-[9px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded-full font-medium">Soon</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#menu-section" className="text-sm font-semibold text-[#44403C] hover:text-[#C5221F] transition-colors">
              Menu
            </a>
            <a href="#menu-section" className="text-sm font-semibold text-[#44403C] hover:text-[#C5221F] transition-colors flex items-center gap-1.5">
              <span>Today's Menu</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAA221] animate-pulse" />
            </a>
            <a href="#weekly-rotation" className="text-sm font-semibold text-[#44403C] hover:text-[#C5221F] transition-colors">
              What's Cooking?
            </a>
            <a href="#build-your-meal" className="text-sm font-semibold text-[#44403C] hover:text-[#C5221F] transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#EAA221]" />
              <span>Build Your Meal</span>
            </a>
            <a href="#why-gkk" className="text-sm font-semibold text-[#44403C] hover:text-[#C5221F] transition-colors">
              Why GKK
            </a>
            <a href="#delivery-areas" className="text-sm font-semibold text-[#44403C] hover:text-[#C5221F] transition-colors">
              Delivery Areas
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Cart Trigger */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="relative flex items-center justify-center w-11 h-11 rounded-full bg-white border border-[#EADDCE] text-[#1C1917] hover:border-[#C5221F] hover:text-[#C5221F] transition-colors shadow-xs"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[20px] h-5 px-1 bg-[#C5221F] text-white text-[11px] font-extrabold rounded-full ring-2 ring-[#FAF7F2] animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Order Now Button */}
            <a
              href="#menu-section"
              id="header-order-now-btn"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#C5221F] text-white text-sm font-bold shadow-sm hover:bg-[#9F1714] active:scale-95 transition-all"
            >
              Order Now
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#44403C] hover:bg-[#EADDCE]/50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EADDCE] bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-3">
          {/* Mobile Location Selector */}
          <div className="p-3 bg-white rounded-xl border border-[#EADDCE]">
            <p className="text-xs font-bold text-[#78716C] mb-1">Delivering to:</p>
            <select
              value={selectedLocation.id}
              onChange={(e) => {
                const found = availableHubs.find(h => h.id === e.target.value);
                if (found) onSelectLocation(found);
              }}
              className="w-full text-xs font-bold text-[#1C1917] bg-transparent outline-none cursor-pointer"
            >
              {availableHubs.map(h => (
                <option key={h.id} value={h.id}>
                  {h.name} ({h.region}) - {h.status}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col space-y-2 pt-1 font-semibold text-sm">
            <a
              href="#menu-section"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white text-[#1C1917]"
            >
              Today's Menu
            </a>
            <a
              href="#weekly-rotation"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white text-[#1C1917]"
            >
              What's Cooking? (Weekly Strip)
            </a>
            <a
              href="#build-your-meal"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white text-[#1C1917] flex items-center justify-between"
            >
              <span>Build Your Ghar Ka Meal</span>
              <span className="text-xs px-2 py-0.5 bg-[#FEF6E8] text-[#EAA221] font-bold rounded-full">Interactive</span>
            </a>
            <a
              href="#why-gkk"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white text-[#1C1917]"
            >
              Why GKK
            </a>
            <a
              href="#miss-home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white text-[#1C1917]"
            >
              Moved Out? We Got You
            </a>
            <a
              href="#delivery-areas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white text-[#1C1917]"
            >
              Delivery Areas (Delhi NCR)
            </a>
          </div>

          <div className="pt-2">
            <a
              href="#menu-section"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 bg-[#C5221F] text-white font-bold rounded-xl text-center shadow-sm"
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
