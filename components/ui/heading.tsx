import { twMerge } from "tailwind-merge";
import Button from "./button";
import clsx from "clsx";

type Variant = "primary" | "secondary";

type Props = {
  title: string;
  subtitle?: string;
  cta?: {
    label: string;
    href: string;
  };
  variant?: Variant;
  TitleTag: "h1" | "h2" | "h3";
};

const variantClasses: Record<Variant, { title: string; subtitle: string }> = {
  primary: {
    title: "text-4xl tablet:text-6xl desktop:text-7xl",
    subtitle: "text-md tablet:text-lg desktop:text-xl mt-12",
  },
  secondary: {
    title: "text-3xl tablet:text-4xl desktop:text-5xl",
    subtitle: "text-md tablet:text-lg desktop:text-xl mt-8",
  },
};

export default function Heading(props: Props) {
  const { title, subtitle, cta, variant = "primary", TitleTag } = props;
  const classes = variantClasses[variant];
  return (
    <section className="tablet:max-w-[550px] max-w-[342px] text-center">
      <TitleTag className={twMerge(clsx(classes.title, "leading-1.1 font-bold text-balance"))}>
        {title}
      </TitleTag>
      {subtitle && <p className={twMerge(clsx(classes.subtitle, "text-secondary"))}>{subtitle}</p>}
      {cta && (
        <Button variant={variant} as="link" href={cta.href} className="tablet:mt-32 mt-24">
          {cta.label}
        </Button>
      )}
    </section>
  );
}
