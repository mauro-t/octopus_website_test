"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Collapsible } from "@base-ui/react/collapsible";
import { navItems } from "@/data/nav-items";
import Button from "../ui/button";
import Logo from "../logo/logo";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(width > 809px)");

    function handleClick(e: PointerEvent) {
      if (!ref.current || !(e.target instanceof Node)) return;
      if (!ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (ref.current?.dataset.open !== undefined) {
        if (e.key == "Escape") setOpen(false);
      }
    }

    function handleMqlChange(e: MediaQueryListEvent) {
      if (e.matches && ref.current?.dataset.open !== undefined) {
        setOpen(false);
      }
    }

    mql.addEventListener("change", handleMqlChange);
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      mql.removeEventListener("change", handleMqlChange);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Collapsible.Root
      ref={ref}
      open={open}
      onOpenChange={setOpen}
      className="tablet:hidden group/collapsible"
    >
      <div className="flex items-center justify-between">
        <Link aria-label="Octopus - Homepage" href="/" className="text-accent focus-ring">
          <Logo className="w-32" />
        </Link>
        <Collapsible.Trigger
          render={
            <Button icon variant="ghost" className="size-40" aria-label="Mobile menu trigger">
              <div className="relative h-8 w-24">
                <span className="absolute top-0 left-0 block h-[2px] w-full rounded-full bg-black transition-all group-data-open/collapsible:top-1/2 group-data-open/collapsible:-translate-y-1/2 group-data-open/collapsible:rotate-45"></span>
                <span className="absolute top-full left-0 block h-[2px] w-full -translate-y-full rounded-full bg-black transition-all group-data-open/collapsible:top-1/2 group-data-open/collapsible:-translate-y-1/2 group-data-open/collapsible:-rotate-45"></span>
              </div>
            </Button>
          }
        />
      </div>
      <Collapsible.Panel className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-350 data-ending-style:h-0 data-starting-style:h-0">
        <ul className="space-y-8 pt-16">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.type == "link" && (
                <Link
                  href={item.href}
                  className="focus-ring block py-8 leading-1"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )}
              {item.type == "cta" && (
                <Button
                  href={item.href}
                  as="link"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Button>
              )}
            </li>
          ))}
        </ul>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
