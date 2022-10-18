module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'plugin:jsx-a11y/recommended',
    "plugin:prettier/recommended",
    'plugin:@next/next/recommended',
    "@next/eslint-plugin-next"
  ],
  plugins: ["prettier"],
  rules: {

    // Include .prettierrc.js rules
    "prettier/prettier": [
      0,
      {},
      {
        usePrettierrc: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};