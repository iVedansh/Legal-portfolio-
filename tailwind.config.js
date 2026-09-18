/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#1A202C', 800: '#2D3748' },
        ivory: { 100: '#FDFBF7', 200: '#F4F1EA' },
        gold: { 500: '#C5A059', 600: '#B08D46' }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}