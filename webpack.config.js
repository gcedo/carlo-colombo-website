var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(process.cwd(), 'client-render.js'),
    vendor: ['react-photoswipe'],
  },

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
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
  ],
};
