import React from 'react';

/**
 * Shared Top Area:
 * White double-arrows pointing right positioned in the top-right corner of every screen.
 * Extracted directly from the SVG path (viewBox="0 0 79 63", translated from 706..785, 43..106).
 */
export default function TopHeader({ onLogoClick, currentScreen, onNavigate }) {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 pt-5 sm:px-8 sm:pt-7 md:px-10 md:pt-9 pointer-events-none">
      {/* Subtle screen breadcrumb / back pill for easy navigation & previewing */}
      <div className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 bg-pureBlack/45 backdrop-blur-md px-2.5 sm:px-3 py-1.5 rounded-full border border-pureWhite/15 text-[10px] sm:text-xs font-medium tracking-wider uppercase text-pureWhite/90 shadow-sm">
        <button
          onClick={() => onNavigate('landing')}
          className={`px-2 py-0.5 rounded-full transition-colors ${
            currentScreen === 'landing'
              ? 'bg-primaryYellow text-pureBlack font-bold'
              : 'hover:text-primaryYellow'
          }`}
        >
          Landing
        </button>
        <span className="text-pureWhite/30">/</span>
        <button
          onClick={() => onNavigate('home')}
          className={`px-2 py-0.5 rounded-full transition-colors ${
            currentScreen === 'home'
              ? 'bg-primaryYellow text-pureBlack font-bold'
              : 'hover:text-primaryYellow'
          }`}
        >
          Home
        </button>
        <span className="text-pureWhite/30">/</span>
        <button
          onClick={() => onNavigate('zones')}
          className={`px-2 py-0.5 rounded-full transition-colors ${
            currentScreen === 'zones'
              ? 'bg-primaryYellow text-pureBlack font-bold'
              : 'hover:text-primaryYellow'
          }`}
        >
          Zones
        </button>
        <span className="text-pureWhite/30">|</span>
        <button
          onClick={() => onNavigate('docs')}
          className="px-2 py-0.5 rounded-full bg-pureWhite/15 hover:bg-primaryYellow hover:text-pureBlack font-semibold transition-colors"
          title="Open /docs Team Handover Guide"
        >
          /docs
        </button>
      </div>

      {/* Exact White Double-Arrows Logo from SVG */}
      <button
        onClick={onLogoClick}
        aria-label="Copenhagen Marathon Home"
        title="Return to Landing Page"
        className="pointer-events-auto group focus:outline-none transition-transform active:scale-95 hover:scale-105"
      >
        <svg
          viewBox="706 43 79 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-10 sm:w-16 sm:h-12 md:w-[79px] md:h-[63px] drop-shadow-md"
        >
          <path
            d="M771.839 43H758.671L771.839 64.0002L758.671 85.0003L771.839 106.001H785.006L771.839 85.0003L785.006 64.0002L771.839 43ZM719.168 64.0002H706L719.168 85.0003H745.503L758.671 64.0002L745.503 43H732.335L745.503 64.0002L732.335 85.0003L719.168 64.0002Z"
            fill="#FFFFFF"
            className="group-hover:fill-primaryYellow transition-colors duration-200"
          />
        </svg>
      </button>
    </header>
  );
}

