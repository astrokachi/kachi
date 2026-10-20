# astro

The portfolio of Kachi Ozoemena, a software engineer who builds web products end to end: interfaces, the backends behind them, and the AI features inside both.

The site is laid out like a graphics standards manual. A constructed logotype opens it, and four chapters follow:

- **Foreword:** who I am and what I work with.
- **Construction:** the site documents its own grid, inks, type and motion, measured from the live page.
- **Applications:** selected projects, including Vox, MonetAI, Model Chess Arena and Resq.
- **Colophon:** how to reach me.

Press **G** anywhere on the site to overlay the grid and see each element's computed type values.

## Stack

React 18 and Vite, plain CSS with custom properties, Host Grotesk (self-hosted), Lenis for smooth scrolling, Phosphor icons. Deployed on Vercel.

## Run it locally

Requires Node 18 or newer.

```bash
npm install
npm run dev       # development server
npm run build     # production build into build/
npm run preview   # serve the production build
```

## Where things live

| Path | What it holds |
|---|---|
| `src/content.js` | All copy, links, materials and projects. Most edits happen here. |
| `src/App.jsx` | The page: cover and chapters. |
| `src/manual/` | Logotype, running head, Construction plates, Applications, grid mode, smooth scroll. |
| `src/index.css` | Design tokens (`:root`) and every style. |
| `public/plates/` | Project screenshots and recordings. |
| `DESIGN.md` | The design system: tokens, type, grid, components and rules. |

## Adding a project

Add an entry to `projects` in `src/content.js`:

```js
{
  name: 'Project name',
  summary: 'One or two sentences on what it does.',
  role: 'Full stack',
  stack: 'Next.js, PostgreSQL',
  year: '2026',
  image: plate('project-name'),                              // 16:10 screenshot in public/plates/
  video: `${import.meta.env.BASE_URL}plates/project-name.mp4`, // optional screen recording
  live: 'https://example.com',                               // optional
  repo: 'https://github.com/astrokachi/project-name',         // optional
}
```

Without an `image`, the plate shows as pending. A `video` plays muted and looping while it is on screen, with the image as its poster, and stays paused for visitors who prefer reduced motion.

## Accessibility

Keyboard navigation and visible focus throughout, a skip link, and contrast checked against the stock colour. With reduced motion turned on, the logotype drawing, smooth scrolling and video autoplay are all switched off.

## Contact

[astrokachi@gmail.com](mailto:astrokachi@gmail.com) · [GitHub](https://github.com/astrokachi) · [LinkedIn](https://www.linkedin.com/in/ozoemenaekachi)
