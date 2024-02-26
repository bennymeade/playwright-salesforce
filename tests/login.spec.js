const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Launch browser with UI
  const context = await browser.newContext();
  const page = await context.newPage();

  // Salesforce login page
  await page.goto('https://unilever--cgdev.sandbox.my.salesforce.com/');

  // export login credenials in terminal
  await page.fill('[id="username"]', process.env.SFDC_USERNAME);
  await page.fill('[id="password"]', process.env.SFDC_PASSWORD);

  // login
  await page.click('[id="Login"]');

  // wait for the login process to complete
  // await page.waitForNavigation();

  // close the browser
  // await browser.close();
})();
