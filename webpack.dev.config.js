const path = require('path');

var config = {
  entry: './src/index.js',
  output: {
    path: 'public/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      { test: /\.scss?$/,
        loader: 'style!css!sass'
      },
      { test: /\.png$/,
        loader: 'file'
      },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      },
    ],
  },
  devServer: {
    contentBase: "./public",
    hot: true
  },
  externals: {
    'Config': JSON.stringify({
      serverUrl: "http://localhost:3000/api/v1/",
    }),
  },
};

module.exports = config;
