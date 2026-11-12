"use client";

import { useEffect, useId, useRef } from "react";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<"video">, "src"> & {
  alt: string;
  src: string;
  sources?: {
    desktop: string;
    tablet: string;
  };
};

export default function ResponsiveVideo({ sources, src, alt, autoPlay = true, ...props }: Props) {
  const id = useId();
  const ref = useRef<HTMLVideoElement>(null);
  const isVisible = useRef(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.autoplay = autoPlay && isVisible.current;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible.current = entry.isIntersecting;
      video.autoplay = autoPlay && entry.isIntersecting;

      if (!entry.isIntersecting) {
        video.pause();
      } else if (autoPlay) {
        video.play().catch(() => {});
      }
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [autoPlay]);

  return (
    <>
      <div id={id} className="sr-only">
        {alt}
      </div>
      {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        ref={ref}
        autoPlay={autoPlay}
        playsInline
        muted
        loop
        aria-describedby={id}
        tabIndex={-1}
        {...props}
      >
        {sources?.desktop && (
          <source src={sources.desktop} media="(min-width: 1200px)" type="video/mp4" />
        )}
        {sources?.tablet && (
          <source src={sources.tablet} media="(min-width: 810px)" type="video/mp4" />
        )}
        <source src={src} type="video/mp4" />
      </video>
    </>
  );
}
