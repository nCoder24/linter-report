module.exports = {
  env: {
    "es2021": true,
  },

  rules: {
    "semi": ["error", "always", { "omitLastInOneLineBlock": true }],
    "indent": ["error", 2, { "SwitchCase": 1 }],

    "complexity": ["error", 2],
    "array-callback-return": ["error", { checkForEach: true }],
    "max-depth": ["error", 2],
    "max-statements": ["error", 10],
    
    "no-cond-assign": "error",
    "no-empty": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-param-reassign": "error",
    "no-shadow": "error",
  }
};