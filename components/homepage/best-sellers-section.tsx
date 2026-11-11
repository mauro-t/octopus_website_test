import type { BestSellersSection } from "@/data/types";
import Carousel from "../ui/carousel";
import BestsellerCard from "../ui/bestseller-card";

type Props = {
  section: BestSellersSection;
};

export default function BestSellersSection({ section }: Props) {
  return (
    <article className="tablet:pb-80 pt-80 pb-40">
      <h2 className="tablet:mb-40 desktop:text-3xl tablet:text-2xl mb-32 text-xl font-bold">
        Best sellers
      </h2>
      <Carousel
        slides={section.products.map((product) => (
          <BestsellerCard key={product.id} product={product} />
        ))}
      />
    </article>
  );
}
