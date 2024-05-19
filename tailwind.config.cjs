/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'biznext-primary': '#1E3344',
        'biznext-secondary': '#8BB0CB',
        'biznext-tertiary': '#D9E6EE',
        'biznext-quaternary': '#F5F9FC'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
