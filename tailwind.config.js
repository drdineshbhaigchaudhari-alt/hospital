/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#0298b9',
          tealDark: '#007f9b',
          blue: '#0ea5e9',
          navy: '#0f172a',
          navyLight: '#1b2538',
          subtle: '#64748b',
          bgLight: '#f8fafc'
        }
      }
    },
  },
  plugins: [],
}
