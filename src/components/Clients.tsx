/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { CLIENT_PARTNERS, TESTIMONIALS_LIST } from '../data/companyData.ts';

export const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-14 lg:py-18 bg-stone-50/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-amber-700 text-xs font-bold tracking-wider uppercase mb-1.5">
            Our Clients & Partners
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Trusted by Brands & Importers Worldwide
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Directly manufacturing and supplying glassware for leading beverage houses, luxury fragrance labels, and retail distributors across 42+ countries.
          </p>
        </div>

        {/* Clients Grid - Compact presentation with small logos & names */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {CLIENT_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="group bg-white p-3 rounded-xl border border-stone-200 shadow-xs hover:border-amber-400/80 hover:shadow-sm transition-all duration-200 flex flex-col items-center text-center"
              >
                {/* Compact client logo */}
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-slate-950 ring-1 ring-amber-400/40 p-1 flex items-center justify-center shrink-0 mb-2 group-hover:scale-105 transition-transform">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Company Name */}
                <div className="text-xs font-bold text-slate-900 leading-tight mb-0.5 line-clamp-1">
                  {partner.name}
                </div>

                {/* Subtext Category & Country */}
                <div className="text-[10px] text-amber-800 font-medium leading-tight">
                  {partner.category}
                </div>
                <div className="text-[10px] text-slate-400 mt-0.5">
                  {partner.country}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Feedback - Compact, proportional cards (not bulky) */}
        <div>
          <div className="max-w-2xl mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Client Feedback
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {TESTIMONIALS_LIST.map((t) => (
              <div
                key={t.id}
                className="bg-white p-4 sm:p-5 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between hover:border-amber-300 hover:shadow-sm transition-all duration-200"
              >
                <div>
                  {/* Star Rating & Quote Icon row */}
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <Quote className="w-4 h-4 text-amber-600/30" />
                  </div>

                  {/* Compact Feedback Quote */}
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed italic mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center gap-2.5">
                  {/* Compact Avatar */}
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-stone-200 ring-1 ring-amber-400/50 shrink-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="text-xs font-bold text-slate-900 leading-tight truncate">
                      {t.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium truncate">
                      {t.role} · {t.company}
                    </div>
                    <div className="text-[10px] text-amber-700 mt-0.5">
                      {t.country}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
