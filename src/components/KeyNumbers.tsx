import React from 'react';
import { Home, DollarSign, Shield, CheckCircle } from 'lucide-react';

export const KeyNumbers: React.FC = () => {
  const stats = [
    {
      value: '4,850+',
      label: 'Roofs Powered',
      detail: 'Installed across metropolitan and regional areas',
      icon: Home,
    },
    {
      value: '$1,820',
      label: 'Avg. Yearly Savings',
      detail: 'Typical bill reduction for family solar households',
      icon: DollarSign,
    },
    {
      value: '25 Yrs',
      label: 'Warranty Standard',
      detail: 'Tier-1 performance backing with local support',
      icon: Shield,
    },
    {
      value: '99.2%',
      label: 'First-Time Grid Approval',
      detail: 'Flawless safety paperwork with local network authorities',
      icon: CheckCircle,
    },
  ];

  return (
    <section
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-soil-brown)',
      }}
    >
      {/* Subtle organic sun circle backdrop in soft sun */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-5 blur-2xl"
        style={{ backgroundColor: 'var(--color-sun-yellow)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider uppercase"
            style={{ color: 'var(--color-soft-sun)' }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: 'var(--color-sun-yellow)' }}
              aria-hidden="true"
            />
            <span>Proven Track Record</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl font-black tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-warm-white)',
            }}
          >
            Real figures from everyday Australian rooftops.
          </h2>
        </div>

        {/* 4 Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={i}
                className="p-7 rounded-solar-lg border flex flex-col items-start transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(58, 42, 30, 0.45)',
                  borderColor: 'var(--color-clay-sand)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-solar flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: 'rgba(248, 233, 190, 0.15)',
                    border: '1px solid var(--color-clay-sand)',
                  }}
                >
                  <IconComponent size={22} style={{ color: 'var(--color-sun-yellow)' }} />
                </div>

                <div
                  className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight tabular-nums mb-2 leading-none"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-soft-sun)',
                  }}
                >
                  {stat.value}
                </div>

                <div
                  className="text-base font-bold mb-1"
                  style={{ color: 'var(--color-warm-white)' }}
                >
                  {stat.label}
                </div>

                <p
                  className="text-xs sm:text-sm leading-relaxed"
                  style={{ color: 'var(--color-clay-sand)' }}
                >
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
