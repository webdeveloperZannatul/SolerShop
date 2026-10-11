import React from 'react';

interface SolarLogoProps {
  variant?: 'light' | 'dark-bg';
  size?: 'sm' | 'md' | 'lg';
}

export const SolarLogo: React.FC<SolarLogoProps> = ({ variant = 'light', size = 'md' }) => {
  const isDarkBg = variant === 'dark-bg';

  const fontSizes = {
    sm: 'text-xl',
    md: 'text-2xl lg:text-[28px]',
    lg: 'text-3xl lg:text-4xl',
  };

  const svgSizes = {
    sm: { width: 22, height: 22 },
    md: { width: 28, height: 28 },
    lg: { width: 36, height: 36 },
  };

  const dim = svgSizes[size];

  // Colors based on brand guidelines
  // On light bg: "solar" is Logo Green #4F8A55, "shop" is Logo Blue #4A7FB0
  // On dark bg (Deep Forest footer): "solar" is Pale Sage #E6EDD6 or Warm White, "shop" is Morning Sky #E3EEF6
  const greenText = isDarkBg ? 'var(--color-pale-sage)' : 'var(--color-logo-green)';
  const blueText = isDarkBg ? 'var(--color-morning-sky)' : 'var(--color-logo-blue)';
  const hillFront = isDarkBg ? 'var(--color-sage-olive)' : 'var(--color-logo-green)';
  const hillBack = isDarkBg ? 'var(--color-pale-sage)' : 'var(--color-deep-forest)';
  const sunFill = 'var(--color-sun-yellow)';

  return (
    <div className={`inline-flex items-center tracking-tight font-extrabold select-none ${fontSizes[size]}`} style={{ fontFamily: 'var(--font-heading)' }}>
      {/* "solar" */}
      <span style={{ color: greenText }} className="tracking-tighter">
        solar
      </span>

      {/* "sh" */}
      <span style={{ color: blueText }} className="tracking-tighter ml-[1px]">
        sh
      </span>

      {/* "o" made of a yellow sun over green hills */}
      <span className="inline-flex items-center justify-center mx-[1.5px] align-middle translate-y-[1px]">
        <svg
          width={dim.width}
          height={dim.height}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Sun over hills icon"
          role="img"
          className="overflow-visible"
        >
          {/* Muted warm Sun circle */}
          <circle cx="16" cy="11.5" r="7.5" fill={sunFill} />
          {/* Subtle sun rays - soft organic arches */}
          <path
            d="M16 1.5V3.5M23.5 4.5L22 6M8.5 4.5L10 6"
            stroke="var(--color-soft-sun)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Back Hill */}
          <path
            d="M4 27.5C9 21.5 15.5 21 21 24C24 25.5 26.5 27 28 27.5H4Z"
            fill={hillBack}
          />
          {/* Front Hill */}
          <path
            d="M10 27.5C14.5 23 20 23.5 25 27.5H10Z"
            fill={hillFront}
          />
          {/* Base ground line */}
          <path
            d="M4 27.5H28"
            stroke={hillBack}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {/* "p" */}
      <span style={{ color: blueText }} className="tracking-tighter">
        p
      </span>
    </div>
  );
};
