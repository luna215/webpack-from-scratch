const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'output.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,            // files ending with .js
                exclude: /node_modules/,  // exclude the node_modules directory
                loader: 'babel-loader'   // user this (babel-core) loader
            },
            {
                test: /\.scss$/,        // files ending with .scss
                use: ExtractTextWebpackPlugin.extract({
                    use: ['css-loader', 'sass-loader'],     // call our plugin method with extract method
                    fallback: 'style-loader'                // fallback for any css not extracted
                })
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css')           // call the ExtractTextWebpackPlugin constructor and name of css file
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        historyApiFallback: true,
        inline: true,
        open: true
    },
    devtool: 'eval-source-map'
}

module.exports = config;