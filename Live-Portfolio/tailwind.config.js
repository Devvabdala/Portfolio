/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkGray: '#2A2A78',
        white: '#ffffff',
        mediumGray: '#303088',
        lightGreen: '#353597',
        paleGreen: '#20205A',
      },
    },
  },
  plugins: [],
}