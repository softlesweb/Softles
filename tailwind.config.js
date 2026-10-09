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
        // Semantic design tokens — values live in globals.css (:root +
        // html[data-theme="light"]). RGB channels keep /opacity working.
        page: 'rgb(var(--c-page) / <alpha-value>)',
        deep: 'rgb(var(--c-deep) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        raise: 'rgb(var(--c-raise) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        'line-2': 'rgb(var(--c-line-2) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        soft: 'rgb(var(--c-soft) / <alpha-value>)',
        mute: 'rgb(var(--c-mute) / <alpha-value>)',
        dim: 'rgb(var(--c-dim) / <alpha-value>)',
        brand: 'rgb(var(--c-brand) / <alpha-value>)',
        'brand-2': 'rgb(var(--c-brand-2) / <alpha-value>)',
        'brand-soft': 'rgb(var(--c-brand-soft) / <alpha-value>)',
        'brand-tint': 'rgb(var(--c-brand-tint) / <alpha-value>)'
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