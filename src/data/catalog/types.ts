// Shared types for the product catalogs
// (trees, shrubs, fruit trees, flowers, stone & mulch, pavers & brick)

export type Grade = 'regular' | 'deluxe' | 'premium';
export type DeerRating = 'resistant' | 'occasional' | 'frequent';

export interface ColorOption {
  name: string;
  /** CSS hex for the swatch chip; omit to render the name as a text pill */
  hex?: string;
  /** Second hex for blended colors (e.g. "Toffee/Onyx") — renders a
   *  diagonal two-tone swatch. Ignored when hex is not set. */
  hex2?: string;
}

export interface CatalogItem {
  /** Display name shown on the card */
  name: string;
  /** Image filename (without extension) in public/images/catalog/<category>/ */
  slug: string;
  /** Sold size, pot size, dimensions, or "Bulk" */
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
  /** Price range as text (e.g. "$15.99 – $25.99") — only shown when showPrices is true */
  priceRange?: string;
  /** Optional explicit image path, overrides the slug-based lookup */
  image?: string;
  /** Sub-group label within a section (e.g. Cambridge collection name).
   *  Consecutive items with the same group render under one label. */
  group?: string;
  /** Manufacturer / product line (e.g. "Cambridge — Sherwood", "Pine Hall Brick") */
  brand?: string;
  /** Where we source it (e.g. "Hilltop Block", "Rock Products") */
  supplier?: string;
  /** Available colors — hex chips or text pills */
  colors?: ColorOption[];
  /** Small-print note under the colors (special orders, regional availability) */
  colorNote?: string;
  /** Free-form feature pills (e.g. "Permeable / eco", "Up to 4 ft") */
  tags?: string[];
}

export interface CatalogSection {
  /** Anchor id for in-page navigation */
  id: string;
  title: string;
  subtitle?: string;
  /** Supplier line shown in the section header (format B pages) */
  supplier?: string;
  /** Gradient colors for the section header band (format B pages) */
  accentFrom?: string;
  accentTo?: string;
  items: CatalogItem[];
}

export interface CatalogCategory {
  /** URL segment and image folder name */
  id: string;
  title: string;
  tagline: string;
  description: string;
  /** Small disclaimer banner under the hero (e.g. supplier sourcing note) */
  note?: string;
  /** When false, cards without a photo render as text cards instead of
   *  showing the leaf placeholder (used for the imageless paver catalog). */
  showPhotoPlaceholder?: boolean;
  sections: CatalogSection[];
}
