/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-brown': '#BE7C68',
        'custom-gray': '#f6f5f5',
      },
    },
  },
  plugins: [],
}