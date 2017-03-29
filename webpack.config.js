const webpack = require('webpack');
const path = require('path');

//*************PLUGINS***************All called in bottom of file***************************************/
// List of vendor JS libraries we want in a seperate vendor.js file
const VENDOR_LIBS = [ // this takes our vendor js files that we want in a seperate file
  "jquery",
  "lodash"
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


//*************WEBPACK CONFIG***************************************************************/
const config = {
  entry: {
    bundle: './src/index.ts', // Our whole codebase starts here. Our bundle will be called "bundle"
    vendor: VENDOR_LIBS // Our vendors, and output file will be named "vendor"
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js' // output bundle.js and vendor.js
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
  plugins: [ // Our plugin from the top, are called here
    extractSass,
    cleanConfig,
    optimize
  ]
};

module.exports = config;
