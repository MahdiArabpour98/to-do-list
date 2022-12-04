/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-brown': '#8c7d76',
        'btn-background': '#d9d9d9',
        'second-white': '#f9f9f9',
        'footer-background': '#e3e3e3'
      },
      boxShadow: {
        'custom-shadow': 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
      }
    },
  },
  plugins: [],
}
