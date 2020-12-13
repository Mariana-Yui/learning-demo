const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', // development or pruduction
    devServer: {
        contentBase: path.resolve(__dirname, './webpack/dist'),
        hot: true,
        // hotOnly: true,
        open: true
    },
    // devtool: 'source-map',
    entry: {
        main: './webpack/src/js/index.js',
        main_2: './webpack/src/js/index_2.js'
    },
    output: {
        // filename: 'bundle.js',
        path: path.resolve(__dirname, './webpack/dist')
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
                            outputPath: 'image/'
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
    optimization: {
        usedExports: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './webpack/src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};
