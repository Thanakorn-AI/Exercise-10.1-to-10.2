// eslint.config.js
const reactPlugin = require('eslint-plugin-react');
const reactNativePlugin = require('eslint-plugin-react-native');

module.exports = [
  {
    // Define globals instead of using "env"
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: true,
        document: true,
        navigator: true,
        // Node.js globals
        process: true,
        // React Native globals
        __DEV__: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    // Configure plugins
    plugins: {
      react: reactPlugin,
      'react-native': reactNativePlugin
    },
    // Define rules
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
    // Define which files this config applies to
    files: ['**/*.js', '**/*.jsx']
  }
];