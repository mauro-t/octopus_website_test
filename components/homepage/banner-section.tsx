import Reveal from "../animations/reveal";
import Banner from "../ui/banner";
import Button from "../ui/button";
import type { BannerSection } from "@/data/types";

type Props = {
  section: BannerSection;
};

export default function BannerSection({ section }: Props) {
  return (
    <Reveal className="not-tablet:mt-40">
      <Banner image={section.image}>
        <>
          <h2 className="tablet:text-4xl desktop:text-5xl leading-1.1 text-3xl font-bold">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="text-secondary text-md tablet:text-lg desktop:text-xl mt-16">
              {section.subtitle}
            </p>
          )}
          {section.cta && (
            <Button as="link" href={section.cta.href} className="mt-32">
              {section.cta.label}
            </Button>
          )}
        </>
      </Banner>
    </Reveal>
  );
}
