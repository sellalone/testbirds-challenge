'use strict'

const paths = require('./paths');
const rules = require('./rules');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || '';
const PUBLIC_URL = NODE_ENV !== 'development'? '/testbirds-challenge':'';

const webpackConfig = {
  // webpack will take the files from ./src/index as entry point
  entry: paths.entryPath,
  // output will place bundle.js inside ./build
  output: {
    path: paths.outputPath,
    publicPath : '/',
    filename: 'assets/js/[name].min.js',
  },
  module: {
    rules
  },
  /* adding .ts and .tsx to resolve.extensions will help babel look for .ts and
  .tsx files to transpile*/
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        BUILD_DATE: JSON.stringify(new Date().toISOString()),
        PUBLIC_URL: JSON.stringify(PUBLIC_URL),
      },
    })
  ]
};

module.exports = webpackConfig;
