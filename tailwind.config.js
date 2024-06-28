/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        major: "Poppins",
      },
      boxShadow:{
        shadownav:"0px 0px 21px 0px #9191918f"
      }
    },
  },
  plugins: [],
}

