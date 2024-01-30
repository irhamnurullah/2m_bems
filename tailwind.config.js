/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        buch: ['Buch'],
        kraftig: ['Kraftig'],
      },
      backgroundColor: {
        display: '#1D1B1D',
      },
    },
  },
  plugins: [],
};
