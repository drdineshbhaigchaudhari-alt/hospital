/**
 * Generates every illustration used by the LifeV 24 Care website as SVG.
 *
 * All people drawn here are Indian: Indian skin-tone palette, Indian hair and
 * facial-hair styles, turban / bindi / saree-dupatta / kurta detailing, and
 * Indian names on every card. No stock photography, no foreign models.
 *
 * Run:  npm run images
 * Swap: see AI-IMAGE-PROMPTS.md to replace any file with a real AI photo.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../client/public/images');

/* ------------------------------------------------------------------ */
/* Palette                                                            */
/* ------------------------------------------------------------------ */

const BRAND = {
  navy: '#0B3C5D',
  blue: '#1567A8',
  teal: '#0FA3A0',
  mint: '#DDF3F1',
  sky: '#E8F1F9',
  accent: '#F5A524',
  coral: '#EF5B5B',
  ink: '#12212E'
};

// Indian skin tones, wheatish through deep brown.
const SKIN = ['#E8B98D', '#DCA877', '#CE9663', '#BE8452', '#A96F42', '#956036'];
const SKIN_SHADE = ['#D3A177', '#C69161', '#B67F4E', '#A66F41', '#8F5B33', '#7C4E29'];
const HAIR = ['#1C1613', '#241B16', '#2E211A', '#3A2B20'];
const GREY_HAIR = ['#8E9AA3', '#A9B3BA', '#C3CBD1'];
const TURBAN = ['#1F4E79', '#7A2E3C', '#E08A1E', '#3B6E4C'];
const KURTA = ['#2E6F8E', '#3F7D6A', '#8E4B6B', '#B0642F', '#4A5A8C', '#6B7F3A'];
const SAREE = ['#B23A57', '#7B4397', '#C2571E', '#1F7A6B', '#2C4C93', '#A8324E'];

const pick = (arr, i) => arr[i % arr.length];

/* ------------------------------------------------------------------ */
/* Small helpers                                                      */
/* ------------------------------------------------------------------ */

const write = (dir, name, svg) => {
  const target = path.join(OUT, dir);
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, name), svg.trim() + '\n', 'utf8');
};

const svgDoc = (w, h, inner, extra = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img"${extra}>${inner}</svg>`;

const grad = (id, from, to, angle = 'x1="0" y1="0" x2="0" y2="1"') =>
  `<linearGradient id="${id}" ${angle}><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient>`;

/* ------------------------------------------------------------------ */
/* The person builder - a front-facing flat portrait                  */
/* ------------------------------------------------------------------ */

/**
 * @param {object} o
 *  skin, hair (short|bun|long|braid|turban|thin|grey), hairColor, beard
 *  (none|moustache|beard|full), coat (bool), inner (colour), dupatta (colour|null),
 *  bindi, earrings, glasses, stethoscope, turbanColor
 */
function person(o = {}) {
  const {
    skin = SKIN[2],
    shade = SKIN_SHADE[2],
    hair = 'short',
    hairColor = HAIR[0],
    beard = 'none',
    coat = true,
    inner = KURTA[0],
    dupatta = null,
    bindi = false,
    earrings = false,
    glasses = false,
    stethoscope = true,
    turbanColor = TURBAN[0],
    idBadge = true
  } = o;

  const p = [];

  /* ---- torso -------------------------------------------------- */
  // shirt / kurta / saree blouse behind the coat
  p.push(`<path d="M200 344 Q312 358 332 480 L68 480 Q88 358 200 344 Z" fill="${inner}"/>`);

  if (dupatta) {
    // a dupatta / saree pallu falling over the left shoulder
    p.push(
      `<path d="M200 348 Q246 352 268 372 L246 480 L176 480 Z" fill="${dupatta}" opacity=".95"/>`,
      `<path d="M212 372 L200 480" stroke="#ffffff" stroke-opacity=".35" stroke-width="3" fill="none"/>`,
      `<path d="M236 380 L228 480" stroke="#ffffff" stroke-opacity=".25" stroke-width="3" fill="none"/>`
    );
  }

  if (coat) {
    // white coat panels leaving a V of the inner garment showing
    p.push(
      `<path d="M200 346 L152 480 L66 480 Q84 366 170 346 Z" fill="#FFFFFF"/>`,
      `<path d="M200 346 L248 480 L334 480 Q316 366 230 346 Z" fill="#FFFFFF"/>`,
      `<path d="M170 346 L200 346 L172 452 L146 452 Z" fill="#EDF2F7"/>`,
      `<path d="M230 346 L200 346 L228 452 L254 452 Z" fill="#EDF2F7"/>`,
      `<path d="M200 346 L152 480" stroke="#D9E2EC" stroke-width="2" fill="none"/>`,
      `<path d="M200 346 L248 480" stroke="#D9E2EC" stroke-width="2" fill="none"/>`
    );
    if (idBadge) {
      p.push(
        `<rect x="258" y="404" width="34" height="46" rx="5" fill="${BRAND.sky}" stroke="${BRAND.blue}" stroke-width="2.5"/>`,
        `<rect x="264" y="412" width="22" height="4" rx="2" fill="${BRAND.blue}" opacity=".8"/>`,
        `<circle cx="275" cy="428" r="7" fill="${BRAND.teal}" opacity=".55"/>`,
        `<rect x="264" y="440" width="22" height="3" rx="1.5" fill="${BRAND.navy}" opacity=".45"/>`
      );
    }
  }

  /* ---- neck --------------------------------------------------- */
  p.push(
    `<path d="M178 288 h44 v56 q-22 16 -44 0 Z" fill="${shade}"/>`,
    `<ellipse cx="200" cy="300" rx="22" ry="12" fill="${shade}" opacity=".6"/>`
  );

  /* ---- hair behind the head (long styles) --------------------- */
  if (hair === 'long' || hair === 'braid') {
    p.push(
      `<path d="M128 236 q-14 96 6 128 l24 -10 q-16 -52 -8 -114 Z" fill="${hairColor}"/>`,
      `<path d="M272 236 q14 96 -6 128 l-24 -10 q16 -52 8 -114 Z" fill="${hairColor}"/>`
    );
  }
  if (hair === 'braid') {
    // a plait falling over the right shoulder
    p.push(
      `<path d="M262 330 q26 40 18 92" stroke="${hairColor}" stroke-width="20" stroke-linecap="round" fill="none"/>`,
      `<path d="M266 348 q12 4 8 16 M272 376 q12 4 8 16 M276 404 q12 4 7 16" stroke="#000" stroke-opacity=".18" stroke-width="3" fill="none"/>`,
      `<path d="M280 424 l-6 22 l14 -6 Z" fill="${BRAND.coral}"/>`
    );
  }
  if (hair === 'bun') {
    p.push(`<ellipse cx="200" cy="160" rx="42" ry="28" fill="${hairColor}"/>`);
  }

  /* ---- ears --------------------------------------------------- */
  p.push(
    `<ellipse cx="132" cy="256" rx="12" ry="17" fill="${skin}"/>`,
    `<ellipse cx="268" cy="256" rx="12" ry="17" fill="${skin}"/>`
  );
  if (earrings) {
    p.push(
      `<circle cx="132" cy="276" r="6.5" fill="${BRAND.accent}"/>`,
      `<circle cx="268" cy="276" r="6.5" fill="${BRAND.accent}"/>`
    );
  }

  /* ---- head --------------------------------------------------- */
  p.push(`<ellipse cx="200" cy="248" rx="70" ry="82" fill="${skin}"/>`);

  /* ---- hair on top -------------------------------------------- */
  if (hair === 'turban') {
    p.push(
      `<path d="M126 244 q-8 -118 74 -126 q82 8 74 126 q-8 -56 -74 -60 q-66 4 -74 60 Z" fill="${turbanColor}"/>`,
      `<path d="M140 196 q60 -34 120 0" stroke="#ffffff" stroke-opacity=".28" stroke-width="5" fill="none"/>`,
      `<path d="M136 216 q64 -30 128 0" stroke="#ffffff" stroke-opacity=".2" stroke-width="5" fill="none"/>`,
      `<path d="M188 150 l12 -22 l12 22 Z" fill="${turbanColor}"/>`,
      `<path d="M126 244 q10 -14 24 -16 l4 22 Z" fill="#000" fill-opacity=".14"/>`
    );
  } else if (hair === 'thin') {
    p.push(
      `<path d="M132 236 q6 -60 68 -62 q62 2 68 62 q-16 -34 -68 -34 q-52 0 -68 34 Z" fill="${hairColor}" opacity=".92"/>`
    );
  } else if (hair === 'grey') {
    p.push(
      `<path d="M130 244 q4 -74 70 -76 q66 2 70 76 q-12 -44 -70 -46 q-58 2 -70 46 Z" fill="${hairColor}"/>`,
      `<path d="M130 244 q8 20 4 40 l-12 -6 Z" fill="${hairColor}"/>`,
      `<path d="M270 244 q-8 20 -4 40 l12 -6 Z" fill="${hairColor}"/>`
    );
  } else if (hair === 'bun' || hair === 'long' || hair === 'braid') {
    // centre parting, typical of the styles worn here
    p.push(
      `<path d="M128 250 q0 -84 72 -86 q72 2 72 86 q-14 -50 -72 -52 q-58 2 -72 52 Z" fill="${hairColor}"/>`,
      `<path d="M200 164 q-30 6 -40 40 q22 -22 40 -24 q18 2 40 24 q-10 -34 -40 -40 Z" fill="#000" fill-opacity=".22"/>`
    );
  } else {
    // short male cut with slight sideburns
    p.push(
      `<path d="M130 246 q2 -82 70 -84 q68 2 70 84 q-12 -46 -70 -48 q-58 2 -70 48 Z" fill="${hairColor}"/>`,
      `<path d="M132 244 q4 22 2 34 l12 -4 q-4 -18 -2 -30 Z" fill="${hairColor}"/>`,
      `<path d="M268 244 q-4 22 -2 34 l-12 -4 q4 -18 2 -30 Z" fill="${hairColor}"/>`
    );
  }

  /* ---- face --------------------------------------------------- */
  p.push(
    // brows
    `<path d="M162 226 q16 -11 34 -3" stroke="${hairColor}" stroke-width="6" stroke-linecap="round" fill="none"/>`,
    `<path d="M238 226 q-16 -11 -34 -3" stroke="${hairColor}" stroke-width="6" stroke-linecap="round" fill="none"/>`,
    // eyes
    `<ellipse cx="176" cy="250" rx="8" ry="9" fill="#20303C"/>`,
    `<ellipse cx="224" cy="250" rx="8" ry="9" fill="#20303C"/>`,
    `<circle cx="179" cy="247" r="2.6" fill="#fff" opacity=".85"/>`,
    `<circle cx="227" cy="247" r="2.6" fill="#fff" opacity=".85"/>`,
    // nose
    `<path d="M200 246 q-6 24 -2 30 q6 6 12 -2" stroke="${shade}" stroke-width="4.5" stroke-linecap="round" fill="none"/>`,
    // cheeks
    `<ellipse cx="156" cy="278" rx="14" ry="9" fill="${BRAND.coral}" opacity=".13"/>`,
    `<ellipse cx="244" cy="278" rx="14" ry="9" fill="${BRAND.coral}" opacity=".13"/>`
  );

  if (bindi) p.push(`<circle cx="200" cy="196" r="6" fill="#B4243F"/>`);

  /* ---- mouth + facial hair ------------------------------------ */
  if (beard === 'full' || beard === 'beard') {
    p.push(
      `<path d="M134 250 q6 84 66 90 q60 -6 66 -90 q-10 54 -66 56 q-56 -2 -66 -56 Z" fill="${hairColor}" opacity=".95"/>`
    );
  }
  p.push(`<path d="M184 300 q16 14 32 0" stroke="#6B3B34" stroke-width="5" stroke-linecap="round" fill="none"/>`);
  if (beard === 'moustache' || beard === 'full') {
    p.push(`<path d="M172 288 q28 13 56 0 q-10 -11 -28 -11 q-18 0 -28 11 Z" fill="${hairColor}"/>`);
  }

  if (glasses) {
    p.push(
      `<rect x="150" y="234" width="52" height="34" rx="12" fill="#ffffff" fill-opacity=".18" stroke="${BRAND.ink}" stroke-width="4"/>`,
      `<rect x="198" y="234" width="52" height="34" rx="12" fill="#ffffff" fill-opacity=".18" stroke="${BRAND.ink}" stroke-width="4"/>`,
      `<path d="M202 250 h-4 M150 246 l-18 -6 M250 246 l18 -6" stroke="${BRAND.ink}" stroke-width="4" fill="none"/>`
    );
  }

  /* ---- stethoscope over the coat ------------------------------ */
  if (stethoscope) {
    p.push(
      `<path d="M168 350 C156 404 178 440 200 448" stroke="#233B4D" stroke-width="8" stroke-linecap="round" fill="none"/>`,
      `<path d="M232 350 C244 396 226 424 210 434" stroke="#233B4D" stroke-width="8" stroke-linecap="round" fill="none"/>`,
      `<circle cx="204" cy="456" r="15" fill="#C9D6E2" stroke="#233B4D" stroke-width="5"/>`,
      `<circle cx="204" cy="456" r="6" fill="#233B4D" opacity=".45"/>`
    );
  }

  return p.join('');
}

/* ------------------------------------------------------------------ */
/* Portrait card                                                      */
/* ------------------------------------------------------------------ */

function portrait(opts, i, title = '') {
  const bgA = i % 2 ? BRAND.sky : BRAND.mint;
  const bgB = '#FFFFFF';
  const inner = `
    <defs>${grad(`bg${i}`, bgA, bgB)}</defs>
    <rect width="400" height="480" fill="url(#bg${i})"/>
    <circle cx="200" cy="268" r="168" fill="${i % 2 ? BRAND.blue : BRAND.teal}" opacity=".10"/>
    <circle cx="340" cy="86" r="46" fill="${BRAND.accent}" opacity=".16"/>
    <circle cx="52" cy="120" r="26" fill="${BRAND.teal}" opacity=".18"/>
    <g transform="translate(-16 -26) scale(1.08)">${person(opts)}</g>`;
  return svgDoc(400, 480, inner, title ? ` aria-label="${title}"` : '');
}

/* ------------------------------------------------------------------ */
/* Doctor appearance sheet - one entry per consultant                 */
/* ------------------------------------------------------------------ */

const doctorLooks = [
  ['dr-arvind-deshmukh', { skin: 3, hair: 'short', beard: 'moustache', inner: 0 }],
  ['dr-shalini-iyer', { skin: 2, hair: 'bun', female: true, saree: 0 }],
  ['dr-rajeev-nandan', { skin: 4, hair: 'short', beard: 'full', inner: 1, glasses: true }],
  ['dr-meenakshi-rao', { skin: 1, hair: 'braid', female: true, saree: 3 }],
  ['dr-harpreet-singh-bedi', { skin: 2, hair: 'turban', beard: 'full', turban: 1, inner: 2, grey: true }],
  ['dr-anjali-verma', { skin: 0, hair: 'long', female: true, saree: 1 }],
  ['dr-jaswinder-singh-chadha', { skin: 3, hair: 'turban', beard: 'full', turban: 3, inner: 3, glasses: true }],
  ['dr-farhan-ahmed', { skin: 2, hair: 'short', beard: 'beard', inner: 4 }],
  ['dr-priya-nambiar', { skin: 4, hair: 'bun', female: true, saree: 4, glasses: true, grey: true }],
  ['dr-vikram-chaudhary', { skin: 1, hair: 'short', beard: 'moustache', inner: 5 }],
  ['dr-mohan-krishnan', { skin: 5, hair: 'short', beard: 'none', inner: 1, glasses: true }],
  ['dr-ritu-malhotra', { skin: 1, hair: 'long', female: true, saree: 0 }]
];

function buildDoctors() {
  doctorLooks.forEach(([slug, look], i) => {
    const opts = {
      skin: SKIN[look.skin],
      shade: SKIN_SHADE[look.skin],
      hair: look.hair,
      hairColor: look.grey ? GREY_HAIR[0] : pick(HAIR, i),
      beard: look.beard || 'none',
      coat: true,
      stethoscope: true,
      glasses: !!look.glasses,
      inner: look.female ? '#F6E7EC' : pick(KURTA, look.inner ?? i),
      dupatta: look.female ? SAREE[look.saree ?? i % SAREE.length] : null,
      bindi: !!look.female,
      earrings: !!look.female,
      turbanColor: TURBAN[look.turban ?? 0]
    };
    write('doctors', `${slug}.svg`, portrait(opts, i, `Illustration of an Indian doctor`));
  });
  console.log(`  doctors      ${doctorLooks.length} files`);
}

/* ------------------------------------------------------------------ */
/* Patients (testimonial avatars)                                     */
/* ------------------------------------------------------------------ */

const patientLooks = [
  { skin: 4, hair: 'grey', beard: 'moustache', glasses: true, kurta: 0 },      // Ramesh Gupta
  { skin: 1, hair: 'bun', female: true, saree: 0 },                            // Sunita Yadav
  { skin: 3, hair: 'thin', beard: 'full', kurta: 3 },                          // Mohd. Aslam
  { skin: 2, hair: 'braid', female: true, saree: 3 },                          // Lakshmi Narayanan
  { skin: 0, hair: 'long', female: true, saree: 1 },                           // Jaspreet Kaur
  { skin: 5, hair: 'short', beard: 'moustache', kurta: 4 }                     // Deepak Rawat
];

function buildPatients() {
  patientLooks.forEach((look, i) => {
    const opts = {
      skin: SKIN[look.skin],
      shade: SKIN_SHADE[look.skin],
      hair: look.hair,
      hairColor: look.hair === 'grey' ? GREY_HAIR[1] : pick(HAIR, i),
      beard: look.beard || 'none',
      coat: false,
      stethoscope: false,
      glasses: !!look.glasses,
      inner: look.female ? SAREE[look.saree ?? 0] : pick(KURTA, look.kurta ?? i),
      dupatta: look.female ? '#F7E3C8' : null,
      bindi: !!look.female,
      earrings: !!look.female
    };
    // Testimonial avatars are shown in a 56px circle, so crop the viewBox tight
    // to the head and shoulders instead of shrinking the whole portrait.
    const i2 = i + 7;
    const bgA = i2 % 2 ? BRAND.sky : BRAND.mint;
    const avatar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="104 140 200 200" width="300" height="300" role="img" aria-label="Illustration of an Indian patient">
        <defs>${grad(`av${i2}`, bgA, '#FFFFFF')}</defs>
        <rect x="90" y="120" width="230" height="240" fill="url(#av${i2})"/>
        <circle cx="200" cy="252" r="118" fill="${i2 % 2 ? BRAND.blue : BRAND.teal}" opacity=".10"/>
        ${person(opts)}
      </svg>`;
    write('misc', `patient-${i + 1}.svg`, avatar);
  });
  console.log(`  patients     ${patientLooks.length} files`);
}

/* ------------------------------------------------------------------ */
/* Scene helpers for hero / facility / blog art                       */
/* ------------------------------------------------------------------ */

const softShapes = (w, h, c1, c2) => `
  <circle cx="${w * 0.86}" cy="${h * 0.18}" r="${h * 0.26}" fill="${c1}" opacity=".16"/>
  <circle cx="${w * 0.1}" cy="${h * 0.84}" r="${h * 0.2}" fill="${c2}" opacity=".14"/>
  <circle cx="${w * 0.72}" cy="${h * 0.9}" r="${h * 0.12}" fill="${c2}" opacity=".12"/>`;

// A medical cross made of two rounded bars
const cross = (x, y, s, fill, op = 1) =>
  `<g opacity="${op}"><rect x="${x - s * 0.16}" y="${y - s * 0.5}" width="${s * 0.32}" height="${s}" rx="${s * 0.1}" fill="${fill}"/><rect x="${x - s * 0.5}" y="${y - s * 0.16}" width="${s}" height="${s * 0.32}" rx="${s * 0.1}" fill="${fill}"/></g>`;

// Hospital building block
const building = (x, y, w, h, body = '#FFFFFF', accent = BRAND.blue) => {
  let win = '';
  const cols = Math.floor(w / 46);
  const rows = Math.floor(h / 54);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const wx = x + 20 + c * 46;
      const wy = y + 40 + r * 54;
      if (wy + 30 > y + h) continue;
      win += `<rect x="${wx}" y="${wy}" width="30" height="34" rx="5" fill="${accent}" opacity="${0.18 + ((r + c) % 3) * 0.16}"/>`;
    }
  }
  return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${body}"/>${win}${cross(x + w / 2, y - 26, 44, BRAND.coral)}</g>`;
};

const ambulance = (x, y, s = 1) => `
  <g transform="translate(${x} ${y}) scale(${s})">
    <rect x="0" y="0" width="230" height="96" rx="14" fill="#FFFFFF"/>
    <path d="M230 30 h44 l34 40 v26 h-78 Z" fill="#FFFFFF"/>
    <rect x="238" y="36" width="40" height="30" rx="6" fill="${BRAND.sky}"/>
    <rect x="0" y="60" width="308" height="16" fill="${BRAND.coral}"/>
    ${cross(58, 44, 46, BRAND.coral)}
    <rect x="96" y="34" width="112" height="12" rx="6" fill="${BRAND.navy}" opacity=".65"/>
    <rect x="96" y="52" width="72" height="8" rx="4" fill="${BRAND.navy}" opacity=".35"/>
    <rect x="96" y="-16" width="56" height="18" rx="8" fill="${BRAND.accent}"/>
    <circle cx="72" cy="98" r="26" fill="#233B4D"/><circle cx="72" cy="98" r="11" fill="#C9D6E2"/>
    <circle cx="252" cy="98" r="26" fill="#233B4D"/><circle cx="252" cy="98" r="11" fill="#C9D6E2"/>
  </g>`;

const heartLine = (x, y, w, color, sw = 6) =>
  `<path d="M${x} ${y} h${w * 0.2} l${w * 0.05} -34 l${w * 0.07} 62 l${w * 0.06} -84 l${w * 0.07} 56 l${w * 0.05} -20 h${w * 0.5}" stroke="${color}" stroke-width="${sw}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

/* ------------------------------------------------------------------ */
/* Hero banners                                                       */
/* ------------------------------------------------------------------ */

function buildHeroes() {
  const W = 1600;
  const H = 900;

  // 1. Emergency, round the clock
  write(
    'hero',
    'hero-1.svg',
    svgDoc(
      W,
      H,
      `<defs>${grad('h1', '#062B44', '#0D5A82')}${grad('h1b', BRAND.teal, BRAND.blue)}</defs>
       <rect width="${W}" height="${H}" fill="url(#h1)"/>
       ${softShapes(W, H, BRAND.teal, BRAND.accent)}
       <circle cx="1180" cy="440" r="330" fill="#FFFFFF" opacity=".06"/>
       ${building(980, 250, 380, 400, '#F3F8FC', BRAND.blue)}
       ${building(1380, 380, 180, 270, '#E4EFF7', BRAND.teal)}
       <rect x="0" y="650" width="${W}" height="250" fill="#08344F"/>
       <rect x="0" y="650" width="${W}" height="10" fill="${BRAND.teal}" opacity=".6"/>
       ${ambulance(760, 566, 0.92)}
       ${heartLine(120, 470, 620, BRAND.teal, 8)}
       <g transform="translate(120 200)">
         ${cross(0, 0, 92, BRAND.coral)}
       </g>
       <g transform="translate(1180 760)">${cross(0, 0, 60, '#FFFFFF', 0.18)}</g>`,
      ' aria-label="24x7 emergency and ambulance services"'
    )
  );

  // 2. Our doctors
  // Subjects sit on the right two-thirds; the left third stays clear for the
  // headline that the Hero component overlays on top of this image.
  const trio = [
    { skin: 2, hair: 'turban', beard: 'full', t: 0, x: 560 },
    { skin: 1, hair: 'bun', female: true, s: 0, x: 840 },
    { skin: 4, hair: 'short', beard: 'moustache', x: 1120 }
  ]
    .map(
      (d, i) => `<g transform="translate(${d.x} 220) scale(1.2)">${person({
        skin: SKIN[d.skin],
        shade: SKIN_SHADE[d.skin],
        hair: d.hair,
        hairColor: HAIR[i],
        beard: d.beard || 'none',
        inner: d.female ? '#F6E7EC' : pick(KURTA, i),
        dupatta: d.female ? SAREE[d.s ?? 0] : null,
        bindi: !!d.female,
        earrings: !!d.female,
        turbanColor: TURBAN[d.t ?? 0]
      })}</g>`
    )
    .join('');

  write(
    'hero',
    'hero-2.svg',
    svgDoc(
      W,
      H,
      `<defs>${grad('h2', '#E8F4F8', '#FFFFFF')}</defs>
       <rect width="${W}" height="${H}" fill="url(#h2)"/>
       ${softShapes(W, H, BRAND.blue, BRAND.teal)}
       <circle cx="1020" cy="520" r="420" fill="${BRAND.teal}" opacity=".08"/>
       ${trio}
       <rect x="0" y="800" width="${W}" height="100" fill="${BRAND.navy}" opacity=".92"/>
       ${heartLine(1180, 240, 340, BRAND.coral, 7)}`,
      ' aria-label="Indian consultant doctors at LifeV 24 Care Hospital"'
    )
  );

  // 3. Mother and child / family care
  write(
    'hero',
    'hero-3.svg',
    svgDoc(
      W,
      H,
      `<defs>${grad('h3', '#FFF4E8', '#FFFFFF')}</defs>
       <rect width="${W}" height="${H}" fill="url(#h3)"/>
       ${softShapes(W, H, BRAND.accent, BRAND.coral)}
       <circle cx="1040" cy="470" r="390" fill="${BRAND.accent}" opacity=".12"/>
       <g transform="translate(800 180) scale(1.4)">
         ${person({
           skin: SKIN[1],
           shade: SKIN_SHADE[1],
           hair: 'braid',
           hairColor: HAIR[0],
           coat: false,
           stethoscope: false,
           inner: SAREE[0],
           dupatta: '#F7E3C8',
           bindi: true,
           earrings: true
         })}
       </g>
       <g transform="translate(1290 500) scale(0.72)">
         ${person({
           skin: SKIN[1],
           shade: SKIN_SHADE[1],
           hair: 'short',
           hairColor: HAIR[0],
           coat: false,
           stethoscope: false,
           inner: '#7FB2D8'
         })}
       </g>
       <g transform="translate(560 290) scale(1.05)">
         ${person({
           skin: SKIN[3],
           shade: SKIN_SHADE[3],
           hair: 'bun',
           hairColor: HAIR[1],
           inner: '#F6E7EC',
           dupatta: SAREE[3],
           bindi: true,
           earrings: true
         })}
       </g>
       <rect x="0" y="810" width="${W}" height="90" fill="${BRAND.navy}" opacity=".9"/>`,
      ' aria-label="Mother and child care at LifeV 24 Care Hospital"'
    )
  );
  console.log('  hero         3 files');
}

/* ------------------------------------------------------------------ */
/* Facility + speciality + blog artwork                               */
/* ------------------------------------------------------------------ */

// Compact pictograms drawn inside a 200x200 box centred at (0,0)
const GLYPHS = {
  heart: (c) => `<path d="M0 62 C-70 12 -78 -34 -46 -54 C-24 -68 -6 -56 0 -40 C6 -56 24 -68 46 -54 C78 -34 70 12 0 62 Z" fill="${c}"/>`,
  brain: (c) =>
    `<path d="M-8 -62 c-30 -8 -54 12 -50 38 c-20 10 -20 40 2 50 c-2 26 24 42 48 32 Z" fill="${c}"/><path d="M8 -62 c30 -8 54 12 50 38 c20 10 20 40 -2 50 c2 26 -24 42 -48 32 Z" fill="${c}" opacity=".72"/>`,
  bone: (c) =>
    `<g fill="${c}"><rect x="-46" y="-14" width="92" height="28" rx="14"/><circle cx="-52" cy="-22" r="20"/><circle cx="-52" cy="20" r="20"/><circle cx="52" cy="-22" r="20"/><circle cx="52" cy="20" r="20"/></g>`,
  stomach: (c) => `<path d="M-30 -56 q46 -14 54 30 q6 44 -26 60 q-46 20 -60 -18 q-8 -26 14 -34 q22 -8 24 -20 q2 -12 -6 -18 Z" fill="${c}"/>`,
  kidney: (c) =>
    `<g fill="${c}"><path d="M-14 -54 q34 0 34 54 q0 54 -34 54 q-40 0 -40 -54 q0 -54 40 -54 Z"/><path d="M26 -34 q30 12 30 34 q0 22 -30 34 q14 -34 0 -68 Z" opacity=".7"/></g>`,
  urology: (c) =>
    `<g fill="${c}"><path d="M-40 -10 q40 -34 80 0 q6 44 -40 66 q-46 -22 -40 -66 Z"/><rect x="-8" y="-62" width="16" height="46" rx="8"/></g>`,
  ribbon: (c) => `<path d="M0 -66 q34 34 20 70 l-20 60 l-20 -60 q-14 -36 20 -70 Z" fill="${c}"/><path d="M-22 6 l-26 46 l30 -8 Z M22 6 l26 46 l-30 -8 Z" fill="${c}" opacity=".7"/>`,
  lungs: (c) =>
    `<g fill="${c}"><rect x="-5" y="-66" width="10" height="52" rx="5"/><path d="M-8 -20 q0 -18 -22 -14 q-30 6 -34 52 q-4 42 16 46 q34 6 40 -30 Z"/><path d="M8 -20 q0 -18 22 -14 q30 6 34 52 q4 42 -16 46 q-34 6 -40 -30 Z"/></g>`,
  mother: (c) => `<g fill="${c}"><circle cx="-14" cy="-42" r="24"/><path d="M-56 60 q0 -50 42 -50 q42 0 42 50 Z"/><circle cx="40" cy="10" r="18"/><path d="M18 62 q0 -28 22 -28 q22 0 22 28 Z"/></g>`,
  child: (c) => `<g fill="${c}"><circle cx="0" cy="-34" r="30"/><path d="M-44 62 q0 -52 44 -52 q44 0 44 52 Z"/></g>`,
  scalpel: (c) => `<g fill="${c}"><path d="M-56 34 l58 -58 q22 -22 34 -10 q12 12 -10 34 l-58 58 Z"/><rect x="14" y="26" width="60" height="16" rx="8" transform="rotate(-45 44 34)"/></g>`,
  ear: (c) => `<path d="M-6 -64 q46 0 46 44 q0 30 -24 44 q-16 10 -16 28 q0 14 -18 14 q-20 0 -20 -22 q0 -26 22 -40 q16 -10 16 -24 q0 -16 -16 -16 q-14 0 -16 14 q-2 12 -18 10 q-16 -2 -14 -20 q4 -32 58 -32 Z" fill="${c}"/>`,
  eye: (c) => `<path d="M-70 0 q70 -54 140 0 q-70 54 -140 0 Z" fill="${c}"/><circle cx="0" cy="0" r="24" fill="#fff" opacity=".85"/><circle cx="0" cy="0" r="13" fill="${c}"/>`,
  skin: (c) => `<g fill="${c}"><rect x="-56" y="-56" width="112" height="112" rx="26"/></g><g fill="#fff" opacity=".55"><circle cx="-20" cy="-16" r="9"/><circle cx="18" cy="6" r="7"/><circle cx="-6" cy="30" r="6"/><circle cx="26" cy="-30" r="5"/></g>`,
  stethoscope: (c) =>
    `<g fill="none" stroke="${c}" stroke-width="14" stroke-linecap="round"><path d="M-46 -60 v30 q0 40 34 40 q34 0 34 -40 v-30"/><path d="M22 10 v18 q0 30 26 30 q26 0 26 -30 v-8"/></g><circle cx="74" cy="-4" r="16" fill="${c}"/>`,
  physio: (c) =>
    `<g fill="${c}"><circle cx="-6" cy="-52" r="20"/><path d="M-16 -26 q30 -6 40 18 l24 40 l-22 12 l-22 -34 l-6 44 l16 40 l-22 10 l-24 -50 l-30 26 l-16 -18 l40 -42 Z"/></g>`,
  cross: (c) => cross(0, 0, 120, c),
  monitor: (c) =>
    `<g><rect x="-74" y="-56" width="148" height="100" rx="12" fill="${c}"/><rect x="-60" y="-42" width="120" height="72" rx="6" fill="#fff" opacity=".9"/>${heartLine(-52, -6, 104, c, 6)}<rect x="-16" y="44" width="32" height="20" fill="${c}"/><rect x="-44" y="62" width="88" height="12" rx="6" fill="${c}"/></g>`,
  bed: (c) =>
    `<g fill="${c}"><rect x="-80" y="-6" width="160" height="30" rx="10"/><rect x="-80" y="24" width="14" height="42" rx="6"/><rect x="66" y="24" width="14" height="42" rx="6"/><rect x="40" y="-52" width="40" height="46" rx="8" opacity=".7"/><circle cx="-30" cy="-24" r="20"/><path d="M-72 -6 q10 -34 42 -34 q26 0 32 34 Z" opacity=".55"/></g>`,
  otlamp: (c) =>
    `<g fill="${c}"><rect x="-6" y="-76" width="12" height="46" rx="6"/><ellipse cx="0" cy="-16" rx="76" ry="30"/><ellipse cx="0" cy="-22" rx="60" ry="22" fill="#fff" opacity=".55"/><path d="M-70 6 l-26 66 h192 l-26 -66 Z" opacity=".28"/></g>`,
  microscope: (c) =>
    `<g fill="${c}"><rect x="-56" y="52" width="112" height="16" rx="8"/><path d="M-16 -60 l40 20 l-36 62 l-40 -20 Z"/><rect x="-30" y="20" width="30" height="34" rx="6"/><path d="M6 -34 q54 24 30 86 l-22 -8 q18 -46 -22 -62 Z"/></g>`,
  droplet: (c) => `<path d="M0 -70 q52 58 52 92 q0 44 -52 44 q-52 0 -52 -44 q0 -34 52 -92 Z" fill="${c}"/>`,
  pills: (c) =>
    `<g fill="${c}"><rect x="-72" y="-30" width="84" height="60" rx="30" transform="rotate(-30 -30 0)"/><circle cx="34" cy="26" r="34"/><path d="M10 4 l48 44" stroke="#fff" stroke-width="8" opacity=".7"/></g>`,
  shield: (c) => `<path d="M0 -66 l58 24 v40 q0 46 -58 68 q-58 -22 -58 -68 v-40 Z" fill="${c}"/><path d="M-24 2 l16 18 l34 -40" stroke="#fff" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  ambulanceIcon: (c) => `<g transform="scale(0.42) translate(-150 -50)">${ambulance(0, 0, 1)}</g>`,
  dumbbell: (c) =>
    `<g fill="${c}"><rect x="-70" y="-12" width="140" height="24" rx="12"/><rect x="-86" y="-32" width="24" height="64" rx="10"/><rect x="62" y="-32" width="24" height="64" rx="10"/></g>`,
  baby: (c) => `<g fill="${c}"><circle cx="0" cy="-24" r="38"/><circle cx="-14" cy="-30" r="5" fill="#fff"/><circle cx="14" cy="-30" r="5" fill="#fff"/><path d="M-52 66 q0 -46 52 -46 q52 0 52 46 Z"/></g>`,
  tooth: (c) => `<path d="M-46 -50 q46 -22 92 0 q10 40 -12 96 q-12 28 -22 0 l-8 -34 l-8 34 q-10 28 -22 0 q-22 -56 -20 -96 Z" fill="${c}"/>`,
  knee: (c) => `<g fill="${c}"><rect x="-20" y="-72" width="40" height="60" rx="18"/><circle cx="0" cy="0" r="34"/><rect x="-20" y="12" width="40" height="62" rx="18"/></g>`,
  virus: (c) =>
    `<g fill="${c}"><circle cx="0" cy="0" r="40"/><g stroke="${c}" stroke-width="12" stroke-linecap="round"><path d="M0 -40 v-24 M0 40 v24 M-40 0 h-24 M40 0 h24 M-28 -28 l-18 -18 M28 28 l18 18 M28 -28 l18 -18 M-28 28 l-18 18"/></g><circle cx="0" cy="-66" r="9"/><circle cx="0" cy="66" r="9"/><circle cx="-66" cy="0" r="9"/><circle cx="66" cy="0" r="9"/></g>`
};

function sceneCard(w, h, glyph, tone = BRAND.teal, alt = '') {
  const g = GLYPHS[glyph] || GLYPHS.cross;
  const inner = `
    <defs>${grad(`s-${glyph}`, '#FFFFFF', tone + '26')}</defs>
    <rect width="${w}" height="${h}" fill="url(#s-${glyph})"/>
    <rect width="${w}" height="${h}" fill="${tone}" opacity=".07"/>
    ${softShapes(w, h, tone, BRAND.accent)}
    <circle cx="${w / 2}" cy="${h / 2}" r="${Math.min(w, h) * 0.34}" fill="#FFFFFF" opacity=".72"/>
    <g transform="translate(${w / 2} ${h / 2}) scale(${Math.min(w, h) / 320})">${g(tone)}</g>
    <rect x="0" y="${h - 10}" width="${w}" height="10" fill="${tone}" opacity=".55"/>`;
  return svgDoc(w, h, inner, alt ? ` aria-label="${alt}"` : '');
}

const FACILITY_ART = [
  ['emergency', 'cross', BRAND.coral],
  ['icu', 'monitor', BRAND.blue],
  ['ot', 'otlamp', BRAND.teal],
  ['cathlab', 'heart', BRAND.coral],
  ['radiology', 'microscope', BRAND.blue],
  ['dialysis', 'kidney', BRAND.teal],
  ['bloodbank', 'droplet', BRAND.coral],
  ['ambulance', 'ambulanceIcon', BRAND.navy],
  ['pharmacy', 'pills', BRAND.teal],
  ['rooms', 'bed', BRAND.blue],
  ['physiogym', 'dumbbell', BRAND.accent],
  ['insurance', 'shield', BRAND.navy],
  // speciality art
  ['cardiology', 'heart', BRAND.coral],
  ['neuro', 'brain', '#7B4397'],
  ['ortho', 'bone', BRAND.blue],
  ['gastro', 'stomach', BRAND.accent],
  ['nephro', 'kidney', BRAND.teal],
  ['urology', 'urology', BRAND.blue],
  ['onco', 'ribbon', '#B23A57'],
  ['pulmo', 'lungs', BRAND.teal],
  ['obg', 'mother', '#C2571E'],
  ['paeds', 'baby', BRAND.accent],
  ['surgery', 'scalpel', BRAND.blue],
  ['ent', 'ear', BRAND.teal],
  ['eye', 'eye', BRAND.navy],
  ['derma', 'skin', '#C2571E'],
  ['medicine', 'stethoscope', BRAND.blue],
  ['physio', 'physio', BRAND.teal]
];

const BLOG_ART = [
  ['chest-pain', 'heart', BRAND.coral],
  ['stroke', 'brain', '#7B4397'],
  ['diabetes', 'droplet', BRAND.blue],
  ['fever', 'virus', BRAND.teal],
  ['knee', 'knee', BRAND.blue],
  ['pregnancy', 'mother', '#C2571E'],
  ['kidney-stone', 'kidney', BRAND.teal],
  ['newborn', 'baby', BRAND.accent]
];

function buildScenes() {
  FACILITY_ART.forEach(([name, glyph, tone]) =>
    write('facilities', `${name}.svg`, sceneCard(800, 560, glyph, tone, name))
  );
  BLOG_ART.forEach(([name, glyph, tone]) => write('blog', `${name}.svg`, sceneCard(880, 500, glyph, tone, name)));
  console.log(`  facilities   ${FACILITY_ART.length} files`);
  console.log(`  blog         ${BLOG_ART.length} files`);
}

/* ------------------------------------------------------------------ */
/* Logo, about image, CTA background, map placeholder                 */
/* ------------------------------------------------------------------ */

function buildMisc() {
  // Logo mark: a shield + pulse + 24
  write(
    'misc',
    'logo.svg',
    svgDoc(
      260,
      64,
      `<defs>${grad('lg', BRAND.teal, BRAND.blue, 'x1="0" y1="0" x2="1" y2="1"')}</defs>
       <g transform="translate(6 4)">
         <path d="M28 0 l26 11 v18 q0 22 -26 33 q-26 -11 -26 -33 v-18 Z" fill="url(#lg)"/>
         <path d="M11 30 h9 l4 -11 l6 20 l5 -12 h12" stroke="#fff" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
       </g>
       <text x="72" y="34" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700" fill="${BRAND.navy}">LifeV <tspan fill="${BRAND.teal}">24</tspan> Care</text>
       <text x="73" y="52" font-family="Segoe UI, Arial, sans-serif" font-size="11.5" letter-spacing="2.6" fill="#5C7183">H O S P I T A L</text>`,
      ' aria-label="LifeV 24 Care Hospital logo"'
    )
  );

  write(
    'misc',
    'favicon.svg',
    svgDoc(
      64,
      64,
      `<defs>${grad('fv', BRAND.teal, BRAND.blue, 'x1="0" y1="0" x2="1" y2="1"')}</defs>
       <rect width="64" height="64" rx="14" fill="url(#fv)"/>
       <path d="M12 36 h10 l5 -14 l7 25 l6 -15 h12" stroke="#fff" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`
    )
  );

  // About: hospital campus
  write(
    'misc',
    'about-hospital.svg',
    svgDoc(
      900,
      680,
      `<defs>${grad('ab', '#E9F4FA', '#FFFFFF')}</defs>
       <rect width="900" height="680" fill="url(#ab)"/>
       ${softShapes(900, 680, BRAND.teal, BRAND.accent)}
       ${building(150, 190, 420, 380, '#FFFFFF', BRAND.blue)}
       ${building(600, 320, 200, 250, '#EAF3FA', BRAND.teal)}
       <rect x="0" y="570" width="900" height="110" fill="${BRAND.navy}" opacity=".9"/>
       <rect x="0" y="562" width="900" height="10" fill="${BRAND.teal}"/>
       ${ambulance(70, 476, 0.52)}
       <g transform="translate(742 150)">${cross(0, 0, 64, BRAND.coral)}</g>`,
      ' aria-label="LifeV 24 Care Hospital campus illustration"'
    )
  );

  // CTA strip background
  write(
    'misc',
    'cta-bg.svg',
    svgDoc(
      1600,
      420,
      `<defs>${grad('cta', BRAND.navy, '#0F6FA0', 'x1="0" y1="0" x2="1" y2="0"')}</defs>
       <rect width="1600" height="420" fill="url(#cta)"/>
       <circle cx="1420" cy="90" r="200" fill="#fff" opacity=".05"/>
       <circle cx="180" cy="360" r="150" fill="${BRAND.teal}" opacity=".18"/>
       ${heartLine(900, 250, 620, '#FFFFFF', 6)}
       ${cross(200, 120, 90, '#FFFFFF', 0.1)}`
    )
  );

  // Patient-experience / OPD scene for the About page
  write(
    'misc',
    'opd-scene.svg',
    svgDoc(
      900,
      600,
      `<defs>${grad('opd', '#FFFFFF', BRAND.mint)}</defs>
       <rect width="900" height="600" fill="url(#opd)"/>
       ${softShapes(900, 600, BRAND.blue, BRAND.teal)}
       <g transform="translate(120 120) scale(0.85)">${person({
         skin: SKIN[2],
         shade: SKIN_SHADE[2],
         hair: 'bun',
         hairColor: HAIR[0],
         inner: '#F6E7EC',
         dupatta: SAREE[1],
         bindi: true,
         earrings: true
       })}</g>
       <g transform="translate(470 150) scale(0.78)">${person({
         skin: SKIN[4],
         shade: SKIN_SHADE[4],
         hair: 'grey',
         hairColor: GREY_HAIR[0],
         beard: 'moustache',
         coat: false,
         stethoscope: false,
         glasses: true,
         inner: KURTA[3]
       })}</g>
       <rect x="0" y="540" width="900" height="60" fill="${BRAND.navy}" opacity=".9"/>`,
      ' aria-label="An Indian doctor consulting a senior patient"'
    )
  );
  console.log('  misc         6 files + patients');
}

/* ------------------------------------------------------------------ */

console.log('\nGenerating LifeV 24 Care artwork (Indian doctors, staff and patients)...\n');
fs.mkdirSync(OUT, { recursive: true });
buildDoctors();
buildPatients();
buildHeroes();
buildScenes();
buildMisc();
console.log(`\nDone. Output: ${OUT}\n`);
