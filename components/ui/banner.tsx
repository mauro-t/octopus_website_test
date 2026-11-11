import type { MediaWithAlt } from "@/data/types";
import Picture from "./picture";

type Props = {
  children: React.ReactNode;
  image: MediaWithAlt;
};

export default function Banner(props: Props) {
  return (
    <article className="full-bleed desktop:aspect-12/5 tablet:aspect-8/5 not-tablet:flex-col relative flex aspect-11/20 items-center">
      <Picture
        image={props.image}
        elementProps={{
          className: "absolute inset-0 w-full h-full object-cover",
        }}
        sizes="100vw"
      />
      <div className="app-container not-tablet:text-center not-tablet:pt-80 relative z-10">
        <div className="desktop:max-w-[687px] tablet:max-w-[400px]">{props.children}</div>
      </div>
    </article>
  );
}
