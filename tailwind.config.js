/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      primario : '#14B8A6',
      primario2 : '#2563EB',
      primario3 : '#F59E0B',
      textcolor : '#F0FDFA',
    },
  },
  plugins: [],
}
