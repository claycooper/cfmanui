const js = require('@eslint/js')
const globals = require('globals')
const pluginVue = require('eslint-plugin-vue')
const pluginCypress = require('eslint-plugin-cypress')
const skipFormatting = require('@vue/eslint-config-prettier/skip-formatting')

module.exports = [
  {
    ignores: ['cypress.config.js', 'dist/**/*', 'index.js']
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser
      }
    }
  },
  {
    files: ['eslint.config.js', 'vite.config.js', 'vitest.config.js', 'cypress.config.js'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.{vue,cjs,js,ts,jsx,tsx}'],
    rules: {
      indent: ['error', 2],
      quotes: ['error', 'single'],
      'quote-props': ['error', 'as-needed', { keywords: true }],
      semi: ['error', 'never']
    }
  },
  {
    files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
    ...pluginCypress.configs.recommended
  },
  skipFormatting
]
