/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        LondonBetween : 'LondonBetween',
        CoffeeHealing : 'CoffeeHealing'
      }
    },
  },
  plugins: [],
}

