// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/apis': {
        // 测试环境
        target: 'https://www.phtfdata.com/',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/apis': ''   //需要rewrite重写的,
        }
      },
      //用户服务
      '/texts':{
        target: 'http://139.129.12.93:8093',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/texts': ''   //需要rewrite重写的,
        }
      },
      //红包服务
      '/redpackets':{
        target: 'http://139.129.12.93:8094',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/redpackets': ''   //需要rewrite重写的,
        }
      },
      //定投盈服务
      '/xwpdss':{
        target: 'http://139.129.12.93:8096',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/xwpdss': ''  //需要rewrite重写的,
        }
      },
      //消息服务
      '/datas':{
        target: 'http://139.129.12.93:8097/',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/datas': ''   //需要rewrite重写的,
        }
      },
      //天天盈服务
      '/xwddss':{
        target: 'http://139.129.12.93:8087/',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/xwddss': ''   //需要rewrite重写的,
        }
      },
      //优惠券服务
      '/coupons':{
        target: 'http://139.129.12.93:8099/',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/coupons': ''   //需要rewrite重写的,
        }
      },
      //新网银行注册绑卡
      '/apts':{
        target: 'http://139.129.12.93:8089/',  // 接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/apts': ''   //需要rewrite重写的,
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
