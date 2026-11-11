import React from 'react';

/**
 * Shared Top Area:
 * - Quick screen breadcrumb / switcher pill (`Landing / Home / Updates / Zones / Track | /docs`).
 * - White double-arrows pointing right positioned in the top-right corner on dark-background screens (`landing`, `home`, `zones`).
 */
export default function TopHeader({ onLogoClick, currentScreen, onNavigate }) {
  const showWhiteArrows =
    currentScreen === 'landing' ||
    currentScreen === 'home' ||
    currentScreen === 'zones';

  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 pt-3 sm:px-7 sm:pt-4 md:px-9 md:pt-5 pointer-events-none">
      {/* Subtle screen breadcrumb / quick switcher for previewing all Figma screens */}
      <div className="pointer-events-auto flex flex-wrap items-center gap-0.5 sm:gap-1 bg-pureBlack/55 backdrop-blur-md px-2 sm:px-2.5 py-1 rounded-full border border-pureWhite/15 text-[9px] sm:text-[11px] font-medium tracking-wider uppercase text-pureWhite/90 shadow-sm">
        {[
          { id: 'landing', label: 'Landing' },
          { id: 'home', label: 'Home' },
          { id: 'updates', label: 'Updates' },
          { id: 'zones', label: 'Zones' },
          { id: 'track', label: 'Track' },
        ].map((item, idx) => (
          <React.Fragment key={item.id}>
            {idx > 0 && <span className="text-pureWhite/30">/</span>}
            <button
              onClick={() => onNavigate(item.id)}
              className={`px-1.5 sm:px-2 py-0.5 rounded-full transition-colors ${
                currentScreen === item.id
                  ? 'bg-primaryYellow text-pureBlack font-bold'
                  : 'hover:text-primaryYellow'
              }`}
            >
              {item.label}
            </button>
          </React.Fragment>
        ))}
        <span className="text-pureWhite/30">|</span>
        <button
          onClick={() => onNavigate('docs')}
          className="px-1.5 sm:px-2 py-0.5 rounded-full bg-pureWhite/15 hover:bg-primaryYellow hover:text-pureBlack font-semibold transition-colors"
          title="Open /docs Team Handover Guide"
        >
          /docs
        </button>
      </div>

      {/* Exact White Double-Arrows Logo from SVG (Shown on Landing, Home, and Zones screens) */}
      {showWhiteArrows && (
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
            className="w-11 h-9 sm:w-14 sm:h-11 md:w-[72px] md:h-[58px] drop-shadow-md"
          >
            <path
              d="M771.839 43H758.671L771.839 64.0002L758.671 85.0003L771.839 106.001H785.006L771.839 85.0003L785.006 64.0002L771.839 43ZM719.168 64.0002H706L719.168 85.0003H745.503L758.671 64.0002L745.503 43H732.335L745.503 64.0002L732.335 85.0003L719.168 64.0002Z"
              fill="#FFFFFF"
              className="group-hover:fill-primaryYellow transition-colors duration-200"
            />
          </svg>
        </button>
      )}
    </header>
  );
}
