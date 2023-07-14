module.exports = {
  env: {
    "es2021": true,
  },

  rules: {
    "semi": ["error", "always", { "omitLastInOneLineBlock": true }],
    "quotes": ["error", "double"],
    "indent": ["error", 2],

    "complexity": ["error", 2],
    "array-callback-return": ["error", { checkForEach: true }],
    "no-cond-assign": "error",
    "max-depth": ["error", 2],
    "max-statements": ["error", 10],
    
    "no-empty": "warn",
    "no-console": "warn",
    "no-implicit-coercion": "warn",
    "no-implicit-globals": "error",
    "no-param-reassign": "error",
    "no-shadow": "error",

  }
};