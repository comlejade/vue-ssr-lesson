const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

let config

const defaultPlugins = [
  new CleanWebpackPlugin(),
  new htmlWebpackPlugin({
    template: path.join(__dirname, '../practice/template.html'),
    filename: 'index.html'
  }),
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  })
]

const devServer = {
  contentBase: 'client',
  hot: true,
  port: 8080,
  host: '0.0.0.0',
  overlay: {
    errors: true
  }
}

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer,
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              // modules: true,
              localIdentName: '[local]_[hash:base64:8]',
              camelCase: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
})

module.exports = config
