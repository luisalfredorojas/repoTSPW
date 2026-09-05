import { test, expect } from '@playwright/test';

test('el buscador fitra los productos', async ({ page }) => {
  //paso 1
  await page.goto('/');

  //paso 2 y 3
  await page.getByPlaceholder('Search').fill('hammer');
  await page.getByRole('button', { name: 'Search' }).click();

  //paso 4
  await expect(
    page
      .getByRole('link')
      .filter({ hasText: /Hammer/ })
      .first(),
  ).toBeVisible();
});
