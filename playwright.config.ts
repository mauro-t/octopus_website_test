import { defineConfig } from "playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  use: {
    browserName: "chromium",
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
  },
  webServer: {
    command: "vp run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
