module.exports = {
  content: [
    './src/components/*.html',
    './src/pages/*.html',
    './src/js/components/*.js'
  ],
  theme: {
    colors: {
      'eco-green': '#3DAE2B',
      'forest-green': '#27711C',
      'light-gray': '#F5F5F5',
      'medium-gray': '#CECECE',
      'dark-gray': '#6C6C6C',
      'cod-gray': '#1A1A1A',
      concrete: '#F2F2F2',
      silver: '#CBCBCB',
      gray: '#818181'
    },
    extend: {
      screens: {
        xs: '375px',
        tn: '520px'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: []
}
