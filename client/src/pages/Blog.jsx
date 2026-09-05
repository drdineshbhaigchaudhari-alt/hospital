import { useMemo, useState } from 'react';
import { CtaBand, Empty, ErrorState, Loading, PageHead, SectionHead } from '../components/ui';
import { PostCard } from '../components/cards';
import { useApi, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';

export default function Blog() {
  const { data, loading, error } = useApi(() => api.blogs(), []);
  const [category, setCategory] = useState('');

  useSeo(
    'Health Library | Articles by LifeV 24 Care Hospital consultants',
    'Practical health articles written by our own consultants - heart care, stroke, diabetes, monsoon fever, pregnancy, child care and more.'
  );
  useReveal();

  const categories = useMemo(() => [...new Set((data ?? []).map((b) => b.category))], [data]);
  const posts = useMemo(
    () => (data ?? []).filter((b) => !category || b.category === category),
    [data, category]
  );

  return (
    <>
      <PageHead
        title="Health Library"
        text="Written by the consultants who run our OPDs, about the questions they answer most often. No jargon, no scare tactics."
        crumbs={[{ label: 'Health Library' }]}
      />

      <section className="section">
        <div className="shell">
          {loading && <Loading label="Loading articles..." />}
          {error && <ErrorState error={error} onRetry={() => window.location.reload()} />}

          {data && (
            <>
              <div className="chip-row" style={{ marginBottom: 36 }}>
                <button
                  type="button"
                  className={`chip${category === '' ? ' is-active' : ''}`}
                  onClick={() => setCategory('')}
                >
                  All topics
                </button>
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`chip${category === c ? ' is-active' : ''}`}
                    onClick={() => setCategory(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {posts.length > 0 ? (
                <div className="grid g-3">
                  {posts.map((p) => (
                    <PostCard key={p.slug} post={p} />
                  ))}
                </div>
              ) : (
                <Empty title="Nothing here yet" text="No article in this topic so far. Try another topic." />
              )}
            </>
          )}
        </div>
      </section>

      <section className="section--tight section--soft">
        <div className="shell center" style={{ maxWidth: 760 }}>
          <SectionHead
            align="center"
            eyebrow="A note on reading health articles"
            title="This is general information, not a diagnosis"
            text="Everything here is written to help you decide whether something needs a doctor, and how soon. It cannot replace an examination. If a symptom is severe, sudden or getting worse, do not read - come in."
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
