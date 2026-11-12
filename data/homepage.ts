import {
  categoryImages,
  hairDryerBannerImage,
  responsivePlaceholderImage,
  storeLocatorImage,
} from "./images";
import { bestSellers, categories, productCatalog, productHref } from "./products";
import type { HomepageSection } from "./types";

export const homepageSections = [
  {
    id: "home-hero",
    type: "hero",
    title: "Octopus Ionic Hair Dryer",
    subtitle: "A powerful ionic hair dryer with a 110,000 RPM motor for fast drying and less frizz",
    cta: {
      label: "Learn more",
      href: productHref,
    },
    video: {
      alt: "Close-up of the Octopus Ionic Hair Dryer",
      src: "https://placeholdervideo.dev/768x1024",
      width: 768,
      height: 1024,
      sources: {
        desktop: "https://placeholdervideo.dev/1920x1080",
        tablet: "https://placeholdervideo.dev/1200x675",
      },
    },
  },
  {
    id: "home-best-sellers",
    type: "best-sellers",
    products: bestSellers,
  },
  {
    id: "home-kitchen",
    type: "category",
    layout: "featured-top",
    title: "Kitchen",
    subtitle: "From first light to the midnight snack.",
    cta: { label: "All kitchen", href: "#" },
    main: {
      product: productCatalog.kettle,
      image: responsivePlaceholderImage(
        "Pouring water from the Octopus Kettle",
        [1440, 800],
        [1080, 600],
        [768, 960],
        "f0ded8",
      ),
    },
    items: [productCatalog.blender, productCatalog.countertopBlender],
  },
  {
    id: "home-hair-dryer-banner",
    type: "banner",
    title: "Octopus Ionic Hair Dryer",
    subtitle: "Less time drying. More time for you.",
    cta: { label: "Discover", href: productHref },
    image: hairDryerBannerImage,
  },
  {
    id: "home-security",
    type: "category",
    layout: "featured-left",
    title: "Home Security",
    subtitle: "Peace of mind, wherever life takes you.",
    cta: { label: "All home security", href: "#" },
    main: {
      product: productCatalog.indoorCamera,
      image: responsivePlaceholderImage(
        "Octopus Indoor Camera on a wooden table",
        [800, 1200],
        [600, 900],
        [768, 960],
        "c6b5a8",
      ),
    },
    items: [productCatalog.outdoorCamera, productCatalog.videoDoorbell],
  },
  {
    id: "home-accessories",
    type: "category",
    layout: "grid",
    title: "Accessories",
    subtitle: "The little things that keep everything connected.",
    cta: { label: "Explore accessories", href: "#" },
    items: [productCatalog.powerBank, productCatalog.powerBoard, productCatalog.chargingStation],
  },
  {
    id: "home-explore-categories",
    type: "explore-all",
    items: [
      {
        image: categoryImages.kitchen,
        category: categories.kitchen,
      },
      {
        image: categoryImages.homeSecurity,
        category: categories["home-security"],
      },
      {
        image: categoryImages.hairCare,
        category: categories["hair-care"],
      },
      {
        image: categoryImages.accessories,
        category: categories.accessories,
      },
    ],
  },
  {
    id: "home-store-locator",
    type: "store-locator",
    image: storeLocatorImage,
    cta: { label: "Find your nearest store", href: "#" },
  },
] satisfies HomepageSection[];
