// --------------------------------------------------------------------------
// Tree Catalog data
//
// TO ADD an item: copy any { ... } block below and edit the fields.
// TO REMOVE an item: delete its block.
// Card photos live in public/images/catalog/trees/<slug>.jpg
// — `slug` is the image filename. Add `image: '/some/path.jpg'` to override.
// Prices stay hidden on the site while `showPrices` is false in config.ts.
// --------------------------------------------------------------------------
import type { CatalogCategory } from './types';

export const trees: CatalogCategory = {
  id: "trees",
  title: "Tree Catalog",
  tagline: "Decorative & ornamental trees for South Jersey properties",
  description: "Japanese maples, flowering cherries, evergreen privacy trees, and more — professionally planted by Greenscapes.",
  sections: [
    {
      id: "trees",
      title: "Trees",
      subtitle: "Regular · Deluxe · Premium — decorative & ornamental, ordered by grade",
      items: [
        { name: "Bloodgood Japanese Maple", slug: "bloodgood-japanese-maple", size: "6-7 ft. B&B", grade: "premium", description: "Deep red palmate leaves, upright form", sun: "Part Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "15-20' H x 15-20' W", price: 249 },
        { name: "Crimson Queen Japanese Maple", slug: "crimson-queen-japanese-maple", size: "3-4 ft.", grade: "premium", description: "Weeping, lace-leaf, rich red", sun: "Part Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "8-10' H x 10-12' W", price: 219 },
        { name: "Coral Bark Japanese Maple", slug: "coral-bark-japanese-maple", size: "5-6 ft.", grade: "premium", description: "Coral-red winter stems, gold fall", sun: "Part Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "15-20' H x 15-20' W", price: 239 },
        { name: "Emerald Green Arborvitae", slug: "emerald-green-arborvitae", size: "5-6 ft.", grade: "deluxe", description: "Narrow evergreen privacy column", sun: "Full Sun–Part Shade", water: "Moderate", deer: "occasional", matureSize: "12-14' H x 3-4' W", price: 89 },
        { name: "Green Giant Arborvitae", slug: "green-giant-arborvitae", size: "5-6 ft.", grade: "deluxe", description: "Fast-growing screening evergreen", sun: "Full Sun–Part Shade", water: "Moderate", deer: "occasional", matureSize: "20-40' H x 12-15' W", price: 79 },
        { name: "Weeping Cherry", slug: "weeping-cherry", size: "6-7 ft.", grade: "premium", description: "Cascading pink spring blooms", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "15-20' H x 15-20' W", price: 189 },
        { name: "Kwanzan Cherry", slug: "kwanzan-cherry", size: "6-7 ft. B&B", grade: "deluxe", description: "Double-pink flowering canopy tree", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "15-25' H x 15-25' W", price: 169 },
        { name: "Yoshino Cherry", slug: "yoshino-cherry", size: "6-7 ft. B&B", grade: "deluxe", description: "Soft white-pink early blooms", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "20-25' H x 25' W", price: 169 },
        { name: "Eastern Redbud", slug: "eastern-redbud", size: "6-7 ft. B&B", grade: "deluxe", description: "Rosy-purple spring flowers, heart leaves", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "20-30' H x 25-35' W", price: 149 },
        { name: "Kousa Dogwood", slug: "kousa-dogwood", size: "6-7 ft. B&B", grade: "premium", description: "White summer bracts, red fall berries", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "15-20' H x 15-20' W", price: 179 },
        { name: "Pink Dogwood", slug: "pink-dogwood", size: "5-6 ft. B&B", grade: "deluxe", description: "Classic pink spring bracts", sun: "Part Sun–Part Shade", water: "Moderate", deer: "occasional", matureSize: "15-20' H x 15-20' W", price: 159 },
        { name: "Crape Myrtle", slug: "crape-myrtle", size: "5-6 ft.", grade: "deluxe", description: "Long summer bloom, showy bark", sun: "Full Sun", water: "Low-Moderate", deer: "resistant", matureSize: "15-20' H x 10-15' W", price: 99 },
        { name: "Star Magnolia", slug: "star-magnolia", size: "4-5 ft.", grade: "deluxe", description: "Early star-shaped white flowers", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "15-20' H x 10-15' W", price: 119 },
        { name: "Saucer Magnolia", slug: "saucer-magnolia", size: "5-6 ft. B&B", grade: "premium", description: "Large pink-purple spring cups", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "20-25' H x 20-25' W", price: 159 },
        { name: "Autumn Blaze Maple", slug: "autumn-blaze-maple", size: "7-8 ft. B&B", grade: "deluxe", description: "Fast shade, brilliant red fall", sun: "Full Sun", water: "Moderate", deer: "resistant", matureSize: "40-50' H x 30-40' W", price: 139 },
        { name: "River Birch", slug: "river-birch", size: "7-8 ft.", grade: "deluxe", description: "Peeling bark, clump form", sun: "Full Sun–Part Shade", water: "Moderate-High", deer: "resistant", matureSize: "40-50' H x 25-35' W", price: 109 },
        { name: "Colorado Blue Spruce", slug: "colorado-blue-spruce", size: "5-6 ft. B&B", grade: "premium", description: "Silver-blue evergreen specimen", sun: "Full Sun", water: "Moderate", deer: "resistant", matureSize: "30-60' H x 10-20' W", price: 179 },
        { name: "Weeping Blue Atlas Cedar", slug: "weeping-blue-atlas-cedar", size: "5 ft.", grade: "premium", description: "Sculptural weeping blue evergreen", sun: "Full Sun", water: "Low-Moderate", deer: "resistant", matureSize: "10-15' H x 10-15' W", price: 299 },
        { name: "Skyrocket Juniper", slug: "skyrocket-juniper", size: "5-6 ft.", grade: "deluxe", description: "Narrow blue-green vertical accent", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "15-20' H x 2-3' W", price: 79 },
        { name: "Thundercloud Plum", slug: "thundercloud-plum", size: "6-7 ft. B&B", grade: "deluxe", description: "Purple foliage, pink spring blooms", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "15-20' H x 15-20' W", price: 129 },
      ],
    },
  ],
};
