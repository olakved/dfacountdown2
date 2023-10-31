/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
    './sharedComponents/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    fontFamily: {
      babablu: ['Montserrat'],
    },
    screens: {
      xxlA: { min: '1440px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1028px' },
      // => @media (max-width: 1023px) { ... }

      lgSm: { max: '950px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '834px' },
      // => @media (max-width: 767px) { ... }
      mdSm: { max: '768px' },
      // => @media (max-width: 7px) { ... }

      xlsm: { max: '550px' },
      // => @media (max-width: 550px) { ... }
      xlsmMin: { min: '550px' },
      // => @media (min-width: 550px) { ... }

      sm: { max: '375px' },
      // => @media (max-width: 639px) { ... }
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      maxWidth: {
        '8xl': '1980px',
      },
    },
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
