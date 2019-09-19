// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'vue/script-indent': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    semi: 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
