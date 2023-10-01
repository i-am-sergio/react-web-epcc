/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      borderRadius: {
        '20': '20px',
      },
      height:{
        "200": "200px", 
        "400": "400px", 
      },
      colors: {
        primary: "#00020A",
        secondary: "#73ff32",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        myGreen: '#73ff32',
        myYellow: '#E3C800',
        myGreen2: '#A4C400',
        myRed: '#FA6800',
        myMagenta: '#D80073',
        myBlue: '#1BA1E2',
        myRed2: '#E51400',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
