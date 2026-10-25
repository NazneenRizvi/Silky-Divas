import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { SALON_INFO, ALL_SERVICES } from '../data/salonData';

interface MobileStickyBarProps {
  cartCount: number;
  cart: { [id: string]: number };
  onOpenCart: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  cartCount,
  cart,
  onOpenCart
}) => {
  const subtotalAED = Object.entries(cart).reduce((sum, [id, qty]) => {
    const s = ALL_SERVICES.find((item) => item.id === id);
    return s ? sum + s.priceAED * qty : sum;
  }, 0);

  return (
    <aside aria-label="Mobile quick actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#4A0E6A]/15 px-4 py-2.5 shadow-2xl safe-area-pb">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Cart button / view */}
        <button
          onClick={onOpenCart}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#FBF5FF] text-[#4A0E6A] rounded-xl border border-[#4A0E6A]/20 font-semibold text-xs transition-colors"
        >
          <div className="relative">
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#4A0E6A] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span className="truncate">
            {cartCount > 0 ? `Cart: AED ${subtotalAED}` : 'View Cart (0)'}
          </span>
        </button>

        {/* WhatsApp Book Now */}
        <a
          href={SALON_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#4A0E6A] text-white rounded-xl font-bold text-xs shadow-md shadow-[#4A0E6A]/25 whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>Book on WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
