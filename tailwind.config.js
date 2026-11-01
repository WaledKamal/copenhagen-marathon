/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        // Exact colors parsed directly from Landing Page.svg, Homepage.svg, and Zones Page.svg
        primaryYellow: '#FFEE00',        // Main "COPENHAGEN MARATHON" title, language pill border & active fill, zone polygon gradient start, button drop-offset base
        buttonYellow: '#FFEE32',         // Slanted parallelogram action buttons ('START', 'Updates', 'Explore', 'Track Runner')
        buttonShadowYellow: 'rgba(255, 238, 0, 0.36)', // Rectangular offset backdrop behind slanted buttons (#FFEE00 at 0.36 opacity)
        buttonTextDark: '#494949',       // Bold italic text inside the slanted action buttons
        darkOverlay: '#888888',          // Grayscale background base fill & QR helper text color
        mapPromptOverlay: 'rgba(136, 136, 136, 0.15)', // Bottom overlay bar on Zones Page (#888888 with fill-opacity="0.15")
        zoneYellow: 'rgba(255, 238, 0, 0.13)',         // Transparent yellow map zone polygons (#FFEE00 linearGradient with fill-opacity="0.13")
        zoneYellowEnd: 'rgba(255, 238, 0, 0.87)',      // Gradient stop 1 in SVG zone definitions
        chevronOverlay: 'rgba(255, 255, 255, 0.08)',   // Subtle large chevron pattern on Landing Page (fill="white" fill-opacity="0.08")
        langGradientStart: '#FF8A0D',    // Subtle 20% linear gradient stop on active 'EN' language pill
        langGradientEnd: '#FFFFFD',      // Subtle 20% linear gradient stop 2 on active 'EN' language pill
        pureWhite: '#FFFFFF',
        pureBlack: '#000000',
      },
      skew: {
        '23': '23.1deg', // Exact parallelogram slant from SVG (dx=33.293 over dy=79 => atan(33.293/79) ≈ 22.85deg / 24.878 over 54.68 => 24.4deg)
      }
    },
  },
  plugins: [],
}

