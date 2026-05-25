// One-off conversion: site images → WebP @ q85, max 2000px, EXIF auto-rotated.
// Idempotent: skips any image whose .webp twin already exists.
// Run: node scripts/convert-gallery-to-webp.mjs
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const GALLERY_ROOT = path.resolve('public/images/gallery');
const CATEGORIES = ['landscaping', 'hardscaping', 'construction'];
// Standalone images outside /gallery/ that should also be converted. logo.png
// is intentionally excluded — it's used as the Open Graph fallback image and
// WebP support is unreliable across social card scrapers.
const ROOT_IMAGES = [
  'public/images/hardscaping.jpg',
  'public/images/construction.jpg',
  'public/images/service-area-map.png',
];
const SOURCE_EXTS = new Set(['.jpg', '.jpeg', '.png']);
const QUALITY = 85;
const MAX_DIM = 2000;

const fmtBytes = (n) =>
  n > 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(2)} MB` : `${(n / 1024).toFixed(0)} KB`;

let totalIn = 0;
let totalOut = 0;
let converted = 0;
let skipped = 0;
let failed = 0;

async function convertOne(src, label) {
  const ext = path.extname(src).toLowerCase();
  if (!SOURCE_EXTS.has(ext)) return;
  const dst = src.slice(0, -ext.length) + '.webp';

  try {
    await fs.access(dst);
    console.log(`⏭  skip   ${label} (webp already exists)`);
    skipped++;
    return;
  } catch {}

  try {
    const inStat = await fs.stat(src);
    await sharp(src)
      .rotate()
      .resize({ width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(dst);
    const outStat = await fs.stat(dst);

    totalIn += inStat.size;
    totalOut += outStat.size;
    converted++;
    const pct = Math.round((1 - outStat.size / inStat.size) * 100);
    console.log(
      `✓ ${label.padEnd(60)} ${fmtBytes(inStat.size).padStart(9)} → ${fmtBytes(outStat.size).padStart(9)}  (-${pct}%)`,
    );
  } catch (err) {
    console.error(`✗ ${label}: ${err.message}`);
    failed++;
  }
}

for (const cat of CATEGORIES) {
  const dir = path.join(GALLERY_ROOT, cat);
  let entries;
  try {
    entries = await fs.readdir(dir);
  } catch {
    continue;
  }
  for (const file of entries) {
    await convertOne(path.join(dir, file), `gallery/${cat}/${file}`);
  }
}

for (const rel of ROOT_IMAGES) {
  await convertOne(path.resolve(rel), rel);
}

console.log('');
console.log(`Converted: ${converted}   Skipped: ${skipped}   Failed: ${failed}`);
if (converted > 0) {
  console.log(
    `Total: ${fmtBytes(totalIn)} → ${fmtBytes(totalOut)}  (saved ${fmtBytes(totalIn - totalOut)}, -${Math.round((1 - totalOut / totalIn) * 100)}%)`,
  );
}
