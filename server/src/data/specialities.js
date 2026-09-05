// Centres of Excellence at LifeV 24 Care Hospital.
// All copy is original, written for this project.

export const specialities = [
  {
    slug: 'cardiology',
    name: 'Cardiology & Cardiac Sciences',
    short: 'Round-the-clock heart care, from ECG to primary angioplasty.',
    icon: 'heart',
    image: '/images/facilities/cardiology.jpg',
    intro:
      'Chest pain does not wait for morning. Our cardiac team runs a 24x7 chest-pain protocol with door-to-ECG in under ten minutes, an on-site cath lab and an interventional cardiologist reachable at any hour of the night.',
    highlights: [
      'Primary angioplasty for heart attack, available 24x7',
      'Coronary angiography and stenting through the wrist (radial) route',
      'Pacemaker, ICD and CRT device implantation',
      '2D Echo, colour Doppler, TMT and Holter monitoring',
      'Structured cardiac rehabilitation and diet counselling'
    ],
    conditions: [
      'Heart attack and unstable angina',
      'Blocked coronary arteries',
      'Heart failure and cardiomyopathy',
      'Rhythm disorders and palpitations',
      'High blood pressure and cholesterol'
    ]
  },
  {
    slug: 'neurosciences',
    name: 'Neurology & Neurosurgery',
    short: 'A stroke-ready unit where the clock is treated as a patient.',
    icon: 'brain',
    image: '/images/facilities/neuro.jpg',
    intro:
      'Every minute of a stroke costs close to two million brain cells. Our neuro team keeps a golden-hour pathway ready: CT on arrival, a thrombolysis decision at the bedside, and a neurosurgical theatre that can be opened within the hour.',
    highlights: [
      'Golden-hour stroke thrombolysis pathway',
      'Brain and spine surgery, including microsurgery',
      'Epilepsy evaluation with video EEG',
      'Nerve conduction studies and EMG',
      'Neuro-rehabilitation with physiotherapy and speech therapy'
    ],
    conditions: [
      'Stroke and transient ischaemic attack',
      'Head and spine injury',
      'Epilepsy and seizure disorders',
      'Parkinson disease and movement disorders',
      'Slip disc, sciatica and cervical pain'
    ]
  },
  {
    slug: 'orthopaedics',
    name: 'Orthopaedics & Joint Replacement',
    short: 'Getting you back on your feet, with your own gait.',
    icon: 'bone',
    image: '/images/facilities/ortho.jpg',
    intro:
      'Whether it is a knee that has stopped climbing stairs or a fracture from a highway accident, our orthopaedic surgeons plan for one outcome: independent movement without pain. Most joint replacement patients stand the same evening.',
    highlights: [
      'Total knee and hip replacement, including bilateral surgery',
      'Arthroscopic (keyhole) knee and shoulder surgery',
      'Complex trauma and poly-trauma fracture fixation',
      'Spine surgery and minimally invasive discectomy',
      'Sports injury care and post-operative physiotherapy'
    ],
    conditions: [
      'Knee and hip arthritis',
      'Fractures and dislocations',
      'ACL and meniscus tears',
      'Frozen shoulder and rotator cuff injury',
      'Back pain and slip disc'
    ]
  },
  {
    slug: 'gastroenterology',
    name: 'Gastroenterology & Liver Care',
    short: 'Digestive and liver medicine with same-day endoscopy.',
    icon: 'stomach',
    image: '/images/facilities/gastro.jpg',
    intro:
      'Long-standing acidity, unexplained weight loss or a jaundice that will not settle all deserve a proper answer. Our gastro suite offers diagnostic and therapeutic endoscopy on the same day, supported by a liver clinic and dietetics.',
    highlights: [
      'Upper GI endoscopy and colonoscopy',
      'ERCP for bile duct stones and blocks',
      'Liver clinic for hepatitis, fatty liver and cirrhosis',
      'Fibroscan for liver stiffness assessment',
      'Nutrition planning for IBS and inflammatory bowel disease'
    ],
    conditions: [
      'Acidity, reflux and gastritis',
      'Gallstones and bile duct blockage',
      'Fatty liver and hepatitis B and C',
      'Irritable bowel syndrome and colitis',
      'GI bleeding and chronic constipation'
    ]
  },
  {
    slug: 'nephrology',
    name: 'Nephrology & Dialysis',
    short: 'A 12-station dialysis floor running three shifts a day.',
    icon: 'kidney',
    image: '/images/facilities/nephro.jpg',
    intro:
      'Kidney disease is a long journey, and it needs a team that stays. Our nephrology unit runs maintenance haemodialysis across three shifts, with dedicated stations for hepatitis-positive patients and a separate bay for critically ill patients.',
    highlights: [
      'Maintenance haemodialysis, three shifts daily',
      'Isolated stations for HBsAg and HCV positive patients',
      'Peritoneal dialysis training for home care',
      'AV fistula creation and permcath insertion',
      'Kidney transplant workup and follow-up'
    ],
    conditions: [
      'Acute and chronic kidney disease',
      'Diabetic and hypertensive kidney damage',
      'Nephrotic syndrome',
      'Recurrent urinary infections',
      'Electrolyte and acid-base disorders'
    ]
  },
  {
    slug: 'urology',
    name: 'Urology & Andrology',
    short: 'Laser stone clearance and keyhole urological surgery.',
    icon: 'urology',
    image: '/images/facilities/urology.jpg',
    intro:
      'Urinary stones are common across our region, and most of ours are cleared without a single large cut. The department combines laser lithotripsy, endoscopic surgery and a men-health clinic that is run with complete privacy.',
    highlights: [
      'Laser lithotripsy (RIRS) and PCNL for kidney stones',
      'TURP for enlarged prostate',
      'Laparoscopic urological surgery',
      'Uroflowmetry and urodynamic testing',
      'Male infertility and andrology clinic'
    ],
    conditions: [
      'Kidney, ureteric and bladder stones',
      'Enlarged prostate and urinary obstruction',
      'Blood in urine',
      'Urinary incontinence',
      'Male infertility and erectile dysfunction'
    ]
  },
  {
    slug: 'oncology',
    name: 'Medical & Surgical Oncology',
    short: 'Cancer care planned by a tumour board, not a single opinion.',
    icon: 'ribbon',
    image: '/images/facilities/onco.jpg',
    intro:
      'Every cancer case at LifeV 24 Care is discussed in a weekly tumour board, where the surgeon, physician and pathologist agree on one plan before the family is counselled. Day-care chemotherapy runs in a quiet, dedicated wing.',
    highlights: [
      'Multidisciplinary tumour board review',
      'Day-care chemotherapy and immunotherapy',
      'Cancer surgery, including laparoscopic resection',
      'Biopsy, FNAC and immunohistochemistry',
      'Pain and palliative care support for families'
    ],
    conditions: [
      'Breast, cervical and ovarian cancer',
      'Oral, head and neck cancer',
      'Colon, stomach and gallbladder cancer',
      'Lung cancer',
      'Blood cancers and lymphoma'
    ]
  },
  {
    slug: 'pulmonology',
    name: 'Pulmonology & Critical Care',
    short: 'An intensivist-led ICU with ventilators and bronchoscopy.',
    icon: 'lungs',
    image: '/images/facilities/pulmo.jpg',
    intro:
      'Breathlessness is frightening, and it is treated here as an emergency. Our chest physicians and intensivists share one ICU floor, which means a deteriorating patient is seen by the right specialist without being shifted anywhere.',
    highlights: [
      'Intensivist-led ICU with invasive and non-invasive ventilation',
      'Video bronchoscopy and pleural procedures',
      'Pulmonary function testing and sleep study',
      'Asthma and COPD clinic with inhaler training',
      'Tuberculosis diagnosis and DOTS linkage'
    ],
    conditions: [
      'Asthma and COPD',
      'Pneumonia and severe respiratory infection',
      'Tuberculosis',
      'Sleep apnoea and snoring',
      'Interstitial lung disease'
    ]
  },
  {
    slug: 'obstetrics-gynaecology',
    name: 'Obstetrics & Gynaecology',
    short: 'Birthing suites, high-risk pregnancy care and painless delivery.',
    icon: 'mother',
    image: '/images/facilities/obg.jpg',
    intro:
      'From the first missed period to the day you go home with your baby, one consultant follows your file. Our labour rooms support painless (epidural) delivery, and an obstetrician and paediatrician are present in the hospital at all hours.',
    highlights: [
      'Painless normal delivery with epidural analgesia',
      'High-risk pregnancy and twin pregnancy care',
      'Laparoscopic hysterectomy and fibroid surgery',
      'Infertility evaluation and IUI counselling',
      'Antenatal classes, lactation and diet support'
    ],
    conditions: [
      'Normal and caesarean delivery',
      'PCOS and menstrual disorders',
      'Fibroids and ovarian cysts',
      'Menopause-related problems',
      'Cervical cancer screening'
    ]
  },
  {
    slug: 'paediatrics',
    name: 'Paediatrics & Neonatology',
    short: 'A Level-III NICU and a children ward that does not feel like one.',
    icon: 'child',
    image: '/images/facilities/paeds.jpg',
    intro:
      'Small patients need a different hospital. Ours has warmers, a Level-III NICU with ventilators for premature babies, a play-friendly ward, and paediatricians who explain everything to parents in plain language.',
    highlights: [
      'Level-III NICU with neonatal ventilation and phototherapy',
      'Paediatric intensive care unit (PICU)',
      'Complete immunisation and growth-monitoring clinic',
      'Newborn hearing and metabolic screening',
      'Paediatric nutrition and development follow-up'
    ],
    conditions: [
      'Premature and low birth weight babies',
      'Neonatal jaundice and infection',
      'Childhood asthma and recurrent cough',
      'Diarrhoea and dehydration',
      'Growth and developmental delay'
    ]
  },
  {
    slug: 'general-surgery',
    name: 'General & Laparoscopic Surgery',
    short: 'Keyhole surgery, small scars and shorter hospital stays.',
    icon: 'scalpel',
    image: '/images/facilities/surgery.jpg',
    intro:
      'Most of our gall bladder, hernia and appendix operations are done through three small ports, and the patient is usually home the next morning. Modular operation theatres with laminar airflow keep infection rates low.',
    highlights: [
      'Laparoscopic gall bladder, hernia and appendix surgery',
      'Piles, fissure and fistula treatment, including laser',
      'Thyroid and breast lump surgery',
      'Diabetic foot and wound care',
      'Day-care surgery with same-day discharge'
    ],
    conditions: [
      'Gallstones and appendicitis',
      'Hernia of all types',
      'Piles, fissure and fistula',
      'Thyroid swelling and breast lumps',
      'Non-healing ulcers and abscess'
    ]
  },
  {
    slug: 'ent',
    name: 'ENT & Head-Neck Surgery',
    short: 'Ear, nose and throat care with endoscopic sinus surgery.',
    icon: 'ear',
    image: '/images/facilities/ent.jpg',
    intro:
      'Blocked noses, recurring ear discharge and a voice that has changed are all worth investigating properly. Our ENT team uses endoscopy and microscopy in the clinic itself, so a diagnosis rarely takes more than one visit.',
    highlights: [
      'Functional endoscopic sinus surgery (FESS)',
      'Tympanoplasty and micro-ear surgery',
      'Tonsil and adenoid surgery for children',
      'Audiometry, hearing aid and vertigo assessment',
      'Head and neck lump evaluation'
    ],
    conditions: [
      'Chronic sinusitis and nasal blockage',
      'Ear discharge and hearing loss',
      'Tonsillitis and snoring',
      'Vertigo and imbalance',
      'Hoarseness and throat pain'
    ]
  },
  {
    slug: 'ophthalmology',
    name: 'Ophthalmology (Eye Care)',
    short: 'Stitchless cataract surgery and a retina clinic.',
    icon: 'eye',
    image: '/images/facilities/eye.jpg',
    intro:
      'Our eye theatre runs phacoemulsification cataract surgery that needs no stitches and no hospital stay, with a choice of Indian and imported lenses explained honestly, including what each one actually costs.',
    highlights: [
      'Stitchless phaco cataract surgery with foldable lens',
      'Retina clinic with laser and intravitreal injections',
      'Glaucoma screening and management',
      'Diabetic eye check-up camps',
      'Squint and paediatric eye care'
    ],
    conditions: [
      'Cataract',
      'Diabetic retinopathy',
      'Glaucoma',
      'Dry eye and allergic conjunctivitis',
      'Refractive errors'
    ]
  },
  {
    slug: 'dermatology',
    name: 'Dermatology & Cosmetology',
    short: 'Skin, hair and nail treatment backed by clinical evidence.',
    icon: 'skin',
    image: '/images/facilities/derma.jpg',
    intro:
      'Skin problems affect confidence as much as health. Our dermatologists treat long-standing acne, pigmentation and hair fall with protocols that are explained in advance, including how many sessions are realistically needed.',
    highlights: [
      'Acne, pigmentation and melasma treatment',
      'Hair fall evaluation, PRP and dermoscopy',
      'Psoriasis, eczema and vitiligo clinic',
      'Chemical peels and laser hair reduction',
      'Wart, mole and skin tag removal'
    ],
    conditions: [
      'Acne and acne scars',
      'Hair fall and dandruff',
      'Fungal infections',
      'Psoriasis and eczema',
      'Pigmentation and dark circles'
    ]
  },
  {
    slug: 'internal-medicine',
    name: 'Internal Medicine & Diabetology',
    short: 'The first door for fever, diabetes and blood pressure.',
    icon: 'stethoscope',
    image: '/images/facilities/medicine.jpg',
    intro:
      'When you are not sure which specialist to see, start here. Our physicians handle everything from seasonal fever and dengue to long-term diabetes and thyroid care, and refer within the hospital only when it is genuinely needed.',
    highlights: [
      'Diabetes clinic with HbA1c and foot screening',
      'Hypertension and thyroid management',
      'Dengue, malaria, typhoid and viral fever care',
      'Preventive health check-ups',
      'Vaccination for adults and travellers'
    ],
    conditions: [
      'Diabetes mellitus',
      'High blood pressure',
      'Thyroid disorders',
      'Seasonal and tropical fevers',
      'Anaemia and vitamin deficiency'
    ]
  },
  {
    slug: 'physiotherapy',
    name: 'Physiotherapy & Rehabilitation',
    short: 'Recovery that continues after the discharge summary.',
    icon: 'physio',
    image: '/images/facilities/physio.jpg',
    intro:
      'A surgery is only half the treatment. Our physiotherapy gym works with post-operative, stroke and sports patients, and every plan comes with home exercises written in Hindi and English for the family to follow.',
    highlights: [
      'Post-operative and post-fracture rehabilitation',
      'Stroke and neuro rehabilitation',
      'Sports injury and posture correction',
      'Electrotherapy, traction and dry needling',
      'Home-exercise plans in Hindi and English'
    ],
    conditions: [
      'Post joint-replacement stiffness',
      'Stroke weakness and paralysis',
      'Neck and lower back pain',
      'Sports and ligament injuries',
      'Frozen shoulder'
    ]
  }
];

export const getSpeciality = (slug) => specialities.find((s) => s.slug === slug);
