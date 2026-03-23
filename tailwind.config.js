/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'vintage-coquete': ['Great Vibes','cursive', 'sans-serif'],
        'fun2': ['Happy Monkey', "system-ui", 'sans-serif'],
        'display': ['Cormorant Garamond', 'serif'],
        'body': ['Manrope', 'sans-serif']

      }
      
    },
  },
  plugins: [],
}
