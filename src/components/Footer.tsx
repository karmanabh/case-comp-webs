import React from 'react';
import { Heart, Instagram, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { GkkLogo } from './GkkLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <GkkLogo />
            </div>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Wholesome daily meals, familiar flavours and the comfort of home — cooked in hygienic cloud kitchens and delivered piping hot across Delhi NCR.
            </p>

            {/* Exact requested line */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
                <span>Made for people living away from home</span>
                <span className="text-red-500">❤️</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Navigation</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#menu-section" className="hover:text-[#EAA221] transition-colors">Menu</a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-[#EAA221] transition-colors">Today’s Menu</a>
              </li>
              <li>
                <a href="#build-your-meal" className="hover:text-[#EAA221] transition-colors">Build Your Meal</a>
              </li>
              <li>
                <a href="#weekly-rotation" className="hover:text-[#EAA221] transition-colors">What's Cooking?</a>
              </li>
              <li>
                <a href="#why-gkk" className="hover:text-[#EAA221] transition-colors">Why GKK</a>
              </li>
              <li>
                <a href="#delivery-areas" className="hover:text-[#EAA221] transition-colors">Delivery Areas</a>
              </li>
            </ul>
          </div>

          {/* About & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#why-gkk" className="hover:text-[#EAA221] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#delivery-areas" className="hover:text-[#EAA221] transition-colors">Kitchen Standards</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("FSSAI Central Kitchen License: 13324001000842 • 100% compliant with food safety regulations."); }} className="hover:text-[#EAA221] transition-colors">FSSAI License</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Terms of Service: All orders prepared fresh. Delivery within service hub radius."); }} className="hover:text-[#EAA221] transition-colors">Terms</a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: Your data and delivery address are strictly protected."); }} className="hover:text-[#EAA221] transition-colors">Privacy</a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Connect</h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#EAA221] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C5221F]" />
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li className="flex items-center gap-2 text-neutral-400 text-xs">
                <Mail className="w-4 h-4 text-neutral-400" />
                <span>care@gkkfoods.in</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-400 text-xs">
                <Phone className="w-4 h-4 text-neutral-400" />
                <span>+91 11 4982 4500</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-400 text-xs">
                <MapPin className="w-4 h-4 text-neutral-400" />
                <span>Delhi & Delhi NCR Hubs</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} GKK Foods Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>FSSAI Lic. No. 13324001000842</span>
            <span>•</span>
            <span>Fresh Ghar Ka Khana</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
