import { Link, useParams } from 'react-router-dom';
import { Icon } from '../components/Icon';
import { CtaBand, ErrorState, Loading, PageHead, SectionHead } from '../components/ui';
import { PostCard } from '../components/cards';
import { useApi, useReveal, useSeo } from '../lib/hooks';
import api from '../lib/api';
import { CONTACT, formatDate } from '../lib/site';

export default function BlogDetail() {
  const { slug } = useParams();
  const { data, loading, error } = useApi(() => api.blog(slug), [slug]);

  useSeo(data ? `${data.title} | LifeV 24 Care Hospital` : 'Article', data?.excerpt);
  useReveal();

  if (loading) return <Loading label="Loading article..." />;
  if (error) return <ErrorState error={error} />;

  return (
    <>
      <PageHead
        title={data.title}
        text={data.excerpt}
        crumbs={[{ label: 'Health Library', to: '/blog' }, { label: data.category }]}
      />

      <section className="section">
        <div className="shell with-side">
          <article>
            <div className="post__meta reveal" style={{ marginBottom: 20 }}>
              <span className="pill pill--sky">{data.category}</span>
              <span>
                <Icon name="user" size={14} />
                {data.author}
              </span>
              <span>
                <Icon name="calendar" size={14} />
                {formatDate(data.date)}
              </span>
              <span>
                <Icon name="clock" size={14} />
                {data.readMinutes} min read
              </span>
            </div>

            <img
              className="reveal"
              src={data.image}
              alt=""
              width="880"
              height="500"
              style={{ borderRadius: 'var(--r-xl)', marginBottom: 32, width: '100%' }}
            />

            <div className="prose reveal">
              {data.body.map((para, i) =>
                i === 0 ? (
                  <p className="prose__lead" key={i}>
                    {para}
                  </p>
                ) : (
                  <p key={i}>{para}</p>
                )
              )}

              <div className="alert alert--err" style={{ marginTop: 34 }}>
                <Icon name="alert" size={20} />
                <div>
                  <strong>This article is general information only.</strong>
                  <p style={{ margin: '6px 0 0' }}>
                    It cannot replace an examination by a doctor who can see you. If a symptom is severe,
                    sudden, or getting worse, come to our emergency department or call{' '}
                    <a href={`tel:${CONTACT.emergencyTel}`}>{CONTACT.emergency}</a> straight away.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <aside>
            <div className="side-card side-card--navy">
              <h3>Talk to a doctor about this</h3>
              <p>
                If something in this article sounds like you, book a consultation rather than waiting to see
                whether it settles on its own.
              </p>
              <Link to="/book-appointment" className="btn btn--light btn--block">
                Book an Appointment
              </Link>
              <a href={`tel:${CONTACT.receptionTel}`} className="btn btn--outline-light btn--block" style={{ marginTop: 10 }}>
                <Icon name="phone" size={16} /> {CONTACT.reception}
              </a>
            </div>

            <div className="side-card">
              <h3>More from the library</h3>
              <ul className="side-list">
                {data.related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/blog/${r.slug}`}>
                      {r.title}
                      <Icon name="chevronRight" size={15} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {data.related?.length > 0 && (
        <section className="section section--soft">
          <div className="shell">
            <SectionHead
              eyebrow="Keep reading"
              title="Related articles"
              action={
                <Link to="/blog" className="link-arrow">
                  All articles <Icon name="arrowRight" size={16} />
                </Link>
              }
            />
            <div className="grid g-3">
              {data.related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
