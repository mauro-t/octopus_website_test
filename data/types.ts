export type Cta = { label: string; href: string };

export type CategoryName = "kitchen" | "home-security" | "hair-care" | "accessories";

export type Category = {
  name: CategoryName;
  label: string;
};

export type MediaWithAlt = {
  src: string;
  alt: string;
  sources?: {
    media: string;
    srcSet: string;
  }[];
};

export type ProductColour = {
  label: string;
  hex: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  description: string;
  shortDescription: string;
  image: MediaWithAlt;
  bestSeller: boolean;
  colours?: ProductColour[];
  manualUrl?: string;
  whereToBuy?: string;
  specs?: { title: string; items: string[] }[];
};

export type ProductPreview = Pick<
  Product,
  "id" | "slug" | "name" | "category" | "shortDescription" | "image" | "bestSeller"
>;

export type HomepageHeroSection = {
  title?: string;
  subtitle?: string;
  cta?: Cta;
  image: MediaWithAlt;
};

export type BestSellersSection = {
  products: ProductPreview[];
};

export type CategoryGridSection = {
  /* Probabilmente possiamo introdurre altri valori direttamente sulle 
  cateogorie per gestire titolo sottotitolo link e immagine (cfr. explore all). 
  Ma è fuori scope */
  title: string;
  subtitle: string;
  cta: Cta;
  items: ProductPreview[];
} & (
  | {
      // Kitchen: featured-top; Home Security: featured-left.
      layout: "featured-top" | "featured-left";
      main: {
        product: ProductPreview;
        image: MediaWithAlt;
      };
    }
  | {
      // Accessories: card equivalenti, senza un prodotto principale.
      layout: "grid";
      main?: never;
    }
);

export type BannerSection = {
  title: string;
  subtitle: string;
  cta: Cta;
  image: MediaWithAlt;
};

export type ExploreAllSection = {
  /* vedi commento di CategoryGrid */
  items: { image: MediaWithAlt; category: Category }[];
};

export type StoreLocatorSection = {
  /* Bisognerebbe gestire il testo con un formato di 
  dati "complesso" per accomodare i diversi stili (eg. bold)
  e l'icona. Fuori dallo scope della demo e quindi hardcoded */
  image: MediaWithAlt;
  cta: Cta;
};

export type HomepageSection = { id: string } & (
  | (HomepageHeroSection & { type: "hero" })
  | (CategoryGridSection & { type: "category" })
  | (BannerSection & { type: "banner" })
  | (BestSellersSection & { type: "best-sellers" })
  | (ExploreAllSection & { type: "explore-all" })
  | (StoreLocatorSection & { type: "store-locator" })
);

export type FeaturesGridSection = {
  features: {
    colSpan: "1" | "2";
    title: string;
    description: string;
    image: MediaWithAlt;
  }[];
};

export type ProductPage = {
  product: Product;
  sections: ({ id: string } & (
    | (FeaturesGridSection & { type: "features" })
    | { type: "image"; image: MediaWithAlt }
    | (BestSellersSection & { type: "best-sellers" })
  ))[];
};
