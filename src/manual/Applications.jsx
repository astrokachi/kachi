import { useEffect, useRef, useState } from 'react';
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

function Actions({ project: p }) {
  return (
    <p className="actions">
      {p.live && <Out href={p.live}>Visit</Out>}
      {p.repo && <Out href={p.repo}>Source</Out>}
      {p.client && <Out href={p.client}>Client source</Out>}
    </p>
  );
}

// A screenshot, linked to the live project; work without one is set as a
// title card instead of an empty frame.
function Plate({ project: p, hidden }) {
  if (!p.image) {
    return (
      <div className="title-plate">
        <span className="title-plate-name">{p.name}</span>
        <span className="title-plate-note">In progress · {p.stack}</span>
      </div>
    );
  }
  const shot = p.video ? (
    <Recording src={p.video} poster={p.image} name={p.name} />
  ) : (
    <img className="shot" src={p.image} alt={`Screenshot of ${p.name}`} />
  );
  if (!p.live) return shot;
  return (
    <a
      className="plate-link"
      href={p.live}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${p.name}`}
      tabIndex={hidden ? -1 : undefined}
    >
      {shot}
    </a>
  );
}

function useWide() {
  const query = '(min-width: 761px)';
  const [wide, setWide] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const sync = () => setWide(media.matches);
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);
  return wide;
}

// The chapter is an index of plates with one plate mounted beside it. Choosing
// an entry opens it and brings its plate up; the choice lands on the press, not
// the release. At phone width every entry is open and carries its own plate.
export default function Applications() {
  const list = projects.map((p, i) => ({ ...p, id: `app-${i + 1}`, number: `2.${i + 1}` }));
  const [active, setActive] = useState(0);
  const wide = useWide();
  const current = list[active];

  return (
    <div className="works sheet" data-reveal>
      <ol className="works-index">
        {list.map((p, i) => {
          const open = !wide || i === active;
          const head = (
            <>
              <span className="work-number tabular">{p.number}</span>
              <span className="work-name">{p.name}</span>
              <span className="work-line">{p.image ? p.line : `${p.line}, in progress`}</span>
            </>
          );
          return (
            <li key={p.id} id={p.id} className="work" data-open={open || undefined}>
              <h3 className="work-title">
                {wide ? (
                  <button
                    type="button"
                    className="work-head"
                    aria-expanded={open}
                    aria-controls={`${p.id}-details`}
                    onPointerDown={(e) => {
                      if (e.pointerType === 'mouse' && e.button === 0) setActive(i);
                    }}
                    onClick={() => setActive(i)}
                  >
                    {head}
                  </button>
                ) : (
                  <span className="work-head">{head}</span>
                )}
              </h3>
              <div className="work-details" id={`${p.id}-details`} inert={open ? undefined : ''}>
                <div>
                  <p className="application-summary">{p.summary}</p>
                  <Spec
                    rows={[
                      ['Role', p.role],
                      ['Stack', p.stack],
                      ['Year', p.year],
                    ]}
                  />
                  <Actions project={p} />
                  {!wide && (
                    <div className="mount">
                      <Plate project={p} />
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {wide && (
        <figure className="viewer">
          <div className="mount">
            {list.map((p, i) => (
              <div key={p.id} className="viewer-plate" data-active={i === active || undefined} aria-hidden={i !== active}>
                <Plate project={p} hidden={i !== active} />
              </div>
            ))}
          </div>
          <figcaption>
            <span className="figure-number tabular">Fig. {current.number}</span>
            <span>
              {current.name}
              {current.caption ? `: ${current.caption}` : ', in progress.'}
            </span>
          </figcaption>
        </figure>
      )}
    </div>
  );
}

export { Out };
