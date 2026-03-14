/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0B',
        surface: '#121212',
        primary: '#FFFFFF',
        secondary: '#A1A1AA', // Neutral gray for body text
        accent: '#E10600',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Ensure you import Inter or similar in CSS
      }
    },
  },
  plugins: [],
}