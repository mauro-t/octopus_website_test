import Image from "next/image";
import clsx from "clsx";
import type { FeaturesGridSection } from "@/data/types";
import Reveal from "../animations/reveal";

type Props = FeaturesGridSection;

export default function FeaturesGrid({ features }: Props) {
  return (
    <div className="desktop:grid-cols-2 tablet:my-80 my-40 grid gap-16">
      {features.map((feature, index) => (
        <Reveal
          key={index}
          className={clsx(
            feature.colSpan == "2"
              ? "desktop:col-span-2 desktop:flex desktop:aspect-11/5 desktop:items-center desktop:px-40 aspect-2/3 px-24"
              : "col-span-1 aspect-2/3 px-24",
            "rounded-card not-desktop:text-center relative overflow-hidden py-40",
          )}
        >
          <Image
            loading="lazy"
            decoding="async"
            width={feature.image.width}
            height={feature.image.height}
            className="absolute inset-0 h-full w-full object-cover"
            src={feature.image.src}
            alt={feature.image.alt}
            sizes="(min-width: 810px) 33vw, 100vw"
            draggable={false}
          />
          <div
            className={clsx(
              "desktop:max-w-[252px] relative z-10",
              feature.colSpan == "2" && "desktop:pt-60",
            )}
          >
            <h2 className="tablet:text-2xl desktop:text-lg leading-1.1 text-lg font-bold text-balance">
              {feature.title}
            </h2>
            <p className="tablet:text-lg desktop:text-base mt-8 text-balance">
              {feature.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
