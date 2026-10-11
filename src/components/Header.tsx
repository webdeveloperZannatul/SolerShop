import React, { useState } from 'react';
import { SolarLogo } from './SolarLogo';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Residential', href: '#what-we-offer' },
    { label: 'Commercial & Ag', href: '#what-we-offer' },
    { label: 'Battery Storage', href: '#what-we-offer' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header
      className="sticky top-0 z-50 transition-all border-b"
      style={{
        backgroundColor: 'var(--color-warm-white)',
        borderColor: 'var(--color-clay-sand)',
        boxShadow: 'var(--shadow-brown-sm)',
      }}
    >
      {/* Top micro bar for direct contact phone */}
      <div
        className="hidden md:block py-1.5 px-6 border-b text-xs font-medium"
        style={{
          backgroundColor: 'var(--color-cream)',
          borderColor: 'var(--color-clay-sand)',
          color: 'var(--color-soil-brown)',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>Clean Energy Council (CEC) Accredited Solar Master Electricians</span>
            <span aria-hidden="true" style={{ color: 'var(--color-clay-sand)' }}>·</span>
            <span>Australian Owned & Operated</span>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <Phone size={13} style={{ color: 'var(--color-logo-green)' }} />
            <span>Speak with an engineer:</span>
            <a
              href="tel:1300765270"
              className="hover:underline transition-colors"
              style={{ color: 'var(--color-deep-forest)' }}
            >
              1300 765 270
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Solarshop Home">
          <SolarLogo variant="light" size="md" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold" aria-label="Main menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:opacity-80 py-1"
              style={{ color: 'var(--color-dark-bark)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onQuoteClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-solar text-sm font-bold transition-all shadow-solar-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap"
            style={{
              backgroundColor: 'var(--color-logo-green)',
              color: 'var(--color-warm-white)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-deep-forest)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-logo-green)';
            }}
          >
            <span>Get a Quote</span>
            <ArrowRight size={16} style={{ color: 'var(--color-warm-white)' }} />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-solar-sm border transition-colors cursor-pointer"
            style={{
              borderColor: 'var(--color-clay-sand)',
              color: 'var(--color-dark-bark)',
              backgroundColor: 'var(--color-cream)',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-t px-6 py-6 animate-solar-fade"
          style={{
            backgroundColor: 'var(--color-warm-white)',
            borderColor: 'var(--color-clay-sand)',
          }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold py-2 border-b transition-colors"
                style={{
                  color: 'var(--color-dark-bark)',
                  borderColor: 'var(--color-clay-sand)',
                }}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="tel:1300765270"
                className="flex items-center gap-2 text-sm font-bold py-2"
                style={{ color: 'var(--color-soil-brown)' }}
              >
                <Phone size={16} style={{ color: 'var(--color-logo-green)' }} />
                <span>Call 1300 765 270</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-solar text-sm font-bold shadow-solar-sm cursor-pointer"
                style={{
                  backgroundColor: 'var(--color-logo-green)',
                  color: 'var(--color-warm-white)',
                }}
              >
                <span>Get a Quote</span>
                <ArrowRight size={16} style={{ color: 'var(--color-warm-white)' }} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
