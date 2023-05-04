/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  mode:'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'mrdafoe' : ['Mr Dafoe', 'cursive'],
      'Parisienne': ['Parisienne', 'cursive'],
      'Josefin' : ['Josefin Sans', 'sans-serif'],
      'Playfair ' : ['Playfair Display' , 'sans-serif'],
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
