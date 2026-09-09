# AI image prompts — LifeV 24 Care Hospital

The site currently uses **real photographs of Indian and South Asian doctors, staff and
patients** from Pexels (see `IMAGE-CREDITS.md`), plus original generated SVG artwork for the
department and article cards.

Use the prompts below if you would rather generate the images with AI. Save each file with the
**same base filename** as the one it replaces and run `npm run use-photos` — nothing in the
code needs to change.

---

## How to swap an illustration for a photo

1. Generate the image with your image tool of choice (Midjourney, Firefly, Imagen, Flux, …).
2. Save it into the matching folder under `client/public/images/` using the same base name,
   e.g. `dr-arvind-deshmukh.jpg` replaces `dr-arvind-deshmukh.svg`.
3. Run:

   ```bash
   npm run use-photos       # add --dry first if you want to preview
   ```

4. Rebuild: `npm run build`.

Recommended output sizes: doctors **1000×1200**, heroes **2000×1125**, facilities and blog
**1600×1000**, testimonial avatars **600×600**.

---

## The rule that applies to every prompt below

> **All people must be Indian** — Indian faces, Indian skin tones (wheatish through deep
> brown), black or greying black hair. Indian clothing where visible: saree or salwar kameez
> under the white coat for women, kurta for patients, turban and beard for a Sikh doctor,
> bindi and jhumka earrings where appropriate. Indian hospital signage and surroundings.
>
> Append to every prompt: `Indian people only, Indian hospital in India, natural Indian skin
> tones, no Caucasian or East Asian models, photorealistic, soft natural daylight, shallow
> depth of field, shot on 50mm, clean modern hospital interior, teal and navy colour accents`
>
> Negative prompt: `caucasian, western models, foreign faces, cartoon, distorted hands,
> extra fingers, text, watermark, logos, gore, blood`

---

## 1. Doctor portraits — `client/public/images/doctors/`

Frame every one as a **waist-up portrait, facing camera, warm confident expression, plain
softly blurred clinical background**, white coat over Indian attire, stethoscope, ID badge.

| File | Prompt |
|---|---|
| `dr-arvind-deshmukh.jpg` | Indian male interventional cardiologist, early 50s, salt-and-pepper moustache, white coat over a blue shirt, stethoscope, standing in a cardiac cath lab corridor |
| `dr-shalini-iyer.jpg` | Indian female obstetrician, late 40s, hair in a low bun, small maroon bindi, gold jhumka earrings, white coat over a deep-red cotton saree, warm reassuring smile |
| `dr-rajeev-nandan.jpg` | Indian male neurologist, 40s, full trimmed beard and glasses, white coat over an olive shirt, stethoscope, beside a lightbox with brain MRI films |
| `dr-meenakshi-rao.jpg` | Indian female paediatrician, mid 40s, long hair, bindi, white coat over a teal salwar kameez, paediatric stethoscope, gentle smile |
| `dr-harpreet-singh-bedi.jpg` | Indian Sikh male orthopaedic surgeon, late 50s, maroon turban, full white beard, white coat, arms folded, orthopaedic ward behind |
| `dr-anjali-verma.jpg` | Indian female dermatologist, early 30s, straight long hair, small bindi, white coat over a blush pink kurta, dermatoscope in hand |
| `dr-jaswinder-singh-chadha.jpg` | Indian Sikh male laparoscopic surgeon, 40s, dark green turban, full black beard, glasses, plain white coat, operation theatre corridor behind |
| `dr-farhan-ahmed.jpg` | Indian Muslim male pulmonologist, early 30s, short beard, white coat over a grey shirt, stethoscope, holding a chest X-ray |
| `dr-priya-nambiar.jpg` | Indian female nephrologist, early 50s, hair in a neat bun, glasses, small bindi, white coat over a green cotton saree, dialysis unit blurred behind |
| `dr-vikram-chaudhary.jpg` | Indian male urologist, 40s, thick moustache, white coat over a navy shirt, stethoscope, bright consultation room |
| `dr-mohan-krishnan.jpg` | South Indian male ENT surgeon, early 30s, glasses, clean shaven, white coat over a sky blue shirt, ENT head mirror around the neck |
| `dr-komalben-thakor.jpg` | Indian female physician, late 20s, long hair, bindi, white coat over a coral salwar kameez, stethoscope, bright consultation room |

## 2. Hero banners — `client/public/images/hero/` (2000×1125, subject on the RIGHT, left third clear for headline text)

| File | Prompt |
|---|---|
| `hero-1.jpg` | Indian hospital emergency entrance at night, ambulance with flashing lights parked under a lit porch, Indian paramedics in uniform wheeling a stretcher, warm light spilling from glass doors, cinematic wide shot, empty dark space on the left of the frame |
| `hero-2.jpg` | Group of five Indian doctors in white coats standing confidently in a bright modern hospital atrium, mixed men and women, one wearing a turban, one in a saree under her coat, arms folded, out-of-focus hospital background, subjects positioned on the right of the frame |
| `hero-3.jpg` | Indian mother in a saree holding her newborn baby in a bright maternity room, Indian female paediatrician in a white coat smiling beside them, soft window light, warm and hopeful, subjects on the right of the frame |

## 3. Facilities and departments — `client/public/images/facilities/` (1600×1000)

Shoot each as a **clean, well-lit real hospital interior in India**, with Indian staff where
people appear.

`emergency.jpg` busy but organised Indian emergency department, triage desk, staff in scrubs ·
`icu.jpg` modern ICU bed with ventilator and monitors, Indian nurse checking readings ·
`ot.jpg` modular operation theatre with laminar airflow and a large surgical lamp, Indian
surgical team gowned up · `cathlab.jpg` cardiac catheterisation lab with a C-arm and monitor
bank · `radiology.jpg` CT scanner room with an Indian radiographer at the console ·
`dialysis.jpg` row of dialysis chairs and machines, Indian technician attending a patient ·
`bloodbank.jpg` blood bank with component refrigerators and labelled units ·
`ambulance.jpg` white Indian advanced-life-support ambulance with red stripe, rear doors open
showing a stretcher and ventilator · `pharmacy.jpg` hospital pharmacy counter with an Indian
pharmacist and neatly stocked shelves · `rooms.jpg` clean private hospital room with an
attendant bed, television and a window · `physiogym.jpg` physiotherapy gym with parallel bars,
Indian physiotherapist assisting an elderly patient in a kurta · `insurance.jpg` hospital
insurance help desk with an Indian staff member assisting a family

Department images use the same folder: `cardiology.jpg`, `neuro.jpg`, `ortho.jpg`,
`gastro.jpg`, `nephro.jpg`, `urology.jpg`, `onco.jpg`, `pulmo.jpg`, `obg.jpg`, `paeds.jpg`,
`surgery.jpg`, `ent.jpg`, `eye.jpg`, `derma.jpg`, `medicine.jpg`, `physio.jpg` — prompt each
as "Indian [specialty] consultation or procedure room, Indian doctor examining an Indian
patient, bright modern clinical setting".

## 4. Health library — `client/public/images/blog/` (1600×900)

`chest-pain.jpg` middle-aged Indian man holding his chest at night, concerned Indian wife
beside him · `stroke.jpg` Indian neurologist pointing at a brain CT scan on a monitor to a
family · `diabetes.jpg` Indian thali of rotis, dal, sabzi and salad next to a glucometer ·
`fever.jpg` Indian woman checking a child's temperature during monsoon, rain on the window ·
`knee.jpg` elderly Indian man climbing stairs holding the railing, hand on knee ·
`pregnancy.jpg` pregnant Indian woman in a salwar kameez at an antenatal check with a female
doctor · `kidney-stone.jpg` glass of water and lemon on a table beside a kidney diagram ·
`newborn.jpg` Indian newborn baby sleeping swaddled, mother's hands visible

## 5. Testimonial avatars — `client/public/images/misc/` (600×600 square, head and shoulders)

`patient-1.jpg` elderly Indian man, 60s, white beard, white Gandhi topi, kurta ·
`patient-2.jpg` young Indian woman, 20s, blue dupatta, bindi, warm smile ·
`patient-3.jpg` Indian man, 40s, moustache, cloth wrapped around the head, weathered face ·
`patient-4.jpg` South Indian woman, 30s, cotton saree, bindi, nose stud ·
`patient-5.jpg` Indian woman, 50s, red headscarf, warm open smile ·
`patient-6.jpg` senior Sikh Indian man, 60s, green turban, white beard, smiling

## 6. Other — `client/public/images/misc/`

`about-hospital.jpg` exterior of a modern multi-storey Indian hospital in daylight, ambulance
at the porch, signage in English and Hindi · `opd-scene.jpg` Indian doctor consulting an
elderly Indian patient across a desk in a bright OPD room · `cta-bg.jpg` abstract dark navy
and teal medical background, low contrast so white text reads over it · `map.jpg` keep the
generated SVG, or embed a real Google Map iframe on the Contact page

---

## Before you go live

- Replace the sample doctor names, qualifications, OPD timings and package prices with your
  real, verified hospital information.
- If you use real photographs of your consultants and patients, get **written consent**,
  especially for the patient testimonials.
- Do not present AI-generated people as real named doctors or real named patients. Either use
  genuine photographs of the actual people, or keep the illustrations.
