/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '640px',
      // => @media (min-width: 640px) { ... }

      lg: '768px',
      // => @media (min-width: 768px) { ... }

      xl: '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        darkBlue: {
          el: 'hsl(209, 23%, 22%)',
          bg: 'hsl(207, 26%, 17%)',
          text: 'hsl(200, 15%, 8%)',
        },
        white: {
          inp: 'hsl(0, 0%, 52%)',
          bg: '#fafafa',
          full: '#fff',
        },
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
