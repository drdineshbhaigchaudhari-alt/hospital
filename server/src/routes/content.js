import { Router } from 'express';
import { specialities, getSpeciality } from '../data/specialities.js';
import { doctors, getDoctor } from '../data/doctors.js';
import { packages, getPackage } from '../data/packages.js';
import { blogs, getBlog } from '../data/blogs.js';
import {
  hospital,
  stats,
  facilities,
  whyChooseUs,
  testimonials,
  insurers,
  accreditations,
  faqs
} from '../data/site.js';

const router = Router();

const notFound = (res, what) => res.status(404).json({ ok: false, error: `${what} not found` });

// ---- Aggregate payload so the home page needs one request, not eight ----
router.get('/bootstrap', (_req, res) => {
  res.json({
    hospital,
    stats,
    whyChooseUs,
    accreditations,
    insurers,
    specialities: specialities.map(({ slug, name, short, icon, image }) => ({
      slug,
      name,
      short,
      icon,
      image
    })),
    doctors: doctors.slice(0, 8),
    packages,
    facilities: facilities.slice(0, 6),
    testimonials,
    blogs: blogs.slice(0, 3).map(({ body, ...rest }) => rest)
  });
});

router.get('/hospital', (_req, res) => res.json(hospital));
router.get('/stats', (_req, res) => res.json(stats));
router.get('/why-us', (_req, res) => res.json(whyChooseUs));
router.get('/insurers', (_req, res) => res.json(insurers));
router.get('/accreditations', (_req, res) => res.json(accreditations));
router.get('/testimonials', (_req, res) => res.json(testimonials));
router.get('/faqs', (_req, res) => res.json(faqs));
router.get('/facilities', (_req, res) => res.json(facilities));

router.get('/specialities', (_req, res) => res.json(specialities));
router.get('/specialities/:slug', (req, res) => {
  const item = getSpeciality(req.params.slug);
  if (!item) return notFound(res, 'Speciality');
  res.json({
    ...item,
    doctors: doctors.filter((d) => d.speciality === item.slug)
  });
});

router.get('/doctors', (req, res) => {
  const { speciality, q } = req.query;
  let result = doctors;
  if (speciality) result = result.filter((d) => d.speciality === speciality);
  if (q) {
    const needle = String(q).toLowerCase();
    result = result.filter(
      (d) =>
        d.name.toLowerCase().includes(needle) ||
        d.designation.toLowerCase().includes(needle) ||
        d.focus.join(' ').toLowerCase().includes(needle)
    );
  }
  res.json(result);
});

router.get('/doctors/:slug', (req, res) => {
  const doctor = getDoctor(req.params.slug);
  if (!doctor) return notFound(res, 'Doctor');
  const dept = getSpeciality(doctor.speciality);
  res.json({
    ...doctor,
    specialityName: dept?.name ?? doctor.speciality,
    related: doctors
      .filter((d) => d.speciality === doctor.speciality && d.slug !== doctor.slug)
      .slice(0, 3)
  });
});

router.get('/packages', (_req, res) => res.json(packages));
router.get('/packages/:slug', (req, res) => {
  const item = getPackage(req.params.slug);
  if (!item) return notFound(res, 'Package');
  res.json(item);
});

router.get('/blogs', (req, res) => {
  const { category } = req.query;
  const list = blogs
    .filter((b) => !category || b.category === category)
    .map(({ body, ...rest }) => rest);
  res.json(list);
});

router.get('/blogs/:slug', (req, res) => {
  const item = getBlog(req.params.slug);
  if (!item) return notFound(res, 'Article');
  res.json({
    ...item,
    related: blogs
      .filter((b) => b.slug !== item.slug)
      .slice(0, 3)
      .map(({ body, ...rest }) => rest)
  });
});

export default router;
