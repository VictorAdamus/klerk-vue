/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   'md': {'max': '780px'},
    //   'sm': {'max': '540px'}
    // },
    extend: {
      animation: {
        'novalide': 'novalide linear .5s'
      },
      keyframes: {
        novalide: {
          '0%': {transform: 'translateX(-20px)', backgroundColor: 'brown'},
          '20%': {transform: 'translateX(20px)',},
          '40%': {transform: 'translateX(-20px)',},
          '60%': {transform: 'translateX(20px)',},
          '80%': {transform: 'translateX(-20px)',},
          '100%': {transform: 'translateX(0)', backgroundColor: 'rgb(59 130 246)'}
        }
      }
    },
    backgroundPosition: {
      'card': 'top 24px right 24px' 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
