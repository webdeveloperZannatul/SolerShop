import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatWeOffer } from './components/WhatWeOffer';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { KeyNumbers } from './components/KeyNumbers';
import { Testimonials } from './components/Testimonials';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const scrollToQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const elem = document.getElementById('enquiry-form');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOfferings = () => {
    const elem = document.getElementById('what-we-offer');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: 'var(--color-warm-white)',
        color: 'var(--color-dark-bark)',
      }}
    >
      {/* 1. Header with logo, menu and "Get a Quote" button */}
      <Header onQuoteClick={() => scrollToQuote()} />

      <main className="flex-grow">
        {/* 2. Hero with tagline, short text and two buttons */}
        <Hero
          onQuoteClick={() => scrollToQuote()}
          onExploreClick={scrollToOfferings}
        />

        {/* 3. What we offer (4 cards) */}
        <WhatWeOffer onSelectService={(service) => scrollToQuote(service)} />

        {/* 4. Why choose us */}
        <WhyChooseUs />

        {/* 5. How it works (4 steps) */}
        <HowItWorks onQuoteClick={() => scrollToQuote()} />

        {/* 6. Key numbers */}
        <KeyNumbers />

        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Enquiry call to action */}
        <EnquirySection initialService={selectedService} />
      </main>

      {/* 9. Footer in Deep Forest */}
      <Footer />
    </div>
  );
}
