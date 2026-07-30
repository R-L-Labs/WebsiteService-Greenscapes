// Shared types for the product catalogs (trees, shrubs, fruit trees, stone & mulch)

export type Grade = 'regular' | 'deluxe' | 'premium';
export type DeerRating = 'resistant' | 'occasional' | 'frequent';

export interface CatalogItem {
  /** Display name shown on the card */
  name: string;
  /** Image filename (without extension) in public/images/catalog/<category>/ */
  slug: string;
  /** Sold size — pot size, height, or "Bulk" */
  size: string;
  /** Product tier badge; omit to hide the badge */
  grade?: Grade;
  description?: string;
  /** e.g. "Full Sun", "Part Sun–Part Shade" */
  sun?: string;
  /** e.g. "Low", "Moderate", "Moderate-High" */
  water?: string;
  deer?: DeerRating;
  /** e.g. "10-15' H x 10-15' W" */
  matureSize?: string;
  /** Estimated price in dollars — only shown when showPrices is true in config.ts */
  price?: number;
  /** Optional explicit image path, overrides the slug-based lookup */
  image?: string;
}

export interface CatalogSection {
  /** Anchor id for in-page navigation */
  id: string;
  title: string;
  subtitle?: string;
  items: CatalogItem[];
}

export interface CatalogCategory {
  /** URL segment and image folder name */
  id: string;
  title: string;
  tagline: string;
  description: string;
  sections: CatalogSection[];
}
