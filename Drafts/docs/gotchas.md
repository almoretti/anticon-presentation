# Gotchas — Anticon deck (impress.js + CSS + assets)

Hard-won lessons from working on `anticon-talk-draft-007.html`. Skim this before
making non-trivial changes to the deck.

---

## CSS gotchas

### Percentage padding on `position: absolute` resolves against the containing block, not the element
This burned an entire iteration. We wrote:

```css
.title-postit {
  position: absolute;
  width: 220px;
  padding: 24% 14%;   /* "leave 24% top / 14% sides as writing-zone margin" */
}
```

…intending the padding to be `0.24 × 220px ≈ 53px`. In reality, CSS resolves
percentage padding against the **containing block's width** — for an
absolute-positioned element, that's the nearest positioned ancestor (here
`.step`, which is **1920px**). So padding became `268.8px` per side, blowing
the post-it past its declared width.

**Rule:** for `position: absolute` elements, use **pixel padding** (or `em`).
Never percentage padding unless you genuinely want it to scale with the parent.

### Class collisions with pre-existing classes
The deck already had a `.postit` class (slides 14+, with `min-height: 460px`).
When we added a new `.postit` for the title-slide stickers, it inherited that
460px and rendered 460px tall instead of our specified height.

**Rule:** namespace new classes (`.title-postit`, `.todo-list-item`, etc.)
rather than reusing generic names. Always `Grep` for the class name first.

### Title slide enter animations rotate via `transform`
`.step.title.active h1` sets `transform: translateY(0) rotate(-1.2deg)`. This
**overrides** any base `transform` you put on `h1`. If you change the base
rotation, also update the `.active` rule, or both will fight.

Same applies for `.meta` and `.h2`. If you switch `.meta` to absolute with
`transform: translateX(-50%)`, the active rule must include `translateX(-50%)`
too — otherwise the active state snaps the element back.

### `overflow: hidden` on `.step` clips content silently
The base `.step` rule has `overflow: hidden`. If your centered title content
is taller than `1080 - paddingTop - paddingBottom`, it gets cropped without a
warning. Always check rendered height when you change font-size or add lines.

### Headline wraps that surprise you
At `font-size: 200px` in `1820px` max-width, "Requirements are expensive."
wraps to 2 lines because Caveat at 200px is wider than expected (~95px per
char average). Always re-screenshot after changing font-size — wrap behaviour
is non-obvious for handwritten fonts.

---

## SVG gotchas

### Use the handdrawn asset library, don't roll your own paths
`Assets/handdrawn/` already has `circle-rough.svg`, `arrow-down.svg`,
`arrow-right.svg`, `underline-warm.svg`, `bracket-left.svg`,
`scribble-cloud.svg`, `x-mark.svg`. They were designed together; hand-
drafting wobble inline almost always looks worse than these. Reach for
them first.

### Pixel-positioning SVG decorations is fragile — use em & reusable classes
A common antipattern: position an SVG with absolute `left`/`top`/`width`/
`height` in fixed px, then eyeball-iterate the numbers. Brittle and
inconsistent across slides.

Better: define **one CSS class per decoration role**, with the SVG inside
a `::before`/`::after` and sizing in `em` so it auto-scales to the parent
font-size. Examples already in the deck:

| Class | Decoration | Use case |
|---|---|---|
| `.circled-word` | Hand-drawn oval, ~25px font-equivalent inset | Wrap a single word for big-headline emphasis. |
| `.circled-word.sm` | Smaller inset (~8px) | Same idea, in inline body copy. **Caveat: still crashes on neighbouring letters at small sizes — use `.underlined-word` instead for inline.** |
| `.underlined-word` | Hand-drawn rust underline below the word | Inline word emphasis where a circle won't fit. Uses `Assets/handdrawn/underline-warm.svg`, em-sized so it scales. |

When you need a new decoration: add a new class with the asset URL,
size in `em`, position via `::before`/`::after` relative to the wrapped
span. Don't put inline SVG with absolute pixel-positioning in the
markup — that's how the deck became unmaintainable.

### Circles around inline text in body copy look broken
A hand-drawn oval wrapping a single inline word in a sentence will
collide with the letters above and below, or with neighbouring words on
the same line. Save circles for **standalone headline words** and use
underlines (`.underlined-word`) for inline body-copy emphasis.

### `preserveAspectRatio="none"` + stretched ellipse = letter-slicing
A "natural" ellipse path stretched non-uniformly to wrap a wide word will
curve inward at the corners. Those inward curves slice through the first/
last letters of the word.

**Fixes:**
- Add **much more horizontal inset** so the corner curve sits well past the
  letters.
- Use a **stadium / rounded-rectangle path** instead of a pure ellipse — top
  and bottom stay flat, only corners curve.
- Use `vector-effect="non-scaling-stroke"` so stroke width stays uniform even
  when the SVG is stretched.

### Hand-drawn feel vs. computer-clean
Adding "wobble" to a path manually almost always makes it look broken, not
hand-drawn. The pre-made `Assets/handdrawn/circle-rough.svg` already has the
right amount of natural asymmetry. Prefer using it over rolling your own.

### Stroke width scales with the SVG
Without `vector-effect="non-scaling-stroke"`, the stroke is scaled by the
SVG's transform. Horizontal stretch makes vertical strokes thinner and
horizontal strokes thicker — sometimes desirable (pen-pressure look), often
not.

---

## Post-it asset gotchas

### Each variant has its own tape position; padding must match
The post-it PNGs in `Assets/postit/` are NOT uniform:

| Variant            | Tape position       | Text-centring padding hint           |
|--------------------|---------------------|--------------------------------------|
| `straight-blue`    | top centre, small   | `padding-top` > `padding-bottom`     |
| `scrambled-orange` | top centre          | `padding-top` > `padding-bottom`     |
| `folded-yellow`    | top centre          | `padding-top` > `padding-bottom`     |
| `mint`             | top right (small)   | `padding-top` > `padding-bottom`     |
| `lavender`         | top-right diagonal  | extra `padding-top` + `padding-right`|
| `side-coral`       | **left side**       | extra `padding-left` only            |
| `*-ruinedpaper`    | top                 | `padding-top` > `padding-bottom`     |

Text centred on the geometric centre of the div will appear *off-centre* on
the visible post-it body because the tape eats one side.

### `background-size: 100% 100%` stretches non-uniformly
The post-it PNG aspect ratios vary (some near-square, some slightly tall).
Using `100% 100%` on a square div distorts non-square PNGs. Trim each asset
to its bounding box first (see `trim-postits.js` style scripts), or use
`background-size: contain` and accept transparent margins.

### JPG sprite cells bleed neighbour shadows
The original `Assets/27154.jpg` had a 3×3 grid where each post-it's shadow
extended into adjacent cells. Cropping by `width/3 × height/3` captured
fragments of neighbours. Use a flood-fill from cell centre and keep only
pixels connected to the dominant blob.

### `mix-blend-mode: multiply` makes white disappear but tints children
Useful for JPGs with white backgrounds, but it also tints any text or child
elements inside the div. Better path: produce transparent PNGs once and use
them directly.

---

## impress.js gotchas

### impress.js controls the CAMERA, not the slide content
Single most useful mental model (confirmed via context7 + the official
DOCUMENTATION.md):

> `data-x`, `data-y`, `data-z`, `data-rotate*`, `data-scale` on a `.step`
> only tell impress.js **where to fly the camera between steps**. They do
> not constrain how you style content **inside** that step.

Inside a `.step` element (which is just `position: relative; width: 1920px;
height: 1080px;`), it's plain HTML+CSS — flexbox, grid, absolute
positioning, transforms, `::before`/`::after` — all work normally.

If something inside a step looks wrong, the bug is almost always vanilla
CSS, not impress.js. Common self-inflicted offenders:
- competing transforms on parent + pseudo-element (border drifts away from image)
- absolute children whose parent isn't actually positioned
- percentage padding on absolute elements (resolves against the wrong block)
- eyeballed pixel offsets instead of measuring the rendered rect

### Measure, don't eyeball, when positioning decorations
When an arrow/annotation needs to land on a specific point of another
element, **do not iterate by trial-and-error**. Open a Playwright probe,
`getBoundingClientRect()` the target, compute the offset, and set the
CSS once. This was the diff between 4+ wrong arrow positions and a single
correct one on slide 1.

### Locked spatial constants — do not touch lightly
`data-x`, `data-y`, `data-z`, `data-scale`, `data-rotate` are the camera path
for the final zoom-out "A / I" reveal. Changes ripple — the reveal slide
(`data-x="61020" data-y="33480" data-scale="70"`) is load-bearing.

### `data-max-scale="20"` on the root
v2.0.0's default is `3`, which clips the reveal. Do **not** lower this.

### `data-scale` on a step doesn't change its CSS pixel size
`data-scale="0.3"` means impress.js scales the camera by `1/0.3 = 3.33×` when
focusing on that step, so it fills the viewport. The step's CSS dimensions
stay `1920×1080`. `getBoundingClientRect()` returns **screen pixels after
transform** — confusingly different from the element's authored size.

### `impress().goto(targetId)` on the current step may not re-fire animations
The `.active` class stays on, but the staggered `stepenter` animations may
not replay. Tests/automations that screenshot consecutive slides should
account for the first-visit case where the animations have already run.

---

## Playwright / screenshot gotchas

### Settle time must exceed total animation duration
Title slide has `transition-delay` up to `1.3s` plus `transition: opacity
1.4s`. Total ≈ `2.7s` after `.active` is applied. `capture-deck.js` uses
`1500ms` impress transition + `1700ms` in-page wait + `1500ms` outer wait =
`~4.7s`. Below that, screenshots catch mid-animation with invisible text.

### Always wait for fonts
After `goto()`, wait for `body.classList.contains('impress-enabled')` AND a
font settle (a 1–2s `waitForTimeout`). Google Fonts can flash unstyled then
swap in.

### Block keypresses inside the page
The capture script registers a `keydown` blocker so accidental keypresses
between steps don't advance the deck. Keep this — otherwise a focus change
can re-trigger navigation mid-capture.

### `--no-sandbox` is required on this Windows setup
Chromium otherwise fails to launch in headless mode.

---

## Workflow gotchas

### Screenshot **every** non-trivial change
Visual changes are not reliably predictable from CSS. The `screenshot-slide0.js`
one-off (or `capture-deck.js` for all slides) takes seconds and catches
regressions you'd otherwise ship.

### Trust the screenshot, not the math
If you compute that a 240×240 post-it with `padding: 24% 14%` should have
`162×112` content area, but the screenshot shows it filling the whole top
half of the slide — believe the screenshot. There's a bug somewhere (see
percentage-padding gotcha above).

### Don't `display: none` debug elements; remove them
Stale CSS rules referencing removed HTML still get matched by future
elements you add with the same class. We hit this with `.postit` and
`.title-corner-note`.

---

## File map (for context when debugging)

```
Drafts/
├── anticon-talk-draft-007.html      ← the active deck
├── capture-deck.js                   ← full-deck screenshot script
├── screenshot-slide0.js              ← one-off slide-0 screenshot (longer settle)
├── screenshots-draft-007/            ← output PNGs (00-slide-0.png … 17-slide-reveal.png)
├── CLAUDE.md                         ← deck constraints + open issues
└── docs/
    └── gotchas.md                    ← this file
```

Assets live one level up:

```
../Assets/
├── postit/                           ← transparent post-it PNGs
└── handdrawn/                        ← circle-rough.svg, arrow-*.svg, etc. + handdrawn-assets.css
```
