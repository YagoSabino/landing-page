/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[class*="app-dark"]'],
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
  corePlugins: {
    preflight: false,
  },
}