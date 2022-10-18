/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      xs: {'max': '350px'},
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '2000px'
    },
    extend: {
      colors: {
        primary: '#edf2f8',
        secondary: '#313bac',
        custBlack: '#030303',
        custLightGray: '#e4e4e4',
        custGray: '#6b7688',
        custBrown: '#46364a',
      }
    },
    fontFamily: {
      base: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};