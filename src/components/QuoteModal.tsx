/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, Check, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/companyData.ts';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = '',
}) => {
  const [productCategory, setProductCategory] = useState(
    defaultProduct || 'Glass Bottles'
  );
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync defaultProduct when opened
  useEffect(() => {
    if (defaultProduct) {
      setProductCategory(defaultProduct);
    }
  }, [defaultProduct]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !country) return;
    setSubmitted(true);
  };

  const handleWhatsAppQuote = () => {
    const text = `*QUICK EXPORT QUOTE REQUEST*\n` +
      `Product: ${productCategory}\n` +
      `Quantity: ${quantity || 'Standard container/pallet'}\n` +
      `Destination: ${country || 'International'}\n` +
      `Buyer: ${name || 'Prospective Buyer'} (${company || 'Company'})\n` +
      `Email/Tel: ${email || phone || 'N/A'}\n` +
      `Details: ${message || 'Please send FOB / CIF price quote.'}`;

    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-heading"
          className="relative bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 sm:p-8 z-10 border border-stone-200 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Export Quotation Request Received
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto mb-6">
                Our Firozabad sales engineering desk will review your requirements 
                and send technical specs and FOB/CIF rates within 24 hours.
              </p>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg min-h-[44px] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Connect Instantly on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-800 py-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-black ring-1 ring-amber-400 shrink-0">
                  <img
                    src={COMPANY_INFO.logo}
                    alt="MAK Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                    Fast Response · 24hr Turnaround
                  </div>
                  <h3
                    id="quote-modal-heading"
                    className="text-xl sm:text-2xl font-bold text-slate-900"
                  >
                    Request Factory Quotation
                  </h3>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Product Interest *
                  </label>
                  <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[44px]"
                  >
                    {PRODUCT_CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                    <option value="Custom OEM Tooling Project">Custom OEM Tooling Project</option>
                    <option value="Complete Export Catalog">Complete Export Catalog</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. David Clarke"
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Clarke & Sons Imports"
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Destination Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g. USA, UK, Germany, UAE"
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Estimated Order Quantity
                    </label>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 5,000 pcs or 1x 20ft container"
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[44px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="david@clarkeimports.com"
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 555 019 2834"
                      className="w-full text-xs sm:text-sm px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[44px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Details or Requirements
                  </label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mention preferred glass clarity, cap type, decoration finish, or target delivery port..."
                    className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg min-h-[44px] transition-colors"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Submit Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppQuote}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg min-h-[44px] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span>WhatsApp Quote</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Direct manufacturer quotation · No spam guarantee</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
