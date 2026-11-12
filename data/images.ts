import type { StaticImageData } from "next/image";
import countertopBlender from "@/assets/images/products/countertop-blender.png";
import blender from "@/assets/images/products/personal-blender.png";
import airFryer from "@/assets/images/products/air-fryer.png";
import kettle from "@/assets/images/products/kettle.png";
import indoorCamera from "@/assets/images/products/indoor-camera.png";
import videoDoorbell from "@/assets/images/products/video-doorbell.png";
import outdoorCamera from "@/assets/images/products/outdoor-camera.png";
import ionicHairDryer from "@/assets/images/products/ionic-hair-dryer.png";
import cable from "@/assets/images/products/usb-charging-cable.png";
import powerBank from "@/assets/images/products/power-bank.png";
import powerBoard from "@/assets/images/products/power-board-usb.png";
import chargingStation from "@/assets/images/products/magnetic-charging-station.png";
import hairDryerDesktop from "@/assets/images/banners/hair-dryer-desktop.png";
import hairDryerMobile from "@/assets/images/banners/hair-dryer-mobile.png";
import storeDesktop from "@/assets/images/banners/store-locator-desktop.png";
import storeTablet from "@/assets/images/banners/store-locator-tablet.png";
import type { MediaSource, MediaWithAlt } from "./types";

// Gli import statici conservano le dimensioni reali senza duplicare i file in public.
function assetSource(asset: StaticImageData): MediaSource {
  return { src: asset.src, width: asset.width, height: asset.height };
}

function assetImage(asset: StaticImageData, alt: string): MediaWithAlt {
  return { ...assetSource(asset), alt };
}

export const productImages = {
  countertopBlender: assetImage(countertopBlender, "Octopus Countertop Blender"),
  blender: assetImage(blender, "Octopus Blender"),
  airFryer: assetImage(airFryer, "Octopus Air Fryer 5.7L"),
  kettle: assetImage(kettle, "Octopus Kettle 1.7L"),
  indoorCamera: assetImage(indoorCamera, "Octopus Indoor Camera"),
  videoDoorbell: assetImage(videoDoorbell, "Octopus Video Doorbell"),
  outdoorCamera: assetImage(outdoorCamera, "Octopus Outdoor Camera"),
  ionicHairDryer: assetImage(ionicHairDryer, "Octopus Ionic Hair Dryer"),
  powerBank: assetImage(powerBank, "Octopus Power Bank"),
  powerBoard: assetImage(powerBoard, "Octopus Power Board with USB Charging"),
  chargingStation: assetImage(chargingStation, "Octopus 3-in-1 Magnetic Charging Station"),
} satisfies Record<string, MediaWithAlt>;

export const categoryImages = {
  kitchen: assetImage(blender, "Kitchen appliances"),
  homeSecurity: assetImage(indoorCamera, "Home security cameras"),
  hairCare: assetImage(ionicHairDryer, "Hair care appliances"),
  accessories: assetImage(cable, "Charging cable"),
} satisfies Record<string, MediaWithAlt>;

export const hairDryerBannerImage: MediaWithAlt = {
  ...assetImage(hairDryerMobile, "Woman styling her hair with the Octopus Ionic Hair Dryer"),
  sources: {
    desktop: assetSource(hairDryerDesktop),
    // Il crop della categoria tablet porta il phon sotto il testo di questo banner.
    tablet: assetSource(hairDryerDesktop),
  },
};

export const storeLocatorImage: MediaWithAlt = {
  // Nessun asset verticale adatto al banner mobile tra quelli forniti.
  ...placeholderImage("Octopus kitchen appliances on a red background", 768, 1024, "df0716"),
  sources: {
    desktop: assetSource(storeDesktop),
    tablet: assetSource(storeTablet),
  },
};

function placeholderSource(width: number, height: number, background: string): MediaSource {
  return {
    src: `https://placehold.co/${width}x${height}/${background}/292929/png`,
    width,
    height,
  };
}

export function placeholderImage(
  alt: string,
  width: number,
  height: number,
  background = "f7f7f7",
): MediaWithAlt {
  return {
    ...placeholderSource(width, height, background),
    alt,
  };
}

export function responsivePlaceholderImage(
  alt: string,
  desktopSize: [width: number, height: number],
  tabletSize: [width: number, height: number],
  mobileSize: [width: number, height: number],
  background = "f7f7f7",
): MediaWithAlt {
  return {
    ...placeholderImage(alt, ...mobileSize, background),
    sources: {
      tablet: placeholderSource(...tabletSize, background),
      desktop: placeholderSource(...desktopSize, background),
    },
  };
}
