/**
 * Static brand + navigation constants used by the shell (header, footer, FABs).
 * Everything else - doctors, departments, packages, articles - comes from the
 * Node API so content can be edited without touching the React app.
 */

export const CONTACT = {
  name: 'LifeV 24 Care Hospital',
  emergency: '+91 79186 16790',
  emergencyTel: '+917918616790',
  ambulance: '+91 79186 16791',
  ambulanceTel: '+917918616791',
  reception: '+91 79186 16792',
  receptionTel: '+917918616792',
  whatsapp: '917918616790',
  email: 'care@lifev24carehospital.com',
  addressLines: ['Plot No. 24, Health City Road', 'Near Ring Road Crossing, Sector 12', 'New Delhi - 110085'],
  // Replace both with your real address before launch.
  mapQuery: 'Sector 12, Rohini, New Delhi, 110085',
  mapUrl: 'https://maps.google.com/?q=Sector+12+Rohini+New+Delhi+110085',
  hours: [
    ['Emergency & Trauma', 'Open 24 hours, 365 days'],
    ['OPD (Mon - Sat)', '9:00 AM - 8:00 PM'],
    ['OPD (Sunday)', '10:00 AM - 2:00 PM, on appointment'],
    ['Laboratory & Pharmacy', 'Open 24 hours']
  ],
  social: [
    { name: 'facebook', href: 'https://facebook.com/', label: 'Facebook' },
    { name: 'instagram', href: 'https://instagram.com/', label: 'Instagram' },
    { name: 'youtube', href: 'https://youtube.com/', label: 'YouTube' },
    { name: 'linkedin', href: 'https://linkedin.com/', label: 'LinkedIn' }
  ]
};

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Specialities', to: '/specialities', mega: 'specialities' },
  { label: 'Find a Doctor', to: '/doctors' },
  { label: 'Facilities', to: '/facilities' },
  { label: 'Packages', to: '/health-packages' },
  { label: 'Health Library', to: '/blog' },
  { label: 'Contact', to: '/contact' }
];

export const QUICK_ACTIONS = [
  {
    icon: 'calendar',
    tone: 'blue',
    title: 'Book an Appointment',
    text: 'Pick a department, a date and a slot. Confirmation call within 2 working hours.',
    to: '/book-appointment'
  },
  {
    icon: 'stethoscope',
    tone: 'teal',
    title: 'Find a Doctor',
    text: 'Search our consultants by department, OPD day or area of focus.',
    to: '/doctors'
  },
  {
    icon: 'ambulance',
    tone: 'coral',
    title: '24x7 Emergency',
    text: 'Ambulance in about 12 minutes across the city. Call any hour of the night.',
    href: `tel:${CONTACT.emergencyTel}`
  },
  {
    icon: 'shieldCheck',
    tone: 'amber',
    title: 'Health Check Packages',
    text: 'Full body, cardiac, women wellness and diabetes panels from Rs. 1,499.',
    to: '/health-packages'
  }
];

export const formatINR = (n) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);

export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
