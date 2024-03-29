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
        custom: {
          0: '#d8a8d4',
          1: '#59c05f',
          2: '#e48edf',
          3: '#a8b334',
          4: '#6e9df7',
          5: '#dfde61',
          6: '#bb9feb',
          7: '#98bf51',
          8: '#7ca5ec',
          9: '#b9ae35',
          10: '#45adec',
          11: '#d0a537',
          12: '#58b5e1',
          13: '#e89853',
          14: '#3bd0e5',
          15: '#f18a77',
          16: '#41e5b0',
          17: '#f184ab',
          18: '#7beaa6',
          19: '#9bb1e8',
          20: '#beeb85',
          21: '#afb7dd',
          22: '#7cc366',
          23: '#e1a2ac',
          24: '#55be76',
          25: '#dda987',
          26: '#5ff0da',
          27: '#ebc160',
          28: '#8ad2f2',
          29: '#abba52',
          30: '#69b2cc',
          31: '#bdb553',
          32: '#40cabb',
          33: '#c59f52',
          34: '#68bebc',
          35: '#edc683',
          36: '#a4e9db',
          37: '#e4e88b',
          38: '#80b6aa',
          39: '#b9b567',
          40: '#70c195',
          41: '#e0daa9',
          42: '#a6eb99',
          43: '#b0ad87',
          44: '#9bb964',
          45: '#98c3a6',
          46: '#b6ac74',
          47: '#c2e6ad',
          48: '#90b673',
          49: '#93b486',
        },
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
