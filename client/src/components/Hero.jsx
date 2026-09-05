import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { CONTACT } from '../lib/site';

const SLIDES = [
  {
    image: '/images/hero/hero-1.jpg',
    badge: 'Emergency & Trauma, open all night',
    title: (
      <>
        When it cannot wait, <em>we are already awake</em>
      </>
    ),
    text: 'Triage within 60 seconds, ECG within 10 minutes, and a cath lab that opens at 3 AM. Our emergency floor, laboratory, pharmacy and ambulances run every hour of every day.',
    primary: { label: 'Call Emergency Now', href: `tel:${CONTACT.emergencyTel}`, cls: 'btn--coral' },
    secondary: { label: 'Our Emergency Services', to: '/facilities' }
  },
  {
    image: '/images/hero/hero-2.jpg',
    badge: '16 specialities under one roof',
    title: (
      <>
        One campus, <em>one agreed plan</em> for your treatment
      </>
    ),
    text: 'Cardiology, neurosciences, orthopaedics, cancer care, kidney care and more, with complex cases discussed together so your family hears a single clear plan rather than three opinions.',
    primary: { label: 'Book an Appointment', to: '/book-appointment', cls: 'btn--teal' },
    secondary: { label: 'Meet Our Doctors', to: '/doctors' }
  },
  {
    image: '/images/hero/hero-3.jpg',
    badge: 'Mother & child care',
    title: (
      <>
        From the first scan to <em>the day you go home</em>
      </>
    ),
    text: 'Painless delivery, high-risk pregnancy care and a Level-III NICU, with an obstetrician and a paediatrician physically present in the hospital at every hour of the night.',
    primary: { label: 'Mother & Child Care', to: '/specialities/obstetrics-gynaecology', cls: 'btn--teal' },
    secondary: { label: 'Health Packages', to: '/health-packages' }
  }
];

const DURATION = 7000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  const go = useCallback((next) => {
    setIndex((cur) => (next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    timer.current = setTimeout(() => go(index + 1), DURATION);
    return () => clearTimeout(timer.current);
  }, [index, go]);

  const slide = SLIDES[index];

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Hospital highlights">
      <div className="hero__stage">
        {SLIDES.map((s, i) => (
          <div className={`hero__slide${i === index ? ' is-active' : ''}`} key={s.image} aria-hidden={i !== index}>
            <img
              src={s.image}
              alt=""
              width="2000"
              height="1125"
              fetchpriority={i === 0 ? 'high' : 'low'}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className="hero__scrim" />

        <div className="hero__content">
          <div className="shell">
            <div className="hero__text" key={index}>
              <span className="hero__badge">
                <Icon name="activity" size={15} />
                {slide.badge}
              </span>
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <div className="hero__cta">
                {slide.primary.to ? (
                  <Link to={slide.primary.to} className={`btn ${slide.primary.cls}`}>
                    {slide.primary.label}
                  </Link>
                ) : (
                  <a href={slide.primary.href} className={`btn ${slide.primary.cls}`}>
                    <Icon name="phone" size={17} />
                    {slide.primary.label}
                  </a>
                )}
                <Link to={slide.secondary.to} className="btn btn--outline-light">
                  {slide.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="hero__arrow hero__arrow--prev" onClick={() => go(index - 1)} aria-label="Previous slide">
          <Icon name="chevronLeft" size={20} />
        </button>
        <button type="button" className="hero__arrow hero__arrow--next" onClick={() => go(index + 1)} aria-label="Next slide">
          <Icon name="chevronRight" size={20} />
        </button>

        <div className="hero__dots">
          {SLIDES.map((s, i) => (
            <button
              key={s.image}
              type="button"
              className={`hero__dot${i === index ? ' is-active' : ''}`}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
