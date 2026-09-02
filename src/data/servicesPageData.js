export const servicesBanner = {
  title: "Our Medical Services",
  breadcrumb: "Home / Service",
  eyebrow: "Medical Services",
  headline: "Complete Care, Available Around the Clock",
  body: "LifeV24Care Hospital brings together experienced doctors, modern diagnostics, and a genuinely 24x7 emergency team — so whatever care you need, it's available when you need it, not just during standard hours. Explore our departments below, or call our emergency line any time, day or night."
};

export const fullDepartments = [
  {
    id: "emergency",
    key: "emergency",
    iconName: "ambulance",
    title: "24x7 Emergency Care",
    shortDesc: "Round-the-clock emergency team, on-call doctors, and ambulance support — always ready, any hour of the day.",
    overview: "Medical emergencies don't wait for morning, and neither do we. LifeV24Care Hospital's emergency department is staffed and equipped around the clock, every day of the year, so that when something urgent happens, help is never more than a call away.",
    checklist: [
      "24x7 duty doctor and nursing staff on site",
      "Emergency stabilization and trauma care unit",
      "On-call specialist support across all departments",
      "Ambulance service for critical patient transport",
      "In-house diagnostics for rapid clinical assessment"
    ],
    whenToComeIn: [
      "Accidents, trauma, and acute physical injuries",
      "Severe pain, breathing difficulty, or chest discomfort",
      "High fever with complications, especially in infants & children",
      "Any situation where you're unsure but worried — come in, we'd rather reassure you than have you wait"
    ],
    faqs: [
      { q: "Is the emergency department really open 24 hours?", a: "Yes — our emergency team and duty doctor are on-site around the clock, every single day including weekends and national holidays." },
      { q: "Do I need to call ahead before coming?", a: "No, you can walk in directly to our Sector 34 hospital. Calling ahead (+91 172 247 0999) helps our trauma desk prepare in advance for serious cases." },
      { q: "Is ambulance service available for dispatch?", a: "Yes — call our 24x7 emergency desk at +91 172 247 0999 for immediate ambulance dispatch across Chandigarh and Tricity." }
    ]
  },
  {
    id: "medicine",
    key: "medicine",
    iconName: "pill",
    title: "General Medicine",
    shortDesc: "Diagnosis and treatment for everyday illness, infections, and chronic conditions like diabetes and hypertension.",
    overview: "Our General Medicine department provides comprehensive diagnosis, non-surgical treatment, and long-term care management for acute infections and complex lifestyle diseases.",
    checklist: [
      "Expert management of diabetes, hypertension & thyroid disorders",
      "Treatment for acute viral, bacterial, and seasonal infections",
      "Routine preventive health checkups and lab screening",
      "Comprehensive adult immunization and wellness counseling",
      "Multispecialty referral coordination for complex cases"
    ],
    whenToComeIn: [
      "Persistent high fever, chills, or unresolved body aches",
      "Uncontrolled blood sugar or fluctuating blood pressure readings",
      "Chronic fatigue, unexplained weight loss, or persistent cough",
      "Routine annual health checks and prescription renewals"
    ],
    faqs: [
      { q: "What are the OPD consulting hours for General Medicine?", a: "Specialist OPD runs Monday to Saturday from 9:00 AM to 8:00 PM. General Medicine duty doctors are available 24x7 for urgent consultations." },
      { q: "Can I get my routine lab tests done during my visit?", a: "Yes, our in-house automated pathology lab operates 24x7 right on the hospital premises for fast test reporting." }
    ]
  },
  {
    id: "surgery",
    key: "surgery",
    iconName: "crosshair",
    title: "General & Laparoscopic Surgery",
    shortDesc: "Modern surgical care for hernias, appendicitis, gallbladder issues, and other common procedures.",
    overview: "LifeV24Care Hospital features state-of-the-art sterile modular operation theatres designed for minimal-access laparoscopic and open surgical procedures with fast recovery timelines.",
    checklist: [
      "Laparoscopic cholecystectomy (gallbladder removal)",
      "Laparoscopic appendectomy and hernia repairs",
      "Trauma surgery and wound debridement",
      "Post-operative ICU recovery & monitoring",
      "Pre-anesthetic evaluation & day-care surgery options"
    ],
    whenToComeIn: [
      "Sudden severe abdominal pain (suspected appendicitis or gallbladder pain)",
      "Painful swelling or bulge in abdomen or groin (hernia)",
      "Non-healing wounds, abscesses, or surgical consultations",
      "Elective surgical evaluations recommended by your physician"
    ],
    faqs: [
      { q: "What is the advantage of laparoscopic surgery?", a: "Laparoscopic (keyhole) surgery involves smaller incisions, significantly less post-operative pain, faster healing, and shorter hospital stays." },
      { q: "Are emergency surgeries performed at night?", a: "Yes, our surgical team and sterile OTs are ready 24x7 for emergency appendectomies, trauma stabilization, and acute surgical conditions." }
    ]
  },
  {
    id: "gynaecology",
    key: "gynaecology",
    iconName: "heart-pulse",
    title: "Gynaecology & Obstetrics",
    shortDesc: "Complete women's health care — antenatal checkups, safe delivery, and treatment for gynaecological conditions.",
    overview: "Dedicated to complete women's healthcare across all stages of life, from routine prenatal care and high-risk pregnancy monitoring to safe delivery and advanced gynaecological treatment.",
    checklist: [
      "Comprehensive antenatal care & fetal ultrasound monitoring",
      "Normal and Caesarean section deliveries with 24x7 care",
      "Treatment for PCOD/PCOS, menstrual disorders & fibroids",
      "Infertility evaluation and reproductive counseling",
      "Menopausal health and cervical cancer screening"
    ],
    whenToComeIn: [
      "Onset of labor pains, water breaking, or pregnancy complications",
      "Severe pelvic pain, abnormal bleeding, or menstrual irregularities",
      "Routine prenatal visits and fetal growth monitoring",
      "Postnatal checkups and newborn care guidance"
    ],
    faqs: [
      { q: "Are gynaecologists available for night emergencies?", a: "Yes, our Gynaecology & Obstetrics team is on-call 24x7 for emergency labor admissions and delivery support." },
      { q: "Do you have private labor and recovery rooms?", a: "Yes, we offer clean, comfortable private delivery and recovery suites equipped for patient comfort." }
    ]
  },
  {
    id: "paediatrics",
    key: "paediatrics",
    iconName: "baby",
    title: "Paediatrics",
    shortDesc: "Gentle, specialized care for infants and children, including vaccination and growth monitoring.",
    overview: "Child-friendly pediatric care designed to support healthy growth, treat acute childhood illnesses, administer routine immunizations, and handle pediatric emergencies.",
    checklist: [
      "Infant & child vaccination according to national immunization schedule",
      "Treatment for childhood fever, asthma, respiratory & stomach infections",
      "Growth, development, and pediatric nutrition monitoring",
      "Pediatric emergency triage and hydration management",
      "Gentle, compassionate nursing staff trained in pediatric care"
    ],
    whenToComeIn: [
      "High fever in infants under 3 months or persistent fever over 102°F",
      "Breathing difficulty, wheezing, or severe lethargy in children",
      "Severe vomiting, diarrhea, or dehydration symptoms",
      "Routine vaccination and developmental milestone checkups"
    ],
    faqs: [
      { q: "Is pediatric emergency care available at night?", a: "Yes, our emergency OPD provides immediate pediatric assessment and emergency care 24 hours a day." },
      { q: "Do you maintain standard vaccine stocks?", a: "Yes, we stock government-approved vaccines stored under strict cold-chain conditions." }
    ]
  },
  {
    id: "orthopaedics",
    key: "orthopaedics",
    iconName: "bone",
    title: "Orthopaedics",
    shortDesc: "Treatment for fractures, joint pain, sprains, and musculoskeletal injuries, including emergency fracture care.",
    overview: "Comprehensive bone, joint, and muscle care ranging from emergency fracture reduction and plaster casting to joint pain management and orthopedic surgery.",
    checklist: [
      "Emergency fracture reduction, splinting & plaster casting",
      "Joint pain evaluation for arthritis and ligament injuries",
      "Spine care, back pain & sciatica management",
      "Sports injury treatment and ligament sprain care",
      "Physiotherapy and mobility rehabilitation support"
    ],
    whenToComeIn: [
      "Accidental falls, bone fractures, or joint dislocations",
      "Inability to bear weight on leg or severe limb pain following injury",
      "Sudden intense joint swelling, redness, or immobility",
      "Chronic knee, hip, or back pain affecting daily mobility"
    ],
    faqs: [
      { q: "Can I get an X-ray done immediately for a fracture?", a: "Yes, our digital X-ray and radiology services operate 24x7 for instant trauma imaging." },
      { q: "Are orthopedic splints and plasters applied in emergency OPD?", a: "Yes, duty orthopedicians perform immediate fracture alignment, splinting, and casting in the OPD." }
    ]
  },
  {
    id: "ent",
    key: "ent",
    iconName: "ear",
    title: "ENT (Ear, Nose & Throat)",
    shortDesc: "Diagnosis and treatment of ear, nose, and throat conditions for all ages.",
    overview: "Specialized care for disorders of the ear, nose, throat, head, and neck, including sinusitis, hearing evaluation, tonsillitis, and emergency foreign body removal.",
    checklist: [
      "Treatment for sinus infections, allergic rhinitis & nasal blockage",
      "Ear infection care, eardrum evaluation & wax removal",
      "Tonsillitis, pharyngitis & voice hoarseness management",
      "Foreign body removal from ear, nose, or throat",
      "Hearing assessment and vertigo/dizziness management"
    ],
    whenToComeIn: [
      "Sudden ear discharge, severe earache, or sudden hearing loss",
      "Foreign object lodged in ear, nose, or throat",
      "Uncontrolled nosebleeds (epistaxis) or severe sinus headache",
      "Persistent throat pain, difficulty swallowing, or breathing obstruction"
    ],
    faqs: [
      { q: "What are the OPD timings for ENT specialists?", a: "ENT OPD consultations are available Monday through Saturday from 10:00 AM to 7:00 PM. Emergency duty doctors handle acute ENT cases 24x7." }
    ]
  },
  {
    id: "diagnostics",
    key: "diagnostics",
    iconName: "microscope",
    title: "Diagnostic Lab & Radiology",
    shortDesc: "In-house pathology and testing for fast, accurate results — critical for both emergencies and routine visits.",
    overview: "Equipped with automated pathology analyzers, digital X-ray, ECG, and ultrasound to provide rapid, precise diagnostic reports essential for timely clinical decisions.",
    checklist: [
      "24x7 Automated pathology lab (CBC, Liver/Kidney profiles, Lipid)",
      "Digital X-ray imaging for trauma & chest evaluation",
      "Electrocardiogram (ECG) for cardiac evaluation",
      "Diagnostic Ultrasound & Color Doppler scanning",
      "Fast-track sample collection and online report delivery"
    ],
    whenToComeIn: [
      "Doctor-prescribed blood, urine, or pathology lab tests",
      "Emergency trauma X-ray or chest imaging needs",
      "Routine pre-employment or annual health checkup packages",
      "Fasting blood sugar and lipid profile screenings"
    ],
    faqs: [
      { q: "Is the diagnostic lab open 24 hours?", a: "Yes, our automated pathology lab and emergency radiology operate 24x7 every day." },
      { q: "How quickly are test reports available?", a: "Emergency blood profiles and digital X-rays are reported within 1 to 2 hours." }
    ]
  }
];

export const closingCtaServices = {
  heading: "Not Sure Which Department You Need?",
  body: "Call us and our team will guide you to the right doctor — or walk into our 24x7 OPD any time.",
  phone: "+91 172 247 0000"
};
