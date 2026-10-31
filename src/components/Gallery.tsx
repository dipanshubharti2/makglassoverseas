/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/companyData.ts';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Factory & Process', 'Finished Products', 'Packaging & Logistics'] as const;

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
    );
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
    );
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  // Prevent background scroll during Lightbox
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [lightboxIndex]);

  const activeLightboxItem: GalleryItem | null =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-14 lg:py-18 bg-stone-50/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-amber-700 text-xs font-bold tracking-wider uppercase mb-1.5">
            Visual Tour
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-balance">
            Factory Floor, Glass Craftsmanship & Packaging Gallery
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Take a visual tour inside our Firozabad works, automated annealing conveyors, 
            and export cargo staging facility.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all min-h-[38px] ${
                selectedCategory === cat
                  ? 'bg-slate-950 text-amber-400 shadow-xs ring-1 ring-amber-400/40'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-stone-200 hover:border-amber-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compact, Sleek Gallery Grid - 2 cols on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-stone-200 cursor-pointer shadow-xs hover:shadow-md border border-stone-200 hover:border-amber-400/60 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-95 transition-opacity" />

              {/* Compact Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white flex items-end justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-semibold text-amber-300 uppercase tracking-wide truncate">
                    {item.category}
                  </div>
                  <h3 className="text-xs font-bold leading-tight line-clamp-1 mt-0.5">
                    {item.title}
                  </h3>
                </div>

                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <Maximize2 className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200">
          {/* Top Bar: Close & Counter */}
          <div className="flex items-center justify-between text-white pb-4 z-20">
            <div className="text-xs font-mono text-amber-300">
              {lightboxIndex !== null ? lightboxIndex + 1 : 1} / {filteredItems.length}
            </div>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image Viewport with Next/Prev Arrows */}
          <div className="relative flex-1 flex items-center justify-center px-2 sm:px-12 my-auto max-h-[80vh]">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 text-white bg-slate-900/70 hover:bg-slate-900 border border-amber-400/30 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl max-h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                className="max-h-[72vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 text-white bg-slate-900/70 hover:bg-slate-900 border border-amber-400/30 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div className="max-w-2xl mx-auto text-center text-white pt-4 z-20">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wide">
              {activeLightboxItem.category}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
              {activeLightboxItem.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl mx-auto">
              {activeLightboxItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
