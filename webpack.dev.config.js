var path = require('path');
var Webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.join(process.cwd(), 'client-render.js'),
  ],
  output: {
    path: './public/',
    filename: 'build.js',
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ },
    ],

    loaders: [
      {
        test: /.js$/,
        loader: 'babel',
      },
    ],
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
