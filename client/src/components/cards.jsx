import { Link } from 'react-router-dom';
import { Icon, SpecIcon } from './Icon';
import { formatDate, formatINR } from '../lib/site';

/* ------------------------------------------------------- Speciality -- */

export function SpecialityCard({ item }) {
  return (
    <Link to={`/specialities/${item.slug}`} className="spec-card reveal">
      <span className="spec-card__icon">
        <SpecIcon name={item.icon} size={32} />
      </span>
      <h3>{item.name}</h3>
      <p>{item.short}</p>
      <span className="link-arrow">
        Explore department <Icon name="arrowRight" size={16} />
      </span>
    </Link>
  );
}

/* ----------------------------------------------------------- Doctor -- */

export function DoctorCard({ doctor }) {
  return (
    <article className="doc-card reveal">
      <div className="doc-card__media">
        <img
          src={doctor.photo}
          alt={`${doctor.name}, ${doctor.designation}`}
          loading="lazy"
          width="400"
          height="480"
        />
        <span className="doc-card__badge">{doctor.experience}+ yrs experience</span>
      </div>
      <div className="doc-card__body">
        <h3>
          <Link to={`/doctors/${doctor.slug}`} style={{ color: 'inherit' }}>
            {doctor.name}
          </Link>
        </h3>
        <span className="doc-card__role">{doctor.designation}</span>
        <p className="doc-card__qual">{doctor.qualification}</p>

        <div className="doc-card__meta">
          <span>
            <Icon name="calendar" size={15} />
            {doctor.opd}
          </span>
          <span>
            <Icon name="clock" size={15} />
            {doctor.timings}
          </span>
        </div>

        <div className="doc-card__actions">
          <Link to={`/doctors/${doctor.slug}`} className="btn btn--ghost btn--sm">
            Profile
          </Link>
          <Link to={`/book-appointment?doctor=${doctor.slug}`} className="btn btn--sm">
            Book
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------- Package -- */

export function PackageCard({ pkg }) {
  const off = Math.round(((pkg.strike - pkg.price) / pkg.strike) * 100);
  return (
    <article className={`pkg reveal${pkg.popular ? ' pkg--popular' : ''}`}>
      {pkg.popular && <span className="pkg__ribbon">Most booked</span>}
      <h3>{pkg.name}</h3>
      <p className="pkg__tagline">{pkg.tagline}</p>

      <div className="pkg__price">
        <b>{formatINR(pkg.price)}</b>
        <del>{formatINR(pkg.strike)}</del>
        <em>{off}% off</em>
      </div>

      <ul className="pkg__tests">
        {pkg.tests.map((t) => (
          <li key={t}>
            <Icon name="check" size={15} strokeWidth={3} />
            {t}
          </li>
        ))}
      </ul>

      <div className="pkg__foot">
        <Link to={`/book-appointment?package=${pkg.slug}`} className="btn btn--block">
          Book this package
        </Link>
        <p className="pkg__note">{pkg.fasting} &middot; {pkg.duration}</p>
      </div>
    </article>
  );
}

/* --------------------------------------------------------- Facility -- */

export function FacilityCard({ item }) {
  return (
    <article className="fac-card reveal">
      <div className="fac-card__media">
        <img src={item.image} alt={item.name} loading="lazy" width="800" height="560" />
      </div>
      <div className="fac-card__body">
        <h3>{item.name}</h3>
        <p>{item.summary}</p>
        <ul className="fac-card__points">
          {item.points.map((p) => (
            <li key={p}>
              <Icon name="check" size={14} strokeWidth={3} />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------- Post -- */

export function PostCard({ post }) {
  return (
    <article className="post reveal">
      <div className="post__media">
        <Link to={`/blog/${post.slug}`}>
          <img src={post.image} alt={post.title} loading="lazy" width="880" height="500" />
        </Link>
        <span className="post__cat">{post.category}</span>
      </div>
      <div className="post__body">
        <div className="post__meta">
          <span>
            <Icon name="calendar" size={14} />
            {formatDate(post.date)}
          </span>
          <span>
            <Icon name="clock" size={14} />
            {post.readMinutes} min read
          </span>
        </div>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="link-arrow">
          Read article <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </article>
  );
}

/* ------------------------------------------------------ Testimonial -- */

export function TestimonialCard({ item }) {
  return (
    <article className="tsm reveal">
      <span className="tsm__quote" aria-hidden="true">
        <svg width="52" height="44" viewBox="0 0 52 44" fill="currentColor" focusable="false">
          <path d="M0 44V26C0 11.6 7.6 2.9 21.4 0l2.4 7.6C16.6 10 12.6 14.6 12.4 21H21v23H0Zm30 0V26C30 11.6 37.6 2.9 51.4 0l2.4 7.6C46.6 10 42.6 14.6 42.4 21H51v23H30Z" />
        </svg>
      </span>
      <div className="tsm__stars" aria-label={`${item.rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" size={16} strokeWidth={0} style={{ fill: i < item.rating ? 'currentColor' : '#dfe6ec' }} />
        ))}
      </div>
      <p>&ldquo;{item.text}&rdquo;</p>
      <div className="tsm__person">
        <img src={item.photo} alt="" aria-hidden="true" loading="lazy" width="56" height="56" />
        <div>
          <strong>{item.name}</strong>
          <small>
            {item.city} &middot; {item.treatment}
          </small>
        </div>
      </div>
    </article>
  );
}
