import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { CtaBand, ErrorState, Loading, PageHead, SectionHead } from '../components/ui';
import { DoctorCard } from '../components/cards';
import { useApi, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';
import { CONTACT } from '../lib/site';

export default function DoctorDetail() {
  const { slug } = useParams();
  const { data, loading, error } = useApi(() => api.doctor(slug), [slug]);

  useSeo(
    data ? `${data.name} - ${data.designation} | LifeV 24 Care Hospital` : 'Doctor | LifeV 24 Care Hospital',
    data ? `${data.name}, ${data.qualification}. ${data.experience} years of experience at LifeV 24 Care Hospital.` : ''
  );
  useReveal();

  if (loading) return <Loading label="Loading profile..." />;
  if (error) return <ErrorState error={error} />;

  return (
    <>
      <PageHead
        title={data.name}
        text={data.designation}
        crumbs={[{ label: 'Find a Doctor', to: '/doctors' }, { label: data.name }]}
      />

      <section className="section">
        <div className="shell with-side">
          <div>
            <div className="split reveal" style={{ alignItems: 'start', marginBottom: 40 }}>
              <div className="split__media">
                <img src={data.photo} alt={`${data.name}, ${data.designation}`} width="400" height="480" />
              </div>
              <div>
                <span className="pill">{data.specialityName}</span>
                <h2 style={{ marginTop: 14 }}>{data.name}</h2>
                <p style={{ color: 'var(--teal-600)', fontWeight: 700, marginBottom: 6 }}>{data.designation}</p>
                <p className="muted">{data.qualification}</p>

                <ul className="ticks" style={{ margin: '20px 0' }}>
                  <li>
                    <Icon name="award" size={18} />
                    <span>
                      <strong>{data.experience} years</strong> of clinical experience
                    </span>
                  </li>
                  <li>
                    <Icon name="calendar" size={18} />
                    <span>
                      <strong>OPD days:</strong> {data.opd}
                    </span>
                  </li>
                  <li>
                    <Icon name="clock" size={18} />
                    <span>
                      <strong>Timings:</strong> {data.timings}
                    </span>
                  </li>
                  <li>
                    <Icon name="users" size={18} />
                    <span>
                      <strong>Speaks:</strong> {data.languages.join(', ')}
                    </span>
                  </li>
                </ul>

                <div className="hero__cta">
                  <Link to={`/book-appointment?doctor=${data.slug}`} className="btn btn--teal">
                    Book an Appointment
                  </Link>
                  <a href={`tel:${CONTACT.receptionTel}`} className="btn btn--ghost">
                    <Icon name="phone" size={16} /> Call reception
                  </a>
                </div>
              </div>
            </div>

            <div className="prose reveal">
              <h2>About {data.name.split(' ').slice(0, 2).join(' ')}</h2>
              <p>{data.bio}</p>

              <h2>Areas of focus</h2>
              <div className="tag-row">
                {data.focus.map((f) => (
                  <span className="pill pill--sky" key={f}>
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div className="side-card side-card--navy">
              <h3>OPD schedule</h3>
              <p style={{ marginBottom: 8 }}>
                <strong style={{ color: '#fff' }}>{data.opd}</strong>
              </p>
              <p>{data.timings}</p>
              <p style={{ fontSize: '.86rem' }}>
                Slots fill quickly, especially in the morning. Booking ahead avoids a long wait at the counter.
              </p>
              <Link to={`/book-appointment?doctor=${data.slug}`} className="btn btn--light btn--block">
                Request a slot
              </Link>
            </div>

            <div className="side-card">
              <h3>Need help choosing?</h3>
              <p className="muted" style={{ fontSize: '.92rem' }}>
                If you are not sure this is the right specialist for your problem, call our front desk. They
                will ask a few questions and point you to the right department.
              </p>
              <a href={`tel:${CONTACT.receptionTel}`} className="btn btn--ghost btn--block">
                {CONTACT.reception}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {data.related?.length > 0 && (
        <section className="section section--soft">
          <div className="shell">
            <SectionHead
              eyebrow="Same department"
              title="Other consultants you could see"
              action={
                <Link to="/doctors" className="link-arrow">
                  All doctors <Icon name="arrowRight" size={16} />
                </Link>
              }
            />
            <div className="grid g-3">
              {data.related.map((d) => (
                <DoctorCard key={d.slug} doctor={d} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
