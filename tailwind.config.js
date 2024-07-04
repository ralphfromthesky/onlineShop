/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-1': '#A8E6CE',
        'color-2': '#DCEDC2',
        'color-3': '#FFD3B5',
        'color-4': '#FFAAA6',
        'color-5': '#FF8C94',
      },
    },
  },
  plugins: [],
}