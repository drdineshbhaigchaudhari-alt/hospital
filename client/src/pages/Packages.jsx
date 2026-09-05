import { Icon } from '../components/Icon';
import { CtaBand, ErrorState, FaqList, Loading, PageHead, SectionHead } from '../components/ui';
import { PackageCard } from '../components/cards';
import { useApi, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';

const PREP = [
  {
    icon: 'clock',
    title: 'Come fasting, and come early',
    text: 'Most packages need 10 to 12 hours without food. Plain water is allowed and, in fact, encouraged. Reporting between 7:30 and 9:00 AM gets you out fastest.'
  },
  {
    icon: 'user',
    title: 'Carry your regular medicines',
    text: 'Do not skip blood pressure, thyroid or heart medicines. Bring them with you and take them after the blood sample is drawn, unless your doctor has said otherwise.'
  },
  {
    icon: 'info',
    title: 'Tell us if you are unwell that week',
    text: 'A fever, an infection or a recent course of antibiotics can distort several results. It is usually better to postpone by a week than to test and repeat.'
  },
  {
    icon: 'shieldCheck',
    title: 'Reports and a real consultation',
    text: 'Reports reach you on WhatsApp and email, usually within 24 hours. Every package includes sitting with a physician who explains what the numbers mean.'
  }
];

const PKG_FAQ = [
  {
    q: 'Do I need to book a health check in advance?',
    a: 'Yes, please book at least one day ahead. Some tests such as ultrasound, TMT and echo run on fixed slots, and booking lets us schedule them one after the other so you finish in one visit.'
  },
  {
    q: 'Is fasting really necessary?',
    a: 'For blood sugar, lipid profile and abdominal ultrasound, yes. Eating beforehand makes those results unreliable and you would have to repeat them. Water is allowed and helps with the blood draw.'
  },
  {
    q: 'Can I do a health check during my periods?',
    a: 'Blood tests are fine. Urine tests and a Pap smear should be postponed until a few days after bleeding stops, otherwise the results can be misleading. Tell the desk and we will reschedule just those tests.'
  },
  {
    q: 'Will insurance cover a preventive health check?',
    a: 'Most health insurance policies do not cover routine preventive check-ups, though some offer a free check-up after a few claim-free years. Check your policy. Corporate wellness tie-ups are handled separately by our marketing desk.'
  },
  {
    q: 'Are these prices final?',
    a: 'The package price covers every test listed plus the consultation. If your doctor advises an extra test after seeing your results, that is charged separately and you will be told the cost before it is done.'
  }
];

export default function Packages() {
  const { data, loading, error } = useApi(() => api.packages(), []);

  useSeo(
    'Health Check-Up Packages | LifeV 24 Care Hospital',
    'Full body, cardiac, women wellness, diabetes and senior citizen health check packages from Rs. 1,499, with reports in 24 hours and a physician consultation included.'
  );
  useReveal();

  return (
    <>
      <PageHead
        title="Preventive Health Check Packages"
        text="Panels built by our physicians around what commonly goes undetected in Indian adults - not padded with tests that will not change anything."
        crumbs={[{ label: 'Health Packages' }]}
      />

      <section className="section">
        <div className="shell">
          {loading && <Loading label="Loading packages..." />}
          {error && <ErrorState error={error} onRetry={() => window.location.reload()} />}

          {data && (
            <>
              <SectionHead
                align="center"
                eyebrow="Choose a package"
                title="Six packages, no hidden add-ons"
                text="Every price below includes all the listed tests and a consultation with a physician who will actually go through the report with you."
              />
              <div className="grid g-3">
                {data.map((p) => (
                  <PackageCard key={p.slug} pkg={p} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* -------------------------------------------- preparation -- */}
      <section className="section section--soft">
        <div className="shell">
          <SectionHead align="center" eyebrow="Before you come" title="How to prepare" />
          <div className="grid g-4">
            {PREP.map((p) => (
              <article className="card reveal" key={p.title}>
                <div className="card__icon">
                  <Icon name={p.icon} size={26} />
                </div>
                <h3>{p.title}</h3>
                <p style={{ marginBottom: 0 }}>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell" style={{ maxWidth: 880 }}>
          <SectionHead align="center" eyebrow="Questions" title="About health check-ups" />
          <FaqList items={PKG_FAQ} />
        </div>
      </section>

      <CtaBand
        title="Booking a check-up for a parent?"
        text="Tell us their age and any existing conditions when you book. We will suggest the right panel, arrange wheelchair assistance and keep the whole visit in one unhurried morning."
      />
    </>
  );
}
