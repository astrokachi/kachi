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
  plate: "clamp(64px, 9vh, 112px)"
  chapter: "clamp(96px, 14vh, 168px)"
components:
  running-head:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    typography: "{typography.note}"
    height: "{spacing.head}"
    padding: "0 clamp(16px, 4vw, 56px)"
  grid-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.note}"
    rounded: "{rounded.none}"
    height: "30px"
    padding: "0 6px 0 10px"
  grid-toggle-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.stock}"
  chapter-head:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  spec-term:
    textColor: "{colors.ink-2}"
    typography: "{typography.note}"
  spec-value:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  contact-frame:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    typography: "{typography.note}"
    rounded: "{rounded.none}"
  plate-pending:
    textColor: "{colors.ink-2}"
    typography: "{typography.note}"
    rounded: "{rounded.none}"
  application-title:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
  grid-spec-label:
    backgroundColor: "{colors.red}"
    textColor: "{colors.stock}"
    typography: "{typography.micro}"
    padding: "3px 5px"
---

# Design System: astro

## Overview

**Creative North Star: "The Standards Manual"**

The site is the graphics standards manual of a one-person program called astro. Every screen is a spread of that manual: printed on coated white stock in black ink, set flush left in a single neo-grotesk on one strict column grid, with hairline construction drawings and real screenshots mounted as plates. The manual documents its own system as it goes. The Construction chapter reads its tokens, grid measurements, type sizes and easing curve from the live page rather than from written values, and one switch (G, or the Grid button) lays the columns and computed type specs over every spread.

Density is low and deliberate, like a manual page: large display chapter titles, generous chapter spacing, small notes and captions that carry measurements. Depth comes from print, not from screens. There are no shadows, cards or glows. Two inks overprint with multiply, the way they would on press. One program red is spent sparingly, so that each spread has a single point the eye lands on. There are no dark surfaces.

The world refuses the dark starfield portfolio with project cards and the rocket flythrough. Space is present through the logotype's orbit and satellite, never through rockets, astronauts, neon glow or agency insignia.

**Key Characteristics:**
- Warm white stock, near-black ink, a cool construction grey, and one program red.
- One family (Host Grotesk Variable) in six sizes; tabular figures wherever numbers line up.
- A 12-column sheet (4 columns at phone width) that every spread, the running head and the grid overlay share.
- Square corners everywhere; circles only where the thing is a circle.
- Hairline rules, crop marks, dashed construction lines and numbered captions do the structural work.
- One easing curve for everything that moves; all motion stops under reduced motion.
- Every chapter and plate is numbered (0.0 to 4.0, 2.1, 3.1) and addressable from the running head.

## Colors

A two-ink print palette: warm uncoated-looking stock, a slightly cool black ink, a construction grey for drawings, and one saturated program red held in reserve.

### Primary
- **Program Red** (red): the single accent. On each spread it marks one thing: the satellite on the cover logotype, the red swatch in the ink plate, the underline under the colophon email. It is also the focus ring colour and the annotation ink of grid mode. It overprints with `mix-blend-mode: multiply` wherever it crosses another ink. It measures 3.5:1 on stock, so it never sets running text.

### Neutral
- **Coated Stock** (stock): the page, the running head background, the knockout behind the orbit's front arc, and text on ink or red fills. Also the browser `theme-color` and manifest background.
- **Program Ink** (ink): all headings, body text, the logotype strokes, plate borders, the 2px rule over each chapter head, the pressed Grid button fill and text selection. 15.6:1 on stock.
- **Second Ink** (ink-2): quieter text: the running head title, unvisited index entries, spec terms, captions, notes, construction labels and readings. 6.3:1 on stock, so it can carry small text.
- **Construction Grey** (grey): drawing only: construction circles and guides in the logotype, crop marks, the ease plate's axes, dashed borders on pending plates. 2.0:1 on stock; never used for text.
- **Hairline** (rule): 1px dividers between rows, the running head's bottom edge, the resting colour of link underlines, the inset edge on stock swatches.

### Named Rules
**The One Red Rule.** Each spread spends red on at most one element. The cover spends it on the satellite, Construction on the red ink swatch, Colophon on the email underline; the Foreword and Applications spend none. Two exceptions are part of the system: the satellite inside the small running-head mark (it belongs to the logotype at every size, as on the favicon), and state layers (the focus ring and grid mode), which appear only when the visitor asks for them.

**The Overprint Rule.** Red is printed, not painted on top. Where it crosses ink or grey it uses `mix-blend-mode: multiply`, so the overlap darkens the way two press inks would.

**The Grey Draws Rule.** Construction grey is for lines, guides and marks. Any text that needs to recede uses ink-2.

## Typography

**Display Font:** Host Grotesk Variable (with Helvetica Neue, Arial, sans-serif)
**Body Font:** Host Grotesk Variable (same family)

**Character:** A single contemporary neo-grotesk does every job, from 96px chapter titles to 11px spec labels. Hierarchy comes from size, weight (400, 450, 500, 600 on the variable axis) and tight negative tracking at display sizes, never from a second family.

### Hierarchy
- **Display** (600, clamp 2.75rem to 6rem, line-height 0.92, -0.035em): chapter titles (Foreword, Construction, Applications, Colophon) in columns 3 to 12. At phone width it caps at clamp(2.25rem, 10.5vw, 2.75rem).
- **Title** (600, clamp 1.75rem to 2.375rem, 1.05, -0.02em): application names (with their 3.x number in ink-2) and the chapter numbers beside each Display title (line-height 1).
- **Lead** (450, clamp 1.25rem to 1.625rem, 1.3, -0.01em): the Foreword's opening paragraph, chapter introductions, the colophon prompt, and the name in the cover's colophon block (at 600).
- **Body** (400, 1.0625rem, 1.55): running text, spec values, summaries. Measure held to about 60ch.
- **Note** (450 to 500, 0.8125rem, 1.4 to 1.5): the running head, captions, spec terms, plate numbers (600, ink), ink labels and hints.
- **Micro** (500 to 600, 0.6875rem, tabular): grid-mode spec labels, the G key cap, column numbers in the grid diagram. Annotation only.

One signature size sits outside the ramp: the colophon email is set at clamp(2rem, 6.2vw, 5.75rem), 600, line-height 1, -0.035em, so the address reads as the last display line of the manual.

### Named Rules
**The One Family Rule.** Host Grotesk sets everything, including the construction labels drawn inside the logotype SVG. Don't introduce a second face for code, numbers or emphasis.

**The Tabular Figures Rule.** Chapter numbers, plate numbers, readings, hex values and contrast ratios use `font-variant-numeric: tabular-nums` so numbers line up like a manual's tables.

**The Measured Type Rule.** Type specs shown on the page (the Construction type plate and grid mode) are read from computed styles at the current viewport, never typed in by hand.

## Layout

**The sheet.** Every spread is a CSS grid of `--columns` equal columns (12 by default, 4 at 760px and below) with `--gutter` between them and `--margin` on both sides. The running head, every chapter, the grid overlay and the grid diagram all use this same sheet, so the columns line up through the whole page.

**Standard positions.** Chapter numbers sit in columns 1 to 2; chapter titles start at column 3. Text blocks (Foreword lead, chapter intros, the spec list) occupy columns 3 to 9; body copy narrows to columns 3 to 7. Application spreads put the plate in columns 1 to 8 and the text in 10 to 12 (1 to 7 and 8 to 12 below 1100px; stacked at phone width). Contact-strip frames take 3 columns each (2 at phone width). The cover runs the logotype across all columns, the colophon block in columns 1 to 4 and the cover note in 9 to 12.

**Rhythm.** Chapters open with `chapter` space above them, a 2px ink rule across the margins, then `chapter-head` space before content. Plates in Construction are separated by `plate`; application spreads by `application` padding and a hairline. Inside blocks, spacing steps are small and literal: 4, 8, 12, 14, 16 (captions), 20 and 24px (`block`).

**Running head.** Sticky, `head` tall (48px at phone width), on the same 12 columns: mark (cols 1 to 2), "Standards Manual" (3 to 4), the current chapter stamp (5 to 7), the chapter index (8 to 11, hidden below 1100px), and the Grid button (12). The URL hash follows the chapter that crosses the middle of the viewport, so every spread is addressable.

**Breakpoints.** 1100px: the head index hides, application spreads shift to 7/5, construction labels grow. 760px: 4 columns, everything stacks to full width, the cover gains a ruled contents list. 600px: logotype construction labels scale up and the crowded ones hide.

### Named Rules
**The One Sheet Rule.** Nothing is laid out outside the sheet. New sections either are a `.sheet` or sit inside one and take whole column spans.

**The Flush Left Rule.** Text is set flush left, ragged right, with `text-wrap: pretty` on paragraphs and `balance` on titles. Nothing is centred except content inside a plate placeholder.

## Elevation & Depth

The system is flat. There are no drop shadows, no layered surfaces and no blur. Separation comes from print devices: 1px hairlines, a 2px ink rule over each chapter, 1px ink borders around screenshots and contact frames, crop marks just outside application plates, and dashed grey borders on plates still to come. The only `box-shadow` in use is a 1px inset hairline that gives stock-coloured swatches an edge. The sticky running head sits on stock with a hairline under it rather than floating. Depth, where it appears, is ink overprint (multiply).

### Named Rules
**The Printed Page Rule.** If an element needs to stand apart, give it a rule, a border or a crop mark, never a shadow or a tinted card.

## Shapes

Corners are square throughout (0px). The Grid button sets `border-radius: 0` explicitly. Circles appear only where the thing really is a circle: the satellite and the dot tracing the easing curve. The logotype is the one place curves lead: a monoline lowercase built from circles and straight strokes on a 100-unit x-height, stroke 18 with round caps and joins, its o ringed by a tilted elliptical orbit whose front arc is knocked out of the letter in stock. Construction drawings use 0.6-unit grey lines, 3/4 dashes for construction circles, small cross marks at centres, and dimension callouts. Plates are 16:10.

## Components

### Running Head
Quiet, always present, and doubles as the manual's index.
- **Style:** stock background, hairline bottom border, Note type at weight 450, line-height 1.
- **Mark:** the astro logotype at 64px wide (54px on phones), linking back to the cover; the orbit strokes are thickened so it holds at that size.
- **Stamp:** the current chapter as "2.0 Construction" in 600. When it changes, it re-stamps: 420ms on the system curve, from 6px low and 106% scale to rest.
- **Index:** chapters 1 to 4 with tabular numbers, in ink-2; the current one turns ink at 600 (`aria-current`). Hidden below 1100px.

### Grid Toggle (the only button)
- **Shape:** square corners, 1px ink border, 30px tall, padding 0 6px 0 10px, with a boxed G key cap (18px, 1px border, 70% opacity; hidden on phones).
- **Default:** transparent fill, ink text, weight 500.
- **Pressed:** `aria-pressed="true"` fills it with ink and stock text. Background and colour transition over 160ms on the system curve.
- **Active:** nudges down 1px.

### Links
- **Default:** inherit colour, 1px underline in the hairline colour, offset 0.22em.
- **Hover (fine pointers only):** the underline darkens to the text colour over 160ms.
- **Write to me:** the primary contact action, 600 weight with a 2px ink underline.
- **Outbound:** an arrow-up-right SVG icon at 0.9em, bold, after the label (Resume, Visit, Source, social links). All open in a new tab.
- **Colophon email:** the signature link, at its own display size with a 3px red underline offset 0.12em. On the Colophon spread this is the red element.
- **Focus:** a 2px red outline offset 3px on every focusable element.

### Spec List
A two-column definition list, the manual's table. Terms are Note size in ink-2 at 500 with a 1.9 line-height so they sit on the value's baseline; values are Body in ink. Term column is 7.5rem (6rem on phones; 4.5rem inside application spreads), separated by the gutter, rows 10px apart, with a hairline above the list.

### Chapter Head
A 2px ink rule across the margins, then the chapter number (Title size, 600, "2.0") in columns 1 to 2 and the Display title from column 3, baseline-aligned. On phones the number and title sit side by side in a flex row.

### Plates and Captions
Every figure is a numbered plate. Captions are Note size in ink-2, max 72ch, led by the plate number (600, ink, tabular) with a 16px gap. Construction plates: the grid diagram (column swatches tinted with grey, hairline edges, tabular column numbers, plus a caption reading the live column width, gutter and margin), the ink plate (stock, ink, grey and red bands at 56:30:9:5, red overprinting grey with multiply, each labelled with hex and live contrast on stock), the type plate (specimen rows with computed size, leading and weight on the right), and the motion plate (the system curve drawn from the live token, traced by an ink dot).

### Contact Strip
The Applications index, previewed like a contact sheet: one frame per application, 3 columns each, a 16:10 plate with a 1px ink border, caption below with its 3.x number. Hover (fine pointers) draws a 3px ink outline 3px outside the frame. Missing screenshots show "To come" in a dashed grey frame.

### Application Spread
A plate on the left and text on the right. The plate is either a real screenshot (16:10, 1px ink border) or a pending placeholder ("Plate to come", "16 : 10", dashed grey border), with grey crop marks 14px outside its corners. The text column has the Title with its number in ink-2, a summary, a spec list (Role, Stack, Year), then the outbound actions (600 weight, 24px apart) or a Note-size hint.

### Logotype (signature)
The astro mark as an SVG, used on the cover across all 12 columns with its construction (guides labelled ascender, x-height, centre, baseline; dashed construction circles; callouts for r 41, the 100 x-height and the 18 stroke), and without construction in the running head and favicon. On load the cover drawing builds itself: guides draw in (900ms, 70ms stagger), labels and dashed circles fade in, letters draw stroke by stroke (1200ms, 140ms stagger from 800ms), then the orbit (1000ms at 1.5s) and the knockout and satellite appear. The satellite travels the orbit every 18s; under reduced motion it rests at a fixed point and nothing draws.

### Grid Mode (signature)
Toggled by G (ignored while typing or with modifiers) or the Grid button. A fixed, non-interactive overlay paints the 12 columns in translucent red with red column edges and an 8px horizontal baseline rhythm. Every element marked as a type specimen gets a dashed red outline and a red Micro label reading its computed spec ("Display 96/88 600"), recomputed on resize. This is the one state where red is used in quantity: it is the proofing ink, and it exists only while the visitor holds it on.

### Motion
One curve, `cubic-bezier(0.16, 1, 0.3, 1)`: things arrive fast and settle slowly. State changes run at 160ms; drawing runs 600 to 1200ms with short staggers. Smooth scroll, the stamp, the logotype drawing, the satellite and the ease-plate dot all run only under `prefers-reduced-motion: no-preference`.

## Do's and Don'ts

### Do:
- **Do** put every new section on the sheet (`--columns`, `--gutter`, `--margin`) and start text at column 3 the way chapters do.
- **Do** number new chapters, plates and applications in the manual's scheme (n.0, n.1) and give them an id the running head can address.
- **Do** spend red on one element per spread and let it overprint with multiply where it crosses another ink.
- **Do** use ink-2 for quiet text and grey only for lines, guides, crop marks and dashed placeholders.
- **Do** use the system curve `cubic-bezier(0.16, 1, 0.3, 1)` and the 160ms step for state changes, and gate all motion behind `prefers-reduced-motion: no-preference`.
- **Do** mount imagery as plates: 16:10, a 1px ink border or crop marks, a numbered Note caption, and a provenance record for every shipped raster.
- **Do** mark new type roles with a type-spec attribute so grid mode can measure them, and read displayed values from computed styles.
- **Do** use tabular figures for anything numeric that lines up.

### Don't:
- **Don't** add drop shadows, glows, blur, rounded cards or tinted panels; separate with rules, borders and crop marks.
- **Don't** round corners. Only true circles (satellite, slider thumb, tracer dot) are round.
- **Don't** add a second typeface or set text in construction grey.
- **Don't** put red on more than one element in a spread, or use it for running text.
- **Don't** introduce dark sections; the page is printed on white stock throughout.
- **Don't** use rockets, astronauts, launch language, neon glow or any space agency's marks, names or logos; the space reference lives in the orbit and the satellite.
- **Don't** hard-code measurements on the page that the browser can report; the manual shows what it computes.
