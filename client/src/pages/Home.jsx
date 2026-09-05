import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import QuickActions from '../components/QuickActions';
import { Icon } from '../components/Icon';
import {
  CtaBand,
  ErrorState,
  FaqList,
  InsurerMarquee,
  Loading,
  SectionHead,
  StatsBand,
  WhyCard
} from '../components/ui';
import { DoctorCard, FacilityCard, PackageCard, PostCard, SpecialityCard, TestimonialCard } from '../components/cards';
import { useSite } from '../App';
import { useApi, useRail, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';

export default function Home() {
  const { data, loading, error } = useSite();
  const { data: faqs } = useApi(() => api.faqs(), []);
  const [railRef, scrollRail] = useRail();
  const [tsmRef, scrollTsm] = useRail();

  useSeo(
    'LifeV 24 Care Hospital | Multi-Speciality Hospital with 24x7 Emergency, New Delhi',
    'Multi-speciality hospital with 24x7 emergency and trauma care, 16 specialities, 250+ beds, ICU, NICU, cath lab and dialysis. Book an appointment online.'
  );
  useReveal();

  if (loading) {
    return (
      <>
        <Hero />
        <Loading label="Loading hospital information..." />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Hero />
        <ErrorState error={error} onRetry={() => window.location.reload()} />
      </>
    );
  }

  return (
    <>
      <Hero />
      <QuickActions />

      {/* ------------------------------------------------- about ---- */}
      <section className="section">
        <div className="shell split">
          <div className="split__media reveal">
            <img src="/images/misc/about-hospital.jpg" alt="LifeV 24 Care Hospital campus" width="900" height="680" />
            <div className="split__badge">
              <span className="quick__icon quick__icon--teal">
                <Icon name="award" size={22} />
              </span>
              <div>
                <strong>14 years</strong>
                <small>of continuous service to north Delhi</small>
              </div>
            </div>
          </div>

          <div className="reveal">
            <SectionHead
              eyebrow="About LifeV 24 Care"
              title="A hospital built around the hours when help is hardest to find"
              text="We opened in 2011 with a single conviction: a serious illness rarely respects clinic timings. Today we run 250 beds, 16 specialities and an emergency floor that has never once closed."
            />
            <ul className="ticks">
              <li>
                <Icon name="checkCircle" size={19} />
                <span>
                  <strong>Consultants on call, not just on the board.</strong> A cardiologist, physician,
                  surgeon, obstetrician and paediatrician are reachable at every hour of the night.
                </span>
              </li>
              <li>
                <Icon name="checkCircle" size={19} />
                <span>
                  <strong>Written estimates before planned admission.</strong> If the treatment plan changes,
                  we tell you before the bill does.
                </span>
              </li>
              <li>
                <Icon name="checkCircle" size={19} />
                <span>
                  <strong>Cashless with major insurers and Ayushman Bharat.</strong> Our help desk fills the
                  forms and follows up so your family does not have to.
                </span>
              </li>
            </ul>
            <div className="hero__cta">
              <Link to="/about" className="btn">
                More about us
              </Link>
              <Link to="/doctors" className="btn btn--ghost">
                Meet the consultants
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- stats ---- */}
      <StatsBand stats={data.stats} />

      {/* -------------------------------------------- specialities -- */}
      <section className="section section--soft">
        <div className="shell">
          <SectionHead
            align="center"
            eyebrow="Centres of Excellence"
            title="Sixteen specialities, one campus"
            text="Whatever brings you here, the diagnostics, the theatre and the intensive care unit are all in the same building. Nobody is sent across the city mid-treatment."
          />
          <div className="grid g-4">
            {data.specialities.slice(0, 8).map((s) => (
              <SpecialityCard key={s.slug} item={s} />
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}>
            <Link to="/specialities" className="btn btn--ghost">
              View all 16 departments <Icon name="arrowRight" size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ doctors --- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Our Consultants"
            title="The doctors who will actually see you"
            text="Not a directory of visiting names. These consultants hold regular OPDs here and operate here."
            action={
              <div className="rail-nav">
                <button type="button" onClick={() => scrollRail(-1)} aria-label="Scroll doctors left">
                  <Icon name="chevronLeft" size={19} />
                </button>
                <button type="button" onClick={() => scrollRail(1)} aria-label="Scroll doctors right">
                  <Icon name="chevronRight" size={19} />
                </button>
              </div>
            }
          />
          <div className="rail" ref={railRef}>
            {data.doctors.map((d) => (
              <DoctorCard key={d.slug} doctor={d} />
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}>
            <Link to="/doctors" className="btn">
              Find a doctor <Icon name="arrowRight" size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- why choose -- */}
      <section className="section section--mint">
        <div className="shell">
          <SectionHead
            align="center"
            eyebrow="Why families choose us"
            title="Six things we are strict about"
            text="Every hospital claims care and quality. These are the specific promises our staff are held to."
          />
          <div className="grid g-3">
            {data.whyChooseUs.map((w) => (
              <WhyCard key={w.title} item={w} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------- facilities -- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Infrastructure"
            title="Facilities that run through the night"
            text="Equipment matters less than whether it is staffed at 3 AM. All of these are."
            action={
              <Link to="/facilities" className="link-arrow">
                All facilities <Icon name="arrowRight" size={16} />
              </Link>
            }
          />
          <div className="grid g-3">
            {data.facilities.map((f) => (
              <FacilityCard key={f.slug} item={f} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ packages -- */}
      <section className="section section--soft">
        <div className="shell">
          <SectionHead
            align="center"
            eyebrow="Preventive Health"
            title="Health check packages worth actually doing"
            text="Panels put together by our physicians around what commonly goes undetected in Indian adults, not padded with tests you do not need."
          />
          <div className="grid g-3">
            {data.packages.slice(0, 3).map((p) => (
              <PackageCard key={p.slug} pkg={p} />
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}>
            <Link to="/health-packages" className="btn btn--ghost">
              Compare all packages <Icon name="arrowRight" size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- testimonials -- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Patient Voices"
            title="What families tell us afterwards"
            text="Collected from patients treated at LifeV 24 Care, shared with their permission."
            action={
              <div className="rail-nav">
                <button type="button" onClick={() => scrollTsm(-1)} aria-label="Previous testimonial">
                  <Icon name="chevronLeft" size={19} />
                </button>
                <button type="button" onClick={() => scrollTsm(1)} aria-label="Next testimonial">
                  <Icon name="chevronRight" size={19} />
                </button>
              </div>
            }
          />
          <div className="rail" ref={tsmRef}>
            {data.testimonials.map((t) => (
              <TestimonialCard key={t.name} item={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ insurers -- */}
      <section className="section--tight section--soft">
        <div className="shell">
          <SectionHead
            align="center"
            eyebrow="Cashless Treatment"
            title="Empanelled with the insurers most families carry"
            text="Carry your policy card and a photo ID. Our insurance desk starts the pre-authorisation as soon as admission is advised."
          />
        </div>
        <InsurerMarquee insurers={data.insurers} />
      </section>

      {/* ---------------------------------------------------- blog -- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Health Library"
            title="Written by our consultants, not by a content farm"
            action={
              <Link to="/blog" className="link-arrow">
                All articles <Icon name="arrowRight" size={16} />
              </Link>
            }
          />
          <div className="grid g-3">
            {data.blogs.map((b) => (
              <PostCard key={b.slug} post={b} />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- FAQ -- */}
      {faqs && (
        <section className="section section--soft">
          <div className="shell with-side">
            <div>
              <SectionHead
                eyebrow="Questions we get every day"
                title="Before you visit"
                text="If your question is not here, call our reception and ask. Nobody will mind."
              />
              <FaqList items={faqs.slice(0, 6)} />
            </div>
            <aside>
              <div className="side-card side-card--navy">
                <h3>Still not sure?</h3>
                <p>
                  Tell our front desk the problem in one line and they will point you to the right department
                  and the earliest available slot. There is no charge for asking.
                </p>
                <Link to="/book-appointment" className="btn btn--light btn--block" style={{ marginTop: 10 }}>
                  Book an Appointment
                </Link>
                <Link to="/contact" className="btn btn--outline-light btn--block" style={{ marginTop: 10 }}>
                  Contact & Directions
                </Link>
              </div>
            </aside>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
