import Image from "next/image";
import { productPage } from "@/data/product-page";
import ProductHero from "@/components/product/hero";
import FeaturesGrid from "@/components/product/features-grid";
import SpecsAccordions from "@/components/product/specs-accordions";
import BestSellersSection from "@/components/product/best-sellers-section";

const { product, sections, bestSellers } = productPage;

export default function Product() {
  return (
    <>
      <div className="tablet:pb-80 pb-40">
        <div className="full-bleed tablet:grid-cols-2 grid grid-cols-1 items-start gap-x-80">
          <ProductHero product={product} />
          <article className="pl-page-gutter not-tablet:pr-page-gutter tablet:pb-120 pb-40">
            <section>
              {sections.map((section) => {
                switch (section.type) {
                  case "image":
                    return (
                      <Image
                        key={section.id}
                        loading="lazy"
                        decoding="async"
                        width={section.image.width}
                        height={section.image.height}
                        className="rounded-card tablet:my-80 my-40 aspect-2/3 object-cover"
                        src={section.image.src}
                        alt={section.image.alt}
                        sizes="(min-width: 810px) 50vw, 100vw"
                        draggable={false}
                      />
                    );
                  case "features":
                    return <FeaturesGrid key={section.id} features={section.features} />;
                }
              })}
            </section>
            <section className="space-y-16">
              <SpecsAccordions specs={product.specs} />
              <div className="rounded-card bg-primary desktop:px-[20px] flex w-full justify-between p-16">
                <strong>Downloads</strong>
                <a
                  href={product.manualUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring"
                >
                  User manual
                </a>
              </div>
            </section>
          </article>
        </div>
        <BestSellersSection products={bestSellers.products} />
      </div>
    </>
  );
}
