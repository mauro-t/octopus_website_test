import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import type { ProductPreview } from "@/data/types";

type Props = {
  product: ProductPreview;
  variant?: "sm" | "lg";
};

export default function BestsellerCard({ product, variant = "lg" }: Props) {
  return variant == "lg" ? (
    <article className="desktop:w-[1048px] tablet:w-[688px] bg-primary rounded-card tablet:grid-cols-2 grid min-h-full w-xs grid-cols-1 items-center gap-32 overflow-hidden">
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
        draggable={false}
      />
    </article>
  ) : (
    <article className="tablet:w-[265px] group w-[180px]">
      <Link
        aria-label={product.name}
        href={`/products/${product.slug}`}
        className="focus-ring block w-full"
        draggable={false}
      >
        <div className="tablet:rounded-card aspect-3/4 w-full overflow-hidden rounded-2xl">
          <Image
            loading="lazy"
            decoding="async"
            width={product.image.width}
            height={product.image.height}
            className="h-full w-full object-cover transition-transform duration-350 group-hover:scale-110"
            src={product.image.src}
            alt={product.image.alt}
            sizes="(min-width: 810px) 33vw, 100vw"
            draggable={false}
          />
        </div>
        <h3 className="tablet:text-lg mt-32 font-bold">{product.name}</h3>
        <p className="text-secondary mt-8">{product.shortDescription}</p>
      </Link>
    </article>
  );
}
