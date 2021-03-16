module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': [0],
    quotes: [2, 'single'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'class-methods-use-this': [0],
    'import/prefer-default-export': [0],
  },
};
