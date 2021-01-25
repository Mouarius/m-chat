const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'm-black': '#3A3A3A',
        'm-green': '#8FF1AA',
        'm-gray': '#E5E5E5',
      },
      fontFamily: {
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      backdropFilter: {
        none: 'none',
        blur: 'blur(3px)',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
  },
  plugins: [require('tailwindcss-filters')],
}
