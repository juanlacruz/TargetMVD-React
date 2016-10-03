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
  externals: {
    'Config': JSON.stringify(process.env.ENV === 'production' ? {
      serverUrl: "https://myserver.com/api/v1"
    } : {
      serverUrl: "http://localhost:3000/api/v1/"
    })
  },
};

module.exports = config;
