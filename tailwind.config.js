/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#70259B",
        "primary-active": "#D100C9",
        "secondary-heading-text": "#242424"
      },
    },
  },
  plugins: [],
}

