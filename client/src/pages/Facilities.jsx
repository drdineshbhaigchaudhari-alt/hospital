import { Icon } from '../components/Icon';
import { CtaBand, ErrorState, Loading, PageHead, SectionHead, StatsBand } from '../components/ui';
import { FacilityCard } from '../components/cards';
import { useSite } from '../App';
import { useApi, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';

const ROOMS = [
  {
    name: 'General Ward',
    text: 'Clean, well-ventilated shared ward with nursing station in sight, lockers and attached washrooms. Visiting hours twice daily.',
    points: ['Shared, 6-8 beds', 'Attendant seating', 'Included in most cashless plans']
  },
  {
    name: 'Twin Sharing Room',
    text: 'Two beds with a curtain partition, an attendant chair, television and hot water. A middle option that most insurance policies cover fully.',
    points: ['Two beds per room', 'TV and hot water', 'Attendant chair provided']
  },
  {
    name: 'Private Room',
    text: 'A single room with an attendant bed, television, wardrobe, in-room dining from the hospital kitchen and an attached washroom.',
    points: ['Single occupancy', 'Attendant bed', 'In-room dietician-planned meals']
  },
  {
    name: 'Deluxe Suite',
    text: 'A larger room with a separate sitting area for family, a refrigerator and a sofa-bed, for longer stays and post-operative recovery.',
    points: ['Separate family area', 'Refrigerator and sofa-bed', 'Priority housekeeping']
  }
];

export default function Facilities() {
  const { data: site } = useSite();
  const { data, loading, error } = useApi(() => api.facilities(), []);

  useSeo(
    'Facilities & Infrastructure | LifeV 24 Care Hospital',
    'Emergency and trauma centre, ICU and NICU, modular operation theatres, cath lab, dialysis unit, blood bank, 24x7 pharmacy, ambulance fleet and radiology at LifeV 24 Care Hospital.'
  );
  useReveal();

  return (
    <>
      <PageHead
        title="Facilities & Infrastructure"
        text="Equipment matters less than whether it is staffed at three in the morning. Everything on this page is."
        crumbs={[{ label: 'Facilities' }]}
      />

      <section className="section">
        <div className="shell">
          {loading && <Loading label="Loading facilities..." />}
          {error && <ErrorState error={error} onRetry={() => window.location.reload()} />}

          {data && (
            <>
              <SectionHead
                align="center"
                eyebrow="Clinical infrastructure"
                title="What is available on this campus"
                text="Diagnostics, theatres, intensive care and pharmacy sit in the same building, so a deteriorating patient is never moved across the city mid-treatment."
              />
              <div className="grid g-3">
                {data.map((f) => (
                  <FacilityCard key={f.slug} item={f} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {site?.stats && <StatsBand stats={site.stats} />}

      {/* ------------------------------------------------- rooms --- */}
      <section className="section section--soft">
        <div className="shell">
          <SectionHead
            align="center"
            eyebrow="Rooms & tariffs"
            title="Room categories, explained honestly"
            text="Room category affects the whole bill, not just the room rent, because surgery and consultant charges are usually tied to it. Ask for the full tariff sheet at admission - it is a printed document and you are entitled to it."
          />
          <div className="grid g-4">
            {ROOMS.map((r) => (
              <article className="card reveal" key={r.name}>
                <div className="card__icon">
                  <Icon name="bed" size={26} />
                </div>
                <h3>{r.name}</h3>
                <p>{r.text}</p>
                <ul className="fac-card__points">
                  {r.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={14} strokeWidth={3} />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="alert alert--ok" style={{ marginTop: 34 }}>
            <Icon name="info" size={20} />
            <div>
              <strong>Before you choose a room:</strong>
              <p style={{ margin: '6px 0 0' }}>
                If you are using health insurance, check the room-rent limit on your policy first. Choosing a
                room above that limit can result in a proportionate deduction across the entire bill. Our
                insurance desk will work this out with you before admission if you ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- patient ---- */}
      <section className="section">
        <div className="shell split">
          <div className="reveal">
            <SectionHead
              eyebrow="Patient services"
              title="The things that make a hospital stay bearable"
            />
            <ul className="ticks">
              {[
                'A dietician-planned kitchen with vegetarian, Jain and diabetic meal options',
                'Wheelchair and stretcher assistance from the gate, not just from reception',
                'A separate quiet waiting area for families of patients in the ICU and operation theatre',
                'Free Wi-Fi across the campus and a charging point at every attendant bed',
                'Prayer and quiet room available to families of all faiths',
                'Medical records and discharge summary copies issued within one working day'
              ].map((t) => (
                <li key={t}>
                  <Icon name="checkCircle" size={19} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="split__media reveal">
            <img src="/images/misc/opd-scene.jpg" alt="A consultant with a patient in the OPD" width="900" height="600" />
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to see the wards before admission?"
        text="Any weekday between 10 AM and 5 PM, ask at the front desk for a campus round. We will show you the room categories, the ICU visiting area and the billing counter, with no obligation."
        primary={{ label: 'Contact us', to: '/contact' }}
      />
    </>
  );
}
