import React, { useState } from "react";
import BottomNav from "./BottomNav";
import WavyFooter from "./WavyFooter";

const SCHEDULE_ITEMS = [
  {
    time: "08:30",
    en: "Elite start · Rådhuspladsen",
    dk: "Elitestart · Rådhuspladsen",
  },
  {
    time: "09:00",
    en: "Mass start · Wave 1–6",
    dk: "Samlet start · Bølge 1–6",
  },
  {
    time: "12:00",
    en: "First finishers expected",
    dk: "Første løbere i mål forventes",
  },
  {
    time: "15:30",
    en: "Course closes",
    dk: "Ruten lukker",
  },
];

const TOP_5_FIRST = [
  { rank: 1, name: "Jonas Bekele", time: "2:06:41", bib: "101" },
  { rank: 2, name: "Mikkel Hansen", time: "2:07:12", bib: "204" },
  { rank: 3, name: "Samuel Kiptoo", time: "2:07:48", bib: "312" },
  { rank: 4, name: "Lars Nygaard", time: "2:08:30", bib: "418" },
  { rank: 5, name: "Adam Mensah", time: "2:09:03", bib: "509" },
];

const LAST_5 = [
  { rank: 1, name: "Birgit Holm", time: "5:52:10", bib: "8801" },
  { rank: 2, name: "Peter Dalsgaard", time: "5:54:37", bib: "8942" },
  { rank: 3, name: "Anne Sørensen", time: "5:57:02", bib: "9104" },
  { rank: 4, name: "Tomas Eriksen", time: "5:58:44", bib: "9315" },
  { rank: 5, name: "Karen Lund", time: "5:59:51", bib: "9540" },
];

/**
 * Race Day Updates Screen (`Proto - Figma Part Update/Race day updates — editable page.svg`)
 */
export default function UpdatesPage({
  onNavigate,
  onTrackRunner,
  lang = "EN",
  onToggleLang,
}) {
  const [activeScheduleIdx, setActiveScheduleIdx] = useState(1); // 09:00 active by default
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [showSubscribeInput, setShowSubscribeInput] = useState(false);

  const handleSelectTab = (tab) => {
    if (tab === "updates") return;
    if (tab === "explore") onNavigate("zones");
    if (tab === "track") onNavigate("track");
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setShowSubscribeInput(false);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-white text-[#080808] overflow-hidden select-none">
      {/* Main Content (Fits within viewport with no scrolling) */}
      <main className="relative z-10 flex-1 overflow-hidden flex flex-col justify-between px-5 sm:px-9 md:px-12 pt-11 sm:pt-13 pb-1">
        {/* Header Row: Main Heading + LIVE indicator (Eyebrow text removed) */}
        <div className="flex items-baseline justify-between gap-2">
          <h1 className="font-montserrat font-black italic text-xl sm:text-3xl md:text-[38px] leading-tight tracking-tight text-[#080808] uppercase">
            {lang === "EN" ? "RACE DAY UPDATES" : "LØBSDAG OPDATERINGER"}
          </h1>
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-[#767676] font-medium shrink-0">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFE500] inline-block animate-pulse" />
            <span>
              {lang === "EN"
                ? "LIVE · Updated 8 sec ago"
                : "LIVE · Opdateret for 8 sek. siden"}
            </span>
          </span>
        </div>

        {/* SCHEDULE Timeline */}
        <section>
          <h2 className="font-montserrat font-semibold text-[10px] sm:text-[11px] tracking-[0.24em] text-[#767676] uppercase mb-1.5">
            {lang === "EN" ? "SCHEDULE" : "TIDSPLAN"}
          </h2>
          <div className="relative pl-1">
            {/* Vertical Line connecting the 4 circles */}
            <div
              aria-hidden="true"
              className="absolute left-[9.5px] top-2 bottom-2 w-[1.5px] bg-[#080808]"
            />
            <ul className="space-y-1 sm:space-y-1.5">
              {SCHEDULE_ITEMS.map((item, idx) => {
                const isActive = idx === activeScheduleIdx;
                return (
                  <li
                    key={item.time}
                    onClick={() => setActiveScheduleIdx(idx)}
                    className="relative flex items-center gap-3 sm:gap-4 cursor-pointer group"
                  >
                    <span
                      className={`relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-[1.5px] border-[#080808] transition-colors ${
                        isActive
                          ? "bg-[#FFE500] ring-2 ring-[#FFE500]/40"
                          : "bg-white group-hover:bg-[#FFE500]/50"
                      }`}
                    />
                    <span className="font-montserrat font-bold italic text-xs sm:text-[14px] w-11 sm:w-13 text-[#080808]">
                      {item.time}
                    </span>
                    <span className="font-montserrat text-xs sm:text-[13px] text-[#1E1E1E]">
                      {lang === "EN" ? item.en : item.dk}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* TOP 5 FIRST & LAST 5 Leaderboards */}
        <section className="grid grid-cols-2 gap-4 sm:gap-7">
          {/* TOP 5 FIRST */}
          <div>
            <div className="inline-block bg-[#FFE500] -skew-x-[14deg] px-3 sm:px-4 py-0.5 sm:py-1 mb-1.5 min-w-[130px] sm:min-w-[175px]">
              <h3 className="skew-x-[14deg] font-montserrat font-extrabold italic text-[11px] sm:text-sm md:text-[15px] text-[#080808] uppercase tracking-wide">
                {lang === "EN" ? "TOP 5 FIRST" : "TOP 5 FØRSTE"}
              </h3>
            </div>
            <ul className="divide-y divide-[#E5E5E5] border-b border-[#E5E5E5]">
              {TOP_5_FIRST.map((runner) => (
                <li
                  key={runner.rank}
                  onClick={() =>
                    onTrackRunner
                      ? onTrackRunner(runner.name)
                      : onNavigate("track")
                  }
                  title={
                    lang === "EN"
                      ? `Track ${runner.name}`
                      : `Følg ${runner.name}`
                  }
                  className="py-0.5 sm:py-1 flex items-center justify-between text-[11px] sm:text-xs md:text-[13px] cursor-pointer hover:bg-pureBlack/5 px-1 rounded transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-montserrat font-bold italic text-[#767676] w-3 shrink-0">
                      {runner.rank}
                    </span>
                    <span className="font-montserrat font-bold text-[#080808] truncate">
                      {runner.name}
                    </span>
                  </div>
                  <span className="font-montserrat font-normal text-[#080808] tabular-nums shrink-0 ml-2">
                    {runner.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* LAST 5 */}
          <div>
            <div className="inline-block bg-[#FFE500] -skew-x-[14deg] px-3 sm:px-4 py-0.5 sm:py-1 mb-1.5 min-w-[130px] sm:min-w-[175px]">
              <h3 className="skew-x-[14deg] font-montserrat font-extrabold italic text-[11px] sm:text-sm md:text-[15px] text-[#080808] uppercase tracking-wide">
                {lang === "EN" ? "LAST 5" : "SIDSTE 5"}
              </h3>
            </div>
            <ul className="divide-y divide-[#E5E5E5] border-b border-[#E5E5E5]">
              {LAST_5.map((runner) => (
                <li
                  key={runner.rank}
                  onClick={() =>
                    onTrackRunner
                      ? onTrackRunner(runner.name)
                      : onNavigate("track")
                  }
                  title={
                    lang === "EN"
                      ? `Track ${runner.name}`
                      : `Følg ${runner.name}`
                  }
                  className="py-0.5 sm:py-1 flex items-center justify-between text-[11px] sm:text-xs md:text-[13px] cursor-pointer hover:bg-pureBlack/5 px-1 rounded transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-montserrat font-bold italic text-[#767676] w-3 shrink-0">
                      {runner.rank}
                    </span>
                    <span className="font-montserrat font-bold text-[#080808] truncate">
                      {runner.name}
                    </span>
                  </div>
                  <span className="font-montserrat font-normal text-[#080808] tabular-nums shrink-0 ml-2">
                    {runner.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* STAY IN THE LOOP Slanted Yellow Banner (Sized to fit cleanly without clipping) */}
        <section className="relative px-2 sm:px-3 pb-1">
          <div className="bg-[#FFE500] -skew-x-[4deg] px-3.5 py-2.5 sm:px-5 sm:py-3.5 shadow-[4px_4px_0px_rgba(0,0,0,0.12)] flex items-center gap-3.5 sm:gap-5">
            <div className="skew-x-[4deg] w-16 h-16 sm:w-24 sm:h-24 bg-white p-1.5 shrink-0 flex items-center justify-center">
              <img
                src="/assets/qr-code.png"
                alt="Newsletter QR Code"
                className="w-full h-full object-contain [image-rendering:pixelated]"
              />
            </div>

            <div className="skew-x-[4deg] flex-1 min-w-0">
              <h3 className="font-montserrat font-extrabold italic text-sm sm:text-lg md:text-[20px] text-[#080808] uppercase tracking-tight leading-tight">
                {lang === "EN" ? "STAY IN THE LOOP" : "HOLD DIG OPDATERET"}
              </h3>
              <p className="font-montserrat text-[10px] sm:text-xs text-[#080808] leading-snug mt-0.5 max-w-md">
                {lang === "EN"
                  ? "Scan the QR code to get live race updates, results and highlights in the Copenhagen Marathon newsletter."
                  : "Scan QR-koden for at få live løbsopdateringer, resultater og højdepunkter i Copenhagen Marathon-nyhedsbrevet."}
              </p>

              {subscribed ? (
                <p className="mt-1.5 font-montserrat font-bold italic text-[11px] sm:text-xs text-[#080808]">
                  ✓{" "}
                  {lang === "EN"
                    ? "Subscribed to live updates!"
                    : "Tilmeldt live opdateringer!"}
                </p>
              ) : showSubscribeInput ? (
                <form
                  onSubmit={handleSubscribeSubmit}
                  className="mt-1.5 flex items-center gap-2 max-w-xs"
                >
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder={
                      lang === "EN" ? "Your email..." : "Din e-mail..."
                    }
                    className="flex-1 bg-white px-2 py-0.5 text-xs text-[#080808] border border-[#080808] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#080808] text-[#FFE500] font-montserrat font-bold italic text-xs px-2.5 py-0.5"
                  >
                    OK
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowSubscribeInput(true)}
                  className="mt-1.5 inline-flex items-center gap-1.5 font-montserrat font-extrabold italic text-[11px] sm:text-xs text-[#080808] uppercase hover:underline"
                >
                  <span>{lang === "EN" ? "SUBSCRIBE" : "TILMELD"}</span>
                  <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Area: Back Chevron + Three Slanted Yellow Navigation Buttons + Footer */}
      <div className="relative z-20 w-full bg-white pt-1 flex flex-col shrink-0">
        <div className="mb-5 pb-4 pt-1">
          <BottomNav
            activeTab="updates"
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
          bgClassName="bg-white"
        />
      </div>
    </div>
  );
}
