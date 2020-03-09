const merge = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common');
const { HotModuleReplacementPlugin } = require('webpack');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => merge(common, {
  mode: 'development',
  devtool: 'inline-eval',
  context: __dirname,
  
  plugins: [
    new HardSourceWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({    
      template: paths.templatePath,
      filename: './index.html',
    })
  ],

  devServer: {
    hot:true,
    noInfo: false,
    compress: true,
    historyApiFallback: true,
    port: process.env.PORT || 3001,
    stats: {
      'errors-only': true,
      children: false,
      chunks: false,
      warnings: false,
    },
  }
})