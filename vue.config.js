module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api': ''
        }
      },
      '/auth': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/auth': ''
        }
      }
    }
  }
}
