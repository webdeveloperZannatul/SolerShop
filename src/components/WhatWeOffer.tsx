import React from 'react';
import { Sun, BatteryCharging, Building2, Wrench, ArrowRight, Check } from 'lucide-react';

interface WhatWeOfferProps {
  onSelectService: (serviceName: string) => void;
}

export const WhatWeOffer: React.FC<WhatWeOfferProps> = ({ onSelectService }) => {
  const offerings = [
    {
      id: 'residential',
      title: 'Residential Solar Power',
      badge: 'Most Popular',
      subtitle: 'Tailored 6.6 kW to 13.2 kW Rooftop Systems',
      description:
        'Engineered to match your roof pitch and family energy profile. We integrate Tier-1 high-density monocrystalline panels with smart split-phase inverters.',
      highlights: [
        'Optimized for summer air conditioning & winter heaters',
        'Microinverter shading options for trees & chimneys',
        '25-year panel performance guarantee',
      ],
      accentColor: 'var(--color-sage-olive)',
      bgLight: 'var(--color-pale-sage)',
      icon: Sun,
      actionText: 'Explore Home Packages',
    },
    {
      id: 'battery',
      title: 'Home Battery Storage',
      badge: 'Grid Independence',
      subtitle: 'Store Daylight Power for Evening Peak Hours',
      description:
        'Stop exporting solar for pennies only to buy power back at night. Charge your battery during high sun hours and power your home through blackouts.',
      highlights: [
        'Full blackout emergency power protection',
        'Eliminates expensive 4pm–9pm peak power rates',
        'Compatible with Tesla Powerwall 3 & BYD systems',
      ],
      accentColor: 'var(--color-logo-blue)',
      bgLight: 'var(--color-morning-sky)',
      icon: BatteryCharging,
      actionText: 'Explore Battery Storage',
    },
    {
      id: 'commercial',
      title: 'Commercial & Agribusiness',
      badge: 'Rapid 3-Year ROI',
      subtitle: '20 kW to 250 kW High-Yield Arrays',
      description:
        'Designed for wineries, packing sheds, workshops, cold storage, and regional offices facing spiraling operational daytime utility bills.',
      highlights: [
        'Accelerated asset depreciation & tax benefits',
        'Detailed interval data logging & feasibility audit',
        'Dedicated project manager & safety compliance',
      ],
      accentColor: 'var(--color-terracotta)',
      bgLight: 'var(--color-clay-sand)',
      icon: Building2,
      actionText: 'Request Commercial Audit',
    },
    {
      id: 'care',
      title: 'System Health & Care',
      badge: 'Lifetime Support',
      subtitle: 'Diagnostics, Upgrades & Warranty Service',
      description:
        'Whether your inverter is showing an error code or an existing array needs cleaning and bird proofing, our licensed trades keep you generating.',
      highlights: [
        'Comprehensive 18-point safety & wiring audit',
        'Inverter replacement & manufacturer warranty claims',
        'Thermal drone hot-spot scans & bird barrier mesh',
      ],
      accentColor: 'var(--color-soil-brown)',
      bgLight: 'var(--color-soft-sun)',
      icon: Wrench,
      actionText: 'Book System Inspection',
    },
  ];

  return (
    <section
      id="what-we-offer"
      className="py-24 lg:py-28"
      style={{
        backgroundColor: 'var(--color-cream)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div
            className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider uppercase"
            style={{ color: 'var(--color-deep-forest)' }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: 'var(--color-logo-green)' }}
              aria-hidden="true"
            />
            <span>What We Offer</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-dark-bark)',
            }}
          >
            Clean energy systems, built to outlast the elements.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--color-dark-bark)' }}>
            Every roof is unique. Rather than cookie-cutter kits, we engineer bespoke solar and battery configurations
            specifically suited to your seasonal consumption, roof structure, and budget.
          </p>
        </div>

        {/* 4 Cards Grid: Responsive 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {offerings.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="flex flex-col justify-between p-7 rounded-solar-lg border transition-all duration-200 hover:-translate-y-1 shadow-solar-sm"
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  borderColor: 'var(--color-clay-sand)',
                }}
              >
                <div>
                  {/* Card Icon & Top Accent header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-solar flex items-center justify-center border"
                      style={{
                        backgroundColor: card.bgLight,
                        borderColor: 'var(--color-clay-sand)',
                      }}
                    >
                      <IconComponent size={26} style={{ color: card.accentColor }} />
                    </div>

                    {/* Unboxed natural kicker label (no pill clutter) */}
                    <span
                      className="text-xs font-bold tracking-wide uppercase"
                      style={{ color: card.accentColor }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    className="text-xl font-extrabold mb-1"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-dark-bark)',
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    className="text-xs font-semibold mb-4 leading-snug"
                    style={{ color: card.accentColor }}
                  >
                    {card.subtitle}
                  </p>

                  <p
                    className="text-sm leading-relaxed mb-6 font-normal"
                    style={{ color: 'var(--color-dark-bark)' }}
                  >
                    {card.description}
                  </p>

                  {/* Feature bullet list */}
                  <ul className="space-y-2.5 mb-8 text-xs sm:text-[13px] font-medium" style={{ color: 'var(--color-dark-bark)' }}>
                    {card.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check
                          size={15}
                          className="shrink-0 mt-0.5"
                          style={{ color: card.accentColor }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Action Button */}
                <button
                  onClick={() => onSelectService(card.title)}
                  className="w-full mt-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-solar font-bold text-xs sm:text-sm border transition-colors cursor-pointer"
                  style={{
                    backgroundColor: card.bgLight,
                    borderColor: 'var(--color-clay-sand)',
                    color: 'var(--color-dark-bark)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = card.accentColor;
                    e.currentTarget.style.color = 'var(--color-warm-white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = card.bgLight;
                    e.currentTarget.style.color = 'var(--color-dark-bark)';
                  }}
                >
                  <span>{card.actionText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
