import React from 'react';

/**
 * Slanted Parallelogram Action Button
 *
 * Guidelines & SVG Extraction:
 * - Uses Tailwind's skew utility (`-skew-x-[23deg]` / `-skew-x-12`) to slant the parallelogram background,
 *   while counter-skewing (`skew-x-[23deg]`) the inner span so the text remains un-skewed (with Montserrat Bold Italic).
 * - In Homepage.svg & Zones Page.svg, each navigation button also has a semi-transparent yellow rectangular
 *   backdrop (`fill="#FFEE00" fill-opacity="0.36"`) offset behind the slanted parallelogram (`fill="#FFEE32"`),
 *   and text in `#494949` (`text-buttonTextDark`).
 * - On Zones Page, the active middle button ("Explore") is taller (`height: 87` vs `55`), extending downward into the wave.
 */
export default function SlantedButton({
  children,
  onClick,
  variant = 'nav', // 'start' | 'nav'
  active = false,
  className = '',
}) {
  if (variant === 'start') {
    // Landing Page 'START' button: M540 702H300.293L267 781H506.707L540 702Z
    return (
      <button
        onClick={onClick}
        className={`group relative inline-flex items-center justify-center focus:outline-none transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
      >
        {/* Slanted Parallelogram Background */}
        <span
          className="w-52 h-14 sm:w-60 sm:h-16 md:w-[240px] md:h-[79px] bg-buttonYellow -skew-x-[23deg] shadow-lg transition-all duration-200 group-hover:bg-primaryYellow group-hover:shadow-[0_0_25px_rgba(255,238,0,0.5)] flex items-center justify-center"
        >
          {/* Un-skewed Text Container */}
          <span className="skew-x-[23deg] font-montserrat font-bold italic text-buttonTextDark text-xl sm:text-2xl md:text-[32px] tracking-wide select-none">
            {children}
          </span>
        </span>
      </button>
    );
  }

  // Navigation buttons ('Updates', 'Explore', 'Track Runner')
  // SVG shows:
  // 1) Rectangular backdrop: fill="#FFEE00" fill-opacity="0.36" (bg-buttonShadowYellow)
  // 2) Parallelogram foreground: fill="#FFEE32" (bg-buttonYellow) skewed at -23deg
  // 3) Un-skewed Montserrat Bold Italic text in #494949 (text-buttonTextDark)
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-start justify-center focus:outline-none transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      {/* Semi-transparent rectangular yellow backdrop from SVG (x=38..249, width=211, fill=#FFEE00, opacity=0.36) */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 bg-buttonShadowYellow transition-all duration-200 group-hover:bg-primaryYellow/50 ${
          active
            ? 'h-12 sm:h-16 md:h-[87px]'
            : 'h-10 sm:h-12 md:h-[55px]'
        }`}
      />

      {/* Slanted Parallelogram Foreground (#FFEE32) */}
      <span
        className={`relative w-full bg-buttonYellow -skew-x-[23deg] flex items-center justify-center px-3 sm:px-5 md:px-6 transition-all duration-200 group-hover:bg-primaryYellow shadow-sm ${
          active
            ? 'h-12 sm:h-16 md:h-[87px]'
            : 'h-10 sm:h-12 md:h-[55px]'
        }`}
      >
        {/* Un-skewed Text */}
        <span className="skew-x-[23deg] font-montserrat font-bold italic text-buttonTextDark text-xs sm:text-base md:text-[20px] whitespace-nowrap tracking-tight leading-none">
          {children}
        </span>
      </span>
    </button>
  );
}

