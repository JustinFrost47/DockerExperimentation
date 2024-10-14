/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tred: '#ff0000',
        tblack: '#000000',
        twhite: '#ffffff',
      },
    },
  },
  plugins: [],
}