---
name: astro
description: A one-person program's graphics standards manual. Two inks on white stock, one grid, one family, one curve.
colors:
  stock: "#f1efe9"
  ink: "#16171a"
  ink-2: "#55575d"
  grey: "#a8aab0"
  rule: "rgba(22, 23, 26, 0.16)"
  red: "#e8402a"
typography:
  display:
    fontFamily: "'Host Grotesk Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  title:
    fontFamily: "'Host Grotesk Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.375rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "'Host Grotesk Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.7vw, 1.625rem)"
    fontWeight: 450
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Host Grotesk Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  note:
    fontFamily: "'Host Grotesk Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  micro:
    fontFamily: "'Host Grotesk Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.02em"
    fontFeature: "'tnum'"
rounded:
  none: "0px"
  full: "50%"
spacing:
  margin: "clamp(16px, 4vw, 56px)"
  gutter: "clamp(12px, 1.7vw, 24px)"
  head: "52px"
  caption: "16px"
  block: "24px"
  application: "clamp(48px, 7vh, 80px)"
  chapter-head: "clamp(48px, 7vh, 88px)"
  chapter: "clamp(96px, 14vh, 168px)"
components:
  running-head:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    typography: "{typography.note}"
    height: "{spacing.head}"
    padding: "0 clamp(16px, 4vw, 56px)"
  chapter-head:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  spec-term:
    textColor: "{colors.ink-2}"
    typography: "{typography.note}"
  spec-value:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  application-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
---

# Design System: astro

## Overview

**Creative North Star: "The Standards Manual"**

The site is the graphics standards manual of a one-person program called astro. Every screen is a spread of that manual: printed on coated white stock in black ink, set flush left in a single neo-grotesk on one strict column grid, with hairline construction drawings and real screenshots mounted as plates.

Density is low and deliberate, like a manual page: large display chapter titles, generous chapter spacing, small notes and captions that carry measurements. Depth comes from print, not from screens. There are no shadows, cards or glows. Two inks overprint with multiply, the way they would on press. One program red is spent sparingly, so that each spread has a single point the eye lands on. There are no dark surfaces.

The world refuses the dark starfield portfolio with project cards and the rocket flythrough. Space is present through the logotype's orbit and satellite, never through rockets, astronauts, neon glow or agency insignia.

**Key Characteristics:**
- Warm white stock, near-black ink, a cool construction grey, and one program red.
- One family (Host Grotesk Variable) in six sizes; tabular figures wherever numbers line up.
- A 12-column sheet (4 columns at phone width) that every spread and the running head share.
- Square corners everywhere; circles only where the thing is a circle.
- Hairline rules, crop marks, dashed construction lines and numbered captions do the structural work.
- One easing curve for everything that moves; all motion stops under reduced motion.
- Every chapter and plate is numbered (0.0 to 3.0, 2.1) and addressable from the running head.

## Colors

A two-ink print palette: warm uncoated-looking stock, a slightly cool black ink, a construction grey for drawings, and one saturated program red held in reserve.

### Primary
- **Program Red** (red): the single accent. On each spread it marks one thing: the satellite on the cover logotype, the underline under the colophon email. It is also the focus ring colour. It overprints with `mix-blend-mode: multiply` wherever it crosses another ink. It measures 3.5:1 on stock, so it never sets running text.

### Neutral
- **Coated Stock** (stock): the page, the running head background, the knockout behind the orbit's front arc, and text on ink or red fills. Also the browser `theme-color` and manifest background.
- **Program Ink** (ink): all headings, body text, the logotype strokes, plate borders, the 2px rule over each chapter head and text selection. 15.6:1 on stock.
- **Second Ink** (ink-2): quieter text: the running head title, unvisited index entries, spec terms, captions, notes, construction labels and readings. 6.3:1 on stock, so it can carry small text.
- **Construction Grey** (grey): drawing only: construction circles and guides in the logotype, crop marks. 2.0:1 on stock; never used for text.
- **Hairline** (rule): 1px dividers between rows, the running head's bottom edge, the resting colour of link underlines, the inset edge on stock swatches.

### Named Rules
**The One Red Rule.** Each spread spends red on at most one element. The cover spends it on the satellite, Colophon on the email underline; the Foreword and Projects spend none. Two exceptions are part of the system: the satellite inside the small running-head mark (it belongs to the logotype at every size, as on the favicon), and the focus ring, which appears only when the visitor asks for it.

**The Overprint Rule.** Red is printed, not painted on top. Where it crosses ink or grey it uses `mix-blend-mode: multiply`, so the overlap darkens the way two press inks would.

**The Grey Draws Rule.** Construction grey is for lines, guides and marks. Any text that needs to recede uses ink-2.

## Typography

**Display Font:** Host Grotesk Variable (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Host Grotesk Variable (same family)

**Character:** A single contemporary neo-grotesk does every job, from 96px chapter titles to 11px spec labels. Hierarchy comes from size, weight (400, 450, 500, 600 on the variable axis) and tight negative tracking at display sizes, never from a second family.

### Hierarchy
- **Display** (600, clamp 2.75rem to 6rem, line-height 0.92, -0.035em): chapter titles (Foreword, Projects, Colophon) in columns 3 to 12. At phone width it caps at clamp(2.25rem, 10.5vw, 2.75rem).
- **Title** (600, clamp 1.75rem to 2.375rem, 1.05, -0.02em): application names (with their 3.x number in ink-2) and the chapter numbers beside each Display title (line-height 1).
- **Lead** (450, clamp 1.25rem to 1.625rem, 1.3, -0.01em): the Foreword's opening paragraph, chapter introductions, the colophon prompt, and the name in the cover's colophon block (at 600).
- **Body** (400, 1.0625rem, 1.55): running text, spec values, summaries. Measure held to about 60ch.
- **Note** (450 to 500, 0.8125rem, 1.4 to 1.5): the running head, captions, spec terms, plate numbers (600, ink) and hints.

One signature size sits outside the ramp: the colophon email is set at clamp(2rem, 6.2vw, 5.75rem), 600, line-height 1, -0.035em, so the address reads as the last display line of the manual.

### Named Rules
**The One Family Rule.** Host Grotesk sets everything, including the construction labels drawn inside the logotype SVG. Don't introduce a second face for code, numbers or emphasis.

**The Tabular Figures Rule.** Chapter numbers, plate numbers and readings use `font-variant-numeric: tabular-nums` so numbers line up like a manual's tables.

## Layout

**The sheet.** Every spread is a CSS grid of `--columns` equal columns (12 by default, 4 at 760px and below) with `--gutter` between them and `--margin` on both sides. The running head, every chapter use this same sheet, so the columns line up through the whole page.

**Standard positions.** Chapter numbers sit in columns 1 to 2; chapter titles start at column 3. Text blocks (Foreword lead, the spec list) occupy columns 3 to 9; body copy narrows to columns 3 to 7. The Projects chapter is an index of plates in columns 1 to 4 (1 to 5 below 1100px) with one mounted plate in 7 to 12; at phone width the index runs full width and each entry carries its own plate. The cover runs the logotype across all columns, the colophon block in columns 1 to 4 and the cover note in 9 to 12.

**Rhythm.** Chapters open with `chapter` space above them, a 2px ink rule across the margins, then `chapter-head` space before content. Application spreads by `application` padding and a hairline. Inside blocks, spacing steps are small and literal: 4, 8, 12, 14, 16 (captions), 20 and 24px (`block`).

**Running head.** Sticky, `head` tall (48px at phone width), on the same 12 columns: mark (cols 1 to 2), the current chapter stamp (3 to 5), the chapter index (7 to 10, hidden below 1100px). At phone width the stamp runs from column 2. The URL hash follows the chapter that crosses the middle of the viewport, so every spread is addressable.

**Breakpoints.** 1100px: the head index hides, project spreads shift to 7/5, the business card plate widens to columns 3 to 12, construction labels grow. 760px: 4 columns, everything stacks to full width, the cover gains a ruled contents list. 600px: logotype construction labels scale up and the crowded ones hide.

### Named Rules
**The One Sheet Rule.** Nothing is laid out outside the sheet. New sections either are a `.sheet` or sit inside one and take whole column spans.

**The Flush Left Rule.** Text is set flush left, ragged right, with `text-wrap: pretty` on paragraphs and `balance` on titles. Nothing is centred except content inside a plate placeholder.

## Elevation & Depth

The system is flat. There are no drop shadows, no layered surfaces and no blur. Separation comes from print devices: 1px hairlines, a 2px ink rule over each chapter, 1px ink borders around screenshots and contact frames, crop marks just outside application plates, and dashed grey borders on plates still to come. The only `box-shadow` in use is a 1px inset hairline that gives stock-coloured swatches an edge. The sticky running head sits on stock with a hairline under it rather than floating. Depth, where it appears, is ink overprint (multiply).

### Named Rules
**The Printed Page Rule.** If an element needs to stand apart, give it a rule, a border or a crop mark, never a shadow or a tinted card.

## Shapes

Corners are square throughout (0px). Circles appear only where the thing really is a circle: the satellite. The logotype is the one place curves lead: a monoline lowercase built from circles and straight strokes on a 100-unit x-height, stroke 18 with round caps and joins, its o ringed by a tilted elliptical orbit whose front arc is knocked out of the letter in stock. Construction drawings use 0.6-unit grey lines, 3/4 dashes for construction circles, small cross marks at centres, and dimension callouts. Plates are 16:10.

## Components

### Running Head
Quiet, always present, and doubles as the manual's index.
- **Style:** the same stock thinned to 82% with a 14px backdrop blur, so the page shows through as it passes beneath; Note type at weight 450, line-height 1. Its hairline bottom rule appears only once the page has scrolled. Under `prefers-reduced-transparency` it is solid stock.
- **Mark:** the astro logotype at 64px wide (54px on phones), linking back to the cover; the orbit strokes are thickened so it holds at that size.
- **Stamp:** the current chapter as "2.0 Projects" in 600. When it changes, it re-stamps: 420ms on the system curve, from 6px low and 106% scale to rest.
- **Index:** chapters 1 to 3 with tabular numbers, in ink-2; the current one turns ink at 600 (`aria-current`). Hidden below 1100px.

### Links
- **Default:** inherit colour, 1px underline in the hairline colour, offset 0.22em.
- **Hover (fine pointers only):** the underline darkens to the text colour over 160ms.
- **Press:** every link drops to 55% opacity the instant it is pressed and eases back over 160ms on release; the browser's tap flash is turned off so this is the only feedback.
- **Write to me:** the primary contact action, 600 weight with a 2px ink underline.
- **Outbound:** an arrow-up-right SVG icon at 0.9em, bold, after the label (Resume, Visit, Source, social links). All open in a new tab.
- **Colophon email:** the signature link, at its own display size with a 3px red underline offset 0.12em. On the Colophon spread this is the red element.
- **Business card:** the Colophon's stationery application. Front and back at 85:55, each on stock with a 1px rule edge and grey crop marks outside the trim, in columns 3 to 10 (stacked and capped at 340px at phone width). The front centres the still logotype at 62% width; the back sets the name (600), role (ink-2) and, at the foot, email, GitHub and LinkedIn, all sized in container units so the card scales like print. The caption gives the trim size, with a Save contact link that downloads a vCard built from `content.js`. The colophon notes end with the printing line: today's date and the moon it was printed under, worked out from the date with no network.
- **Focus:** a 2px red outline offset 3px on every focusable element.

### Spec List
A two-column definition list, the manual's table. Terms are Note size in ink-2 at 500 with a 1.9 line-height so they sit on the value's baseline; values are Body in ink. Term column is 7.5rem (6rem on phones; 4.5rem inside application spreads), separated by the gutter, rows 10px apart, with a hairline above the list.

### Chapter Head
A 2px ink rule across the margins, then the chapter number (Title size, 600, "2.0") in columns 1 to 2 and the Display title from column 3, baseline-aligned. On phones the number and title sit side by side in a flex row.

### Plates and Captions
Every figure is a numbered plate. Captions are Note size in ink-2, max 72ch, led by the plate number (600, ink, tabular) with a 16px gap.

### Projects Index (signature)
After Deji Ajetomobi's engineering index and Majd's matted plates: the chapter is one index and one plate, not a spread per project.
- **Index:** a ruled list. Each entry is a button: the number (Note, 600) in a 2.75rem column, the name (600, clamp 1.25rem to 1.5rem, -0.015em) and a one-line note in Note size. Closed entries sit in ink-2 and darken on hover; the open one is ink. Choosing lands on pointer-down, not release, and the entry dims to 60% on press.
- **Open entry:** expands to its content's height over 520ms on the system curve (grid rows 0fr to 1fr), showing the summary in place of the one-line note, a spec list (Role, Stack, Year) and the outbound actions. Closed entries are inert, so their links stay out of the tab order.
- **Mount:** the plate sits on a board one shade down from the stock (ink at 3.5%), padded 4.5%, with grey crop marks outside its corners that close in to 9px when the screenshot is hovered. Every plate shares one cell, so switching never moves the page: the chosen plate crossfades up (opacity 360ms) as it settles from 98.5% scale (620ms). It stays in view while the index is read (sticky under the head). A caption follows: "Fig. 2.n", the name and what the screenshot shows.
- **Plates:** a screenshot (16:10, 1px ink border) linked to the live project, or, for work without one yet, a title card: the name at near-display size and "In progress" with the stack, on stock in the same 1px ink frame.
- **Phone:** every entry is open and carries its own mounted plate below its links; there is nothing to choose.

### Logotype (signature)
The astro mark as an SVG, used on the cover across all 12 columns with its construction (guides labelled ascender, x-height, centre, baseline; dashed construction circles; callouts for r 41, the 100 x-height and the 18 stroke), and without construction in the running head and favicon. On load the cover drawing builds itself: guides draw in (900ms, 70ms stagger), labels and dashed circles fade in, letters draw stroke by stroke (1200ms, 140ms stagger from 800ms), then the orbit (1000ms at 1.5s) and the knockout and satellite appear. The satellite travels the orbit every 18s; under reduced motion it rests at a fixed point and nothing draws.

### Motion
One curve, `cubic-bezier(0.16, 1, 0.3, 1)`: things arrive fast and settle slowly. State changes run at 160ms; drawing runs 600 to 1200ms with short staggers. Each chapter head, spread and block rises 18px into place once as it reaches the reader (opacity 700ms, transform 900ms), and each screenshot is uncovered top to bottom (clip 1100ms, 140ms after its spread), like a plate pulled from the press. Wheel scrolling glides: each move eases out over 1.6s on an exponential curve (Lenis, duration mode), so the page goes most of the way at once and settles quietly, at the same pace at any refresh rate; touch scrolls natively. Smooth scroll, the stamp, the logotype drawing, the satellite and the reveals all run only under `prefers-reduced-motion: no-preference`; without it everything is simply there.

## Do's and Don'ts

### Do:
- **Do** put every new section on the sheet (`--columns`, `--gutter`, `--margin`) and start text at column 3 the way chapters do.
- **Do** number new chapters, plates and projects in the manual's scheme (n.0, n.1) and give them an id the running head can address.
- **Do** spend red on one element per spread and let it overprint with multiply where it crosses another ink.
- **Do** use ink-2 for quiet text and grey only for lines, guides, crop marks and dashed placeholders.
- **Do** use the system curve `cubic-bezier(0.16, 1, 0.3, 1)` and the 160ms step for state changes, and gate all motion behind `prefers-reduced-motion: no-preference`.
- **Do** mount imagery as plates: 16:10, a 1px ink border or crop marks, a numbered Note caption, and a provenance record for every shipped raster.
- **Do** use tabular figures for anything numeric that lines up.

### Don't:
- **Don't** add drop shadows, glows, blur, rounded cards or tinted panels; separate with rules, borders and crop marks.
- **Don't** round corners. Only true circles (the satellite) are round.
- **Don't** add a second typeface or set text in construction grey.
- **Don't** put red on more than one element in a spread, or use it for running text.
- **Don't** introduce dark sections; the page is printed on white stock throughout.
- **Don't** use rockets, astronauts, launch language, neon glow or any space agency's marks, names or logos; the space reference lives in the orbit and the satellite.
- **Don't** hard-code measurements on the page that the browser can report; the manual shows what it computes.
