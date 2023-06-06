/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // safelist: [
  //   'rounded-full'
  // ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        accent: '#38bdf8',
        secondary: '#f472b6',
        warning: '',
        success: '',
        error: '',
        info: '',
        content: '#334155',
        heading: '#0f172a',
      },
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
        arima: ['Arima', 'cursive', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}