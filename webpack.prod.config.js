const webpack = require('webpack');
const path = require('path');

let config = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
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
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles')
      },
      { test: /\.png$/,
        loader: 'file'
      },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      },
    ],
  },
  plugins: [ // Tells NODE we're in production and reduces size
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
  ],
  externals: {
    'Config': JSON.stringify({
      serverUrl: "http://localhost:3000/api/v1/",
    }),
  },
};

module.exports = config;
