/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'customNavShadow': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -40px, rgba(0, 0, 0, 0.3) 0px 30px 60px -40px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
      },
      backgroundImage:{
        'hero-image': "url('./src/assets/excavator.jpg')"
      },
      colors:{
        'primary':'#7E9CA0',
        'secondary':'#2FB5B2',
        'text':'#1F1F1F',
      },
      fontFamily:{
        rubik: ['Rubik', 'sans-serif']
      }
    },
  },
  plugins: [],
}

