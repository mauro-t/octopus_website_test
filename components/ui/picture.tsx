import { getImageProps } from "next/image";
import type { MediaSource, MediaWithAlt } from "@/data/types";
import type { ComponentProps } from "react";

type Props = {
  image: MediaWithAlt;
  sizes?: string;
  elementProps?: ComponentProps<"img">;
};

type SourceProps = {
  source: MediaSource;
  alt: string;
  media: string;
  sizes?: string;
};

const Source = ({ source, alt, media, sizes }: SourceProps) => {
  const {
    props: { srcSet },
  } = getImageProps({
    sizes,
    alt,
    ...source,
  });

  return (
    <source
      media={media}
      srcSet={srcSet}
      sizes={sizes}
      width={source.width}
      height={source.height}
    />
  );
};

export default function Picture({ image, sizes, elementProps }: Props) {
  const { sources, ...defaultProps } = image;
  const { props } = getImageProps({ ...defaultProps, loading: "lazy", decoding: "async", sizes });
  return (
    <picture>
      {sources?.desktop && (
        <Source
          source={sources.desktop}
          alt={defaultProps.alt} // serve solo per getImageProps
          sizes={sizes}
          media="(min-width: 1200px)"
        />
      )}
      {sources?.tablet && (
        <Source
          source={sources.tablet}
          alt={defaultProps.alt} // serve solo per getImageProps
          sizes={sizes}
          media="(min-width: 810px)"
        />
      )}
      {/* oxlint-disable-next-line jsx-a11y/alt-text */}
      <img {...props} {...elementProps} />
    </picture>
  );
}
