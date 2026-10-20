# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Inferred, not confirmed in an interview. The user asked for a complete overhaul and declined hard guardrails, so this record treats the existing site as the source of product facts and marks anything beyond it.

Primary visitor: someone deciding whether to look at Kachi Ozoemena's work and write to him. Typically a hiring manager, a collaborator, or another engineer, on a laptop, scanning quickly and then opening one build.

The previous site asked for internships and entry-level roles. That ask is stale relative to this overhaul and is not restated as current intent. Current employment and job search status are undecided.

## Product Purpose

A single-page personal portfolio for Kachi Ozoemena. It says who he is, shows three real web builds, and gives a direct way to reach him. Success is a visitor who understands the work and can email, open the resume, or follow a social link without hunting.

## Positioning

The portfolio is the current piece of interface craft. The three builds are studies Kachi shipped and linked, not client engagements. A template could not truthfully claim these live URLs and repositories.

## Operating Context

One scrolling page. Visitors jump between introduction, the builds, and contact. They leave the site to open a live build, a GitHub repo, a resume PDF, or an email draft.

## Capabilities and Constraints

Confirmed from the existing site:

- Name: Kachi Ozoemena. Handle used on the old mark: astro.
- Email: astrokachi@gmail.com
- Resume: https://docs.google.com/document/d/1e48YB3JS1GxijUMjzhKNCTPs9cFfMg-T7kVXwys7F6Y/edit?usp=sharing
- GitHub: https://github.com/astrokachi
- Twitter: https://twitter.com/kachi_oz
- Instagram: https://instagram.com/kachi_oz_
- LinkedIn: https://www.linkedin.com/in/ozoemenaekachi
- Stated practice (updated by the user, 2026-10-20): software engineer across the stack: frontend, backend, and AI integration; self-taught. Technologies named on the old site: JavaScript (ES6), React, Next.js, Firebase, Tailwind CSS, Node.js. Individual builds also name Redux.
- Three builds, kept:
  - The Netflix build. Live: https://kachis-movie-app.netlify.app/ Repo: https://github.com/astrokachi/netflix-clone. React, Firebase, Redux. A movie app: sign in, browse categories, choose a plan.
  - The Airbnb build. Live: https://airbnb-clone-silk-one.vercel.app/ Repo: https://github.com/astrokachi/airbnb-clone. Next.js, Tailwind CSS. Search a destination and filter suggestions.
  - The furniture store. Live: https://kachis-ecommerce-app.netlify.app/ Repo: https://github.com/astrokachi/clothing-store. React, Firebase, Redux. Sign in, add furniture to a cart, edit the cart.
- Stack in this repo: Create React App, React 17. Stay in this app unless a later change is required to ship the page.
- Do not invent clients, employers, metrics, testimonials, or a current job title.
- The old visual system (Brittany Chiang theme: navy, mint, numbered sections, side email and social rails) is discarded. The user asked for a full overhaul.

Undecided: whether he is currently seeking work, and whether newer projects should replace these three. This version shows the three that exist.

## Brand Commitments

The name is Kachi Ozoemena. The alias is astro, from the old mark and confirmed by the user. The portfolio should relate to space and spacecraft, and that vibe should fit the alias. No palette or typeface was named. Voice on the old site was plain and first person. Keep that, and fix grammar. Do not add a crafted-persona voice.

## Evidence on Hand

Copy and links live in `src/components/`. Screenshot filenames referenced by the old CSS: `public/netflix (2).PNG`, `public/ecom.PNG`, `public/vv.PNG`. No case-study writeups, no portrait, no testimonials. Do not fabricate any of those.

## Product Principles

- Show the three builds as builds, with their real links.
- The page's interaction is the proof of current craft.
- One way to write him, easy to find.
- Say only what the old site actually said, in cleaner sentences.
- Keyboard, contrast, and reduced motion are part of the page, not a later pass.
