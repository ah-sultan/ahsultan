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
      padding : '12px'
    },

    screens: {
      'xsm': '480px',
      // => @media (min-width: 640px) { ... }

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
        "notoSerif": ['var(--font-notoSerif)', 'sans'],     
      },

      colors : {
        "primary" : "var(--primary-color)",
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
        "dots" : `0px 0px 4px 1px var(--primary-color)`,
        "sliderDots" : "0px 0px 3px var(--primary-color)",
        "card" : " 0px 4px 4px var(--primary-color)",
        "contactCard" : "10px 10px 0px var(--primary-color)"
      },
      fontSize : {
        "40px" : "40px",
        "52px" : "52px",
        "54px" : "54px",
      },

      animation : {
        "lineDot" : "lineDot 20s linear infinite",
        "stickyNav" : "stickyNav .7s ease-in ",
        "filtering" : "filtering .4s ease-in-out ",
      },
      keyframes : {
        stickyNav : {
          "0%" : {opacity : 0, visibility: 'hidden'},
          "100%" : {opacity : 1, visibility: 'visible'},
        },
        lineDot : {
          "0%" : {
            left: 0,
            opacity: 0,
          },
        
          "5%, 95%" : {
            opacity: 1,
          },

          "100%" : {
            opacity: 0,
            left: '100%'
          }
        },
        filtering : {
          "0%" : {opacity: 0},
          "100%" : {opacity: 1},
        }
      }
    },
  },
  plugins: [],
}
