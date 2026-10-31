/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Factory, Palette, ShieldCheck, Box, Truck, Layers, ArrowUpRight } from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/companyData.ts';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  const iconMap: Record<string, React.ElementType> = {
    Factory,
    Palette,
    ShieldCheck,
    Box,
    Truck,
    Layers,
  };

  return (
    <section id="why-us" className="py-14 lg:py-18 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-amber-700 text-xs font-bold tracking-wider uppercase mb-1.5">
            Why Partner With MAK Glass Overseas
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Direct Furnace Economics with Export-Grade Precision
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Eliminating overseas trading brokers gives your business direct control over molten glass quality, 
            rapid mould fabrication, and tailored export palletization.
          </p>
        </div>

        {/* 6 Core Icon Cards Grid - Compact, sleek cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => {
            const Icon = iconMap[item.iconName] || Factory;
            return (
              <div
                key={item.title}
                className="group relative p-4 sm:p-5 rounded-xl border border-stone-200 bg-white hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Compact index & icon row */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 group-hover:bg-amber-100 text-amber-800 flex items-center justify-center transition-colors">
                      <Icon className="w-4.5 h-4.5 text-amber-700" />
                    </div>
                    <span className="text-[11px] font-mono text-stone-400 font-semibold tabular-nums">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Subtle metric highlight */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-amber-800">
                    {item.highlight}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip - Compact */}
        <div className="border border-stone-200 rounded-xl p-4 sm:p-5 bg-stone-50/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Ready to benchmark your current glassware supplier rates?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Send us your drawing or existing product photo for an obligation-free comparative factory quote.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-xs whitespace-nowrap shrink-0 min-h-[38px] transition-colors"
          >
            <span>Request Factory Comparison</span>
          </button>
        </div>
      </div>
    </section>
  );
};
