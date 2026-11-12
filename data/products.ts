import { productImages } from "./images";
import type { Category, CategoryName, Product, ProductPreview } from "./types";

export const productSlug = "countertop-blender";
export const productHref = `/products/${productSlug}`;

export const categories = {
  kitchen: { name: "kitchen", label: "Kitchen" },
  "home-security": { name: "home-security", label: "Home Security" },
  "hair-care": { name: "hair-care", label: "Hair Care" },
  accessories: { name: "accessories", label: "Accessories" },
} satisfies Record<CategoryName, Category>;

// I dettagli non visibili nel mockup sono condivisi tra i prodotti della demo.
const productDefaults = {
  slug: productSlug,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  manualUrl: "#",
  whereToBuy: "#",
  specs: [
    {
      title: "Technical specifications",
      items: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt",
      ],
    },
  ],
};

export const productCatalog = {
  ionicHairDryer: {
    ...productDefaults,
    id: "ionic-hair-dryer",
    name: "Octopus Ionic Hair Dryer",
    category: categories["hair-care"],
    shortDescription:
      "An ionic hair dryer with a powerful BLDC motor for fast drying and less frizz.",
    image: productImages.ionicHairDryer,
    bestSeller: true,
  },
  blender: {
    ...productDefaults,
    id: "blender",
    name: "Octopus Blender",
    category: categories.kitchen,
    shortDescription:
      "A 300W personal blender that blends straight into a cup you can take with you.",
    image: productImages.blender,
    bestSeller: true,
  },
  airFryer: {
    ...productDefaults,
    id: "air-fryer",
    name: "Octopus Air Fryer 5.7L",
    category: categories.kitchen,
    shortDescription:
      "A 5.7L air fryer that cooks a full family-sized meal quickly, with less oil.",
    image: productImages.airFryer,
    bestSeller: true,
  },
  indoorCamera: {
    ...productDefaults,
    id: "indoor-camera",
    name: "Octopus Indoor Camera",
    category: categories["home-security"],
    shortDescription:
      "A 2K indoor camera that pans and tilts, so you can keep an eye on every corner.",
    image: productImages.indoorCamera,
    bestSeller: true,
  },
  kettle: {
    ...productDefaults,
    id: "kettle",
    name: "Octopus Kettle 1.7L",
    category: categories.kitchen,
    shortDescription:
      "A 1.7L kettle that boils fast and switches itself off, ready for your next cup.",
    image: productImages.kettle,
    bestSeller: true,
  },
  videoDoorbell: {
    ...productDefaults,
    id: "video-doorbell",
    name: "Octopus Video Doorbell",
    category: categories["home-security"],
    shortDescription:
      "A wireless video doorbell that lets you see and speak to visitors from your phone.",
    image: productImages.videoDoorbell,
    bestSeller: true,
  },
  countertopBlender: {
    ...productDefaults,
    id: "countertop-blender",
    name: "Octopus Countertop Blender",
    category: categories.kitchen,
    description:
      "This Octopus Countertop Blender has the power to tackle smoothies and tough jobs alike. A 1000W motor and sharp stainless steel blades make light work of fruit, ice and other tough ingredients.",
    shortDescription:
      "A powerful countertop blender for smoothies, frozen drinks and everyday recipes.",
    image: productImages.countertopBlender,
    bestSeller: false,
    colours: [
      { label: "Black", hex: "#000000" },
      { label: "White", hex: "#ffffff" },
    ],
    specs: [
      {
        title: "Technical specifications",
        items: ["Power: 1000 W", "Voltage: 220–240 V", "Frequency: 50/60 Hz"],
      },
      {
        title: "Dimensions & weight",
        items: ["Dimensions: ", "Weight: ", "Cable length: "],
      },
      {
        title: "Product information",
        items: ["Model: "],
      },
    ],
  },
  powerBank: {
    ...productDefaults,
    id: "power-bank",
    name: "Octopus Power Bank 5000mAh",
    category: categories.accessories,
    shortDescription:
      "A compact power bank with a built-in cable to keep your devices charged on the go.",
    image: productImages.powerBank,
    bestSeller: false,
  },
  powerBoard: {
    ...productDefaults,
    id: "power-board",
    name: "Octopus Power Board with USB Charging",
    category: categories.accessories,
    shortDescription: "A power board with USB charging to keep your everyday devices connected.",
    image: productImages.powerBoard,
    bestSeller: false,
  },
  chargingStation: {
    ...productDefaults,
    id: "charging-station",
    name: "Octopus 3-in-1 Magnetic Charging Station",
    category: categories.accessories,
    shortDescription: "A charging station that keeps your phone, watch and earbuds together.",
    image: productImages.chargingStation,
    bestSeller: false,
  },
  outdoorCamera: {
    ...productDefaults,
    id: "outdoor-camera",
    name: "Octopus Outdoor Camera",
    category: categories["home-security"],
    shortDescription: "An outdoor camera to keep an eye on your home's surroundings.",
    image: productImages.outdoorCamera,
    bestSeller: false,
  },
} satisfies Record<string, Product>;

export const products: Product[] = Object.values(productCatalog);

// L'ordine del catalogo riprende quello dello slider nella pagina prodotto.
export const bestSellers: ProductPreview[] = products.filter((product) => product.bestSeller);
