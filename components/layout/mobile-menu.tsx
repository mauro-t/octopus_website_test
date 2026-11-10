import Link from "next/link";
import { Collapsible } from "@base-ui/react/collapsible";
import { navItems } from "@/data/nav-items";
import Button from "../ui/button";
import Logo from "../logo/logo";

export default function MobileMenu() {
  return (
    <Collapsible.Root className="tablet:hidden group/collapsible">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-accent focus-ring">
          <Logo className="w-32" />
        </Link>
        <Collapsible.Trigger
          render={
            <Button icon variant="ghost" className="size-40">
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
                <Link href={item.href} className="focus-ring block py-8 leading-1">
                  {item.label}
                </Link>
              )}
              {item.type == "cta" && (
                <Button href={item.href} as="link" className="w-full">
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
