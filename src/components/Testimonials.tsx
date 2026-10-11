import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      author: 'David & Eleanor Morris',
      location: 'Crafers, Adelaide Hills',
      system: '10.4 kW Panels + 13.5 kWh Battery',
      quote:
        'We were hesitant about solar because of the large eucalyptus trees near our northern boundary. The Solarshop engineer simulated shade hours and recommended micro-inverters. Our last quarterly power bill dropped from $820 down to $46. The installation team was courteous and left our roof cleaner than they found it.',
      accent: 'var(--color-logo-green)',
      highlight: '$46 Quarterly Bill (from $820)',
    },
    {
      author: 'Julian Thorne',
      location: 'Vineyard Manager, McLaren Vale',
      system: '39 kW Agribusiness Array',
      quote:
        'Running refrigeration through the peak harvest heat was our single highest operating variable. Solarshop’s commercial quote was straightforward, fixed price, and took advantage of instant asset write-offs. They completed the work in three days without disrupting tractor access.',
      accent: 'var(--color-terracotta)',
      highlight: '3-Day Zero-Downtime Installation',
    },
    {
      author: 'Sarah & Ben Jenkins',
      location: 'Prospect, Suburban Home',
      system: '6.6 kW Residential Rooftop System',
      quote:
        'Zero high-pressure sales calls. The engineer sent a comprehensive 3D diagram explaining our roof pitch and expected monthly savings. When our inverter arrived, the electricians arrived on time at 7:30am and had the phone app configured by 1:30pm.',
      accent: 'var(--color-logo-blue)',
      highlight: 'Transparent 3D Engineering Proposal',
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-28"
      style={{
        backgroundColor: 'var(--color-cream)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div
            className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider uppercase"
            style={{ color: 'var(--color-terracotta)' }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: 'var(--color-terracotta)' }}
              aria-hidden="true"
            />
            <span>Customer Experiences</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-dark-bark)',
            }}
          >
            Trusted on real roofs across the country.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--color-dark-bark)' }}>
            Read how homeowners and rural operators made the switch to clean, reliable solar with Solarshop.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-solar-lg border flex flex-col justify-between transition-all hover:shadow-solar-md"
              style={{
                backgroundColor: 'var(--color-warm-white)',
                borderColor: 'var(--color-clay-sand)',
              }}
            >
              <div>
                {/* Header: Stars & Quote glyph */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="var(--color-sun-yellow)"
                        stroke="var(--color-sun-yellow)"
                      />
                    ))}
                  </div>

                  <Quote size={24} style={{ color: 'var(--color-clay-sand)' }} />
                </div>

                {/* Outcome badge (unboxed quiet kicker) */}
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: t.accent }}
                >
                  {t.highlight}
                </div>

                {/* Quote Text */}
                <p
                  className="text-sm leading-relaxed mb-6 font-normal"
                  style={{ color: 'var(--color-dark-bark)' }}
                >
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div
                className="pt-4 border-t"
                style={{ borderColor: 'var(--color-clay-sand)' }}
              >
                <div
                  className="font-extrabold text-base"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-dark-bark)',
                  }}
                >
                  {t.author}
                </div>

                <div className="text-xs font-medium" style={{ color: 'var(--color-soil-brown)' }}>
                  {t.location}
                </div>

                <div
                  className="mt-1 flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: 'var(--color-deep-forest)' }}
                >
                  <CheckCircle2 size={13} style={{ color: 'var(--color-logo-green)' }} />
                  <span>{t.system}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
