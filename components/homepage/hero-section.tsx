import Heading from "../ui/heading";
import type { HomepageHeroSection } from "@/data/types";
import Picture from "../ui/picture";

type Props = {
  section: HomepageHeroSection;
};

export default function HeroSection({ section }: Props) {
  return (
    <article className="full-bleed relative flex h-svh items-center justify-center">
      <Picture
        image={section.image}
        elementProps={{
          className: "absolute inset-0 w-full h-full object-cover",
          loading: "eager",
          fetchPriority: "high",
        }}
        sizes="100vw"
      />
      <div className="relative z-10">
        <Heading
          title={section.title}
          subtitle={section.subtitle}
          cta={section.cta}
          TitleTag="h1"
        />
      </div>
    </article>
  );
}
