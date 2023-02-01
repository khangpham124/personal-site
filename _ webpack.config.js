const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './public/theme/js/index.js'
  ],
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'dist/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};