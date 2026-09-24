/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemAgitation } from './components/ProblemAgitation';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { Methodology } from './components/Methodology';
import { BookPreview } from './components/BookPreview';
import { ValueStack } from './components/ValueStack';
import { EmotionalConnection } from './components/EmotionalConnection';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { FaqSection } from './components/FaqSection';
import { CheckoutModal } from './components/CheckoutModal';
import { StickyBottomBar } from './components/StickyBottomBar';
import { Footer } from './components/Footer';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleExploreSimulator = () => {
    const el = document.getElementById('simulador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1E2E2A]">
      {/* Top Banner with Urgency Timer */}
      <AnnouncementBar />

      {/* Main Top Bar Contract */}
      <Header onOpenCheckout={handleOpenCheckout} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
          onExploreSimulator={handleExploreSimulator}
        />

        {/* Problem Agitation & Neuroscience (Culpa vs Vergüenza) */}
        <ProblemAgitation />

        {/* Interactive Script Simulator (Try Before You Buy) */}
        <InteractiveSimulator onOpenCheckout={handleOpenCheckout} />

        {/* 3-Step Methodology: Reconocer, Responder, Reparar */}
        <Methodology />

        {/* Book Preview & Bundle Mockup Presentation */}
        <BookPreview onOpenCheckout={handleOpenCheckout} />

        {/* Complete Value Stack & 3 Free Bonuses */}
        <ValueStack onOpenCheckout={handleOpenCheckout} />

        {/* Emotional Compassion & Reconnection */}
        <EmotionalConnection onOpenCheckout={handleOpenCheckout} />

        {/* Real Verifiable Family Testimonials */}
        <Testimonials />

        {/* 10-Day Unconditional 100% Risk-Free Guarantee */}
        <Guarantee onOpenCheckout={handleOpenCheckout} />

        {/* FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Footer with Legal & Trust Signals */}
      <Footer />

      {/* High-Converting Sticky Bottom Conversion Bar */}
      <StickyBottomBar onOpenCheckout={handleOpenCheckout} />

      {/* Direct One-Click Checkout Modal with Order Bump */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
      />
    </div>
  );
}
