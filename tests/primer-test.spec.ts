import { test, expect } from '@playwright/test';

test('la pagina principal carga y se muestra el catalogo', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Practice Software Testing/);

  await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
});

test('el buscador fitra los productos', async ({ page }) => {
  //paso 1
  await page.goto('/');

  //paso 2 y 3
  await page.getByPlaceholder('Search').fill('hammer');
  await page.getByRole('button', { name: 'Buscar' }).click();

  //paso 4
  await expect(
    page
      .getByRole('link')
      .filter({ hasText: /Hammer/ })
      .first(),
  ).toBeVisible();
});
