const path = require('path')

const resolve = dir => path.join(__dirname, dir)
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 项目的基本路径
  publicPath: BASE_URL,
  // 开发配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  devServer: {
    port: '',
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://192.168.31.184:9527/osca',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#0fb1b5',
          'link-color': '#0fb1b5',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true
      }
    }
  }
}
