import { Icon } from '../components/Icon';
import AppointmentForm from '../components/AppointmentForm';
import { ErrorState, Loading, PageHead, SectionHead } from '../components/ui';
import { useSite } from '../App';
import { useApi, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';
import { CONTACT } from '../lib/site';

const STEPS = [
  { n: '01', title: 'Send the request', text: 'Fill the form with your department, preferred date and a line about the problem. It takes under a minute.' },
  { n: '02', title: 'We call you back', text: 'Our front desk calls the number you gave, usually within two working hours, and offers the earliest slots available.' },
  { n: '03', title: 'Slot confirmed on the phone', text: 'You pick the time that suits you. A confirmation SMS or WhatsApp message follows with the doctor, date and floor.' },
  { n: '04', title: 'Come 15 minutes early', text: 'Carry a photo ID, old reports and your medicine list. Registration and the file take about ten minutes for a new patient.' }
];

export default function Appointment() {
  const { data: site } = useSite();
  const { data: doctors, loading, error } = useApi(() => api.doctors(), []);

  useSeo(
    'Book an Appointment | LifeV 24 Care Hospital',
    'Request an OPD appointment at LifeV 24 Care Hospital. Choose a department, doctor, date and time. Our front desk confirms within two working hours.'
  );
  useReveal();

  return (
    <>
      <PageHead
        title="Book an Appointment"
        text="Request a slot online and we will call you back to confirm. For emergencies, do not use this form - come straight in."
        crumbs={[{ label: 'Book an Appointment' }]}
      />

      <section className="section">
        <div className="shell with-side">
          <div>
            <SectionHead
              eyebrow="Appointment request"
              title="Tell us who you are and what you need"
              text="Everything marked with a star is required. The rest helps us route you to the right consultant."
            />

            {loading && <Loading label="Loading consultants..." />}
            {error && <ErrorState error={error} onRetry={() => window.location.reload()} />}
            {doctors && (
              <AppointmentForm specialities={site?.specialities ?? []} doctors={doctors} />
            )}
          </div>

          <aside>
            <div className="side-card side-card--navy">
              <h3>In an emergency</h3>
              <p>
                Do not wait for a callback. Chest pain, breathlessness, stroke symptoms, heavy bleeding,
                seizures, a serious fall or a high fever in a small child all need to be seen now.
              </p>
              <a href={`tel:${CONTACT.emergencyTel}`} className="btn btn--coral btn--block">
                <Icon name="phone" size={17} /> {CONTACT.emergency}
              </a>
              <a href={`tel:${CONTACT.ambulanceTel}`} className="btn btn--outline-light btn--block" style={{ marginTop: 10 }}>
                <Icon name="ambulance" size={17} /> Ambulance {CONTACT.ambulance}
              </a>
            </div>

            <div className="side-card">
              <h3>What to bring</h3>
              <ul className="fac-card__points">
                {[
                  'A photo ID (Aadhaar, voter card or driving licence)',
                  'All previous reports, prescriptions and scans',
                  'A written list of medicines you take daily',
                  'Your insurance card, if you plan to use it',
                  'For a child, the immunisation card'
                ].map((t) => (
                  <li key={t}>
                    <Icon name="check" size={14} strokeWidth={3} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="side-card">
              <h3>OPD timings</h3>
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
          </aside>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHead align="center" eyebrow="How it works" title="Four steps, no queue" />
          <div className="grid g-4">
            {STEPS.map((s) => (
              <article className="card reveal" key={s.n}>
                <div className="card__icon" aria-hidden="true" style={{ fontFamily: 'var(--font-head)', fontWeight: 800, fontSize: '1.35rem' }}>
                  {s.n}
                </div>
                <h3>{s.title}</h3>
                <p style={{ marginBottom: 0 }}>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
