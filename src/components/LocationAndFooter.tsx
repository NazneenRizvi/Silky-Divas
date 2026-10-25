import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ShieldCheck, CheckCircle2, Heart } from 'lucide-react';
import { SALON_INFO, ALL_SERVICES } from '../data/salonData';

export const LocationAndFooter: React.FC = () => {
  return (
    <footer id="location" className="bg-[#1A0A2E] text-white pt-16 lg:pt-24 pb-28 sm:pb-16 relative overflow-hidden">
      {/* Decorative luxury gradient mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4A0E6A]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Visit & Contact Section */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold tracking-[0.2em] text-purple-300 uppercase flex items-center justify-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Visit Our Sanctuary</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Let's Stay Beautiful Together
          </h2>
          <p className="text-sm sm:text-base text-purple-200/80">
            Conveniently located in Deira Al Rigga, Dubai. Step inside for warm hospitality, patient stylists, and impeccable beauty care.
          </p>
        </div>

        {/* Map & Location Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Left: Contact & Location details */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-[20px] p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#4A0E6A] flex items-center justify-center text-white shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">Deira Al Rigga, Dubai</h3>
                  <p className="text-xs text-purple-200">United Arab Emirates</p>
                </div>
              </div>

              {/* Specific Address Details */}
              <div className="space-y-3 text-xs sm:text-sm text-purple-100/90">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Exact Physical Address:</span>
                  </p>
                  <p className="pl-6 text-purple-200 leading-relaxed">
                    18 23rd St - Deira Al Rigga - Dubai
                  </p>
                  <p className="pl-6 text-[11px] text-amber-300 font-medium">
                    Landmarks: Near Al Ghurair Centre, Union Metro Station &amp; Dubai Hospital
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Operating Hours:</span>
                  </p>
                  <p className="pl-6 text-purple-200">
                    10:00 AM – 10:00 PM (Monday to Sunday, Everyday)
                  </p>
                  <p className="pl-6 text-[11px] text-purple-300">
                    Appointments recommended to avoid wait time
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-purple-300 shrink-0" />
                    <span>Salon Amenities &amp; Payment:</span>
                  </p>
                  <ul className="pl-6 space-y-1 text-xs text-purple-200">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Payment: <strong>Cash Only</strong></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Customer Restroom: <strong>Toilet available</strong></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Specialization: <strong>African &amp; Continental hair</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#4A0E6A] hover:bg-[#5C1482] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/15"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {SALON_INFO.whatsappDisplay}</span>
              </a>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/10"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right: Embedded Interactive Map */}
          <div className="lg:col-span-7 rounded-[20px] overflow-hidden border border-white/10 shadow-2xl relative min-h-[380px] bg-[#120520]">
            <iframe
              title="Silky Divas Beauty Salon Location in Deira Al Rigga Dubai"
              src={SALON_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.2] contrast-[1.05]"
            ></iframe>

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-[#1A0A2E]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-xs text-white shadow-lg pointer-events-none">
              <span className="font-bold text-[#D8B4FE]">Silky Divas Beauty Salon</span>
              <p className="text-[11px] text-purple-300">18 23rd St, Deira Al Rigga, Dubai</p>
            </div>
          </div>
        </div>

        {/* 22 Services Quick Directory Links */}
        <div className="pt-8 border-t border-white/10 mb-12">
          <p className="text-xs uppercase font-bold tracking-widest text-purple-300 mb-4">
            All 22 Services Quick Index:
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-purple-200/80">
            {ALL_SERVICES.map((s, idx) => (
              <span key={s.id} className="inline-flex items-center gap-1.5">
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  {s.name}
                </a>
                {idx < ALL_SERVICES.length - 1 && <span className="text-purple-400/40">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Brand */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-purple-300/70">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/IMG_20261025_093435_700_2d1d1ac9.png"
              alt="Silky Divas Logo"
              className="w-8 h-8 rounded-lg object-cover border border-white/20"
            />
            <span className="font-display font-bold text-white text-base">SILKY DIVAS BEAUTY SALON</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span>Deira Al Rigga, Dubai</span>
            <span>·</span>
            <span>Union Metro &amp; Al Ghurair Centre</span>
            <span>·</span>
            <span className="text-amber-300/90 font-medium">Cash Only Salon</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
