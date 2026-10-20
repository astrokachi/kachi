import { useEffect, useRef } from 'react';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { projects } from '../content';
import { useReducedMotion } from './hooks';

function Out({ href, children }) {
  return (
    <a className="out" href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRightIcon size="0.9em" weight="bold" aria-hidden="true" />
    </a>
  );
}

function Spec({ rows }) {
  return (
    <dl className="spec">
      {rows
        .filter(([, value]) => value)
        .map(([term, value]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{value}</dd>
          </div>
        ))}
    </dl>
  );
}

function Application({ id, number, name, summary, rows, plate, actions }) {
  return (
    <article className="application sheet" id={id} aria-labelledby={`${id}-name`}>
      <div className="application-plate">{plate}</div>
      <div className="application-text">
        <h3 id={`${id}-name`} data-spec="Title">
          <span className="heading-number tabular">{number}</span> {name}
        </h3>
        <p className="application-summary">{summary}</p>
        <Spec rows={rows} />
        {actions}
      </div>
    </article>
  );
}

// A screen recording plays only while its plate is on screen, muted and
// looping like a moving screenshot. Under reduced motion it stays paused on
// its first frame, with controls to play it on purpose.
function Recording({ src, poster, name }) {
  const ref = useRef(null);
  const still = useReducedMotion();
  useEffect(() => {
    const video = ref.current;
    if (!video || still) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [still]);
  return (
    <video
      ref={ref}
      className="shot"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      controls={still}
      aria-label={`Screen recording of ${name}`}
    />
  );
}

function PendingPlate({ name }) {
  return (
    <div className="pending" role="img" aria-label={`Screenshot of ${name} to come`}>
      <span>Plate to come</span>
      <span className="tabular">16 : 10</span>
    </div>
  );
}

export const applicationIndex = [
  ...projects.map((p, i) => ({ id: `app-${i + 1}`, number: `3.${i + 1}`, name: p.name, image: p.image })),
];

export default function Applications() {
  return (
    <>
      <nav className="contact-strip sheet" aria-label="Applications">
        {applicationIndex.map((a) => (
          <a key={a.id} href={`#${a.id}`} className="frame">
            <span className={`frame-plate${a.image ? '' : ' frame-plate--pending'}`}>
              {a.image ? <img src={a.image} alt="" /> : <span>To come</span>}
            </span>
            <span className="frame-caption">
              <span className="tabular">{a.number}</span> {a.name}
            </span>
          </a>
        ))}
      </nav>

      {projects.map((p, i) => (
        <Application
          key={p.name}
          id={`app-${i + 1}`}
          number={`3.${i + 1}`}
          name={p.name}
          summary={p.summary}
          rows={[
            ['Role', p.role],
            ['Stack', p.stack],
            ['Year', p.year],
          ]}
          plate={
            p.video ? (
              <Recording src={p.video} poster={p.image} name={p.name} />
            ) : p.image ? (
              <img className="shot" src={p.image} alt={`Screenshot of ${p.name}`} loading="lazy" />
            ) : (
              <PendingPlate name={p.name} />
            )
          }
          actions={
            p.live || p.repo ? (
              <p className="actions">
                {p.live && <Out href={p.live}>Visit</Out>}
                {p.repo && <Out href={p.repo}>Source</Out>}
                {p.client && <Out href={p.client}>Client source</Out>}
              </p>
            ) : (
              <p className="application-hint">Links to come.</p>
            )
          }
        />
      ))}
    </>
  );
}

export { Out };
