const path = require('path');
const webpack = require('webpack');
const cssnano = require('cssnano');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const bootstrapEntryPoints = require('./webpack.bootstrap.config');

module.exports = {
  entry: {
    bundle: [
      bootstrapEntryPoints.prod,
      path.join(__dirname, './src/root.tsx')
    ]
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: "bundle.min.js",
    publicPath: "/"
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          "awesome-typescript-loader"
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          // use style-loader in development
          fallback: "style-loader",
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]!sass-loader'
        })
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: {removeAll: true } },
    }),
    new HtmlWebpackPlugin({
      title: 'Title',
      template: path.join(__dirname, './public/index.html')
    })
  ]
};
