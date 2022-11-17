const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        landingPage: "url('/landing-page-background.jpeg')"
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    screens: {
      'min-1440': '1440px',
    }
  },
  plugins: [],
}
