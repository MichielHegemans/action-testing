module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    root: true,
    env: {
        node: true,
    },
    ignorePatterns: ['.eslintrc.js', 'node_modules/'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
    },
};
