import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  pluginJs.configs.all,
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      sourceType: "module",
    },
    plugins: {
      prettier,
    },
    rules: {
      "class-methods-use-this": [
        "error",
        {
          exceptMethods: ["render"], // Lit element may have render methods without reactive properties
        },
      ],
      "func-names": ["error", "as-needed"], // otherwise it conflicts with func-style: expression
      "no-console": "warn",
      "sort-keys": "off",
      "sort-imports": "off",
      "one-var": "off",
      "no-ternary": "off",
      "capitalized-comments": "off",
    },
  },
];
