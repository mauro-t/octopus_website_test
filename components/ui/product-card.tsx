import Image from "next/image";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Picture from "./picture";
import Button from "./button";
import type { MediaWithAlt } from "@/data/types";

type Variant = "lg-h" | "lg-v" | "md-h" | "md-v" | "sm";

type Props = {
  variant?: Variant;
  fillHeight?: boolean;
  title: string;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
  };
  image: MediaWithAlt;
};

const variantClasses: Record<
  Variant,
  { card: string; "text-container": string; image?: string; title?: string; subtitle?: string }
> = {
  "lg-h": {
    card: "",
    "text-container": "not-tablet:text-center not-tablet:flex-col desktop:pl-80",
  },
  "lg-v": {
    card: "desktop:aspect-2/3",
    "text-container":
      "desktop:pl-24 text-center tablet:text-left desktop:text-center tablet:flex-row desktop:flex-col flex-col desktop:pt-60",
  },
  "md-h": {
    card: "desktop:grid desktop:aspect-13/10 desktop:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]",
    "text-container": "desktop:pl-40 desktop:pr-0 desktop:text-left",
    image: "desktop:min-h-full desktop:min-w-0 desktop:w-auto",
  },
  "md-v": {
    card: "",
    "text-container": "",
  },
  sm: {
    card: "tablet:flex-col-reverse",
    "text-container":
      "pt-40 pb-0 tablet:pt-0 tablet:pb-24 desktop:pt-0 desktop:px-40 desktop:pb-40",
    title: "text-xl tablet:text-lg desktop:text-xl",
    subtitle: "desktop:text-lg mt-16 tablet:mt-24 desktop:mt-32",
  },
};

const CardHeading = ({
  title,
  subtitle,
  cta,
  variant = "md-v",
}: Pick<Props, "title" | "subtitle" | "cta" | "variant">) => {
  const classes = variantClasses[variant];

  return (
    <div className="max-w-[400px]">
      <h3
        className={twMerge(
          "tablet:text-2xl desktop:text-3xl leading-1.1 text-xl font-bold",
          classes.title,
        )}
      >
        {title}
      </h3>
      {subtitle && (
        <p className={twMerge("text-secondary desktop:text-lg mt-16", classes.subtitle)}>
          {subtitle}
        </p>
      )}
      {cta && (
        <Button as="link" href={cta.href} className="desktop:mt-32 mt-24">
          {cta.label}
        </Button>
      )}
    </div>
  );
};

const LgVariant = (props: Props) => {
  const classes = variantClasses[props.variant ?? "lg-h"];

  return (
    <article
      className={twMerge(
        clsx(
          "tablet:aspect-9/5 rounded-card relative aspect-2/3 overflow-hidden",
          classes.card,
          props.fillHeight && "desktop:aspect-auto desktop:h-full",
        ),
      )}
    >
      <Picture
        image={props.image}
        sizes="100vw"
        elementProps={{
          className: "absolute inset-0 w-full h-full object-cover",
        }}
      />
      <div
        className={clsx(
          "tablet:pl-40 relative z-10 flex h-full w-full items-center pt-40 pr-24 pl-24",
          classes["text-container"],
        )}
      >
        <CardHeading
          title={props.title}
          subtitle={props.subtitle}
          cta={props.cta}
          variant={props.variant}
        />
      </div>
    </article>
  );
};

const MdVariant = (props: Props) => {
  const classes = variantClasses[props.variant ?? "md-v"];
  return (
    <article
      className={twMerge(
        clsx(
          "rounded-card bg-primary flex aspect-2/3 min-h-0 flex-col items-center justify-between gap-16 overflow-hidden",
          classes.card,
          props.fillHeight && "desktop:aspect-auto desktop:h-full desktop:grid-rows-1",
        ),
      )}
    >
      <div
        className={twMerge(
          "tablet:pt-24 desktop:pt-60 px-24 pt-40 text-center",
          classes["text-container"],
        )}
      >
        <CardHeading
          title={props.title}
          subtitle={props.subtitle}
          cta={props.cta}
          variant={props.variant}
        />
      </div>
      <Image
        loading="lazy"
        decoding="async"
        width={props.image.width}
        height={props.image.height}
        className={twMerge(
          clsx(
            "min-h-0 w-full object-contain",
            classes.image,
            props.fillHeight && "desktop:h-full desktop:min-h-0 desktop:w-full",
          ),
        )}
        src={props.image.src}
        alt={props.image.alt}
        sizes="(min-width: 810px) 33vw, 100vw"
        draggable={false}
      />
    </article>
  );
};

const SmVariant = (props: Props) => {
  const classes = variantClasses.sm;

  return (
    <article
      className={twMerge(
        clsx(
          "rounded-card bg-primary flex aspect-2/3 flex-col items-center justify-between gap-16 overflow-hidden",
          classes.card,
          props.fillHeight && "desktop:aspect-auto desktop:h-full desktop:grid-rows-1",
        ),
      )}
    >
      <div
        className={twMerge(
          "tablet:pt-24 desktop:pt-60 px-24 pt-32 desktop:text-left text-center",
          classes["text-container"],
        )}
      >
        <CardHeading title={props.title} subtitle={props.subtitle} cta={props.cta} variant="sm" />
      </div>
      <Image
        loading="lazy"
        decoding="async"
        width={props.image.width}
        height={props.image.height}
        className={twMerge(
          clsx(
            "min-h-0 w-full object-contain",
            classes.image,
            props.fillHeight && "desktop:h-full desktop:min-h-0 desktop:w-full",
          ),
        )}
        src={props.image.src}
        alt={props.image.alt}
        sizes="(min-width: 810px) 33vw, 100vw"
        draggable={false}
      />
    </article>
  );
};

export default function ProductCard(props: Props) {
  if (props.variant?.includes("lg")) return <LgVariant {...props} />;
  if (props.variant === "sm") return <SmVariant {...props} />;
  return <MdVariant {...props} />;
}
