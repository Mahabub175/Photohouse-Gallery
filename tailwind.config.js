const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // prefix: 'tw-',
  // darkMode: 'media',
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      purple: colors.purple,
      yellow: colors.yellow,
      blue: colors.blue,
      cyan: colors.cyan,
      sky: colors.sky,
      red: colors.red,
      rose: colors.rose,
      slate: colors.slate,
    },
    extend: {
      backgroundImage: {
        contact: "url('/src/assets/images/Contact-Banner.jpg')",
      },
      animation: {
        fade: "fade .5s ease-in-out",
        fadeIn: "fadeIn .2s ease-in",
        slideDown: "slideDown .5s ease-out",
      },
      keyframes: () => ({
        fade: {
          "0%": { opacity: 0, paddingTop: "20px" },
          "100%": { opacity: 1, paddingTop: "0" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideDown: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
});
