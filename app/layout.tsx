import localFont from "next/font/local";
import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";

const Satoshi = localFont({
  src: "../assets/font/Satoshi-Variable.woff2",
  display: "swap",
  preload: true,
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Octopus",
  description: "Test website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={clsx(Satoshi.className, "scrollbar-gutter-stable antialiased")}>
      <body>
        <main className="min-h-svh">{children}</main>
      </body>
    </html>
  );
}
