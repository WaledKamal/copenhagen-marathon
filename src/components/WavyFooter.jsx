import React, { useState } from 'react';

/**
 * Shared Bottom Area Content (Inside the white wavy container):
 * - Wavy top edge implemented using the exact cubic-bezier SVG path extracted from Landing Page.svg & Homepage.svg:
 *   `M15.8552 1055.35C161.779 897.008 417.968 1089.62 861 1055.35V1237H15.8552C15.8552 1237 -130.069 1213.7 15.8552 1055.35Z`
 * - Left: QR code icon (`/assets/qr-code.png` extracted directly from SVG `image1`) with the exact text
 *   "Scan the Qr code to so something" in `#888888` (`text-darkOverlay`), very small text.
 * - Right: Language toggle switch (EN / DK) shaped like a rounded pill (`border-2 border-primaryYellow`).
 *   Active state ('EN') has `bg-primaryYellow` (`#FFEE00`) + subtle 20% linear gradient (`#FF8A0D` -> `#FFFFFD`) and black text.
 *   Inactive state ('DK') has `bg-pureWhite`, `border-2 border-primaryYellow`, and black text.
 */
export default function WavyFooter({ lang, onToggleLang, variant = 'landing' }) {
  const [showQrModal, setShowQrModal] = useState(false);

  return (
    <>
      <footer className="relative w-full z-20 select-none pointer-events-auto shrink-0">
        {/* Exact SVG Wavy Top Edge */}
        <div className="relative w-full overflow-hidden leading-none -mb-1 pointer-events-none">
          {variant === 'landing' ? (
            <svg
              viewBox="0 980 834 95"
              preserveAspectRatio="none"
              className="w-full h-10 sm:h-14 md:h-[78px] block"
            >
              <path
                d="M15.8552 1055.35C161.779 897.008 417.968 1089.62 861 1055.35V1237H15.8552C15.8552 1237 -130.069 1213.7 15.8552 1055.35Z"
                fill="#FFFFFF"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 885 834 110"
              preserveAspectRatio="none"
              className="w-full h-11 sm:h-16 md:h-[85px] block"
            >
              <path
                d="M-50.4116 960.021C94.5137 793.657 374.206 971.519 838.168 912.262L847.917 1093.65L-40.6627 1141.41C-40.6627 1141.41 -195.337 1126.38 -50.4116 960.021Z"
                fill="#FFFFFF"
              />
            </svg>
          )}
        </div>

        {/* White Container Body */}
        <div className="bg-pureWhite w-full px-5 pb-4 pt-1 sm:px-8 sm:pb-5 md:px-10 md:pb-6 flex items-end justify-between">
          {/* Left: QR Code Icon + "Scan the Qr code to so something" */}
          <button
            onClick={() => setShowQrModal(true)}
            className="group flex flex-col items-center text-center focus:outline-none transition-transform active:scale-95"
            title="Click to enlarge QR Code"
          >
            <div className="w-11 h-12 sm:w-14 sm:h-15 md:w-[68px] md:h-[73px] flex items-center justify-center overflow-hidden rounded-sm group-hover:ring-2 group-hover:ring-primaryYellow transition-all">
              <img
                src="/assets/qr-code.png"
                alt="QR Code"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-1 text-[8px] sm:text-[9px] md:text-[10px] leading-[1.15] font-medium text-darkOverlay max-w-[92px] sm:max-w-[100px] tracking-tight">
              Scan the Qr code to
              <br />
              so something
            </p>
          </button>

          {/* Right: Language Toggle Switch (EN / DK) shaped like a rounded pill */}
          <div
            role="group"
            aria-label="Language selector"
            className="inline-flex items-center rounded-[19px] border-2 border-primaryYellow bg-pureWhite p-1 sm:p-1.5 gap-1.5 sm:gap-2 shadow-sm"
          >
            {/* EN Pill */}
            <button
              type="button"
              onClick={() => onToggleLang('EN')}
              aria-pressed={lang === 'EN'}
              className={`relative min-w-[44px] sm:min-w-[52px] md:w-[55px] h-6 sm:h-7 md:h-[27px] rounded-full border-2 border-primaryYellow flex items-center justify-center font-montserrat font-bold text-[11px] sm:text-xs md:text-[14px] text-pureBlack transition-all duration-200 overflow-hidden ${
                lang === 'EN'
                  ? 'bg-primaryYellow shadow-inner'
                  : 'bg-pureWhite hover:bg-primaryYellow/20'
              }`}
            >
              {lang === 'EN' && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20 bg-gradient-to-tr from-langGradientStart to-langGradientEnd pointer-events-none"
                />
              )}
              <span className="relative z-10 leading-none">EN</span>
            </button>

            {/* DK Pill */}
            <button
              type="button"
              onClick={() => onToggleLang('DK')}
              aria-pressed={lang === 'DK'}
              className={`relative min-w-[44px] sm:min-w-[52px] md:w-[55px] h-6 sm:h-7 md:h-[27px] rounded-full border-2 border-primaryYellow flex items-center justify-center font-montserrat font-bold text-[11px] sm:text-xs md:text-[14px] text-pureBlack transition-all duration-200 overflow-hidden ${
                lang === 'DK'
                  ? 'bg-primaryYellow shadow-inner'
                  : 'bg-pureWhite hover:bg-primaryYellow/20'
              }`}
            >
              {lang === 'DK' && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20 bg-gradient-to-tr from-langGradientStart to-langGradientEnd pointer-events-none"
                />
              )}
              <span className="relative z-10 leading-none">DK</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Optional Interactive QR Code Preview Modal when user clicks the QR code */}
      {showQrModal && (
        <div
          onClick={() => setShowQrModal(false)}
          className="fixed inset-0 z-50 bg-pureBlack/75 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-pureWhite text-pureBlack rounded-2xl p-6 max-w-xs w-full flex flex-col items-center text-center shadow-2xl border-2 border-primaryYellow"
          >
            <div className="w-40 h-40 p-2 bg-pureWhite rounded-lg border border-darkOverlay/20 mb-3">
              <img
                src="/assets/qr-code.png"
                alt="Copenhagen Marathon Spectator QR Code"
                className="w-full h-full object-contain [image-rendering:pixelated]"
              />
            </div>
            <h3 className="font-montserrat font-bold italic text-lg text-buttonTextDark">
              {lang === 'EN' ? 'Spectator Companion Pass' : 'Tilskuer QR-Pas'}
            </h3>
            <p className="text-xs text-darkOverlay mt-1 mb-4">
              {lang === 'EN'
                ? 'Scan the Qr code to share live cheering zones and runner tracking with friends.'
                : 'Scan QR-koden for at dele heppezoner og løbersporing med venner.'}
            </p>
            <button
              onClick={() => setShowQrModal(false)}
              className="bg-buttonYellow hover:bg-primaryYellow -skew-x-12 px-6 py-2 font-bold italic text-buttonTextDark text-sm shadow"
            >
              <span className="skew-x-12 inline-block">
                {lang === 'EN' ? 'CLOSE' : 'LUK'}
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

