import type { MediaSource, MediaWithAlt } from "./types";

function placeholderSource(width: number, height: number, background: string): MediaSource {
  return {
    src: `https://placehold.co/${width}x${height}/${background}/292929/png`,
    width,
    height,
  };
}

export function placeholderImage(
  alt: string,
  width: number,
  height: number,
  background = "f7f7f7",
): MediaWithAlt {
  return {
    ...placeholderSource(width, height, background),
    alt,
  };
}

export function responsivePlaceholderImage(
  alt: string,
  desktopSize: [width: number, height: number],
  tabletSize: [width: number, height: number],
  mobileSize: [width: number, height: number],
  background = "f7f7f7",
): MediaWithAlt {
  return {
    ...placeholderImage(alt, ...mobileSize, background),
    sources: {
      tablet: placeholderSource(...tabletSize, background),
      desktop: placeholderSource(...desktopSize, background),
    },
  };
}
