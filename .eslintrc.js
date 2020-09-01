module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: ['eslint:recommended'],
    plugins: ['html'],
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    rules: {
        'no-var': 'error',
        indent: ['error', 4, { SwitchCase: 1, ObjectExpression: 1, MemberExpression: 1 }],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always']
    }
};
