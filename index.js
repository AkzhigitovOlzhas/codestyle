const prettierConfig = require('./prettierrc');

module.exports = {
    env: {
        browser: true,
        node: true,
        'jest/globals': true,
    },
    globals: {
        CONFIG_APP: 'readonly',
    },
    extends: [
        'airbnb-base',
        'airbnb/rules/react',
        'react-app',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:sonarjs/recommended',
        'plugin:import/typescript',
        'plugin:jest/recommended',
    ],
    ignorePatterns: [
        '/bin',
        'paths.js',
        '__mocks__',
        'mock.ts',
        '.eslintcache',
    ],
    plugins: [
        'import',
        'react',
        'sonarjs',
        'prettier',
        'no-unused-react-component-methods',
        '@typescript-eslint',
        'jest',
        'disable',
    ],
    processor: 'disable/disable',
    rules: {
        'sonarjs/no-nested-template-literals': 0,
        'sonarjs/cognitive-complexity': ['error', 30],
        'import/extensions': 0,
        'import/no-cycle': 2,
        'react/no-array-index-key': 0,
        'react/no-did-update-set-state': [0],
        'consistent-return': 0,
        'no-unused-react-component-methods/no-unused-react-component-methods': 2,
        'import/no-unused-modules': [2, { unusedExports: true }],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
        'no-plusplus': 0,
        'linebreak-style': ['error', 'unix'],
        semi: ['error', 'always'],
        'import/prefer-default-export': 0,
        'react/state-in-constructor': 0,
        'react/static-property-placement': 0,
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
        'react/prop-types': 0,
        'react/jsx-fragments': [0],
        'react/no-danger': 0,
        camelcase: 0,
        '@typescript-eslint/camelcase': 0,
        'react/jsx-filename-extension': 'off',
        '@typescript-eslint/explicit-function-return-type': [0],
        // Rules conflicts, @see: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
                typedefs: true,
            },
        ],
        'prettier/prettier': ['error', prettierConfig],
        'react/destructuring-assignment': 0,
        'react/sort-comp': [
            1,
            {
                order: [
                    'state',
                    'constructor',
                    'static-variables',
                    'static-methods',
                    'lifecycle',
                    ',/^on.+$/',
                    'everything-else',
                    'render',
                ],
            },
        ],
        'jest/prefer-expect-assertions': 0,
        'jest/no-disabled-tests': 0,
        'react/react-in-jsx-scope': 0,
        'react-hooks/exhaustive-deps': 0,
        curly: ['error', 'all'],
        'arrow-body-style': 0,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-restricted-imports': [
            'error',
            {
                paths: ['..'],
            },
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
        'no-restricted-syntax': [
            'warn',
            {
                selector: 'ExportDefaultDeclaration',
                message: 'Prefer named exports',
            },
        ],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
            },
        },
        {
            files: ['*.ts', '*.tsx', '*.js'],
            settings: {
                'disable/plugins': ['jsx-a11y'],
            },
        },
        {
            files: [
                '*.stories.ts',
                '*.stories.tsx',
                '*.stories.js',
                '*.stories.jsx',
            ],
            rules: {
                'import/no-unused-modules': [0, { unusedExports: false }],
                'import/no-unresolved': 0,
                'import/no-anonymous-default-export': 0,
            },
        },
    ],
};
