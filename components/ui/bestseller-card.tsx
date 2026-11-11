import Image from "next/image";
import type { ProductPreview } from "@/data/types";
import Button from "./button";

type Props = {
  product: ProductPreview;
};

export default function BestsellerCard({ product }: Props) {
  return (
    <article className="desktop:w-[1048px] tablet:w-[688px] bg-primary rounded-card tablet:grid-cols-2 grid w-xs grid-cols-1 items-center gap-32 overflow-hidden">
      <div className="desktop:pl-80 tablet:pl-60 not-tablet:pr-24 not-tablet:pt-32 not-tablet:text-center pl-24">
        <p className="text-md text-accent">{product.category.label}</p>
        <h3 className="tablet:text-2xl desktop:text-3xl leading-1.1 mt-16 text-xl font-bold">
          {product.name}
        </h3>
        <p className="tablet:text-lg desktop:text-xl text-secondary tablet:mt-16 mt-8 leading-1">
          {product.shortDescription}
        </p>
        <Button as="link" href={`/products/${product.slug}`} className="tablet:mt-32 mt-24">
          Learn more
        </Button>
      </div>
      <Image
        loading="lazy"
        decoding="async"
        width={product.image.width}
        height={product.image.height}
        className="tablet:aspect-5/6 aspect-square h-full min-h-0 w-full object-cover"
        src={product.image.src}
        alt={product.image.alt}
        sizes="(min-width: 810px) 33vw, 100vw"
      />
    </article>
  );
}
