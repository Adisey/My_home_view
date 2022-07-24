module.exports = {
  extends: ['stylelint-prettier/recommended', 'stylelint-config-idiomatic-order', 'stylelint-config-standard', 'stylelint-order-config-standard'],
  plugins: ['stylelint-prettier', 'stylelint-order'],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
    'color-no-invalid-hex': true,
    'color-hex-case': 'upper',
    'at-rule-no-unknown': null,
    'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules']
  },
};

