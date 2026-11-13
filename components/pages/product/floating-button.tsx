"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "@/components/ui/button";

export default function FloatingButton() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window != "undefined") {
      // oxlint-disable-next-line react/set-state-in-effect
      setContainer(document.body);
    }
  }, []);

  return (
    <>
      <div className="px-page-gutter tablet:hidden fixed inset-x-0 bottom-0 z-20 bg-white py-[10px]">
        <Button as="link" className="w-full" href="#">
          Where to buy
        </Button>
      </div>
      {container && createPortal(<div className="tablet:hidden h-60" />, container)}
    </>
  );
}
