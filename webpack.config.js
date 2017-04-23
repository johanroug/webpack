const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const chalk = require('chalk');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');


//*************PLUGINS***************All called in bottom of file***************************************/
// List of vendor JS libraries we want in a seperate vendor.js file
const VENDOR_LIBS = [ // this takes our vendor js files that we want in a seperate file
  "jquery", // add jquery to vendor bundle
  "lodash",
  "./src/styles/slick/slick.min.js"
];

// Extract styles
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: 'styles.[contenthash].css'
});

// Clean our build folder
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanConfig = new CleanWebpackPlugin(['build/*'], {
  root: '',
  verbose: true,
  dry: false,
  exclude: ['example.js']
})

// if we e.g. import jquery in our code, and also has it in our vendor.js file, remove them from our output bundle code, and only include it in vendor.js
const optimize = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor'
});

const promisePolyfill = new webpack.ProvidePlugin({
  Promise: 'es6-promise-promise'
});

const html = new HtmlWebpackPlugin({ //Automaticly make index.html for us, and use our own index.html as a template. This means that it will only fill out what we didn't add. Fx our stylesheet and javascript files.
  template: './src/index.html'
});

const progress = new SimpleProgressPlugin(
  {
    messageTemplate: ['Thinking   :bar', chalk.bold.bgBlue.yellow(':elapsed sec'), ':msg'].join(' '),
    progressOptions: {
      complete: chalk.bgGreen(' '),
      incomplete: chalk.bgWhite(' '),
      width: 20,
      total: 100,
      clear: false
    }
  }
);


//*************WEBPACK CONFIG***************************************************************/
module.exports = {
  entry: {
    bundle: './src/index.ts', // Our whole codebase starts here. Our bundle will be called "bundle"
    vendor: VENDOR_LIBS // Our vendors, and output file will be named "vendor"
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash].js' // output bundle.js and vendor.js
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  externals: {
    // jquery: 'jQuery' // use like this if you want jquery from CDN. Add it to index.html
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
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
      },
      {
        test: /\.(png|woff|eot|ttf|svg|gif)$/,
        use: [
          {
          loader: 'url-loader',
          options: {limit: 40000}
        }]
      }
    ]
  },
  plugins: [ // Our plugin from the top, are called here
    progress,
    promisePolyfill,
    extractSass,
    cleanConfig,
    optimize,
    html
  ]
};
