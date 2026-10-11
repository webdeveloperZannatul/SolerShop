import React, { useState } from 'react';
import { Sun, CheckCircle2, ArrowRight, ShieldCheck, Phone, RefreshCw } from 'lucide-react';

interface EnquirySectionProps {
  initialService?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({ initialService = '' }) => {
  // Calculator state
  const [propertyType, setPropertyType] = useState<'single' | 'double' | 'rural' | 'commercial'>('single');
  const [quarterlyBill, setQuarterlyBill] = useState<number>(650);
  const [includeBattery, setIncludeBattery] = useState<boolean>(true);

  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [suburb, setSuburb] = useState('');
  const [notes, setNotes] = useState(initialService ? `Interested in: ${initialService}` : '');
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Derived estimates based on realistic Australian solar irradiation
  const getEstimates = () => {
    let sizeKw = 6.6;
    if (propertyType === 'commercial') {
      sizeKw = Math.round(quarterlyBill / 45);
      if (sizeKw < 15) sizeKw = 15;
    } else if (quarterlyBill > 1200) {
      sizeKw = 13.2;
    } else if (quarterlyBill > 700) {
      sizeKw = 10.4;
    } else if (quarterlyBill > 450) {
      sizeKw = 8.8;
    } else {
      sizeKw = 6.6;
    }

    const annualGenerationKwh = Math.round(sizeKw * 1460); // ~4 sun peak hours/day
    const baseSavings = Math.round(quarterlyBill * 3.4);
    const batteryBonus = includeBattery ? 520 : 0;
    const estAnnualSavings = baseSavings + batteryBonus;

    return {
      sizeKw,
      annualGenerationKwh,
      estAnnualSavings,
    };
  };

  const estimates = getEstimates();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'SLR-' + Math.floor(10000 + Math.random() * 90000);
    setReferenceId(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setSuburb('');
    setNotes('');
  };

  return (
    <section
      id="enquiry-form"
      className="py-24 lg:py-28 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-warm-white)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div
            className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-bold tracking-wider uppercase"
            style={{ color: 'var(--color-logo-green)' }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full inline-block"
              style={{ backgroundColor: 'var(--color-logo-green)' }}
              aria-hidden="true"
            />
            <span>Free Solar & Battery Assessment</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-dark-bark)',
            }}
          >
            Find out what your roof could save you.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--color-dark-bark)' }}>
            Adjust the sliders below to see your estimated system size and potential bill reduction,
            then request your tailored satellite design proposal.
          </p>
        </div>

        {/* 2-Column Split: Estimator on left, Form or Confirmation on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive System Calculator (7 cols) */}
          <div
            className="lg:col-span-6 p-7 sm:p-9 rounded-solar-lg border shadow-solar-sm"
            style={{
              backgroundColor: 'var(--color-cream)',
              borderColor: 'var(--color-clay-sand)',
            }}
          >
            <h3
              className="text-xl sm:text-2xl font-black mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-dark-bark)',
              }}
            >
              1. Estimate Your Solar Potential
            </h3>

            {/* Property Type Selector */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: 'var(--color-soil-brown)' }}>
                Property Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'single', label: 'Single Storey' },
                  { id: 'double', label: 'Double Storey' },
                  { id: 'rural', label: 'Rural / Farm' },
                  { id: 'commercial', label: 'Commercial' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setPropertyType(type.id as any)}
                    className="py-2.5 px-3 rounded-solar-sm text-xs font-bold border transition-all cursor-pointer text-center"
                    style={{
                      backgroundColor: propertyType === type.id ? 'var(--color-deep-forest)' : 'var(--color-warm-white)',
                      borderColor: 'var(--color-clay-sand)',
                      color: propertyType === type.id ? 'var(--color-warm-white)' : 'var(--color-dark-bark)',
                    }}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quarterly Electricity Bill Slider */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--color-soil-brown)' }}>
                  Average Quarterly Bill
                </label>
                <span
                  className="text-lg font-black tabular-nums"
                  style={{ color: 'var(--color-deep-forest)' }}
                >
                  ${quarterlyBill} / quarter
                </span>
              </div>
              <input
                type="range"
                min="250"
                max="2500"
                step="50"
                value={quarterlyBill}
                onChange={(e) => setQuarterlyBill(Number(e.target.value))}
                className="w-full h-2 rounded-solar-sm cursor-pointer accent-[#4F8A55]"
                style={{ backgroundColor: 'var(--color-clay-sand)' }}
              />
              <div className="flex justify-between text-[11px] font-semibold mt-1" style={{ color: 'var(--color-soil-brown)' }}>
                <span>$250 (Small Home)</span>
                <span>$1,200 (Family)</span>
                <span>$2,500+ (High Usage)</span>
              </div>
            </div>

            {/* Battery Option Toggle */}
            <div
              className="p-4 rounded-solar-sm border mb-8 flex items-center justify-between cursor-pointer"
              style={{
                backgroundColor: 'var(--color-warm-white)',
                borderColor: 'var(--color-clay-sand)',
              }}
              onClick={() => setIncludeBattery(!includeBattery)}
            >
              <div>
                <div className="text-sm font-bold" style={{ color: 'var(--color-dark-bark)' }}>
                  Include Night Battery Storage
                </div>
                <div className="text-xs" style={{ color: 'var(--color-soil-brown)' }}>
                  Backup protection for blackouts & zero evening peak grid draw
                </div>
              </div>
              <div
                className="w-6 h-6 rounded-solar-sm border flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: includeBattery ? 'var(--color-logo-green)' : 'var(--color-warm-white)',
                  borderColor: 'var(--color-clay-sand)',
                }}
              >
                {includeBattery && <CheckCircle2 size={16} style={{ color: 'var(--color-warm-white)' }} />}
              </div>
            </div>

            {/* Calculation Result Callout */}
            <div
              className="p-6 rounded-solar border"
              style={{
                backgroundColor: 'var(--color-pale-sage)',
                borderColor: 'var(--color-clay-sand)',
              }}
            >
              <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--color-deep-forest)' }}>
                Estimated Solar Feasibility
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--color-soil-brown)' }}>
                    Recommended Size
                  </div>
                  <div
                    className="text-2xl sm:text-3xl font-black tabular-nums"
                    style={{ color: 'var(--color-deep-forest)' }}
                  >
                    {estimates.sizeKw} kW
                  </div>
                  <div className="text-[11px] font-medium" style={{ color: 'var(--color-soil-brown)' }}>
                    ~{estimates.annualGenerationKwh.toLocaleString()} kWh / year
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold" style={{ color: 'var(--color-soil-brown)' }}>
                    Est. Yearly Savings
                  </div>
                  <div
                    className="text-2xl sm:text-3xl font-black tabular-nums"
                    style={{ color: 'var(--color-terracotta)' }}
                  >
                    ${estimates.estAnnualSavings.toLocaleString()}
                  </div>
                  <div className="text-[11px] font-medium" style={{ color: 'var(--color-soil-brown)' }}>
                    {includeBattery ? 'With Battery Storage' : 'Solar Only'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form OR Confirmation Card (6 cols) */}
          <div
            className="lg:col-span-6 p-7 sm:p-9 rounded-solar-lg border shadow-solar-sm"
            style={{
              backgroundColor: 'var(--color-warm-white)',
              borderColor: 'var(--color-clay-sand)',
            }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3
                  className="text-xl sm:text-2xl font-black mb-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-dark-bark)',
                  }}
                >
                  2. Request Your Free Proposal
                </h3>
                <p className="text-xs sm:text-sm font-normal mb-3" style={{ color: 'var(--color-dark-bark)' }}>
                  A CEC-accredited engineer will review your satellite roof layout. No obligation.
                </p>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-soil-brown)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-solar-sm border text-sm font-medium transition-colors"
                    style={{
                      borderColor: 'var(--color-clay-sand)',
                      backgroundColor: 'var(--color-cream)',
                      color: 'var(--color-dark-bark)',
                    }}
                  />
                </div>

                {/* Phone & Email in 2 cols */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-soil-brown)' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0400 000 000"
                      className="w-full px-4 py-3 rounded-solar-sm border text-sm font-medium transition-colors"
                      style={{
                        borderColor: 'var(--color-clay-sand)',
                        backgroundColor: 'var(--color-cream)',
                        color: 'var(--color-dark-bark)',
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-soil-brown)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full px-4 py-3 rounded-solar-sm border text-sm font-medium transition-colors"
                      style={{
                        borderColor: 'var(--color-clay-sand)',
                        backgroundColor: 'var(--color-cream)',
                        color: 'var(--color-dark-bark)',
                      }}
                    />
                  </div>
                </div>

                {/* Suburb / Postcode */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-soil-brown)' }}>
                    Installation Suburb & Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    value={suburb}
                    onChange={(e) => setSuburb(e.target.value)}
                    placeholder="e.g. Stirling, SA 5152"
                    className="w-full px-4 py-3 rounded-solar-sm border text-sm font-medium transition-colors"
                    style={{
                      borderColor: 'var(--color-clay-sand)',
                      backgroundColor: 'var(--color-cream)',
                      color: 'var(--color-dark-bark)',
                    }}
                  />
                </div>

                {/* Optional Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-soil-brown)' }}>
                    Notes (Roof Type, Shading, Preferences)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Tile roof, tree on east side, interested in EV charger readiness..."
                    className="w-full px-4 py-2.5 rounded-solar-sm border text-sm font-medium resize-none transition-colors"
                    style={{
                      borderColor: 'var(--color-clay-sand)',
                      backgroundColor: 'var(--color-cream)',
                      color: 'var(--color-dark-bark)',
                    }}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full mt-2 py-4 px-6 rounded-solar font-extrabold text-base transition-all shadow-solar-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer inline-flex items-center justify-center gap-2"
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
                  <span>Request Free Engineering Proposal</span>
                  <ArrowRight size={18} />
                </button>

                {/* Reassurance note */}
                <div className="flex items-center justify-center gap-2 text-xs font-semibold mt-1" style={{ color: 'var(--color-soil-brown)' }}>
                  <ShieldCheck size={14} style={{ color: 'var(--color-logo-green)' }} />
                  <span>Strict privacy policy · No pushy telemarketing sales calls</span>
                </div>
              </form>
            ) : (
              /* Confirmation Card */
              <div className="text-center py-8 animate-solar-fade">
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--color-pale-sage)' }}
                >
                  <CheckCircle2 size={36} style={{ color: 'var(--color-logo-green)' }} />
                </div>

                <h3
                  className="text-2xl font-black mb-2"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-deep-forest)',
                  }}
                >
                  Thank You, {name}!
                </h3>

                <p className="text-sm font-bold mb-4" style={{ color: 'var(--color-soil-brown)' }}>
                  Proposal Request #{referenceId} Confirmed
                </p>

                <div
                  className="p-5 rounded-solar-sm border text-left text-sm mb-6 space-y-2"
                  style={{
                    backgroundColor: 'var(--color-cream)',
                    borderColor: 'var(--color-clay-sand)',
                    color: 'var(--color-dark-bark)',
                  }}
                >
                  <div>
                    <strong style={{ color: 'var(--color-deep-forest)' }}>Target Location:</strong> {suburb}
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-deep-forest)' }}>Recommended Array:</strong> {estimates.sizeKw} kW ({includeBattery ? 'With Battery Storage' : 'Solar Only'})
                  </div>
                  <div>
                    <strong style={{ color: 'var(--color-deep-forest)' }}>Next Step:</strong> One of our licensed CEC solar engineers will model your roof slope via aerial high-res imagery and prepare your complete 3D proposal within 1 business day.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="tel:1300765270"
                    className="inline-flex items-center gap-2 py-2.5 px-5 rounded-solar text-xs font-bold border transition-colors"
                    style={{
                      borderColor: 'var(--color-clay-sand)',
                      backgroundColor: 'var(--color-warm-white)',
                      color: 'var(--color-soil-brown)',
                    }}
                  >
                    <Phone size={14} style={{ color: 'var(--color-logo-green)' }} />
                    <span>Or call us directly: 1300 765 270</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-solar text-xs font-bold cursor-pointer"
                    style={{
                      color: 'var(--color-deep-forest)',
                    }}
                  >
                    <RefreshCw size={13} />
                    <span>Run Another Calculation</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
