/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white': '#FBFBFB',
      'black': '#180A0A',
      'gray': '#9aa6b2',
      'light-gray': "#f2f2f2",
      'gray2': '#e9ecef',
      'blackLight': '#495057',
      'red': "#B31312",
      'red2': '#FF0303',
      'green': "#17B978",
      'green2': '#0CCA98',
      'yellow': "#FDCA40",
      'yellow2': '#FFD717'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    }
  },
  plugins: [],
}

