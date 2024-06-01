const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/preline/dist/*.js'
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'biznext-primary': '#1E3344',
        'biznext-secondary': '#8BB0CB',
        'biznext-tertiary': '#D9E6EE',
        'biznext-quaternary': '#F5F9FC',
        'biznext-primary-dark': '#375E7B'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [require('preline/plugin')]
}
