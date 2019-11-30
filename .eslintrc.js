module.exports = {
  env: {
    browser: true,
  },
  /**
   * Needs prettier/react because @paulrberg/eslint-config depends on prettier and this package uses react
   * https://github.com/prettier/eslint-config-prettier
   */
  extends: ["airbnb", "airbnb/hooks", "@paulrberg/eslint-config", "prettier/react"],
};
