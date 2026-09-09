/**
 * Downloads the real stock photographs used by the site from Pexels and crops
 * them to the exact sizes the layout needs.
 *
 *   npm run photos          # download + crop everything
 *   npm run photos -- --force   # re-download even if the file already exists
 *
 * Every person shown is Indian or South Asian - each id below was reviewed by
 * eye before being added. Photos come from Pexels under the Pexels License
 * (free for commercial use, no attribution required). Credits are listed in
 * IMAGE-CREDITS.md.
 *
 * Requires: npm i -D sharp
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../client/public/images');
const CACHE = path.resolve(__dirname, '../.photo-cache');
const FORCE = process.argv.includes('--force');

/* ------------------------------------------------------------------ */
/* What we use, and where it goes                                     */
/* ------------------------------------------------------------------ */

// [pexels id, output path, width, height, crop position, optional pre-crop]
// The pre-crop is [left, top, width, height] as fractions of the source image.
// It is applied before the resize, to zoom in on a face or to keep a sponsor
// logo on someone's coat out of frame.
const ASSETS = [
  // ---- consultant portraits (5:6) --------------------------------
  [19438565, 'doctors/dr-arvind-deshmukh.jpg', 1000, 1200, 'north', [0.14, 0, 0.72, 0.78]],
  [32428850, 'doctors/dr-shalini-iyer.jpg', 1000, 1200, 'north'],
  [6762876, 'doctors/dr-rajeev-nandan.jpg', 1000, 1200, 'north', [0.14, 0, 0.72, 0.88]],
  [36665076, 'doctors/dr-meenakshi-rao.jpg', 1000, 1200, 'north'],
  [14797917, 'doctors/dr-harpreet-singh-bedi.jpg', 1000, 1200, 'north'],
  [32115955, 'doctors/dr-anjali-verma.jpg', 1000, 1200, 'north', [0.24, 0.2, 0.52, 0.62]],
  [14797861, 'doctors/dr-jaswinder-singh-chadha.jpg', 1000, 1200, 'north', [0.14, 0.02, 0.72, 0.63]],
  [10695742, 'doctors/dr-farhan-ahmed.jpg', 1000, 1200, 'north', [0.16, 0, 0.68, 0.56]],
  [5738735, 'doctors/dr-priya-nambiar.jpg', 1000, 1200, 'north', [0.24, 0.06, 0.42, 0.82]],
  [27298085, 'doctors/dr-vikram-chaudhary.jpg', 1000, 1200, 'north'],
  [10691259, 'doctors/dr-mohan-krishnan.jpg', 1000, 1200, 'north', [0.1, 0, 0.8, 0.72]],
  // dr-komalben-thakor.jpg is a supplied portrait, not a stock photo - do not fetch.

  // ---- testimonial avatars (square, head crop) --------------------
  [4583954, 'misc/patient-1.jpg', 600, 600, 'north'],
  [37798732, 'misc/patient-2.jpg', 600, 600, 'north'],
  [12327289, 'misc/patient-3.jpg', 600, 600, 'centre'],
  [29601846, 'misc/patient-4.jpg', 600, 600, 'north'],
  [7326448, 'misc/patient-5.jpg', 600, 600, 'north'],
  [11905784, 'misc/patient-6.jpg', 600, 600, 'north'],

  // ---- hero banners (16:9) ---------------------------------------
  [32768190, 'hero/hero-1.jpg', 2000, 1125, 'centre'],
  [4769137, 'hero/hero-2.jpg', 2000, 1125, 'centre'],
  [11557844, 'hero/hero-3.jpg', 2000, 1125, 'centre'],

  // ---- facilities (16:10) ----------------------------------------
  [263402, 'facilities/emergency.jpg', 1200, 750, 'centre'],
  [3844581, 'facilities/icu.jpg', 1200, 750, 'centre'],
  [17092745, 'facilities/ot.jpg', 1200, 750, 'centre'],
  [8460235, 'facilities/cathlab.jpg', 1200, 750, 'centre'],
  [6129870, 'facilities/radiology.jpg', 1200, 750, 'centre'],
  [12081338, 'facilities/dialysis.jpg', 1200, 750, 'centre'],
  [4531307, 'facilities/bloodbank.jpg', 1200, 750, 'centre'],
  [28123683, 'facilities/ambulance.jpg', 1200, 750, 'centre'],
  [5207322, 'facilities/pharmacy.jpg', 1200, 750, 'centre'],
  [4966406, 'facilities/rooms.jpg', 1200, 750, 'centre'],
  [14797757, 'facilities/physiogym.jpg', 1200, 750, 'centre'],
  [7108329, 'facilities/insurance.jpg', 1200, 750, 'centre'],

  // ---- department banners (16:9-ish) -----------------------------
  // Faces here are either Indian or deliberately out of frame: several are
  // close-ups of hands, equipment or scans, which is both more accurate for a
  // department banner and avoids putting non-Indian models on the site.
  [28585011, 'facilities/cardiology.jpg', 1200, 700, 'centre'],
  [5723883, 'facilities/neuro.jpg', 1200, 700, 'centre'],
  [5215005, 'facilities/ortho.jpg', 1200, 700, 'centre'],
  [34415377, 'facilities/gastro.jpg', 1200, 700, 'centre'],
  [29023824, 'facilities/nephro.jpg', 1200, 700, 'centre'],
  [3735705, 'facilities/urology.jpg', 1200, 700, 'centre'],
  [6436272, 'facilities/onco.jpg', 1200, 700, 'centre'],
  [32532077, 'facilities/pulmo.jpg', 1200, 700, 'centre'],
  [4101057, 'facilities/obg.jpg', 1200, 700, 'centre'],
  [1586257, 'facilities/paeds.jpg', 1200, 700, 'centre'],
  [4769135, 'facilities/surgery.jpg', 1200, 700, 'centre'],
  [7179255, 'facilities/ent.jpg', 1200, 700, 'centre'],
  [31000573, 'facilities/eye.jpg', 1200, 700, 'centre'],
  [32260065, 'facilities/derma.jpg', 1200, 700, 'centre'],
  [14558560, 'facilities/medicine.jpg', 1200, 700, 'centre'],
  [20860607, 'facilities/physio.jpg', 1200, 700, 'centre'],

  // ---- health-library article images (16:9) ----------------------
  [7108341, 'blog/chest-pain.jpg', 1200, 675, 'centre'],
  [4226123, 'blog/stroke.jpg', 1200, 675, 'centre'],
  [6823415, 'blog/diabetes.jpg', 1200, 675, 'centre'],
  [5712673, 'blog/fever.jpg', 1200, 675, 'centre'],
  [11349880, 'blog/knee.jpg', 1200, 675, 'centre'],
  [11837653, 'blog/pregnancy.jpg', 1200, 675, 'centre'],
  [8442029, 'blog/kidney-stone.jpg', 1200, 675, 'centre'],
  [27975008, 'blog/newborn.jpg', 1200, 675, 'centre'],

  // ---- other ------------------------------------------------------
  [9741487, 'misc/about-hospital.jpg', 1200, 900, 'centre'],
  [14558560, 'misc/opd-scene.jpg', 1200, 800, 'centre']
];

/* ------------------------------------------------------------------ */

const url = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1800`;

async function download(id) {
  fs.mkdirSync(CACHE, { recursive: true });
  const file = path.join(CACHE, `${id}.jpg`);
  if (fs.existsSync(file) && !FORCE) return file;

  const res = await fetch(url(id));
  if (!res.ok) throw new Error(`pexels ${id} -> HTTP ${res.status}`);
  fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  return file;
}

let done = 0;
let failed = 0;

console.log('\nFetching photographs from Pexels...\n');

for (const [id, out, w, h, position, pre] of ASSETS) {
  const target = path.join(OUT, out);
  try {
    const src = await download(id);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    let img = sharp(src);
    if (pre) {
      const meta = await img.metadata();
      img = img.extract({
        left: Math.round(meta.width * pre[0]),
        top: Math.round(meta.height * pre[1]),
        width: Math.round(meta.width * pre[2]),
        height: Math.round(meta.height * pre[3])
      });
    }
    await img
      .resize(w, h, { fit: 'cover', position })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(target);
    done += 1;
    console.log(`  ok    ${out.padEnd(42)} (pexels ${id})`);
  } catch (err) {
    failed += 1;
    console.log(`  FAIL  ${out.padEnd(42)} ${err.message}`);
  }
}

console.log(`\n${done} written, ${failed} failed. Output: ${OUT}`);
console.log('Now run:  npm run use-photos   (points the content files at the .jpg files)\n');
