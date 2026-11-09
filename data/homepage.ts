import { placeholderImage, responsivePlaceholderImage } from "./images";
import { bestSellers, categories, productCatalog, productHref } from "./products";
import type { HomepageSection } from "./types";

export const homepageSections = [
  {
    id: "home-hero",
    type: "hero",
    title: "Octopus Hair Dryer",
    subtitle: "Salon-quality hair. At home, in minutes.",
    cta: {
      label: "Learn more",
      href: productHref,
    },
    image: responsivePlaceholderImage(
      "Close-up of the Octopus Ionic Hair Dryer",
      [1920, 1080],
      [1200, 675],
      [768, 1024],
      "d7d7d7",
    ),
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
    image: responsivePlaceholderImage(
      "Woman styling her hair with the Octopus Ionic Hair Dryer",
      [1920, 800],
      [1200, 500],
      [768, 1024],
      "dbc0a7",
    ),
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
    items: [productCatalog.indoorCamera, productCatalog.videoDoorbell],
  },
  {
    id: "home-accessories",
    type: "category",
    layout: "grid",
    title: "Accessories",
    subtitle: "The little things that keep everything connected.",
    cta: { label: "Explore accessories", href: "#" },
    items: [
      productCatalog.powerBank,
      productCatalog.chargingPowerBank,
      productCatalog.hairDryerWallMount,
    ],
  },
  {
    id: "home-explore-categories",
    type: "explore-all",
    items: [
      {
        image: placeholderImage("Kitchen appliances", 400, 400),
        category: categories.kitchen,
      },
      {
        image: placeholderImage("Home security cameras", 400, 400),
        category: categories["home-security"],
      },
      {
        image: placeholderImage("Hair care appliances", 400, 400),
        category: categories["hair-care"],
      },
      {
        image: placeholderImage("Accessories", 400, 400),
        category: categories.accessories,
      },
    ],
  },
  {
    id: "home-store-locator",
    type: "store-locator",
    image: responsivePlaceholderImage(
      "Octopus kitchen appliances on a red background",
      [1920, 800],
      [1200, 500],
      [768, 1024],
      "df0716",
    ),
    cta: { label: "Find your nearest store", href: "#" },
  },
] satisfies HomepageSection[];
