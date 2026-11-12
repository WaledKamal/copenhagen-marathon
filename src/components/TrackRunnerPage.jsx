import React, { useState, useEffect } from "react";
import BottomNav from "./BottomNav";
import WavyFooter from "./WavyFooter";

const COURSE_CURVE_PATH =
  "M58 391C58.1559 390.959 58.3116 390.918 58.4672 390.876M768 64C767.835 64.0094 767.67 64.0196 767.505 64.0306M74.0195 385.879C74.3189 385.766 74.6177 385.653 74.916 385.538M89.8815 378.996C90.1691 378.855 90.4562 378.713 90.7429 378.57M105.069 370.727C105.344 370.562 105.619 370.398 105.894 370.232M119.613 361.366C119.877 361.185 120.141 361.003 120.404 360.82M133.616 351.212C133.872 351.018 134.127 350.824 134.382 350.63M147.233 340.543C147.483 340.343 147.733 340.142 147.982 339.941M160.651 329.623C160.899 329.42 161.146 329.217 161.394 329.014M174.076 318.711C174.325 318.511 174.575 318.311 174.825 318.112M187.727 308.086C187.983 307.894 188.239 307.703 188.495 307.512M201.828 298.068C202.094 297.891 202.36 297.714 202.627 297.538M216.58 289.044C216.72 288.967 216.86 288.89 217 288.812C217.147 288.731 217.293 288.65 217.44 288.569M232.588 280.517C232.888 280.365 233.189 280.214 233.49 280.062M249.021 272.781C249.33 272.647 249.639 272.514 249.948 272.382M265.959 266.228C266.277 266.12 266.596 266.013 266.915 265.907M283.427 261.276C283.755 261.201 284.084 261.128 284.413 261.056M301.346 258.365C301.681 258.333 302.015 258.302 302.35 258.272M319.487 257.893C319.823 257.909 320.16 257.926 320.497 257.945M337.503 260.099C337.668 260.133 337.834 260.166 338 260.2C338.156 260.258 338.312 260.314 338.469 260.371M354.722 264.182C355.048 264.218 355.373 264.252 355.698 264.283M372.379 263.865C372.704 263.819 373.028 263.77 373.352 263.72M389.506 259.487C389.814 259.375 390.122 259.262 390.43 259.147M405.613 252.148C405.9 251.992 406.187 251.835 406.473 251.677M420.704 242.89C420.976 242.706 421.248 242.52 421.519 242.334M435.007 232.44C435.266 232.24 435.524 232.039 435.782 231.837M448.768 221.291C449.02 221.08 449.271 220.869 449.522 220.658M462.234 209.78C462.482 209.565 462.731 209.35 462.979 209.135M475.627 198.186C475.752 198.079 475.876 197.972 476 197.866C476.127 197.748 476.253 197.631 476.38 197.514M489.603 186.028C489.87 185.812 490.137 185.597 490.404 185.384M504.595 175.129C504.885 174.944 505.174 174.761 505.464 174.579M520.966 166.478C521.285 166.347 521.604 166.219 521.923 166.092M538.818 161.67C539.159 161.629 539.5 161.591 539.841 161.555M557.255 162.469C557.591 162.54 557.927 162.615 558.264 162.693M574.542 169.001C574.695 169.085 574.847 169.168 575 169.253C575.146 169.326 575.292 169.399 575.438 169.471M590.356 176.214C590.652 176.332 590.949 176.449 591.244 176.565M606.847 181.504C607.162 181.576 607.475 181.646 607.788 181.715M624.033 183.311C624.354 183.299 624.674 183.285 624.994 183.268M640.921 179.811C641.218 179.695 641.515 179.575 641.811 179.452M655.902 171.196C656.153 171.005 656.405 170.811 656.656 170.614M668.627 159.478C668.844 159.245 669.06 159.01 669.277 158.774M679.705 146.142C679.803 146.012 679.902 145.881 680 145.75C680.1 145.62 680.201 145.49 680.301 145.36M690.323 131.984C690.517 131.72 690.71 131.457 690.903 131.193M700.753 117.687C700.947 117.423 700.947 117.16 701.332 116.897M711.388 103.547C711.59 103.287 711.793 103.029 711.996 102.771M722.749 89.9761C722.97 89.7336 723.192 89.4923 723.413 89.2522M735.513 77.7471C735.769 77.5395 736.025 77.3338 736.282 77.1302M750.443 68.3426C750.743 68.2085 751.043 68.0772 751.343 67.9487";

const RUNNERS_DB = [
  {
    name: "Emma Jensen",
    bib: "1042",
    distanceKm: 16.3,
    distanceLabel: "16.3 km",
    elapsedTime: "01:22:04",
    avgPace: "5:02 /km",
    estFinish: "12:32",
    zone: "Nørrebro",
    statusEn: "Now at NBRO · Nørrebro. Next: Game at 18 km.",
    statusDk: "Nu ved NBRO · Nørrebro. Næste: Game ved 18 km.",
    curveX: 344,
    curveY: 257,
  },
  {
    name: "Jonas Bekele",
    bib: "101",
    distanceKm: 42.2,
    distanceLabel: "42.2 km",
    elapsedTime: "02:06:41",
    avgPace: "3:00 /km",
    estFinish: "Finished",
    zone: "Kalvebod Brygge",
    statusEn: "Finished 1st Overall at Kalvebod Brygge (2:06:41).",
    statusDk: "I mål som nr. 1 ved Kalvebod Brygge (2:06:41).",
    curveX: 750,
    curveY: 68,
  },
  {
    name: "Mikkel Hansen",
    bib: "204",
    distanceKm: 42.2,
    distanceLabel: "42.2 km",
    elapsedTime: "02:07:12",
    avgPace: "3:01 /km",
    estFinish: "Finished",
    zone: "Kalvebod Brygge",
    statusEn: "Finished 2nd Overall at Kalvebod Brygge (2:07:12).",
    statusDk: "I mål som nr. 2 ved Kalvebod Brygge (2:07:12).",
    curveX: 735,
    curveY: 78,
  },
  {
    name: "Samuel Kiptoo",
    bib: "312",
    distanceKm: 42.2,
    distanceLabel: "42.2 km",
    elapsedTime: "02:07:48",
    avgPace: "3:02 /km",
    estFinish: "Finished",
    zone: "Kalvebod Brygge",
    statusEn: "Finished 3rd Overall at Kalvebod Brygge (2:07:48).",
    statusDk: "I mål som nr. 3 ved Kalvebod Brygge (2:07:48).",
    curveX: 722,
    curveY: 90,
  },
  {
    name: "Lars Nygaard",
    bib: "418",
    distanceKm: 42.2,
    distanceLabel: "42.2 km",
    elapsedTime: "02:08:30",
    avgPace: "3:03 /km",
    estFinish: "Finished",
    zone: "Kalvebod Brygge",
    statusEn: "Finished 4th Overall at Kalvebod Brygge (2:08:30).",
    statusDk: "I mål som nr. 4 ved Kalvebod Brygge (2:08:30).",
    curveX: 711,
    curveY: 103,
  },
  {
    name: "Adam Mensah",
    bib: "509",
    distanceKm: 42.2,
    distanceLabel: "42.2 km",
    elapsedTime: "02:09:03",
    avgPace: "3:04 /km",
    estFinish: "Finished",
    zone: "Kalvebod Brygge",
    statusEn: "Finished 5th Overall at Kalvebod Brygge (2:09:03).",
    statusDk: "I mål som nr. 5 ved Kalvebod Brygge (2:09:03).",
    curveX: 700,
    curveY: 117,
  },
  {
    name: "Leah",
    bib: "1980",
    distanceKm: 15.0,
    distanceLabel: "15.0 km",
    elapsedTime: "01:14:20",
    avgPace: "4:57 /km",
    estFinish: "12:29",
    zone: "Nørrebro",
    statusEn:
      "Now at Joe & The Juice · Sankt Hans Torv. Next: NBRO at 16.3 km.",
    statusDk:
      "Nu ved Joe & The Juice · Sankt Hans Torv. Næste: NBRO ved 16.3 km.",
    curveX: 301,
    curveY: 258,
  },
  {
    name: "Eimear",
    bib: "3817",
    distanceKm: 18.0,
    distanceLabel: "18.0 km",
    elapsedTime: "01:29:12",
    avgPace: "4:57 /km",
    estFinish: "12:29",
    zone: "Nørrebro",
    statusEn: "Now at GAME · Den Røde Plads. Next: Frederiksberg at 24 km.",
    statusDk: "Nu ved GAME · Den Røde Plads. Næste: Frederiksberg ved 24 km.",
    curveX: 405,
    curveY: 252,
  },
  {
    name: "Birgit Holm",
    bib: "8801",
    distanceKm: 12.0,
    distanceLabel: "12.0 km",
    elapsedTime: "01:40:10",
    avgPace: "8:20 /km",
    estFinish: "14:52",
    zone: "Østerbro",
    statusEn: "Passing Østerbro (12 km). Next: Joe & The Juice at 15 km.",
    statusDk: "Passerer Østerbro (12 km). Næste: Joe & The Juice ved 15 km.",
    curveX: 232,
    curveY: 280,
  },
  {
    name: "Peter Dalsgaard",
    bib: "8942",
    distanceKm: 11.4,
    distanceLabel: "11.4 km",
    elapsedTime: "01:36:15",
    avgPace: "8:26 /km",
    estFinish: "14:54",
    zone: "Østerbro",
    statusEn: "Approaching Østerbro 12 km checkpoint.",
    statusDk: "Nærmer sig Østerbro 12 km mellemtid.",
    curveX: 217,
    curveY: 288,
  },
  {
    name: "Anne Sørensen",
    bib: "9104",
    distanceKm: 10.8,
    distanceLabel: "10.8 km",
    elapsedTime: "01:32:00",
    avgPace: "8:31 /km",
    estFinish: "14:57",
    zone: "Østerbro",
    statusEn: "Running along Østerbrogade towards Fælledparken.",
    statusDk: "Løber langs Østerbrogade mod Fælledparken.",
    curveX: 202,
    curveY: 298,
  },
  {
    name: "Tomas Eriksen",
    bib: "9315",
    distanceKm: 10.2,
    distanceLabel: "10.2 km",
    elapsedTime: "01:27:10",
    avgPace: "8:33 /km",
    estFinish: "14:58",
    zone: "Østerbro",
    statusEn: "Passing Trianglen cheering hub in Østerbro.",
    statusDk: "Passerer Trianglen heppezone på Østerbro.",
    curveX: 188,
    curveY: 308,
  },
  {
    name: "Karen Lund",
    bib: "9540",
    distanceKm: 9.8,
    distanceLabel: "9.8 km",
    elapsedTime: "01:24:05",
    avgPace: "8:34 /km",
    estFinish: "14:59",
    zone: "Østerbro",
    statusEn: "Steady pace through Indre Østerbro.",
    statusDk: "Stabilt tempo gennem Indre Østerbro.",
    curveX: 174,
    curveY: 318,
  },
];

const KEYBOARD_ROWS = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

/**
 * Find Your Runner / Track Runner Screen (`Proto - Figma Part Update/Find your runner — *.svg`)
 * Supports all 4 Figma states:
 * 1) `idle`: Course location overview (`Find your runner — course location.svg`)
 * 2) `typing`: Active input with interactive mobile keyboard (`Find your runner — typing.svg`)
 * 3) `found`: Runner stats card + map pin on dotted course (`Find your runner — runner found.svg`)
 * 4) `not_found`: No runner found message + "TRY AGAIN" button (`Find your runner — no runner found.svg`)
 */
export default function TrackRunnerPage({
  onNavigate,
  initialQuery = "",
  lang = "EN",
  onToggleLang,
}) {
  const [query, setQuery] = useState(initialQuery);
  const [searchState, setSearchState] = useState("idle"); // 'idle' | 'typing' | 'found' | 'not_found'
  const [matchedRunner, setMatchedRunner] = useState(null);
  const [lastSearchedQuery, setLastSearchedQuery] = useState("");
  const [showVirtualKeyboard, setShowVirtualKeyboard] = useState(false);

  const performSearch = (rawSearch) => {
    const q = (rawSearch ?? query).trim();
    setShowVirtualKeyboard(false);

    if (!q) {
      setSearchState("idle");
      setMatchedRunner(null);
      return;
    }

    setLastSearchedQuery(q);
    const normalized = q.toLowerCase().replace(/^#/, "");

    const found = RUNNERS_DB.find(
      (r) =>
        r.bib.toLowerCase() === normalized ||
        r.name.toLowerCase() === normalized ||
        r.name.toLowerCase().includes(normalized),
    );

    if (found) {
      setMatchedRunner(found);
      setQuery(found.name);
      setSearchState("found");
    } else {
      setMatchedRunner(null);
      setSearchState("not_found");
    }
  };

  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  const handleSelectTab = (tab) => {
    if (tab === "track") {
      setShowVirtualKeyboard(false);
      return;
    }
    if (tab === "updates") onNavigate("updates");
    if (tab === "explore") onNavigate("zones");
  };

  const handleVirtualKey = (key) => {
    if (key === "BACKSPACE") {
      setQuery((prev) => prev.slice(0, -1));
    } else if (key === "SPACE") {
      setQuery((prev) => prev + " ");
    } else {
      setQuery((prev) => {
        const shouldCap = prev.length === 0 || prev.endsWith(" ");
        return prev + (shouldCap ? key.toUpperCase() : key);
      });
    }
  };

  // Progress bar percentage (matches Figma where 16.3 km is at ~47% along the visual checkpoint bar)
  const getProgressPercent = (km) => {
    if (!km) return 45;
    if (km <= 12) return (km / 12) * 32;
    if (km <= 15) return 32 + ((km - 12) / 3) * 8;
    if (km <= 16.3) return 40 + ((km - 15) / 1.3) * 4;
    if (km <= 18) return 44 + ((km - 16.3) / 1.7) * 4;
    return Math.min(100, 48 + ((km - 18) / 24.2) * 52);
  };

  const progressPct =
    searchState === "found" && matchedRunner
      ? getProgressPercent(matchedRunner.distanceKm)
      : 45;

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-pureWhite text-[#080808] overflow-hidden select-none">
      {/* Top Course Map Curve Visualizer (`#EAE9E5` box matching Figma 834x468) */}
      <div
        onClick={() => setShowVirtualKeyboard(false)}
        className="relative w-full h-[34%] sm:h-[37%] bg-[#EAE9E5] shrink-0 overflow-hidden"
      >
        <svg
          viewBox="0 0 834 468"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full"
        >
          {/* Top-Left Label: TRACK RUNNER */}
          <text
            x="56"
            y="66"
            fill="#767676"
            className="font-montserrat font-medium text-[15px] tracking-[0.34em] uppercase"
          >
            {lang === "EN" ? "TRACK RUNNER" : "FIND LØBER"}
          </text>

          {/* Top-Right Label: FINISH */}
          <text
            x="708"
            y="42"
            fill="#767676"
            className="font-montserrat font-medium text-[13px] tracking-[0.22em] uppercase"
          >
            {lang === "EN" ? "FINISH" : "MÅL"}
          </text>

          {/* Bottom-Left Label: START */}
          <text
            x="56"
            y="422"
            fill="#767676"
            className="font-montserrat font-medium text-[13px] tracking-[0.22em] uppercase"
          >
            START
          </text>

          {/* Dotted S-Curve Course Line from Figma */}
          <path
            d={COURSE_CURVE_PATH}
            strokeWidth="7"
            strokeLinecap="round"
            stroke="#080808"
          />

          {/* Marker on the Course Curve */}
          {searchState === "found" && matchedRunner && (
            <g>
              <circle
                cx={matchedRunner.curveX}
                cy={matchedRunner.curveY}
                r="28"
                fill="#EAE9E5"
                stroke="#8E8E87"
                strokeWidth="2"
              />
              {/* Yellow Location Pin inside the Circle */}
              <g
                transform={`translate(${matchedRunner.curveX - 343.6}, ${
                  matchedRunner.curveY - 241.5
                })`}
              >
                <path
                  d="M343.612 258.766C344.323 258.766 357.034 245.186 357.034 237.773C357.034 230.361 351.025 224.352 343.612 224.352C336.199 224.352 330.19 230.361 330.19 237.773C330.19 245.186 342.901 258.766 343.612 258.766Z"
                  fill="#FFE500"
                  stroke="#080808"
                  strokeWidth="2.2"
                />
                <circle
                  cx="343.612"
                  cy="237.681"
                  r="5.5"
                  fill="#EAE9E5"
                  stroke="#080808"
                  strokeWidth="2"
                />
              </g>
              {/* Runner Callout Label next to Pin */}
              <text
                x={Math.min(540, matchedRunner.curveX + 26)}
                y={matchedRunner.curveY + 46}
                fill="#080808"
                className="font-montserrat font-bold text-[15px] tracking-wide uppercase"
              >
                {matchedRunner.name.toUpperCase()} · #{matchedRunner.bib}
              </text>
              <text
                x={Math.min(540, matchedRunner.curveX + 26)}
                y={matchedRunner.curveY + 68}
                fill="#767676"
                className="font-montserrat font-normal text-[14px]"
              >
                {matchedRunner.distanceLabel} · {matchedRunner.zone}
              </text>
            </g>
          )}

          {(searchState === "idle" || searchState === "typing") && (
            <g>
              <circle
                cx="320"
                cy="257"
                r="28"
                fill="#EAE9E5"
                stroke="#8E8E87"
                strokeWidth="2"
              />
              <circle
                cx="320"
                cy="257"
                r="13"
                fill="#FFE500"
                stroke="#080808"
                strokeWidth="3.5"
              />
              <text
                x="346"
                y="305"
                fill="#080808"
                className="font-montserrat font-normal text-[16px]"
              >
                {lang === "EN" ? "Runner appears here" : "Løberen vises her"}
              </text>
            </g>
          )}
        </svg>
      </div>

      {/* Middle Interactive Search & Runner Status Section */}
      <main className="relative z-10 flex-1 flex flex-col justify-between px-5 sm:px-9 md:px-12 pt-4 sm:pt-6 pb-2 overflow-y-auto">
        <div>
          {/* Heading: WHERE IS MY RUNNER? */}
          <h1 className="font-montserrat font-black italic text-2xl sm:text-3xl md:text-[38px] text-[#080808] tracking-tight uppercase mb-2.5 sm:mb-3.5">
            {lang === "EN" ? "WHERE IS MY RUNNER?" : "HVOR ER MIN LØBER?"}
          </h1>

          {/* Search Input + Slanted LOCATE Button */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              performSearch(query);
            }}
            className="flex items-stretch w-full mb-3 sm:mb-4"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                onFocus={() => {
                  setSearchState("typing");
                  setShowVirtualKeyboard(true);
                }}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (searchState !== "typing") setSearchState("typing");
                }}
                placeholder={
                  lang === "EN"
                    ? "Enter Bib # or Name (e.g. 1042)"
                    : "Indtast startnr. eller navn (fx 1042)"
                }
                className="w-full h-11 sm:h-14 px-3.5 sm:px-5 bg-pureWhite border-2 border-[#FFE500] text-sm sm:text-base md:text-[18px] text-[#080808] placeholder:text-[#767676] font-montserrat focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSearchState("idle");
                    setMatchedRunner(null);
                  }}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#767676] hover:text-[#080808] text-xs font-bold px-1.5 py-0.5"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#FFE500] hover:bg-primaryYellow text-[#080808] font-montserrat font-black italic text-base sm:text-xl md:text-[24px] px-6 sm:px-9 -skew-x-[15deg] -ml-2 shrink-0 flex items-center justify-center transition-colors"
            >
              <span className="skew-x-[15deg] tracking-wide uppercase">
                {lang === "EN" ? "LOCATE" : "FIND"}
              </span>
            </button>
          </form>

          {/* Quick Demo Runner Chips (Helpful for testing all states quickly) */}
          {searchState !== "not_found" && !showVirtualKeyboard && (
            <div className="flex flex-wrap items-center gap-1.5 mb-2 text-[10px] sm:text-[11px]">
              <span className="text-[#767676] font-medium mr-1">
                {lang === "EN" ? "Try:" : "Prøv:"}
              </span>
              {[
                { label: "Emma Jensen (#1042)", q: "Emma Jensen" },
                { label: "Leah (#1980)", q: "1980" },
                { label: "Eimear (#3817)", q: "3817" },
                { label: "Jonas Bekele (#101)", q: "Jonas Bekele" },
                { label: "No Match Demo", q: "Emma Jenseb" },
              ].map((chip) => (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => {
                    setQuery(chip.q);
                    performSearch(chip.q);
                  }}
                  className="px-2 py-0.5 rounded-full bg-[#EAE9E5] hover:bg-[#FFE500] text-[#080808] font-medium transition-colors"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          {/* STATE 3: RUNNER FOUND (`Find your runner — runner found.svg`) */}
          {searchState === "found" && matchedRunner && (
            <div className="mt-1 mb-3 animate-fadeIn">
              {/* Runner Name + Bib + LIVE indicator */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2.5">
                <div className="flex items-baseline gap-3">
                  <h2 className="font-montserrat font-black italic text-xl sm:text-2xl md:text-[26px] text-[#080808] uppercase">
                    {matchedRunner.name}
                  </h2>
                  <span className="font-montserrat text-xs sm:text-sm text-[#767676] uppercase">
                    BIB #{matchedRunner.bib}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#767676]">
                  <span className="w-2 h-2 rounded-full bg-[#FFE500] inline-block" />
                  <span>
                    {lang === "EN"
                      ? "LIVE · Updated 8 sec ago"
                      : "LIVE · Opdateret for 8 sek. siden"}
                  </span>
                </span>
              </div>

              {/* 4-Column Stats Grid */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 pb-3 border-b border-[#C6C6C4]">
                <div>
                  <p className="font-montserrat text-[9px] sm:text-[11px] tracking-[0.16em] text-[#767676] uppercase">
                    {lang === "EN" ? "DISTANCE" : "DISTANCE"}
                  </p>
                  <p className="font-montserrat font-black italic text-base sm:text-xl md:text-[24px] text-[#080808] mt-0.5">
                    {matchedRunner.distanceLabel}
                  </p>
                </div>
                <div>
                  <p className="font-montserrat text-[9px] sm:text-[11px] tracking-[0.16em] text-[#767676] uppercase">
                    {lang === "EN" ? "ELAPSED TIME" : "TID"}
                  </p>
                  <p className="font-montserrat font-black italic text-base sm:text-xl md:text-[24px] text-[#080808] mt-0.5">
                    {matchedRunner.elapsedTime}
                  </p>
                </div>
                <div>
                  <p className="font-montserrat text-[9px] sm:text-[11px] tracking-[0.16em] text-[#767676] uppercase">
                    {lang === "EN" ? "AVG. PACE" : "GNS. TEMPO"}
                  </p>
                  <p className="font-montserrat font-black italic text-base sm:text-xl md:text-[24px] text-[#080808] mt-0.5">
                    {matchedRunner.avgPace}
                  </p>
                </div>
                <div>
                  <p className="font-montserrat text-[9px] sm:text-[11px] tracking-[0.16em] text-[#767676] uppercase">
                    {lang === "EN" ? "EST. FINISH" : "FORV. MÅL"}
                  </p>
                  <p className="font-montserrat font-black italic text-base sm:text-xl md:text-[24px] text-[#080808] mt-0.5">
                    {matchedRunner.estFinish}
                  </p>
                </div>
              </div>

              {/* Current Location Status Line */}
              <p className="font-montserrat text-xs sm:text-sm text-[#080808] mt-2.5">
                {lang === "EN"
                  ? matchedRunner.statusEn
                  : matchedRunner.statusDk}
              </p>
            </div>
          )}

          {/* STATE 4: NO RUNNER FOUND (`Find your runner — no runner found.svg`) */}
          {searchState === "not_found" && (
            <div className="mt-3 sm:mt-4 flex items-start gap-4 animate-fadeIn">
              {/* Grey Square with Magnifying Glass + X */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#EAE9E5] flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="#080808"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 18L24 24"
                    stroke="#080808"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.5 9.5L14.5 14.5M14.5 9.5L9.5 14.5"
                    stroke="#080808"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="flex-1">
                <h2 className="font-montserrat font-black italic text-lg sm:text-2xl text-[#080808]">
                  {lang === "EN" ? "No runner found" : "Ingen løber fundet"}
                </h2>
                <p className="font-montserrat text-xs sm:text-sm text-[#767676] mt-1 max-w-lg leading-relaxed">
                  {lang === "EN"
                    ? `We couldn’t find a runner matching “${
                        lastSearchedQuery || "Emma Jensen"
                      }”. Check the spelling or try their bib number.`
                    : `Vi kunne ikke finde en løber, der matcher “${
                        lastSearchedQuery || "Emma Jensen"
                      }”. Tjek stavningen eller prøv startnummeret.`}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSearchState("typing");
                    setShowVirtualKeyboard(true);
                  }}
                  className="mt-3 bg-[#FFE500] hover:bg-primaryYellow -skew-x-[15deg] px-7 py-2.5 font-montserrat font-black italic text-sm sm:text-base text-[#080808] uppercase inline-block"
                >
                  <span className="skew-x-[15deg] inline-block">
                    {lang === "EN" ? "TRY AGAIN" : "PRØV IGEN"}
                  </span>
                </button>

                <p className="font-montserrat text-[11px] sm:text-xs text-[#767676] mt-2.5">
                  {lang === "EN"
                    ? "Search by full name or bib number to track your runner."
                    : "Søg på fulde navn eller startnummer for at følge din løber."}
                </p>
              </div>
            </div>
          )}

          {/* COURSE PROGRESS Bar (Shown in idle, typing, and found states) */}
          {searchState !== "not_found" && (
            <div className="mt-2 sm:mt-3">
              <div className="flex items-center justify-between text-[10px] sm:text-xs mb-2">
                <span className="font-montserrat font-medium tracking-[0.22em] text-[#767676] uppercase">
                  {lang === "EN" ? "COURSE PROGRESS" : "RUTESTATUS"}
                </span>
                {searchState === "found" && matchedRunner && (
                  <span className="font-montserrat font-bold text-[#080808]">
                    {matchedRunner.distanceKm} / 42.2 km
                  </span>
                )}
              </div>

              {/* Progress Line with Checkpoint Ticks */}
              <div className="relative h-6 flex items-center">
                {/* Grey Background Track */}
                <div className="w-full h-[3.5px] bg-[#C6C6C4]" />
                {/* Active Black Track */}
                <div
                  className="absolute left-0 h-[3.5px] bg-[#080808] transition-all duration-300"
                  style={{ width: `${progressPct}%` }}
                />

                {/* Checkpoint Vertical Ticks (matching Figma x=263, 314, 336, 365 out of 714) */}
                {[32, 40, 44, 48].map((pos) => (
                  <span
                    key={pos}
                    style={{ left: `${pos}%` }}
                    className="absolute top-1/2 -translate-y-1/2 w-[2.5px] h-5 bg-[#080808]"
                  />
                ))}

                {/* Active Runner Yellow Dot on Progress Bar when Found */}
                {searchState === "found" && matchedRunner && (
                  <span
                    style={{ left: `${progressPct}%` }}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#FFE500] border-[2.5px] border-[#080808] shadow"
                  />
                )}
              </div>

              {/* Checkpoint Labels */}
              <div className="flex items-center justify-between text-[10px] sm:text-xs text-[#767676] mt-1 font-montserrat">
                <span>0 km</span>
                <span>Østerbro 12</span>
                <span>Joe 15</span>
                <span>NBRO 16.3</span>
                <span>Game 18</span>
                <span>42.2</span>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* STATE 2: Interactive Mobile On-Screen Keyboard Overlay (`Find your runner — typing.svg`) */}
      {showVirtualKeyboard ? (
        <div className="relative z-30 w-full bg-[#D9D9D9] pt-2 pb-3 px-2 sm:px-3 select-none shadow-inner animate-fadeIn">
          {/* Top Keyboard Accessory Bar */}
          <div className="flex items-center justify-between px-2 pb-2 text-xs sm:text-sm">
            <span className="text-[#767676] font-montserrat">
              {lang === "EN"
                ? "Enter a runner's name or bib number"
                : "Indtast løbers navn eller startnummer"}
            </span>
            <button
              type="button"
              onClick={() => setShowVirtualKeyboard(false)}
              className="font-montserrat font-bold text-[#080808] px-2 py-0.5 hover:underline"
            >
              {lang === "EN" ? "Done" : "Færdig"}
            </button>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-10 gap-1 sm:gap-1.5 mb-1.5">
            {KEYBOARD_ROWS[0].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => handleVirtualKey(k)}
                className="h-9 sm:h-11 bg-pureWhite rounded-md shadow-sm font-montserrat text-base sm:text-lg text-[#080808] active:bg-[#EAE9E5] flex items-center justify-center"
              >
                {k}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-9 gap-1 sm:gap-1.5 px-4 sm:px-6 mb-1.5">
            {KEYBOARD_ROWS[1].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => handleVirtualKey(k)}
                className="h-9 sm:h-11 bg-pureWhite rounded-md shadow-sm font-montserrat text-base sm:text-lg text-[#080808] active:bg-[#EAE9E5] flex items-center justify-center"
              >
                {k}
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex items-center gap-1 sm:gap-1.5 mb-1.5">
            <button
              type="button"
              onClick={() => {}}
              className="w-11 sm:w-16 h-9 sm:h-11 bg-[#B8BDC4] rounded-md shadow-sm flex items-center justify-center text-[#080808] font-bold"
              aria-label="Shift"
            >
              ↑
            </button>
            <div className="flex-1 grid grid-cols-7 gap-1 sm:gap-1.5">
              {KEYBOARD_ROWS[2].map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => handleVirtualKey(k)}
                  className="h-9 sm:h-11 bg-pureWhite rounded-md shadow-sm font-montserrat text-base sm:text-lg text-[#080808] active:bg-[#EAE9E5] flex items-center justify-center"
                >
                  {k}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleVirtualKey("BACKSPACE")}
              className="w-11 sm:w-16 h-9 sm:h-11 bg-[#B8BDC4] rounded-md shadow-sm flex items-center justify-center text-[#080808] font-bold"
              aria-label="Backspace"
            >
              ⌫
            </button>
          </div>

          {/* Row 4 */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={() => handleVirtualKey("1")}
              className="w-16 sm:w-24 h-9 sm:h-11 bg-[#B8BDC4] rounded-md shadow-sm font-montserrat text-xs sm:text-sm text-[#080808] flex items-center justify-center"
            >
              .?123
            </button>
            <button
              type="button"
              onClick={() => onToggleLang(lang === "EN" ? "DK" : "EN")}
              className="w-10 sm:w-14 h-9 sm:h-11 bg-[#B8BDC4] rounded-md shadow-sm flex items-center justify-center text-sm"
              title="Switch language"
            >
              🌐
            </button>
            <button
              type="button"
              onClick={() => handleVirtualKey("SPACE")}
              className="flex-1 h-9 sm:h-11 bg-pureWhite rounded-md shadow-sm font-montserrat text-xs sm:text-sm text-[#080808] flex items-center justify-center"
            >
              space
            </button>
            <button
              type="button"
              onClick={() => performSearch(query)}
              className="w-24 sm:w-36 h-9 sm:h-11 bg-[#FFE500] hover:bg-primaryYellow rounded-md shadow-sm font-montserrat font-medium text-xs sm:text-sm text-[#080808] flex items-center justify-center"
            >
              {lang === "EN" ? "Search" : "Søg"}
            </button>
          </div>
        </div>
      ) : (
        /* Bottom Area: Back Chevron + Three Slanted Yellow Navigation Buttons + Footer */
        <div className="relative mt-2 z-20 w-full bg-pureWhite pt-2 sm:pt-3 flex flex-col shrink-0">
          <div className="mb-6 pb-6 pt-2">
            <BottomNav
              activeTab="track"
              onSelectTab={handleSelectTab}
              onBack={() => onNavigate("home")}
              updatesLabel={lang === "EN" ? "Updates" : "Opdateringer"}
              lang={lang}
            />
          </div>
          <WavyFooter
            lang={lang}
            onToggleLang={onToggleLang}
            variant="flat"
          />
        </div>
      )}
    </div>
  );
}
