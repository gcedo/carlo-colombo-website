var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.join(process.cwd(), 'client-render.js'),

  output: {
    path: './public/',
    filename: 'build.js',
  },

  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],
};
