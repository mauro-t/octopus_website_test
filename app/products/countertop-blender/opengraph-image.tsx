import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { productPage } from "@/data/product-page";

export const alt = productPage.product.image.alt;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const imageData = await readFile(
  join(process.cwd(), "assets/images/products/countertop-blender.png"),
  "base64",
);

export default async function Image() {
  return new ImageResponse(
    // oxlint-disable-next-line next/no-img-element
    <img
      alt={alt}
      src={`data:image/png;base64,${imageData}`}
      width={size.width}
      height={size.height}
      style={{ objectFit: "contain", backgroundColor: "#fafafa" }}
    />,
    size,
  );
}
