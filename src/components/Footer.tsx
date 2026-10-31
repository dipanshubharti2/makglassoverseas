/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Globe } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/companyData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Description (Col 1-4) with Official Gold Logo */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 text-white mb-4">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-black ring-1.5 ring-amber-400/80 shadow-md flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_INFO.logo}
                  alt="MAK Glass Overseas Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-base font-extrabold tracking-tight text-white block">
                  MAK GLASS <span className="text-amber-400">OVERSEAS</span>
                </span>
                <span className="text-[10px] text-amber-200/70 tracking-widest uppercase font-medium">
                  The Glass City of India
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed mb-6 max-w-sm">
              Premier manufacturer and worldwide exporter of high-grade glass bottles, 
              cosmetic jars, candle containers, and bespoke OEM glassware based in Firozabad, India.
            </p>

            {/* B2B Export Credentials */}
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>DGFT IEC Registered Export House</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>ISO 9001:2015 Process Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>FOB Mundra & Nhava Sheva (JNPT)</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 5-6) - Removed Export & Quality */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About Heritage
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-300 transition-colors">
                  Products Catalog
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-amber-300 transition-colors">
                  Global Clients
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Factory Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-300 transition-colors">
                  Contact & RFQ
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories (Col 7-9) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
              Product Categories
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PRODUCT_CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                <li key={cat}>
                  <a
                    href="#products"
                    className="hover:text-amber-300 transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#products"
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  Custom OEM Mould Development &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
              Factory & Export Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-normal">
                  {COMPANY_INFO.addressLine1}, {COMPANY_INFO.addressLine2}, {COMPANY_INFO.city}, {COMPANY_INFO.state} {COMPANY_INFO.pincode}, {COMPANY_INFO.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white text-slate-300 font-medium">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.salesEmail}`} className="hover:text-white text-slate-300 font-medium">
                  {COMPANY_INFO.salesEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300">
                  Port Dispatch: JNPT & Mundra Seaports
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 {COMPANY_INFO.name}. All Rights Reserved. Manufactured in Firozabad, Uttar Pradesh, India.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
