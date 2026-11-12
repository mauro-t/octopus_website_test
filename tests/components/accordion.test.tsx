import type {} from "vite-plus/test/browser";
import { expect, test } from "vite-plus/test";
import { userEvent } from "vite-plus/test/browser";
import { render } from "vitest-browser-react";
import SpecsAccordions from "../../components/product/specs-accordions";

const specs = [{ title: "Technical specifications", items: ["Power: 1000 W"] }];

test("mostra e nasconde le specifiche al click", async () => {
  const screen = await render(<SpecsAccordions specs={specs} />);
  const trigger = screen.getByRole("button", { name: "Technical specifications" });
  const content = screen.getByText("Power: 1000 W");

  await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  await expect.element(content).not.toBeInTheDocument();

  await trigger.click();
  await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
  await expect.element(content).toBeVisible();

  await trigger.click();
  await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  await expect.element(content).not.toBeInTheDocument();
});

test("permette di aprire e chiudere le specifiche da tastiera", async () => {
  const screen = await render(<SpecsAccordions specs={specs} />);
  const trigger = screen.getByRole("button", { name: "Technical specifications" });

  await userEvent.tab();
  await expect.element(trigger).toHaveFocus();

  await userEvent.keyboard("{Enter}");
  await expect.element(screen.getByText("Power: 1000 W")).toBeVisible();

  await userEvent.keyboard(" ");
  await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  await expect.element(screen.getByText("Power: 1000 W")).not.toBeInTheDocument();
});
