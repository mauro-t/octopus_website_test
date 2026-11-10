import localFont from "next/font/local";
import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";

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
        <header className="fixed inset-x-0 top-8 w-full">
          <Navbar />
        </header>
        <main className="app-container min-h-svh">{children}</main>
      </body>
    </html>
  );
}
