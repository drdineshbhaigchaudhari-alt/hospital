# LifeV 24 Care Hospital — website

A complete multi-speciality hospital website: **React (Vite) front end + Node/Express API**,
built in the style of Indian hospital sites such as Amar Hospital and Saroj Hospital, with
original content and original artwork.

- 13 routes, 16 departments, 12 consultant profiles, 6 health packages, 12 facilities,
  8 health-library articles
- 24x7 emergency top bar, mega-menu navigation, hero slider, quick-action strip, animated
  stat counters, doctor carousel, package cards, testimonial slider, insurer marquee, FAQ
  accordion, CTA bands, four-column footer, floating call/WhatsApp buttons
- Working appointment, contact and newsletter forms with server-side validation, rate
  limiting, a honeypot and JSON persistence
- **Real photographs throughout** — 59 free Pexels images, every one reviewed by eye and
  cropped to fit the layout, with a script that re-downloads them on demand. People shown are
  Indian or South Asian; department and article images are mostly close-ups of hands,
  equipment and scans. Only the logo, favicon and CTA background are generated SVG.

---

## Quick start

```bash
npm run install:all     # installs root, server and client dependencies
npm run images          # generates the SVG artwork (department + article cards, logo)
npm run photos          # downloads and crops the photographs of Indian doctors and patients
npm run dev             # API on :5000, Vite dev server on :5173
```

Both image steps are already done in this repo, so you can skip straight to `npm run dev`.

Open <http://localhost:5173>.

### Production

```bash
npm run build           # builds the React app into client/dist
npm start               # Express serves the API *and* the built site on :5000
```

Copy `.env.example` to `.env` in `server/` (or the repo root) to change the port, the allowed
CORS origins or the notification email settings.

---

## Project layout

```
hospital/
├─ server/                     Node + Express API
│  ├─ src/index.js             app setup, CORS, static hosting of client/dist
│  ├─ src/routes/content.js    GET endpoints for all site content
│  ├─ src/routes/forms.js      POST appointment / contact / subscribe
│  ├─ src/middleware/validate.js   hand-rolled validators (Indian mobile, names, dates)
│  ├─ src/store.js             queued JSON-file store for submissions
│  └─ src/data/                specialities, doctors, packages, blogs, site info
├─ client/                     React 18 + Vite + React Router
│  ├─ src/components/          Header, Footer, Hero, cards, ui, AppointmentForm, Icon
│  ├─ src/pages/               13 route components
│  ├─ src/lib/                 api client, hooks, brand constants
│  ├─ src/styles/              global.css (design tokens) + components.css
│  └─ public/images/           generated artwork
├─ scripts/generate-images.mjs SVG artwork generator
├─ scripts/fetch-photos.mjs    downloads + crops the Pexels photographs
├─ scripts/use-photos.mjs      points the content files at photos instead of SVGs
├─ IMAGE-CREDITS.md            every photo, its Pexels id, and the licensing position
└─ AI-IMAGE-PROMPTS.md         prompts if you would rather generate images with AI
```

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero slider, quick actions, about, stats, departments, doctors, why-us, facilities, packages, testimonials, insurers, articles, FAQ |
| `/about` | Story, values, milestones, accreditations, testimonials |
| `/specialities` · `/specialities/:slug` | All 16 departments · department detail with its consultants |
| `/doctors` · `/doctors/:slug` | Searchable panel (name / department / focus) · full profile |
| `/facilities` | Infrastructure, room categories and tariff guidance, patient services |
| `/health-packages` | Six preventive packages, preparation guidance, package FAQ |
| `/blog` · `/blog/:slug` | Health library with topic filter · full article |
| `/contact` | Desks and timings, message form, address, map, FAQ |
| `/book-appointment` | Appointment request form (pre-fills from a doctor or package link) |
| `*` | 404 |

## API

```
GET  /api/health
GET  /api/bootstrap            everything the home page and shell need, in one call
GET  /api/hospital  /stats  /why-us  /insurers  /accreditations  /testimonials  /faqs
GET  /api/specialities        /api/specialities/:slug   (includes that department's doctors)
GET  /api/doctors?speciality=&q=   /api/doctors/:slug   (includes related consultants)
GET  /api/facilities  /api/packages  /api/packages/:slug
GET  /api/blogs?category=     /api/blogs/:slug
POST /api/appointments  /api/contact  /api/subscribe
GET  /api/submissions/summary
```

Form submissions are appended to `server/data/submissions.json` (git-ignored). Swap the two
functions in `server/src/store.js` for a real database when you need one.

## Editing content

All content lives in `server/src/data/`. Edit the plain JavaScript objects there — doctors,
departments, packages, articles, facilities, FAQs, testimonials, insurers, contact details —
and the site updates with no front-end changes. Brand constants used by the header, footer
and floating buttons (phone numbers, address, nav labels) are in `client/src/lib/site.js`.

## Images

**Photographs** (consultants, patients, hero banners, facilities) are free Pexels images,
listed with their photo ids in `IMAGE-CREDITS.md` and re-downloadable with `npm run photos`.
Every person shown is Indian or South Asian; each photo was reviewed individually rather than
pulled from a keyword search. Crops are defined per-photo in `scripts/fetch-photos.mjs`, so if
a face sits badly in a card you can adjust the numbers there and re-run.

**Illustrations** are now only the logo, the favicon and the CTA band background, generated by
`scripts/generate-images.mjs` (`npm run images`). That script also still produces illustrated
Indian doctor, patient, department and article artwork, kept as an offline fallback — delete
the matching `.jpg` files and re-run `npm run use-photos` to fall back to it.

The Contact page embeds a live Google Map. Update `CONTACT.mapQuery` in
`client/src/lib/site.js` to your real address.

To swap in your own images — real photographs of your staff, or AI-generated ones from
**AI-IMAGE-PROMPTS.md** — drop files with the same base names into `client/public/images/**`
and run `npm run use-photos`.

---

## Before this goes live

This is a complete, working website, but the content is **sample content written for the
build**. Replace it with verified hospital information first:

1. **Doctor panel** — real names, registration-backed qualifications, designations and OPD
   timings. Remove any consultant who does not actually practise at the hospital.
2. **Phone numbers, address, email and map** — the numbers on the site are randomly generated
   placeholders, not any real hospital's. India has no reserved "fictional" number range, so a
   random 10-digit number could still belong to a real subscriber: replace all three with your
   own lines before launch. Update `client/src/lib/site.js` (nav, header, footer, buttons) and
   `server/src/data/site.js` (API), plus the JSON-LD block in `client/index.html`.
3. **Package prices and inclusions** — confirm with your billing and lab teams.
4. **Accreditations** — only claim NABH, NABL, Ayushman Bharat or CGHS status you actually
   hold. This is a regulated claim.
5. **Testimonials** — replace with real, consented patient feedback, or remove the section.
6. **Statistics** — bed count, consultant count, annual patient numbers.
7. **Legal pages** — the footer links to Privacy Policy, Terms, Patient Rights and Grievance
   currently point at `/contact`. Add real pages.
8. **Images** — the photographs are stock models, not your staff. Replace every consultant
   portrait with a photograph of the actual consultant, and every testimonial photo with the
   real patient (with written consent) or nothing. See `IMAGE-CREDITS.md`.
9. Point the appointment and contact forms at whatever your front desk actually monitors —
   add SMTP settings in `.env`, or wire `server/src/routes/forms.js` to your CRM or HIS.

The medical disclaimer in the footer and on every article should stay.
