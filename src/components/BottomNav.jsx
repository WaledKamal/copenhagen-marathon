import React from 'react';
import SlantedButton from './SlantedButton';

/**
 * Bottom Navigation Bar (Shared by Homepage & Zones Page):
 * - Positioned resting just above / overlapping the white wavy container.
 * - Three inline slanted yellow buttons: "Updates", "Explore", "Track Runner".
 * - In Zones Page (`activeTab === 'explore'`), the middle button ("Explore") is taller (`h-[87px]` vs `h-[55px]`),
 *   extending into the white wave below it, matching `Zones Page.svg`.
 */
export default function BottomNav({
  activeTab,
  onSelectTab,
  lang = 'EN',
}) {
  const labels = {
    EN: {
      updates: 'Updates',
      explore: 'Explore',
      track: 'Track Runner',
    },
    DK: {
      updates: 'Opdateringer',
      explore: 'Udforsk',
      track: 'Find Løber',
    },
  }[lang] || {
    updates: 'Updates',
    explore: 'Explore',
    track: 'Track Runner',
  };

  return (
    <nav
      aria-label="Primary Spectator Navigation"
      className="relative z-30 w-full px-4 sm:px-8 md:px-11 -mb-7 sm:-mb-10 md:-mb-[58px] pointer-events-auto"
    >
      <div className="grid grid-cols-3 gap-2.5 sm:gap-5 md:gap-8 items-start max-w-3xl mx-auto">
        <SlantedButton
          variant="nav"
          active={activeTab === 'updates'}
          onClick={() => onSelectTab('updates')}
        >
          {labels.updates}
        </SlantedButton>

        <SlantedButton
          variant="nav"
          active={activeTab === 'explore'}
          onClick={() => onSelectTab('explore')}
        >
          {labels.explore}
        </SlantedButton>

        <SlantedButton
          variant="nav"
          active={activeTab === 'track'}
          onClick={() => onSelectTab('track')}
        >
          {labels.track}
        </SlantedButton>
      </div>
    </nav>
  );
}

