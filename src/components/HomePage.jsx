import React, { useState } from 'react';
import BottomNav from './BottomNav';
import WavyFooter from './WavyFooter';
import homepageVideo from '../../CPH_MARATHON_2025_bw.mp4';

/**
 * Screen 2: Homepage (`Homepage.svg`)
 * - Grayscale runner background video (`CPH_MARATHON_2025_bw.mp4.mp4`).
 * - Bottom navigation area resting just above the white wavy container, featuring three inline slanted yellow buttons:
 *   "Updates", "Explore", "Track Runner".
 * - Clicking "Explore" navigates to the Zones Page (`onNavigate('zones')`).
 * - Clicking "Updates" or "Track Runner" can also show a lightweight spectator drawer/toast so all 3 buttons are interactive.
 */
export default function HomePage({ onNavigate, lang, onToggleLang }) {
  const [activeDrawer, setActiveDrawer] = useState(null); // 'updates' | 'track' | null
  const [bibQuery, setBibQuery] = useState('');

  const handleSelectTab = (tab) => {
    if (tab === 'explore') {
      setActiveDrawer(null);
      onNavigate('zones');
    } else {
      setActiveDrawer((prev) => (prev === tab ? null : tab));
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-pureWhite overflow-hidden select-none">
      {/* Grayscale Runner Background Video (Covers top area down into the wave, matching Homepage.svg M0 0H834V932H0V0Z) */}
      <div className="absolute inset-x-0 top-0 h-[84%] z-0 pointer-events-none overflow-hidden bg-darkOverlay">
        <video
          src={homepageVideo}
          poster="/CPH_MARATHON_2025_bw.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Main Middle Spacer / Optional Interactive Drawer for Updates & Track Runner */}
      <main className="relative z-20 flex-1 flex flex-col justify-end px-4 sm:px-8 md:px-12 pb-2 pointer-events-none">
        {activeDrawer === 'updates' && (
          <div className="pointer-events-auto mb-6 max-w-md mx-auto w-full bg-pureBlack/80 backdrop-blur-md border border-primaryYellow/50 rounded-xl p-4 text-pureWhite shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between border-b border-pureWhite/15 pb-2 mb-3">
              <span className="font-bold italic text-primaryYellow text-sm uppercase tracking-wider">
                {lang === 'EN' ? 'Live Race Updates' : 'Live Løbsopdateringer'}
              </span>
              <button
                onClick={() => setActiveDrawer(null)}
                className="text-xs text-pureWhite/70 hover:text-primaryYellow font-bold px-2"
              >
                ✕
              </button>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primaryYellow font-bold">09:30</span>
                <span>
                  {lang === 'EN'
                    ? 'Elite runners passing Østerbro (KM 12) ahead of schedule.'
                    : 'Eliteløbere passerer Østerbro (KM 12) før tidsplanen.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primaryYellow font-bold">09:15</span>
                <span>
                  {lang === 'EN'
                    ? 'Nørrebro cheering zone DJ stage is now live!'
                    : 'Nørrebro heppezone DJ-scene er nu i gang!'}
                </span>
              </li>
            </ul>
          </div>
        )}

        {activeDrawer === 'track' && (
          <div className="pointer-events-auto mb-6 max-w-md mx-auto w-full bg-pureBlack/80 backdrop-blur-md border border-primaryYellow/50 rounded-xl p-4 text-pureWhite shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between border-b border-pureWhite/15 pb-2 mb-3">
              <span className="font-bold italic text-primaryYellow text-sm uppercase tracking-wider">
                {lang === 'EN' ? 'Track Runner by Bib #' : 'Find Løber via Startnr.'}
              </span>
              <button
                onClick={() => setActiveDrawer(null)}
                className="text-xs text-pureWhite/70 hover:text-primaryYellow font-bold px-2"
              >
                ✕
              </button>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={bibQuery}
                onChange={(e) => setBibQuery(e.target.value)}
                placeholder={
                  lang === 'EN'
                    ? 'Enter Bib # or Name (e.g. 1042)...'
                    : 'Indtast startnr. eller navn...'
                }
                className="flex-1 bg-pureWhite/10 border border-pureWhite/25 rounded-lg px-3 py-2 text-xs sm:text-sm text-pureWhite placeholder:text-pureWhite/50 focus:outline-none focus:border-primaryYellow"
              />
              <button
                onClick={() => onNavigate('zones')}
                className="bg-buttonYellow hover:bg-primaryYellow text-buttonTextDark font-bold italic text-xs sm:text-sm px-4 py-2 -skew-x-12 shrink-0"
              >
                <span className="skew-x-12 inline-block">
                  {lang === 'EN' ? 'LOCATE' : 'FIND'}
                </span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Area: Three Slanted Yellow Navigation Buttons resting directly above the Wavy Footer */}
      <div className="relative z-20 w-full flex flex-col">
        <BottomNav
          activeTab={activeDrawer}
          onSelectTab={handleSelectTab}
          lang={lang}
        />
        <WavyFooter lang={lang} onToggleLang={onToggleLang} variant="home" />
      </div>
    </div>
  );
}

