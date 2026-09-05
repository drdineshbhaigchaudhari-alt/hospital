import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { CONTACT } from '../lib/site';
import api from '../lib/api';

const QUICK_LINKS = [
  ['About the Hospital', '/about'],
  ['Centres of Excellence', '/specialities'],
  ['Find a Doctor', '/doctors'],
  ['Facilities & Infrastructure', '/facilities'],
  ['Health Check Packages', '/health-packages'],
  ['Health Library', '/blog'],
  ['Book an Appointment', '/book-appointment'],
  ['Contact & Directions', '/contact']
];

export default function Footer({ specialities = [] }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState({ status: 'idle', message: '' });

  const subscribe = async (e) => {
    e.preventDefault();
    setState({ status: 'sending', message: '' });
    try {
      const res = await api.subscribe({ email });
      setState({ status: 'ok', message: res.message });
      setEmail('');
    } catch (err) {
      setState({ status: 'err', message: err.fieldErrors?.email || err.message });
    }
  };

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          {/* ------------------------------------------------ brand -- */}
          <div>
            <div className="footer__logo">
              <img src="/images/misc/logo.svg" alt="LifeV 24 Care Hospital" height="46" />
            </div>
            <p>
              A 250-bed multi-speciality hospital serving north Delhi since 2011. Emergency, diagnostics,
              pharmacy and ambulance run 24 hours a day, because most emergencies do not arrive during OPD
              hours.
            </p>

            <div className="footer__emergency">
              <small>Emergency helpline</small>
              <a href={`tel:${CONTACT.emergencyTel}`}>{CONTACT.emergency}</a>
            </div>

            <div className="footer__socials">
              {CONTACT.social.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <Icon name={s.name} size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* ------------------------------------------ quick links -- */}
          <div>
            <h4>Quick Links</h4>
            <ul className="footer__links">
              {QUICK_LINKS.map(([label, to]) => (
                <li key={to}>
                  <Link to={to}>
                    <Icon name="chevronRight" size={14} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------ departments -- */}
          <div>
            <h4>Specialities</h4>
            <ul className="footer__links">
              {specialities.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link to={`/specialities/${s.slug}`}>
                    <Icon name="chevronRight" size={14} />
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/specialities">
                  <Icon name="chevronRight" size={14} />
                  View all 16 departments
                </Link>
              </li>
            </ul>
          </div>

          {/* --------------------------------------------- contact -- */}
          <div>
            <h4>Reach Us</h4>
            <ul className="footer__contact">
              <li>
                <Icon name="pin" size={17} />
                <span>
                  {CONTACT.addressLines.map((l) => (
                    <span key={l} style={{ display: 'block' }}>
                      {l}
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <Icon name="phone" size={17} />
                <span>
                  <a href={`tel:${CONTACT.receptionTel}`}>{CONTACT.reception}</a> (Reception)
                  <br />
                  <a href={`tel:${CONTACT.ambulanceTel}`}>{CONTACT.ambulance}</a> (Ambulance)
                </span>
              </li>
              <li>
                <Icon name="mail" size={17} />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <Icon name="clock" size={17} />
                <span>
                  Emergency open 24x7
                  <br />
                  OPD: Mon - Sat, 9:00 AM - 8:00 PM
                </span>
              </li>
            </ul>

            <h4 style={{ marginTop: 26 }}>Health Digest</h4>
            <p style={{ fontSize: '.88rem', marginBottom: 0 }}>
              One email a month with practical health advice from our consultants. No promotions.
            </p>
            <form className="footer__news" onSubmit={subscribe}>
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn btn--teal btn--sm"
                disabled={state.status === 'sending'}
                aria-label="Subscribe"
              >
                <Icon name="send" size={16} />
              </button>
            </form>
            {state.message && (
              <p
                style={{
                  marginTop: 10,
                  fontSize: '.83rem',
                  color: state.status === 'ok' ? '#7ee0c4' : '#ffb4b4'
                }}
              >
                {state.message}
              </p>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {new Date().getFullYear()} LifeV 24 Care Hospital. All rights reserved.
          </span>
          <nav aria-label="Legal">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Use</Link>
            <Link to="/contact">Patient Rights</Link>
            <Link to="/contact">Feedback & Grievance</Link>
          </nav>
        </div>
      </div>

      <div className="footer__disclaimer">
        <div className="shell">
          The information on this website is for general awareness only and is not a substitute for
          examination, diagnosis or treatment by a registered medical practitioner. In an emergency, call{' '}
          <a href={`tel:${CONTACT.emergencyTel}`} style={{ color: '#8fd0ff' }}>
            {CONTACT.emergency}
          </a>{' '}
          or reach the nearest emergency department immediately. Doctor profiles, timings and package prices
          shown here are sample content for this website build and must be replaced with verified hospital
          information before publishing.
        </div>
      </div>
    </footer>
  );
}
