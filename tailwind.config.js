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
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      // spacing: {
      //   '8xl': '96rem',
      //   '9xl': '128rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    }
  },
  plugins: [],
}
