const webpack = require('webpack');
const path = require('path');

const VENDOR_LIBS = [
  "jquery","lodash" // this takes our vendor js files that we want in a seperate file
];

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: 'styles.[contenthash].css'
});

const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanConfig = new CleanWebpackPlugin(['build/*'], {
  root: '',
  verbose: true,
  dry: false,
  exclude: ['example.js']
})

const optimize = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor' // if we fx import jquery in our code, and also has then in our vendor.js file, remove them from our output code
});

const config = {
  entry: {
    bundle: './src/index.ts', // output bundle.js
    vendor: VENDOR_LIBS // output vendor.js
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader", options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader", options: {
              sourceMap: true
            }
          }]
        })
      }
    ]
  },
  plugins: [
    extractSass,
    cleanConfig,
    optimize
  ]
};

module.exports = config;
