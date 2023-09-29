/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  purge: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'haikei': '#D6DCE5',
      'header': '#CBD5E5',
       
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
