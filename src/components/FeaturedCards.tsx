import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { FEATURED_CARDS } from '../data/salonData';

interface FeaturedCardsProps {
  onSelectCategory: (category: string) => void;
}

export const FeaturedCards: React.FC<FeaturedCardsProps> = ({ onSelectCategory }) => {
  return (
    <section id="featured" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold tracking-[0.2em] text-[#4A0E6A] uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Collections</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A0A2E]">
            Curated Beauty &amp; Hair Specialties
          </h2>
          <p className="text-sm sm:text-base text-[#1A0A2E]/70">
            Our most loved services in Deira, crafted with gentle precision and consistently reliable technique.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="luxury-card overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[4/3] overflow-hidden bg-purple-50">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-[#4A0E6A] shadow-sm">
                    {card.priceFrom}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-[#1A0A2E] group-hover:text-[#4A0E6A] transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#1A0A2E]/65 leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="px-5 pb-5 pt-0">
                <button
                  onClick={() => {
                    const targetCategory =
                      idx === 0
                        ? 'Hair & Braids'
                        : idx === 1
                        ? 'Nails & Care'
                        : idx === 2
                        ? 'Hair & Braids'
                        : 'Spa & Massage';
                    onSelectCategory(targetCategory);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#4A0E6A] bg-[#FBF5FF] hover:bg-[#4A0E6A] hover:text-white border border-[#4A0E6A]/20 transition-all flex items-center justify-center gap-1.5 group-hover:border-[#4A0E6A]"
                >
                  <span>Explore Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
