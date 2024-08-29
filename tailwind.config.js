/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(18, 18, 18)',
        'menu-bar': 'rgb(24, 24, 24)',
        'top-gradient': 'rgb(64, 64, 64)',
        'bottom-gradient': 'rgb(40, 40, 40)',
        'primary-text': 'rgb(255, 255, 255)',
        'secondary-text': 'rgb(179, 179, 179)',
      },
    },
  },
  plugins: [],
}
