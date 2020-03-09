const paths = require('./paths');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',

  output: {
    publicPath: "/testbirds-challenge/",
  },

  devtool: 'source-map',

  plugins: [
    new MiniCssExtractPlugin({ filename: 'assets/css/[name].min.css' }),
    new HtmlWebpackPlugin({      
      template: paths.templatePath,
      filename: './index.html',
    }),
    new CleanWebpackPlugin(),
  ]
})