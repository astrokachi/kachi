import { chapters, foreword, links, materials, person, roleLine } from './content';
import Applications, { Out } from './manual/Applications';
import Construction from './manual/Construction';
import { useGridMode, useReducedMotion } from './manual/hooks';
import Logotype from './manual/Logotype';
import { useSmoothScroll } from './manual/smooth';
import RunningHead, { GridOverlay } from './manual/RunningHead';

function Chapter({ id, number, title, children, className = '' }) {
  return (
    <section id={id} className={`chapter ${className}`} aria-labelledby={`${id}-title`}>
      <header className="chapter-head sheet">
        <p className="chapter-number tabular">{number}.0</p>
        <h2 id={`${id}-title`} data-spec="Display">
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}

export default function App() {
  const still = useReducedMotion();
  const [grid, toggleGrid] = useGridMode();
  useSmoothScroll(still);

  return (
    <>
      <a className="skip" href="#foreword">
        Skip to content
      </a>
      <RunningHead grid={grid} onGrid={toggleGrid} still={still} />
      {grid && <GridOverlay />}

      <main>
        <section id="cover" className="cover sheet" aria-labelledby="cover-title">
          <div className="cover-mark">
            <Logotype construction still={still} title="astro, the logotype, with its construction" />
          </div>
          <nav className="cover-contents" aria-label="Contents">
            {chapters.slice(1).map((c) => (
              <a key={c.id} href={`#${c.id}`}>
                <span className="tabular">{c.number}</span>
                {c.title}
              </a>
            ))}
          </nav>
          <div className="colophon-block">
            <h1 id="cover-title" data-spec="Lead">
              {person.name}
            </h1>
            <p>{roleLine}</p>
            <p className="cover-actions">
              <a className="write" href={`mailto:${person.email}`}>
                Write to me
              </a>
              <Out href={person.resume}>Resume</Out>
            </p>
          </div>
          <p className="cover-note" data-spec="Body">
            I build web products end to end: the interface, the backend behind it, and the AI
            features inside both.
          </p>
        </section>

        <Chapter id="foreword" number="1" title="Foreword">
          <div className="foreword sheet">
            <p className="lead" data-spec="Lead">
              {foreword[0]}
            </p>
            <p className="body">{foreword[1]}</p>
            <dl className="spec spec--wide">
              <div>
                <dt>Role</dt>
                <dd>{roleLine}</dd>
              </div>
              {materials.map(([group, items]) => (
                <div key={group}>
                  <dt>{group}</dt>
                  <dd>{items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Chapter>

        <Chapter id="construction" number="2" title="Construction">
          <div className="sheet chapter-intro">
            <p className="chapter-lead lead">
              This site is built the way I build interfaces: a few tokens, one grid, components on
              top. Press G, or the Grid button, to see them on every page.
            </p>
          </div>
          <Construction />
        </Chapter>

        <Chapter id="applications" number="3" title="Applications">
          <Applications />
        </Chapter>

        <Chapter id="colophon" number="4" title="Colophon" className="colophon">
          <div className="sheet colophon-body">
            <p className="colophon-ask">For work, questions or a hello:</p>
            <a className="email" href={`mailto:${person.email}`} data-spec="Display">
              {person.email}
            </a>
            <ul className="link-list">
              {links.map((l) => (
                <li key={l.label}>
                  <Out href={l.href}>{l.label}</Out>
                </li>
              ))}
            </ul>
            <p className="colophon-note">
              Set in Host Grotesk. Two inks on white stock. Built with React and Vite.
            </p>
            <p className="colophon-note">© {new Date().getFullYear()} {person.name}</p>
          </div>
        </Chapter>
      </main>
    </>
  );
}
