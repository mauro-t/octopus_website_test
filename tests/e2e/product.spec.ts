import { expect, test } from "playwright/test";

test("dalla homepage apre la scheda del Countertop Blender", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Octopus Ionic Hair Dryer");

  const blenderCard = page
    .getByRole("article")
    .filter({
      has: page.getByRole("heading", { name: "Octopus Countertop Blender", exact: true }),
    })

    .filter({ hasNot: page.getByRole("article") });
  await blenderCard.getByRole("link", { name: "Learn more", exact: true }).click();

  await expect(page).toHaveURL("/products/countertop-blender");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Octopus Countertop Blender");
  await expect(page.getByRole("radio", { name: "Black", exact: true })).toBeVisible();
});
