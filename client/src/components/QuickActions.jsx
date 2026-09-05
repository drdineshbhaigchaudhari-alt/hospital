import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { QUICK_ACTIONS } from '../lib/site';

export default function QuickActions() {
  return (
    <section className="quick">
      <div className="shell">
        <div className="quick__grid">
          {QUICK_ACTIONS.map((a) => {
            const inner = (
              <>
                <span className={`quick__icon quick__icon--${a.tone}`}>
                  <Icon name={a.icon} size={24} />
                </span>
                <span>
                  <h4>{a.title}</h4>
                  <p>{a.text}</p>
                </span>
              </>
            );
            return a.to ? (
              <Link className="quick__item" to={a.to} key={a.title}>
                {inner}
              </Link>
            ) : (
              <a className="quick__item" href={a.href} key={a.title}>
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
