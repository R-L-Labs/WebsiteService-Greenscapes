// --------------------------------------------------------------------------
// Pavers, Bricks & Stone Catalog data
//
// TO ADD an item: copy any { ... } block below and edit the fields.
// TO REMOVE an item: delete its block.
// This catalog uses text cards with mini color swatches (format B) — the
// manufacturers' swatch photos are copyrighted, so each color renders as a
// small chip from `hex` (+ optional `hex2` for a two-tone blend). The hex
// values are approximations of the named colors; tweak freely.
// A photo CAN be added to any card by dropping
// public/images/catalog/pavers/<slug>.webp.
// `group` labels cluster consecutive items (e.g. Cambridge collections).
// Prices are quote-based — no price fields on purpose.
// --------------------------------------------------------------------------
import type { CatalogCategory } from './types';

export const pavers: CatalogCategory = {
  id: "pavers",
  title: "Pavers, Bricks & Stone Catalog",
  tagline: "Cambridge & Belgard pavers, wall & step systems, stair slabs, stepping stones & porch brick",
  description: "Interlocking pavers, wall and step systems, natural PA bluestone, and porch brick — professionally installed by Greenscapes.",
  note: "Sourced from Hilltop Block & Supply (Blackwood, NJ) and Rock Products, Inc. (West Deptford, NJ). Color chips are approximate representations — colors vary by region and dealer stock, and we confirm current availability and exact samples during your estimate. All pricing is quote-based.",
  showPhotoPlaceholder: false,
  sections: [
    {
      id: "cambridge",
      title: "Cambridge Pavingstones",
      subtitle: "ArmorTec® surface technology · hundreds of colors across six collections",
      supplier: "Hilltop Block & Supply",
      accentFrom: "#2f4a3d",
      accentTo: "#4a715e",
      items: [
        {
          name: "Ledgestone 3-Pc. Design Kit", slug: "ledgestone-3pc", size: "9 3/32 x 13 5/8 · 9 3/32 x 9 3/32 · 4 17/32 x 9 3/32 · 2 3/8\" thick",
          group: "Sherwood Collection", brand: "Cambridge — Sherwood", supplier: "Hilltop Block",
          description: "Classic three-piece design with a textured, natural-stone-like face — Cambridge's most versatile paver.",
          colors: [
            { name: "Bluestone Blend", hex: "#5f6f7d", hex2: "#8a99a5" }, { name: "Driftwood", hex: "#a89a85", hex2: "#7d7468" }, { name: "Limestone Quarry Blend", hex: "#b3ab9b", hex2: "#8f8878" }, { name: "Montauk Blue", hex: "#4e5d6c", hex2: "#75838f" },
            { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }, { name: "Sandstone Blend", hex: "#c4a878", hex2: "#9c8258" }, { name: "Slate", hex: "#5a6068" }, { name: "Toffee/Onyx", hex: "#a97c50", hex2: "#3d3d3d" },
          ],
          colorNote: "Plus Oceanside, Platinum, Riverbed Blend, Ruby/Onyx, Sahara/Chestnut (+Lite), Sandstone Lite, Stone Harbor, Toffee/Onyx Lite. Some colors special order only.",
        },
        {
          name: "Ledgestone XL 3-Pc. Design Kit", slug: "ledgestone-xl-3pc", size: "15 3/4 x 23 5/8 · 15 3/4 x 15 3/4 · 7 7/8 x 15 3/4",
          group: "Sherwood Collection", brand: "Cambridge — Sherwood", supplier: "Hilltop Block",
          description: "The Ledgestone pattern scaled up — large-format pieces for big patios and bold driveways.",
          colors: [
            { name: "Bluestone Blend", hex: "#5f6f7d", hex2: "#8a99a5" }, { name: "Driftwood", hex: "#a89a85", hex2: "#7d7468" }, { name: "Limestone Quarry Blue", hex: "#93a0a8", hex2: "#6f7d88" }, { name: "Oceanside", hex: "#647d80", hex2: "#8fa5a3" },
            { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }, { name: "Platinum", hex: "#b9bcbe" }, { name: "Stone Harbor", hex: "#97928a", hex2: "#6e6a63" }, { name: "Toffee/Onyx Lite", hex: "#bd9468", hex2: "#55504a" },
          ],
          colorNote: "Plus Limestone Quarry Blend, Riverbed Blend, Sahara/Chestnut (+Lite), Sandstone Blend/Lite. Some colors special order only.",
        },
        {
          name: "24 x 24 Smooth, 2\"", slug: "24x24-smooth", size: "24 x 24 x 2\" thick",
          group: "Sherwood Collection", brand: "Cambridge — Sherwood", supplier: "Hilltop Block",
          description: "A versatile modern smooth-surface slab that works on rooftops as well as patios.",
          colors: [{ name: "Coal", hex: "#454545" }, { name: "Eggshell", hex: "#e3ddd0" }, { name: "Limestone Quarry Blend", hex: "#b3ab9b", hex2: "#8f8878" }, { name: "Natural", hex: "#b5aea0" }, { name: "Platinum", hex: "#b9bcbe" }],
        },
        {
          name: "Timber Stone 4-Pc. Design Kit", slug: "timber-stone-4pc", size: "7 31/64 wide, four plank lengths · 3 1/8\" thick",
          group: "Sherwood Collection", brand: "Cambridge — Sherwood", supplier: "Hilltop Block",
          description: "Molded from natural wood planks — a grained wood look for paths and contemporary patios.",
          colors: [{ name: "Birchwood", hex: "#c9b391" }, { name: "Ironwood", hex: "#6b5a48" }],
        },
        {
          name: "Nor Stone 4-Pc. Design Kit", slug: "nor-stone-4pc", size: "Same plank sizing as Timber Stone · 3 1/8\" thick",
          group: "Sherwood Collection", brand: "Cambridge — Sherwood", supplier: "Hilltop Block",
          description: "A smooth plank-style paver, mixed into a contemporary random pattern.",
          colors: [{ name: "Driftwood", hex: "#a89a85", hex2: "#7d7468" }, { name: "Limestone Quarry Blend", hex: "#b3ab9b", hex2: "#8f8878" }, { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }],
        },
        {
          name: "River Rock", slug: "cambridge-river-rock", size: "7 various sizes",
          group: "Sherwood Collection", brand: "Cambridge — Sherwood", supplier: "Hilltop Block",
          description: "Seven different stone sizes mixed together for a natural riverbed look in various applications.",
          colors: [{ name: "Coal", hex: "#454545" }, { name: "Limestone Quarry Blend", hex: "#b3ab9b", hex2: "#8f8878" }, { name: "Mocha", hex: "#7a624e" }, { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }],
        },
        {
          name: "6 x 9", slug: "roundtable-6x9", size: "6 x 9",
          group: "RoundTable Collection", brand: "Cambridge — RoundTable", supplier: "Hilltop Block",
          description: "A slightly dimpled surface gives these pavers a natural look and feel.",
          colors: [
            { name: "Coal", hex: "#454545" }, { name: "Mocha", hex: "#7a624e" }, { name: "Onyx", hex: "#3d3d3d" }, { name: "Ruby/Onyx", hex: "#8d4a3a", hex2: "#3d3d3d" },
            { name: "Sahara/Chestnut", hex: "#c2a173", hex2: "#7a5638" }, { name: "Sandstone Blend", hex: "#c4a878", hex2: "#9c8258" },
          ],
          colorNote: "Plus Bluestone Blend, Limestone Quarry Blend, Onyx/Natural, Sahara/Chestnut Lite, Toffee/Onyx(+Lite).",
        },
        {
          name: "6 x 6", slug: "roundtable-6x6", size: "6 x 6",
          group: "RoundTable Collection", brand: "Cambridge — RoundTable", supplier: "Hilltop Block",
          description: "Smaller-format companion to the 6x9, same dimpled natural surface.",
          colors: [{ name: "Coal", hex: "#454545" }, { name: "Mocha", hex: "#7a624e" }, { name: "Onyx", hex: "#3d3d3d" }, { name: "Sahara/Chestnut", hex: "#c2a173", hex2: "#7a5638" }, { name: "Toffee/Onyx", hex: "#a97c50", hex2: "#3d3d3d" }],
        },
        {
          name: "Circle Design Kit", slug: "roundtable-circle-kit", size: "Multi-piece radial kit",
          group: "RoundTable Collection", brand: "Cambridge — RoundTable", supplier: "Hilltop Block",
          description: "A complete kit for circular patio inlays, fire pit surrounds, and focal points.",
          colors: [{ name: "Coal", hex: "#454545" }, { name: "Mocha", hex: "#7a624e" }, { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }, { name: "Ruby/Onyx", hex: "#8d4a3a", hex2: "#3d3d3d" }],
        },
        {
          name: "6 x 9", slug: "kingscourt-6x9", size: "6 x 9",
          group: "KingsCourt Collection", brand: "Cambridge — KingsCourt", supplier: "Hilltop Block",
          description: "Smooth, sleek surface for a clean contemporary patio or walkway.",
          colors: [{ name: "Coal", hex: "#454545" }, { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }, { name: "Platinum", hex: "#b9bcbe" }, { name: "Ruby", hex: "#8d4a3a" }, { name: "Sahara/Chestnut", hex: "#c2a173", hex2: "#7a5638" }],
          colorNote: "Plus Mocha, Onyx, Ruby/Onyx, Sandstone Blend, Toffee/Onyx(+Lite).",
        },
        {
          name: "8 x 8", slug: "kingscourt-8x8", size: "8 x 8",
          group: "KingsCourt Collection", brand: "Cambridge — KingsCourt", supplier: "Hilltop Block",
          description: "Larger-format square in the same smooth, sleek KingsCourt style.",
          colors: [{ name: "Onyx", hex: "#3d3d3d" }, { name: "Ruby", hex: "#8d4a3a" }, { name: "Ruby/Onyx", hex: "#8d4a3a", hex2: "#3d3d3d" }, { name: "Sahara", hex: "#c2a173" }, { name: "Salmon", hex: "#c98a72" }],
        },
        {
          name: "4 x 8 Holland", slug: "kingscourt-4x8-holland", size: "4 x 8 · 2 3/8\" thick",
          group: "KingsCourt Collection", brand: "Cambridge — KingsCourt", supplier: "Hilltop Block",
          description: "Classic Holland brick-format paver, smooth and sleek finish.",
          colors: [{ name: "Coal", hex: "#454545" }, { name: "Onyx", hex: "#3d3d3d" }, { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }, { name: "Ruby", hex: "#8d4a3a" }, { name: "Ruby/Onyx", hex: "#8d4a3a", hex2: "#3d3d3d" }],
        },
        {
          name: "Cobble I", slug: "excalibur-cobble", size: "6 3/16 x 8 13/16 · 2 3/8\" thick",
          group: "Excalibur & Crusader Collections", brand: "Cambridge — Excalibur", supplier: "Hilltop Block",
          description: "Beveled edges and flat surface for a classic cobble look.",
          colors: [{ name: "Onyx", hex: "#3d3d3d" }, { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }, { name: "Ruby", hex: "#8d4a3a" }, { name: "Ruby/Onyx", hex: "#8d4a3a", hex2: "#3d3d3d" }],
        },
        {
          name: "Belgium 5-Pc. Design Kit", slug: "crusader-belgium-5pc", size: "5 sizes, 5 x 5 up to 5 x 8 1/2",
          group: "Excalibur & Crusader Collections", brand: "Cambridge — Crusader", supplier: "Hilltop Block",
          description: "Resembles the cobblestones lining old European streets; permeable-application capable.",
          colors: [{ name: "Coal", hex: "#454545" }, { name: "Limestone Quarry Blend", hex: "#b3ab9b", hex2: "#8f8878" }, { name: "Mocha", hex: "#7a624e" }, { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }],
        },
        {
          name: "Turfstone", slug: "crusader-turfstone", size: "3 1/8\" thick, open grid",
          group: "Excalibur & Crusader Collections", brand: "Cambridge — Crusader", supplier: "Hilltop Block",
          description: "Permeable grid paver — grass or gravel fills the openings to let water pass through.",
          colors: [{ name: "Natural", hex: "#b5aea0" }],
        },
        {
          name: "Bullnose", slug: "crusader-bullnose", size: "6 x 12 · 2 3/8\" thick",
          group: "Excalibur & Crusader Collections", brand: "Cambridge — Crusader", supplier: "Hilltop Block",
          description: "Smooth, timeless bullnose edge piece — a classic finishing choice for pool edges and steps.",
          colors: [{ name: "Bluestone Blend", hex: "#5f6f7d", hex2: "#8a99a5" }, { name: "Mocha", hex: "#7a624e" }, { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }, { name: "Platinum", hex: "#b9bcbe" }, { name: "Sandstone", hex: "#c4a878" }],
        },
        {
          name: "Ledgestone Cap", slug: "crusader-ledgestone-cap", size: "4 piece sizes, 12 9/16\" deep",
          group: "Excalibur & Crusader Collections", brand: "Cambridge — Crusader", supplier: "Hilltop Block",
          description: "Coping/cap piece with the same texture as Ledgestone for a matched wall-and-paver look.",
          colors: [{ name: "Bluestone Blend", hex: "#5f6f7d", hex2: "#8a99a5" }, { name: "Mocha", hex: "#7a624e" }, { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }, { name: "Platinum", hex: "#b9bcbe" }],
        },
        {
          name: "13 x 27 Cap", slug: "crusader-13x27-cap", size: "13 x 27 · 2 3/8\" thick",
          group: "Excalibur & Crusader Collections", brand: "Cambridge — Crusader", supplier: "Hilltop Block",
          description: "Sleek, modern cap piece for a clean wall or column finish.",
          colors: [{ name: "Bluestone Blend", hex: "#5f6f7d", hex2: "#8a99a5" }, { name: "Mocha", hex: "#7a624e" }, { name: "Onyx/Natural", hex: "#3d3d3d", hex2: "#b5aea0" }, { name: "Sandstone Blend", hex: "#c4a878", hex2: "#9c8258" }],
        },
      ],
    },
    {
      id: "belgard-pavers",
      title: "Belgard Pavers",
      subtitle: "Concrete paver collections with regional color blends",
      supplier: "Rock Products, Inc.",
      accentFrom: "#3d4b5c",
      accentTo: "#5f7690",
      items: [
        {
          name: "Mega-Arbel", slug: "mega-arbel", size: "Modular flagstone-look system",
          brand: "Belgard Paver Collection", supplier: "Rock Products",
          description: "Irregular flagstone-look modular paver for a natural, upscale patio surface.",
          colors: [
            { name: "Ashbury Haze", hex: "#c9b89a" }, { name: "Aspen Blend", hex: "#a89678" },
            { name: "Brittany Beige", hex: "#d9c9a8" }, { name: "Rio", hex: "#b06a4f" },
          ],
          colorNote: "Colors are region-specific; we confirm current stock and swatches with Rock Products.",
        },
        {
          name: "Old Towne Cobble", slug: "old-towne-cobble", size: "2-piece system",
          brand: "Belgard Paver Collection", supplier: "Rock Products",
          description: "Roman-era cobblestone look, 2-piece system with multiple laying patterns.",
          colors: [{ name: "Harvest Blend", hex: "#b89b6e" }, { name: "Pewter Blend", hex: "#8f8f8f" }],
          colorNote: "Colors are region-specific; we confirm current stock and swatches with Rock Products.",
        },
        {
          name: "Dimensions", slug: "dimensions", size: "Modular system",
          brand: "Belgard Paver Collection", supplier: "Rock Products",
          description: "Clean, linear modular system for a contemporary patio look.",
          tags: ["Modern patios"],
          colorNote: "Ask about the current regional color chart.",
        },
        {
          name: "Charlestone", slug: "charlestone", size: "Modular system",
          brand: "Belgard Paver Collection", supplier: "Rock Products",
          description: "Hand-cobbled stone look bringing rustic charm to any outdoor space.",
          tags: ["Rustic patios"],
          colorNote: "Ask about the current regional color chart.",
        },
        {
          name: "Brooklyn", slug: "brooklyn", size: "Modular system",
          brand: "Belgard Paver Collection", supplier: "Rock Products",
          description: "Weathered-stone look with DuraFusion technology and factory ColorTech sealant.",
          tags: ["Patios & pool decks"],
          colorNote: "Ask about the current regional color chart.",
        },
        {
          name: "Origins", slug: "origins", size: "Modular system",
          brand: "Belgard Paver Collection", supplier: "Rock Products",
          description: "Modular paver mirroring the look and texture of natural stone.",
          tags: ["Patios & decks"],
          colorNote: "Ask about the current regional color chart.",
        },
        {
          name: "32 Aqualine", slug: "aqualine-32", size: "Permeable system",
          brand: "Belgard Permeable Paver", supplier: "Rock Products",
          description: "Permeable paver system that reduces stormwater runoff without traditional drainage.",
          tags: ["Permeable / eco"],
          colorNote: "Ask about the current regional color chart.",
        },
        {
          name: "Basalt", slug: "basalt", size: "Modular sizing",
          brand: "Belgard Paver Collection", supplier: "Rock Products",
          description: "Unique texture reminiscent of volcanic rock, modular sizing for flexible layouts.",
          tags: ["Modular sizing"],
          colorNote: "Ask about the current regional color chart.",
        },
        {
          name: "Brick Stone", slug: "brick-stone", size: "Brick format",
          brand: "Belgard Paver Collection", supplier: "Rock Products",
          description: "Standard brick appearance built for durability and a classic style.",
          tags: ["Classic brick look"],
          colorNote: "Ask about the current regional color chart.",
        },
        {
          name: "Eco Cobble", slug: "eco-cobble", size: "Permeable cobble",
          brand: "Belgard Permeable Paver", supplier: "Rock Products",
          description: "Versatile permeable cobble for projects that call for sustainable drainage.",
          tags: ["Permeable / eco"],
          colorNote: "Ask about the current regional color chart.",
        },
        {
          name: "Papyrus", slug: "papyrus", size: "Modular system",
          brand: "Belgard Paver Collection", supplier: "Rock Products",
          description: "Artisan paver face modeled on hand-tooled striations with clean, modern edges.",
          tags: ["Artisan / modern"],
          colorNote: "Ask about the current regional color chart.",
        },
        {
          name: "Trilogy", slug: "trilogy", size: "3-piece system",
          brand: "Belgard Paver Collection", supplier: "Rock Products",
          description: "Three-piece paver system for imaginative patterning, in smooth or textured profiles.",
          tags: ["3-piece system"],
          colorNote: "Ask about the current regional color chart.",
        },
        {
          name: "Turfstone", slug: "belgard-turfstone", size: "Open lattice grid",
          brand: "Belgard Permeable Paver", supplier: "Rock Products",
          description: "Open lattice grid pavers with turf infill — eco-friendly and filters rainwater back into the soil.",
          tags: ["Permeable / eco"],
          colorNote: "Ask about the current regional color chart.",
        },
      ],
    },
    {
      id: "steps-walls",
      title: "Wall & Step Systems",
      subtitle: "Belgard wall systems and cap / coping stones",
      supplier: "Rock Products, Inc.",
      accentFrom: "#5a4a2e",
      accentTo: "#8a6f3f",
      items: [
        {
          name: "Belair Wall System", slug: "belair-wall", size: "Wall system",
          brand: "Belgard Wall System", supplier: "Rock Products",
          description: "Blended-color units for retaining or freestanding walls up to 3 ft — works for steps, kitchens, raised patios.",
          tags: ["Up to 3 ft"],
        },
        {
          name: "Coventry Wall System", slug: "coventry-wall", size: "Wall system, two heights",
          brand: "Belgard Wall System", supplier: "Rock Products",
          description: "Split-stone look, splittable units for clean corners, available in two heights.",
          tags: ["Split-stone look"],
        },
        {
          name: "Diamond Pro Wall System", slug: "diamond-pro-wall", size: "Wall system",
          brand: "Belgard Wall System", supplier: "Rock Products",
          description: "Rough-hewn, textured face for gravity walls up to 4 ft — built for larger projects.",
          tags: ["Up to 4 ft"],
        },
        {
          name: "Weston Stone Wall System", slug: "weston-stone-wall", size: "Wall system",
          brand: "Belgard Wall System", supplier: "Rock Products",
          description: "Double-sided, flexible system for garden walls or outdoor kitchens; straight or curved.",
          tags: ["Double-sided"],
        },
        {
          name: "Cast Stone Wall System", slug: "cast-stone-wall", size: "Wall system",
          brand: "Belgard Wall System", supplier: "Rock Products",
          description: "Chiseled natural-stone appearance with 70 distinct face patterns for straight or curved walls.",
          tags: ["70 face patterns"],
        },
        {
          name: "Melville Wall System", slug: "melville-wall", size: "Wall system",
          brand: "Belgard Wall System", supplier: "Rock Products",
          description: "Smooth face, subtle edges, double-sided unit with a matching cap for a clean modern look.",
          tags: ["Modern"],
        },
        {
          name: "Terrace Wall System", slug: "terrace-wall", size: "Medium-size blocks",
          brand: "Belgard Wall System", supplier: "Rock Products",
          description: "Medium-size blocks blending contemporary style with durability for home or commercial use.",
          tags: ["Residential & commercial"],
        },
        {
          name: "Belmont Caps", slug: "belmont-caps", size: "Large cap stones",
          brand: "Belgard Caps & Coping", supplier: "Rock Products",
          description: "Natural stone-textured cap stone in large sizes for a refined finish atop walls and steps.",
          tags: ["Walls & steps"],
        },
        {
          name: "Laguna Coping", slug: "laguna-coping", size: "Full bullnose",
          brand: "Belgard Caps & Coping", supplier: "Rock Products",
          description: "Full bullnose design, smooth polished-limestone look; large pieces mean fewer joints.",
          tags: ["Walls, pools, steps"],
        },
        {
          name: "Marina Coping", slug: "marina-coping", size: "Rounded bullnose",
          brand: "Belgard Caps & Coping", supplier: "Rock Products",
          description: "Smooth, rounded bullnose coping suited to pool edges and other outdoor features.",
          tags: ["Pools & walls"],
        },
        {
          name: "Edgestone", slug: "edgestone", size: "Low-profile border unit",
          brand: "Belgard Accessory", supplier: "Rock Products",
          description: "Low-profile border unit that defines bed lines and paver edges cleanly.",
          tags: ["Bed & paver edging"],
        },
        {
          name: "Curbstone", slug: "curbstone", size: "Raised curb unit",
          brand: "Belgard Accessory", supplier: "Rock Products",
          description: "Raised curb unit for driveway edges, planting beds, and walkway borders.",
          tags: ["Driveways & walkways"],
        },
        {
          name: "Glacier Boulders", slug: "glacier-boulders", size: "Several sizes",
          brand: "Natural Stone", supplier: "Rock Products",
          description: "Large, naturally shaped stones used to support retaining walls or stand alone as a focal accent. Several sizes available.",
          tags: ["Natural stone", "Sold by the ton"],
        },
      ],
    },
    {
      id: "stair-slabs",
      title: "Stair Step Slabs",
      subtitle: "Belgard quarry steps & PA bluestone treads",
      supplier: "Rock Products, Inc.",
      accentFrom: "#4a5c3a",
      accentTo: "#6f8a54",
      items: [
        {
          name: "Belgard Quarry Steps", slug: "belgard-quarry-steps", size: "Cut-stone step units",
          brand: "Belgard Accessory", supplier: "Rock Products",
          description: "Cut-stone step units that pair with Belgard wall systems for a finished, matched look.",
          tags: ["Matches wall systems"],
        },
        {
          name: "PA Bluestone & Flagstone — Pattern & Natural Cleft", slug: "pa-bluestone-steps", size: "Sized for treads & landings",
          brand: "Natural PA Bluestone / Flagstone", supplier: "Rock Products",
          description: "Sold by surface type (irregular, pattern-cut, natural cleft, thermal & tumbled) rather than a named \"step\" product — staff can help select pieces sized for treads and landings.",
          colors: [
            { name: "Blue", hex: "#5b7d99" }, { name: "Tan/Brown", hex: "#8a7a5a" }, { name: "Rust", hex: "#a8603f" },
            { name: "Green", hex: "#8f9e8a" }, { name: "Lilac", hex: "#9b8ca3" }, { name: "Gray", hex: "#8a8a8a" },
          ],
          colorNote: "Natural stone — color and mineral swirl varies piece to piece; view in person for exact match.",
        },
        {
          name: "Dressed Stone", slug: "dressed-stone", size: "Pre-cut standard shapes",
          brand: "Natural Stone", supplier: "Rock Products",
          description: "Treated stacking stone pre-cut to standard shapes and sizes — a common choice for step and landing pieces since it's more uniform than field stone.",
          tags: ["Natural stone", "Pre-cut sizes"],
        },
        {
          name: "Belgard Trim", slug: "belgard-trim", size: "Finishing trim pieces",
          brand: "Belgard Accessory", supplier: "Rock Products",
          description: "Finishing trim pieces used alongside quarry steps and cut stone for a completed transition edge.",
          tags: ["Step finishing"],
        },
      ],
    },
    {
      id: "stepping-stones",
      title: "Stepping Stones",
      subtitle: "Natural PA bluestone & flagstone for garden paths",
      supplier: "Rock Products, Inc.",
      accentFrom: "#3f5a52",
      accentTo: "#5e8577",
      items: [
        {
          name: "PA Bluestone & Flagstone — Irregular", slug: "pa-bluestone-irregular", size: "Irregular pieces",
          brand: "Natural PA Bluestone / Flagstone", supplier: "Rock Products",
          description: "Irregular, easy-to-split flagstone pieces — a common choice for garden paths, though not sold as a separately named \"stepping stone\" line.",
          colors: [
            { name: "Blue", hex: "#5b7d99" }, { name: "Tan/Brown", hex: "#8a7a5a" },
            { name: "Rust", hex: "#a8603f" }, { name: "Gray", hex: "#8a8a8a" },
          ],
        },
        {
          name: "Flat Stacking Stone", slug: "flat-stacking-stone", size: "Natural shapes",
          brand: "Natural Stone", supplier: "Rock Products",
          description: "Untreated stone in unique natural shapes, sourced directly from the quarry — no two pieces alike, a good fit for informal garden paths.",
          tags: ["Natural stone", "One-of-a-kind pieces"],
        },
        {
          name: "Round Field Stone", slug: "round-field-stone", size: "Natural rounded stone",
          brand: "Natural Stone", supplier: "Rock Products",
          description: "Smooth, rounded natural stone that mimics river rock — sourced from the fields and woods of Northeastern Pennsylvania.",
          tags: ["Natural stone", "Rustic look"],
        },
      ],
    },
    {
      id: "porch-bricks",
      title: "Bricks for Porches",
      subtitle: "Pine Hall Brick styles for porches & walkways",
      supplier: "Rock Products, Inc.",
      accentFrom: "#7a3b2e",
      accentTo: "#a85c42",
      items: [
        {
          name: "Classical Brick", slug: "classical-brick", size: "Standard brick",
          brand: "Pine Hall Brick", supplier: "Rock Products",
          description: "Traditional, Southern-inspired brick for a charming porch or walkway finish.",
          tags: ["Clay brick"],
        },
        {
          name: "Antique Brick", slug: "antique-brick", size: "Standard brick",
          brand: "Pine Hall Brick", supplier: "Rock Products",
          description: "Tumbled finish gives a weathered look, ideal for vintage-inspired porches and steps.",
          tags: ["Tumbled finish"],
        },
        {
          name: "Thin Brick", slug: "thin-brick", size: "1 3/8\" thick",
          brand: "Pine Hall Brick", supplier: "Rock Products",
          description: "At 1-3/8\" thick, installs over concrete for a space-saving porch or step overlay.",
          tags: ["Overlay applications"],
        },
        {
          name: "Beveled Edge Brick", slug: "beveled-edge-brick", size: "Standard brick",
          brand: "Pine Hall Brick", supplier: "Rock Products",
          description: "Spacer-bar design for clean interlocking lines — suited to porches, walkways, and driveways.",
          tags: ["Interlocking pattern"],
        },
        {
          name: "Square Edge 4x8", slug: "square-edge-4x8", size: "4 x 8 · 1/2\" thick",
          brand: "Pine Hall Brick", supplier: "Rock Products",
          description: "Thin 1/2\" paver tile cut from masonry inventory — great for porch overlays and remodels.",
          tags: ["Thin-set overlay"],
        },
      ],
    },
  ],
};
