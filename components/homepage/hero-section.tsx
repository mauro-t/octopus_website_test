import Reveal from "../animations/reveal";
import Heading from "../ui/heading";
import ResponsiveVideo from "../ui/responsive-video";
import type { HomepageHeroSection } from "@/data/types";

type Props = {
  section: HomepageHeroSection;
};

export default function HeroSection({ section }: Props) {
  return (
    <article className="full-bleed relative flex min-h-svh justify-center">
      <ResponsiveVideo {...section.video} className="absolute inset-0 h-full w-full object-cover" />
      <div className="tablet:py-[180px] relative z-10 py-[100px]">
        <Reveal>
          <Heading
            title={section.title}
            subtitle={section.subtitle}
            cta={section.cta}
            TitleTag="h1"
          />
        </Reveal>
      </div>
    </article>
  );
}
