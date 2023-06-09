module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
  ignorePatterns: [
    'src/**/*.test.ts',
    'src/**/*.d.ts',
  ]
}
