// --------------------------------------------------------------------------
// Flower Catalog data
//
// TO ADD an item: copy any { ... } block below and edit the fields.
// TO REMOVE an item: delete its block.
// Card photos live in public/images/catalog/flowers/<slug>.webp
// — `slug` is the image filename. Add `image: '/some/path.jpg'` to override.
// Prices stay hidden on the site while `showPrices` is false in config.ts.
// --------------------------------------------------------------------------
import type { CatalogCategory } from './types';

export const flowers: CatalogCategory = {
  id: "flowers",
  title: "Flower Catalog",
  tagline: "Annuals & perennials for season-long color and lasting curb appeal",
  description: "Annual color for beds, pots, and baskets plus reliable perennials that return year after year — planted and maintained by Greenscapes.",
  sections: [
    {
      id: "annuals",
      title: "Annuals",
      subtitle: "Season-long color from spring through frost",
      items: [
        { name: "Annual Assorted", slug: "annual-assorted", size: "6\" Pot", grade: "regular", description: "Grower's choice mixed annuals for quick color fills in beds and containers.", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "6-12\"", price: 2.49 },
        { name: "Marigold — Lemon Gem", slug: "marigold-lemon-gem", size: "6\" Pot", grade: "regular", description: "Fine, fern-like foliage with masses of small citrus-yellow blooms all season.", sun: "Full Sun", water: "Low-Moderate", deer: "resistant", matureSize: "8-10\"", price: 4.99 },
        { name: "Celosia (Feather/Plume) — Intenz Assorted", slug: "celosia-intenz", size: "6\" Pot / 9\" Terra Pot", grade: "deluxe", description: "Bold plumed flower spikes in hot pinks and purples; a striking bed accent.", sun: "Full Sun", water: "Moderate", deer: "resistant", matureSize: "12-18\"", priceRange: "$6.99 – $14.99" },
        { name: "Zinnia — Assorted Colors", slug: "zinnia-assorted", size: "9\" Terra Pot", grade: "deluxe", description: "Reliable summer classic with bright, long-lasting blooms that draw butterflies.", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "18-24\"", price: 16.99 },
        { name: "Petunia — Assorted Colors", slug: "petunia-assorted", size: "9\" Terra Pot / 10\" Hanging Basket", grade: "deluxe", description: "Non-stop trailing color for beds, pots, and hanging baskets all summer long.", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "6-12\" trailing", priceRange: "$15.99 – $25.99" },
        { name: "Vinca — Assorted Colors", slug: "vinca-assorted", size: "9\" Terra Pot / 10\" Hanging Basket", grade: "deluxe", description: "Heat- and drought-tough bloomer that thrives through the hottest part of summer.", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "10-14\"", priceRange: "$15.99 – $25.99" },
        { name: "Lantana — Assorted Colors", slug: "lantana-assorted", size: "6-Pack / 8\" & 9\" Terra Pot / 10\" Hanging Basket", grade: "regular", description: "Clusters of tiny multicolor blooms attract pollinators and shrug off heat.", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "12-24\"", priceRange: "$5.99 – $25.99" },
        { name: "Calibrachoa (Million Bells) — Assorted", slug: "calibrachoa-assorted", size: "9\" Terra Pot / 10\" Hanging Basket", grade: "deluxe", description: "Miniature petunia-like blooms in a cascading habit, perfect for baskets.", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "6-8\" trailing", priceRange: "$15.99 – $25.99" },
        { name: "Salvia — Assorted Colors", slug: "salvia-assorted", size: "9\" Terra Pot", grade: "deluxe", description: "Upright flower spikes that draw hummingbirds and bloom steadily till frost.", sun: "Full Sun", water: "Moderate", deer: "resistant", matureSize: "14-20\"", price: 15.99 },
        { name: "Portulaca — Assorted Colors", slug: "portulaca-assorted", size: "9\" Terra Pot / 10\" Hanging Basket", grade: "deluxe", description: "Succulent, drought-proof groundcover bloomer for hot, dry sunny spots.", sun: "Full Sun", water: "Very Low", deer: "resistant", matureSize: "4-8\"", priceRange: "$15.99 – $25.99" },
        { name: "Scaevola", slug: "scaevola", size: "9\" Terra Pot", grade: "deluxe", description: "Fan-shaped blue-purple flowers on a mounding, trailing habit for pots and beds.", sun: "Full Sun", water: "Moderate", deer: "resistant", matureSize: "8-12\"", price: 15.99 },
        { name: "Helianthus — Sunfinity Double Yellow", slug: "helianthus-sunfinity", size: "9\" Pot / 12\" Terra Pot", grade: "premium", description: "A continuously branching mini sunflower that reblooms non-stop all summer.", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "24-30\"", priceRange: "$15.99 – $29.99" },
        { name: "Canna — Cannova® Assorted", slug: "canna-cannova", size: "12\" Terra Pot", grade: "premium", description: "Bold tropical foliage and vivid blooms for a dramatic focal point in beds or pots.", sun: "Full Sun", water: "High", deer: "occasional", matureSize: "3-4 ft", price: 34.99 },
        { name: "Pennisetum Rubrum — Purple Fountain Grass", slug: "pennisetum-rubrum", size: "1 Gallon Pot / 9\" Terra Pot", grade: "deluxe", description: "Arching burgundy foliage adds movement and texture as a thriller in any planting.", sun: "Full Sun", water: "Moderate", deer: "resistant", matureSize: "3-4 ft", priceRange: "$12.99 – $14.99" },
        { name: "Combo Sun Planter — Assorted Annuals", slug: "combo-sun-planter", size: "20\" Terra Pot", grade: "premium", description: "Ready-made mixed planter with thriller, filler, and spiller for instant curb appeal.", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "18-24\"", price: 149.99 },
      ],
    },
    {
      id: "perennials",
      title: "Perennials",
      subtitle: "Reliable color that returns year after year",
      items: [
        { name: "Achillea (Yarrow) — Strawberry Seduction", slug: "achillea-strawberry-seduction", size: "2 Gallon Pot", grade: "deluxe", description: "Flat-topped cherry-red flower clusters on ferny, drought-tough foliage.", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "18-24\"", price: 27.99 },
        { name: "Agastache (Hyssop) — Mexicana Summerlong Coral", slug: "agastache-summerlong-coral", size: "1 Gallon Pot", grade: "deluxe", description: "Fragrant, tubular coral blooms beloved by hummingbirds and bees all summer.", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "18-24\"", price: 24.99 },
        { name: "Ajuga (Bugleweed) — Chocolate Chip", slug: "ajuga-chocolate-chip", size: "1 Gallon Pot", grade: "regular", description: "Low, spreading bronze-green groundcover with small blue flower spikes in spring.", sun: "Part Sun", water: "Moderate", deer: "resistant", matureSize: "2-4\"", price: 16.99 },
        { name: "Allium (Ornamental Onion) — Millenium", slug: "allium-millenium", size: "1 Gallon Pot", grade: "deluxe", description: "Globes of rosy-purple blooms atop grassy foliage; a pollinator favorite.", sun: "Full Sun", water: "Low-Moderate", deer: "resistant", matureSize: "15-20\"", price: 19.99 },
        { name: "Amsonia — Blue Ice", slug: "amsonia-blue-ice", size: "1 Gallon Pot", grade: "regular", description: "Clusters of star-shaped blue flowers in spring with fine foliage and fall color.", sun: "Full Sun", water: "Moderate", deer: "resistant", matureSize: "12-15\"", price: 17.99 },
        { name: "Asclepias (Milkweed) — Incarnata", slug: "asclepias-incarnata", size: "1 Quart Pot / 1 Gallon Pot", grade: "regular", description: "Native swamp milkweed with pink blooms; essential host plant for monarchs.", sun: "Full Sun", water: "High", deer: "resistant", matureSize: "3-4 ft", priceRange: "$11.99 – $22.99" },
        { name: "Aster — Wood's Purple", slug: "aster-woods-purple", size: "1 Quart Pot", grade: "regular", description: "Compact mounds smothered in violet-purple daisies from late summer to frost.", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "12-18\"", price: 10.99 },
        { name: "Astilbe — Visions in Red", slug: "astilbe-visions-in-red", size: "2 Gallon Pot", grade: "premium", description: "Plumes of deep raspberry-red flowers over glossy foliage; thrives in shade.", sun: "Part Shade", water: "High", deer: "resistant", matureSize: "14-18\"", price: 29.99 },
        { name: "Baptisia (False Indigo) — Pink Truffles", slug: "baptisia-pink-truffles", size: "1 Gallon Pot", grade: "premium", description: "Long-lived, shrub-like perennial with dusky pink spring spikes and blue-green foliage.", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "3 ft", price: 29.99 },
        { name: "Coreopsis (Tickseed) — Zagreb", slug: "coreopsis-zagreb", size: "1 Gallon Pot", grade: "regular", description: "Fine, thread-like foliage covered in bright golden-yellow blooms all summer.", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "12-18\"", price: 17.99 },
        { name: "Delphinium — Guardian White", slug: "delphinium-guardian-white", size: "1 Quart Pot", grade: "regular", description: "Tall, stately spires of pure white bloom for the back of a sunny border.", sun: "Full Sun", water: "Moderate", deer: "occasional", matureSize: "3-4 ft", price: 11.99 },
        { name: "Dianthus (Pinks) — Cherry Vanilla", slug: "dianthus-cherry-vanilla", size: "1 Gallon Pot", grade: "deluxe", description: "Fragrant, frilly bicolor blooms over neat blue-green foliage mats.", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "8-10\"", price: 23.99 },
        { name: "Digitalis (Foxglove) — Pink Panther", slug: "digitalis-pink-panther", size: "1 Gallon Pot", grade: "deluxe", description: "Dramatic upright spires densely packed with spotted pink bells.", sun: "Part Sun", water: "Moderate", deer: "resistant", matureSize: "2-3 ft", price: 22.99 },
        { name: "Echinacea (Coneflower) — Cheyenne Spirit", slug: "echinacea-cheyenne-spirit", size: "1 Gallon Pot / 2 Gallon Pot", grade: "deluxe", description: "A rainbow mix of daisy blooms on sturdy stems; a top pollinator draw.", sun: "Full Sun", water: "Low-Moderate", deer: "occasional", matureSize: "18-24\"", priceRange: "$21.99 – $29.99" },
        { name: "Echinacea (Coneflower) — Sombrero® Sangrita", slug: "echinacea-sombrero-sangrita", size: "1 Gallon Pot", grade: "premium", description: "Rich burgundy-red blooms on a compact, heavy-flowering habit.", sun: "Full Sun", water: "Low-Moderate", deer: "occasional", matureSize: "16-20\"", price: 27.99 },
        { name: "Fern — Maidenhair", slug: "fern-maidenhair", size: "1 Gallon Pot", grade: "deluxe", description: "Delicate, lacy fronds on wiry black stems for a soft shade woodland look.", sun: "Shade", water: "High", deer: "resistant", matureSize: "12-18\"", price: 24.99 },
        { name: "Gaillardia (Blanket Flower) — Arizona Sun", slug: "gaillardia-arizona-sun", size: "1 Quart Pot", grade: "regular", description: "Fiery red-and-yellow daisies over a heat- and drought-tough compact mound.", sun: "Full Sun", water: "Low", deer: "resistant", matureSize: "10-12\"", price: 10.99 },
      ],
    },
  ],
};
