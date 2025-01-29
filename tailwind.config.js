/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#d6d5f9',
          400: '#b3b2ee',
          500: '#ADABFF',
          600: '#9694f3',
        },
        sidebar: {
          link: {
            500: '#565656',
            600: '#262626',
          },
          icon: {
            500: '#a1a1a1',
            600: '#808593',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
