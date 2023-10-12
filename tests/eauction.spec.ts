import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/EAuction/);
});


test('check lables', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Products')).toBeVisible();

  await expect(page.getByText('Product Name')).toBeVisible();

  await expect(page.getByText('Short Description')).toBeVisible();

});


