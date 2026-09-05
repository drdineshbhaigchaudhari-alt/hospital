import { useMemo, useState } from 'react';
import { Icon } from '../components/Icon';
import { CtaBand, Empty, ErrorState, Loading, PageHead } from '../components/ui';
import { DoctorCard } from '../components/cards';
import { useSite } from '../App';
import { useApi, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';

export default function Doctors() {
  const { data: site } = useSite();
  const { data, loading, error } = useApi(() => api.doctors(), []);
  const [query, setQuery] = useState('');
  const [dept, setDept] = useState('');

  useSeo(
    'Find a Doctor | Consultants at LifeV 24 Care Hospital',
    'Search the consultant panel at LifeV 24 Care Hospital by department, OPD day or area of focus, and book an appointment online.'
  );
  useReveal();

  const specialities = site?.specialities ?? [];

  const results = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toLowerCase();
    return data.filter((d) => {
      const matchDept = !dept || d.speciality === dept;
      const matchQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.designation.toLowerCase().includes(q) ||
        d.qualification.toLowerCase().includes(q) ||
        d.focus.join(' ').toLowerCase().includes(q);
      return matchDept && matchQuery;
    });
  }, [data, query, dept]);

  return (
    <>
      <PageHead
        title="Find a Doctor"
        text="Search our consultant panel by name, by department, or by the problem you want treated."
        crumbs={[{ label: 'Find a Doctor' }]}
      />

      <section className="section">
        <div className="shell">
          <div className="filters">
            <div style={{ position: 'relative', flex: '1 1 280px' }}>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, speciality or problem..."
                aria-label="Search doctors"
                style={{ width: '100%', paddingLeft: 44 }}
              />
              <Icon
                name="search"
                size={18}
                style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}
              />
            </div>

            <select value={dept} onChange={(e) => setDept(e.target.value)} aria-label="Filter by department">
              <option value="">All departments</option>
              {specialities.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>

            {(query || dept) && (
              <button
                type="button"
                className="chip"
                onClick={() => {
                  setQuery('');
                  setDept('');
                }}
              >
                Clear filters
              </button>
            )}

            <span className="muted" style={{ marginLeft: 'auto', fontSize: '.9rem' }}>
              {results.length} consultant{results.length === 1 ? '' : 's'}
            </span>
          </div>

          {loading && <Loading label="Loading consultants..." />}
          {error && <ErrorState error={error} onRetry={() => window.location.reload()} />}

          {data && results.length > 0 && (
            <div className="grid g-4">
              {results.map((d) => (
                <DoctorCard key={d.slug} doctor={d} />
              ))}
            </div>
          )}

          {data && results.length === 0 && (
            <Empty
              title="No consultant matched that search"
              text="Try a broader term, or clear the filters and browse the full panel. If you cannot find the right specialist, call our reception and describe the problem - they will point you to the correct department."
            />
          )}
        </div>
      </section>

      <CtaBand
        title="Cannot find the right specialist?"
        text="Describe your problem to our front desk and they will match you to the right consultant, including telling you honestly when the case is better handled elsewhere."
      />
    </>
  );
}
