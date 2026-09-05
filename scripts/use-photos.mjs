/**
 * Swaps the generated SVG illustrations for real photos.
 *
 * Drop your AI-generated (or photographed) images into client/public/images/**
 * using the SAME base filename as the SVG it replaces, in .jpg, .jpeg, .png or
 * .webp. Then run:
 *
 *    npm run use-photos
 *
 * This rewrites the image paths in the server content files so the site points
 * at your photos. Run it again after adding more; it is safe to repeat.
 * Pass --dry to see what would change without writing anything.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'client/public');
const DRY = process.argv.includes('--dry');

// Everything that can reference an image path. Scanned recursively, so a new
// page or data file is picked up without editing this list.
const SCAN_ROOTS = ['server/src', 'client/src', 'client/index.html'];
const SCAN_EXT = /\.(jsx?|mjs|ts|tsx|html)$/;

function collect(rel, acc = []) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) return acc;
  const stat = fs.statSync(abs);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(abs)) collect(path.join(rel, entry), acc);
  } else if (SCAN_EXT.test(abs)) {
    acc.push(rel);
  }
  return acc;
}

const CONTENT_FILES = SCAN_ROOTS.flatMap((r) => collect(r));

const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
const IMAGE_REF = /(['"`])(\/images\/[A-Za-z0-9._/-]+?)\.svg\1/g;

let changed = 0;
let scanned = 0;

for (const rel of CONTENT_FILES) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) continue;

  const before = fs.readFileSync(file, 'utf8');
  const after = before.replace(IMAGE_REF, (match, quote, base) => {
    scanned += 1;
    const replacement = EXTENSIONS.find((ext) => fs.existsSync(path.join(PUBLIC, base + ext)));
    if (!replacement) return match;
    changed += 1;
    console.log(`  ${base}.svg  ->  ${base}${replacement}`);
    return `${quote}${base}${replacement}${quote}`;
  });

  if (after !== before && !DRY) fs.writeFileSync(file, after, 'utf8');
}

console.log(
  `\n${DRY ? '[dry run] ' : ''}${changed} of ${scanned} image references now point at photos.` +
    (changed === 0 ? '\nNothing found - check that filenames match the SVG names exactly.\n' : '\n')
);
