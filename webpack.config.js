const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
        filename: 'styles.[contenthash].css'
      });

const CleanWebpackPlugin = require('clean-webpack-plugin');     
const cleanConfig = new CleanWebpackPlugin(['build'], {
      root: '',
      verbose: true,
      dry: false,
      exclude: ['example.js']
    }) 

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
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
        cleanConfig
    ]
};

module.exports = config;