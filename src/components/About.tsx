/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Factory, Globe2, Sparkles, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData.ts';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Factory,
      title: 'Direct Furnace Manufacturer',
      description: 'In-house continuous regenerative glass furnaces operating at 1,550°C for high molten purity without broker fees.',
    },
    {
      icon: Globe2,
      title: 'Global Export Infrastructure',
      description: 'Regular container exports to 42+ countries with logistics via Mundra and Nhava Sheva (JNPT) seaports.',
    },
    {
      icon: Sparkles,
      title: 'Custom OEM & Tooling',
      description: 'Dedicated mould workshop for bespoke shape engineering, brand embossing, frosted finishes, and decals.',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Quality Checked',
      description: 'Polariscope stress analysis, thermal shock testing (ΔT ≥ 42°C), and laser wall thickness inspection.',
    },
  ];

  return (
    <section id="about" className="py-14 lg:py-18 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-amber-700 text-xs font-bold tracking-wider uppercase mb-1.5">
            Heritage & Industrial Capability
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Forged in the Glass City of India, Engineered for Global Standards.
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Firozabad has been India&apos;s celebrated center of glassmaking for over two centuries. 
            At <strong className="text-slate-900 font-semibold">{COMPANY_INFO.name}</strong>, we unite this centuries-old 
            artisan heritage with automated regenerative furnace technology, providing international beverage brands, 
            luxury perfumers, and home fragrance houses with export-grade glassware.
          </p>
        </div>

        {/* 2-Column Split: Visual Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6">
          {/* Left Column: Factory & Artisan Photo with Quality Tag */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-sm border border-stone-200 bg-stone-100 aspect-[4/3]">
              <img
                src="/src/assets/images/about_glass_craft_1793431962373.jpg"
                alt="Master glassmaker inspecting a hand-blown glass vessel in Firozabad factory"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">Firozabad Manufacturing Facility</div>
                  <div className="text-[10px] text-amber-200/80">Continuous melting furnace & annealing lehrs</div>
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden bg-black ring-1 ring-amber-400 shrink-0">
                  <img
                    src={COMPANY_INFO.logo}
                    alt="MAK emblem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Compact Floating Trust Card */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-4 sm:-right-4 bg-slate-950 text-white p-3.5 rounded-lg shadow-lg border border-amber-400/30 max-w-[210px]">
              <div className="text-xl font-bold text-amber-400 tabular-nums">2.5M+ Units</div>
              <div className="text-[11px] text-slate-300 mt-0.5 leading-tight">
                Monthly container production capacity across bottles & jars.
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Compact Highlights */}
          <div className="lg:col-span-7 lg:pl-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  Our Mission & Manufacturing Vision
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  To provide domestic and international B2B buyers with uncompromising glass container quality, 
                  competitive direct-from-furnace pricing, and flawless export packaging that elevates your brand on global shelves.
                </p>
              </div>

              {/* Key Highlights Grid - Compact boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-3 rounded-lg border border-stone-200 bg-stone-50/60 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-md bg-amber-50 text-amber-800 flex items-center justify-center mb-2">
                        <Icon className="w-4 h-4 text-amber-700" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-normal">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Verified Points */}
              <div className="pt-1 flex flex-wrap gap-3 text-xs text-slate-700 font-medium">
                <span className="inline-flex items-center gap-1.5 text-slate-800">
                  <Check className="w-3.5 h-3.5 text-amber-600" />
                  Registered IEC Exporter
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-800">
                  <Check className="w-3.5 h-3.5 text-amber-600" />
                  Heavy Metal & Lead Tested
                </span>
                <span className="inline-flex items-center gap-1.5 text-slate-800">
                  <Check className="w-3.5 h-3.5 text-amber-600" />
                  100% Recyclable Glass Cullet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
