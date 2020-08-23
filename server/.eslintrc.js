module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017
    },
    extends: [ 'airbnb-base', 'prettier', 'plugin:node/recommended' ],
    plugins: [ 'prettier' ],
    rules: {
        'prettier/prettier': 'off', // off, error
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'func-names': 'off',
        'no-process-exit': 'off',
        'object-shorthand': 'off',
        'class-methods-use-this': 'off',
        'import/no-dynamic-require': 'off', // sometimes dynamic require is needed in a function
        'global-require': 'off' // sometimes dynamic require is needed in a function
    }
};