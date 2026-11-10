import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Checkout de un producto', async ({ page }) => {
  const buscador = page.getByPlaceholder('Search');
  const buscadorButton = page.getByRole('button', { name: 'Search' });
  const addToCartButton = page.getByRole('button', { name: 'Add to cart ' });
  const labelCart = page.getByTestId('cart-quantity');
  const proceedCheckOutButton = page.getByTestId('proceed-1');

  await buscador.fill('Hammer');
  await buscadorButton.click();
  await page.getByTestId('product-name').first().click();
  await expect(addToCartButton).toBeVisible();
  await addToCartButton.click();

  await expect(labelCart).toBeVisible();
  await labelCart.click();
  await expect(proceedCheckOutButton).toBeVisible();
  await proceedCheckOutButton.click();
});
