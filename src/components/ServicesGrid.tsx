import React, { useState } from 'react';
import { Search, Plus, Check, Clock, Sparkles, MessageCircle } from 'lucide-react';
import { ALL_SERVICES, ServiceItem, SALON_INFO } from '../data/salonData';

interface ServicesGridProps {
  cart: { [id: string]: number };
  onAddToCart: (service: ServiceItem) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CATEGORIES = [
  'All (22)',
  'Hair & Braids',
  'Nails & Care',
  'Spa & Massage',
  'Waxing & Threading',
  'Beauty & Glam'
];

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  cart,
  onAddToCart,
  activeCategory,
  onCategoryChange
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = ALL_SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === 'All' ||
      activeCategory === 'All (22)' ||
      service.category === activeCategory;

    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#FBF5FF] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="text-xs font-bold tracking-[0.2em] text-[#4A0E6A] uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Service Menu</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A0A2E]">
            All 22 Beauty &amp; Hair Services
          </h2>
          <p className="text-sm sm:text-base text-[#1A0A2E]/70">
            Select your desired treatments to build your customized WhatsApp booking cart. Cash only salon with customer toilet facilities.
          </p>
        </div>

        {/* Search Bar & Category Filter Tabs */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-purple-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. Braids, Acrylics, Keratin, Waxing, Massage)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white rounded-2xl border border-[#4A0E6A]/15 text-sm text-[#1A0A2E] placeholder:text-[#1A0A2E]/40 focus:outline-none focus:ring-2 focus:ring-[#4A0E6A]/20 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-purple-600 hover:text-purple-800"
              >
                Clear
              </button>
            )}
          </div>

          {/* Clean Segmented Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {CATEGORIES.map((cat) => {
              const baseCat = cat.replace(' (22)', '');
              const isActive =
                activeCategory === cat ||
                activeCategory === baseCat ||
                (cat === 'All (22)' && activeCategory === 'All');

              return (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(baseCat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#4A0E6A] text-white shadow-md shadow-[#4A0E6A]/20'
                      : 'bg-white text-[#1A0A2E]/70 hover:text-[#4A0E6A] hover:bg-purple-50 border border-[#4A0E6A]/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Counter & Notice */}
        <div className="flex items-center justify-between text-xs text-[#1A0A2E]/60 max-w-7xl mx-auto mb-6 px-1">
          <span>
            Showing <strong className="text-[#4A0E6A] font-bold">{filteredServices.length}</strong> of 22 signature treatments
          </span>
          <span className="hidden sm:inline">Transparent Cash Only Pricing · Appointments Recommended</span>
        </div>

        {/* 22 Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-[20px] border border-[#4A0E6A]/10 max-w-md mx-auto">
            <p className="text-sm font-medium text-[#1A0A2E]">No services matching "{searchQuery}"</p>
            <p className="text-xs text-[#1A0A2E]/60 mt-1">Try searching for "braids", "nails", or "massage"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onCategoryChange('All');
              }}
              className="mt-4 px-4 py-2 bg-[#4A0E6A] text-white text-xs font-semibold rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const inCartQty = cart[service.id] || 0;

              return (
                <div
                  key={service.id}
                  className="luxury-card p-6 flex flex-col justify-between group hover:border-[#4A0E6A]/30 transition-all"
                >
                  <div>
                    {/* Top row: Category & Duration */}
                    <div className="flex items-center justify-between gap-2 text-xs mb-2.5">
                      <span className="text-[#4A0E6A] font-semibold text-[11px] uppercase tracking-wider">
                        {service.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#1A0A2E]/60 text-[11px]">
                        <Clock className="w-3 h-3 text-[#4A0E6A]" />
                        <span>{service.duration}</span>
                      </span>
                    </div>

                    {/* Service Name */}
                    <h3 className="font-display text-2xl font-bold text-[#1A0A2E] group-hover:text-[#4A0E6A] transition-colors leading-snug">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs sm:text-sm text-[#1A0A2E]/70 leading-relaxed min-h-[42px]">
                      {service.description}
                    </p>
                  </div>

                  {/* Price & Add to Booking Button */}
                  <div className="mt-6 pt-4 border-t border-[#4A0E6A]/10 flex items-center justify-between gap-3">
                    <div>
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-[#1A0A2E]/50">
                        Typical Rate
                      </span>
                      <span className="font-mono text-lg font-bold text-[#4A0E6A] tabular-nums">
                        AED {service.priceAED}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Direct WhatsApp Quick Chat for this specific service */}
                      <a
                        href={`https://wa.me/971551618271?text=${encodeURIComponent(
                          `Hello Silky Divas, I would like to inquire about ${service.name} (AED ${service.priceAED}). What times are available?`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Chat on WhatsApp about this service"
                        className="p-2.5 rounded-xl border border-[#4A0E6A]/15 text-[#4A0E6A] hover:bg-purple-50 transition-colors"
                        aria-label={`Ask about ${service.name} on WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                      </a>

                      {/* Add to WhatsApp Booking Cart */}
                      <button
                        onClick={() => onAddToCart(service)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                          inCartQty > 0
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                            : 'bg-[#4A0E6A] hover:bg-[#380953] text-white shadow-md shadow-[#4A0E6A]/15'
                        }`}
                      >
                        {inCartQty > 0 ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added ({inCartQty})</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Booking</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
