const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'mochawesome',
    baseUrl: 'https://demo.playwright.dev/todomvc',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
