module.exports = merge(common, {
    mode: 'development', // development or pruduction
    devServer: {
        // contentBase: './app/outdist',
        hot: true,
        open: true
        // publicPath: '/app'
    },
    devtool: 'eval-cheap-module-source-map',
    optimization: {
        usedExports: true
    }
});
