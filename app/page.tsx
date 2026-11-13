import { homepageSections } from "@/data/homepage";
import HeroSection from "@/components/pages/homepage/hero-section";
import CategorySection from "@/components/pages/homepage/category-section";
import BannerSection from "@/components/pages/homepage/banner-section";
import BestSellersSection from "@/components/pages/homepage/best-sellers-section";
import ExploreAllSection from "@/components/pages/homepage/explore-all-section";
import StoreLocatorSection from "@/components/pages/homepage/store-locator-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Octopus | Homepage",
  description: "Find your Octopus product",
};

export default function Home() {
  return homepageSections.map((section) => {
    switch (section.type) {
      case "hero":
        return <HeroSection key={section.id} section={section} />;
      case "category":
        return <CategorySection key={section.id} section={section} />;
      case "banner":
        return <BannerSection key={section.id} section={section} />;
      case "best-sellers":
        return <BestSellersSection key={section.id} section={section} />;
      case "explore-all":
        return <ExploreAllSection key={section.id} section={section} />;
      case "store-locator":
        return <StoreLocatorSection key={section.id} section={section} />;
      default:
        return null;
    }
  });
}
