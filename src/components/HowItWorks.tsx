import React from 'react';
import { Search, FileSpreadsheet, Zap, Smartphone, ArrowRight } from 'lucide-react';
import { HillDivider } from './HillDivider';

interface HowItWorksProps {
  onQuoteClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onQuoteClick }) => {
  const steps = [
    {
      number: '01',
      title: 'Satellite & Bill Analysis',
      description:
        'Upload or email your recent energy bill. We use high-resolution aerial imagery to inspect your roof orientation, tilt angles, and tree shading.',
      icon: Search,
      tag: 'Day 1',
    },
    {
      number: '02',
      title: 'Custom 3D System Design',
      description:
        'You receive a detailed 3D proposal showing exact panel placement, expected seasonal kWh output, and honest return-on-investment timelines.',
      icon: FileSpreadsheet,
      tag: 'Day 2',
    },
    {
      number: '03',
      title: 'Single-Day Master Install',
      description:
        'Our directly employed CEC electricians arrive promptly, install roof flashings cleanly, connect high-spec wiring, and test all isolators.',
      icon: Zap,
      tag: 'Single Day',
    },
    {
      number: '04',
      title: 'Grid Connection & App Walkthrough',
      description:
        'We submit your network distributor meter approvals and configure your phone app so you can watch your home produce clean energy in real time.',
      icon: Smartphone,
      tag: 'Turnkey',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden"
      style={{
        backgroundColor: 'var(--color-morning-sky)',
      }}
    >
      {/* Top gentle rolling hill divider transition from previous section */}
      <div className="absolute top-0 left-0 right-0">
        <HillDivider fillColor="var(--color-warm-white)" flip height={42} variant="rolling" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div
            className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider uppercase"
            style={{ color: 'var(--color-logo-blue)' }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: 'var(--color-logo-blue)' }}
              aria-hidden="true"
            />
            <span>How It Works</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-dark-bark)',
            }}
          >
            From your roof to clean power in four easy steps.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--color-dark-bark)' }}>
            We handle the heavy lifting: from complex council and network distributor approvals to tidy conduit installation.
            No confusion, no stress.
          </p>
        </div>

        {/* 4 Steps Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.number}
                className="p-7 rounded-solar-lg border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-solar-sm"
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  borderColor: 'var(--color-clay-sand)',
                }}
              >
                <div>
                  {/* Step Header with Step Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-2xl font-black tabular-nums"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-logo-blue)',
                      }}
                    >
                      {step.number}
                    </span>

                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: 'var(--color-soil-brown)' }}
                    >
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div
                    className="w-13 h-13 rounded-solar flex items-center justify-center border mb-5"
                    style={{
                      backgroundColor: 'var(--color-cream)',
                      borderColor: 'var(--color-clay-sand)',
                    }}
                  >
                    <IconComp size={24} style={{ color: 'var(--color-logo-blue)' }} />
                  </div>

                  {/* Title & Description */}
                  <h3
                    className="text-lg sm:text-xl font-extrabold mb-3 leading-snug"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-dark-bark)',
                    }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed font-normal"
                    style={{ color: 'var(--color-dark-bark)' }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Subtle sequence indicator */}
                <div
                  className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold"
                  style={{
                    borderColor: 'var(--color-clay-sand)',
                    color: 'var(--color-soil-brown)',
                  }}
                >
                  <span>Step {idx + 1} of 4</span>
                  {idx < 3 ? (
                    <span style={{ color: 'var(--color-logo-blue)' }}>Next →</span>
                  ) : (
                    <span style={{ color: 'var(--color-logo-green)' }}>Ready to generate</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA trigger strip */}
        <div className="mt-14 text-center">
          <button
            onClick={onQuoteClick}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-solar font-bold text-sm transition-all shadow-solar-sm hover:scale-[1.02] cursor-pointer"
            style={{
              backgroundColor: 'var(--color-logo-blue)',
              color: 'var(--color-warm-white)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-deep-forest)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-logo-blue)';
            }}
          >
            <span>Start Step 1: Request Free Roof Assessment</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
