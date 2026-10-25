import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Calendar, Clock, User, Phone, MessageCircle, AlertCircle, ShoppingBag } from 'lucide-react';
import { ALL_SERVICES, SALON_INFO, ServiceItem } from '../data/salonData';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { [id: string]: number };
  onUpdateQty: (serviceId: string, delta: number) => void;
  onRemoveItem: (serviceId: string) => void;
  onClearCart: () => void;
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:00 AM');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  // Calculate items and total
  const cartEntries = Object.entries(cart).filter(([_, qty]) => qty > 0);
  const cartServices: { service: ServiceItem; qty: number }[] = cartEntries
    .map(([id, qty]) => {
      const service = ALL_SERVICES.find((s) => s.id === id);
      return service ? { service, qty } : null;
    })
    .filter((item): item is { service: ServiceItem; qty: number } => item !== null);

  const totalItems = cartServices.reduce((acc, curr) => acc + curr.qty, 0);
  const subtotalAED = cartServices.reduce((acc, curr) => acc + curr.service.priceAED * curr.qty, 0);

  const handleConfirmOnWhatsApp = () => {
    if (cartServices.length === 0) return;

    let itemsText = cartServices
      .map(
        (item) =>
          `• ${item.service.name} (Qty: ${item.qty}) - AED ${item.service.priceAED * item.qty}`
      )
      .join('\n');

    const message = `✨ *APPOINTMENT BOOKING REQUEST*\n*Silky Divas Beauty Salon - Deira Dubai*\n\n` +
      `👤 *Client Name:* ${clientName.trim() || 'Valued Client'}\n` +
      `📱 *Contact:* ${clientPhone.trim() || 'Via WhatsApp'}\n` +
      `📅 *Preferred Date:* ${preferredDate || 'Earliest Available'}\n` +
      `⏰ *Preferred Time:* ${preferredTime}\n\n` +
      `💇‍♀️ *Requested Services (${totalItems}):*\n${itemsText}\n\n` +
      `💰 *Estimated Subtotal:* AED ${subtotalAED} *(Cash Only on Arrival)*\n` +
      (notes.trim() ? `📝 *Client Note / Preferences:* ${notes.trim()}\n\n` : '\n') +
      `📍 *Salon Address:* 18 23rd St, Deira Al Rigga, Dubai (Near Union Metro & Dubai Hospital)\n\n` +
      `Please confirm slot availability. Thank you!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971551618271?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#4A0E6A]/15 animate-in slide-in-from-right duration-300">
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#4A0E6A]/10 bg-[#FBF5FF] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4A0E6A] text-white flex items-center justify-center shadow-md shadow-[#4A0E6A]/20">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#1A0A2E]">
                  WhatsApp Booking Cart
                </h3>
                <p className="text-xs text-[#1A0A2E]/60">
                  {totalItems} {totalItems === 1 ? 'service' : 'services'} selected
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cartServices.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-rose-600 hover:text-rose-800 font-medium px-2 py-1"
                >
                  Clear
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-[#1A0A2E] rounded-full hover:bg-white"
                aria-label="Close Booking Cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartServices.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-[#4A0E6A] flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-[#1A0A2E]">Your Cart is Empty</h4>
                <p className="text-xs text-[#1A0A2E]/65 max-w-xs mx-auto leading-relaxed">
                  Browse our 22 beauty and hair services and click "Add to Booking" to plan your visit with ease.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#4A0E6A] text-white text-xs font-semibold rounded-full shadow-md"
                >
                  Browse 22 Services
                </button>
              </div>
            ) : (
              <>
                {/* List of items */}
                <div className="space-y-3">
                  <span className="text-[11px] font-bold tracking-wider text-[#1A0A2E]/50 uppercase">
                    Selected Treatments
                  </span>
                  {cartServices.map(({ service, qty }) => (
                    <div
                      key={service.id}
                      className="p-3.5 rounded-2xl bg-[#FBF5FF] border border-[#4A0E6A]/10 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-bold text-[#1A0A2E] truncate">
                          {service.name}
                        </h5>
                        <p className="text-xs text-[#4A0E6A] font-medium">
                          AED {service.priceAED} · {service.duration}
                        </p>
                      </div>

                      {/* Qty Steppers */}
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="flex items-center bg-white rounded-lg border border-[#4A0E6A]/15 overflow-hidden">
                          <button
                            onClick={() => onUpdateQty(service.id, -1)}
                            className="p-1.5 hover:bg-purple-50 text-[#1A0A2E] transition-colors"
                            aria-label={`Decrease ${service.name}`}
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-[#1A0A2E] tabular-nums">
                            {qty}
                          </span>
                          <button
                            onClick={() => onUpdateQty(service.id, 1)}
                            className="p-1.5 hover:bg-purple-50 text-[#1A0A2E] transition-colors"
                            aria-label={`Increase ${service.name}`}
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(service.id)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                          aria-label={`Remove ${service.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Booking Inputs */}
                <div className="space-y-4 pt-4 border-t border-[#4A0E6A]/10">
                  <span className="text-[11px] font-bold tracking-wider text-[#1A0A2E]/50 uppercase">
                    Your Appointment Details
                  </span>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A0A2E] mb-1 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#4A0E6A]" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lycia or Aisha"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A0E6A]/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A0A2E] mb-1 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#4A0E6A]" />
                      <span>Contact Phone (Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 50 000 0000"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A0E6A]/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#1A0A2E] mb-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#4A0E6A]" />
                        <span>Date</span>
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A0E6A]/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1A0A2E] mb-1 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#4A0E6A]" />
                        <span>Time Slot</span>
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A0E6A]/20"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1A0A2E] mb-1">
                      Notes / Styling Preferences (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Bringing own extensions, sensitive scalp, nail length..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4A0E6A]/20 resize-none"
                    />
                  </div>

                  {/* Cash Only Banner */}
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-[11px] flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Cash Only Salon:</span> Please note payment is made in cash at the salon upon completion of your appointment.
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer with Subtotal & Action */}
          {cartServices.length > 0 && (
            <div className="p-6 border-t border-[#4A0E6A]/10 bg-[#FBF5FF] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#1A0A2E]/60 block">Estimated Subtotal</span>
                  <span className="text-[11px] text-[#4A0E6A] font-semibold">Cash Only upon service</span>
                </div>
                <span className="font-mono text-2xl font-bold text-[#4A0E6A] tabular-nums">
                  AED {subtotalAED}
                </span>
              </div>

              <button
                onClick={handleConfirmOnWhatsApp}
                className="w-full py-3.5 px-4 bg-[#4A0E6A] hover:bg-[#380952] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#4A0E6A]/25 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Confirm Booking on WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-[#1A0A2E]/50">
                Directly sends your {totalItems} items to +971 55 161 8271
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
