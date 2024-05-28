module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ["node_modules", "dist", "build"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import"],
  rules: {
    "no-unused-vars": "off",
    indent: ["error", 4],
    "linebreak-style": [0, "unix"],
    quotes: ["error", "single"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/order": [
      2,
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
}
