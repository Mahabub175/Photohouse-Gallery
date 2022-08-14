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
      yellow: colors.yellow,
      blue: colors.blue,
      cyan: colors.cyan,
      sky: colors.sky,
      slate: colors.slate,
    },
    extend: {
      // backgroundImage: {
      //   'hero1': "url('./src/Images/landscape02.jpg')"
      // }
    }
  },
  plugins: [],
}
