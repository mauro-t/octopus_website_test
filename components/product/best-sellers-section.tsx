import Carousel from "../ui/carousel";
import BestSellerCard from "../ui/best-seller-card";
import { ProductPreview } from "@/data/types";

type Props = {
  products: ProductPreview[];
};

export default function BestSellersSection({ products }: Props) {
  return (
    <article className="tablet:pt-80 pt-40">
      <h2 className="tablet:mb-40 desktop:text-3xl tablet:text-2xl mb-32 text-xl font-bold">
        Best sellers
      </h2>
      <Carousel
        slides={products.map((product) => (
          <BestSellerCard key={product.id} product={product} variant="sm" />
        ))}
      />
    </article>
  );
}
