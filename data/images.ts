import type { MediaWithAlt } from "./types";

export function placeholderImage(
  alt: string,
  width: number,
  height: number,
  background = "f7f7f7",
): MediaWithAlt {
  return {
    src: `https://placehold.co/${width}x${height}/${background}/292929/png`,
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
  const desktop = placeholderImage(`${alt} - desktop`, ...desktopSize, background);
  const tablet = placeholderImage(`${alt} - tablet`, ...tabletSize, background);
  const mobile = placeholderImage(`${alt} - mobile`, ...mobileSize, background);

  return {
    src: mobile.src,
    alt,
    // Il primo source compatibile viene selezionato; src copre il mobile (< 810px).
    sources: [
      { media: "(min-width: 1200px)", srcSet: desktop.src },
      { media: "(min-width: 810px)", srcSet: tablet.src },
    ],
  };
}
