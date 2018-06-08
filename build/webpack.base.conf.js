var path = require('path')
var utils = require('./utils')
var webpack = require("webpack");
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

// const vuxLoader = require('vux-loader') // 原来的 module.exports 代码赋值给变量 webpackConfig
// const webpackConfig = originalConfig

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

// module.exports = vuxLoader.merge(webpackConfig, { plugins: ['vux-ui'] })

module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    }),

    // SSR
    // new PrerenderSPAPlugin({
    //   // Required - The path to the webpack-outputted app to prerender.
    //   staticDir: path.join(__dirname, '../dist'),
    //   // Required - Routes to render.
    //   routes: [ '/news'],
    // })

  ],
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
