// --------------------------------------------------------------------------
// Shrub Catalog data
//
// TO ADD an item: copy any { ... } block below and edit the fields.
// TO REMOVE an item: delete its block.
// Card photos live in public/images/catalog/shrubs/<slug>.jpg
// — `slug` is the image filename. Add `image: '/some/path.jpg'` to override.
// Prices stay hidden on the site while `showPrices` is false in config.ts.
// --------------------------------------------------------------------------
import type { CatalogCategory } from './types';

export const shrubs: CatalogCategory = {
  id: "shrubs",
  title: "Shrub Catalog",
  tagline: "Premium nursery stock for every property we service",
  description: "Boxwoods, hydrangeas, hollies, and flowering shrubs — full-size and dwarf varieties for beds and borders.",
  sections: [
    {
      id: "shrubs",
      title: "Shrubs",
      subtitle: "Regular · Deluxe · Premium — landscape staples, ordered by grade",
      items: [
        { name: "Green Velvet Boxwood", slug: "green-velvet-boxwood", size: "3 gal.", grade: "deluxe", description: "Rounded evergreen, holds color through winter", sun: "Full Sun–Part Shade", water: "Low", deer: "resistant", matureSize: "3-4' H x 3-4' W", price: 59 },
        { name: "Winter Gem Boxwood", slug: "winter-gem-boxwood", size: "3 gal.", grade: "regular", description: "Compact, hardy, glossy green foliage", sun: "Full Sun–Part Shade", water: "Low", deer: "resistant", matureSize: "3-4' H x 3-4' W", price: 39 },
        { name: "Endless Summer Hydrangea", slug: "endless-summer-hydrangea", size: "3 gal.", grade: "deluxe", description: "Reblooming mophead, blue to pink blooms", sun: "Part Sun–Part Shade", water: "Moderate-High", deer: "resistant", matureSize: "3-5' H x 3-5' W", price: 49 },
        { name: "Limelight Hydrangea", slug: "limelight-hydrangea", size: "5 gal.", grade: "deluxe", description: "Lime-green panicles aging to pink", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "6-8' H x 6-8' W", price: 65 },
        { name: "Oakleaf Hydrangea", slug: "oakleaf-hydrangea", size: "3 gal.", grade: "deluxe", description: "Bold foliage, cone blooms, fall color", sun: "Part Shade", water: "Moderate", deer: "resistant", matureSize: "6-8' H x 6-8' W", price: 54 },
        { name: "Knock Out Rose", slug: "knock-out-rose", size: "3 gal.", grade: "regular", description: "Season-long blooms, disease resistant", sun: "Full Sun", water: "Moderate", deer: "frequent", matureSize: "3-4' H x 3-4' W", price: 34 },
        { name: "Otto Luyken Laurel", slug: "otto-luyken-laurel", size: "3 gal.", grade: "regular", description: "Low evergreen, white spring spikes", sun: "Full Sun–Shade", water: "Moderate", deer: "resistant", matureSize: "3-4' H x 4-6' W", price: 38 },
        { name: "Schip Laurel", slug: "schip-laurel", size: "3 gal.", grade: "deluxe", description: "Fast privacy screen, glossy evergreen", sun: "Full Sun–Shade", water: "Moderate", deer: "resistant", matureSize: "8-10' H x 5-6' W", price: 49 },
        { name: "Rose of Sharon", slug: "rose-of-sharon", size: "3 gal.", grade: "regular", description: "Tall summer bloomer, tropical-look flowers", sun: "Full Sun", water: "Low-Moderate", deer: "occasional", matureSize: "8-10' H x 4-6' W", price: 36 },
        { name: "Forsythia", slug: "forsythia", size: "3 gal.", grade: "regular", description: "Early yellow spring color, fast growing", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "6-8' H x 6-8' W", price: 29 },
        { name: "Butterfly Bush", slug: "butterfly-bush", size: "3 gal.", grade: "regular", description: "Fragrant spikes, pollinator magnet", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "5-6' H x 5-6' W", price: 34 },
        { name: "Ninebark 'Diabolo'", slug: "ninebark-diabolo", size: "3 gal.", grade: "deluxe", description: "Deep burgundy foliage, arching form", sun: "Full Sun–Part Shade", water: "Low-Moderate", deer: "resistant", matureSize: "6-8' H x 4-6' W", price: 44 },
        { name: "Red Twig Dogwood", slug: "red-twig-dogwood", size: "3 gal.", grade: "regular", description: "Bright red winter stems", sun: "Full Sun–Part Shade", water: "Moderate", deer: "occasional", matureSize: "6-8' H x 6-8' W", price: 39 },
        { name: "Viburnum 'Cardinal Candy'", slug: "viburnum-cardinal-candy", size: "3 gal.", grade: "deluxe", description: "Spring flowers, brilliant red berries", sun: "Full Sun–Part Shade", water: "Moderate", deer: "occasional", matureSize: "5-6' H x 5-6' W", price: 47 },
        { name: "Weigela 'Wine & Roses'", slug: "weigela-wine-and-roses", size: "3 gal.", grade: "deluxe", description: "Wine foliage, rosy trumpet blooms", sun: "Full Sun", water: "Low-Moderate", deer: "resistant", matureSize: "4-5' H x 4-5' W", price: 44 },
        { name: "Spirea 'Goldflame'", slug: "spirea-goldflame", size: "2 gal.", grade: "regular", description: "Golden foliage, pink summer flowers", sun: "Full Sun–Part Shade", water: "Low-Moderate", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 28 },
        { name: "Inkberry Holly", slug: "inkberry-holly", size: "3 gal.", grade: "deluxe", description: "Native evergreen, boxwood alternative", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "5-6' H x 5-6' W", price: 42 },
        { name: "Blue Holly 'Blue Princess'", slug: "blue-holly-blue-princess", size: "3 gal.", grade: "deluxe", description: "Glossy evergreen, red winter berries", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "6-8' H x 8-10' W", price: 54 },
        { name: "Andromeda (Pieris)", slug: "andromeda-pieris", size: "3 gal.", grade: "premium", description: "Cascading spring flowers, evergreen", sun: "Part Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "3-4' H x 3-4' W", price: 69 },
        { name: "Rhododendron", slug: "rhododendron", size: "5 gal.", grade: "premium", description: "Large spring blooms, broadleaf evergreen", sun: "Part Shade", water: "Moderate", deer: "frequent", matureSize: "4-6' H x 4-6' W", price: 89 },
      ],
    },
    {
      id: "dwarf-shrubs",
      title: "Dwarf Shrubs",
      subtitle: "Regular · Deluxe · Premium — compact selections for tight spaces",
      items: [
        { name: "Baby Gem Boxwood", slug: "baby-gem-boxwood", size: "2 gal.", grade: "regular", description: "Tidy dwarf globe, minimal pruning", sun: "Full Sun–Part Shade", water: "Low", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 34 },
        { name: "Sprinter Boxwood", slug: "sprinter-boxwood", size: "2 gal.", grade: "deluxe", description: "Fast dwarf, bright new growth", sun: "Full Sun–Part Shade", water: "Low", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 42 },
        { name: "Little Lime Hydrangea", slug: "little-lime-hydrangea", size: "3 gal.", grade: "deluxe", description: "Dwarf Limelight, green-to-pink panicles", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "3-5' H x 3-5' W", price: 49 },
        { name: "Bobo Hydrangea", slug: "bobo-hydrangea", size: "3 gal.", grade: "deluxe", description: "Compact, smothered in white blooms", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 47 },
        { name: "Gold Mound Spirea", slug: "gold-mound-spirea", size: "2 gal.", grade: "regular", description: "Golden mound, pink flowers", sun: "Full Sun–Part Shade", water: "Low-Moderate", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 26 },
        { name: "Little Princess Spirea", slug: "little-princess-spirea", size: "2 gal.", grade: "regular", description: "Mounded, rosy-pink summer bloom", sun: "Full Sun–Part Shade", water: "Low-Moderate", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 26 },
        { name: "Dwarf Fothergilla", slug: "dwarf-fothergilla", size: "2 gal.", grade: "deluxe", description: "Bottlebrush blooms, vivid fall color", sun: "Part Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 44 },
        { name: "Cityline Hydrangea", slug: "cityline-hydrangea", size: "3 gal.", grade: "deluxe", description: "Compact mophead for small beds", sun: "Part Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 46 },
        { name: "Dwarf Alberta Spruce", slug: "dwarf-alberta-spruce", size: "3 gal.", grade: "deluxe", description: "Dense cone evergreen, slow growing", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "6-8' H x 3-4' W", price: 54 },
        { name: "Gem Box Inkberry", slug: "gem-box-inkberry", size: "2 gal.", grade: "deluxe", description: "Dwarf native, boxwood look", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 44 },
        { name: "Little Henry Sweetspire", slug: "little-henry-sweetspire", size: "2 gal.", grade: "regular", description: "White summer spikes, red fall color", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 36 },
        { name: "Fire Light Tidbit Hydrangea", slug: "fire-light-tidbit-hydrangea", size: "2 gal.", grade: "premium", description: "Tiny panicle, red-to-white blooms", sun: "Full Sun–Part Shade", water: "Moderate", deer: "resistant", matureSize: "1.5-2.5' H x 1.5-2.5' W", price: 52 },
        { name: "Double Play Spirea", slug: "double-play-spirea", size: "2 gal.", grade: "regular", description: "Colorful foliage and flowers", sun: "Full Sun–Part Shade", water: "Low-Moderate", deer: "resistant", matureSize: "2-3' H x 2-3' W", price: 29 },
        { name: "Dwarf Boxwood 'Morris Midget'", slug: "dwarf-boxwood-morris-midget", size: "1 gal.", grade: "deluxe", description: "Very slow, tiny evergreen mound", sun: "Full Sun–Part Shade", water: "Low", deer: "resistant", matureSize: "1-2' H x 1-2' W", price: 39 },
        { name: "Lo & Behold Butterfly Bush", slug: "lo-and-behold-butterfly-bush", size: "2 gal.", grade: "regular", description: "Dwarf, non-invasive, pollinator draw", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "1.5-2.5' H x 2-3' W", price: 32 },
      ],
    },
  ],
};
