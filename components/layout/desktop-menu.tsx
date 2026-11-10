import Link from "next/link";
import { navItems } from "@/data/nav-items";
import Button from "../ui/button";
import LogoAndType from "../logo/logo-and-type";

export default function DesktopMenu() {
  return (
    <div className="tablet:flex hidden items-center justify-between">
      <Link href="/" className="text-accent focus-ring">
        <LogoAndType className="w-[108px]" />
      </Link>
      <ul className="flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.id}>
            <Button href={item.href} variant={item.type == "link" ? "ghost" : "primary"} as="link">
              {item.label}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
