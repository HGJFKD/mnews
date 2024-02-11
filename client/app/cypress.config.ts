import { defineConfig } from "cypress";


export default defineConfig({
  pageLoadTimeout: 100000,
  e2e: {
    baseUrl: 'http://localhost:8200/',
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },
});
