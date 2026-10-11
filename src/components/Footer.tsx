import React from 'react';
import { SolarLogo } from './SolarLogo';
import { HillDivider } from './HillDivider';
import { Phone, Mail, MapPin, ShieldCheck, SunMedium } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="relative pt-16 pb-12 overflow-hidden text-sm"
      style={{
        backgroundColor: 'var(--color-deep-forest)',
        color: 'var(--color-warm-white)',
      }}
    >
      {/* Top gentle curved hill divider from Warm White into Deep Forest */}
      <div className="absolute top-0 left-0 right-0">
        <HillDivider fillColor="var(--color-warm-white)" flip height={46} variant="gentle" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b" style={{ borderColor: 'rgba(230, 237, 214, 0.2)' }}>
          {/* Col 1 & 2: Brand & Credentials (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <div className="mb-4">
              <SolarLogo variant="dark-bg" size="md" />
            </div>

            <p className="text-sm leading-relaxed mb-6 max-w-sm font-normal" style={{ color: 'var(--color-pale-sage)' }}>
              Brand-led, trustworthy solar engineering for Australian homes, farms, and businesses.
              Built by certified master trades with a lifetime dedication to honest generation.
            </p>

            <div className="flex flex-col gap-2.5 text-xs font-semibold" style={{ color: 'var(--color-soft-sun)' }}>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} style={{ color: 'var(--color-sun-yellow)' }} />
                <span>CEC Approved Solar Retailer & Master Electrician</span>
              </div>
              <div className="flex items-center gap-2">
                <SunMedium size={16} style={{ color: 'var(--color-sun-yellow)' }} />
                <span>Electrical Contractor Licence PGE #284192</span>
              </div>
            </div>
          </div>

          {/* Col 3: Solar Systems */}
          <div>
            <h4
              className="text-base font-extrabold mb-4 tracking-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-soft-sun)',
              }}
            >
              Solar Systems
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium" style={{ color: 'var(--color-pale-sage)' }}>
              <li>
                <a href="#what-we-offer" className="hover:underline transition-colors hover:text-[#FFFDF8]">
                  Residential 6.6kW – 13.2kW
                </a>
              </li>
              <li>
                <a href="#what-we-offer" className="hover:underline transition-colors hover:text-[#FFFDF8]">
                  Tesla & BYD Home Batteries
                </a>
              </li>
              <li>
                <a href="#what-we-offer" className="hover:underline transition-colors hover:text-[#FFFDF8]">
                  Commercial 30kW – 250kW
                </a>
              </li>
              <li>
                <a href="#what-we-offer" className="hover:underline transition-colors hover:text-[#FFFDF8]">
                  Agribusiness & Cold Storage
                </a>
              </li>
              <li>
                <a href="#what-we-offer" className="hover:underline transition-colors hover:text-[#FFFDF8]">
                  Micro-Inverter Shading Arrays
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Guides */}
          <div>
            <h4
              className="text-base font-extrabold mb-4 tracking-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-soft-sun)',
              }}
            >
              Resources & Advice
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium" style={{ color: 'var(--color-pale-sage)' }}>
              <li>
                <a href="#enquiry-form" className="hover:underline transition-colors hover:text-[#FFFDF8]">
                  Solar Savings Estimator
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:underline transition-colors hover:text-[#FFFDF8]">
                  Quality Standards Comparison
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:underline transition-colors hover:text-[#FFFDF8]">
                  4-Step Installation Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline transition-colors hover:text-[#FFFDF8]">
                  Local Customer Case Studies
                </a>
              </li>
              <li>
                <a href="#enquiry-form" className="hover:underline transition-colors hover:text-[#FFFDF8]">
                  STC Government Rebate Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <h4
              className="text-base font-extrabold mb-4 tracking-tight"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-soft-sun)',
              }}
            >
              Contact Us
            </h4>
            <div className="space-y-3 text-xs sm:text-sm font-medium" style={{ color: 'var(--color-pale-sage)' }}>
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-sun-yellow)' }} />
                <div>
                  <div className="font-bold text-white">1300 765 270</div>
                  <div className="text-xs" style={{ color: 'var(--color-clay-sand)' }}>Mon–Fri 8:00am – 5:30pm</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0" style={{ color: 'var(--color-sun-yellow)' }} />
                <a href="mailto:hello@solarshop.com.au" className="hover:underline">
                  hello@solarshop.com.au
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-sun-yellow)' }} />
                <span className="leading-snug">
                  14 Sunstone Way, Torrens Park SA 5062
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: 'var(--color-pale-sage)' }}>
          <div>
            © {new Date().getFullYear()} solarshop Australia. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span aria-hidden="true" style={{ color: 'var(--color-sage-olive)' }}>·</span>
            <span>Terms of Service</span>
            <span aria-hidden="true" style={{ color: 'var(--color-sage-olive)' }}>·</span>
            <span>CEC Accreditation #A84920</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
