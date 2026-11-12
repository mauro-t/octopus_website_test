import { Suspense } from "react";
import Image from "next/image";
import ColourSelector from "./colour-selector";
import type { Product } from "@/data/types";

type Props = {
  product: Product;
};

export default function Hero({ product }: Props) {
  return (
    <>
      <Image
        loading="eager"
        decoding="async"
        preload
        width={product.image.width}
        height={product.image.height}
        className="h-svh object-cover"
        src={product.image.src}
        alt={product.image.alt}
        sizes="(min-width: 810px) 33vw, 100vw"
        draggable={false}
      />
      <div className="tablet:sticky tablet:top-1/2 tablet:-translate-y-1/2 not-tablet:px-page-gutter not-tablet:mt-40">
        <div className="max-w-[400px]">
          <h1 className="leading-1.1 tablet:text-4xl desktop:text-5xl text-3xl font-bold">
            {product.name}
          </h1>
          <p className="desktop:mt-32 mt-24">{product.description}</p>
          {product.colours && (
            <div className="mt-24">
              <Suspense>
                <ColourSelector colours={product.colours} />
              </Suspense>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
