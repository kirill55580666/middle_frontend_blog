module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        'react/jsx-indent': ['error', 4],
        indent: [2, 4],
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': [2, {
            extensions: ['.ts', '.tsx'],
        }],
        'import/no-unresolved': [0],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [2, {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        'react/self-closing-comp': ['error', {
            component: false,
            html: false,
        }], // 'arrow-body-style': ['error', 'always'],
        // 'linebreak-style': 0,
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'max-len': 'warn',
        'no-undef': 'off',
    },
    globals: {
        __IS__DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [{
        files: [
            '**/src/**/*.{test,stories}.{ts,tsx}',
        ],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    }],
};
