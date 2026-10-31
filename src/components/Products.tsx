/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Eye, MessageSquare, Sparkles } from 'lucide-react';
import {
  PRODUCT_CATEGORIES,
  PRODUCTS_LIST,
  ProductItem,
} from '../data/companyData.ts';
import { ProductDetailModal } from './ProductDetailModal.tsx';

interface ProductsProps {
  onOpenQuoteModal: (productName?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  // Filter products by category and search term
  const filteredProducts = useMemo(() => {
    return PRODUCTS_LIST.filter((prod) => {
      const matchesCategory =
        selectedCategory === 'All' || prod.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.glassType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.applications.some((app) =>
          app.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-14 lg:py-18 bg-stone-50/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-amber-700 text-xs font-bold tracking-wider uppercase mb-1.5">
            Manufactured Catalog & Export Lines
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Explore Our Comprehensive Glass Products Range
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            From super-flint spirit bottles to luxury cosmetic jars, scented candle vessels, 
            and bespoke OEM tooling — all produced with uniform wall-thickness and stress-relieved annealing.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-6 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Category Segmented Control Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none">
              {PRODUCT_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all min-h-[38px] ${
                      isActive
                        ? 'bg-slate-950 text-amber-400 shadow-xs ring-1 ring-amber-400/40'
                        : 'bg-white text-slate-600 hover:text-slate-900 border border-stone-200 hover:border-amber-300'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Keyword Search */}
            <div className="relative min-w-[200px] sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search catalog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-200 bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 min-h-[38px]"
              />
            </div>
          </div>
        </div>

        {/* Product Cards Grid - Proportionate compact sizing */}
        {filteredProducts.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-stone-200">
            <p className="text-slate-600 text-xs sm:text-sm">
              No products found matching your search. Try resetting the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-amber-100 rounded-lg hover:bg-amber-200 min-h-[38px]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-300 transition-all duration-200 flex flex-col justify-between"
              >
                {/* Card Top: Compact Image Preview */}
                <div
                  className="relative aspect-[16/11] overflow-hidden bg-stone-100 cursor-pointer"
                  onClick={() => setActiveModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/0 transition-colors" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/30 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-950 text-amber-400 border border-amber-400/40 text-[11px] font-semibold rounded-md shadow-xs">
                      <Eye className="w-3 h-3" />
                      View Specs
                    </span>
                  </div>
                </div>

                {/* Card Body - Moderately sized padding & typography */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-semibold text-amber-700 tracking-wide mb-1">
                      {product.category}
                    </div>

                    <h3
                      className="text-sm sm:text-base font-bold text-slate-900 leading-snug cursor-pointer hover:text-amber-700 transition-colors mb-1.5 line-clamp-1"
                      onClick={() => setActiveModalProduct(product)}
                    >
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {product.shortDesc}
                    </p>

                    <div className="flex items-center flex-wrap gap-2 text-[11px] text-slate-500 pb-3 border-b border-stone-100">
                      <span>MOQ: {product.moq.split(' ')[0]} {product.moq.split(' ')[1] || 'pcs'}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.capacity ? product.capacity.split('(')[0] : 'Custom'}</span>
                      <span aria-hidden="true">·</span>
                      <span>Export Grade</span>
                    </div>
                  </div>

                  {/* Compact Card Action Buttons */}
                  <div className="pt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalProduct(product)}
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-stone-100 hover:bg-stone-200 rounded-lg min-h-[38px] transition-colors"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Specs</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal(product.name)}
                      className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg min-h-[38px] shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-3 h-3 text-slate-950" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Compact Custom Mould OEM Banner */}
        <div className="mt-10 bg-gradient-to-r from-slate-950 via-slate-900 to-stone-900 rounded-xl p-5 sm:p-6 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm border border-amber-500/20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-amber-300 text-[11px] font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Need Bespoke Dimensions or Private Moulds?</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Have a Proprietary CAD Drawing or Bottle Concept?
            </h3>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              We fabricate custom alloy steel moulds in Firozabad with sample dispatch in 14 days and NDA confidentiality.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenQuoteModal('Custom OEM Mould Project')}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-xs whitespace-nowrap shrink-0 min-h-[40px] transition-colors"
          >
            <span>Request Custom Tooling</span>
          </button>
        </div>
      </div>

      {/* Modal View for product specifications */}
      <ProductDetailModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onOpenGlobalQuote={onOpenQuoteModal}
      />
    </section>
  );
};
