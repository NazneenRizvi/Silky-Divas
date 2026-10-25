/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StoryCollage } from './components/StoryCollage';
import { FeaturedCards } from './components/FeaturedCards';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { LocationAndFooter } from './components/LocationAndFooter';
import { BookingDrawer } from './components/BookingDrawer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ServiceItem } from './data/salonData';

export default function App() {
  const [cart, setCart] = useState<{ [serviceId: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Add or increment item
  const handleAddToCart = (service: ServiceItem) => {
    setCart((prev) => {
      const current = prev[service.id] || 0;
      return { ...prev, [service.id]: current + 1 };
    });
    // Open drawer to give instant feedback
    setIsCartOpen(true);
  };

  // Adjust item quantity
  const handleUpdateQty = (serviceId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[serviceId] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[serviceId];
        return copy;
      }
      return { ...prev, [serviceId]: next };
    });
  };

  // Remove single item
  const handleRemoveItem = (serviceId: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[serviceId];
      return copy;
    });
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCart({});
  };

  // Total item count
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  // Jump to services grid when user clicks on a category
  const handleSelectCategory = (category: string) => {
    setActiveCategory(category);
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF5FF] text-[#1A0A2E] flex flex-col font-sans selection:bg-[#4A0E6A] selection:text-white">
      {/* 1. Header with announcement bar & top navigation */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onExploreClick={handleScrollToServices} />

        {/* 3. Luméa Reference Layout: Our Story & Craftsmanship Collage */}
        <StoryCollage />

        {/* 4. Featured Collections (4 Cards) */}
        <FeaturedCards onSelectCategory={handleSelectCategory} />

        {/* 5. Complete 22 Services Grid */}
        <ServicesGrid
          cart={cart}
          onAddToCart={handleAddToCart}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* 6. Why Choose Us (6 Icons & Highlights) */}
        <WhyUs />

        {/* 7. Gallery (6 Images with Lightbox) */}
        <Gallery />

        {/* 8. Testimonials (Lycia Padey 5-Star Main Review) */}
        <Testimonials />
      </main>

      {/* 9. Location & Footer with Google Maps Embed */}
      <LocationAndFooter />

      {/* 10. Slide-over WhatsApp Booking Drawer (Cart) */}
      <BookingDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* 11. Mobile Sticky Booking Bar */}
      <MobileStickyBar
        cartCount={cartCount}
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
