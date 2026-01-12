import react from "@vitejs/plugin-react-swc";
import { defineConfig, mergeConfig } from "vitest/config";
import { baseTestingConfig } from "@repo/testing-config";
export default defineConfig(
  mergeConfig(baseTestingConfig, {
    plugins: [react()],
    test: {
      environment: "jsdom",
    },
  })
);
