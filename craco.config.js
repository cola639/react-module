const path = require('path')

module.exports = {
  webpack: {
    plugins: [],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  babel: {
    plugins: []
  },
  plugins: []
}
