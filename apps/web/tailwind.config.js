/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff3e9',
          100: '#ffe0c2',
          200: '#ffc18a',
          300: '#ffa055',
          400: '#ff8931',
          500: '#fe5e1f',
          600: '#e04717',
          700: '#b33613',
          800: '#7a250e',
          900: '#461607',
        },
      },
    },
  },
  plugins: [],
};
