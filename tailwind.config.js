/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        pink: {
          100: '#FF8484',
        },
        blue: {
          100: '#34B8C4',
          200: '#87CFD6' //azul mais claro
        },
        gray: {
          100: '#ECECEC', //cinza mais escuro
          200: '#F5F5F5', //cinza mais claro
          300: '#FFFFFF', //branco
          500: '#525151', //texto
          600: '#D7D6D6', //stroke
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
