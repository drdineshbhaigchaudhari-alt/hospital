import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { useSeo } from '../lib/hooks';
import { CONTACT } from '../lib/site';

const LINKS = [
  ['Find a Doctor', '/doctors'],
  ['Centres of Excellence', '/specialities'],
  ['Health Packages', '/health-packages'],
  ['Book an Appointment', '/book-appointment'],
  ['Contact & Directions', '/contact']
];

export default function NotFound() {
  useSeo('Page not found | LifeV 24 Care Hospital');

  return (
    <section className="section">
      <div className="shell center" style={{ maxWidth: 680 }}>
        <div
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(4rem, 14vw, 8rem)',
            fontWeight: 800,
            color: 'var(--sky)',
            lineHeight: 1
          }}
        >
          404
        </div>
        <h1 style={{ marginTop: 10 }}>We could not find that page</h1>
        <p className="muted">
          The link may be old, or the page may have moved. Here are the places people usually need. If you are
          looking for something urgent, our emergency line is answered at every hour:{' '}
          <a href={`tel:${CONTACT.emergencyTel}`}>{CONTACT.emergency}</a>.
        </p>

        <div className="chip-row" style={{ justifyContent: 'center', margin: '28px 0' }}>
          {LINKS.map(([label, to]) => (
            <Link key={to} to={to} className="chip">
              {label}
            </Link>
          ))}
        </div>

        <Link to="/" className="btn">
          <Icon name="arrowRight" size={17} /> Back to the home page
        </Link>
      </div>
    </section>
  );
}
