// The astro logotype: a monoline lowercase built from circles and straight
// strokes on a 100-unit x-height, stroke 18. The o carries an orbit and a
// red satellite. With `construction`, the drawing shows how it is built.

const letters = [
  {
    key: 'a',
    x: 0,
    paths: ['M91 9 V91'],
    circles: [[50, 50, 41]],
  },
  {
    key: 's',
    x: 117.5,
    paths: ['M55.75 19.25 A20.5 20.5 0 1 0 38 50 A20.5 20.5 0 1 1 20.25 80.75'],
  },
  {
    key: 't',
    x: 211,
    paths: ['M9 9 H55', 'M21 -32 V62 A30 30 0 0 0 51 92'],
  },
  {
    key: 'r',
    x: 301,
    paths: ['M9 9 V91', 'M9 50 A40 40 0 0 1 62.68 12.41'],
  },
  {
    key: 'o',
    x: 399,
    circles: [[50, 50, 41]],
  },
];

// Guides and construction circles, in logotype units.
const guides = [
  { y: -41, label: 'ascender' },
  { y: 0, label: 'x-height' },
  { y: 50, label: 'centre' },
  { y: 100, label: 'baseline' },
];
const constructionCircles = [
  [50, 50, 41],
  [155.5, 29.5, 20.5],
  [155.5, 70.5, 20.5],
  [262, 62, 30],
  [350, 50, 40],
  [449, 50, 41],
];

const ORBIT = { cx: 449, cy: 50, rx: 84, ry: 24, tilt: -16 };
const orbitBack = `M${ORBIT.cx - ORBIT.rx} ${ORBIT.cy} A${ORBIT.rx} ${ORBIT.ry} 0 0 1 ${ORBIT.cx + ORBIT.rx} ${ORBIT.cy}`;
const orbitFront = `M${ORBIT.cx + ORBIT.rx} ${ORBIT.cy} A${ORBIT.rx} ${ORBIT.ry} 0 0 1 ${ORBIT.cx - ORBIT.rx} ${ORBIT.cy}`;
const orbitPath = `${orbitBack} A${ORBIT.rx} ${ORBIT.ry} 0 0 1 ${ORBIT.cx - ORBIT.rx} ${ORBIT.cy}`;
const tilt = `rotate(${ORBIT.tilt} ${ORBIT.cx} ${ORBIT.cy})`;

function Letter({ letter, index }) {
  return (
    <g transform={`translate(${letter.x} 0)`} style={{ '--i': index }}>
      {letter.circles?.map(([cx, cy, r]) => (
        <circle key={`${cx}-${r}`} cx={cx} cy={cy} r={r} pathLength="1" />
      ))}
      {letter.paths?.map((d) => (
        <path key={d} d={d} pathLength="1" />
      ))}
    </g>
  );
}

export default function Logotype({ construction = false, still = false, title = 'astro' }) {
  const before = letters.filter((l) => l.key !== 'o');
  const o = letters.find((l) => l.key === 'o');

  return (
    <svg
      className={`logotype${construction ? ' logotype--construction' : ''}`}
      viewBox={construction ? '-36 -76 600 236' : '-10 -42 548 152'}
      role="img"
      aria-label={title}
    >
      {construction && (
        <g className="construct" aria-hidden="true">
          {guides.map((g, i) => (
            <g key={g.y} className={`guide guide--${g.label}`} style={{ '--i': i }}>
              <line x1="-36" x2="564" y1={g.y} y2={g.y} pathLength="1" />
              <text x="560" y={g.y - 5} textAnchor="end">
                {g.label}
              </text>
            </g>
          ))}
          {constructionCircles.map(([cx, cy, r], i) => (
            <g key={`${cx}-${cy}`} style={{ '--i': i + 4 }}>
              <circle className="dashed" cx={cx} cy={cy} r={r} pathLength="1" />
              <path d={`M${cx - 3} ${cy} H${cx + 3} M${cx} ${cy - 3} V${cy + 3}`} />
            </g>
          ))}
          <g className="callout" style={{ '--i': 10 }}>
            <path d="M449 50 L420 -10 H404" pathLength="1" />
            <text x="400" y="-7" textAnchor="end">
              r 41
            </text>
          </g>
          <g className="callout callout--height" style={{ '--i': 11 }}>
            <path d="M-22 0 V100 M-26 0 H-18 M-26 100 H-18" pathLength="1" />
            <text x="-28" y="54" textAnchor="end">
              100
            </text>
          </g>
          <g className="callout" style={{ '--i': 12 }}>
            <path d="M82 120 H100 M82 116 V124 M100 116 V124" pathLength="1" />
            <text x="91" y="140" textAnchor="middle">
              18
            </text>
          </g>
        </g>
      )}

      <g className="orbit">
        <path d={orbitBack} transform={tilt} pathLength="1" />
      </g>
      <g className="letters">
        {before.map((l, i) => (
          <Letter key={l.key} letter={l} index={i} />
        ))}
        <Letter letter={o} index={4} />
      </g>
      <g className="orbit orbit--front">
        <path className="knockout" d={orbitFront} transform={tilt} />
        <path d={orbitFront} transform={tilt} pathLength="1" />
      </g>
      <g transform={tilt}>
        {still ? (
          <circle className="satellite" cx={ORBIT.cx + ORBIT.rx * Math.cos(2.2)} cy={ORBIT.cy + ORBIT.ry * Math.sin(2.2)} r="7.5" />
        ) : (
          <circle className="satellite satellite--moving" r="7.5">
            <animateMotion dur="18s" repeatCount="indefinite" path={orbitPath} begin="0s" />
          </circle>
        )}
      </g>
    </svg>
  );
}
