import type {} from "vite-plus/test/browser";
import { expect, test, vi } from "vite-plus/test";
import { render } from "vitest-browser-react";
import Carousel from "../../components/ui/carousel";

vi.mock("next/link", () => ({ default: "a" }));

test("le frecce navigano e sono disabilitate all'inizio e alla fine", async () => {
  const screen = await render(
    <>
      <h2 id="best-sellers">Best sellers</h2>
      <Carousel
        labelledBy="best-sellers"
        slides={[
          <div key="first" style={{ width: 600 }}>
            Primo prodotto
          </div>,
          <div key="second" style={{ width: 600 }}>
            Secondo prodotto
          </div>,
        ]}
      />
    </>,
  );

  const previous = screen.getByRole("button", { name: "Previous slide" });
  const next = screen.getByRole("button", { name: "Next slide" });

  await expect.element(previous).toBeDisabled();
  await expect.element(next).toBeEnabled();

  await next.click();
  await expect.element(next).toBeDisabled();
  await expect.element(previous).toBeEnabled();

  await previous.click();
  await expect.element(previous).toBeDisabled();
  await expect.element(next).toBeEnabled();
});

test("nasconde le frecce quando tutti i prodotti entrano nello spazio disponibile", async () => {
  const screen = await render(
    <>
      <h2 id="best-sellers">Best sellers</h2>
      <Carousel
        labelledBy="best-sellers"
        slides={[
          <div key="only" style={{ width: 200 }}>
            Unico prodotto
          </div>,
        ]}
      />
    </>,
  );

  await expect.element(screen.getByText("Unico prodotto")).toBeVisible();
  await expect
    .element(screen.getByRole("button", { name: "Previous slide" }))
    .not.toBeInTheDocument();
  await expect.element(screen.getByRole("button", { name: "Next slide" })).not.toBeInTheDocument();
});
