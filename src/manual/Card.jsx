import { DownloadSimpleIcon } from '@phosphor-icons/react';
import { links, person, roleLine } from '../content';
import Logotype from './Logotype';

const onCard = ['GitHub', 'LinkedIn'];

// vCard text values escape backslashes, commas and semicolons.
const esc = (value) => value.replace(/([\\,;])/g, '\\$1');

function vcard() {
  const split = person.name.lastIndexOf(' ');
  const [given, family] = [person.name.slice(0, split), person.name.slice(split + 1)];
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${esc(family)};${esc(given)};;;`,
    `FN:${esc(person.name)}`,
    `TITLE:${esc(person.role)}`,
    person.company && `ORG:${esc(person.company)}`,
    `EMAIL;TYPE=INTERNET:${person.email}`,
    ...links.filter((l) => onCard.includes(l.label)).map((l) => `URL:${l.href}`),
    'END:VCARD',
  ]
    .filter(Boolean)
    .join('\r\n');
}

const bare = (href) => href.replace(/^https?:\/\/(www\.)?/, '');

// The manual's stationery: the mark applied to a card, front and back.
export default function Card() {
  return (
    <figure className="card-plate">
      <div className="cards">
        <div className="card card--front">
          <Logotype still title="astro, on the front of the card" />
        </div>
        <div className="card card--back">
          <p className="card-name">{person.name}</p>
          <p className="card-role">{roleLine}</p>
          <ul className="card-lines">
            <li>{person.email}</li>
            {links
              .filter((l) => onCard.includes(l.label))
              .map((l) => (
                <li key={l.label}>{bare(l.href)}</li>
              ))}
          </ul>
        </div>
      </div>
      <figcaption>
        <span>Business card, 85 × 55 mm. Front and back.</span>
        <a
          className="save"
          href={`data:text/vcard;charset=utf-8,${encodeURIComponent(vcard())}`}
          download={`${person.name.toLowerCase().replace(/\s+/g, '-')}.vcf`}
        >
          <DownloadSimpleIcon size="1em" weight="bold" aria-hidden="true" />
          Save contact
        </a>
      </figcaption>
    </figure>
  );
}
