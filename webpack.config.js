const path = require('path');

module.exports = {
    mode: 'development',  // development or pruduction
    entry: './webpack/src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './webpack/dist')
    },
    module: {
        rules: [{
            test: /\.(jpg|png|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'image/'
                }
            }]
        }]
    }
};
