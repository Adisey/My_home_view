module.exports = {
  plugins: ['stylelint-prettier', 'stylelint-order'],
  extends: ['stylelint-prettier/recommended', 'stylelint-config-idiomatic-order'],
  rules: {
    'prettier/prettier': true,
    'color-no-invalid-hex': true,
    'order/order': ['custom-properties', 'dollar-variables', 'declarations', 'rules', 'at-rules'],
  },
};
