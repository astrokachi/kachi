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

// Selected work from github.com/astrokachi. `line` is the one line shown in
// the index. `image` is a 16:10 screenshot in /public/plates, with `caption`
// under it; without one the plate is set as a title card. `video` is an
// optional screen recording (16:10 .mp4, a few seconds, no sound); it plays in
// the plate with `image` as its poster. `live`, `repo` and `client` are optional.
const plate = (name) => `${import.meta.env.BASE_URL}plates/${name}.webp`;

export const projects = [
  {
    name: 'Vox',
    line: 'An assistant for posting on X',
    caption: 'Signing in with X.',
    summary:
      'An assistant for X. Tell it what you want to say and it drafts posts and replies in the background, remembers earlier conversations, schedules posts, and signs you in with your X account.',
    role: 'Full stack',
    stack: 'Express, PostgreSQL, pgvector, BullMQ, Socket.IO, AI SDK, OAuth 2.0',
    year: '2025-2026',
    image: plate('vox'),
    live: 'https://voxbeta.vercel.app',
    repo: 'https://github.com/astrokachi/Vox',
    client: 'https://github.com/astrokachi/Vox-client',
  },
  {
    name: 'MonetAI',
    line: 'Bank statements, read by AI',
    caption: 'Choosing where the model runs.',
    summary:
      'Upload a bank statement and get a plain read of where the money went. The analysis can run on a model inside your browser, or on a hosted one.',
    role: 'Full stack',
    stack: 'Next.js, WebLLM, WebGPU, AI SDK, LiteParse',
    year: '2026',
    image: plate('monetai'),
    live: 'https://monetai-qciu.onrender.com',
    repo: 'https://github.com/astrokachi/MonetAI',
  },
  {
    name: 'Model Chess Arena',
    line: 'AI models playing chess',
    summary:
      'A place for AI models to play chess against each other. Built so far: a chess rules engine written from scratch, a board to play on, and the schema for matches, moves and ratings.',
    role: 'Full stack',
    stack: 'Next.js, TypeScript, Prisma, PostgreSQL',
    year: '2025',
    status: 'In progress',
    repo: 'https://github.com/astrokachi/Model-Chess-Arena',
  },
  {
    name: 'Resq',
    line: 'Emergency payments between friends',
    summary:
      'Lets trusted friends cover each other in an emergency, with limits on what each can spend. Built so far: Google sign-in, the trust model and Paystack checkout.',
    role: 'Full stack',
    stack: 'NestJS on Fastify, PostgreSQL, TypeORM, Google OAuth 2.0, Paystack',
    year: '2025',
    status: 'In progress',
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
  { id: 'projects', number: '2', title: 'Projects' },
  { id: 'colophon', number: '3', title: 'Colophon' },
];
