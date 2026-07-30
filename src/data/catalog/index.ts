// Barrel export + master list of catalogs (drives nav, index page, and footer)
import { trees } from './trees';
import { shrubs } from './shrubs';
import { fruitTrees } from './fruit-trees';
import { stoneMulch } from './stone-mulch';
import type { CatalogCategory } from './types';

export { trees, shrubs, fruitTrees, stoneMulch };
export { showPrices } from './config';
export type { CatalogCategory, CatalogSection, CatalogItem, Grade, DeerRating } from './types';

export interface CatalogNavEntry {
  category: CatalogCategory;
  href: string;
  /** Short label for nav menus */
  label: string;
  /** Card image on the /catalog index page */
  coverImage: string;
}

export const catalogList: CatalogNavEntry[] = [
  {
    category: trees,
    href: '/catalog/trees',
    label: 'Trees',
    coverImage: '/images/catalog/trees/bloodgood-japanese-maple.webp',
  },
  {
    category: shrubs,
    href: '/catalog/shrubs',
    label: 'Shrubs',
    coverImage: '/images/catalog/shrubs/endless-summer-hydrangea.webp',
  },
  {
    category: fruitTrees,
    href: '/catalog/fruit-trees',
    label: 'Fruit Trees & Berries',
    coverImage: '/images/catalog/fruit-trees/apple-honeycrisp.webp',
  },
  {
    category: stoneMulch,
    href: '/catalog/stone-mulch',
    label: 'Stone & Mulch',
    coverImage: '/images/catalog/stone-mulch/delaware-river-stone.webp',
  },
];
