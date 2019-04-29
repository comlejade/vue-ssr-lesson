const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const VueServerPlugin = require('vue-server-renderer/server-plugin')

let config

config = merge(baseConfig, {
  target: 'node', // 定义打包出的js所运行的环境
  mode: 'development',
  devtool: 'source-map',
  entry: path.join(__dirname, '../client/server-entry.js'),
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  // 排除要打包的文件，直接从node_modules里面引用即可，防止引用两次
  externals: Object.keys(require('../package.json').dependencies),
  // resolve: {
  //   alias: {
  //     'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueServerPlugin(),
    new VueLoaderPlugin()
  ]
})

module.exports = config
