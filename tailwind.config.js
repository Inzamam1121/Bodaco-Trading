/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        lato:"Lato",
        great:"Great Vibes",
        open:"Open Sans",
        Helvetica:"Helvetica",
      }
    },
  },
  plugins: [],
}

