import React from "react";
import SlantedButton from "./SlantedButton";

/**
 * Bottom Navigation Bar (Shared by Homepage, Zones Page, Race Day Updates, and Track Runner):
 * - Optional `<` back chevron above the left button (matching `Zones Page V2.svg`, `Race day updates.svg`, `Find your runner.svg`).
 * - Three inline slanted yellow buttons: "Live Updates" (or "Updates"), "Explore", "Track Runner".
 */
export default function BottomNav({
  activeTab,
  onSelectTab,
  onBack,
  updatesLabel,
  lang = "EN",
}) {
  const defaultUpdatesLabel =
    updatesLabel ||
    (activeTab === "updates" || activeTab === "track"
      ? lang === "EN"
        ? "Updates"
        : "Opdateringer"
      : lang === "EN"
        ? "Live Updates"
        : "Live Opdateringer");

  const labels = {
    EN: {
      updates: defaultUpdatesLabel,
      explore: "Explore",
      track: "Track Runner",
    },
    DK: {
      updates:
        updatesLabel ||
        (activeTab === "updates" || activeTab === "track"
          ? "Opdateringer"
          : "Live Opdateringer"),
      explore: "Udforsk",
      track: "Find Løber",
    },
  }[lang] || {
    updates: defaultUpdatesLabel,
    explore: "Explore",
    track: "Track Runner",
  };

  return (
    <nav
      aria-label="Primary Spectator Navigation"
      className="relative z-30 w-full px-4 sm:px-8 md:px-11 -mb-4 sm:-mb-6 md:-mb-8 pointer-events-auto"
    >
      {/* Back Chevron Row (Shown on Zones, Updates, and Track Runner screens in Figma) */}
      {onBack && (
        <div className="max-w-3xl mx-auto mb-1.5 sm:mb-2 flex items-center">
          <button
            type="button"
            onClick={onBack}
            aria-label={lang === "EN" ? "Go back" : "Gå tilbage"}
            className="p-1.5 -ml-1.5 text-pureBlack hover:text-buttonTextDark active:scale-95 transition-transform focus:outline-none"
          >
            <svg
              viewBox="0 0 18 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-6 sm:w-5 sm:h-7"
            >
              <path
                d="M15 3L4 14L15 25"
                stroke="#080808"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}

      <div className="grid pt-5 grid-cols-3 gap-2.5 sm:gap-5 md:gap-8 items-center max-w-3xl mx-auto">
        <SlantedButton
          variant="nav"
          active={activeTab === "updates"}
          onClick={() => onSelectTab("updates")}
        >
          {labels.updates}
        </SlantedButton>

        <SlantedButton
          variant="nav"
          active={activeTab === "explore"}
          onClick={() => onSelectTab("explore")}
        >
          {labels.explore}
        </SlantedButton>

        <SlantedButton
          variant="nav"
          active={activeTab === "track"}
          onClick={() => onSelectTab("track")}
        >
          {labels.track}
        </SlantedButton>
      </div>
    </nav>
  );
}
