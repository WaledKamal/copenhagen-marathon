import React, { useState } from 'react';
import BottomNav from './BottomNav';
import WavyFooter from './WavyFooter';

const SCHEDULE_ITEMS = [
  {
    time: '08:30',
    en: 'Elite start · Rådhuspladsen',
    dk: 'Elitestart · Rådhuspladsen',
  },
  {
    time: '09:00',
    en: 'Mass start · Wave 1–6',
    dk: 'Samlet start · Bølge 1–6',
  },
  {
    time: '12:00',
    en: 'First finishers expected',
    dk: 'Første løbere i mål forventes',
  },
  {
    time: '15:30',
    en: 'Course closes',
    dk: 'Ruten lukker',
  },
];

const TOP_5_FIRST = [
  { rank: 1, name: 'Jonas Bekele', time: '2:06:41', bib: '101' },
  { rank: 2, name: 'Mikkel Hansen', time: '2:07:12', bib: '204' },
  { rank: 3, name: 'Samuel Kiptoo', time: '2:07:48', bib: '312' },
  { rank: 4, name: 'Lars Nygaard', time: '2:08:30', bib: '418' },
  { rank: 5, name: 'Adam Mensah', time: '2:09:03', bib: '509' },
];

const LAST_5 = [
  { rank: 1, name: 'Birgit Holm', time: '5:52:10', bib: '8801' },
  { rank: 2, name: 'Peter Dalsgaard', time: '5:54:37', bib: '8942' },
  { rank: 3, name: 'Anne Sørensen', time: '5:57:02', bib: '9104' },
  { rank: 4, name: 'Tomas Eriksen', time: '5:58:44', bib: '9315' },
  { rank: 5, name: 'Karen Lund', time: '5:59:51', bib: '9540' },
];

/**
 * Race Day Updates Screen (`Proto - Figma Part Update/Race day updates — editable page.svg`)
 */
export default function UpdatesPage({
  onNavigate,
  onTrackRunner,
  lang = 'EN',
  onToggleLang,
}) {
  const [activeScheduleIdx, setActiveScheduleIdx] = useState(1); // 09:00 active by default
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [showSubscribeInput, setShowSubscribeInput] = useState(false);

  const handleSelectTab = (tab) => {
    if (tab === 'updates') return;
    if (tab === 'explore') onNavigate('zones');
    if (tab === 'track') onNavigate('track');
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setShowSubscribeInput(false);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-[#EBEAE6] text-[#080808] overflow-hidden select-none">
      {/* Scrollable Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto px-5 sm:px-9 md:px-12 pt-14 sm:pt-16 pb-2">
        {/* Top Meta Row: UPDATES + LIVE indicator */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-[#767676] mb-1">
          <span className="font-montserrat font-semibold tracking-[0.28em] uppercase">
            {lang === 'EN' ? 'UPDATES' : 'OPDATERINGER'}
          </span>
          <span className="inline-flex items-center gap-2 font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFE500] inline-block animate-pulse" />
            <span>
              {lang === 'EN'
                ? 'LIVE · Updated 8 sec ago'
                : 'LIVE · Opdateret for 8 sek. siden'}
            </span>
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-montserrat font-black italic text-2xl sm:text-4xl md:text-[42px] leading-tight tracking-tight text-[#080808] uppercase mb-3 sm:mb-4">
          {lang === 'EN' ? 'RACE DAY UPDATES' : 'LØBSDAG OPDATERINGER'}
        </h1>

        {/* SCHEDULE Timeline */}
        <section className="mb-4 sm:mb-5">
          <h2 className="font-montserrat font-semibold text-[10px] sm:text-xs tracking-[0.24em] text-[#767676] uppercase mb-2">
            {lang === 'EN' ? 'SCHEDULE' : 'TIDSPLAN'}
          </h2>
          <div className="relative pl-1">
            {/* Vertical Line connecting the 4 circles */}
            <div
              aria-hidden="true"
              className="absolute left-[10px] top-2.5 bottom-2.5 w-[1.5px] bg-[#080808]"
            />
            <ul className="space-y-1.5 sm:space-y-2">
              {SCHEDULE_ITEMS.map((item, idx) => {
                const isActive = idx === activeScheduleIdx;
                return (
                  <li
                    key={item.time}
                    onClick={() => setActiveScheduleIdx(idx)}
                    className="relative flex items-center gap-3 sm:gap-4 cursor-pointer group"
                  >
                    <span
                      className={`relative z-10 w-3.5 h-3.5 rounded-full border-[1.5px] border-[#080808] transition-colors ${
                        isActive
                          ? 'bg-[#FFE500] ring-2 ring-[#FFE500]/40'
                          : 'bg-[#EBEAE6] group-hover:bg-[#FFE500]/50'
                      }`}
                    />
                    <span className="font-montserrat font-bold italic text-xs sm:text-sm md:text-[15px] w-12 sm:w-14 text-[#080808]">
                      {item.time}
                    </span>
                    <span className="font-montserrat text-xs sm:text-sm md:text-[14px] text-[#1E1E1E]">
                      {lang === 'EN' ? item.en : item.dk}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* TOP 5 FIRST & LAST 5 Leaderboards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7 mb-4 sm:mb-5">
          {/* TOP 5 FIRST */}
          <div>
            <div className="inline-block bg-[#FFE500] -skew-x-[14deg] px-4 py-1 mb-2 min-w-[160px] sm:min-w-[185px]">
              <h3 className="skew-x-[14deg] font-montserrat font-extrabold italic text-xs sm:text-sm md:text-[16px] text-[#080808] uppercase tracking-wide">
                {lang === 'EN' ? 'TOP 5 FIRST' : 'TOP 5 FØRSTE'}
              </h3>
            </div>
            <ul className="divide-y divide-[#D6D5D0] border-b border-[#D6D5D0]">
              {TOP_5_FIRST.map((runner) => (
                <li
                  key={runner.rank}
                  onClick={() =>
                    onTrackRunner ? onTrackRunner(runner.name) : onNavigate('track')
                  }
                  title={
                    lang === 'EN'
                      ? `Track ${runner.name}`
                      : `Følg ${runner.name}`
                  }
                  className="py-1 sm:py-1.5 flex items-center justify-between text-xs sm:text-[13px] cursor-pointer hover:bg-pureBlack/5 px-1 rounded transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-montserrat font-bold italic text-[#767676] w-3">
                      {runner.rank}
                    </span>
                    <span className="font-montserrat font-bold text-[#080808]">
                      {runner.name}
                    </span>
                  </div>
                  <span className="font-montserrat font-normal text-[#080808] tabular-nums">
                    {runner.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* LAST 5 */}
          <div>
            <div className="inline-block bg-[#FFE500] -skew-x-[14deg] px-4 py-1 mb-2 min-w-[160px] sm:min-w-[185px]">
              <h3 className="skew-x-[14deg] font-montserrat font-extrabold italic text-xs sm:text-sm md:text-[16px] text-[#080808] uppercase tracking-wide">
                {lang === 'EN' ? 'LAST 5' : 'SIDSTE 5'}
              </h3>
            </div>
            <ul className="divide-y divide-[#D6D5D0] border-b border-[#D6D5D0]">
              {LAST_5.map((runner) => (
                <li
                  key={runner.rank}
                  onClick={() =>
                    onTrackRunner ? onTrackRunner(runner.name) : onNavigate('track')
                  }
                  title={
                    lang === 'EN'
                      ? `Track ${runner.name}`
                      : `Følg ${runner.name}`
                  }
                  className="py-1 sm:py-1.5 flex items-center justify-between text-xs sm:text-[13px] cursor-pointer hover:bg-pureBlack/5 px-1 rounded transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-montserrat font-bold italic text-[#767676] w-3">
                      {runner.rank}
                    </span>
                    <span className="font-montserrat font-bold text-[#080808]">
                      {runner.name}
                    </span>
                  </div>
                  <span className="font-montserrat font-normal text-[#080808] tabular-nums">
                    {runner.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* STAY IN THE LOOP Slanted Yellow Banner */}
        <section className="relative mx-1 sm:mx-2">
          <div className="bg-[#FFE500] -skew-x-[5deg] p-3.5 sm:p-5 shadow-[5px_5px_0px_rgba(0,0,0,0.14)] flex items-center gap-4 sm:gap-6">
            <div className="skew-x-[5deg] w-24 h-24 sm:w-32 sm:h-32 bg-pureWhite p-2 shrink-0 flex items-center justify-center">
              <img
                src="/assets/qr-code.png"
                alt="Newsletter QR Code"
                className="w-full h-full object-contain [image-rendering:pixelated]"
              />
            </div>

            <div className="skew-x-[5deg] flex-1 min-w-0">
              <h3 className="font-montserrat font-extrabold italic text-base sm:text-xl md:text-[22px] text-[#080808] uppercase tracking-tight">
                {lang === 'EN' ? 'STAY IN THE LOOP' : 'HOLD DIG OPDATERET'}
              </h3>
              <p className="font-montserrat text-[11px] sm:text-xs md:text-[13px] text-[#080808] leading-snug mt-1 max-w-md">
                {lang === 'EN'
                  ? 'Scan the QR code to get live race updates, results and highlights in the Copenhagen Marathon newsletter.'
                  : 'Scan QR-koden for at få live løbsopdateringer, resultater og højdepunkter i Copenhagen Marathon-nyhedsbrevet.'}
              </p>

              {subscribed ? (
                <p className="mt-2 font-montserrat font-bold italic text-xs sm:text-sm text-[#080808]">
                  ✓{' '}
                  {lang === 'EN'
                    ? 'Subscribed to live updates!'
                    : 'Tilmeldt live opdateringer!'}
                </p>
              ) : showSubscribeInput ? (
                <form
                  onSubmit={handleSubscribeSubmit}
                  className="mt-2 flex items-center gap-2 max-w-xs"
                >
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder={
                      lang === 'EN' ? 'Your email...' : 'Din e-mail...'
                    }
                    className="flex-1 bg-pureWhite px-2.5 py-1 text-xs text-[#080808] border border-[#080808] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#080808] text-[#FFE500] font-montserrat font-bold italic text-xs px-3 py-1"
                  >
                    OK
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowSubscribeInput(true)}
                  className="mt-2 inline-flex items-center gap-1.5 font-montserrat font-extrabold italic text-xs sm:text-sm text-[#080808] uppercase hover:underline"
                >
                  <span>{lang === 'EN' ? 'SUBSCRIBE' : 'TILMELD'}</span>
                  <span aria-hidden="true">→</span>
                </button>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Area: Back Chevron + Three Slanted Yellow Navigation Buttons + Footer */}
      <div className="relative z-20 w-full bg-[#EBEAE6] pt-1 flex flex-col shrink-0">
        <BottomNav
          activeTab="updates"
          onSelectTab={handleSelectTab}
          onBack={() => onNavigate('home')}
          updatesLabel={lang === 'EN' ? 'Updates' : 'Opdateringer'}
          lang={lang}
        />
        <WavyFooter
          lang={lang}
          onToggleLang={onToggleLang}
          variant="flat"
          hideQrIcon
          bgClassName="bg-[#EBEAE6]"
        />
      </div>
    </div>
  );
}

