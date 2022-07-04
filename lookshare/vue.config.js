// const { dirname } = require('path')
const path = require('path')
module.exports = {
  dev: {
    proxyTable: {
      //proxy 요청을 보낼 api 시작 부분
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewite: {
          '^/api': ''
        }
      }
    },
  },
  outputDir: path.resolve(__dirname, '../backend/public')
}