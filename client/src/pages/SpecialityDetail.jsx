import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { CtaBand, ErrorState, Loading, PageHead, SectionHead } from '../components/ui';
import { DoctorCard } from '../components/cards';
import { useSite } from '../App';
import { useApi, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';
import { CONTACT } from '../lib/site';

export default function SpecialityDetail() {
  const { slug } = useParams();
  const { data: site } = useSite();
  const { data, loading, error } = useApi(() => api.speciality(slug), [slug]);

  useSeo(
    data ? `${data.name} | LifeV 24 Care Hospital` : 'Department | LifeV 24 Care Hospital',
    data?.intro?.slice(0, 155)
  );
  useReveal();

  if (loading) return <Loading label="Loading department..." />;
  if (error) return <ErrorState error={error} />;

  return (
    <>
      <PageHead
        title={data.name}
        text={data.short}
        crumbs={[{ label: 'Centres of Excellence', to: '/specialities' }, { label: data.name }]}
      />

      <section className="section">
        <div className="shell with-side">
          <div>
            <div className="split__media reveal" style={{ marginBottom: 34 }}>
              <img
                src={data.image}
                alt={data.name}
                width="800"
                height="560"
                style={{ aspectRatio: '16 / 7', objectFit: 'cover' }}
              />
            </div>

            <div className="prose reveal">
              <span className="eyebrow">Overview</span>
              <p className="prose__lead">{data.intro}</p>

              <h2>What this department can do on site</h2>
              <ul className="ticks">
                {data.highlights.map((h) => (
                  <li key={h}>
                    <Icon name="checkCircle" size={19} />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h2>Conditions commonly treated here</h2>
              <div className="tag-row" style={{ marginBottom: 28 }}>
                {data.conditions.map((c) => (
                  <span className="pill pill--sky" key={c}>
                    {c}
                  </span>
                ))}
              </div>

              <div className="alert alert--ok" style={{ marginTop: 30 }}>
                <Icon name="info" size={20} />
                <div>
                  <strong>When in doubt, come in.</strong>
                  <p style={{ margin: '6px 0 0' }}>
                    If the symptom is severe, sudden or getting worse, do not wait for an OPD slot. Our
                    emergency department is open 24 hours - call{' '}
                    <a href={`tel:${CONTACT.emergencyTel}`}>{CONTACT.emergency}</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------- sidebar ---- */}
          <aside>
            <div className="side-card">
              <h3>Other departments</h3>
              <ul className="side-list">
                {(site?.specialities ?? [])
                  .filter((s) => s.slug !== slug)
                  .slice(0, 10)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link to={`/specialities/${s.slug}`}>
                        {s.name}
                        <Icon name="chevronRight" size={15} />
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link to="/specialities">
                    View all departments
                    <Icon name="arrowRight" size={15} />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="side-card side-card--navy">
              <h3>Book with this department</h3>
              <p>
                Choose {data.name} on the appointment form and we will call you back
                with the earliest slot, usually within two working hours.
              </p>
              <Link to="/book-appointment" className="btn btn--light btn--block">
                Book an Appointment
              </Link>
              <a href={`tel:${CONTACT.receptionTel}`} className="btn btn--outline-light btn--block" style={{ marginTop: 10 }}>
                <Icon name="phone" size={16} /> {CONTACT.reception}
              </a>
            </div>

            <div className="side-card">
              <h3>Emergency</h3>
              <p className="muted" style={{ fontSize: '.92rem' }}>
                Emergency and trauma care runs 24 hours a day, all 365 days, with triage inside sixty seconds
                of arrival.
              </p>
              <a href={`tel:${CONTACT.emergencyTel}`} className="btn btn--coral btn--block">
                <Icon name="phone" size={16} /> {CONTACT.emergency}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* -------------------------------------------- doctors ----- */}
      <section className="section section--soft">
        <div className="shell">
          <SectionHead
            eyebrow="The team"
            title={`Consultants in ${data.name}`}
            text={
              data.doctors?.length
                ? 'These are the doctors who hold OPDs and operate in this department.'
                : 'Consultant profiles for this department are being updated. Call our reception and we will tell you who is available and when.'
            }
          />

          {data.doctors?.length > 0 ? (
            <div className="grid g-4">
              {data.doctors.map((d) => (
                <DoctorCard key={d.slug} doctor={d} />
              ))}
            </div>
          ) : (
            <div className="card" style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
              <Icon name="info" size={26} style={{ color: 'var(--teal)' }} />
              <p style={{ margin: 0, flex: '1 1 320px' }}>
                This department runs a regular OPD. For the current consultant list and timings, call{' '}
                <a href={`tel:${CONTACT.receptionTel}`}>{CONTACT.reception}</a> or request an appointment and
                our front desk will confirm the doctor and slot on the phone.
              </p>
              <Link to="/book-appointment" className="btn btn--teal">
                Book an Appointment
              </Link>
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
