/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  // prefix: 'tw-',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
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
      animation: {
        fade: 'fadeIn .5s ease-in-out',
        slideDown: 'slideDown .5s ease-out'
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0, paddingTop: "20px" },
          '100%': { opacity: 1, paddingTop: "0" }
        },
        slideDown: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        }
      })
    }
  },
  plugins: [],
}
