/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
             dark: "#23262b",
      },
      screens: {
        md: "765px",
        sm: "450px",
        lg: "968px"
      }
        }
  },
  plugins: [],
}
