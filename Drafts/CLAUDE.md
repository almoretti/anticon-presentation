# Anticon Talk — Working Notes

Self-contained impress.js presentation. Single-file HTML deck arranged so the final zoom-out reveal spells out the letters **A I** in world coordinates.

## Active draft

`anticon-talk-draft-007.html` — design direction: **hand-drawn notebook** (Caveat-driven, sketchy SVG annotations, tilted Post-its, faint dot-grid paper). Forked from `006-c` on 2026-05-16. The full history of how we got here lives in `draft-log.md`.

## Locked constraints

These are not up for grabs without an explicit ask:

- **Color palette**: cream `--bg-slide-A` + cool-gray `--bg-slide-I` + warm-rust `--accent-warm` + deep-blue `--accent-cool` + dark `--bg-subslide`. Defined as CSS vars at the top of the HTML.
- **Fontstack**: Fraunces (display serif), Manrope (body), JetBrains Mono (rarely), Caveat (handwriting). Loaded from Google Fonts at the same URL across all drafts.
- **Spatial composition**: every `.step` keeps its `data-x` / `data-y` / `data-z` / `data-scale` / `data-rotate` exactly as in Draft 006. The reveal slide (`data-x="61020" data-y="33480" data-scale="70"`) is the load-bearing zoom-out — don't touch it without re-checking the camera math.
- **`data-max-scale="20"` on the root**: v2.0.0's default is 3, which clips the reveal. Don't lower this.
- **impress.js v2.0.0** from jsDelivr.

## Reusable components

### `.paper-mat` — image-on-paper container (locked 2026-05-17)

Standard wrapper for rectangular image assets (charts, screenshots, repo
captures) — gives the image a tilted "piece of paper" look with shadow and a
masking-tape strip. Defined once near the top of the stylesheet (search for
`PAPER-MAT`). Reach for it before hand-rolling new image framing.

```html
<div class="paper-mat paper-mat--yellow">
  <img src="..." alt="...">
</div>
```

Variants:

- `paper-mat--yellow` — warm-yellow post-it (`#fff4d2`). **Default for image frames.**
- `paper-mat--lined`, `paper-mat--grid` — alternative paper textures. Available
  but rarely the right pick for images; consider the slide background instead.

Per-use tuning via CSS vars: `--mat-tilt` (default `-0.6deg`), `--tape-tilt`
(default `-2.2deg`). Built-in: 52/48/48/48 px padding, 4px radius, soft paper
shadow. Designed at 1040–1100px stage widths.

Live example: **slide 1** uses `paper-mat--yellow`.

### Slide-background paper presets — `.bg-*` on `.step` (locked 2026-05-17)

Add ONE preset class to a `.step` to swap its cream background for a
notepad-style paper. Patterns are subtle (~0.15–0.50 alpha) so content stays
readable.

```html
<div class="step section-A bg-dotgrid">…</div>
```

Three pattern families, each available in default + warm + cool/rose tints:

| Class                | Pattern               | Tint                |
|----------------------|-----------------------|---------------------|
| `bg-dotgrid`         | Engineering-pad dots  | default cream       |
| `bg-dotgrid-warm`    | Engineering-pad dots  | warmer cream        |
| `bg-dotgrid-cool`    | Engineering-pad dots  | cooler grey-cream   |
| `bg-dotgrid-rose`    | Engineering-pad dots  | pinkish cream       |
| `bg-lined`           | Horizontal ruled      | default cream       |
| `bg-lined-warm`      | Horizontal ruled      | warmer cream        |
| `bg-lined-cool`      | Horizontal ruled      | cooler grey-cream   |
| `bg-grid`            | Square graph paper    | default cream       |
| `bg-grid-warm`       | Square graph paper    | warmer cream        |

Patterns share CSS vars (`--paper-pattern-dotgrid`, `--paper-pattern-lined`,
`--paper-pattern-grid`) so adding a new tinted variant is a one-liner.

Live example: **slide 1** uses `bg-dotgrid`.

When picking for a new slide: rotate patterns/tints to avoid two consecutive
slides feeling identical; cluster the same preset for slides in the same
narrative beat.

## Narrative threads / cross-slide callbacks

Notes on intentional repetitions where one slide previews material that another
slide expands. Keep these in sync if either slide changes — that's the whole
point of the callback.

### Old-model "Our options?" (slides 3 → 6)

Slide 3 ends with a **summary** of the old MarTech decision process, expressed
as four painful options:

1. Convince the vendor to build them → wait forever.
2. **Buy** another tool, integrate it → integration hell.
3. **Migrate** to a new tool entirely → RFI, months, expense, breakage.
4. **Build** them ourselves → told "too long" — complain forever.

**Slide 6 (`My MarTech decision process is changing`) re-uses this exact old
model**, expanded into a fuller numbered list. The 4 punchlines above are the
short summary; slide 6 is the long form. When editing one, check the other so
the wording and order stay aligned — slide 3 should still feel like a teaser
for slide 6.

Colour code: **Buy** in cool blue, **Build** in rust (matches slide 2's
binary). **Migrate** in bold dark to differentiate without competing.

## Known open issues (defer until asked)

These were identified in the 2026-05-16 screenshot pass and parked:

- **Slide-reveal** — `.marketing-label`, `.final-thanks`, `.final-quote-abs`, and `.contact-abs` overlap each other. Layout needs to be rebuilt so each block has its own zone.
- **Slide 7** — buildable-foundation pyramid extends off the right edge. `.pyr-layer:nth-child(N)` widths/margin-lefts overflow the parent column.
- **Slide 13** — slide footer collides with the bottom-left `.trading-annot` ("decision support").
- **Slides 6, 11, 12, 14, 15, 16** — content underfills the 1920×1080 canvas; lots of empty space. Inner containers don't span the full slide.
- **General** — hand-drawn SVG decorations are not consistently well-positioned across slides; needs an editorial pass.

## How to screenshot every slide

Use `capture-deck.js` (Playwright). Setup once:

```bash
npm install playwright
npx playwright install chromium
```

Run:

```bash
node capture-deck.js                        # defaults to anticon-talk-draft-007.html
node capture-deck.js path/to/other-deck.html
```

Output: `screenshots-<deckname>/00-slide-0.png` through `17-slide-reveal.png`.

The script:
- Renders at 1920×1080 (the deck's authored canvas).
- Drives navigation with `impress().goto(id, 1500)` so impress.js fires `stepenter` and the deck's `.active`-triggered CSS enter-animations actually run before the screenshot.
- Installs a `keydown` blocker so spurious key events between Playwright steps can't advance the deck.
- Uses a 4s duration for the reveal slide (`data-transition-duration="4000"`) plus extra settle time.

If asset images (`../Assets/*.png`) aren't reachable from the deck's location, they'll show alt text in screenshots — content is still inspectable.

## Quick reference

- **`docs/gotchas.md`** — hard-won lessons from working on this deck: CSS quirks (percentage padding on absolute elements, class collisions), SVG stretching, post-it asset variants, impress.js spatial maths, Playwright screenshot timing. **Read this before non-trivial edits.**
- `impress-js-reference.md` — exhaustive reference for the impress.js v2.0.0 API, data attributes, transitions, plugins, gotchas. Includes a §5 that documents how Draft 007 specifically uses impress.js. Refer here before editing the camera setup or adding new slides.
- `draft-log.md` — chronological history of every draft and patch.
- `archive-2026-05-16-explorations/` — 006-a (editorial), 006-b (brutalist), 006-c (notebook, source of 007) and the previous draft 006.
- `archive-2026-05-01-before-draft-006/` — drafts 001-005.

## When editing the deck

- Editing a step's content: find its `<div class="step" id="slide-N">` block, edit the inner HTML.
- Adding a step: be explicit about `data-x`, `data-y`, `data-z` — the `rel` plugin inherits from the previous step when those attributes are omitted.
- The `<script>` block at the bottom has a custom substep handler that uses capture-phase `keydown` interception. Don't reorder it.
- Always re-run `capture-deck.js` after non-trivial edits to verify nothing broke spatially.
