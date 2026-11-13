import type { ExploreAllSection } from "@/data/types";
import CategoryCard from "../../ui/category-card";
import Reveal from "../../animations/reveal";

type Props = {
  section: ExploreAllSection;
};

export default function ExploreAllSection({ section }: Props) {
  return (
    <article className="tablet:py-80 desktop:py-120 pt-40 pb-120">
      <Reveal variant="md">
        <h2 className="tablet:mb-40 desktop:text-3xl tablet:text-2xl leading-1.1 mb-32 text-xl font-bold">
          Explore all categories
        </h2>
      </Reveal>
      <Reveal>
        <div className="tablet:grid-cols-4 desktop:gap-24 grid grid-cols-2 gap-16">
          {section.items.map((item) => (
            <CategoryCard key={item.category.name} image={item.image} name={item.category.label} />
          ))}
        </div>
      </Reveal>
    </article>
  );
}
