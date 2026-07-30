// --------------------------------------------------------------------------
// Stone & Mulch Catalog data
//
// TO ADD an item: copy any { ... } block below and edit the fields.
// TO REMOVE an item: delete its block.
// Card photos live in public/images/catalog/stone-mulch/<slug>.jpg
// — `slug` is the image filename. Add `image: '/some/path.jpg'` to override.
// Prices stay hidden on the site while `showPrices` is false in config.ts.
// --------------------------------------------------------------------------
import type { CatalogCategory } from './types';

export const stoneMulch: CatalogCategory = {
  id: "stone-mulch",
  title: "Stone & Mulch Catalog",
  tagline: "Premium bulk materials for every property we service",
  description: "Bulk mulch and decorative stone available for delivery and professional installation across South Jersey.",
  sections: [
    {
      id: "mulch",
      title: "Premium Mulch",
      subtitle: "Bulk mulch available for delivery & installation",
      items: [
        { name: "Cedar Mulch", slug: "cedar-mulch", size: "Bulk", description: "Naturally decay-resistant, pleasant scent" },
        { name: "Premium Hardwood Mulch", slug: "premium-hardwood-mulch", size: "Bulk", description: "Uniform look, natural light brown color" },
        { name: "Aged Bark Mulch", slug: "aged-bark-mulch", size: "Bulk", description: "All natural shredded bark, no dye needed" },
        { name: "Premium Root Mulch", slug: "premium-root-mulch", size: "Bulk", description: "Triple-shred, attractive uniform finish" },
        { name: "Brown Dyed Mulch", slug: "brown-dyed-mulch", size: "Bulk", description: "Rich brown color, long-lasting & earth-friendly" },
        { name: "Red Dyed Mulch", slug: "red-dyed-mulch", size: "Bulk", description: "Bold red color, long-lasting & earth-friendly" },
        { name: "Black Dyed Mulch", slug: "black-dyed-mulch", size: "Bulk", description: "Deep black color, long-lasting & earth-friendly" },
        { name: "Certified Playground Mulch", slug: "certified-playground-mulch", size: "Bulk", description: "Certified safe for play areas" },
      ],
    },
    {
      id: "stone",
      title: "Decorative Stone",
      subtitle: "Regular, Deluxe & Premium grades — ordered by grade, then size",
      items: [
        { name: "Dark Grey Stone", slug: "dark-grey-stone", size: "3/8\"", grade: "regular" },
        { name: "Jersey Yellow Stone", slug: "jersey-yellow-stone", size: "3/8\"", grade: "regular" },
        { name: "Red Shale Stone", slug: "red-shale-stone", size: "3/8\"", grade: "regular" },
        { name: "Dark Grey Stone", slug: "dark-grey-stone", size: "3/4\"", grade: "regular" },
        { name: "Light Grey Stone", slug: "light-grey-stone", size: "3/4\"", grade: "regular" },
        { name: "Red Shale Stone", slug: "red-shale-stone", size: "3/4\"", grade: "regular" },
        { name: "Rip Rap", slug: "rip-rap", size: "Bulk", grade: "regular" },
        { name: "Delaware River Stone", slug: "delaware-river-stone", size: "3/8\"", grade: "deluxe" },
        { name: "Delaware River Stone", slug: "delaware-river-stone", size: "3/4\"", grade: "deluxe" },
        { name: "Jersey Yellow Stone", slug: "jersey-yellow-stone", size: "3/4\"", grade: "deluxe" },
        { name: "White River Stone", slug: "white-river-stone", size: "3/4\"", grade: "deluxe" },
        { name: "Delaware River Stone", slug: "delaware-river-stone", size: "1\" - 1 1/2\"", grade: "deluxe" },
        { name: "Delaware River Stone", slug: "delaware-river-stone", size: "1\" - 3\"", grade: "deluxe" },
        { name: "White River Stone", slug: "white-river-stone", size: "1\" - 3\"", grade: "deluxe" },
        { name: "Delaware River Stone", slug: "delaware-river-stone", size: "3\" - 5\"", grade: "deluxe" },
        { name: "Delaware River Stone", slug: "delaware-river-stone", size: "5\" - 8\"", grade: "deluxe" },
        { name: "Vermont Snow", slug: "vermont-snow", size: "1/2\"", grade: "premium" },
        { name: "Vermont Snow", slug: "vermont-snow", size: "3/4\" - 1\"", grade: "premium" },
        { name: "Timberlite (Eastern Sunrise)", slug: "timberlite-eastern-sunrise", size: "1\" - 2\"", grade: "premium" },
        { name: "Goose Egg Stone", slug: "goose-egg-stone", size: "2\" - 4\"", grade: "premium" },
        { name: "Delaware River Boulders", slug: "delaware-river-boulders", size: "6\" - 20\"", grade: "premium" },
      ],
    },
  ],
};
