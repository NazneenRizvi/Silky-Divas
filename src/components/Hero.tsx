import React from 'react';
import { MessageCircle, Star, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Hero: React.FC<{ onExploreClick: () => void }> = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Subtle luxury ambient glow matching brand purple */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4A0E6A]/5 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D8B4FE]/10 rounded-full blur-3xl pointer-events-none -ml-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            {/* The Badge requested: Pleasant & Patient Staff */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8FF] border border-[#4A0E6A]/15 text-[#4A0E6A] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Pleasant &amp; Patient Staff · Hair Styling Consistently Reliable</span>
            </div>

            {/* SEO H1 Tag with Luxury Visual Presentation */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A0A2E] leading-[1.08] text-balance">
              Silky Divas Beauty Salon <br />
              <span className="italic font-normal text-[#4A0E6A]">22 Signature Services</span> <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1A0A2E]/80">
                Best Braids &amp; Beauty in Deira Dubai
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#1A0A2E]/75 max-w-2xl leading-relaxed">
              Step into an empowering sanctuary of craftsmanship in Deira Al Rigga. From precision
              African braids, Ghana lines, and acrylic extensions to silky rebounding, facials, and
              restorative massages—experience patient, caring hands that honor your crown.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#4A0E6A] hover:bg-[#390954] text-white font-semibold text-sm rounded-full transition-all duration-200 shadow-lg shadow-[#4A0E6A]/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Book on WhatsApp</span>
              </a>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#F3E8FF]/60 text-[#4A0E6A] font-semibold text-sm rounded-full border border-[#4A0E6A]/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore All 22 Services</span>
                <span className="text-xs bg-[#4A0E6A]/10 px-2 py-0.5 rounded-full font-bold">Grid</span>
              </button>
            </div>

            {/* Quick Trust Highlights Row */}
            <div className="pt-6 border-t border-[#4A0E6A]/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#1A0A2E]/70 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4A0E6A] shrink-0" />
                <span>Appointments Recommended</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4A0E6A] shrink-0" />
                <span>Cash Only Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#4A0E6A] shrink-0" />
                <span>Toilet Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <span>Near Union Metro</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with Floating Review Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Luxury Frame */}
              <div className="overflow-hidden rounded-[20px] shadow-2xl shadow-[#4A0E6A]/15 border border-[#4A0E6A]/10 aspect-[4/5] bg-purple-100 relative group">
                <img
                  src="/src/assets/images/hero_luxury_beauty_1792901712647.jpg"
                  alt="Silky Divas Beauty Salon client with radiant skin and signature braids"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/80 via-transparent to-transparent"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-lg font-semibold tracking-wide">
                        Silky Divas Experience
                      </p>
                      <p className="text-xs text-purple-200">18 23rd St · Deira Al Rigga · Dubai</p>
                    </div>
                    <div className="flex items-center gap-1 text-amber-300">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold">5.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill/Card (Lycia Padey highlight) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-[20px] shadow-xl border border-[#4A0E6A]/15 hidden sm:block">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-[#1A0A2E] italic line-clamp-3 leading-relaxed">
                  "Never disappointed with my hairstyles. The staff are very pleasant and patient..."
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#4A0E6A] font-semibold">
                  <span>— Lycia Padey</span>
                  <span className="text-slate-400 font-normal">Services: Braids</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
