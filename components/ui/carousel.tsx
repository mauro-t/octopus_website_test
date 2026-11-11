"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useMotionValueEvent } from "motion/react";
import Button from "./button";

type Props = {
  slides: React.ReactNode[];
};

export default function Carousel({ slides }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const slidesMap = useRef<Map<number, HTMLDivElement | null>>(new Map());
  const getSlidesMap = useCallback(() => {
    slidesMap.current ??= new Map();
    return slidesMap.current;
  }, []);

  const slideWidth = useRef(0);

  const x = useMotionValue(0);

  const [maxDrag, setMaxDrag] = useState(0);

  const [disabled, setDisabled] = useState<"prev" | "next" | null>("prev");

  useMotionValueEvent(x, "change", (latest) => {
    setDisabled(() => {
      if (-latest >= maxDrag - 10) return "next";
      if (-latest <= 10) return "prev";
      return null;
    });
  });

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const observer = new ResizeObserver(() => {
      const nextMaxDrag = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setMaxDrag(nextMaxDrag);
      x.jump(Math.max(-nextMaxDrag, Math.min(0, x.get())));
    });

    observer.observe(viewport);
    observer.observe(track);

    return () => observer.disconnect();
  }, [x]);

  useLayoutEffect(() => {
    const map = getSlidesMap();
    const firstSlide = [...map.values()][0];
    if (!firstSlide) return;
    const observer = new ResizeObserver(([entry]) => {
      slideWidth.current = entry.borderBoxSize[0].inlineSize;
    });
    observer.observe(firstSlide);
    return () => observer.disconnect();
  }, [getSlidesMap]);

  return (
    <div ref={viewportRef} className="full-bleed overflow-hidden">
      <motion.div
        ref={trackRef}
        className="px-page-gutter grid min-w-fit touch-pan-y auto-cols-auto grid-flow-col"
        drag="x"
        style={{ x }}
        dragConstraints={{ left: -maxDrag, right: 0 }}
        dragElastic={0.1}
        dragTransition={{
          modifyTarget: (target) => {
            const slideStep = slideWidth.current;
            const snapped = Math.round(target / slideStep) * slideStep;
            return Math.max(-maxDrag, Math.min(0, snapped));
          },
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(node) => {
              const map = getSlidesMap();
              map.set(index, node);
              return () => {
                map.delete(index);
              };
            }}
            className="desktop:not-last:pr-24 not-last:pr-16"
          >
            {slide}
          </div>
        ))}
      </motion.div>
      <div className="app-container mt-40 flex items-center justify-end gap-8">
        <Button
          icon
          variant="secondary"
          className="size-40"
          disabled={disabled == "prev"}
          onClick={() => animate(x, Math.min(0, x.get() + slideWidth.current))}
        >
          <div className="size-[10px] translate-x-[2px] -rotate-45 skew-4 border-t-2 border-l-2 border-current"></div>
        </Button>
        <Button
          icon
          variant="secondary"
          disabled={disabled == "next"}
          className="size-40"
          onClick={() => animate(x, Math.max(-maxDrag, x.get() - slideWidth.current))}
        >
          <div className="size-[10px] translate-x-[-2px] -rotate-45 skew-4 border-r-2 border-b-2 border-current"></div>
        </Button>
      </div>
    </div>
  );
}
