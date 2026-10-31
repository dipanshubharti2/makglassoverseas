/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

export const FloatingActions: React.FC = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappPrefillText
  )}`;
  const phoneUrl = `tel:${COMPANY_INFO.phone.replace(/[^+\d]/g, '')}`;

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button (Bottom Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          aria-label="Chat with MAK Glass Overseas on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <MessageSquare className="w-4 h-4 fill-white" />
          </div>
          <div className="text-left">
            <div className="text-xs font-semibold leading-none">WhatsApp Trade Desk</div>
            <div className="text-[10px] text-emerald-100 font-normal leading-tight mt-0.5">Online for Export Inquiries</div>
          </div>
        </a>
      </div>

      {/* Mobile Fixed Bottom Action Bar (Adheres to <15% viewport height cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg">
        <div className="grid grid-cols-2 gap-2">
          {/* Click to Call */}
          <a
            href={phoneUrl}
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-900 active:bg-slate-800 text-white rounded-lg text-xs font-semibold min-h-[44px] transition-colors"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>Call Factory</span>
          </a>

          {/* Direct WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 active:bg-emerald-700 text-white rounded-lg text-xs font-semibold min-h-[44px] transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </>
  );
};
