import { useState } from 'react';
import { Icon } from '../components/Icon';
import { ErrorState, FaqList, Loading, PageHead, SectionHead } from '../components/ui';
import { useApi, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';
import { CONTACT } from '../lib/site';

const SUBJECTS = [
  'General enquiry',
  'Appointment or OPD timing',
  'Billing or insurance question',
  'Medical records request',
  'Feedback about my visit',
  'Complaint or grievance',
  'Careers at LifeV 24 Care',
  'Corporate health tie-up'
];

const DESKS = [
  { icon: 'ambulance', title: 'Emergency & Ambulance', lines: [CONTACT.emergency, CONTACT.ambulance], note: 'Open 24 hours, all 365 days', tone: 'coral' },
  { icon: 'phone', title: 'Reception & Appointments', lines: [CONTACT.reception], note: 'Mon - Sat, 8:00 AM - 8:00 PM', tone: 'blue' },
  { icon: 'shieldCheck', title: 'Insurance & TPA Desk', lines: [CONTACT.reception + ' (ext. 204)'], note: 'Mon - Sat, 9:00 AM - 6:00 PM', tone: 'teal' },
  { icon: 'mail', title: 'Email us', lines: [CONTACT.email], note: 'We reply within one working day', tone: 'amber' }
];

export default function Contact() {
  const { data: faqs, loading, error } = useApi(() => api.faqs(), []);
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    website: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);

  useSeo(
    'Contact & Directions | LifeV 24 Care Hospital, New Delhi',
    'Address, emergency and ambulance numbers, OPD timings and directions to LifeV 24 Care Hospital, Sector 12, New Delhi. Send us a message online.'
  );
  useReveal();

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((prev) => {
      if (!prev[k]) return prev;
      const next = { ...prev };
      delete next[k];
      return next;
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrors({});
    try {
      const res = await api.sendMessage(values);
      setResult(res);
      setStatus('done');
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

  return (
    <>
      <PageHead
        title="Contact & Directions"
        text="Emergency lines answer at any hour. For everything else, the desks below and their timings."
        crumbs={[{ label: 'Contact' }]}
      />

      {/* --------------------------------------------------- desks -- */}
      <section className="section">
        <div className="shell">
          <div className="grid g-4">
            {DESKS.map((d) => (
              <article className="card reveal" key={d.title}>
                <div className={`quick__icon quick__icon--${d.tone}`} style={{ marginBottom: 18 }}>
                  <Icon name={d.icon} size={23} />
                </div>
                <h3>{d.title}</h3>
                {d.lines.map((l) => (
                  <p key={l} style={{ marginBottom: 4, fontWeight: 700, color: 'var(--ink)' }}>
                    {l.includes('@') ? (
                      <a href={`mailto:${l}`}>{l}</a>
                    ) : (
                      <a href={`tel:${l.replace(/[^\d+]/g, '')}`}>{l}</a>
                    )}
                  </p>
                ))}
                <p className="muted" style={{ fontSize: '.85rem', margin: 0 }}>
                  {d.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------ form + address -- */}
      <section className="section section--soft">
        <div className="shell with-side">
          <div>
            <SectionHead
              eyebrow="Write to us"
              title="Send a message"
              text="For appointments, please use the appointment form so it reaches the right desk. Use this for questions, records, billing or feedback."
            />

            {status === 'done' ? (
              <div className="form-card">
                <div className="alert alert--ok">
                  <Icon name="checkCircle" size={20} />
                  <div>
                    <strong>Message received.</strong>
                    <p style={{ margin: '6px 0 0' }}>{result.message}</p>
                  </div>
                </div>
                <p>
                  Reference number: <strong>{result.reference}</strong>
                </p>
                <button type="button" className="btn btn--ghost" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="form-card" onSubmit={submit} noValidate>
                {status === 'failed' && (
                  <div className="alert alert--err">
                    <Icon name="alert" size={20} />
                    <div>{result?.error}</div>
                  </div>
                )}

                <div className="form-grid">
                  <div className={`field${errors.name ? ' has-error' : ''}`}>
                    <label htmlFor="c-name">
                      Your name <span>*</span>
                    </label>
                    <input id="c-name" value={values.name} onChange={set('name')} required />
                    {errors.name && <span className="field__error">{errors.name}</span>}
                  </div>

                  <div className={`field${errors.phone ? ' has-error' : ''}`}>
                    <label htmlFor="c-phone">
                      Mobile number <span>*</span>
                    </label>
                    <input id="c-phone" type="tel" inputMode="numeric" value={values.phone} onChange={set('phone')} required />
                    {errors.phone && <span className="field__error">{errors.phone}</span>}
                  </div>

                  <div className={`field${errors.email ? ' has-error' : ''}`}>
                    <label htmlFor="c-email">Email (optional)</label>
                    <input id="c-email" type="email" value={values.email} onChange={set('email')} />
                    {errors.email && <span className="field__error">{errors.email}</span>}
                  </div>

                  <div className={`field${errors.subject ? ' has-error' : ''}`}>
                    <label htmlFor="c-subject">
                      What is this about? <span>*</span>
                    </label>
                    <select id="c-subject" value={values.subject} onChange={set('subject')} required>
                      <option value="">Select a subject</option>
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.subject && <span className="field__error">{errors.subject}</span>}
                  </div>

                  <div className={`field full${errors.message ? ' has-error' : ''}`}>
                    <label htmlFor="c-message">
                      Your message <span>*</span>
                    </label>
                    <textarea id="c-message" value={values.message} onChange={set('message')} required />
                    {errors.message ? (
                      <span className="field__error">{errors.message}</span>
                    ) : (
                      <span className="field__hint">
                        Please do not send reports, scans, Aadhaar or insurance numbers through this form.
                      </span>
                    )}
                  </div>

                  <div className="honeypot" aria-hidden="true">
                    <input tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
                  </div>

                  <div className="full">
                    <button type="submit" className="btn btn--teal" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending...' : 'Send message'}
                      {status !== 'sending' && <Icon name="send" size={17} />}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <aside>
            <div className="side-card">
              <h3>Hospital address</h3>
              <p style={{ marginBottom: 16 }}>
                {CONTACT.addressLines.map((l) => (
                  <span key={l} style={{ display: 'block' }}>
                    {l}
                  </span>
                ))}
              </p>
              <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer" className="btn btn--ghost btn--block">
                <Icon name="pin" size={16} /> Open in Google Maps
              </a>
            </div>

            <div className="side-card">
              <h3>Timings</h3>
              <ul className="side-list">
                {CONTACT.hours.map(([label, value]) => (
                  <li key={label}>
                    <span style={{ display: 'flex', justifyContent: 'space-between', gap: 14, padding: '11px 0', borderBottom: '1px dashed var(--line)', fontSize: '.9rem' }}>
                      <strong style={{ color: 'var(--ink)' }}>{label}</strong>
                      <span className="muted" style={{ textAlign: 'right' }}>{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="side-card side-card--navy">
              <h3>How to reach us</h3>
              <p>
                We are on Health City Road, about 400 metres from the Ring Road crossing. The nearest metro
                station is a ten-minute auto ride away, and free patient parking is available in the basement.
                Ambulance access is from the rear gate, which stays open all night.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------------------------------------------------- map --- */}
      <section className="section--tight">
        <div className="shell">
          {/* Update CONTACT.mapQuery in client/src/lib/site.js to your real address. */}
          <iframe
            title="Map to LifeV 24 Care Hospital"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              width: '100%',
              height: 'clamp(300px, 42vw, 460px)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--r-xl)',
              display: 'block'
            }}
          />
          <p className="muted" style={{ fontSize: '.86rem', marginTop: 12 }}>
            <Icon name="pin" size={14} style={{ verticalAlign: '-2px' }} /> {CONTACT.addressLines.join(', ')} &middot;{' '}
            <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer">
              Open in Google Maps
            </a>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- FAQ --- */}
      <section className="section section--soft">
        <div className="shell" style={{ maxWidth: 880 }}>
          <SectionHead align="center" eyebrow="Common questions" title="Before you call" />
          {loading && <Loading />}
          {error && <ErrorState error={error} />}
          {faqs && <FaqList items={faqs} />}
        </div>
      </section>
    </>
  );
}
