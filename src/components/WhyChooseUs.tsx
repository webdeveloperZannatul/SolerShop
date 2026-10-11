import React, { useState } from 'react';
import { ShieldCheck, Award, HeartHandshake, Eye, CheckCircle2, XCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'standards' | 'comparison'>('standards');

  const pillars = [
    {
      icon: ShieldCheck,
      accent: 'var(--color-deep-forest)',
      bg: 'var(--color-pale-sage)',
      title: 'Directly Employed Master Electricians',
      text: 'We never pass your installation to unvetted third-party subcontractor crews. Every technician on your roof is a licensed, directly employed Solarshop tradesperson held to our rigorous quality benchmark.',
    },
    {
      icon: Eye,
      accent: 'var(--color-soil-brown)',
      bg: 'var(--color-soft-sun)',
      title: 'Conservative, Honest Yield Projections',
      text: 'We model seasonal cloud cover, roof pitch, and nearby tree shade using verified meteorological data. If a solar array won’t deliver strong returns on your particular roof, we will tell you straight.',
    },
    {
      icon: Award,
      accent: 'var(--color-logo-blue)',
      bg: 'var(--color-morning-sky)',
      title: 'Tier-1 Hardware with Local Warranties',
      text: 'We exclusively source Bloomberg Tier-1 panels, Fronius, SMA, Sungrow and Tesla hardware that maintain permanent physical offices and support centres in Australia.',
    },
    {
      icon: HeartHandshake,
      accent: 'var(--color-terracotta)',
      bg: 'var(--color-clay-sand)',
      title: 'Transparent Fixed Pricing, Zero Pressure',
      text: 'No 3-hour kitchen table sales pitches or "today only" rebate gimmicks. You receive a comprehensive written engineering proposal valid for 30 days so you can make an unpressured decision.',
    },
  ];

  const comparisonRows = [
    {
      feature: 'Installation Technicians',
      solarshop: 'Licensed in-house CEC Master Electricians',
      commodity: 'Subcontracted third-party gangs paid per panel',
    },
    {
      feature: 'System Production Modeling',
      solarshop: 'Accurate 3D sun-path and shading simulation',
      commodity: 'Inflated computer formulas assuming 100% sunshine',
    },
    {
      feature: 'Roof Fasteners & Flashing',
      solarshop: 'Marine-grade aluminium rails & sealed tile flashings',
      commodity: 'Thin uncertified alloy brackets that risk roof leaks',
    },
    {
      feature: 'Conduit & Cable Routing',
      solarshop: 'Tidy, UV-shielded, concealed roof-space cabling',
      commodity: 'Exposed surface conduits stapled across walls',
    },
    {
      feature: 'Warranty & Ongoing Support',
      solarshop: 'Full local office support—we process claims for you',
      commodity: 'Defunct 1300 number leaving you to contact overseas factories',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 lg:py-28"
      style={{
        backgroundColor: 'var(--color-warm-white)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider uppercase"
            style={{ color: 'var(--color-soil-brown)' }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: 'var(--color-terracotta)' }}
              aria-hidden="true"
            />
            <span>The Solarshop Difference</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-dark-bark)',
              textWrap: 'balance',
            }}
          >
            Craftsmanship and honesty over sales quotas.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--color-dark-bark)' }}>
            Solar is a 25-year investment on top of your most valuable asset. Here is how we ensure your system
            operates safely, efficiently, and quietly for decades.
          </p>

          {/* Interactive Toggle for Elementor/User Exploration */}
          <div
            className="inline-flex items-center p-1.5 rounded-solar border mt-8"
            style={{
              backgroundColor: 'var(--color-cream)',
              borderColor: 'var(--color-clay-sand)',
            }}
          >
            <button
              onClick={() => setActiveTab('standards')}
              className="px-5 py-2 text-xs sm:text-sm font-bold rounded-solar-sm transition-all cursor-pointer whitespace-nowrap"
              style={{
                backgroundColor: activeTab === 'standards' ? 'var(--color-deep-forest)' : 'transparent',
                color: activeTab === 'standards' ? 'var(--color-warm-white)' : 'var(--color-dark-bark)',
                boxShadow: activeTab === 'standards' ? 'var(--shadow-brown-sm)' : 'none',
              }}
            >
              Our 4 Quality Pillars
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className="px-5 py-2 text-xs sm:text-sm font-bold rounded-solar-sm transition-all cursor-pointer whitespace-nowrap"
              style={{
                backgroundColor: activeTab === 'comparison' ? 'var(--color-deep-forest)' : 'transparent',
                color: activeTab === 'comparison' ? 'var(--color-warm-white)' : 'var(--color-dark-bark)',
                boxShadow: activeTab === 'comparison' ? 'var(--shadow-brown-sm)' : 'none',
              }}
            >
              Solarshop vs. Commodity Solar
            </button>
          </div>
        </div>

        {/* Tab 1: 4 Quality Pillars */}
        {activeTab === 'standards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch animate-solar-fade">
            {pillars.map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-8 rounded-solar-lg border flex flex-col justify-start transition-all hover:shadow-solar-md"
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    borderColor: 'var(--color-clay-sand)',
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-13 h-13 rounded-solar flex items-center justify-center border shrink-0"
                      style={{
                        backgroundColor: pillar.bg,
                        borderColor: 'var(--color-clay-sand)',
                      }}
                    >
                      <IconComp size={24} style={{ color: pillar.accent }} />
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-extrabold"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-dark-bark)',
                      }}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  <p
                    className="text-sm sm:text-[15px] leading-relaxed font-normal"
                    style={{ color: 'var(--color-dark-bark)' }}
                  >
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Comparison Table */}
        {activeTab === 'comparison' && (
          <div
            className="rounded-solar-lg border overflow-hidden shadow-solar-sm animate-solar-fade"
            style={{
              backgroundColor: 'var(--color-cream)',
              borderColor: 'var(--color-clay-sand)',
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr
                    className="border-b"
                    style={{
                      borderColor: 'var(--color-clay-sand)',
                      backgroundColor: 'var(--color-soft-sun)',
                    }}
                  >
                    <th
                      className="py-4 px-6 font-extrabold text-sm uppercase tracking-wider"
                      style={{ color: 'var(--color-soil-brown)' }}
                    >
                      Standard
                    </th>
                    <th
                      className="py-4 px-6 font-extrabold text-sm uppercase tracking-wider"
                      style={{
                        color: 'var(--color-deep-forest)',
                        backgroundColor: 'var(--color-pale-sage)',
                      }}
                    >
                      Solarshop Standard
                    </th>
                    <th
                      className="py-4 px-6 font-extrabold text-sm uppercase tracking-wider"
                      style={{ color: 'var(--color-terracotta)' }}
                    >
                      Cheap Commodity Installers
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y" style={{ borderColor: 'var(--color-clay-sand)' }}>
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="transition-colors"
                      style={{
                        backgroundColor: idx % 2 === 0 ? 'var(--color-warm-white)' : 'var(--color-cream)',
                      }}
                    >
                      <td
                        className="py-4 px-6 font-bold"
                        style={{ color: 'var(--color-dark-bark)' }}
                      >
                        {row.feature}
                      </td>
                      <td
                        className="py-4 px-6 font-semibold"
                        style={{
                          color: 'var(--color-deep-forest)',
                          backgroundColor: idx % 2 === 0 ? 'rgba(230, 237, 214, 0.45)' : 'rgba(230, 237, 214, 0.65)',
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="shrink-0" style={{ color: 'var(--color-logo-green)' }} />
                          <span>{row.solarshop}</span>
                        </div>
                      </td>
                      <td
                        className="py-4 px-6 font-medium"
                        style={{ color: 'var(--color-soil-brown)' }}
                      >
                        <div className="flex items-center gap-2">
                          <XCircle size={16} className="shrink-0" style={{ color: 'var(--color-terracotta)' }} />
                          <span>{row.commodity}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
