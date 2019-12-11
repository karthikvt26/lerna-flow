const path = require('path');

module.exports = {
  entry: './bundler.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
