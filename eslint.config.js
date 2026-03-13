import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'quotes': ['error', 'single'],                     // одинарные кавычки
      'object-curly-spacing': ['error', 'always'],      // пробелы внутри {}
      'comma-dangle': ['error', 'always-multiline'],    // висящая запятая
      'object-curly-newline': ['error', {
        ObjectExpression: { minProperties: 4, multiline: true },
        ObjectPattern: { minProperties: 4, multiline: true },
        ImportDeclaration: { minProperties: 4, multiline: true },
        ExportDeclaration: { minProperties: 4, multiline: true },
      }],
    },
  },
])