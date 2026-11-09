import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octopus",
  description: "Test website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <main className="min-h-svh">{children}</main>
      </body>
    </html>
  );
}
