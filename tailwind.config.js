/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003a65",
        accent: "#CBBD93",
        white: "#FFFFFF",
        background: "#6495ed",
      },
    },
  },
  plugins: [],
}