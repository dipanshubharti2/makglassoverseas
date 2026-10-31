/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/companyData.ts';

interface ContactProps {
  initialProduct?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    productInterest: initialProduct || 'Glass Bottles',
    quantity: '',
    incoterm: 'FOB',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateReferenceId = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `MGO-${new Date().getFullYear()}-${rand}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.country) return;

    const ref = generateReferenceId();
    setReferenceId(ref);
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `*NEW B2B EXPORT ENQUIRY*\n` +
      `--------------------------------\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Company:* ${formData.company || 'Not provided'}\n` +
      `*Country:* ${formData.country || 'International'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Phone/WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `*Product Interest:* ${formData.productInterest}\n` +
      `*Estimated Quantity:* ${formData.quantity || 'Standard MOQ'}\n` +
      `*Incoterm:* ${formData.incoterm}\n` +
      `*Message:* ${formData.message || 'Please provide quotation & technical catalog.'}\n` +
      `--------------------------------\n` +
      `Sent via MAK Glass Overseas Web Portal`;

    window.open(
      `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="py-14 lg:py-18 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-amber-700 text-xs font-bold tracking-wider uppercase mb-1.5">
            Direct Factory Connect
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Request an Export Quotation or Talk to Our Works
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Our international trade desk responds within 24 business hours with detailed proforma invoices, 
            technical drawings, and packaging specifications.
          </p>
        </div>

        {/* 2-Column Split: Enquiry Form & Company Details / Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Compact B2B RFQ Form */}
          <div className="lg:col-span-7 bg-stone-50/80 p-5 sm:p-6 lg:p-7 rounded-xl border border-stone-200 shadow-xs">
            {submitted ? (
              <div className="text-center py-8 px-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Enquiry Successfully Logged!
                </h3>
                <div className="inline-block px-2.5 py-0.5 bg-stone-200 text-slate-800 text-[11px] font-mono font-semibold rounded mb-3">
                  Reference: {referenceId}
                </div>
                <p className="text-slate-600 text-xs max-w-md mx-auto mb-5">
                  Thank you for contacting MAK Glass Overseas. Our export manager will review 
                  your request and email a formal quotation along with sample availability.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg min-h-[40px] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Send to WhatsApp Desk</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        country: '',
                        email: '',
                        phone: '',
                        productInterest: 'Glass Bottles',
                        quantity: '',
                        incoterm: 'FOB',
                        message: '',
                      });
                    }}
                    className="px-3.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 min-h-[40px]"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="border-b border-stone-200 pb-3 mb-2">
                  <h3 className="text-base font-bold text-slate-900">
                    B2B Export Enquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill in your project requirements for direct ex-factory FOB or CIF pricing.
                  </p>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Henderson"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[38px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Henderson Beverages"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[38px]"
                    />
                  </div>
                </div>

                {/* Country & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Destination Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. United Kingdom"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[38px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="buyer@company.com"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[38px]"
                    />
                  </div>
                </div>

                {/* Phone/WhatsApp & Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+44 7911 123456"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[38px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 5,000 pcs or 1x 20ft FCL"
                      className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[38px]"
                    />
                  </div>
                </div>

                {/* Product Interest & Incoterm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Product Category
                    </label>
                    <select
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[38px]"
                    >
                      {PRODUCT_CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                      <option value="Custom OEM Tooling">Custom OEM Tooling & Moulds</option>
                      <option value="General Catalogue">General Export Catalogue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Incoterm
                    </label>
                    <select
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleChange}
                      className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[38px]"
                    >
                      <option value="FOB">FOB (Nhava Sheva / Mundra Port)</option>
                      <option value="CIF">CIF (To Your Destination Seaport)</option>
                      <option value="EXW">EXW (Firozabad Factory Works)</option>
                      <option value="Air Freight">Air Freight (IGI Airport Delhi)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specifications or Message
                  </label>
                  <textarea
                    rows={2}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mention preferred capacity, color finish, neck closure, or target port..."
                    className="w-full text-xs px-3 py-2 rounded-lg border border-stone-300 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[64px]"
                  />
                </div>

                {/* Actions */}
                <div className="pt-1.5 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg min-h-[42px] shadow-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-slate-950" />
                    <span>Submit Export Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 rounded-lg min-h-[42px] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                    <span>WhatsApp Desk</span>
                  </button>
                </div>

                <div className="text-[10px] text-slate-500 pt-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-amber-600 shrink-0" />
                  <span>Direct manufacturer quotation · Confidentiality assured.</span>
                </div>
              </form>
            )}
          </div>

          {/* Column 2: Direct Contact Details & Compact Google Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.whatsappPrefillText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-xs min-h-[42px] shadow-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-slate-950 hover:bg-slate-900 text-white rounded-lg font-semibold text-xs min-h-[42px] shadow-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Factory Desk</span>
              </a>
            </div>

            {/* Address & Works Card - Compact */}
            <div className="p-4 sm:p-5 bg-stone-50/80 rounded-xl border border-stone-200 space-y-3 text-xs">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Factory Works & Headquarters
              </h3>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">{COMPANY_INFO.name}</div>
                  <div className="text-slate-600">{COMPANY_INFO.addressLine1}</div>
                  <div className="text-slate-600">{COMPANY_INFO.addressLine2}</div>
                  <div className="text-slate-600">
                    {COMPANY_INFO.city}, {COMPANY_INFO.state} - {COMPANY_INFO.pincode}, {COMPANY_INFO.country}
                  </div>
                  <div className="text-amber-800 font-medium text-[11px] mt-0.5">
                    (Adjacent to Agra-Lucknow Expressway / 40 km from Taj City Agra)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-stone-200">
                <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Direct Telephone / Mobile</div>
                  <div className="text-slate-600">
                    <a href={`tel:${COMPANY_INFO.phone.replace(/[^+\d]/g, '')}`} className="hover:text-amber-700 font-medium">
                      {COMPANY_INFO.phoneDisplay}
                    </a>{' '}
                    / {COMPANY_INFO.altPhone}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-stone-200">
                <Mail className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Export Desk Email</div>
                  <div className="text-slate-600">
                    <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="hover:text-amber-700 font-medium">
                      {COMPANY_INFO.salesEmail}
                    </a>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    <a href={`mailto:${COMPANY_INFO.infoEmail}`} className="hover:text-amber-700">
                      {COMPANY_INFO.infoEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-stone-200">
                <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-900">Operating Hours</div>
                  <div className="text-slate-600">{COMPANY_INFO.businessHours}</div>
                  <div className="text-slate-500 text-[10px] mt-0.5">{COMPANY_INFO.sundayHours}</div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map with Exact Pinpoint - Compact */}
            <div className="rounded-xl overflow-hidden border border-stone-200 bg-stone-100 relative shadow-xs">
              <div className="p-3 bg-white border-b border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs">
                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>MAK GLASS OVERSEAS · Works Location</span>
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Industrial Area, Firozabad, UP 283203 ({COMPANY_INFO.coordinates})
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <a
                    href={COMPANY_INFO.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded text-[11px] font-semibold transition-colors shrink-0"
                  >
                    <span>View Location</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>
              <iframe
                title="MAK Glass Overseas Exact Works Location Map"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="190"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
