import React, { useState } from 'react';
import BottomNav from './BottomNav';
import WavyFooter from './WavyFooter';

/**
 * Exact SVG Zone Polygons and Labels extracted directly from `Zones Page.svg`:
 * - 6 Yellow semi-transparent polygons (`fill="url(#paint...)" fill-opacity="0.13"` with `#FFEE00` to `#FFEE00` @ 0.87)
 * - Labels ("Osterbro", "Norebro") placed at the exact coordinates from `Zones Page.svg`
 */
const MAP_ZONES = [
  {
    id: 'osterbro-north',
    name: 'Osterbro',
    displayTitle: 'Østerbro (North)',
    km: 'KM 8 – 14',
    crowdLevel: 'High Energy • Live Brass Band',
    labelX: 525,
    labelY: 174,
    showLabel: true,
    d: 'M453.32 33.9765C445.524 31.5727 441.146 33.6067 440.187 40.0785L435.869 70.5882C434.91 77.06 435.509 83.4393 437.668 89.7261L441.986 102.762C444.145 109.049 442.646 114.735 437.488 119.82L404.385 153.103C399.228 158.188 397.728 163.874 399.887 170.161L409.602 197.065C411.761 203.352 414.04 205.571 416.439 203.722C418.838 201.872 423.036 201.641 429.033 203.028C435.029 204.415 437.848 208.344 437.488 214.816L434.969 250.873C434.61 257.345 437.308 262.938 443.065 267.653L456.379 278.47C462.136 283.186 467.773 283.093 473.29 278.193L492.72 260.997C498.238 256.097 504.594 253.878 511.791 254.34C518.987 254.802 526.243 253.415 533.56 250.18L536.798 248.793C544.114 245.557 551.97 243.569 560.366 242.829L567.562 242.275C575.958 241.535 581.715 244.17 584.834 250.18L591.67 264.048C594.789 270.057 598.747 271.675 603.544 268.901C608.342 266.128 611.041 262.661 611.64 258.5C612.24 254.34 609.241 251.566 602.645 250.18C596.048 248.793 592.75 245.557 592.75 240.472C592.75 235.387 590.651 231.92 586.453 230.071C582.255 228.222 580.156 225.448 580.156 221.75C580.156 218.052 581.955 215.509 585.553 214.123C589.152 212.736 587.952 211.349 581.955 209.962C575.958 208.575 572.96 205.802 572.96 201.641C572.96 197.481 577.098 194.8 585.374 193.598L609.122 190.27C617.397 189.068 623.094 185.462 626.213 179.452L631.25 169.745C634.369 163.735 640.066 161.147 648.342 161.979L664.893 163.643C673.169 164.475 673.889 163.042 667.052 159.344L651.58 151.023C644.743 147.325 641.325 143.627 641.325 139.928C641.325 136.23 645.223 133.688 653.019 132.301C660.815 130.914 668.671 131.33 676.587 133.549L687.022 136.6C694.938 138.819 695.118 138.542 687.562 135.768L679.646 132.994C672.09 130.221 667.412 126.292 665.613 121.207C663.814 116.122 665.913 112.886 671.91 111.499C677.907 110.112 684.863 110.436 692.779 112.47L696.018 113.302C703.934 115.336 703.994 115.197 696.197 112.886L687.202 110.112C679.406 107.801 673.649 103.733 669.931 97.9083L668.491 95.9667C664.773 90.1422 658.836 86.5365 650.681 85.1497L642.764 83.7629C634.609 82.3761 630.95 84.9185 631.79 91.3903L632.869 99.7111C633.709 106.183 631.13 110.112 625.133 111.499C619.136 112.886 613.139 112.655 607.143 110.806C601.146 108.956 596.588 111.037 593.469 117.046L586.633 130.914C583.514 136.924 577.817 140.483 569.542 141.593L563.784 142.425C555.509 143.534 548.372 142.009 542.375 137.848C536.378 133.688 532.78 128.418 531.581 122.039L527.983 102.346C526.783 95.9668 522.046 92.1299 513.77 90.8356L511.611 90.5582C503.335 89.2639 498.657 85.427 497.578 79.0477L493.62 55.1947C492.54 48.8154 488.103 44.4238 480.307 42.02L453.32 33.9765Z',
  },
  {
    id: 'osterbro-central',
    name: 'Osterbro',
    displayTitle: 'Indre Østerbro / Parken',
    km: 'KM 15 – 19',
    crowdLevel: 'Main Spectator Hub • Fælledparken',
    labelX: 518,
    labelY: 356,
    showLabel: true,
    d: 'M575.839 260.303C573.92 254.016 569.062 252.121 561.266 254.617L532.481 263.77C524.684 266.266 518.028 269.965 512.511 274.865L494.88 290.674C489.362 295.574 484.805 298.255 481.206 298.718C477.608 299.18 475.509 301.26 474.91 304.958C474.31 308.656 471.551 313.14 466.634 318.41L431.012 356.686C426.094 361.956 423.336 367.827 422.736 374.299L420.937 397.874C420.337 404.346 424.235 407.813 432.631 408.275H434.43C442.826 408.738 449.902 411.188 455.659 415.625L478.688 433.654C484.445 438.092 490.262 441.605 496.139 444.194C502.016 446.783 508.253 445.673 514.85 440.866L524.565 433.654C531.162 428.847 535.659 423.438 538.058 417.429L544.175 402.174C545.974 396.21 552.69 395.702 558.927 391.356L574.399 380.817C580.636 376.471 583.755 371.294 583.755 365.284C583.755 359.275 585.254 353.265 588.252 347.256L604.444 313.973C607.443 307.963 607.143 302.647 603.545 298.024C599.946 293.402 595.749 290.397 590.951 289.01C586.153 287.623 582.795 283.786 580.876 277.5L575.839 260.303Z',
  },
  {
    id: 'norrebro-north',
    name: 'Norebro',
    displayTitle: 'Nørrebro (North)',
    km: 'KM 20 – 24',
    crowdLevel: 'DJ Stage & Confetti Tunnel',
    labelX: 375,
    labelY: 265,
    showLabel: false,
    d: 'M385.854 178.343C383.456 172.149 379.138 171.224 372.901 175.569L343.036 195.817C336.799 200.162 332.841 205.524 331.162 211.904L320.008 252.398C318.328 258.778 315.09 264.279 310.293 268.901C305.495 273.524 303.936 279.025 305.615 285.404L305.975 287.068C307.654 293.448 311.432 298.903 317.309 303.433L348.253 327.286C354.13 331.816 361.207 334.543 369.483 335.468L380.637 336.855C388.913 337.779 394.55 341.246 397.548 347.256C400.547 353.265 404.145 353.496 408.343 347.949L426.334 324.374C430.532 318.826 429.932 315.128 424.535 313.279C419.138 311.43 416.439 308.425 416.439 304.265C416.439 300.104 420.337 297.1 428.133 295.251C435.929 293.402 441.026 294.095 443.425 297.331C445.824 300.567 448.523 300.798 451.521 298.024C454.52 295.251 453.14 291.506 447.383 286.791L428.673 271.814C422.916 267.099 420.157 261.505 420.397 255.033L421.476 224.524C421.716 218.052 417.938 214.354 410.142 213.429C402.346 212.505 397.249 208.945 394.85 202.751L385.854 178.343Z',
  },
  {
    id: 'norebro',
    name: 'Norebro',
    displayTitle: 'Nørrebro (Dronning Louises Bro)',
    km: 'KM 25 – 29',
    crowdLevel: 'Peak Atmosphere • Coffee & Sound System',
    labelX: 261,
    labelY: 369,
    showLabel: true,
    d: 'M408.343 379.568C410.142 373.282 407.084 369.029 399.168 366.81L397.729 366.532C389.812 364.314 385.555 360.431 384.955 354.883C384.355 349.336 379.918 346.1 371.642 345.176L360.487 343.789C352.211 342.864 344.955 340.229 338.718 335.884L317.849 321.184C311.612 316.839 306.155 311.985 301.477 306.622L297.519 301.907C292.841 296.545 290.263 290.628 289.783 284.156L289.423 277.222C288.943 270.75 289.903 266.359 292.302 264.048C294.701 261.736 291.942 261.644 284.026 263.77L255.6 271.259C247.684 273.385 240.968 276.899 235.45 281.799L216.02 298.995C210.503 303.895 203.786 307.501 195.87 309.812L147.655 323.68C139.739 325.992 132.842 329.412 126.965 333.943L105.016 350.862C99.1394 355.392 94.9415 360.754 92.4228 366.949L90.9835 370.554C88.4648 376.749 88.3448 382.943 90.6237 389.137L107.175 434.347C109.454 440.542 114.791 443.408 123.187 442.945L169.964 440.172C178.359 439.71 186.455 440.68 194.251 443.084L233.831 455.288C241.627 457.692 249.303 457.507 256.86 454.733L349.333 421.45C356.889 418.676 361.867 415.903 364.265 413.129C366.664 410.356 372.061 408.784 380.457 408.414L387.654 408.137C396.049 407.767 401.147 404.439 402.946 398.152L408.343 379.568Z',
  },
  {
    id: 'vesterbro-west',
    name: 'Osterbro',
    displayTitle: 'Frederiksberg / Vesterbro',
    km: 'KM 30 – 36',
    crowdLevel: 'Family Cheering Zone & Refreshments',
    labelX: 351,
    labelY: 533,
    showLabel: true,
    d: 'M445.044 425.333C440.367 419.971 433.83 417.474 425.434 417.844L387.653 419.508C379.258 419.878 371.342 421.589 363.905 424.64L281.867 458.478C274.431 461.529 271.372 466.244 272.691 472.623L274.131 479.834C275.45 486.214 272.152 490.513 264.236 492.732L262.796 493.009C254.88 495.228 251.462 499.527 252.542 505.906L261.897 558.882C262.976 565.262 259.918 569.607 252.722 571.918C245.525 574.23 238.029 574.923 230.233 573.999C222.437 573.074 220.698 575.385 225.016 580.933L233.651 592.027C237.969 597.574 239.948 603.584 239.588 610.056L237.069 648.886C236.71 655.358 240.728 658.363 249.123 657.9L270.712 656.513C279.108 656.051 283.126 659.056 282.766 665.528L282.047 680.783C281.687 687.254 284.625 688.318 290.862 683.972L331.522 655.404C337.759 651.059 337.279 647.73 330.082 645.419C322.886 643.108 318.988 638.947 318.388 632.938C317.789 626.928 321.087 623.23 328.283 621.843C335.48 620.457 342.376 621.381 348.973 624.617C355.57 627.853 361.327 626.882 366.244 621.705L371.282 616.435C376.199 611.257 378.058 605.895 376.859 600.348C375.659 594.801 377.758 589.577 383.156 584.677L397.548 571.641C402.946 566.741 406.904 561.194 409.422 554.999L437.848 484.827C440.367 478.633 444.864 473.501 451.341 469.433L462.496 462.222C468.972 458.154 469.872 453.439 465.194 448.077L445.044 425.333Z',
  },
  {
    id: 'inner-city-finish',
    name: 'Osterbro',
    displayTitle: 'Indre By / Kalvebod Brygge (Finish)',
    km: 'KM 37 – 42.195',
    crowdLevel: 'Final Sprint & Finish Line Grandstand',
    labelX: 510,
    labelY: 602,
    showLabel: true,
    d: 'M601.386 467.076C596.828 461.621 590.411 459.541 582.135 460.835L570.981 462.499C562.705 463.794 554.729 463.147 547.053 460.558L528.702 454.456C521.026 451.867 514.61 453.115 509.452 458.2L476.349 491.484C471.192 496.569 466.934 502.07 463.575 507.987L389.093 638.624C385.735 644.541 381.117 649.811 375.24 654.433L299.318 714.066C293.441 718.689 294.701 721 303.097 721H562.166C570.561 721 574.939 717.764 575.299 711.292L577.818 664.141C578.177 657.669 582.495 653.832 590.771 652.63L679.286 639.594C687.562 638.393 690.621 634.648 688.462 628.361L657.158 540.438C654.999 534.151 651.64 528.28 647.083 522.825L601.386 467.076Z',
  },
];

/**
 * Screen 3: Zones Page (Map View) (`Zones Page.svg`)
 * - Background is the dark-themed UI map (`/assets/zones-map-bg.png`).
 * - Overlays: Yellow semi-transparent polygons (`#FFEE00` linearGradient at `0.13` fill-opacity) highlighting specific areas
 *   with white text labels ("Norebro", "Osterbro").
 * - Bottom overlay text just above the navigation: "Click on the zone you want to explore"
 *   (White text with a dark/translucent gradient/overlay behind it for readability).
 * - Same three navigation buttons as the Homepage (with "Explore" in its active taller state).
 */
export default function ZonesPage({ onNavigate, lang, onToggleLang }) {
  const [selectedZone, setSelectedZone] = useState(null);

  const handleSelectTab = (tab) => {
    if (tab === 'explore') {
      setSelectedZone(null);
    } else {
      onNavigate('home');
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-pureWhite overflow-hidden select-none">
      {/* Dark-Themed UI Map Area (Covers top down to y=889 out of 1194, matching Zones Page.svg) */}
      <div className="relative flex-1 w-full bg-[#1b1b1d] overflow-hidden">
        {/* Map Background Image */}
        <img
          src="/assets/zones-map-bg.png"
          alt="Copenhagen Marathon Dark Map"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* Interactive SVG Map Zones Overlay (Exact viewBox 0 0 834 889 matching the map region in Zones Page.svg) */}
        <svg
          viewBox="0 0 834 889"
          preserveAspectRatio="xMidYMid slice"
          className="relative z-10 w-full h-full"
        >
          <defs>
            <linearGradient id="zoneYellowGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFEE00" stopOpacity="1" />
              <stop offset="100%" stopColor="#FFEE00" stopOpacity="0.87" />
            </linearGradient>
          </defs>

          {MAP_ZONES.map((zone) => {
            const isSelected = selectedZone?.id === zone.id;
            return (
              <g
                key={zone.id}
                onClick={() => setSelectedZone(zone)}
                className="cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label={`${zone.name} (${zone.displayTitle})`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedZone(zone);
                  }
                }}
              >
                <path
                  d={zone.d}
                  fill="url(#zoneYellowGrad)"
                  fillOpacity={isSelected ? '0.42' : '0.13'}
                  stroke="#FFEE00"
                  strokeWidth={isSelected ? '2.5' : '0'}
                  strokeOpacity={isSelected ? '0.9' : '0'}
                  className="transition-all duration-200 group-hover:fill-opacity-30 group-hover:stroke-primaryYellow/60 group-hover:stroke-[1.5px]"
                />
                {zone.showLabel && (
                  <text
                    x={zone.labelX}
                    y={zone.labelY}
                    textAnchor="middle"
                    fill="#FFFFFF"
                    className="font-montserrat font-bold text-[19px] tracking-wide pointer-events-none select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
                  >
                    {zone.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* Interactive Zone Detail Card (Appears when a spectator clicks a zone polygon) */}
        {selectedZone && (
          <div className="absolute top-20 left-4 right-4 sm:left-8 sm:right-auto sm:w-80 z-30 bg-pureBlack/85 backdrop-blur-md border-2 border-primaryYellow rounded-xl p-4 text-pureWhite shadow-2xl">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="inline-block bg-primaryYellow text-pureBlack font-bold italic text-[10px] px-2 py-0.5 -skew-x-12 mb-1">
                  <span className="skew-x-12 inline-block">{selectedZone.km}</span>
                </span>
                <h2 className="font-montserrat font-bold italic text-base sm:text-lg text-primaryYellow leading-tight">
                  {selectedZone.displayTitle}
                </h2>
              </div>
              <button
                onClick={() => setSelectedZone(null)}
                aria-label="Close zone details"
                className="text-pureWhite/70 hover:text-primaryYellow text-sm font-bold px-1.5 py-0.5"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-pureWhite/90 mt-1.5 font-medium">
              {selectedZone.crowdLevel}
            </p>
            <div className="mt-3 pt-2.5 border-t border-pureWhite/15 flex items-center justify-between text-[11px] text-pureWhite/75">
              <span>Metro: 4 min walk</span>
              <span className="text-primaryYellow font-semibold">
                {lang === 'EN' ? 'Tap another zone →' : 'Vælg en anden zone →'}
              </span>
            </div>
          </div>
        )}

        {/* Bottom Overlay Bar Just Above Navigation: "Click on the zone you want to explore" */}
        {/* Combines exact SVG rect (#888888 at 0.15 opacity) + dark gradient behind text for readability */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-pureBlack/80 via-mapPromptOverlay to-transparent backdrop-blur-[1px] py-4 sm:py-5 md:py-6 px-4 text-center pointer-events-none">
          <p className="font-montserrat font-normal text-pureWhite text-sm sm:text-lg md:text-[22px] tracking-wide drop-shadow">
            {lang === 'EN'
              ? 'Click on the zone you want to explore'
              : 'Klik på den zone, du vil udforske'}
          </p>
        </div>
      </div>

      {/* Bottom Area: Three Slanted Yellow Navigation Buttons + White Wavy Container */}
      <div className="relative z-20 w-full bg-pureWhite pt-3 sm:pt-4 flex flex-col shrink-0">
        <BottomNav
          activeTab="explore"
          onSelectTab={handleSelectTab}
          lang={lang}
        />
        <WavyFooter lang={lang} onToggleLang={onToggleLang} variant="zones" />
      </div>
    </div>
  );
}

