import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Icon } from './Icon';
import api from '../lib/api';
import { CONTACT } from '../lib/site';

const SLOTS = [
  'Morning (9:00 AM - 12:00 PM)',
  'Afternoon (12:00 PM - 4:00 PM)',
  'Evening (4:00 PM - 8:00 PM)',
  'Any slot, whichever is earliest'
];

const today = () => new Date().toISOString().slice(0, 10);

export default function AppointmentForm({ specialities = [], doctors = [], compact = false }) {
  const [params] = useSearchParams();
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    speciality: '',
    doctor: '',
    date: today(),
    slot: SLOTS[0],
    message: '',
    consent: false,
    website: '' // honeypot
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);

  // Pre-fill when arriving from a doctor card or a health package card.
  useEffect(() => {
    const doctorSlug = params.get('doctor');
    const pkg = params.get('package');
    if (doctorSlug) {
      const doc = doctors.find((d) => d.slug === doctorSlug);
      if (doc) {
        setValues((v) => ({ ...v, doctor: doc.name, speciality: doc.speciality }));
      }
    }
    if (pkg) {
      setValues((v) => ({
        ...v,
        speciality: 'internal-medicine',
        message: `I would like to book the health check package: ${pkg.replace(/-/g, ' ')}.`
      }));
    }
  }, [params, doctors]);

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const filteredDoctors = values.speciality
    ? doctors.filter((d) => d.speciality === values.speciality)
    : doctors;

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrors({});
    try {
      const res = await api.bookAppointment(values);
      setResult(res);
      setStatus('done');
      window.scrollTo({ top: e.target.getBoundingClientRect().top + window.scrollY - 140, behavior: 'smooth' });
    } catch (err) {
      if (err.fieldErrors) {
        setErrors(err.fieldErrors);
        setStatus('idle');
      } else {
        setResult({ error: err.message });
        setStatus('failed');
      }
    }
  };

  if (status === 'done') {
    return (
      <div className="form-card">
        <div className="alert alert--ok">
          <Icon name="checkCircle" size={20} />
          <div>
            <strong>Appointment request received.</strong>
            <p style={{ margin: '6px 0 0' }}>{result.message}</p>
          </div>
        </div>
        <p>
          Your reference number is <strong>{result.reference}</strong>. Please keep it handy, or quote it if
          you call us on <a href={`tel:${CONTACT.receptionTel}`}>{CONTACT.reception}</a>.
        </p>
        <p className="muted" style={{ fontSize: '.9rem' }}>
          This is a request, not a confirmed slot. A confirmed time will be given to you on the phone. If this
          is an emergency, please do not wait for our call - come straight to the emergency department or call{' '}
          <a href={`tel:${CONTACT.emergencyTel}`}>{CONTACT.emergency}</a>.
        </p>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => {
            setStatus('idle');
            setResult(null);
            setValues((v) => ({ ...v, name: '', phone: '', email: '', message: '', consent: false }));
          }}
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form className={compact ? '' : 'form-card'} onSubmit={submit} noValidate>
      {status === 'failed' && (
        <div className="alert alert--err">
          <Icon name="alert" size={20} />
          <div>
            <strong>We could not submit that.</strong>
            <p style={{ margin: '6px 0 0' }}>
              {result?.error} Please call <a href={`tel:${CONTACT.receptionTel}`}>{CONTACT.reception}</a> and
              we will book it for you.
            </p>
          </div>
        </div>
      )}

      <div className="form-grid">
        <div className={`field${errors.name ? ' has-error' : ''}`}>
          <label htmlFor="ap-name">
            Patient name <span>*</span>
          </label>
          <input id="ap-name" value={values.name} onChange={set('name')} placeholder="e.g. Ramesh Gupta" required />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </div>

        <div className={`field${errors.phone ? ' has-error' : ''}`}>
          <label htmlFor="ap-phone">
            Mobile number <span>*</span>
          </label>
          <input
            id="ap-phone"
            type="tel"
            inputMode="numeric"
            value={values.phone}
            onChange={set('phone')}
            placeholder="10-digit mobile number"
            required
          />
          {errors.phone ? (
            <span className="field__error">{errors.phone}</span>
          ) : (
            <span className="field__hint">We call this number to confirm your slot.</span>
          )}
        </div>

        <div className={`field${errors.email ? ' has-error' : ''}`}>
          <label htmlFor="ap-email">Email (optional)</label>
          <input id="ap-email" type="email" value={values.email} onChange={set('email')} placeholder="you@example.com" />
          {errors.email && <span className="field__error">{errors.email}</span>}
        </div>

        <div className={`field${errors.speciality ? ' has-error' : ''}`}>
          <label htmlFor="ap-spec">
            Department <span>*</span>
          </label>
          <select id="ap-spec" value={values.speciality} onChange={set('speciality')} required>
            <option value="">Select a department</option>
            {specialities.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          {errors.speciality && <span className="field__error">{errors.speciality}</span>}
        </div>

        <div className="field">
          <label htmlFor="ap-doc">Preferred doctor (optional)</label>
          <select id="ap-doc" value={values.doctor} onChange={set('doctor')}>
            <option value="">No preference, whoever is available</option>
            {filteredDoctors.map((d) => (
              <option key={d.slug} value={d.name}>
                {d.name} - {d.qualification}
              </option>
            ))}
          </select>
        </div>

        <div className={`field${errors.date ? ' has-error' : ''}`}>
          <label htmlFor="ap-date">
            Preferred date <span>*</span>
          </label>
          <input id="ap-date" type="date" min={today()} value={values.date} onChange={set('date')} required />
          {errors.date && <span className="field__error">{errors.date}</span>}
        </div>

        <div className={`field full${errors.slot ? ' has-error' : ''}`}>
          <label htmlFor="ap-slot">
            Preferred time <span>*</span>
          </label>
          <select id="ap-slot" value={values.slot} onChange={set('slot')} required>
            {SLOTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.slot && <span className="field__error">{errors.slot}</span>}
        </div>

        <div className="field full">
          <label htmlFor="ap-msg">Briefly, what is the problem?</label>
          <textarea
            id="ap-msg"
            value={values.message}
            onChange={set('message')}
            placeholder="For example: chest pain while climbing stairs for the last two weeks, or a follow-up after knee surgery in March."
          />
          <span className="field__hint">
            A line or two helps us route you to the right consultant. Please do not share reports or ID numbers here.
          </span>
        </div>

        {/* honeypot - hidden from people, filled by bots */}
        <div className="honeypot" aria-hidden="true">
          <label htmlFor="ap-website">Do not fill this</label>
          <input id="ap-website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
        </div>

        <div className={`field full${errors.consent ? ' has-error' : ''}`}>
          <label className="checkbox">
            <input type="checkbox" checked={values.consent} onChange={set('consent')} />
            <span>
              I agree that LifeV 24 Care Hospital may contact me on this number by phone, SMS or WhatsApp about
              this appointment.
            </span>
          </label>
          {errors.consent && <span className="field__error">{errors.consent}</span>}
        </div>

        <div className="full">
          <button type="submit" className="btn btn--teal" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Request Appointment'}
            {status !== 'sending' && <Icon name="arrowRight" size={17} />}
          </button>
          <p className="muted" style={{ fontSize: '.85rem', marginTop: 14, marginBottom: 0 }}>
            In an emergency do not use this form. Call{' '}
            <a href={`tel:${CONTACT.emergencyTel}`}>{CONTACT.emergency}</a> or come directly to our emergency
            department, which is open 24 hours.
          </p>
        </div>
      </div>
    </form>
  );
}
