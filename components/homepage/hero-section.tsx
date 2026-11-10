import Heading from "../ui/heading";
import type { HomepageHeroSection } from "@/data/types";

type Props = {
  section: HomepageHeroSection;
};

export default function HeroSection({ section }: Props) {
  return (
    <article className="full-bleed relative flex h-svh items-center justify-center">
      <picture>
        {section.image.sources?.map((src, index) => (
          <source key={index} srcSet={src.srcSet} media={src.media} />
        ))}
        <img
          src={section.image.src}
          alt={section.image.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
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
