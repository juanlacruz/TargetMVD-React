const path = require('path');

var config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'src', 'styles'),
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
    hot: true,
    inline: true,
    historyApiFallback: true,
  },
  externals: {
    'Config': JSON.stringify({
      serverUrl: "http://localhost:3000/api/v1/",
    }),
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};

module.exports = config;
