import Link from "next/link";
import LogoAndTypeSm from "../logo/logo-and-type-sm";

export default function Footer() {
  return (
    <div className="app-container desktop:pt-60 pt-48 pb-24 leading-1">
      <div className="tablet:flex-row flex flex-col justify-between gap-48">
        <Link aria-label="Octopus logo" href="/" className="focus-ring">
          <LogoAndTypeSm className="w-[100px]" />
        </Link>
        <article className="tablet:flex-row flex flex-col gap-60">
          <section className="flex flex-col">
            <h2 className="leading-1.1 font-bold">Our products</h2>
            <div className="tablet:grid-cols-2 tablet:mt-auto tablet:gap-y-16 mt-40 grid grid-cols-1 gap-x-24 gap-y-24">
              <Link href="#" className="focus-ring">
                Kitchen
              </Link>
              <Link href="#" className="focus-ring">
                Hair care
              </Link>
              <Link href="#" className="focus-ring">
                Home security
              </Link>
              <Link href="#" className="focus-ring">
                Accessories
              </Link>
            </div>
          </section>
          <section className="flex flex-col">
            <h2 className="leading-1.1 font-bold">Learn</h2>
            <div className="tablet:mt-auto tablet:gap-y-16 mt-40 grid grid-cols-1 gap-y-24">
              <Link href="#" className="focus-ring">
                Where to buy
              </Link>
              <Link href="#" className="focus-ring">
                Contact us
              </Link>
            </div>
          </section>
        </article>
      </div>
      <div className="tablet:flex-row mt-60 flex flex-col justify-between gap-16 text-[14px]">
        <p>Copyright 2026 Octopus - All rights reserved</p>
        <Link href="#" className="focus-ring">
          Policies & Terms
        </Link>
      </div>
    </div>
  );
}
