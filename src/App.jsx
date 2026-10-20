import { chapters, foreword, links, materials, person, roleLine } from './content';
import Applications, { Out } from './manual/Applications';
import Card from './manual/Card';
import { useReducedMotion, useReveal } from './manual/hooks';
import Logotype from './manual/Logotype';
import { moonTonight } from './manual/Moon';
import { useSmoothScroll } from './manual/smooth';
import RunningHead from './manual/RunningHead';

function Chapter({ id, number, title, children, className = '' }) {
  return (
    <section id={id} className={`chapter ${className}`} aria-labelledby={`${id}-title`}>
      <header className="chapter-head sheet" data-reveal>
        <p className="chapter-number tabular">{number}.0</p>
        <h2 id={`${id}-title`}>
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}

// Every visit prints a fresh copy, dated, with the moon it was printed under.
function printing() {
  const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(new Date());
  const { name, lit } = moonTonight();
  const moon = name.endsWith('moon') ? name : `${name} moon`;
  return `This copy printed ${date}, under a ${moon.toLowerCase()}, ${lit}% lit.`;
}

export default function App() {
  const still = useReducedMotion();
  useSmoothScroll(still);
  useReveal(still);

  return (
    <>
      <a className="skip" href="#foreword">
        Skip to content
      </a>
      <RunningHead still={still} />

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
            <h1 id="cover-title">
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
          <p className="cover-note">
            I build web products end to end: the interface, the backend behind it, and the AI
            features inside both.
          </p>
        </section>

        <Chapter id="foreword" number="1" title="Foreword">
          <div className="foreword sheet" data-reveal>
            <p className="lead">
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

        <Chapter id="projects" number="2" title="Projects">
          <Applications />
        </Chapter>

        <Chapter id="colophon" number="3" title="Colophon" className="colophon">
          <div className="sheet colophon-body" data-reveal>
            <p className="colophon-ask">For work, questions or a hello:</p>
            <a className="email" href={`mailto:${person.email}`}>
              {person.email}
            </a>
            <ul className="link-list">
              {links.map((l) => (
                <li key={l.label}>
                  <Out href={l.href}>{l.label}</Out>
                </li>
              ))}
            </ul>
            <Card />
            <p className="colophon-note">
              Set in Host Grotesk. Two inks on white stock. Built with React and Vite.
            </p>
            <p className="colophon-note">{printing()}</p>
            <p className="colophon-note">© {new Date().getFullYear()} {person.name}</p>
          </div>
        </Chapter>
      </main>
    </>
  );
}
