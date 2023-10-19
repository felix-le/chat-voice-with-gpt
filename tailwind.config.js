/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#FED929",
      black: "#000",
      white: "#fff",
      red: "#dc2626",
      green: "#059669",
      blue: "#2563EB",
      yellow: {
        100: "#FFF8D4",
        200: "#FFF0AA",
        300: "#FEE97F",
        400: "#FEE254",
        500: "#FED929",
        600: "#EBC401",
        700: "#B19301",
        800: "#766201",
        900: "#3B3100",
      },
      neutral: {
        50: "#F1F1F1",
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#808080",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#000",
      },
      // ...defaultTheme.colors
    },
    fontSize: {
      base: ["16px", "1.49"],
      lg: ["20px", "1.58"],
      xl: ["24px", "1"],
      "2xl": ["32px", "1.32"],
      "3xl": ["36px", "1.25"],
      "4xl": ["48px", "1"],
      "5xl": ["56px", "1"],
      "6xl": ["64px", "1"],
      "7xl": ["98px", "1"],
    },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",s
    //   "2xl": "1440px",
    // },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
    borderRadius: {
      DEFAULT: "0",
      xs: "2px",
      md: "3px",
      lg: "12px",
      xl: "24px",
    },
    corePlugins: {
      container: false,
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
        title: ["Clear Sans", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      flexShrink: {
        0: "0",
        1: "1",
        2: "2",
        unset: "unset",
      },
    },
  },
  plugins: [
    // function ({ addComponents, addUtilities, theme }) {
    //   addUtilities({
    //     ".heading": {
    //       fontSize: theme("fontSize.lg"),
    //       // fontStyle: "italic",
    //       // fontWeight: "bold",
    //       // color: theme("colors.primary"),
    //     },
    //   });
    // },
  ],
};
