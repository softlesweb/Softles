/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import svgToDataUri from "mini-svg-data-uri";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
      screens: {
        xs: "360px"
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        scroll: "scroll var(--animation-duration, 8s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100%))" },
        },
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        // ---- Design tokens (semantic) ----
        // Surfaces: page → raised (cards/sections) → overlay (inputs/hover)
        surface: {
          DEFAULT: '#0E1219',
          raised: '#161C27',
          overlay: '#1E2533',
        },
        // Hairlines / dividers
        line: {
          subtle: '#232B3A',
          DEFAULT: '#2E3446',
          strong: '#3A4256',
        },
        // Text ("ink")
        ink: {
          DEFAULT: '#F5F6FA',
          muted: '#C7CCD6',
          faint: '#7C8394',
        },
        // Brand
        brand: {
          DEFAULT: '#FF4D57',
          hover: '#E23B45',
          accent: '#FF6A3D',
          soft: 'rgba(255,77,87,0.10)',
        },
      },

      fontSize: {
        // Semantic type scale (size, {lineHeight, letterSpacing, fontWeight})
        eyebrow: ['0.8125rem', { lineHeight: '1', letterSpacing: '0.2em', fontWeight: '600' }],
        h3: ['1.25rem', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '700' }],
        h2: ['clamp(1.5rem, 1rem + 2.2vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        h1: ['clamp(2rem, 1rem + 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        display: ['clamp(2.5rem, 1rem + 6vw, 4rem)', { lineHeight: '1.04', letterSpacing: '-0.02em', fontWeight: '800' }],
      },
  	  borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  	  }
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => {
            const [color, opacity] = value.split("/");
            return {
              backgroundImage: `url("${svgToDataUri(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${color}" stroke-opacity="${opacity || 0.1}"><path d="M0 .5H31.5V32"/><path d="M.5 0V31.5H32"/></svg>`
              )}")`,
            };
          },
        },
        { values: theme("colors") }
      );
    }
  ],
};


function addVariablesForColors({ addBase, theme }) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
      ":root": newVars,
    });
  }