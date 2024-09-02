/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflix-red': '#E50914',
        'netflix-gray':"#1d1d1d"
      },
      scrollbar: ['rounded'],
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ 
      nocompatible: true 
    }), 
  ],
  darkMode:"media"
}