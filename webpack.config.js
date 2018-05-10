const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/client/src/app.js');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: ['babel-polyfill', SRC_DIR],
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', 'png'],
  },
  devServer: {
    contentBase: './dist',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/src/index.html',
      filename: './index.html',
    }),
  ],
};
