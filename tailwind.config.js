module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      'xl-white': '0px 0px 16px 7px #FFFFFF',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
