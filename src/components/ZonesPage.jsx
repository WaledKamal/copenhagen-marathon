import React, { useState } from "react";
import BottomNav from "./BottomNav";
import WavyFooter from "./WavyFooter";

/**
 * Exact 5 SVG Zone Polygons and Labels extracted from `Proto - Figma Part Update/Zones Page V2.svg`
 */
const MAP_ZONES = [
  {
    id: "osterbro",
    name: "ØSTERBRO",
    labelX: 545,
    labelY: 194,
    hasTargetIcon: true,
    d: "M474.32 50.9765C466.524 48.5727 462.146 50.6067 461.187 57.0785L456.869 87.5882C455.91 94.06 456.509 100.439 458.668 106.726L462.986 119.762C465.145 126.049 463.646 131.735 458.488 136.82L425.385 170.103C420.228 175.188 418.728 180.874 420.887 187.161L430.602 214.065C432.761 220.352 435.04 222.571 437.439 220.722C439.838 218.872 444.036 218.641 450.033 220.028C456.029 221.415 458.848 225.344 458.488 231.816L455.969 267.873C455.61 274.345 458.308 279.938 464.065 284.653L477.379 295.47C483.136 300.186 488.773 300.093 494.29 295.193L513.72 277.997C519.238 273.097 525.594 270.878 532.791 271.34C539.987 271.802 547.243 270.415 554.56 267.18L557.798 265.793C565.114 262.557 572.97 260.569 581.366 259.829L588.562 259.275C596.958 258.535 602.715 261.17 605.834 267.18L612.67 281.048C615.789 287.057 619.747 288.675 624.544 285.901C629.342 283.128 632.041 279.661 632.64 275.5C633.24 271.34 630.241 268.566 623.645 267.18C617.048 265.793 613.75 262.557 613.75 257.472C613.75 252.387 611.651 248.92 607.453 247.071C603.255 245.222 601.156 242.448 601.156 238.75C601.156 235.052 602.955 232.509 606.553 231.123C610.152 229.736 608.952 228.349 602.955 226.962C596.958 225.575 593.96 222.802 593.96 218.641C593.96 214.481 598.098 211.8 606.374 210.598L630.122 207.27C638.397 206.068 644.094 202.462 647.213 196.452L652.25 186.745C655.369 180.735 661.066 178.147 669.342 178.979L685.893 180.643C694.169 181.475 694.889 180.042 688.052 176.344L672.58 168.023C665.743 164.325 662.325 160.627 662.325 156.928C662.325 153.23 666.223 150.688 674.019 149.301C681.815 147.914 689.671 148.33 697.587 150.549L708.022 153.6C715.938 155.819 716.118 155.542 708.562 152.768L700.646 149.994C693.09 147.221 688.412 143.292 686.613 138.207C684.814 133.122 686.913 129.886 692.91 128.499C698.907 127.112 705.863 127.436 713.779 129.47L717.018 130.302C724.934 132.336 724.994 132.197 717.197 129.886L708.202 127.112C700.406 124.801 694.649 120.733 690.931 114.908L689.491 112.967C685.773 107.142 679.836 103.536 671.681 102.15L663.764 100.763C655.609 99.3761 651.95 101.919 652.79 108.39L653.869 116.711C654.709 123.183 652.13 127.112 646.133 128.499C640.136 129.886 634.139 129.655 628.143 127.806C622.146 125.956 617.588 128.037 614.469 134.046L607.633 147.914C604.514 153.924 598.817 157.483 590.542 158.593L584.784 159.425C576.509 160.534 569.372 159.009 563.375 154.848C557.378 150.688 553.78 145.418 552.581 139.039L548.983 119.346C547.783 112.967 543.046 109.13 534.77 107.836L532.611 107.558C524.335 106.264 519.657 102.427 518.578 96.0477L514.62 72.1947C513.54 65.8154 509.103 61.4238 501.307 59.02L474.32 50.9765Z",
  },
  {
    id: "inner-city",
    name: "INNER CITY",
    labelX: 526,
    labelY: 369,
    d: "M596.839 277.303C594.92 271.016 590.062 269.121 582.266 271.617L553.481 280.77C545.684 283.266 539.028 286.964 533.511 291.864L515.88 307.674C510.362 312.574 505.805 315.255 502.206 315.717C498.608 316.18 496.509 318.26 495.91 321.958C495.31 325.656 492.551 330.14 487.634 335.41L452.012 373.686C447.094 378.956 444.336 384.826 443.736 391.298L441.937 414.874C441.337 421.346 445.235 424.813 453.631 425.275H455.43C463.826 425.737 470.423 428.65 475.22 434.012L496.809 458.142C501.607 463.505 506.884 463.828 512.641 459.113L520.557 452.456C526.314 447.741 526.914 442.656 522.356 437.202L519.838 434.151C515.28 428.696 513.001 424.119 513.001 420.421C513.001 416.723 515.4 413.025 520.197 409.327C524.995 405.629 530.092 403.548 535.49 403.086C540.887 402.624 547.184 404.057 554.38 407.385L559.777 409.881C566.974 413.21 573.69 412.701 579.927 408.356L595.399 397.816C601.636 393.471 604.755 388.293 604.755 382.284C604.755 376.275 606.254 370.265 609.252 364.256L625.444 330.972C628.443 324.963 628.143 319.647 624.545 315.024C620.946 310.401 616.749 307.397 611.951 306.01C607.153 304.623 603.795 300.786 601.876 294.499L596.839 277.303Z",
  },
  {
    id: "norrebro",
    name: "NØRREBRO",
    labelX: 392,
    labelY: 304,
    hasYellowDot: true,
    dotX: 389,
    dotY: 241,
    d: "M406.854 195.343C404.456 189.148 400.138 188.224 393.901 192.569L364.036 212.816C357.799 217.162 353.841 222.524 352.162 228.903L341.008 269.398C339.328 275.777 336.09 281.278 331.293 285.901C326.495 290.524 324.936 296.025 326.615 302.404L326.975 304.068C328.654 310.448 332.432 315.902 338.309 320.433L369.253 344.286C375.13 348.816 382.207 351.543 390.483 352.468L401.637 353.855C409.913 354.779 415.55 358.246 418.548 364.256C421.547 370.265 425.145 370.496 429.343 364.949L447.334 341.373C451.532 335.826 450.932 332.128 445.535 330.279C440.138 328.43 437.439 325.425 437.439 321.265C437.439 317.104 441.337 314.099 449.133 312.25C456.929 310.401 462.026 311.095 464.425 314.331C466.824 317.566 469.523 317.798 472.521 315.024C475.52 312.25 474.14 308.506 468.383 303.791L449.673 288.813C443.916 284.098 441.157 278.505 441.397 272.033L442.476 241.523C442.716 235.052 438.938 231.353 431.142 230.429C423.346 229.504 418.249 225.945 415.85 219.75L406.854 195.343Z",
  },
  {
    id: "frederiksberg",
    name: "FREDERIKSBERG",
    labelX: 252,
    labelY: 386,
    d: "M429.343 396.569C431.142 390.282 428.084 386.029 420.168 383.81L418.729 383.533C410.812 381.314 406.555 377.431 405.955 371.884C405.355 366.336 400.918 363.101 392.642 362.176L381.487 360.789C373.211 359.865 365.955 357.23 359.718 352.884L338.849 338.184C332.612 333.839 327.155 328.985 322.477 323.623L318.519 318.908C313.841 313.545 311.263 307.628 310.783 301.157L310.423 294.223C309.943 287.751 310.903 283.359 313.302 281.048C315.701 278.737 312.942 278.644 305.026 280.771L276.6 288.259C268.684 290.386 261.968 293.899 256.45 298.799L237.02 315.995C231.503 320.895 224.786 324.501 216.87 326.813L168.655 340.681C160.739 342.992 153.842 346.413 147.965 350.943L126.016 367.862C120.139 372.392 115.942 377.754 113.423 383.949L111.983 387.555C109.465 393.749 109.345 399.943 111.624 406.138L128.175 451.348C130.454 457.542 135.791 460.408 144.187 459.946L190.964 457.172C199.359 456.71 207.455 457.681 215.251 460.085L254.831 472.288C262.627 474.692 270.303 474.507 277.86 471.734L370.333 438.45C377.889 435.677 382.867 432.903 385.265 430.13C387.664 427.356 393.061 425.784 401.457 425.414L408.654 425.137C417.049 424.767 422.147 421.439 423.946 415.152L429.343 396.569Z",
  },
  {
    id: "vesterbro",
    name: "VESTERBRO",
    labelX: 358,
    labelY: 530,
    d: "M466.044 442.333C461.367 436.971 454.83 434.475 446.434 434.844L408.653 436.509C400.258 436.878 392.342 438.589 384.905 441.64L302.867 475.478C295.431 478.529 292.372 483.244 293.691 489.623L295.131 496.835C296.45 503.214 293.152 507.513 285.236 509.732L283.796 510.009C275.88 512.228 272.462 516.527 273.542 522.907L282.897 575.883C283.976 582.262 280.918 586.607 273.722 588.918C266.525 591.23 259.029 591.923 251.233 590.999C243.437 590.074 241.698 592.385 246.016 597.933L254.651 609.027C258.969 614.574 260.948 620.584 260.588 627.056L258.069 665.886C257.71 672.358 261.728 675.363 270.123 674.9L291.712 673.514C300.108 673.051 304.126 676.056 303.766 682.528L303.047 697.783C302.687 704.254 305.625 705.318 311.862 700.972L352.522 672.404C358.759 668.059 358.279 664.731 351.082 662.419C343.886 660.108 339.988 655.947 339.388 649.938C338.789 643.928 342.087 640.23 349.283 638.843C356.48 637.457 363.376 638.381 369.973 641.617C376.57 644.853 382.327 643.882 387.244 638.705L392.282 633.435C397.199 628.258 399.058 622.895 397.859 617.348C396.659 611.801 398.758 606.577 404.156 601.677L418.548 588.641C423.946 583.741 427.904 578.194 430.422 571.999L458.848 501.827C461.367 495.633 465.864 490.502 472.341 486.434L483.496 479.222C489.972 475.154 490.872 470.439 486.194 465.077L466.044 442.333Z",
  },
];

/**
 * 4 Interactive Location Cards from `Proto - Figma Part Update`:
 * - `Joe & the Juice location card.svg` (KM 15)
 * - `NBRO location card.svg` (KM 14)
 * - `ZALANDO Nørrebro — editable location card.svg` (KM 16.3)
 * - `GAME — editable reproduction.svg` (KM 18)
 */
const LOCATIONS_DATA = {
  joe: {
    id: "joe",
    title: "JOE & THE JUICE",
    shortTitle: "JOE & THE JUICE",
    logo: "/assets/locations/joe-logo.png",
    photo: "/assets/locations/joe-photo.png",
    km: "15",
    kmPositionPercent: 46,
    pinTop: "21%",
    pinLeft: "17%",
    mapBadges: ["music", "drinks", "food"],
    tags: [
      { icon: "music", labelEn: "Music", labelDk: "Musik" },
      { icon: "drinks", labelEn: "Drinks", labelDk: "Drinks" },
      { icon: "food", labelEn: "Food", labelDk: "Mad" },
    ],
    descriptionEn:
      "DJ, cheer cards, and a food truck. Sankt Hans Torv is the place to be for spectators this year. Joe & The Juice promises that special JOE atmosphere, created with juices, shakes, sandwiches, and shots.",
    descriptionDk:
      "DJ, heppekort og foodtruck. Sankt Hans Torv er stedet at være for tilskuere i år. Joe & The Juice lover den helt særlige JOE-stemning med friskpresset juice, shakes, sandwiches og shots.",
    bulletsEn: null,
    bulletsDk: null,
    where: "Sankt Hans Torv",
    moreIds: ["game", "nbro", "zalando"],
  },
  nbro: {
    id: "nbro",
    title: "NBRO",
    shortTitle: "NBRO",
    logo: "/assets/locations/nbro-logo.png",
    photo: "/assets/locations/nbro-photo.png",
    km: "14",
    kmPositionPercent: 68,
    pinTop: "21%",
    pinLeft: "45%",
    mapBadges: ["music", "flags", "energy"],
    tags: [
      { icon: "flags", labelEn: "Flags", labelDk: "Flag" },
      { icon: "energy", labelEn: "Energy", labelDk: "Energi" },
      { icon: "music", labelEn: "Music", labelDk: "Musik" },
    ],
    descriptionEn:
      "Dronning Louises Bridge is once again transformed into a human tunnel of celebration, music, and flags, as the running club NBRO Running sends a powerful surge of energy towards all runners. Here, the motto “If you’re not running, you’re cheering!” truly comes to life.",
    descriptionDk:
      "Dronning Louises Bro forvandles igen til en mennesketunnel af fest, musik og flag, når løbeklubben NBRO Running sender en bølge af energi mod alle løbere. Her lever mottoet “If you’re not running, you’re cheering!” for alvor.",
    bulletsEn: null,
    bulletsDk: null,
    where: "Dronning Louises Bridge",
    moreIds: ["game", "joe", "zalando"],
  },
  zalando: {
    id: "zalando",
    title: "ZALANDO Nørrebro",
    shortTitle: "Zalando Nørrebro",
    logo: "/assets/locations/zalando-logo.png",
    photo: "/assets/locations/zalando-photo.png",
    km: "16.3",
    kmPositionPercent: 54,
    pinTop: "49%",
    pinLeft: "20%",
    mapBadges: ["cheering", "music", "drinks"],
    tags: [
      { icon: "music", labelEn: "Music", labelDk: "Musik" },
      { icon: "drinks", labelEn: "Drinks", labelDk: "Drinks" },
      { icon: "cheering", labelEn: "Cheer", labelDk: "Hep" },
    ],
    descriptionEn:
      "At Nørrebros Runddel, Zalando creates a spectator-focused zone featuring:",
    descriptionDk: "Ved Nørrebros Runddel skaber Zalando en tilskuerzone med:",
    bulletsEn: [
      "A sign-making station, where you can write motivational messages",
      "A big screen",
      "A coffee truck",
      "Grandstands",
      "A sound meter measuring how loud the cheers get as runners pass",
      "A cheer-cam in kiss-cam style",
    ],
    bulletsDk: [
      "Skilteværksted, hvor du kan skrive motiverende heppebudskaber",
      "Storskærm",
      "Kaffevogn",
      "Tilskuertribuner",
      "Lydmåler, der måler hvor højt der heppes, når løberne passerer",
      "Cheer-cam i kiss-cam stil",
    ],
    where: "Dronning Louises Bridge",
    moreIds: ["game", "joe", "nbro"],
  },
  game: {
    id: "game",
    title: "GAME",
    shortTitle: "GAME",
    logo: "/assets/locations/game-logo.png",
    photo: "/assets/locations/game-photo.png",
    km: "18",
    kmPositionPercent: 46,
    pinTop: "54%",
    pinLeft: "48%",
    mapBadges: ["dj", "dancing", "music"],
    tags: [
      { icon: "dj", labelEn: "Dj & Mc", labelDk: "DJ & MC" },
      { icon: "music", labelEn: "Music", labelDk: "Musik" },
      { icon: "dancing", labelEn: "Dance", labelDk: "Dans" },
    ],
    descriptionEn:
      "The organization GAME brings their own DJ, MC, and dancers, who will turn up the energy on the stage at Den Røde Plads.",
    descriptionDk:
      "Organisationen GAME stiller med egen DJ, MC og dansere, som skruer helt op for energien på scenen ved Den Røde Plads.",
    bulletsEn: null,
    bulletsDk: null,
    where: "Den Røde Plads",
    moreIds: ["nbro", "joe", "zalando"],
  },
};

const LEGEND_ITEMS = [
  { key: "music", en: "MUSIC", dk: "MUSIK" },
  { key: "drinks", en: "DRINKS", dk: "DRINKS" },
  { key: "food", en: "FOOD", dk: "MAD" },
  { key: "flags", en: "FLAGS", dk: "FLAG" },
  { key: "energy", en: "ENERGY", dk: "ENERGI" },
  { key: "cheering", en: "CHEERING", dk: "HEP" },
  { key: "dj", en: "DJ & MC", dk: "DJ & MC" },
  { key: "dancing", en: "DANCING", dk: "DANS" },
];

function ActivityIcon({ type, className = "w-4 h-4" }) {
  switch (type) {
    case "music":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      );
    case "drinks":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M5 4h14l-1.5 15.5a2 2 0 0 1-2 1.8H8.5a2 2 0 0 1-2-1.8L5 4zm2.2 3 .4 4h8.8l.4-4H7.2zM4 2h16v2H4V2z" />
        </svg>
      );
    case "food":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M3 13h18a9 9 0 0 1-18 0zm2-3a4 4 0 0 1 3.8-3.9A4.5 4.5 0 0 1 13 4a4.5 4.5 0 0 1 4.2 2.1A4 4 0 0 1 21 10H5z" />
        </svg>
      );
    case "flags":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M5 3v18h2v-7h5l1 2h6V6h-6l-1-2H5z" />
        </svg>
      );
    case "energy":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
        </svg>
      );
    case "cheering":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <circle cx="12" cy="5" r="2.5" />
          <path d="M5 4l3.5 5h7L19 4l1.7 1-4.2 6v10h-2.5v-6h-4v6H7.5V11L3.3 5 5 4z" />
        </svg>
      );
    case "dj":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M16.5 3.5a4.5 4.5 0 0 1 4 7.1l-8.9 8.9-3.1-3.1 8.9-8.9a4.5 4.5 0 0 1-.9-4zM5.6 17.6l2.8 2.8-3.2 1.2-1.2-1.2 1.6-2.8z" />
        </svg>
      );
    case "dancing":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <circle cx="8" cy="4.5" r="2" />
          <circle cx="16" cy="4.5" r="2" />
          <path d="M4 7l3 3v10h2v-6h1v6h2V10l2-3-1.5-1L10 8.5H7L5.5 6 4 7zm9 0l2 3v10h2v-6h1v6h2V10l2-3-1.5-1L18 8.5h-2L14.5 6 13 7z" />
        </svg>
      );
    default:
      return null;
  }
}

/**
 * Zones Page (`Proto - Figma Part Update/Zones Page V2.svg`, `Zones Page - osterbro.svg`, and Location Cards)
 */
export default function ZonesPage({ onNavigate, lang = "EN", onToggleLang }) {
  const [activeZone, setActiveZone] = useState(null); // null = all-zones overview | zone object = zone map with 4 logo pins
  const [activeLocationId, setActiveLocationId] = useState(null); // 'joe' | 'nbro' | 'zalando' | 'game' | null

  const handleSelectTab = (tab) => {
    if (tab === "explore") {
      setActiveLocationId(null);
      setActiveZone(null);
    } else if (tab === "updates") {
      onNavigate("updates");
    } else if (tab === "track") {
      onNavigate("track");
    }
  };

  const handleBack = () => {
    if (activeLocationId) {
      setActiveLocationId(null);
    } else if (activeZone) {
      setActiveZone(null);
    } else {
      onNavigate("home");
    }
  };

  const activeLocation = activeLocationId
    ? LOCATIONS_DATA[activeLocationId]
    : null;

  return (
    <div className="relative w-full h-full flex flex-col justify-between bg-pureWhite overflow-hidden select-none">
      {/* Dark-Themed UI Map Area */}
      <div className="relative flex-1 w-full bg-[#1b1b1d] overflow-hidden">
        {/* Map Background Image */}
        <img
          src="/assets/zones-map-bg.png"
          alt="Copenhagen Marathon Dark Map"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* VIEW 1: All-Zones Overview (`Zones Page V2.svg`) */}
        {!activeZone && (
          <svg
            viewBox="0 0 834 889"
            preserveAspectRatio="xMidYMid slice"
            className="relative z-10 w-full h-full"
          >
            <defs>
              <linearGradient id="zoneYellowGradV2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFEE00" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFEE00" stopOpacity="0.87" />
              </linearGradient>
              <radialGradient id="markerSoftGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD900" stopOpacity="0.65" />
                <stop offset="55%" stopColor="#FFD900" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#FFD900" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Interactive Zone Fills & Labels */}
            {MAP_ZONES.map((zone) => (
              <g
                key={zone.id}
                onClick={() => setActiveZone(zone)}
                className="cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label={zone.name}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveZone(zone);
                  }
                }}
              >
                <path
                  d={zone.d}
                  fill="url(#zoneYellowGradV2)"
                  fillOpacity="0.18"
                  stroke="#FFEE00"
                  strokeWidth="0"
                  strokeLinejoin="round"
                  className="transition-all duration-200 group-hover:fill-opacity-35 group-hover:stroke-primaryYellow group-hover:stroke-[2.5px]"
                />

                {/* Live Yellow Location Marker on Nørrebro (`cx="389" cy="241"`) */}
                {zone.hasYellowDot && (
                  <g className="pointer-events-none">
                    {/* 2. Soft ambient yellow glow around the marker */}
                    <circle
                      cx={zone.dotX}
                      cy={zone.dotY}
                      r="22"
                      fill="url(#markerSoftGlow)"
                      className="marker-ambient-glow"
                    />

                    {/* 3. Continuous outward expanding ripple waves */}
                    <circle
                      cx={zone.dotX}
                      cy={zone.dotY}
                      r="7.5"
                      fill="#FFD900"
                      fillOpacity="0.18"
                      stroke="#FFD900"
                      strokeWidth="1.5"
                      className="marker-ripple-1"
                    />
                    <circle
                      cx={zone.dotX}
                      cy={zone.dotY}
                      r="7.5"
                      fill="#FFD900"
                      fillOpacity="0.12"
                      stroke="#FFD900"
                      strokeWidth="1.2"
                      className="marker-ripple-2"
                    />

                    {/* 1, 4 & 5. Central bright yellow dot (#FFD900) fixed at exact coordinates with scale-up + subtle live pulse */}
                    <circle
                      cx={zone.dotX}
                      cy={zone.dotY}
                      r="7.5"
                      fill="#FFD900"
                      className="marker-core-dot"
                    />
                  </g>
                )}

                {/* Optional Target Icon next to Østerbro */}
                {zone.hasTargetIcon && (
                  <g
                    transform={`translate(${zone.labelX - 78}, ${
                      zone.labelY - 18
                    })`}
                    className="pointer-events-none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="7"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
                    <path
                      d="M12 2V5M12 19V22M2 12H5M19 12H22"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </g>
                )}

                <text
                  x={zone.labelX}
                  y={zone.labelY}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  className="font-montserrat font-semibold text-[18px] tracking-[0.06em] pointer-events-none select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                >
                  {zone.name}
                </text>
              </g>
            ))}

            {/* Single Synchronized Pulsing Yellow Border Layer for All Zones Together */}
            <g className="zone-border-pulse pointer-events-none">
              {MAP_ZONES.map((zone) => (
                <path
                  key={`border-${zone.id}`}
                  d={zone.d}
                  fill="none"
                  stroke="#FFEE00"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
              ))}
            </g>
          </svg>
        )}

        {/* VIEW 2: Zone Detail Map with 4 Glowing Logo Pins & Legend (`Zones Page - osterbro.svg`) */}
        {activeZone && (
          <div className="relative z-10 w-full h-full">
            {/* Top Translucent Zone Header Bar */}
            <div className="absolute top-14 sm:top-16 left-6 right-20 z-20 bg-[#888888]/20 backdrop-blur-sm rounded-lg py-2 px-4 text-center pointer-events-none">
              <h1 className="font-montserrat font-normal text-pureWhite text-lg sm:text-2xl md:text-[26px] tracking-[0.08em] uppercase">
                {activeZone.name}
              </h1>
            </div>

            {/* 4 Glowing Yellow Speech-Bubble Logo Pins */}
            {Object.values(LOCATIONS_DATA).map((loc) => (
              <button
                key={loc.id}
                type="button"
                onClick={() => setActiveLocationId(loc.id)}
                style={{ top: loc.pinTop, left: loc.pinLeft }}
                className="group absolute z-20 w-28 sm:w-36 md:w-[146px] bg-pureWhite rounded-md shadow-md p-2 sm:p-2.5 flex flex-col items-center transition-all duration-200 hover:scale-105 hover:ring-2 hover:ring-primaryYellow active:scale-95 focus:outline-none"
              >
                {/* Synchronized Pulsing Yellow Border + Speech Bubble Pointer */}
                <span
                  aria-hidden="true"
                  className="zone-border-pulse pointer-events-none absolute inset-0 rounded-md border-[2.5px] border-primaryYellow"
                >
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-primaryYellow" />
                </span>

                {/* Logo Area */}
                <div className="w-full h-14 sm:h-20 flex items-center justify-center p-1 overflow-hidden">
                  <img
                    src={loc.logo}
                    alt={loc.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* 3 Black Activity Icon Badges */}
                <div className="w-full flex items-center justify-center gap-1.5 sm:gap-2 mt-1">
                  {loc.mapBadges.map((badgeKey) => (
                    <span
                      key={badgeKey}
                      className="w-6 h-5 sm:w-8 sm:h-6 rounded bg-pureBlack text-pureWhite flex items-center justify-center"
                    >
                      <ActivityIcon
                        type={badgeKey}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      />
                    </span>
                  ))}
                </div>
              </button>
            ))}

            {/* Right-Side Translucent Dark LEGEND Panel (`x=654 y=232 width=217 height=478 fill=#191919 opacity=0.81`) */}
            <aside className="absolute right-0 top-[22%] z-20 bg-[#191919]/85 backdrop-blur-sm rounded-l-md py-3 sm:py-4 px-3 sm:px-5 text-pureWhite border-l border-y border-pureWhite/10 shadow-xl">
              <h2 className="font-montserrat font-normal text-sm sm:text-lg md:text-[22px] tracking-[0.12em] uppercase text-right mb-2.5 sm:mb-3.5">
                {lang === "EN" ? "LEGEND" : "FORKLARING"}
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {LEGEND_ITEMS.map((item) => (
                  <li
                    key={item.key}
                    className="flex items-center justify-between gap-3 sm:gap-5 text-[10px] sm:text-xs md:text-[13px] tracking-[0.08em]"
                  >
                    <span className="text-pureWhite flex items-center justify-center w-5 h-5">
                      <ActivityIcon
                        type={item.key}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </span>
                    <span className="font-montserrat text-pureWhite/95 uppercase text-right flex-1">
                      {lang === "EN" ? item.en : item.dk}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        )}

        {/* Bottom Overlay Prompt Over Map */}
        <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-pureBlack/85 via-pureBlack/45 to-transparent py-3 sm:py-5 px-4 text-center pointer-events-none">
          {!activeZone ? (
            <>
              <p className="font-montserrat font-normal text-pureWhite text-xs sm:text-sm md:text-[17px] tracking-[0.14em] uppercase">
                {lang === "EN" ? "TAP ON THE ZONE TO" : "TRYK PÅ ZONEN FOR AT"}
              </p>
              <p className="font-montserrat font-black text-primaryYellow text-xl sm:text-3xl md:text-[38px] tracking-[0.06em] uppercase leading-tight mt-0.5 drop-shadow">
                {lang === "EN" ? "START EXPLORING" : "STARTE UDFORSKNING"}
              </p>
            </>
          ) : (
            <>
              <p className="font-montserrat font-normal text-pureWhite text-xs sm:text-sm md:text-[17px] tracking-[0.18em] uppercase">
                {lang === "EN" ? "TAP ON THE LOGO TO" : "TRYK PÅ LOGOET FOR AT"}
              </p>
              <p className="font-montserrat font-black text-primaryYellow text-xl sm:text-3xl md:text-[38px] tracking-[0.06em] uppercase leading-tight mt-0.5 drop-shadow">
                {lang === "EN" ? "SEE WHAT IS HAPPENING" : "SE HVAD DER SKER"}
              </p>
            </>
          )}
        </div>

        {/* VIEW 3: Location Detail Card Modal (`Joe & the Juice`, `NBRO`, `ZALANDO Nørrebro`, `GAME`) */}
        {activeLocation && (
          <div
            onClick={() => setActiveLocationId(null)}
            className="absolute inset-0 z-40 bg-pureBlack/65 backdrop-blur-[2px] flex items-center justify-center p-2.5 sm:p-5 overflow-y-auto animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[740px] bg-pureWhite text-[#080808] rounded-md shadow-2xl overflow-hidden my-auto"
            >
              {/* Top-Right Close Button (`✕`) */}
              <button
                type="button"
                onClick={() => setActiveLocationId(null)}
                aria-label="Close location card"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-1.5 text-[#080808] hover:scale-110 transition-transform"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                >
                  <path
                    d="M5 5L19 19M19 5L5 19"
                    stroke="#080808"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* Upper Content Area */}
              <div className="p-4 sm:p-6 pb-2">
                {/* Title */}
                <h2 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-[36px] text-[#080808] tracking-tight pr-8">
                  {activeLocation.title}
                </h2>

                {/* Two-Column Split: Left Info + Right Photo */}
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
                  {/* Left Column (7 cols): Slanted Tags + What to expect + Where + QR */}
                  <div className="sm:col-span-7 flex flex-col justify-between">
                    {/* 3 Slanted Yellow Activity Tags */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {activeLocation.tags.map((t) => (
                        <span
                          key={t.labelEn}
                          className="inline-flex items-center bg-buttonYellow -skew-x-[18deg] px-3 py-1 text-xs sm:text-sm font-montserrat font-bold text-[#080808]"
                        >
                          <span className="skew-x-[18deg] inline-flex items-center gap-1.5">
                            <ActivityIcon
                              type={t.icon}
                              className="w-3.5 h-3.5"
                            />
                            <span>{lang === "EN" ? t.labelEn : t.labelDk}</span>
                          </span>
                        </span>
                      ))}
                    </div>

                    {/* What to expect */}
                    <div>
                      <h3 className="font-montserrat font-semibold text-xs sm:text-sm text-[#080808] mb-1">
                        {lang === "EN"
                          ? "What to expect:"
                          : "Hvad du kan forvente:"}
                      </h3>
                      <p className="font-montserrat text-[11px] sm:text-xs text-[#1E1E1E] leading-relaxed">
                        {lang === "EN"
                          ? activeLocation.descriptionEn
                          : activeLocation.descriptionDk}
                      </p>

                      {activeLocation.bulletsEn && (
                        <ul className="mt-1 space-y-0.5 text-[11px] sm:text-xs text-[#1E1E1E] font-montserrat">
                          {(lang === "EN"
                            ? activeLocation.bulletsEn
                            : activeLocation.bulletsDk
                          ).map((b) => (
                            <li key={b}>• {b}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Where + QR Code for Directions */}
                    <div className="mt-3 flex items-end justify-between gap-3">
                      <p className="font-montserrat text-xs sm:text-[13px] text-[#080808]">
                        <span className="font-bold">
                          {lang === "EN" ? "Where:" : "Hvor:"}
                        </span>{" "}
                        <span className="tracking-wide">
                          {activeLocation.where}
                        </span>
                      </p>

                      <div className="flex flex-col items-center text-center shrink-0">
                        <img
                          src="/assets/qr-code.png"
                          alt="Directions QR Code"
                          className="w-11 h-11 sm:w-14 sm:h-14 object-contain"
                        />
                        <span className="text-[9px] sm:text-[10px] text-[#767676] leading-tight mt-1">
                          {lang === "EN" ? (
                            <>
                              Scan the QR code
                              <br />
                              for directions
                            </>
                          ) : (
                            <>
                              Scan QR-koden
                              <br />
                              for rutevejledning
                            </>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (5 cols): Location Photo + Attribution */}
                  <div className="sm:col-span-5 flex flex-col">
                    <div className="w-full aspect-[16/11] bg-[#EAE9E5] overflow-hidden">
                      <img
                        src={activeLocation.photo}
                        alt={activeLocation.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-[#767676] text-right mt-1">
                      Photo: Copenhagen Marathon / copenhagenmarathon.dk
                    </p>
                  </div>
                </div>
              </div>

              {/* Black Wave Divider with Yellow Rounded KM Badge (`15`, `14`, `16.3`, `18`) */}
              <div className="relative w-full h-9 sm:h-11 flex items-center my-0.5">
                <svg
                  viewBox="0 0 740 44"
                  preserveAspectRatio="none"
                  className="w-full h-full block"
                >
                  <path
                    d="M0 32 C 190 4, 340 12, 740 34"
                    stroke="#080808"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
                <span
                  style={{ left: `${activeLocation.kmPositionPercent}%` }}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#FFE500] text-[#080808] font-montserrat font-bold text-xs sm:text-sm px-2.5 py-1 rounded-lg shadow-sm border border-[#080808]/10"
                >
                  {activeLocation.km}
                </span>
              </div>

              {/* Lower Area: More in Nørrebro (3 Clickable Polaroid Cards) */}
              <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                <h4 className="font-montserrat font-bold text-xs sm:text-sm text-[#080808] underline mb-2.5">
                  {lang === "EN" ? "More in Nørrebro:" : "Mere på Nørrebro:"}
                </h4>

                <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
                  {activeLocation.moreIds.map((otherId) => {
                    const other = LOCATIONS_DATA[otherId];
                    return (
                      <button
                        key={other.id}
                        type="button"
                        onClick={() => setActiveLocationId(other.id)}
                        className="group bg-[#F3F1EE] hover:bg-[#EAE7E2] p-2 sm:p-3 rounded shadow-[0_6px_14px_rgba(0,0,0,0.16)] text-left transition-all hover:-translate-y-0.5 focus:outline-none"
                      >
                        <p className="font-montserrat font-bold text-[10px] sm:text-xs text-[#2B2B2B] truncate mb-1.5">
                          {other.shortTitle}
                        </p>
                        <div className="w-full aspect-[16/10] bg-pureBlack/10 overflow-hidden">
                          <img
                            src={other.photo}
                            alt={other.shortTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Area: Back Chevron + Three Slanted Yellow Navigation Buttons + Footer */}
      <div className="relative mt-2 z-20 w-full bg-pureWhite pt-2 sm:pt-3 flex flex-col shrink-0">
        <div className="mb-6 pb-6 pt-2">
          <BottomNav
            activeTab="explore"
            onSelectTab={handleSelectTab}
            onBack={handleBack}
            updatesLabel={lang === "EN" ? "Live Updates" : "Live Opdateringer"}
            lang={lang}
          />
        </div>
        <WavyFooter lang={lang} onToggleLang={onToggleLang} variant="flat" />
      </div>
    </div>
  );
}
