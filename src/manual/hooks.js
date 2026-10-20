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

// Grid mode: the whole sheet shows its columns and every specified element
// is labelled with the values the browser actually computed for it.
function describe(el) {
  const s = getComputedStyle(el);
  const size = Math.round(parseFloat(s.fontSize));
  const lead = s.lineHeight === 'normal' ? 'auto' : Math.round(parseFloat(s.lineHeight));
  const weight = Math.round(parseFloat(s.fontWeight));
  return `${el.dataset.spec}  ${size}/${lead}  ${weight}`;
}

export function useGridMode() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'g' && e.key !== 'G') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const typing =
        e.target instanceof Element && e.target.closest('input, textarea, select, [contenteditable]');
      if (typing) return;
      setOn((v) => !v);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (!on) {
      delete root.dataset.grid;
      return undefined;
    }
    const label = () => {
      for (const el of document.querySelectorAll('[data-spec]')) {
        el.dataset.specText = describe(el);
      }
    };
    root.dataset.grid = 'on';
    label();
    window.addEventListener('resize', label);
    return () => window.removeEventListener('resize', label);
  }, [on]);

  return [on, () => setOn((v) => !v)];
}
