const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production', // development or pruduction
    devtool: 'cheap-module-source',
    module: {
        rules: [
            {
                test: /\.(s)?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all', // 'async'仅对异步加载的模块有效  'all'所有的import都进行code splitting
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 匹配node_modules目录下的文件
                    priority: -10, // 优先级配置项
                    reuseExistingChunk: true
                },
                default: {
                    minChunks: 2,
                    priority: -20, // 优先级配置项
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [new MiniCssExtractPlugin()]
});
