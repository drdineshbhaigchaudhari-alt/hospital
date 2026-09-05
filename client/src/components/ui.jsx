import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icon';
import { CONTACT } from '../lib/site';
import { useCountUp } from '../lib/hooks';

/* ------------------------------------------------------ Section head -- */

export function SectionHead({ eyebrow, title, text, align = 'left', action = null }) {
  const cls = ['sec-head', align === 'center' ? 'sec-head--center' : '', action ? 'sec-head--split' : ''].join(
    ' '
  );
  return (
    <div className={cls}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {action}
    </div>
  );
}

/* ---------------------------------------------------------- Page head -- */

export function PageHead({ title, text, crumbs = [] }) {
  return (
    <section className="page-head">
      <div className="shell">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 9 }}>
              <Icon name="chevronRight" size={13} />
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

/* ------------------------------------------------------ Loading/error -- */

export function Loading({ label = 'Loading...' }) {
  return (
    <div className="state" role="status" aria-live="polite">
      <div className="state__spinner" />
      {label}
    </div>
  );
}

export function ErrorState({ error, onRetry }) {
  return (
    <div className="state">
      <Icon name="alert" size={34} style={{ margin: '0 auto 14px', color: 'var(--coral)' }} />
      <h3>We could not load this just now</h3>
      <p className="measure mx-auto">
        {error?.message || 'Something went wrong.'} If this keeps happening, please call our reception on{' '}
        <a href={`tel:${CONTACT.receptionTel}`}>{CONTACT.reception}</a> and we will help you directly.
      </p>
      {onRetry && (
        <button type="button" className="btn btn--ghost" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}

export function Empty({ title, text }) {
  return (
    <div className="state">
      <Icon name="search" size={32} style={{ margin: '0 auto 12px' }} />
      <h3>{title}</h3>
      <p className="measure mx-auto">{text}</p>
    </div>
  );
}

/* ------------------------------------------------------------- Stats -- */

function Stat({ value, suffix, label }) {
  const [ref, shown] = useCountUp(value);
  return (
    <div ref={ref}>
      <div className="stats__num">
        {shown.toLocaleString('en-IN')}
        <span>{suffix}</span>
      </div>
      <div className="stats__label">{label}</div>
    </div>
  );
}

export function StatsBand({ stats = [] }) {
  if (!stats.length) return null;
  return (
    <section className="stats section--tight">
      <div className="shell">
        <div className="stats__grid">
          {stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Why us -- */

const WHY_ICON = {
  clock: 'clock',
  rupee: 'rupee',
  team: 'users',
  shield: 'shieldCheck',
  heart: 'heart',
  insurance: 'award'
};

export function WhyCard({ item }) {
  return (
    <article className="why-card reveal">
      <div className="why-card__icon">
        <Icon name={WHY_ICON[item.icon] || 'checkCircle'} size={24} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

/* ---------------------------------------------------------- Insurers -- */

export function InsurerMarquee({ insurers = [] }) {
  if (!insurers.length) return null;
  const doubled = [...insurers, ...insurers];
  return (
    <div className="marquee">
      <div className="marquee__track">
        {doubled.map((name, i) => (
          <div className="marquee__item" key={`${name}-${i}`} aria-hidden={i >= insurers.length}>
            <Icon name="shieldCheck" size={17} />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- FAQ -- */

export function FaqList({ items = [], openFirst = true }) {
  const [open, setOpen] = useState(openFirst ? 0 : -1);
  return (
    <div>
      {items.map((f, i) => (
        <div className={`faq${open === i ? ' is-open' : ''}`} key={f.q}>
          <h3 style={{ margin: 0 }}>
            <button
              type="button"
              className="faq__q"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              {f.q}
              <i aria-hidden="true">
                <Icon name="plus" size={15} />
              </i>
            </button>
          </h3>
          <div className="faq__a">
            <div>
              <p>{f.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------- CTA band -- */

export function CtaBand({
  title = 'Not sure which department you need?',
  text = 'Tell us the problem in one line. Our front desk will guide you to the right consultant and find the earliest slot, at no charge.',
  primary = { label: 'Book an Appointment', to: '/book-appointment' },
  secondary = { label: `Call ${CONTACT.reception}`, href: `tel:${CONTACT.receptionTel}` }
}) {
  return (
    <section className="section--tight">
      <div className="shell">
        <div className="cta reveal">
          <img src="/images/misc/cta-bg.svg" alt="" aria-hidden="true" />
          <div className="cta__text">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta__actions">
            {primary?.to ? (
              <Link to={primary.to} className="btn btn--light">
                {primary.label}
              </Link>
            ) : (
              <a href={primary.href} className="btn btn--light">
                {primary.label}
              </a>
            )}
            {secondary && (
              <a href={secondary.href} className="btn btn--outline-light">
                <Icon name="phone" size={17} />
                {secondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------- Floating actions -- */

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fab">
      {showTop && (
        <button
          type="button"
          className="fab__top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Icon name="arrowUp" size={20} />
        </button>
      )}
      <a
        className="fab__wa"
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <Icon name="whatsapp" size={22} />
      </a>
      <a className="fab__call" href={`tel:${CONTACT.emergencyTel}`} aria-label="Call the 24x7 emergency line">
        <Icon name="phone" size={20} />
      </a>
    </div>
  );
}

/* --------------------------------------------------- Scroll restore -- */

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);
  return null;
}
