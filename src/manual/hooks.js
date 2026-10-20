import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduce, setReduce] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const sync = () => setReduce(media.matches);
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  return reduce;
}

// The chapter whose spread crosses the middle of the viewport. The URL hash
// follows it, so every chapter is addressable.
export function useCurrentChapter(chapters) {
  const [current, setCurrent] = useState(chapters[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const chapter = chapters.find((c) => c.id === entry.target.id);
          if (!chapter) continue;
          setCurrent(chapter);
          const hash = chapter.id === 'cover' ? '' : `#${chapter.id}`;
          if (window.location.hash !== hash) {
            window.history.replaceState(null, '', hash || window.location.pathname);
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    for (const c of chapters) {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [chapters]);
  return current;
}

// Spreads rise into place as they reach the reader, each once. Under reduced
// motion everything is simply there.
export function useReveal(still) {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    if (still) {
      for (const el of items) el.classList.add('is-revealed');
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    for (const el of items) observer.observe(el);
    return () => observer.disconnect();
  }, [still]);
}

// True once the page has scrolled, so the running head can show its edge.
export function useScrolled() {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 4);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrolled;
}
