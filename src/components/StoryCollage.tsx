import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const StoryCollage: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white/60 border-y border-[#4A0E6A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-bold tracking-[0.2em] text-[#4A0E6A] uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story &amp; Philosophy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A0A2E] leading-tight text-balance">
              More Than Beauty, <br />
              <span className="italic text-[#4A0E6A]">A Patient Royal Touch</span>
            </h2>

            <p className="text-base text-[#1A0A2E]/75 leading-relaxed">
              Silky Divas Beauty Salon was created with a heartfelt belief: beauty services should never
              be rushed. Located in the heart of Deira Al Rigga, Dubai, our salon is a haven where
              every client is treated with dignity, attentive listening, and gentle technique.
            </p>

            <p className="text-base text-[#1A0A2E]/75 leading-relaxed">
              Whether you are particular about your braiding tension, desiring flawless Ghana lines,
              seeking elegant acrylic nail extensions, or yearning for a calming facial and head massage—our
              pleasant and patient stylists take pride in consistently reliable results that last.
            </p>

            <div className="pt-2">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A0E6A] hover:text-[#380A52] group"
              >
                <span>Consult Our Stylists on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Visual Collage (Inspired by Luméa 4-card editorial campaign grid) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {/* Image 1: Braids & Cornrows */}
              <div className="luxury-card overflow-hidden p-2 group">
                <div className="relative aspect-square overflow-hidden rounded-[14px]">
                  <img
                    src="/src/assets/images/salon_braids_ghana_lines_1792901713057.jpg"
                    alt="Neat Ghana lines and braiding craftsmanship"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-semibold text-[#1A0A2E]">Gentle Braiding</p>
                  <p className="text-[11px] text-[#4A0E6A]">Patience &amp; Precision</p>
                </div>
              </div>

              {/* Image 2: Acrylics & Nails */}
              <div className="luxury-card overflow-hidden p-2 group">
                <div className="relative aspect-square overflow-hidden rounded-[14px]">
                  <img
                    src="/src/assets/images/salon_acrylic_nails_1792901713957.jpg"
                    alt="Acrylic nails with elegant artistry"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-semibold text-[#1A0A2E]">Sculpted Nails</p>
                  <p className="text-[11px] text-[#4A0E6A]">Acrylics &amp; Gel Care</p>
                </div>
              </div>

              {/* Image 3: Spa Facial */}
              <div className="luxury-card overflow-hidden p-2 group col-span-2 sm:col-span-1">
                <div className="relative aspect-square overflow-hidden rounded-[14px]">
                  <img
                    src="/src/assets/images/salon_facial_massage_1792901714522.jpg"
                    alt="Facial treatments and therapeutic head massage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-xs font-semibold text-[#1A0A2E]">Rejuvenating Spa</p>
                  <p className="text-[11px] text-[#4A0E6A]">Facials &amp; Massage</p>
                </div>
              </div>
            </div>

            {/* Quick Banner Below Collage */}
            <div className="mt-4 p-4 rounded-[20px] bg-[#4A0E6A] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-[#4A0E6A]/15">
              <div className="text-center sm:text-left">
                <p className="font-display text-lg font-medium">Ready for your transformation?</p>
                <p className="text-xs text-purple-200">Appointments recommended · Cash only salon</p>
              </div>
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 bg-white text-[#4A0E6A] text-xs font-bold rounded-full hover:bg-purple-50 transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat Directly: +971 55 161 8271</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
