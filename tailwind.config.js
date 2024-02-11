/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'vintage-coquete': ['Great Vibes','cursive', 'sans-serif'],
        'fun2': ['Happy Monkey', "system-ui", 'sans-serif']

      }
      
    },
  },
  plugins: [],
}