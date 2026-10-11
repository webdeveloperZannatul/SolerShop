import React from 'react';

interface HillDividerProps {
  fillColor: string;
  bgColor?: string;
  flip?: boolean;
  height?: number;
  variant?: 'gentle' | 'rolling' | 'double';
}

export const HillDivider: React.FC<HillDividerProps> = ({
  fillColor,
  bgColor = 'transparent',
  flip = false,
  height = 54,
  variant = 'gentle',
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none select-none ${flip ? 'rotate-180' : ''}`}
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: `${height}px` }}
      >
        {variant === 'gentle' && (
          <path
            d="M0 45C320 80 620 15 980 50C1180 70 1340 55 1440 40V80H0V45Z"
            fill={fillColor}
          />
        )}
        {variant === 'rolling' && (
          <path
            d="M0 30C280 75 520 10 820 45C1120 80 1320 20 1440 35V80H0V30Z"
            fill={fillColor}
          />
        )}
        {variant === 'double' && (
          <>
            <path
              d="M0 25C360 65 720 15 1080 55C1260 70 1380 40 1440 30V80H0V25Z"
              fill={fillColor}
              opacity="0.35"
            />
            <path
              d="M0 48C280 20 640 70 1000 35C1240 15 1360 45 1440 50V80H0V48Z"
              fill={fillColor}
            />
          </>
        )}
      </svg>
    </div>
  );
};
