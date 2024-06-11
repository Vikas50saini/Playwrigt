import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests', // Set the root directory for the tests
  testMatch: ["tests/*.test.ts","featureTests/*.test.ts"], // Simplified pattern to match all .test.ts files
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */

  retries: 1,

  workers: 10,
  // workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['dot'], ['json', { outputFolder: "jsonReports/report.json" }], ['html', { outputFolder: "htmlReports/report.html", open: 'always' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 10000,
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io",
    headless: false,
    // deviceScaleFactor:2,
    screenshot: 'on',
    video: 'retain-on-failure',
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    launchOptions: {
      // slowMo: 1000
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
      viewport: { width: 1920, height: 1080 },
      },
      
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] ,
    //   viewport: { width: 1920, height: 1080 },
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] ,
    //   viewport: { width: 1920, height: 1080 },
    //   },
    // },
    // {
    //   name: 'ipad',
    //   use: { ...devices['iPad Pro 11'],
    //   viewport: {width: 834, height: 1194}
    //    },
    // }
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
