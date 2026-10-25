import React from 'react';
import { HeartHandshake, ShieldCheck, MapPin, Sparkles, Clock, Bath, Banknote, Scissors } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const WhyUs: React.FC = () => {
  const highlights = [
    {
      icon: HeartHandshake,
      title: "Pleasant & Patient Staff",
      desc: "We never rush. Whether you are picky about your parting or tender-headed, our stylists listen attentively to make you completely comfortable."
    },
    {
      icon: Scissors,
      title: "Consistently Reliable Hair Styling",
      desc: "Proven excellence across braids, Ghana lines, Senegalese twists, crochet, keratin, and rebounding that stay neat and durable for weeks."
    },
    {
      icon: Sparkles,
      title: "African & Continental Mastery",
      desc: "Specialized knowledge in textured, afro, relaxed, and natural hair textures with protective techniques that safeguard your hairline."
    },
    {
      icon: MapPin,
      title: "Prime Deira Al Rigga Location",
      desc: "Conveniently situated at 18 23rd St, walking distance to Union Metro station, Al Ghurair Centre, and close to Dubai Hospital."
    },
    {
      icon: Banknote,
      title: "Cash Only Transparency",
      desc: "Straightforward, honest salon rates with no hidden processing fees or credit card surcharges. Exact quotes confirmed on WhatsApp."
    },
    {
      icon: Bath,
      title: "Clean Salon & Customer Toilet",
      desc: "Hygienic, serene atmosphere designed for your multi-hour appointments with a dedicated clean private customer restroom on-site."
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold tracking-[0.2em] text-[#4A0E6A] uppercase flex items-center justify-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Choose Silky Divas</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A0A2E]">
            A Dignified Beauty Experience
          </h2>
          <p className="text-sm sm:text-base text-[#1A0A2E]/70">
            Every detail of our Deira salon is thoughtfully tailored for your relaxation, peace of mind, and radiant outcome.
          </p>
        </div>

        {/* 6 Icons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="luxury-card p-7 flex flex-col justify-between group hover:border-[#4A0E6A]/30"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FBF5FF] border border-[#4A0E6A]/15 flex items-center justify-center text-[#4A0E6A] group-hover:bg-[#4A0E6A] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1A0A2E] mt-5 group-hover:text-[#4A0E6A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#1A0A2E]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#4A0E6A]/10 flex items-center justify-between text-xs font-medium text-[#4A0E6A]">
                  <span>0{idx + 1} Benefit</span>
                  <span>Silky Divas Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick hours / appointment callout strip */}
        <div className="mt-12 p-6 rounded-[20px] bg-[#FBF5FF] border border-[#4A0E6A]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#4A0E6A]/10 flex items-center justify-center text-[#4A0E6A] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1A0A2E]">Open Daily: 10:00 AM – 10:00 PM</p>
              <p className="text-xs text-[#1A0A2E]/65">
                Appointments recommended to avoid waiting · Walk-ins accommodated based on stylist availability
              </p>
            </div>
          </div>
          <a
            href={SALON_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#4A0E6A] hover:bg-[#390A53] text-white text-xs font-bold rounded-full transition-colors whitespace-nowrap shadow-sm"
          >
            Check Availability on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
