/**
 * Created by tdzl2003 on 2017/3/14.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env['WEBPACK_ENV'];
const __DEV__ = ENV === 'development';

const path = require('path');

module.exports = {
  entry: {
    index: './src',
  },
  output: {
    path: path.resolve(__dirname, `../build/${__DEV__ ? 'debug' : 'release'}/web`), // string
    filename: __DEV__ ? '[name].bundle.js' : '[name].[hash].js', // string
    publicPath: '/', // string
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './src'),
        ],
        loader: 'babel-loader',
        query: {
          presets: [
            'react-native',
          ],
          plugins: [
            'transform-decorators-legacy',
          ],
        },
      },
      {
        test: /.shader$/,
        loader: 'raw-loader',
      },
      {
        test: /\.png|\.jpg/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "./src/libs"),
    ],
    extensions: [".web.js", ".js", ".json", ".jsx", ".css"],
    alias: {},
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(__DEV__),
      __CLIENT__: "true",
      __SERVER__: "false",
    }),
    new HtmlWebpackPlugin({
      title: 'Hello, React',
      template: './index.html.ejs',
    })
  ],
  performance: {
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: 'source-map', // enum
  context: __dirname,
  target: 'web',
  stats: {
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
  },

  devServer: {
    port: 8082,
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    filename: "[name].bundle.js",
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    publicPath: "/",
    stats: { colors: true },
  },
};
