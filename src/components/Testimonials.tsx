import React from 'react';
import { Star, Quote, CheckCircle2, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/salonData';

export const Testimonials: React.FC = () => {
  const mainReview = TESTIMONIALS.find((t) => t.isMain) || TESTIMONIALS[0];
  const otherReviews = TESTIMONIALS.filter((t) => !t.isMain);

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold tracking-[0.2em] text-[#4A0E6A] uppercase flex items-center justify-center gap-2">
            <Heart className="w-3.5 h-3.5 fill-[#4A0E6A]" />
            <span>Real Customer Reviews</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A0A2E]">
            What Our Divas Say
          </h2>
          <p className="text-sm sm:text-base text-[#1A0A2E]/70">
            Unfiltered feedback from valued clients in Deira Dubai who trust our gentle patience and consistent hair styling.
          </p>
        </div>

        {/* Featured Main Review (Lycia Padey) */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="luxury-card p-8 sm:p-10 border-2 border-[#4A0E6A]/20 bg-gradient-to-br from-white via-[#FBF5FF] to-white relative shadow-xl">
            <Quote className="w-12 h-12 text-[#4A0E6A]/15 absolute top-6 right-6" />

            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-13 h-13 rounded-full bg-[#4A0E6A] text-white font-bold flex items-center justify-center text-lg shadow-md shadow-[#4A0E6A]/20">
                  {mainReview.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl font-bold text-[#1A0A2E]">
                      {mainReview.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Google Review
                    </span>
                  </div>
                  <p className="text-xs text-[#1A0A2E]/60">{mainReview.timeAgo}</p>
                </div>
              </div>

              {/* 5-star badge */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(mainReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>

            {/* Review body */}
            <blockquote className="text-lg sm:text-xl text-[#1A0A2E] leading-relaxed italic font-serif">
              "{mainReview.review}"
            </blockquote>

            {/* Service & owner acknowledgement */}
            <div className="mt-6 pt-5 border-t border-[#4A0E6A]/10 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#1A0A2E]/60 uppercase tracking-wider text-[11px]">
                  Service Booked:
                </span>
                <span className="px-3 py-1 rounded-full bg-[#4A0E6A] text-white font-semibold">
                  {mainReview.service}
                </span>
              </div>
              <div className="text-[#4A0E6A] font-medium flex items-center gap-1">
                <span>Recognized for: Pleasant &amp; Patient Staff</span>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherReviews.map((rev) => (
            <div
              key={rev.id}
              className="luxury-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-purple-100 text-[#4A0E6A] font-bold flex items-center justify-center text-sm">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-[#1A0A2E]">{rev.name}</h4>
                      <p className="text-[11px] text-[#1A0A2E]/50">{rev.timeAgo}</p>
                    </div>
                  </div>
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#1A0A2E]/75 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#4A0E6A]/10 text-[11px] text-[#4A0E6A] font-semibold">
                Service: {rev.service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
