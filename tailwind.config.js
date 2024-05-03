/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : {
          'raspberry' : 'hsl(332, 51%, 32%)',
          'nutmeg' : 'hsl(14, 45%, 36%)',
        },
        'rose-white' : 'hsl(330, 100%, 98%)',
        eggshell : 'hsl(30, 54%, 90%)',
        'light-grey' : 'hsl(30, 18%, 87%)',
        'wenge-brown' : 'hsl(30, 10%, 34%)',
        'dark-charcoal' : 'hsl(24, 5%, 18%)'

      },
      fontFamily : {
        'young-serif' : '"Young Serif"',
        'outfit' : "Outfit"
      }

    },
  },
  plugins: [],
}