import { chapters } from '../content';
import { useCurrentChapter, useScrolled } from './hooks';
import Logotype from './Logotype';

export default function RunningHead({ still }) {
  const current = useCurrentChapter(chapters);
  const scrolled = useScrolled();

  return (
    <header className="head" data-scrolled={scrolled || undefined}>
      <a className="head-mark" href="#cover" aria-label="astro, back to the cover">
        <Logotype still={still} title="astro" />
      </a>
      <p className="head-stamp" aria-live="polite">
        <span key={current.id} className="stamp">
          <span className="stamp-number">{current.number}.0</span> {current.title}
        </span>
      </p>
      <nav className="head-index" aria-label="Chapters">
        {chapters.slice(1).map((c) => (
          <a key={c.id} href={`#${c.id}`} aria-current={current.id === c.id ? 'true' : undefined}>
            <span className="index-number">{c.number}</span>
            {c.title}
          </a>
        ))}
      </nav>
    </header>
  );
}

