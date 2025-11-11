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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulse: {
          '0%, 100%': { boxShadow: '0px 3px 0px rgba(0, 0, 0, 0.3)' },
          '50%': { boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.5)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
        color_anim: {
          '0%': { fill: 'white' },
          '50%': { fill: '#fbc638' },
          '100%': { fill: 'white' },
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'color-anim': 'color_anim 1s infinite',
      }
    },
  },
  plugins: [],
}