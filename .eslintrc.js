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
    
    // Prettier plugin and recommended rules
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    
    // Include .prettierrc.js rules
    'prettier/prettier': [ 
      "error", {}, { "usePrettierrc": true }
    ],
   '@typescript-eslint/ban-ts-comment': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'jsx-a11y/anchor-is-valid': 'off'
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};