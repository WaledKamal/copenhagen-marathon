import React from "react";
import BottomNav from "./BottomNav";
import WavyFooter from "./WavyFooter";
import homepageVideo from "../../CPH_MARATHON_2025_bw.mp4";

/**
 * Screen 2: Homepage (`Proto - Figma Part Update/Homepage.svg`)
 * - Grayscale runner background video (`CPH_MARATHON_2025_bw.mp4`).
 * - Bottom prompt over video: "TAP BELOW TO" (white) + "FOLLOW THE RACE" (yellow) + yellow downward chevron.
 * - Three inline slanted yellow buttons: "Live Updates", "Explore", "Track Runner".
 * - Clicking each button navigates to its dedicated screen ('updates', 'zones', 'track').
 */
export default function HomePage({ onNavigate, lang, onToggleLang }) {
  const handleSelectTab = (tab) => {
    if (tab === "updates") {
      onNavigate("updates");
    } else if (tab === "explore") {
      onNavigate("zones");
    } else if (tab === "track") {
      onNavigate("track");
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-pureWhite overflow-hidden select-none">
      {/* Grayscale Runner Background Video */}
      <div className="absolute inset-x-0 top-0 h-[78%] z-0 pointer-events-none overflow-hidden bg-darkOverlay">
        <video
          src={homepageVideo}
          poster="/assets/homepage-bg.png"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle bottom gradient for prompt legibility */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-pureBlack/70 via-pureBlack/25 to-transparent" />
      </div>

      {/* Main Content Spacer + "TAP BELOW TO / FOLLOW THE RACE" Prompt */}
      <main className="relative z-20 flex-1 flex flex-col justify-end items-center text-center px-4 pb-6 sm:pb-10 pointer-events-none">
        <p className="font-montserrat font-medium text-pureWhite text-xs sm:text-sm md:text-[18px] tracking-[0.22em] uppercase drop-shadow">
          {lang === "EN" ? "TAP BELOW TO" : "TRYK HERUNDER FOR AT"}
        </p>
        <h1 className="font-montserrat font-black text-primaryYellow text-2xl sm:text-3xl md:text-[42px] tracking-[0.06em] uppercase mt-1 drop-shadow-md">
          {lang === "EN" ? "FOLLOW THE RACE" : "FØLGE LØBET"}
        </h1>
        <svg
          viewBox="0 0 70 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 sm:w-16 md:w-[70px] h-3 sm:h-4 mt-1.5 drop-shadow"
        >
          <path d="M0 0L34.622 9.277L69.245 0L34.622 16L0 0Z" fill="#FFEE00" />
        </svg>
      </main>

      {/* Bottom Area: Three Slanted Yellow Navigation Buttons + Wavy Footer */}
      <div className="relative mt-2 z-20 w-full bg-pureWhite pt-3 sm:pt-4 flex flex-col shrink-0">
        <div className="mb-6 pb-6 pt-8">
          <BottomNav
            activeTab={null}
            onSelectTab={handleSelectTab}
            updatesLabel={lang === "EN" ? "Live Updates" : "Live Opdateringer"}
            lang={lang}
          />
        </div>
        <WavyFooter lang={lang} onToggleLang={onToggleLang} variant="flat" />
      </div>
    </div>
  );
}
