const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
    entry: {
        main: './webpack/src/js/index.js',
        main_2: './webpack/src/js/index_2.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].chunk.js',
        // publicPath: '/outdist',
        path: path.resolve(__dirname, '../webpack/dist')
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash].[ext]',
                            outputPath: 'image'
                        }
                    }
                ]
            },
            {
                test: /\.(s)?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './webpack/src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};

module.exports = (env) => {
    if (env && env.production) {
        return merge(commonConfig, prodConfig);
    } else {
        return merge(commonConfig, devConfig);
    }
};
