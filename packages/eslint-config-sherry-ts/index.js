module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended", "@vue/prettier"],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["dist", "node_modules", "packages/**/*.js", "*.d.ts", ".vscode"],
  rules: {
    "spaced-comment": ["warn"],
    "comma-style": ["error", "last"],
    "no-console": "warn",
    "no-debugger": "warn",
    "no-undef": "off",
  },
  globals: {
    defineProps: "readonly",
    defineExpose: "readonly",
    defineEmits: "readonly",
    withDefaults: "readonly",
  },
};
