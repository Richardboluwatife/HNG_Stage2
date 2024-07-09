/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "296px",
      sm: "536px",
      smmd: "686px",
      md: "976px",
      lg: "1292px",
    },
    extend: {},
  },
  plugins: [],
}

