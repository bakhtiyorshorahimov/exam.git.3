/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
     

      md: { max: '510px' },
      // @media (max-width: 510px){}
      
     
    }
  },

 
  plugins: [],
}

