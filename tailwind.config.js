/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '398px',
      sm: '424px',
      md: '768px',
      lg: '980px',
      xl: '1024px',
      '2xl': '1224px',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
