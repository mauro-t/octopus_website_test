import { homepageSections } from "@/data/homepage";
import HeroSection from "@/components/homepage/hero-section";
import CategorySection from "@/components/homepage/category-section";
import BannerSection from "@/components/homepage/banner-section";
import BestSellersSection from "@/components/homepage/best-sellers-section";
import ExploreAllSection from "@/components/homepage/explore-all-section";
import StoreLocatorSection from "@/components/homepage/store-locator-section";

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
