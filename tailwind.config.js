/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#B90512",
        secondary:"#FF5F08",
      }
    },
  },
  plugins: [],
}

