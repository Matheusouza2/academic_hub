/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'blue': {
        '400': '#02ADEE',
        '500': '#3B82F6',
        '700': '#3A71BE',
        '900': '#2E318E',
      },
      'red': '#EF4444',
      'gold': '#EAB308',
      'green': '#22C55E',
      'dark': '#000000',
      'gray': {
        '500': '#F9F9F9',
        '700': '#969696',
        '900': '#71717A',
      },
      'white': '#FFFFFF',
    },
  },
  plugins: [],
}

