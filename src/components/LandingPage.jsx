import React from 'react';
import SlantedButton from './SlantedButton';
import WavyFooter from './WavyFooter';

/**
 * Screen 1: Landing Page (`Landing Page.svg`)
 * - Full-screen background image of runners (grayscale) with a `#888888` dark overlay (`opacity-76`)
 *   and large subtle chevron/arrow patterns pointing right (`fill="white" fill-opacity="0.08"`).
 * - Text: "WELCOME TO" (White, wide letter-spacing), followed by a massive "COPENHAGEN MARATHON" in Primary Yellow (`#FFEE00`).
 * - Centered slanted yellow button with "START" (`#FFEE32` parallelogram, `#494949` bold italic text).
 * - Shared white wavy container at the bottom.
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

      {/* Subtle Large Chevron / Double-Arrow Pattern Pointing Right (Extracted directly from Landing Page.svg element 8) */}
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
      <main className="relative z-20 flex-1 flex flex-col justify-between px-6 sm:px-10 md:px-12 pt-28 sm:pt-36 md:pt-44 pb-6">
        {/* Hero Typography Block */}
        <div className="mt-2 sm:mt-6 md:mt-8">
          <p className="font-montserrat font-bold text-pureWhite text-lg sm:text-2xl md:text-[35px] tracking-[0.28em] uppercase mb-3 sm:mb-5 drop-shadow-sm">
            {lang === 'EN' ? 'WELCOME TO' : 'VELKOMMEN TIL'}
          </p>

          <h1 className="font-montserrat font-black italic text-primaryYellow text-4xl sm:text-6xl md:text-[72px] leading-[1.08] tracking-tight uppercase drop-shadow-md">
            COPENHAGEN
            <br />
            MARATHON
          </h1>
        </div>

        {/* Centered Slanted Yellow 'START' Button */}
        <div className="flex items-center justify-center my-auto pt-6 pb-4">
          <SlantedButton variant="start" onClick={onStart}>
            {lang === 'EN' ? 'START' : 'START'}
          </SlantedButton>
        </div>
      </main>

      {/* Shared Wavy Bottom Container */}
      <WavyFooter lang={lang} onToggleLang={onToggleLang} variant="landing" />
    </div>
  );
}

