// Everything the manual says lives here. Edit this file to update the site.

export const person = {
  name: 'Kachi Ozoemena',
  role: 'Software engineer',
  // TODO: add your company here when you want it shown.
  company: '',
  email: 'astrokachi@gmail.com',
  resume: 'https://docs.google.com/document/d/1e48YB3JS1GxijUMjzhKNCTPs9cFfMg-T7kVXwys7F6Y/edit?usp=sharing',
};

export const foreword = [
  "I'm Kachi Ozoemena, a software engineer. I like that the work is creative and technical at the same time, so I follow a product all the way from the screen to the server.",
  'I taught myself to code, which made me quick to pick up new tools and careful with the small details that make software easy to use.',
];

// Drawn from the public repositories at github.com/astrokachi.
export const materials = [
  ['Languages', 'TypeScript, JavaScript, Python, Java'],
  ['Backend', 'Node.js, Express, NestJS, Fastify, FastAPI, Socket.IO'],
  ['Data', 'PostgreSQL, Drizzle, Prisma, TypeORM, MongoDB, Redis, BullMQ, Supabase, Firebase'],
  ['Auth', 'OAuth 2.0, JWT, sessions, Passport'],
  ['AI', 'Vercel AI SDK, OpenAI API, WebLLM in the browser'],
  ['Frontend', 'React, Next.js, React Router, Tailwind CSS'],
  ['Shipping', 'Docker, AWS S3, Vercel, Vitest, Jest'],
];

// Selected work from github.com/astrokachi. `image` is a 16:10 screenshot in
// /public/plates; leave it out and the plate shows as pending. `video` is an
// optional screen recording (16:10 .mp4, a few seconds, no sound); it plays in
// the plate with `image` as its poster. `live`, `repo` and `client` are optional.
const plate = (name) => `${import.meta.env.BASE_URL}plates/${name}.webp`;

export const projects = [
  {
    name: 'Vox',
    summary:
      'An assistant for X. It drafts replies to posts in the tone you pick, schedules your own posts, and signs you in with your X account.',
    role: 'Full stack',
    stack: 'Express, PostgreSQL, BullMQ, Socket.IO, AI SDK, OAuth 2.0',
    year: '2025-2026',
    image: plate('vox'),
    live: 'https://voxbeta.vercel.app',
    repo: 'https://github.com/astrokachi/Vox',
    client: 'https://github.com/astrokachi/Vox-client',
  },
  {
    name: 'MonetAI',
    summary:
      'Upload a bank statement and get a structured read of your spending. The model can run in your browser, so the statement never leaves your device.',
    role: 'Full stack',
    stack: 'Next.js, WebLLM, AI SDK, pdf.js',
    year: '2026',
    image: plate('monetai'),
    live: 'https://monetai-qciu.onrender.com',
    repo: 'https://github.com/astrokachi/MonetAI',
  },
  {
    name: 'Model Chess Arena',
    summary:
      'AI models play chess against each other. A rules engine checks every move, and each model keeps a rating and a record across matches.',
    role: 'Full stack',
    stack: 'Next.js, Prisma, PostgreSQL, AI SDK',
    year: '2025',
    repo: 'https://github.com/astrokachi/Model-Chess-Arena',
  },
  {
    name: 'Resq',
    summary:
      "Lets trusted friends bill each other's cards in an emergency, with spending limits and approval rules. Payments run through Paystack.",
    role: 'Full stack',
    stack: 'NestJS on Fastify, PostgreSQL, TypeORM, Google OAuth 2.0, React',
    year: '2025',
    repo: 'https://github.com/astrokachi/paystack-biller',
  },
];

export const links = [
  { label: 'Resume', href: person.resume },
  { label: 'GitHub', href: 'https://github.com/astrokachi' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ozoemenaekachi' },
  { label: 'Twitter', href: 'https://twitter.com/kachi_oz' },
  { label: 'Instagram', href: 'https://instagram.com/kachi_oz_' },
];

// The manual's chapters, in order. The running head and the URL use these.
export const roleLine = [person.role, person.company].filter(Boolean).join(', ');

export const chapters = [
  { id: 'cover', number: '0', title: 'Cover' },
  { id: 'foreword', number: '1', title: 'Foreword' },
  { id: 'construction', number: '2', title: 'Construction' },
  { id: 'applications', number: '3', title: 'Applications' },
  { id: 'colophon', number: '4', title: 'Colophon' },
];
