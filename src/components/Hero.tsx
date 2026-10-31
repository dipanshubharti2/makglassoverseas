/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative pt-20 lg:pt-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Hero Image with Measured Gradient Scrim for 4.5:1 Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_glass_factory_1793431959968.jpg"
          alt="MAK Glass Overseas manufacturing furnace and automated lehr line in Firozabad"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Deep Slate-to-Dark overlay with warm golden ambient tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-18">
        <div className="max-w-3xl">
          {/* Region & Heritage Subtitle with Gold Accent */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
            <span>Firozabad, Uttar Pradesh · The Glass City of India</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance leading-[1.18] mb-4">
            Premium Glass Products,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
              Manufactured in Firozabad
            </span>{' '}
            and Exported Worldwide.
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl">
            {COMPANY_INFO.subheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md shadow-amber-500/20 transition-all duration-200 min-h-[42px] focus-visible:ring-2 focus-visible:ring-amber-300"
            >
              <span>View Products</span>
              <ArrowDown className="w-4 h-4 text-slate-950" />
            </a>

            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-lg backdrop-blur-xs transition-all duration-200 min-h-[42px] focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <FileText className="w-4 h-4 text-amber-300" />
              <span>Request a Quote</span>
            </button>
          </div>

          {/* Bullet trust tags */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Direct Factory Pricing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>FOB / CIF / EXW Terms</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Custom Tooling & OEM Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip: Moderately sized metrics strip */}
      <div className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            <div className="border-l-2 border-amber-400/60 pl-3.5">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                {COMPANY_INFO.stats.yearsInBusiness}
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Years in Glass Craftsmanship
              </div>
            </div>

            <div className="border-l-2 border-amber-400/60 pl-3.5">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                {COMPANY_INFO.stats.countriesServed}
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Countries Exported To
              </div>
            </div>

            <div className="border-l-2 border-amber-400/60 pl-3.5">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                {COMPANY_INFO.stats.mouldsAvailable}
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Active Product Moulds
              </div>
            </div>

            <div className="border-l-2 border-amber-400/60 pl-3.5">
              <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight tabular-nums">
                100%
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Custom Orders & OEM Accepted
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
