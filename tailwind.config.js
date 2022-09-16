/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./src/**/*.{js,jsx,ts,tsx}",],

  theme: {

    fontSize: {
      
      'sm': '1rem',

      'lg': '1.125rem',

      'xl': '1.25rem',

      'base1': '1.4rem',

      '2xl': '1.5rem',

      'tiny': '2rem',

    },
    
    extend: {},

    screens: {

      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }
    
      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }
    
      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }
    
      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }
    
      'sm': { 'max': '639px' },
      
    }  

  },

  plugins: [],

};


