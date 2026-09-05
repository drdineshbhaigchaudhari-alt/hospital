// Preventive health check-up packages. Prices are indicative sample figures in INR.

export const packages = [
  {
    slug: 'basic-health-check',
    name: 'LifeV Basic Health Check',
    tagline: 'A yearly baseline for adults above 25',
    price: 1499,
    strike: 2400,
    duration: 'About 2 hours, reports the same evening',
    fasting: '10 hours fasting required',
    bestFor: 'First-time check-ups, young working adults, annual screening',
    tests: [
      'Complete Blood Count (CBC)',
      'Fasting Blood Sugar',
      'Lipid Profile',
      'Liver Function Test',
      'Kidney Function Test',
      'Urine Routine',
      'ECG',
      'Physician consultation'
    ],
    popular: false
  },
  {
    slug: 'comprehensive-full-body',
    name: 'Comprehensive Full Body Check',
    tagline: 'Our most requested package',
    price: 3499,
    strike: 5600,
    duration: 'About 4 hours, reports within 24 hours',
    fasting: '12 hours fasting required',
    bestFor: 'Adults above 35, family history of diabetes or heart disease',
    tests: [
      'Everything in the Basic Health Check',
      'HbA1c (3-month sugar average)',
      'Thyroid Profile (T3, T4, TSH)',
      'Vitamin B12 and Vitamin D',
      'Chest X-ray',
      'Ultrasound Whole Abdomen',
      '2D Echocardiography',
      'Physician and diet consultation'
    ],
    popular: true
  },
  {
    slug: 'cardiac-screening',
    name: 'Heart Care Screening',
    tagline: 'For anyone with a family history of heart disease',
    price: 4299,
    strike: 6800,
    duration: 'About 4 hours',
    fasting: '12 hours fasting required',
    bestFor: 'Smokers, high BP, high cholesterol, family history of heart attack',
    tests: [
      'Lipid Profile and hs-CRP',
      'Fasting Blood Sugar and HbA1c',
      'ECG',
      '2D Echo with colour Doppler',
      'Treadmill Test (TMT)',
      'Chest X-ray',
      'Cardiologist consultation',
      'Cardiac diet plan'
    ],
    popular: false
  },
  {
    slug: 'women-wellness',
    name: 'Women Wellness Package',
    tagline: 'Designed around what women actually skip',
    price: 3899,
    strike: 6200,
    duration: 'About 4 hours',
    fasting: '10 hours fasting required',
    bestFor: 'Women above 30, PCOS, irregular cycles, post-menopause',
    tests: [
      'CBC with ESR and Iron Studies',
      'Thyroid Profile',
      'Vitamin D and Calcium',
      'Blood Sugar and Lipid Profile',
      'Pap Smear',
      'Ultrasound Pelvis',
      'Bone Mineral Density screening',
      'Gynaecologist and diet consultation'
    ],
    popular: true
  },
  {
    slug: 'diabetes-care',
    name: 'Diabetes Care Package',
    tagline: 'For patients already on diabetes treatment',
    price: 2299,
    strike: 3600,
    duration: 'About 3 hours, quarterly follow-up advised',
    fasting: '10 hours fasting required',
    bestFor: 'Known diabetics, pre-diabetics, patients on insulin',
    tests: [
      'Fasting and Post-Prandial Blood Sugar',
      'HbA1c',
      'Kidney Function Test with Urine Microalbumin',
      'Lipid Profile',
      'Dilated retina (eye) examination',
      'Diabetic foot screening',
      'Diabetologist and dietician consultation'
    ],
    popular: false
  },
  {
    slug: 'senior-citizen',
    name: 'Senior Citizen Care Plan',
    tagline: 'Unhurried, with wheelchair assistance throughout',
    price: 4999,
    strike: 7900,
    duration: 'About 5 hours, attendant welcome',
    fasting: '12 hours fasting required',
    bestFor: 'Men and women above 60',
    tests: [
      'Complete blood, liver, kidney and thyroid panel',
      'HbA1c and Lipid Profile',
      'PSA for men, Bone Density for women',
      'ECG and 2D Echo',
      'Chest X-ray and Ultrasound Abdomen',
      'Vision and hearing screening',
      'Physician, physiotherapy and diet consultation'
    ],
    popular: false
  }
];

export const getPackage = (slug) => packages.find((p) => p.slug === slug);
