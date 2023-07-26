import { test, expect } from '@playwright/test';

test('ProductListAndDetails', async ({ page }) => {
//   await page.goto('http://localhost:3000/');
  await page.goto('https://catalog-mfe-demo-dev.netlify.app');

  await page.locator('li.product_card').first().waitFor()
  expect(await page.locator('li.product_card').count()).toBe(20);

  await page.click('#go-to-product-details-2')

  await expect(page.locator('text=Mens Casual Premium Slim Fit T-Shirts')).toBeVisible();
  await expect(page.locator('text=Ratings and Reviews')).toBeVisible();
});