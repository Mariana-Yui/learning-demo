const path = require('path');

module.exports = {
    mode: 'development', // development or pruduction
    entry: './webpack/src/js/index.js',
    output: {
        filename: 'bundle.js',
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
            }
        ]
    }
};
