module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      legacyDecorators: true,
    },
  },
  ecmaFeatures: {
    modules: true,
  },
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  globals: {
    window: true,
    module: true,
  },
  rules: {
    'require-jsdoc': 0,
  },
};
