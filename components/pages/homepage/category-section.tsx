import Reveal from "../../animations/reveal";
import Heading from "../../ui/heading";
import ProductCard from "../../ui/product-card";
import type { CategoryGridSection } from "@/data/types";

type Props = {
  section: CategoryGridSection;
};

export default function CategorySection({ section }: Props) {
  return (
    <article className="tablet:pb-80 pt-80 pb-40">
      <div className="desktop:mb-80 mb-40 flex items-center justify-center">
        <Reveal>
          <Heading
            title={section.title}
            subtitle={section.subtitle}
            cta={section.cta}
            TitleTag="h2"
            variant="secondary"
          />
        </Reveal>
      </div>

      {section.layout == "featured-top" && (
        <div className="tablet:grid-cols-2 desktop:gap-24 grid grid-cols-1 gap-16">
          <div className="tablet:col-span-2">
            <Reveal>
              <ProductCard
                title={section.main.product.name}
                subtitle={section.main.product.shortDescription}
                cta={{
                  label: "Learn more",
                  href: `/products/${section.main.product.slug}`,
                }}
                image={section.main.image}
                variant="lg-h"
              />
            </Reveal>
          </div>
          {section.items.map((item) => (
            <Reveal key={item.name}>
              <ProductCard
                title={item.name}
                subtitle={item.shortDescription}
                cta={{
                  label: "Learn more",
                  href: `/products/${item.slug}`,
                }}
                image={item.image}
                variant="md-v"
              />
            </Reveal>
          ))}
        </div>
      )}
      {section.layout == "featured-left" && (
        <div className="tablet:grid-cols-2 desktop:grid-rows-2 desktop:gap-24 grid grid-cols-1 gap-16">
          <div className="tablet:col-span-2 desktop:col-span-1 desktop:row-span-2">
            <Reveal>
              <ProductCard
                title={section.main.product.name}
                subtitle={section.main.product.shortDescription}
                cta={{
                  label: "Learn more",
                  href: `/products/${section.main.product.slug}`,
                }}
                image={section.main.image}
                variant="lg-v"
              />
            </Reveal>
          </div>
          {section.items.map((item) => (
            <div key={item.name} className="desktop:min-h-0 desktop:col-start-2">
              <Reveal className="h-full w-full">
                <ProductCard
                  title={item.name}
                  subtitle={item.shortDescription}
                  cta={{
                    label: "Learn more",
                    href: `/products/${item.slug}`,
                  }}
                  image={item.image}
                  variant="md-h"
                  fillHeight
                />
              </Reveal>
            </div>
          ))}
        </div>
      )}

      {section.layout == "grid" && (
        <div className="desktop:gap-24 tablet:flex-row flex flex-col gap-16">
          {section.items.map((item) => (
            <Reveal key={item.name}>
              <ProductCard
                title={item.name}
                subtitle={item.shortDescription}
                cta={{
                  label: "Learn more",
                  href: `/products/${item.slug}`,
                }}
                image={item.image}
                variant="sm"
              />
            </Reveal>
          ))}
        </div>
      )}
    </article>
  );
}
