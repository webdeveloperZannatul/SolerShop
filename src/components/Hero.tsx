import React from 'react';
import { ArrowRight, Compass, ShieldCheck, SunMedium } from 'lucide-react';
import daytimeSolarImage from '../assets/images/daytime_solar_home_1791746617719.jpg';

interface HeroProps {
  onQuoteClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onExploreClick }) => {
  return (
    <section
      className="relative overflow-hidden pt-12 md:pt-16 pb-20 lg:pb-28"
      style={{
        backgroundColor: 'var(--color-warm-white)',
      }}
    >
      {/* Decorative calm background elements: Muted Sun circle and Pale Sage gentle shapes */}
      <div
        className="absolute top-10 right-1/4 w-80 h-80 rounded-full pointer-events-none blur-3xl -z-10 opacity-60"
        style={{ backgroundColor: 'var(--color-soft-sun)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-6 left-10 w-96 h-96 rounded-full pointer-events-none blur-3xl -z-10 opacity-40"
        style={{ backgroundColor: 'var(--color-pale-sage)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Tagline, short text, buttons (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Organic Kicker: Quiet text with sun circle glyph, NO PILLS */}
            <div className="flex items-center gap-2 mb-4 text-sm font-bold tracking-wide uppercase" style={{ color: 'var(--color-deep-forest)' }}>
              <span
                className="w-3.5 h-3.5 rounded-full inline-block"
                style={{ backgroundColor: 'var(--color-sun-yellow)' }}
                aria-hidden="true"
              />
              <span>Grounded in Nature · Built by Master Electricians</span>
            </div>

            {/* Main Tagline Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-dark-bark)',
                textWrap: 'balance',
              }}
            >
              Honest solar power designed for real homes.
            </h1>

            {/* Short text */}
            <p
              className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl font-normal"
              style={{ color: 'var(--color-dark-bark)' }}
            >
              We design and install durable, high-yield rooftop solar and battery systems across Australia.
              No pushy salespeople or inflated yield projections—just genuine engineering, master craftsmanship,
              and long-term lower power bills.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-solar font-bold text-base transition-all shadow-solar-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                style={{
                  backgroundColor: 'var(--color-deep-forest)',
                  color: 'var(--color-warm-white)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-logo-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-deep-forest)';
                }}
              >
                <span>Request Free Solar Assessment</span>
                <ArrowRight size={18} style={{ color: 'var(--color-warm-white)' }} />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-solar font-bold text-base transition-all border cursor-pointer"
                style={{
                  backgroundColor: 'var(--color-cream)',
                  borderColor: 'var(--color-clay-sand)',
                  color: 'var(--color-soil-brown)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-soft-sun)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-cream)';
                }}
              >
                <span>Explore Our Systems</span>
              </button>
            </div>

            {/* Trust row: Clean typographic separators, zero-pill discipline */}
            <div
              className="w-full pt-6 border-t flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold"
              style={{
                borderColor: 'var(--color-clay-sand)',
                color: 'var(--color-soil-brown)',
              }}
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} style={{ color: 'var(--color-logo-green)' }} />
                <span>CEC Accredited Installers</span>
              </div>
              <span aria-hidden="true" style={{ color: 'var(--color-clay-sand)' }}>·</span>
              <div className="flex items-center gap-1.5">
                <SunMedium size={16} style={{ color: 'var(--color-sun-yellow)' }} />
                <span>Tier-1 Bloomberg Rated Panels</span>
              </div>
              <span aria-hidden="true" style={{ color: 'var(--color-clay-sand)' }}>·</span>
              <div className="flex items-center gap-1.5">
                <Compass size={16} style={{ color: 'var(--color-logo-blue)' }} />
                <span>Local Support & Monitoring</span>
              </div>
            </div>
          </div>

          {/* Right Column: Natural daytime light photo & earthy visual badge (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            {/* Visual Frame */}
            <div
              className="relative p-2 rounded-solar-lg border shadow-solar-lg"
              style={{
                backgroundColor: 'var(--color-cream)',
                borderColor: 'var(--color-clay-sand)',
              }}
            >
              {/* Natural daytime photo only, no night, no dark overlays */}
              <div className="overflow-hidden rounded-solar aspect-[4/3] relative">
                <img
                  src={daytimeSolarImage}
                  alt="Natural daylight residential rooftop solar installation by Solarshop"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Quiet daylight stamp in bottom corner */}
                <div
                  className="absolute bottom-3 left-3 px-3 py-1.5 rounded-solar-sm border text-xs font-bold flex items-center gap-1.5"
                  style={{
                    backgroundColor: 'var(--color-warm-white)',
                    borderColor: 'var(--color-clay-sand)',
                    color: 'var(--color-dark-bark)',
                    boxShadow: 'var(--shadow-brown-sm)',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: 'var(--color-logo-green)' }}
                    aria-hidden="true"
                  />
                  <span>Residential Array · Clean Daylight Generation</span>
                </div>
              </div>

              {/* Stat footer inside card */}
              <div
                className="mt-3 p-3.5 rounded-solar-sm border flex items-center justify-between"
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  borderColor: 'var(--color-clay-sand)',
                }}
              >
                <div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--color-soil-brown)' }}>
                    Standard Performance Guarantee
                  </div>
                  <div className="text-lg font-black" style={{ color: 'var(--color-deep-forest)' }}>
                    25-Year Full Warranty
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-pale-sage)' }}
                >
                  <SunMedium size={20} style={{ color: 'var(--color-logo-green)' }} />
                </div>
              </div>
            </div>

            {/* Subtle decorative Sun circle behind corner */}
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full -z-10 flex items-center justify-center border"
              style={{
                backgroundColor: 'var(--color-soft-sun)',
                borderColor: 'var(--color-clay-sand)',
              }}
              aria-hidden="true"
            >
              <div
                className="w-12 h-12 rounded-full"
                style={{ backgroundColor: 'var(--color-sun-yellow)', opacity: 0.8 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
