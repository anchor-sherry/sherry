module.exports = {
  extends: [
    "stylelint-config-prettier",
    "stylelint-config-recommended-less",
    "stylelint-config-rational-order",
  ],
  plugins: ["stylelint-order", "stylelint-declaration-block-no-ignored-properties"],
  overrides: [
    {
      files: ["*.less", "**/*.less"],
      customSyntax: "postcss-less",
    },
  ],
  rules: {
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-block-trailing-semicolon": null,
    "rule-empty-line-before": ["always", { ignore: ["after-comment", "first-nested"] }],
    "plugin/declaration-block-no-ignored-properties": true,
  },
};
