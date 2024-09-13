/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        red: '#F55A5A',
      },
      fontFamily:{
        grotesk:['haas']
      }
    },
  },
  plugins: [],
}
