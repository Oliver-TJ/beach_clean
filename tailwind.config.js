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
      keyframes: {
        // Keep glow for the subtle idle animation
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
        // Keep color_anim for the CTA button
        color_anim: {
          '0%': { fill: 'white' },
          '50%': { fill: '#fbc638' },
          '100%': { fill: 'white' },
        }
      },
      animation: {
        // Use a longer duration for a more subtle glow
        'glow': 'glow 4s ease-in-out infinite',
        'color-anim': 'color_anim 1s infinite',
      }
    },
  },
  plugins: [],
}