/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#f36f27',
      'green': '#13ce66',
      'orange-dark': '#171717',
      'gray-dark': '#25262c',
      'gray': '#aeaeae',
      'gray-light': '#f7f6f9',
      'white': '#deddde',
    },
    extend: {},
  },
  plugins: [],
}