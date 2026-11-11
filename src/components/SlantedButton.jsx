import React from 'react';

/**
 * Slanted Parallelogram Action Button
 *
 * Matches Figma SVG specs across Landing Page, Homepage, Zones Page V2, Updates, and Track Runner:
 * - Inactive nav buttons:
 *   1) Pale yellow rectangular backdrop (`fill="#FFEE00" fill-opacity="0.36"` / `#FFF99B`) with drop shadow
 *   2) Skewed parallelogram foreground (`fill="#FFEE32"`, `-skew-x-[21deg]`)
 * - Active nav button:
 *   Shows the pale yellow rectangular button (`#FFF99B` / `bg-[#FFF89A]`) without the bright skewed parallelogram overlay,
 *   matching `Zones Page V2.svg`, `Race day updates — editable page.svg`, and `Find your runner — *.svg`.
 */
export default function SlantedButton({
  children,
  onClick,
  variant = 'nav', // 'start' | 'nav'
  active = false,
  className = '',
}) {
  if (variant === 'start') {
    return (
      <button
        onClick={onClick}
        className={`group relative inline-flex items-center justify-center focus:outline-none transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
      >
        <span className="w-52 h-14 sm:w-60 sm:h-16 md:w-[240px] md:h-[79px] bg-buttonYellow -skew-x-[23deg] shadow-lg transition-all duration-200 group-hover:bg-primaryYellow group-hover:shadow-[0_0_25px_rgba(255,238,0,0.5)] flex items-center justify-center">
          <span className="skew-x-[23deg] font-montserrat font-bold italic text-buttonTextDark text-xl sm:text-2xl md:text-[32px] tracking-wide select-none">
            {children}
          </span>
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`group relative w-full h-10 sm:h-12 md:h-[55px] flex items-center justify-center focus:outline-none transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      {/* Rectangular pale-yellow backdrop with Figma drop shadow */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[#FFF89A] shadow-[2px_3px_4px_rgba(0,0,0,0.22)] transition-colors duration-200 group-hover:bg-[#FFF570]"
      />

      {/* Slanted Parallelogram Foreground (#FFEE32) — shown when not in the flat active state */}
      {!active && (
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-[6%] right-[6%] bg-buttonYellow -skew-x-[21deg] transition-all duration-200 group-hover:bg-primaryYellow"
        />
      )}

      {/* Un-skewed Text */}
      <span className="relative z-10 font-montserrat font-bold italic text-buttonTextDark text-xs sm:text-base md:text-[20px] whitespace-nowrap tracking-tight leading-none px-2">
        {children}
      </span>
    </button>
  );
}
