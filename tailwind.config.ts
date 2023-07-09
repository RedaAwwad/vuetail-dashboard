/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    'right',
    'left'
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#0ea5e9',
        // accent: '#38bdf8',
        // secondary: '#f472b6',
        // warning: '',
        // success: '',
        // error: '',
        // info: '',
        content: '#334155',
        heading: '#0f172a',
      },
      fontFamily: {
        'el-messiri': ['El Messiri', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-dir')(),
  ],
  daisyui: {
    themes: ['light', 'dark', 'night', 'business'], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "night", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};