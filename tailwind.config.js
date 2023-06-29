/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        secondary: 'Quicksand',
        primary: 'Bebas Neue'
      },
      screens: {
        sm: '600px'
        // => @media (min-width: 640px and max-width: 767px) { ... }
      },
      boxShadow: {
        '3xl': '0 35px 25px -30px'
      }
    }
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ]
}
