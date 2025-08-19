// FILE: eslint.config.mjs (REPLACE ENTIRE FILE)
import nextPlugin from "eslint-config-next";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    ...nextPlugin,
    rules: {
      ...nextPlugin.rules,
      // You can add any custom rule overrides here if needed
    },
  },
];