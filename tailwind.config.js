/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
