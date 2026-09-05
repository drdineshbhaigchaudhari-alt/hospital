import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Icon } from './Icon';
import { CONTACT, NAV } from '../lib/site';

export default function Header({ specialities = [] }) {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* -------------------------------------------------- top bar -- */}
      <div className="topbar">
        <div className="shell topbar__inner">
          <ul className="topbar__list">
            <li>
              <a className="topbar__emergency" href={`tel:${CONTACT.emergencyTel}`}>
                <span className="dot" aria-hidden="true" />
                Emergency 24x7: {CONTACT.emergency}
              </a>
            </li>
            <li className="topbar__list--secondary">
              <a className="topbar__item" href={`tel:${CONTACT.ambulanceTel}`}>
                <Icon name="ambulance" size={15} />
                Ambulance: {CONTACT.ambulance}
              </a>
            </li>
          </ul>

          <ul className="topbar__list topbar__list--secondary">
            <li>
              <a className="topbar__item" href={`mailto:${CONTACT.email}`}>
                <Icon name="mail" size={15} />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <span className="topbar__item">
                <Icon name="pin" size={15} />
                Sector 12, New Delhi
              </span>
            </li>
            <li>
              <div className="topbar__socials">
                {CONTACT.social.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                    <Icon name={s.name} size={14} />
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* --------------------------------------------------- header -- */}
      <header className={`header${stuck ? ' header--stuck' : ''}`}>
        <div className="shell header__inner">
          <Link to="/" className="brand" aria-label="LifeV 24 Care Hospital, home">
            <img src="/images/misc/logo.svg" alt="LifeV 24 Care Hospital" width="260" height="64" />
          </Link>

          <nav className="nav" aria-label="Main navigation">
            {NAV.map((item) =>
              item.mega ? (
                <div className="nav__item" key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
                  >
                    {item.label}
                    <Icon name="chevronDown" size={15} className="nav__caret" />
                  </NavLink>

                  <div className="mega">
                    <div className="mega__grid">
                      {specialities.map((s) => (
                        <Link key={s.slug} to={`/specialities/${s.slug}`} className="mega__link">
                          <i aria-hidden="true" />
                          {s.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mega__foot">
                      <span className="muted" style={{ fontSize: '.86rem' }}>
                        16 specialities, one campus, one team.
                      </span>
                      <Link to="/specialities" className="link-arrow">
                        View all departments <Icon name="arrowRight" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="header__actions">
            <a className="header__call" href={`tel:${CONTACT.receptionTel}`}>
              <span className="header__call-icon">
                <Icon name="phone" size={19} />
              </span>
              <span>
                <small>Reception</small>
                <strong>{CONTACT.reception}</strong>
              </span>
            </a>

            <Link to="/book-appointment" className="btn btn--teal btn--appt">
              Book Appointment
            </Link>

            <button
              type="button"
              className="burger"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* --------------------------------------------- mobile drawer -- */}
      <div className={`drawer${open ? ' is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer__scrim" onClick={() => setOpen(false)} />
        <div className="drawer__panel">
          <div className="drawer__head">
            <img src="/images/misc/logo.svg" alt="LifeV 24 Care Hospital" height="44" />
            <button type="button" className="icon-btn" aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon name="close" size={20} />
            </button>
          </div>

          <div className="drawer__body">
            {NAV.map((item) => (
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `drawer__link${isActive ? ' is-active' : ''}`}
                  onClick={(e) => {
                    if (item.mega) {
                      e.preventDefault();
                      setSubOpen((v) => !v);
                    }
                  }}
                >
                  {item.label}
                  {item.mega && <Icon name="chevronDown" size={16} style={{ float: 'right' }} />}
                </NavLink>

                {item.mega && subOpen && (
                  <div className="drawer__sub">
                    <Link to="/specialities">All departments</Link>
                    {specialities.map((s) => (
                      <Link key={s.slug} to={`/specialities/${s.slug}`}>
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div style={{ marginTop: 26, display: 'grid', gap: 12 }}>
              <Link to="/book-appointment" className="btn btn--teal btn--block">
                Book an Appointment
              </Link>
              <a href={`tel:${CONTACT.emergencyTel}`} className="btn btn--coral btn--block">
                <Icon name="phone" size={17} /> Emergency {CONTACT.emergency}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
