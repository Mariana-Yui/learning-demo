module.exports = {
    // 你可以指定下面提到的所有选项 http://api.postcss.org/global.html#processOptions
    // parser: 'sugarss',
    plugins: [
        // PostCSS 插件
        ['postcss-short', { prefix: 'x' }],
        'postcss-preset-env'
    ]
};
