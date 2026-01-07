// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * import.meta.dirname 互換（Node 16 対応）
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  /**
   * eslint 自身の設定ファイルは lint 対象外にする
   */
  {
    ignores: ["eslint.config.js"],
  },

  /**
   * @cybozu/eslint-config（旧 extends）
   */
  ...compat.extends("@cybozu/eslint-config/presets/node-prettier"),

  /**
   * 通常の Node (CommonJS) コード
   */
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
  },

  /**
   * test ファイル（mocha + CommonJS）
   */
  {
    files: ["test/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.mocha,
      },
    },
  },
];