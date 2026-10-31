/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Check, MessageSquare, Send, ShieldCheck, Box, Clock, Layers } from 'lucide-react';
import { ProductItem, COMPANY_INFO } from '../data/companyData.ts';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenGlobalQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenGlobalQuote,
}) => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerContact, setBuyerContact] = useState('');
  const [buyerCountry, setBuyerCountry] = useState('');
  const [quantity, setQuantity] = useState('');
  const [userNotes, setUserNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  const handleWhatsAppInquiry = () => {
    const text = `Hello MAK Glass Overseas,\n\nI would like an export quotation for:\n*Product:* ${product.name}\n*Category:* ${product.category}\n*Estimated Quantity:* ${quantity || 'Standard MOQ'}\n*My Country:* ${buyerCountry || 'International'}\n*My Name / Company:* ${buyerName || 'Buyer'}\n\n*Notes:* ${userNotes || 'Please share specification sheet & FOB price.'}`;
    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerContact) return;
    setSubmitted(true);
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
        {/* Modal Dialog */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-stone-200 z-10 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-slate-800 bg-white/90 hover:bg-stone-100 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-xs"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
            {/* Left Column: Image & Quick Specs */}
            <div className="md:col-span-5 bg-stone-50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200">
              <div>
                <div className="rounded-xl overflow-hidden aspect-4/3 bg-stone-200 mb-5 shadow-inner">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
                  {product.category}
                </div>
                <h3
                  id="modal-product-title"
                  className="text-lg font-bold text-slate-900 leading-snug mb-3"
                >
                  {product.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {product.shortDesc}
                </p>

                {/* Quick Info Grid */}
                <div className="space-y-2.5 pt-2 border-t border-stone-200 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <Box className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>MOQ:</strong> {product.moq}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Lead Time:</strong> {product.leadTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Packaging:</strong> {product.packaging}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Compliance:</strong> US FDA & EU LFGB Food Safe</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="mt-6 pt-4 border-t border-stone-200">
                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg min-h-[44px] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Enquire via WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Right Column: Full Specifications & RFQ Form */}
            <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Technical Specifications
                </h4>

                {/* Detailed Specs Table */}
                <div className="border border-stone-200 rounded-lg overflow-hidden mb-6 text-xs sm:text-sm">
                  <table className="w-full divide-y divide-stone-200">
                    <tbody className="divide-y divide-stone-100 bg-white">
                      {product.capacity && (
                        <tr>
                          <td className="px-3.5 py-2.5 font-medium text-slate-500 bg-stone-50 w-1/3">Capacity / Volume</td>
                          <td className="px-3.5 py-2.5 text-slate-900 font-semibold">{product.capacity}</td>
                        </tr>
                      )}
                      {product.dimensions && (
                        <tr>
                          <td className="px-3.5 py-2.5 font-medium text-slate-500 bg-stone-50">Dimensions</td>
                          <td className="px-3.5 py-2.5 text-slate-900">{product.dimensions}</td>
                        </tr>
                      )}
                      {product.neckFinish && (
                        <tr>
                          <td className="px-3.5 py-2.5 font-medium text-slate-500 bg-stone-50">Neck / Mouth Finish</td>
                          <td className="px-3.5 py-2.5 text-slate-900">{product.neckFinish}</td>
                        </tr>
                      )}
                      <tr>
                        <td className="px-3.5 py-2.5 font-medium text-slate-500 bg-stone-50">Glass Formulation</td>
                        <td className="px-3.5 py-2.5 text-slate-900">{product.glassType}</td>
                      </tr>
                      <tr>
                        <td className="px-3.5 py-2.5 font-medium text-slate-500 bg-stone-50">Available Finishes</td>
                        <td className="px-3.5 py-2.5 text-slate-900">
                          <div className="flex flex-wrap gap-1.5">
                            {product.colors.map((c) => (
                              <span key={c} className="text-slate-700 bg-stone-100 px-2 py-0.5 rounded text-xs font-medium">
                                {c}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3.5 py-2.5 font-medium text-slate-500 bg-stone-50">Applications</td>
                        <td className="px-3.5 py-2.5 text-slate-900">
                          {product.applications.join(', ')}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Features Checklist */}
                <div className="mb-6">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Advantages
                  </h5>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                    {product.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instant RFQ Form Box */}
                <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    Request an Export Quotation
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Direct factory FOB / CIF pricing for {product.name}.
                  </p>

                  {submitted ? (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-2">
                        <Check className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-bold text-emerald-900">
                        Inquiry Received!
                      </div>
                      <p className="text-xs text-emerald-700 mt-1">
                        Our export team will prepare a formal proforma quote and contact you within 24 hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-3 text-xs font-semibold text-emerald-800 underline"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Your Name / Company
                          </label>
                          <input
                            type="text"
                            value={buyerName}
                            onChange={(e) => setBuyerName(e.target.value)}
                            placeholder="e.g. John Doe / Apex Imports"
                            className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Email or WhatsApp *
                          </label>
                          <input
                            type="text"
                            required
                            value={buyerContact}
                            onChange={(e) => setBuyerContact(e.target.value)}
                            placeholder="email@company.com or phone"
                            className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Destination Country
                          </label>
                          <input
                            type="text"
                            value={buyerCountry}
                            onChange={(e) => setBuyerCountry(e.target.value)}
                            placeholder="e.g. USA, UK, UAE, Australia"
                            className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Order Quantity (Units/Containers)
                          </label>
                          <input
                            type="text"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="e.g. 10,000 pcs or 1x 20ft FCL"
                            className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Custom Specifications or Port Requirement
                        </label>
                        <textarea
                          rows={2}
                          value={userNotes}
                          onChange={(e) => setUserNotes(e.target.value)}
                          placeholder="Mention custom colour spray, logo embossing, cap fitment, or target CIF port..."
                          className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 pt-1">
                        <button
                          type="submit"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg min-h-[44px] shadow-xs transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Formal RFQ</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleWhatsAppInquiry}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg min-h-[44px] transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                          <span>WhatsApp RFQ</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
