// Hospital-wide information: facilities, stats, testimonials, insurers, FAQs, contact.

export const hospital = {
  name: 'LifeV 24 Care Hospital',
  tagline: 'Care that never closes.',
  established: 2011,
  website: 'https://lifev24carehospital.com',
  emergency: '+91 83606 59127',
  ambulance: '+91 83606 59127',
  reception: '+91 62844 33778',
  email: 'care@lifev24carehospital.com',
  appointmentsEmail: 'appointments@lifev24carehospital.com',
  address: {
    line1: 'LifeV 24 Care Hospital, Plot No. 24, Health City Road',
    line2: 'Near Ring Road Crossing, Sector 12',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110085',
    country: 'India'
  },
  map: 'https://maps.google.com/?q=28.7041,77.1025',
  hours: {
    emergency: 'Open 24 hours, all 365 days',
    opd: 'Monday to Saturday, 9:00 AM to 8:00 PM',
    sunday: 'Sunday OPD, 10:00 AM to 2:00 PM (on appointment)',
    diagnostics: 'Laboratory and X-ray, 24 hours'
  },
  social: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    youtube: 'https://youtube.com/',
    linkedin: 'https://linkedin.com/',
    whatsapp: 'https://wa.me/918360659127'
  }
};

export const stats = [
  { value: 20, suffix: '+', label: 'Years of service' },
  { value: 250, suffix: '+', label: 'Inpatient beds' },
  { value: 60, suffix: '+', label: 'Expert consultants' },
  { value: 16, suffix: '', label: 'Specialities under one roof' },
  { value: 45000, suffix: '+', label: 'Patients treated every year' },
  { value: 24, suffix: 'x7', label: 'Emergency and trauma care' }
];

export const facilities = [
  {
    slug: 'emergency-trauma',
    name: '24x7 Emergency & Trauma Centre',
    image: '/images/facilities/emergency.jpg',
    summary:
      'A dedicated emergency floor with triage in under a minute, resuscitation bays, an in-house casualty medical officer at every hour and a trauma surgeon on call.',
    points: ['Triage within 60 seconds', 'Resuscitation and observation bays', 'Trauma team activation protocol']
  },
  {
    slug: 'icu-critical-care',
    name: 'Intensive Care Units (ICU, MICU, NICU)',
    image: '/images/facilities/icu.jpg',
    summary:
      'Fifty critical care beds across medical, surgical, cardiac and neonatal units, each with a ventilator, central monitoring and a one-to-two nurse ratio.',
    points: ['Intensivist-led rounds twice daily', 'Central monitoring station', 'Level-III NICU for premature babies']
  },
  {
    slug: 'modular-ot',
    name: 'Modular Operation Theatres',
    image: '/images/facilities/ot.jpg',
    summary:
      'Five modular theatres with laminar airflow and HEPA filtration, including a dedicated theatre for joint replacement and one kept free for emergencies at all times.',
    points: ['Laminar airflow and HEPA filters', 'C-arm and laparoscopic towers', 'One theatre always reserved for emergencies']
  },
  {
    slug: 'cath-lab',
    name: 'Cardiac Cath Lab',
    image: '/images/facilities/cathlab.jpg',
    summary:
      'A flat-panel cath lab used for angiography, angioplasty and pacemaker implantation, staffed round the clock for heart-attack emergencies.',
    points: ['24x7 primary angioplasty', 'Radial (wrist) route procedures', 'Temporary and permanent pacing']
  },
  {
    slug: 'diagnostics',
    name: 'Radiology & Diagnostics',
    image: '/images/facilities/radiology.jpg',
    summary:
      'CT, digital X-ray, ultrasound, colour Doppler, mammography and echocardiography, with an NABL-accredited laboratory that runs through the night.',
    points: ['CT scan and digital X-ray', 'NABL-accredited pathology lab', 'Reports on WhatsApp and email']
  },
  {
    slug: 'dialysis',
    name: 'Dialysis Unit',
    image: '/images/facilities/dialysis.jpg',
    summary:
      'Twelve dialysis stations running three shifts a day, with isolated machines for hepatitis-positive patients and a bedside unit for ICU patients.',
    points: ['Three shifts daily', 'Isolation machines for HBsAg and HCV', 'Bedside dialysis in ICU']
  },
  {
    slug: 'blood-bank',
    name: 'Blood Bank & Transfusion Services',
    image: '/images/facilities/bloodbank.jpg',
    summary:
      'A licensed blood storage and component facility with cross-matching available round the clock, and regular voluntary donation drives with local colleges.',
    points: ['24x7 cross-matching', 'Component separation', 'Voluntary donation camps']
  },
  {
    slug: 'ambulance',
    name: 'Advanced Life Support Ambulance',
    image: '/images/facilities/ambulance.jpg',
    summary:
      'A fleet of four ambulances, two of them advanced life support units with a ventilator, defibrillator and a trained paramedic on board.',
    points: ['Ventilator-equipped ALS units', 'GPS tracked, average 12-minute city response', 'Trained paramedic on every trip']
  },
  {
    slug: 'pharmacy',
    name: '24x7 In-House Pharmacy',
    image: '/images/facilities/pharmacy.jpg',
    summary:
      'A round-the-clock pharmacy stocking emergency, critical care and generic medicines, with printed bills and a clearly displayed discount policy.',
    points: ['Open all 24 hours', 'Generic alternatives offered', 'Home delivery within 5 km']
  },
  {
    slug: 'patient-rooms',
    name: 'Patient Rooms & Wards',
    image: '/images/facilities/rooms.jpg',
    summary:
      'From clean general wards to twin-sharing and private deluxe rooms with an attendant bed, television, hot water and in-room dining from the hospital kitchen.',
    points: ['General, twin-sharing and private deluxe', 'Attendant bed in private rooms', 'Dietician-planned patient meals']
  },
  {
    slug: 'physio-gym',
    name: 'Physiotherapy & Rehab Gym',
    image: '/images/facilities/physiogym.jpg',
    summary:
      'An equipped rehabilitation gym with parallel bars, traction, electrotherapy and a gait-training area used by post-surgical and stroke patients.',
    points: ['Gait training area', 'Electrotherapy and traction', 'In-patient bedside physiotherapy']
  },
  {
    slug: 'insurance-desk',
    name: 'Insurance & TPA Help Desk',
    image: '/images/facilities/insurance.jpg',
    summary:
      'A single desk that handles cashless approvals, paperwork and follow-up with your insurer, so the family is not running between counters during an admission.',
    points: ['Cashless admission support', 'Ayushman Bharat and CGHS assistance', 'Itemised, transparent billing']
  }
];

export const whyChooseUs = [
  {
    icon: 'clock',
    title: 'Truly 24x7, not just the sign board',
    text: 'Emergency, laboratory, pharmacy, X-ray and ambulance run through the night with consultants physically on call, because most emergencies do not arrive during OPD hours.'
  },
  {
    icon: 'rupee',
    title: 'Costs told to you in advance',
    text: 'Before any planned admission you get a written estimate. If the treatment changes, we tell you before the bill does. No hidden line items, no surprises at discharge.'
  },
  {
    icon: 'team',
    title: 'One team, one plan',
    text: 'Complex cases are discussed together by the specialists involved so a family hears a single agreed plan, instead of three different opinions in three different corridors.'
  },
  {
    icon: 'shield',
    title: 'Infection control taken seriously',
    text: 'Modular theatres, hand-hygiene audits and monthly infection-rate reviews. Our surgical site infection rate is audited internally and shared with the clinical team every month.'
  },
  {
    icon: 'heart',
    title: 'Explained in your language',
    text: 'Our doctors and nurses speak Hindi, English and several regional languages, and discharge instructions are written in a language the family can actually read at home.'
  },
  {
    icon: 'insurance',
    title: 'Cashless made simple',
    text: 'Empanelled with major insurers and TPAs. Our help desk fills the forms, follows up on approvals and keeps the family informed at every stage.'
  }
];

export const testimonials = [
  {
    name: 'Ramesh Gupta',
    city: 'Rohini, Delhi',
    treatment: 'Angioplasty',
    photo: '/images/misc/patient-1.jpg',
    rating: 5,
    text: 'My father had chest pain at 2 in the night. We reached LifeV 24 Care in twenty minutes and the ECG was done before I finished the paperwork. The angioplasty was over by 4 AM. Dr. Deshmukh came out and explained everything to us himself.'
  },
  {
    name: 'Sunita Yadav',
    city: 'Sector 12, New Delhi',
    treatment: 'Painless delivery',
    photo: '/images/misc/patient-2.jpg',
    rating: 5,
    text: 'I was very scared about delivery. Dr. Shalini Iyer explained the epidural to me and to my husband in detail. My daughter was born normally and I was walking the same evening. The nurses were patient with a first-time mother like me.'
  },
  {
    name: 'Mohd. Aslam',
    city: 'Bawana, Delhi',
    treatment: 'Knee replacement',
    photo: '/images/misc/patient-3.jpg',
    rating: 5,
    text: 'I had stopped climbing stairs for two years. Dr. Bedi did both knees. The physiotherapy team had me standing the same day, and after six weeks I walked to the mosque again. The estimate they gave me matched the final bill.'
  },
  {
    name: 'Lakshmi Narayanan',
    city: 'Pitampura, Delhi',
    treatment: 'NICU care for newborn',
    photo: '/images/misc/patient-4.jpg',
    rating: 5,
    text: 'Our baby was born at 32 weeks and spent 19 days in the NICU. Dr. Meenakshi Rao called us every single morning with an update, even on Sundays. We were allowed inside to touch our son daily. That mattered more than we can say.'
  },
  {
    name: 'Jaspreet Kaur',
    city: 'Ashok Vihar, Delhi',
    treatment: 'Gall bladder surgery',
    photo: '/images/misc/patient-5.jpg',
    rating: 4,
    text: 'Laparoscopic gall bladder surgery in the morning, discharged the next day with three small marks. Dr. Chadha was straightforward about the risks. The only issue was a long wait at the billing counter, which they later apologised for.'
  },
  {
    name: 'Gurdial Singh',
    city: 'Narela, Delhi',
    treatment: 'Stroke treatment',
    photo: '/images/misc/patient-6.jpg',
    rating: 5,
    text: 'My mother had a stroke and we reached within the hour. Dr. Nandan started the injection after the CT scan. Today she walks with a stick and eats on her own. The physiotherapy team came to the ward every single day.'
  }
];

export const insurers = [
  'Star Health Insurance',
  'HDFC ERGO Health',
  'ICICI Lombard',
  'Bajaj Allianz',
  'Niva Bupa',
  'Care Health Insurance',
  'New India Assurance',
  'Oriental Insurance',
  'National Insurance',
  'United India Insurance',
  'Ayushman Bharat (PM-JAY)',
  'CGHS / ECHS',
  'Medi Assist TPA',
  'Paramount TPA',
  'Vidal Health TPA',
  'Raksha TPA'
];

export const accreditations = [
  { name: 'NABH', note: 'Entry-level accreditation for hospital quality standards' },
  { name: 'NABL', note: 'Laboratory accreditation for testing and calibration' },
  { name: 'Ayushman Bharat', note: 'Empanelled under PM-JAY for eligible beneficiaries' },
  { name: 'Fire & Safety', note: 'Certified by the state fire service' }
];

export const faqs = [
  {
    q: 'Do I need an appointment, or can I just walk in?',
    a: 'Emergency patients are seen immediately, at any hour, with no appointment. For OPD consultations we strongly recommend booking online or by phone, because walk-in slots depend on the consultant schedule for that day.'
  },
  {
    q: 'Is the emergency department really open all night?',
    a: 'Yes. The emergency department, laboratory, X-ray, pharmacy and ambulance service operate 24 hours a day, all 365 days. A casualty medical officer is physically present at all times and specialists are on call.'
  },
  {
    q: 'Which insurance companies do you accept for cashless treatment?',
    a: 'We are empanelled with most major insurers and TPAs, and with Ayushman Bharat (PM-JAY) and CGHS. Please carry your policy card and a photo ID. Our insurance desk will start the pre-authorisation as soon as admission is advised.'
  },
  {
    q: 'How do I get a copy of my report or discharge summary?',
    a: 'Laboratory reports can be collected from the reception, or sent to you on WhatsApp and email. Discharge summaries and old records can be requested at the medical records desk with a photo ID, usually within one working day.'
  },
  {
    q: 'Can I get a second opinion before deciding on surgery?',
    a: 'Absolutely, and we encourage it. Ask for your reports and imaging, and we will hand over copies the same day. If you want a second opinion within the hospital from another consultant, the front desk will arrange it.'
  },
  {
    q: 'Will I know the cost of treatment before admission?',
    a: 'For any planned procedure you will receive a written estimate covering the room, surgery, consumables and consultant charges. If the clinical situation changes and the cost is likely to rise, the family is informed before it does.'
  },
  {
    q: 'Are attendants allowed to stay with the patient?',
    a: 'One attendant may stay overnight in private and twin-sharing rooms, where an attendant bed is provided. In the ICU, visiting is allowed during fixed hours, and the treating doctor gives a daily update to the family.'
  },
  {
    q: 'Do you offer an ambulance service?',
    a: 'Yes. Four ambulances, two of them advanced life support units with a ventilator, defibrillator and a paramedic on board. Call the ambulance helpline and our average response time within city limits is about twelve minutes.'
  }
];
