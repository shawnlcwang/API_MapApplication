/* eslint quote-props: ["error", "consistent"] */
/* eslint-env es6 */

module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {
        // comma dangle
        'comma-dangle': 0,
        // indent with 4 spaces
        'indent': ['error', 4],
        // comment max length
        'max-len': ['error', { 'code': 200 }],
        // no-console
        'no-console': 1
    },
};
