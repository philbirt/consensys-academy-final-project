const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    main: './index.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name]-[hash].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules'),
        options: {
            presets: ['env', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|ttf|svg|woff2?)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpg|jpeg|png)(\?.*)?$/, // Load only .jpg .jpeg, and .png files
        use: {
          loader: 'file-loader',
          options: {
            name: '[name][md5:hash].[ext]', // Name of bundled asset
            outputPath: 'assets/', // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
            publicPath: '/assets/', // Endpoint asset can be found at on Rails server
          },
        },
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '/'),
    ],
    extensions: ['.js', '.jsx'],
  },

  context: __dirname,

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      filename: 'common-[hash].js',
      name: 'common',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['common', 'main'],
      inject: 'head',
    }),
    new Dotenv(),
  ],
};
