const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, './src/main.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      
      {
        test: /\.(png|jpg|jpeg|bmp|svg|gif)$/,
        use: 'url-loader?name=[name]-[hash].[ext]&limit=2048'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    })
  ]
}

if (isDev) {
  config.mode = 'development'
  config.devtool = 'cheap-module-eval-source-map'
  config.devServer = {
    contentBase: 'src',
    hot: true,
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true
    }
  }

  config.plugins.push(new webpack.HotModuleReplacementPlugin())
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
  })
} else {
  config.mode = 'production'
  config.entry = {
    app: path.join(__dirname, 'src/main.js'),
    // vendor: ['vue', 'vue-router', 'vuex']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {

        }
      }, 
      'css-loader', 
      'postcss-loader', 
      'sass-loader'
    ]
  })
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'styles.[contentHash:8].css',
      // chunkFilename: '[id].css'
    })
  )
  config.optimization = {
    splitChunks:{
      chunks: 'all'
    }
  }
}

module.exports = config