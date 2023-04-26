const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1170px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1170px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans : ['var(--font-poppins)' , ...fontFamily.sans],
        "poppins": ['var(--font-poppins)', 'sans'],     
        "notoSerif": ['var(--font-notoSerif)', 'sans'],     
      },

      colors : {
        "primary" : "#00CF5D",
        "dark" : "#252734",
        "darkBlue" : "#0E111F",
        "gray" : "#5C5F6A",
        "light" : "#F6F6F8"
      },
      
      spacing : {
        "52px" : "52px",
        "71px" : "72px",
        "100px" : "100px",
        "section-xxl" : "100px",
        "section-xl" : "80px",
        "section-lg" : "60px",
      },
      boxShadow : {
        "dots" : "0px 0px 4px 1px #00CF5D",
        "sliderDots" : "0px 0px 3px #00CF5D",
        "card" : " 0px 4px 4px #00CF5D",
        "contactCard" : "10px 10px 0px #00CF5D"
      },
      fontSize : {
        '40px' : '40px',
        '52px' : '52px',
        '54px' : '54px',
      }
    },
  },
  plugins: [],
}
