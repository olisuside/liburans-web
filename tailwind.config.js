/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
]
,
  content: ['index.html',"./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#4475F2',
        secondary: '#0f172a',
        dark: '#0f172a',

      },
      screens:{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}
