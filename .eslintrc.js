// .eslintrc.js (CommonJS format)
module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:react/recommended'
    ],
    plugins: [
      'react'
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
      'react-native/react-native': true,
    },
    rules: {
      // Essential React rules
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'error',
      
      // Common JavaScript rules
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-console': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };