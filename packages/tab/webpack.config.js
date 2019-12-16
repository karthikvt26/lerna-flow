const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');

const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  entry: './example/index.js',
  devtool: 'inline-source-map',
  plugins: [new HtmlWebpackPlugin({
    title: 'React App',
  })]
});
