import { useId } from "react";
import Carousel from "../ui/carousel";
import BestsellerCard from "../ui/best-seller-card";
import type { BestSellersSection } from "@/data/types";

type Props = {
  section: BestSellersSection;
};

export default function BestSellersSection({ section }: Props) {
  const headingId = useId();

  return (
    <article className="tablet:pb-80 pt-80 pb-40">
      <h2
        id={headingId}
        className="tablet:mb-40 desktop:text-3xl tablet:text-2xl leading-1.1 mb-32 text-xl font-bold"
      >
        Best sellers
      </h2>
      <Carousel
        labelledBy={headingId}
        slides={section.products.map((product) => (
          <BestsellerCard key={product.id} product={product} />
        ))}
      />
    </article>
  );
}
