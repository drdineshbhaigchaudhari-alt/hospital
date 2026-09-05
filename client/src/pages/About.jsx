import { Link } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { CtaBand, PageHead, SectionHead, StatsBand, WhyCard, InsurerMarquee } from '../components/ui';
import { TestimonialCard } from '../components/cards';
import { useSite } from '../App';
import { useReveal, useSeo } from '../lib/hooks';

const MILESTONES = [
  {
    year: '2011',
    title: 'Doors open with 60 beds',
    text: 'LifeV 24 Care starts as a 60-bed general hospital with one operation theatre and a promise that the emergency department will never shut.'
  },
  {
    year: '2014',
    title: 'Critical care and NICU added',
    text: 'A 12-bed ICU and a neonatal unit are commissioned, so critically ill patients and premature babies no longer need to be referred out of the area.'
  },
  {
    year: '2017',
    title: 'Cath lab and 24x7 angioplasty',
    text: 'The cardiac cath lab opens with a round-the-clock primary angioplasty rota, cutting the time from chest pain to treatment for the whole neighbourhood.'
  },
  {
    year: '2020',
    title: 'A hospital that stayed open',
    text: 'Through the pandemic we ran a separate isolation block and an oxygen plant, while keeping non-covid emergency, dialysis and maternity services running without a break.'
  },
  {
    year: '2023',
    title: 'Cancer day-care and tumour board',
    text: 'Medical oncology begins, with a weekly multidisciplinary tumour board so every case is planned by a team rather than a single opinion.'
  },
  {
    year: '2026',
    title: '250 beds, 16 specialities',
    text: 'The campus now runs 250 beds, five modular theatres, a 12-station dialysis floor and an ambulance fleet averaging a twelve-minute city response.'
  }
];

const VALUES = [
  {
    icon: 'shieldCheck',
    title: 'Say the difficult thing early',
    text: 'A family that is told the truth on day one can plan. We do not soften a prognosis to keep an admission, and we say plainly when a treatment is unlikely to help.'
  },
  {
    icon: 'rupee',
    title: 'Never treat a bill as a target',
    text: 'No consultant here has a revenue target, and nobody is incentivised to order a scan. If a test will not change the treatment, we will tell you not to do it.'
  },
  {
    icon: 'users',
    title: 'The family is part of the team',
    text: 'One attendant stays overnight in private rooms, ICU families get a daily consultant update, and discharge instructions are written in a language the household reads.'
  }
];

export default function About() {
  const { data } = useSite();
  useSeo(
    'About LifeV 24 Care Hospital | 250-bed multi-speciality hospital in New Delhi',
    'Since 2011, LifeV 24 Care Hospital has run a 24x7 emergency floor, 250 beds and 16 specialities in north Delhi. Read our story, values and milestones.'
  );
  useReveal();

  return (
    <>
      <PageHead
        title="About LifeV 24 Care Hospital"
        text="A 250-bed multi-speciality hospital in north Delhi, open every hour of every day since 2011."
        crumbs={[{ label: 'About Us' }]}
      />

      <section className="section">
        <div className="shell split">
          <div className="split__media reveal">
            <img src="/images/misc/opd-scene.jpg" alt="A consultant seeing a senior patient in the OPD" width="900" height="600" />
          </div>
          <div className="reveal">
            <SectionHead
              eyebrow="Our story"
              title="Started because a neighbourhood had nowhere to go at night"
              text=""
            />
            <p>
              In 2011 the nearest hospital that could handle a night-time emergency was more than forty minutes
              away through traffic that does not care what is happening in the back seat. A group of doctors
              who had spent years watching that drive decided to build something closer.
            </p>
            <p>
              We opened with sixty beds and one operation theatre. What we did not compromise on, even then,
              was the thing the name carries: the emergency department, the laboratory and the pharmacy would
              be staffed all twenty-four hours. Fifteen years later, that has never lapsed for a single night.
            </p>
            <p>
              The hospital has grown into 250 beds and sixteen specialities, but the way we judge ourselves has
              not changed. It is not the equipment list. It is whether a family arriving at 2 AM, frightened
              and without an appointment, is seen quickly, told the truth, and given a number they can afford
              to hear.
            </p>
            <div className="hero__cta" style={{ marginTop: 24 }}>
              <Link to="/doctors" className="btn">
                Meet our consultants
              </Link>
              <Link to="/facilities" className="btn btn--ghost">
                See our facilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {data?.stats && <StatsBand stats={data.stats} />}

      {/* --------------------------------------------- mission ----- */}
      <section className="section section--soft">
        <div className="shell">
          <SectionHead
            align="center"
            eyebrow="What we stand for"
            title="Three rules that decide everything else"
          />
          <div className="grid g-3">
            {VALUES.map((v) => (
              <WhyCard key={v.title} item={v} />
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------- milestones --- */}
      <section className="section">
        <div className="shell">
          <SectionHead align="center" eyebrow="Milestones" title="How the hospital grew" />
          <div className="grid g-3">
            {MILESTONES.map((m) => (
              <article className="card reveal" key={m.year}>
                <span className="pill pill--sky" style={{ marginBottom: 14 }}>
                  {m.year}
                </span>
                <h3>{m.title}</h3>
                <p style={{ marginBottom: 0 }}>{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------ accreditation -- */}
      {data?.accreditations && (
        <section className="section section--mint">
          <div className="shell">
            <SectionHead
              align="center"
              eyebrow="Quality & compliance"
              title="Accreditations and empanelment"
              text="Certificates are displayed at the reception, and we are happy to show the originals on request."
            />
            <div className="grid g-4">
              {data.accreditations.map((a) => (
                <article className="card center reveal" key={a.name}>
                  <div className="card__icon" style={{ margin: '0 auto 18px' }}>
                    <Icon name="award" size={26} />
                  </div>
                  <h3>{a.name}</h3>
                  <p style={{ marginBottom: 0 }}>{a.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {data?.insurers && (
        <section className="section--tight">
          <div className="shell">
            <SectionHead align="center" eyebrow="Cashless" title="Insurers and TPAs we work with" />
          </div>
          <InsurerMarquee insurers={data.insurers} />
        </section>
      )}

      {data?.testimonials && (
        <section className="section section--soft">
          <div className="shell">
            <SectionHead align="center" eyebrow="Patient voices" title="In their own words" />
            <div className="grid g-3">
              {data.testimonials.slice(0, 3).map((t) => (
                <TestimonialCard key={t.name} item={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Want to see the hospital before you decide?"
        text="Walk in any weekday between 10 AM and 5 PM and ask at the front desk for a campus round. Somebody will show you the wards, the ICU visiting area and the room categories, without any obligation."
        primary={{ label: 'Contact the front desk', to: '/contact' }}
      />
    </>
  );
}
