import React from 'react';
import { MessageCircle, ShoppingBag, MapPin, Clock, Menu, X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#4A0E6A]/10 transition-all">
      {/* Announcement Bar */}
      <div className="bg-[#4A0E6A] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="font-medium tracking-wide">
              Appointments Recommended · 10:00 AM – 10:00 PM Daily · Deira Al Rigga, Dubai
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 shrink-0 text-purple-200">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Open Everyday</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Near Union Metro &amp; Dubai Hospital</span>
            </span>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-white font-medium flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{SALON_INFO.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar (3-Zone Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Official Emblem */}
        <a href="#" className="flex items-center gap-3 shrink-0 group">
          <div className="h-12 w-12 overflow-hidden rounded-xl border border-[#4A0E6A]/20 shadow-md shadow-[#4A0E6A]/10 group-hover:scale-105 transition-transform bg-[#4A0E6A] flex items-center justify-center p-0.5">
            <img
              src="/assets/aistudio/IMG_20261025_093435_700_2d1d1ac9.png"
              alt="Silky Divas Beauty Salon Official Logo"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div>
            <span className="block font-display text-xl sm:text-2xl font-bold tracking-wider text-[#4A0E6A] uppercase leading-none">
              Silky Divas
            </span>
            <span className="block text-[10px] tracking-[0.25em] text-[#1A0A2E]/70 font-semibold uppercase mt-0.5">
              Beauty Salon
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1A0A2E]/80">
          <a href="#services" className="hover:text-[#4A0E6A] transition-colors whitespace-nowrap">
            22 Services
          </a>
          <a href="#featured" className="hover:text-[#4A0E6A] transition-colors whitespace-nowrap">
            Featured
          </a>
          <a href="#about" className="hover:text-[#4A0E6A] transition-colors whitespace-nowrap">
            Our Story
          </a>
          <a href="#why-us" className="hover:text-[#4A0E6A] transition-colors whitespace-nowrap">
            Why Us
          </a>
          <a href="#gallery" className="hover:text-[#4A0E6A] transition-colors whitespace-nowrap">
            Gallery
          </a>
          <a href="#testimonials" className="hover:text-[#4A0E6A] transition-colors whitespace-nowrap">
            Reviews
          </a>
          <a href="#location" className="hover:text-[#4A0E6A] transition-colors whitespace-nowrap">
            Location
          </a>
        </nav>

        {/* Zone 3: Actions (Cart & WhatsApp) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label="Open Booking Cart"
            className="relative p-2.5 rounded-full text-[#4A0E6A] bg-[#FBF5FF] hover:bg-[#F3E8FF] border border-[#4A0E6A]/15 transition-all flex items-center justify-center"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#4A0E6A] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          <a
            href={SALON_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#4A0E6A] hover:bg-[#3B0A55] rounded-full transition-all shadow-md shadow-[#4A0E6A]/20 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Book on WhatsApp</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-[#1A0A2E] hover:text-[#4A0E6A]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#4A0E6A]/10 px-6 py-5 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A0A2E] hover:text-[#4A0E6A]"
          >
            All 22 Services
          </a>
          <a
            href="#featured"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A0A2E] hover:text-[#4A0E6A]"
          >
            Featured Collections
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A0A2E] hover:text-[#4A0E6A]"
          >
            Our Story &amp; Philosophy
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A0A2E] hover:text-[#4A0E6A]"
          >
            Why Choose Silky Divas
          </a>
          <a
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A0A2E] hover:text-[#4A0E6A]"
          >
            Salon Gallery
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A0A2E] hover:text-[#4A0E6A]"
          >
            Client Reviews
          </a>
          <a
            href="#location"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-[#1A0A2E] hover:text-[#4A0E6A]"
          >
            Location &amp; Hours
          </a>

          <div className="pt-3 border-t border-purple-100 flex flex-col gap-2">
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-[#4A0E6A] text-white text-sm font-semibold rounded-xl shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp (+971 55 161 8271)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
