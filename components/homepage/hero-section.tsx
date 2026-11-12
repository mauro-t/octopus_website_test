import Heading from "../ui/heading";
import Picture from "../ui/picture";
import type { HomepageHeroSection } from "@/data/types";

type Props = {
  section: HomepageHeroSection;
};

export default function HeroSection({ section }: Props) {
  return (
    <article className="full-bleed relative flex min-h-svh justify-center">
      <Picture
        image={section.image}
        elementProps={{
          className: "absolute inset-0 w-full h-full object-cover",
          loading: "eager",
          fetchPriority: "high",
        }}
        sizes="100vw"
      />
      <div className="tablet:py-[180px] relative z-10 py-[100px]">
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
