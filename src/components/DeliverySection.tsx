import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Clock, AlertCircle, Building2, ChevronRight, Vote } from 'lucide-react';
import { DELIVERY_HUBS } from '../data/locationsData';
import { DeliveryHub } from '../types';

interface DeliverySectionProps {
  selectedLocation: DeliveryHub;
  onSelectLocation: (hub: DeliveryHub) => void;
}

export const DeliverySection: React.FC<DeliverySectionProps> = ({
  selectedLocation,
  onSelectLocation
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [votedCities, setVotedCities] = useState<string[]>([]);
  const [checkResult, setCheckResult] = useState<{
    status: 'serviceable' | 'unserviceable' | null;
    message: string;
    hub?: DeliveryHub;
  }>({ status: null, message: '' });

  const activeHubs = DELIVERY_HUBS.filter(h => h.status === 'Active');
  const upcomingHubs = DELIVERY_HUBS.filter(h => h.status === 'Coming Soon');

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchInput.trim().toLowerCase();
    if (!query) return;

    // Search by pincode or name
    const found = DELIVERY_HUBS.find(h => 
      h.pincodePrefix.some(pin => pin.includes(query) || query.includes(pin)) ||
      h.name.toLowerCase().includes(query) ||
      h.landmark.toLowerCase().includes(query)
    );

    if (found && found.status === 'Active') {
      setCheckResult({
        status: 'serviceable',
        message: `Hooray! We deliver piping hot ghar ka khana to ${found.name} in ~${found.estimatedTime}!`,
        hub: found
      });
      onSelectLocation(found);
    } else if (found && found.status === 'Coming Soon') {
      setCheckResult({
        status: 'unserviceable',
        message: `${found.name} is in our upcoming launch pipeline! You can vote to prioritize your kitchen.`
      });
    } else {
      setCheckResult({
        status: 'unserviceable',
        message: `Currently operating exclusively in Delhi & Delhi NCR. We'll be expanding to more areas soon!`
      });
    }
  };

  const handleVoteCity = (city: string) => {
    if (!votedCities.includes(city)) {
      setVotedCities([...votedCities, city]);
    }
  };

  return (
    <section id="delivery-areas" className="py-16 md:py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Exact requested headline) */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EADDCE] text-[#1C1917] text-xs font-extrabold shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#C5221F]" />
            <span>Cloud Kitchen Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1C1917] tracking-tight font-display">
            Where do we deliver?
          </h2>

          <p className="text-base sm:text-lg text-[#57534E] font-medium">
            Currently serving students & professionals across key hubs in Delhi and Delhi NCR.
          </p>
        </div>

        {/* Location Search Bar / Pincode Check (Exact requested element) */}
        <div className="mt-10 max-w-xl mx-auto">
          <form onSubmit={handlePincodeCheck} className="relative flex items-center">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-[#78716C] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                id="location-search-input"
                placeholder="Enter your location or Delhi NCR pincode (e.g. 110007, Satya Niketan, Cyber City)"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-[#EADDCE] rounded-full text-sm text-[#1C1917] placeholder-[#8C827A] focus:outline-none focus:border-[#C5221F] shadow-sm transition-all"
              />
            </div>
            <button
              type="submit"
              className="absolute right-2 px-6 py-2.5 bg-[#C5221F] text-white rounded-full text-xs font-bold hover:bg-[#9F1714] transition-all cursor-pointer"
            >
              Check
            </button>
          </form>

          {/* Feedback message */}
          {checkResult.status && (
            <div className={`mt-4 p-4 rounded-2xl flex items-start gap-3 text-xs font-medium animate-in fade-in duration-150 ${
              checkResult.status === 'serviceable'
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                : 'bg-amber-50 text-amber-900 border border-amber-200'
            }`}>
              {checkResult.status === 'serviceable' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-bold">{checkResult.status === 'serviceable' ? 'Kitchen is Live!' : 'Area Update'}</p>
                <p className="mt-0.5">{checkResult.message}</p>
              </div>
            </div>
          )}
        </div>

        {/* Stylised Delhi Map & Active Hubs Interface */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Delhi & NCR Active Hubs (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Delhi Section */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C5221F]" />
                <h3 className="text-xl font-bold text-[#1C1917] font-display">Delhi (Active Hubs)</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeHubs.filter(h => h.region === 'Delhi').map(hub => {
                  const isSelected = selectedLocation.id === hub.id;
                  return (
                    <div
                      key={hub.id}
                      onClick={() => onSelectLocation(hub)}
                      className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-white border-2 border-[#C5221F] shadow-sm'
                          : 'bg-white/80 border-[#EADDCE] hover:bg-white hover:border-[#C5221F]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm text-[#1C1917] font-display">{hub.name}</p>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                          Active
                        </span>
                      </div>
                      <p className="text-[11px] text-[#57534E] mt-1 line-clamp-1">{hub.landmark}</p>
                      <div className="mt-2 flex items-center gap-2 text-[11px] text-[#C5221F] font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>ETA: {hub.estimatedTime}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delhi NCR Section */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EAA221]" />
                <h3 className="text-xl font-bold text-[#1C1917] font-display">Delhi NCR (Gurugram & Noida)</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {activeHubs.filter(h => h.region === 'Delhi NCR').map(hub => {
                  const isSelected = selectedLocation.id === hub.id;
                  return (
                    <div
                      key={hub.id}
                      onClick={() => onSelectLocation(hub)}
                      className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-white border-2 border-[#C5221F] shadow-sm'
                          : 'bg-white/80 border-[#EADDCE] hover:bg-white hover:border-[#C5221F]/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm text-[#1C1917] font-display">{hub.name}</p>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                          Active
                        </span>
                      </div>
                      <p className="text-[11px] text-[#57534E] mt-1 line-clamp-1">{hub.landmark}</p>
                      <div className="mt-2 flex items-center gap-2 text-[11px] text-[#C5221F] font-bold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>ETA: {hub.estimatedTime}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Expandable Future-City Locations */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl border border-[#EADDCE] p-6 shadow-xs">
              <div className="flex items-center gap-2 pb-4 border-b border-[#F5EFE6]">
                <Building2 className="w-5 h-5 text-[#EAA221]" />
                <div>
                  <h4 className="font-extrabold text-base text-[#1C1917] font-display">
                    Upcoming Cities
                  </h4>
                  <p className="text-[11px] text-[#78716C]">Opening kitchens soon based on demand</p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {upcomingHubs.map(hub => {
                  const hasVoted = votedCities.includes(hub.id);
                  return (
                    <div key={hub.id} className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#EADDCE]">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-[#1C1917] font-display">{hub.name}</p>
                        <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-900 rounded-full font-bold">
                          {hub.estimatedTime}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#78716C] mt-1">{hub.landmark}</p>
                      <button
                        onClick={() => handleVoteCity(hub.id)}
                        className={`mt-2.5 w-full py-1.5 rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          hasVoted
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white border border-[#EADDCE] text-[#1C1917] hover:border-[#C5221F] hover:text-[#C5221F]'
                        }`}
                      >
                        {hasVoted ? '✓ Vote Registered!' : 'Vote for your campus/area'}
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 p-3 bg-[#FEF6E8] rounded-2xl text-[11px] text-[#78716C]">
                <p className="font-semibold text-[#1C1917]">Note on Operations:</p>
                <p className="mt-0.5">GKK Foods delivers only within verified hub perimeters to guarantee hot, fluffy rotis within 30 minutes.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
