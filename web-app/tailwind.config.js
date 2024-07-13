/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-black': '#0e0e0e',
        'app-blue': '#1545a4',
        'app-gray': '#F6F6F6',
        'app-sec-blue': 'rgba(21, 69, 164, 0.2)'
      }
    },
  },
  plugins: [],
}