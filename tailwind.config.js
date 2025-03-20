/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
      },
      colors: {
        cream: "#f9f1ed",
        blush: "#f7d7c4",
        gold: "#d4a373",
        brown: "#4a3c31",
      },
    },
  },
  plugins: [],
};
