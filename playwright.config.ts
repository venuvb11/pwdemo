import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in parallel */
  fullyParallel: true,

  /* Fail build on CI if test.only exists */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Use single worker on CI */
  workers: process.env.CI ? 1 : undefined,

  /* HTML Reporter */
  reporter: [
    ['html', { open: 'always' }]
  ],

  /* Shared settings */
  use: {
    /* Collect trace on first retry */
    trace: 'on-first-retry',
  },

  /* Browser configuration */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    */
  ],
});