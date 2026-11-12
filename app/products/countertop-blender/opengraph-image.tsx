import { ImageResponse } from "next/og";
import { productPage } from "@/data/product-page";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // oxlint-disable-next-line next/no-img-element
  return new ImageResponse(<img alt="" src={productPage.product.image.src} />);
}
