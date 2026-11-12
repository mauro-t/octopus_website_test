import Link from "next/link";
import Image from "next/image";
import type { MediaWithAlt } from "@/data/types";

type Props = {
  image: MediaWithAlt;
  name: string;
};

export default function CategoryCard({ image, name }: Props) {
  return (
    <Link href="#" className="inline-grid grid-rows-[minmax(0,1fr)_auto] gap-16">
      <div className="rounded-card group aspect-square overflow-hidden">
        <Image
          loading="lazy"
          decoding="async"
          width={image.width}
          height={image.height}
          className="h-full w-full object-cover transition-transform duration-350 group-hover:scale-110"
          src={image.src}
          alt={image.alt}
          sizes="(min-width: 1200px) 25vw, (min-width: 810px) 50vw, 100vw"
          draggable={false}
        />
      </div>
      <span className="text-center text-lg">{name}</span>
    </Link>
  );
}
