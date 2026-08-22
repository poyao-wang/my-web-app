import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  { ignores: ["build/**", "public/**", "0_Inbox/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // CRA 時代即存在的 dead code(ItemAbout/ItemProject 未用 prop 等),
      // 降為警告不做化妝修——清單見 docs/todo.md
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
