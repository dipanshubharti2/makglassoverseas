/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Products } from './components/Products.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { Clients } from './components/Clients.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { FloatingActions } from './components/FloatingActions.tsx';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('');

  const handleOpenQuoteModal = (productName?: string) => {
    setSelectedProductForQuote(productName || '');
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-900 pb-14 sm:pb-0">
      {/* 1. Header / Navigation with official MAK logo */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      <main className="flex-1">
        {/* 1. Home / Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Products Catalog & Specifications */}
        <Products onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Why Choose Us Section */}
        <WhyChooseUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 5. Clients & Global Footprint (with small images & names) */}
        <Clients />

        {/* 6. Factory & Craftsmanship Gallery */}
        <Gallery />

        {/* 7. Contact & RFQ Form */}
        <Contact initialProduct={selectedProductForQuote} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Global Interactive Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultProduct={selectedProductForQuote}
      />

      {/* Floating WhatsApp Desk & Mobile Action Bar */}
      <FloatingActions />
    </div>
  );
}
