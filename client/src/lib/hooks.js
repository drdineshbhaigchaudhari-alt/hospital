import { useCallback, useEffect, useRef, useState } from 'react';

/** Generic data loader with loading / error state. */
export function useApi(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    Promise.resolve(fetcher())
      .then((res) => alive && setData(res))
      .catch((err) => alive && setError(err))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}

/** Adds .is-in when the element scrolls into view (used by .reveal). */
export function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.is-in)');
    if (!nodes.length) return undefined;

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'));
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px' }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  });
}

/** Counts from 0 to `to` once the element is visible. */
export function useCountUp(to, duration = 1600) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || done.current) return undefined;

    const run = () => {
      done.current = true;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return setValue(to);
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(to * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      return requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      run();
      return undefined;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -40px' }
    );
    io.observe(el);

    // Safety net: a visitor who never scrolls this far (or a crawler taking a
    // screenshot) must still see the real number rather than a zero.
    const fallback = setTimeout(() => {
      if (!done.current) setValue(to);
    }, 4000);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [to, duration]);

  return [ref, value];
}

/** Simple horizontal scroller controls for a .rail element. */
export function useRail() {
  const ref = useRef(null);
  const scrollBy = useCallback((dir) => {
    const el = ref.current;
    if (!el) return;
    const step = el.firstElementChild?.getBoundingClientRect().width ?? 320;
    el.scrollBy({ left: dir * (step + 24), behavior: 'smooth' });
  }, []);
  return [ref, scrollBy];
}

/** Sets the document title and meta description per page. */
export function useSeo(title, description) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}
