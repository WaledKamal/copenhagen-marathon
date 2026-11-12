import React from 'react';
import SlantedButton from './SlantedButton';
import WavyFooter from './WavyFooter';

/**
 * Screen 1: Landing Page (`Proto - Figma Part Update/Landing Page.svg`)
 * - Full-screen background image of runners (grayscale) with a `#888888` dark overlay (`opacity-76`)
 *   and large subtle chevron/arrow patterns pointing right (`fill="white" fill-opacity="0.08"`).
 * - Text: "ARE YOU READY TO" (White, wide letter-spacing), followed by "EXPLORE THE / COPENHAGEN / MARATHON?" in Primary Yellow (`#FFEE00`).
 * - Centered slanted yellow button with "START" (`#FFEE32` parallelogram, `#494949` bold italic text).
 * - Shared white wavy container at the bottom ("Scan the QR code to open on mobile").
 */
export default function LandingPage({ onStart, lang, onToggleLang }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-darkOverlay overflow-hidden select-none">
      {/* Grayscale Runner Background Image with exact SVG opacity (0.76 over #888888) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/landing-bg.png"
          alt="Copenhagen Marathon Runners"
          className="w-full h-full object-cover object-center opacity-[0.76]"
        />
      </div>

      {/* Subtle Large Chevron / Double-Arrow Pattern Pointing Right */}
      <div className="absolute top-0 right-0 w-[90%] max-w-[753px] h-[52%] max-h-[594px] z-10 pointer-events-none flex justify-end">
        <svg
          viewBox="81 0 753 594"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain object-right-top"
          preserveAspectRatio="xMaxYMin slice"
        >
          <path
            d="M708.552 0H583.041L708.552 198.002L583.041 396.003L708.552 594.005H834.062L708.552 396.003L834.062 198.002L708.552 0ZM206.51 198.002H81L206.51 396.003H457.531L583.041 198.002L457.531 0H332.021L457.531 198.002L332.021 396.003L206.51 198.002Z"
            fill="#FFFFFF"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      {/* Main Content Area */}
      <main className="relative z-20 flex-1 flex flex-col justify-between px-6 sm:px-10 md:px-12 pt-24 sm:pt-32 md:pt-40 pb-6">
        {/* Hero Typography Block (Updated per Figma Landing Page.svg) */}
        <div className="mt-2 sm:mt-4 md:mt-6">
          <p className="font-montserrat font-bold text-pureWhite text-base sm:text-xl md:text-[26px] tracking-[0.26em] uppercase mb-3 sm:mb-5 drop-shadow-sm">
            {lang === 'EN' ? 'ARE YOU READY TO' : 'ER DU KLAR TIL AT'}
          </p>

          <h1 className="font-montserrat font-black text-primaryYellow text-4xl sm:text-6xl md:text-[68px] leading-[1.12] tracking-[0.04em] uppercase drop-shadow-md">
            {lang === 'EN' ? (
              <>
                EXPLORE THE
                <br />
                COPENHAGEN
                <br />
                MARATHON?
              </>
            ) : (
              <>
                UDFORSKE
                <br />
                COPENHAGEN
                <br />
                MARATHON?
              </>
            )}
          </h1>
        </div>

        {/* Centered Slanted Yellow 'START' Button */}
        <div className="flex items-center justify-center my-auto pt-4 pb-2">
          <SlantedButton variant="start" onClick={onStart}>
            START
          </SlantedButton>
        </div>
      </main>
      <div className="relative z-20 w-full bg-pureWhite pt-3 sm:pt-4 flex flex-col shrink-0">
      {/* Shared Wavy Bottom Container */}
      <WavyFooter lang={lang} onToggleLang={onToggleLang} variant="landing" />
    </div>
</div>
  );
}
