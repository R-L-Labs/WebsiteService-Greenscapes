// --------------------------------------------------------------------------
// Fruit Tree Catalog data
//
// TO ADD an item: copy any { ... } block below and edit the fields.
// TO REMOVE an item: delete its block.
// Card photos live in public/images/catalog/fruit-trees/<slug>.jpg
// — `slug` is the image filename. Add `image: '/some/path.jpg'` to override.
// Prices stay hidden on the site while `showPrices` is false in config.ts.
// --------------------------------------------------------------------------
import type { CatalogCategory } from './types';

export const fruitTrees: CatalogCategory = {
  id: "fruit-trees",
  title: "Fruit Tree Catalog",
  tagline: "Edible landscape selections for the home orchard",
  description: "Apples, pears, peaches, figs, plus berries and vines — cold-hardy varieties chosen for New Jersey.",
  sections: [
    {
      id: "trees",
      title: "Fruit Trees",
      subtitle: "Regular · Deluxe · Premium — landscape staples, ordered by grade",
      items: [
        { name: "Brown Turkey Fig", slug: "brown-turkey-fig", size: "5 gal.", grade: "deluxe", description: "Reliable sweet figs, cold hardy for NJ", sun: "Full Sun", water: "Low-Moderate", deer: "occasional", matureSize: "10-15' H x 10-15' W", price: 59 },
        { name: "Chicago Hardy Fig", slug: "chicago-hardy-fig", size: "5 gal.", grade: "deluxe", description: "Extra cold-tolerant, heavy producer", sun: "Full Sun", water: "Low-Moderate", deer: "occasional", matureSize: "6-10' H x 6-10' W", price: 59 },
        { name: "Apple 'Gala'", slug: "apple-gala", size: "5-6 ft", grade: "deluxe", description: "Sweet, reliable, good pollinator", sun: "Full Sun", water: "Moderate", deer: "frequent", matureSize: "10-12' H x 10-12' W", price: 79 },
        { name: "Apple 'Honeycrisp'", slug: "apple-honeycrisp", size: "5-6 ft", grade: "deluxe", description: "Crisp sweet-tart; needs a pollinator", sun: "Full Sun", water: "Moderate", deer: "frequent", matureSize: "12-15' H x 12-15' W", price: 79 },
        { name: "Pear 'Bartlett'", slug: "pear-bartlett", size: "5-6 ft", grade: "deluxe", description: "Classic sweet dessert pear", sun: "Full Sun", water: "Moderate", deer: "frequent", matureSize: "12-15' H x 12-15' W", price: 79 },
        { name: "Peach 'Redhaven'", slug: "peach-redhaven", size: "5-6 ft", grade: "deluxe", description: "Freestone, heavy NJ producer", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "12-15' H x 12-15' W", price: 74 },
        { name: "Cherry 'Bing'", slug: "cherry-bing", size: "5-6 ft", grade: "deluxe", description: "Sweet dark cherries; needs pollinator", sun: "Full Sun", water: "Moderate", deer: "frequent", matureSize: "15-18' H x 15-18' W", price: 84 },
        { name: "Plum 'Methley'", slug: "plum-methley", size: "5-6 ft", grade: "deluxe", description: "Self-fertile, juicy red-purple fruit", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "10-12' H x 10-12' W", price: 74 },
      ],
    },
    {
      id: "berries",
      title: "Berries & Vines",
      subtitle: "Regular · Deluxe · Premium — small fruits & brambles",
      items: [
        { name: "Blueberry 'Patriot'", slug: "blueberry-patriot", size: "3 gal.", grade: "regular", description: "Cold hardy, large sweet berries", sun: "Full Sun–Part Shade", water: "Moderate-High", deer: "occasional", matureSize: "3-4' H x 3-4' W", price: 34 },
        { name: "Blueberry 'Bluecrop'", slug: "blueberry-bluecrop", size: "3 gal.", grade: "regular", description: "Classic highbush, heavy summer crop", sun: "Full Sun–Part Shade", water: "Moderate-High", deer: "occasional", matureSize: "4-6' H x 4-6' W", price: 34 },
        { name: "Raspberry 'Heritage'", slug: "raspberry-heritage", size: "2 gal.", grade: "regular", description: "Everbearing red, fall harvest", sun: "Full Sun", water: "Moderate", deer: "frequent", matureSize: "4-5' H, spreading habit", price: 24 },
        { name: "Blackberry 'Triple Crown'", slug: "blackberry-triple-crown", size: "2 gal.", grade: "regular", description: "Thornless, large sweet fruit", sun: "Full Sun", water: "Moderate", deer: "frequent", matureSize: "5-6' H x 6-8' W", price: 24 },
        { name: "Concord Grape Vine", slug: "concord-grape-vine", size: "2 gal.", grade: "regular", description: "Classic slip-skin, arbor favorite", sun: "Full Sun", water: "Low-Moderate", deer: "occasional", matureSize: "15-20' on trellis/arbor", price: 29 },
        { name: "Strawberry 'Ozark Beauty'", slug: "strawberry-ozark-beauty", size: "1 qt.", grade: "regular", description: "Everbearing, great for borders/pots", sun: "Full Sun", water: "Moderate-High", deer: "frequent", matureSize: "6-8\" H, spreading habit", price: 8 },
        { name: "Elderberry", slug: "elderberry", size: "3 gal.", grade: "regular", description: "Native, flowers and berries for jam", sun: "Full Sun–Part Shade", water: "Moderate-High", deer: "resistant", matureSize: "6-10' H x 6-10' W", price: 36 },
      ],
    },
  ],
};
