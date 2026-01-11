export const baseTestingConfig = {
  test: {
    globals: true,
    setupFiles: "./vitest.setup.js",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
};
