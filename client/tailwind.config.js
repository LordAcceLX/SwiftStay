/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './resources/views/*/*.blade.php',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#64748b',
      }
    },
  },
  plugins: [],
}