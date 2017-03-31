var path = require('path');
var webpack = require('webpack')
module.exports = {
  entry: './client.js',

  output: {
    filename: 'bundle.js',
    path: path.join('public/')
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader:'style!css!'
      }
    ]
  }
};