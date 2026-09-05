import { CtaBand, ErrorState, Loading, PageHead, SectionHead } from '../components/ui';
import { SpecialityCard } from '../components/cards';
import { useApi, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';

export default function Specialities() {
  const { data, loading, error } = useApi(() => api.specialities(), []);
  useSeo(
    'Centres of Excellence | Departments at LifeV 24 Care Hospital',
    'Cardiology, neurosciences, orthopaedics, oncology, nephrology, gynaecology, paediatrics and more - 16 specialities under one roof at LifeV 24 Care Hospital.'
  );
  useReveal();

  return (
    <>
      <PageHead
        title="Centres of Excellence"
        text="Sixteen departments sharing one campus, one set of theatres and one intensive care floor, so a complicated case never has to move buildings."
        crumbs={[{ label: 'Centres of Excellence' }]}
      />

      <section className="section">
        <div className="shell">
          {loading && <Loading label="Loading departments..." />}
          {error && <ErrorState error={error} onRetry={() => window.location.reload()} />}

          {data && (
            <>
              <SectionHead
                align="center"
                eyebrow="Departments"
                title="Choose a department to see the team and the treatments"
                text="Each page lists the consultants who hold OPDs there, the conditions commonly treated and what the department can actually do on site."
              />
              <div className="grid g-3">
                {data.map((s) => (
                  <SpecialityCard key={s.slug} item={s} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CtaBand
        title="Not sure which department fits your problem?"
        text="Describe the symptom in one line when you book, and our front desk will route you to the right consultant instead of making you guess."
      />
    </>
  );
}
