const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
        '@': path.resolve(__dirname, './src'),
        api: path.resolve(__dirname, './src/api')
      }
    }
  }
}
