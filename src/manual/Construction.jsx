import { useEffect, useRef, useState } from 'react';

// Every number in this chapter is read from the live page, not written down.

function token(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function luminance(hex) {
  const n = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(n.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function useViewportWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}

function GridPlate() {
  const ref = useRef(null);
  const width = useViewportWidth();
  const [reading, setReading] = useState(null);

  useEffect(() => {
    const sheet = ref.current;
    const first = sheet.firstElementChild;
    const s = getComputedStyle(sheet);
    const columns = s.gridTemplateColumns.split(' ').length;
    setReading({
      columns,
      column: first.getBoundingClientRect().width,
      gutter: parseFloat(s.columnGap),
      margin: parseFloat(getComputedStyle(document.querySelector('.sheet')).paddingLeft),
    });
  }, [width]);

  return (
    <figure className="plate plate--grid">
      <div className="grid-diagram" ref={ref}>
        {Array.from({ length: 12 }, (_, i) => (
          <span key={i}>
            <em>{i + 1}</em>
          </span>
        ))}
      </div>
      <figcaption>
        <span className="plate-number">2.1</span>
        <span>
          The grid.{' '}
          {reading &&
            `${reading.columns} columns of ${reading.column.toFixed(1)} px, ${reading.gutter} px gutters and ${reading.margin} px margins at your ${width} px window.`}
        </span>
      </figcaption>
    </figure>
  );
}

const inks = [
  { name: 'Stock', token: '--stock', use: 'The page' },
  { name: 'Ink', token: '--ink', use: 'Words and drawings' },
  { name: 'Construction', token: '--grey', use: 'Guides and rules' },
  { name: 'Program red', token: '--red', use: 'One thing per spread' },
];

function InkPlate() {
  const [values, setValues] = useState([]);
  useEffect(() => {
    const stock = token('--stock');
    setValues(
      inks.map((ink) => {
        const hex = token(ink.token);
        return { ...ink, hex, ratio: contrast(hex, stock) };
      }),
    );
  }, []);

  return (
    <figure className="plate plate--inks">
      <div className="inks" aria-hidden="true">
        {inks.map((ink) => (
          <span key={ink.token} className={`ink ink--${ink.token.slice(2)}`} />
        ))}
      </div>
      <div className="ink-labels">
        {values.map((ink) => (
          <p key={ink.token} className={`ink-label ink--${ink.token.slice(2)}`}>
            <strong>{ink.name}</strong>
            <span className="tabular">{ink.hex}</span>
            <span>{ink.use}</span>
            <span className="tabular">
              {ink.token === '--stock' ? 'The ground' : `${ink.ratio.toFixed(1)} : 1 on stock`}
            </span>
          </p>
        ))}
      </div>
      <figcaption>
        <span className="plate-number">2.2</span>
        <span>
          Two inks on stock, shown in the proportion they are used. Where red is printed over
          another ink, the two multiply, as they would on press.
        </span>
      </figcaption>
    </figure>
  );
}

const specimens = [
  { spec: 'Display', className: 'display', text: 'Standards' },
  { spec: 'Title', className: 'title', text: 'Applications' },
  { spec: 'Lead', className: 'lead', text: 'Interfaces, backends and the AI inside them.' },
  { spec: 'Body', className: 'body', text: 'Set flush left on the grid, with room around it.' },
  { spec: 'Note', className: 'note', text: 'Captions, labels and measurements.' },
];

function TypePlate() {
  const refs = useRef([]);
  const width = useViewportWidth();
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setReadings(
        refs.current.map((el) => {
          const s = getComputedStyle(el);
          return `${Math.round(parseFloat(s.fontSize))} / ${Math.round(parseFloat(s.lineHeight))}  ·  ${Math.round(parseFloat(s.fontWeight))}`;
        }),
      );
    });
  }, [width]);

  return (
    <figure className="plate plate--type">
      <ol className="specimens">
        {specimens.map((s, i) => (
          <li key={s.spec}>
            <span className="specimen-name">{s.spec}</span>
            <span className={`specimen ${s.className}`} ref={(el) => (refs.current[i] = el)}>
              {s.text}
            </span>
            <span className="specimen-reading tabular">{readings[i]}</span>
          </li>
        ))}
      </ol>
      <figcaption>
        <span className="plate-number">2.3</span>
        <span>One family, Host Grotesk, in five sizes. Figures are tabular wherever they line up.</span>
      </figcaption>
    </figure>
  );
}

function MotionPlate() {
  const [curve, setCurve] = useState(null);
  useEffect(() => {
    const match = token('--ease').match(/cubic-bezier\(([^)]+)\)/);
    if (match) setCurve(match[1].split(',').map(Number));
  }, []);
  const size = 200;
  const path =
    curve &&
    `M0 ${size} C${curve[0] * size} ${(1 - curve[1]) * size} ${curve[2] * size} ${(1 - curve[3]) * size} ${size} 0`;

  return (
    <figure className="plate plate--motion">
      <div className="ease">
        <svg viewBox={`-8 -8 ${size + 16} ${size + 16}`} aria-hidden="true">
          <path className="ease-frame" d={`M0 0 V${size} H${size}`} />
          {path && <path className="ease-curve" d={path} />}
        </svg>
        <span className="ease-dot-x" aria-hidden="true">
          <span className="ease-dot" />
        </span>
      </div>
      <figcaption>
        <span className="plate-number">2.4</span>
        <span>
          One curve for everything that moves: {curve ? `cubic-bezier(${curve.join(', ')})` : ''}.
          Things arrive fast and settle slowly.
        </span>
      </figcaption>
    </figure>
  );
}

export default function Construction() {
  return (
    <div className="construction">
      <GridPlate />
      <InkPlate />
      <TypePlate />
      <MotionPlate />
    </div>
  );
}
