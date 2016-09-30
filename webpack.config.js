var config = {
  entry: './src/index.jsx',
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
          presets: ['es2015', 'react', 'stage-2']
        },
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ],
  },
  devServer: {
    contentBase: "./public",
    hot: true
  },
};

module.exports = config;
