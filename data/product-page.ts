import { placeholderImage } from "./images";
import { bestSellers, productCatalog } from "./products";
import type { ProductPage } from "./types";

export const productPage = {
  product: productCatalog.countertopBlender,
  sections: [
    {
      id: "blender-lifestyle",
      type: "image",
      image: placeholderImage(
        "Preparing a smoothie with the Octopus Countertop Blender",
        720,
        960,
        "d6b99b",
      ),
    },
    {
      id: "blender-features",
      type: "features",
      features: [
        {
          colSpan: "2",
          title: "Powers through the tough stuff",
          description:
            "A 1000W motor lets you take on everything from crushing ice to blending smoothies.",
          image: placeholderImage("Blender blades with ice and frozen berries", 720, 328, "e5e4e6"),
        },
        {
          colSpan: "1",
          title: "Skip the scrubbing",
          description:
            "Add water and a little detergent, press clean, and the blender cleans itself.",
          image: placeholderImage("Octopus Blender self-cleaning cycle", 352, 464, "eae8e4"),
        },
        {
          colSpan: "1",
          title: "Control in short bursts",
          description:
            "The pulse function runs the blades in bursts, giving you even more control.",
          image: placeholderImage("Creamy mixture swirling inside the blender", 352, 464, "e0cfbe"),
        },
        {
          colSpan: "2",
          title: "A preset for the everyday",
          description: "Three intelligent presets for smoothies, sauce, crushed ice and more.",
          image: placeholderImage("Selecting a preset on the blender controls", 720, 328, "e4d6c7"),
        },
      ],
    },
    {
      id: "blender-kitchen",
      type: "image",
      image: placeholderImage(
        "Octopus Countertop Blender filled with fresh fruit on a kitchen counter",
        720,
        960,
        "e6dfd5",
      ),
    },
    {
      id: "product-best-sellers",
      type: "best-sellers",
      products: bestSellers,
    },
  ],
} satisfies ProductPage;
