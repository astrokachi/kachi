// Tonight's moon, worked out from the date. No network, no API.

const SYNODIC = 29.530588853;
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14);

const phases = [
  [0.0339, 'New moon'],
  [0.2161, 'Waxing crescent'],
  [0.2839, 'First quarter'],
  [0.4661, 'Waxing gibbous'],
  [0.5339, 'Full moon'],
  [0.7161, 'Waning gibbous'],
  [0.7839, 'Last quarter'],
  [0.9661, 'Waning crescent'],
  [1, 'New moon'],
];

export function moonTonight(date = new Date()) {
  const days = (date.getTime() - KNOWN_NEW_MOON) / 86400000;
  const phase = (((days / SYNODIC) % 1) + 1) % 1;
  return {
    phase,
    name: phases.find(([end]) => phase < end)[1],
    lit: Math.round(((1 - Math.cos(2 * Math.PI * phase)) / 2) * 100),
  };
}
