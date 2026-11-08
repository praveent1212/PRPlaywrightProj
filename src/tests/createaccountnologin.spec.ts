import { test } from '@playwright/test';

test('Salesforce Home', async ({ page }) => {

    await page.goto(
      'https://orgfarm-465de1ccfa-dev-ed.develop.my.salesforce.com'
    );

    await page.waitForTimeout(5000);

});