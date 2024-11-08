/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradiente': "url(/src/assets/backgrounds/gradient.jpg)"
      }
    },
  },
  plugins: [],
}