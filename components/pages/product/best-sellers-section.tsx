import { useId } from "react";
import Carousel from "../../ui/carousel";
import BestSellerCard from "../../ui/best-seller-card";
import Reveal from "../../animations/reveal";
import type { ProductPreview } from "@/data/types";

type Props = {
  products: ProductPreview[];
};

export default function BestSellersSection({ products }: Props) {
  const headingId = useId();

  return (
    <article className="tablet:pt-80 pt-40">
      <Reveal variant="md">
        <h2
          id={headingId}
          className="tablet:mb-40 desktop:text-3xl tablet:text-2xl leading-1.1 mb-32 text-xl font-bold"
        >
          Best sellers
        </h2>
      </Reveal>
      <Reveal>
        <Carousel
          labelledBy={headingId}
          slides={products.map((product) => (
            <BestSellerCard key={product.id} product={product} variant="sm" />
          ))}
        />
      </Reveal>
    </article>
  );
}
