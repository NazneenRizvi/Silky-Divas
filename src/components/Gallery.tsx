import React, { useState } from 'react';
import { Sparkles, Maximize2, X, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, SALON_INFO } from '../data/salonData';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#FBF5FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold tracking-[0.2em] text-[#4A0E6A] uppercase flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Salon Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A0A2E]">
            Artistry In Every Detail
          </h2>
          <p className="text-sm sm:text-base text-[#1A0A2E]/70">
            A glimpse into the intricate craftsmanship, soothing sanctuary, and signature transformations at Silky Divas.
          </p>
        </div>

        {/* 6 Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="luxury-card overflow-hidden group cursor-pointer relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-purple-100">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A2E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-purple-200">
                      {item.category}
                    </span>
                    <h4 className="font-display text-lg font-bold">{item.title}</h4>
                  </div>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-md text-[#4A0E6A] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-semibold text-[#1A0A2E]">{item.title}</h4>
                  <span className="text-[#4A0E6A] text-[11px] font-medium">{item.category}</span>
                </div>
                <span className="text-slate-400 group-hover:text-[#4A0E6A] transition-colors font-medium">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-[20px] overflow-hidden max-w-2xl w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white">
                <div>
                  <span className="text-xs font-bold text-[#4A0E6A] uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#1A0A2E]">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-[#1A0A2E]/65 mt-0.5">{selectedImage.alt}</p>
                </div>

                <a
                  href={`https://wa.me/971551618271?text=${encodeURIComponent(
                    `Hello Silky Divas, I saw "${selectedImage.title}" in your gallery and would love to book this style!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#4A0E6A] hover:bg-[#390A53] text-white text-xs font-semibold rounded-full flex items-center gap-2 whitespace-nowrap shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Book This Look</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
