import type { StoreLocatorSection } from "@/data/types";
import Banner from "../../ui/banner";
import Button from "../../ui/button";
import Reveal from "../../animations/reveal";

type Props = {
  section: StoreLocatorSection;
};

export default function StoreLocatorSection({ section }: Props) {
  return (
    <Reveal>
      <Banner image={section.image}>
        <>
          <h2 className="tablet:text-2xl desktop:text-3xl leading-1.1 text-xl text-white">
            Find us at <br /> The Warehouse
          </h2>
          <Button as="link" href={section.cta.href} variant="secondary" className="mt-32">
            {section.cta.label}
          </Button>
        </>
      </Banner>
    </Reveal>
  );
}
