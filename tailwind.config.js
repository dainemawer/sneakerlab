module.exports = {
  content: [
    './src/components/*.html',
    './src/pages/*.html'
  ],
  theme: {
    colors: {
      'eco-green': '#3DAE2B',
      'light-gray': '#F5F5F5',
      'medium-gray': '#CECECE',
      silver: '#CBCBCB',
      gray: '#818181'
    },
    extend: {
      screens: {
        xs: '375px'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: []
}
