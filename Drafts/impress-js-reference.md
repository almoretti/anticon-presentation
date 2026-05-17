# impress.js — Master Reference (for the Anticon deck)

A source-grounded reference for editing impress.js presentations, focused on what's relevant to `anticon-talk-draft-006.html`. Every claim is cited to either the official docs, the source file with the relevant code path, or the GitHub release notes.

- **Repo root:** https://github.com/impress/impress.js
- **Core source:** https://github.com/impress/impress.js/blob/master/src/impress.js
- **Bundled file (what jsDelivr serves):** https://github.com/impress/impress.js/blob/master/js/impress.js
- **Reference docs:** https://github.com/impress/impress.js/blob/master/DOCUMENTATION.md
- **Getting Started:** https://github.com/impress/impress.js/blob/master/GettingStarted.md
- **Plugin overview:** https://github.com/impress/impress.js/blob/master/src/plugins/README.md

> **Your deck loads v2.0.0** from `https://cdn.jsdelivr.net/gh/impress/impress.js@2.0.0/js/impress.js`. Everything below refers to that build unless stated otherwise.

---

## 1. Core API & data attributes

### 1.1 Version notes

The latest tagged release is **v2.0.0** (Jul 2022). Recent history:

- **v2.0.0** — Default canvas changed from 1024×768 to **1920×1080**. Default `data-max-scale` raised from 1 to **3**. `rel` plugin gained relative rotations (`data-rel-rotate-*`) and a `data-rel-position="relative"` mode. Custom substep ordering via `data-substep-order`. Source: https://github.com/impress/impress.js/releases/tag/v2.0.0
- **v1.1.0** (Apr 2020) — `media` plugin added; `rel` can target any previous step via `data-rel-to`; URL-driven autoplay `?impress-autoplay=N`. Source: https://github.com/impress/impress.js/releases/tag/1.1.0
- **v1.0.0** (Mar 2018) — First "modern" release. Introduced the plugin system, official `substep`, toolbar, navigation-ui, mobile, rel, goto, skip, stop, mouse-timeout, etc.

The `package.json` on master still says `"version": "1.1.0"` even though v2.0.0 is the canonical current build served from jsDelivr — don't be confused by it.

### 1.2 Root `#impress` attributes

From `DOCUMENTATION.md` and verified in `buildConfig()` in `src/impress.js`:

| Attribute | Default | Effect |
|---|---|---|
| `data-width` | `1920` | Authoring-canvas width (px). CSS is authored as if the screen is this wide; impress scales to fit. |
| `data-height` | `1080` | Authoring-canvas height (px). |
| `data-max-scale` | `3` | Max scale factor applied by `computeWindowScale()`. |
| `data-min-scale` | `0` | Min scale factor (0 = no lower bound). |
| `data-perspective` | `1000` | CSS `perspective` for 3D rendering. Set to `0` to disable foreshortening. |
| `data-transition-duration` | `1000` (ms) | Default camera-transition duration. |
| `data-autoplay` | (unset) | If a positive number, autoplay plugin advances every N seconds. |

Subtle: the perspective applied to the root is `config.perspective / windowScale` so the look stays consistent as impress scales to fit.

### 1.3 Step `data-*` attributes

From `DOCUMENTATION.md` and `initStep()` in `src/impress.js`:

| Attribute | Default | Notes |
|---|---|---|
| `data-x` | 0 | World-coord X (px). Positions the **center** of the step. |
| `data-y` | 0 | World-coord Y (px). |
| `data-z` | 0 | World-coord Z (px). Negative = further from camera. |
| `data-rotate` | 0 | Degrees, clockwise around Z (alias of `data-rotate-z`). |
| `data-rotate-x` / `-y` / `-z` | 0 | Per-axis rotation in degrees. |
| `data-rotate-order` | `"xyz"` | Order CSS `rotateX/Y/Z` are applied. Must be a permutation of x/y/z. |
| `data-scale` | 1 | **World scale.** `data-scale=4` means the step is 4× larger in world space; the camera zooms out 4× when entering it. |
| `data-transition-duration` | inherits root | Per-step override (ms). |
| `data-autoplay` | inherits root | Per-step autoplay timer (seconds). `0` disables. |

**`data-z` defaults change when the `rel` plugin is active.** Because `rel` is a pre-init plugin bundled into the default build, missing `data-x/y/z` actually **inherit from the previous step**, not zero. To force zero you must write `data-z="0"` explicitly. Documented at https://github.com/impress/impress.js/blob/master/src/plugins/rel/README.md ("IMPORTANT: Incompatible change").

**Units:** `data-x/y/z` and `data-perspective` are pixel values. `data-rotate*` are degrees. `data-scale` is unitless. The `rel` plugin additionally accepts `data-rel-x="1.5w"` and `1.5h` (multiples of canvas width/height).

### 1.4 The `impress()` global

`impress("rootId")` returns the API for the root element with that id (default `"impress"`). API methods:

| Method | Description |
|---|---|
| `init()` | Initializes the presentation. Idempotent. Fires `impress:init` on the root. |
| `goto(target, [duration], [reason], [origEvent])` | Navigate to a step. `target` accepts step index (number, negative wraps from end), step `id` (string), or DOM element. `duration` is ms. `reason` is `"goto"` (default), `"next"`, or `"prev"`. Returns the target element (truthy) on success, `false` on failure. |
| `next()` | Calls `goto()` with `reason: "next"`. Wraps at end. |
| `prev()` | Calls `goto()` with `reason: "prev"`. Wraps at start. |
| `swipe(pct)` | Semi-private. Renders a partial transition for a touch swipe, pct between -1 and +1. |
| `tear()` | Resets the DOM to its pre-init state. Useful for re-init after dynamic changes. |
| `lib` | Object holding utility libraries (`lib.util`, `lib.gc`, etc.). |

On the global `impress` function (not the per-root API):

- `impress.supported` — boolean, true if 3D-transforms + classList + dataset are present.
- `impress.addPreInitPlugin(fn, weight=10)` — synchronous filter run at the very start of `init()`.
- `impress.addPreStepLeavePlugin(fn, weight=10)` — synchronous interceptor run at the start of `goto()`. May mutate `event.detail.next` / `transitionDuration`, or return `false` to abort.
- `impress.addLibraryFactory({name: factoryFn})` — used by `src/lib/*.js`.
- `impress.getConfig()` — returns the active root config.

There is **no `focusedElement` property**. The currently active step: `document.querySelector("#impress .step.active")`.

### 1.5 Lifecycle events

All custom events bubble. Targets:

| Event | Target | Timing | `event.detail` |
|---|---|---|---|
| `impress:init` | The root element | After init is fully complete | `{ api }` |
| `impress:stepenter` | The entering step | After `setTimeout(duration + delay)` — i.e. when the camera transition is *visually done* | (none in core) |
| `impress:stepleave` | The leaving step | Synchronously inside `goto()`, *before* the transition starts | `{ next }` element being entered |
| `impress:steprefresh` | The current step | After every `onStepEnter` (including resize-driven re-goto's) | (none) |
| `impress:substep:enter` | The step (from substep plugin) | When `next()` reveals a substep instead of leaving | `{ reason, substep }` |
| `impress:substep:leave` | The step | When `prev()` hides a substep instead of leaving | `{ reason, substep }` |
| `impress:autoplay:play` / `:pause` | Document | Used by toolbar to start/stop autoplay | none |

**Practical implications:**
- Want "now visible" feedback? Listen to `impress:stepenter`.
- Want "user just clicked next" feedback (immediate)? Listen to `impress:stepleave`.
- `steprefresh` fires every time, including on resize — useful if you have layout logic that depends on the current step.

### 1.6 CSS classes applied dynamically

On `<body>`:
- `impress-supported` / `impress-not-supported` — feature detection.
- `impress-disabled` / `impress-enabled` — set during init.
- `impress-on-<step-id>` — reflects the *currently active* step's id. Use for global theming: `body.impress-on-overview { ... }`.
- `impress-mobile` — set by mobile plugin if UA matches mobile patterns.
- `impress-mouse-timeout` — set after 3s mouse idle.

On each `.step` element:
- `future` — initially set on every step.
- `present` — set on `stepenter` (after transition completes).
- `past` — set on `stepleave`, persists thereafter.
- `active` — set *synchronously* on the target step inside `goto()` (earlier than `present`). This is the canonical "what the camera is looking at now" marker.

There is **no automatic per-index class** (like `on-1` / `on-2`). What exists is the `impress-on-<id>` body class.

---

## 2. Spatial layout & 3D positioning

### 2.1 How the camera is computed

The camera is the inverse of the active step's world transform. From `goto()` in `src/impress.js`:

```js
target = {
  rotate:    { x: -step.rotate.x, y: -step.rotate.y, z: -step.rotate.z, order: step.rotate.order },
  translate: { x: -step.translate.x, y: -step.translate.y, z: -step.translate.z },
  scale:     1 / step.scale
};
```

This target is split across two DOM layers:

- The **root** `#impress` gets `transform: scale(target.scale * windowScale)`. `windowScale` = `min(innerH / configH, innerW / configW)` clamped to `[minScale, maxScale]`.
- The inner **canvas** wrapper (which impress creates and reparents all steps into during `init()`) gets `transform: rotate(...) + translate(...)`.

Reason for the split: scale and rotate/translate animate with different `transition-delay`s so the camera "swoops" naturally. When zooming **out**, scale runs first then pan/rotate; when zooming **in**, pan/rotate first, then scale.

### 2.2 Order of operations on a step

In `initStep()`:

```
transform = translate(-50%, -50%) + translate(data-x, data-y, data-z) + rotate(rotate-order) + scale(data-scale)
```

- `translate(-50%, -50%)` centers the step's box on the `(data-x, data-y)` point.
- `transform-style: preserve-3d` is set on root, canvas, AND every step, so nested transforms participate in the 3D scene.

### 2.3 Perspective

`data-perspective` defaults to **1000**. Applied as `perspective: (config.perspective / targetScale) + "px"` — dividing by `targetScale` keeps the foreshortening look constant as the camera zooms. Set to `0` to flatten — translate3d and rotations still work, just render orthographically.

### 2.4 `data-scale` mental model

`data-scale` is **world scale**, not screen scale. A step with `data-scale="5"` is genuinely 5× larger in world space. To make it fit on screen, the camera zooms out 5× when entering it.

- A step with `data-scale="5"` *looks the same size on screen* as a step with `data-scale="1"` — but it occupies a 5× larger area of the world canvas. Other steps near it appear tiny while it's active.
- For a "zoom-out reveal of everything else", give the reveal step a large `data-scale` so the camera pulls way back enough to show the whole composition.

### 2.5 Common pitfalls

- **Sub-pixel text blur after rotation.** Browsers rasterize text at the rotated/scaled CSS resolution; non-integer transforms cause heavy blur. Mitigations: prefer whole-degree rotations (90°, 180°), avoid 3D rotations on text-heavy slides, try `-webkit-font-smoothing: antialiased; backface-visibility: hidden; will-change: transform`. Refs: https://bugzilla.mozilla.org/show_bug.cgi?id=1626259, https://bugzilla.mozilla.org/show_bug.cgi?id=1098275
- **Downscale aliasing on small windows.** The browser rasterizes at its own size, then CSS-scales. Reported: https://github.com/impress/impress.js/issues/609
- **z-fighting with mixed `data-z`.** Two steps at identical `(x, y, z)` will fight. Spread on `z` (e.g. ±1) for deterministic stacking when overlapping.
- **Steps are 0-size divs.** No `%` widths inside a step. Use the canvas pixels you authored against (default 1920×1080).
- **`overflow: hidden` and stacking contexts.** Impress sets `overflow: hidden` on `body` and `html` itself. A step with a `transform` is its own stacking context; `position: fixed` inside it won't be fixed to the viewport.
- **`id="impress"` is the default root.** If you rename it, pass it to `impress("yourRootId").init()`.
- **Mobile degrades by design.** The `mobile` plugin adds `body.impress-mobile`. Use CSS to opt into a simplified rendering (showing only `.active`, `.prev`, `.next`).
- **No 3D support → flat fallback.** If `perspective` isn't supported, `impress-not-supported` is added to body and the API becomes a no-op. Author CSS so `.step` divs lay out reasonably under `.impress-not-supported`.
- **FOUT can shift layout.** Since steps are centered via `translate(-50%, -50%)`, late-loading webfonts that change box size will re-center mid-render. Use `font-display: optional` or fix step dimensions.

### 2.6 Designing a "shape reveal" (like your A I composition)

Pattern:

1. Compute the world bounding box of the slides forming the shape. Say `x ∈ [0, W]`, `y ∈ [0, H]`.
2. Place a "reveal" step at the centroid `(W/2, H/2)`.
3. Choose its `data-scale` so the camera zooms out enough to show the whole bbox: `data-scale ≈ max(W / data-width, H / data-height)`. Round up for breathing room.
4. Use `data-rotate*="0"` on the reveal step so the camera is square to the composition.
5. Explicitly set `data-z="0"` because of `rel` plugin inheritance.
6. Optional: a longer `data-transition-duration` (e.g. 4000) for dramatic effect.
7. If you want the `data-scale` to exceed 3, raise `data-max-scale` on the root accordingly.

---

## 3. Transitions, substeps & navigation

### 3.1 Transition durations

Default 1000 ms. Set globally on root, or per-step. Per-step overrides global unless you pass an explicit `duration` to `goto()`. CSS easing is hard-coded `ease-in-out`.

The function splits the duration: half is `transition-duration`, half is `transition-delay`, with assignment depending on `zoomin = (target.scale >= currentState.scale)`. Visually:
- **Zooming in**: fly to the new location first, then zoom in.
- **Zooming out**: scale away first, then pan/rotate to the new one.

Same-scale slides have clean back-to-back transitions of exactly `duration` ms.

### 3.2 The official substep pattern

Source: `src/plugins/substep/substep.js` ([README](https://github.com/impress/impress.js/blob/master/src/plugins/substep/README.md)).

It's a **preStepLeave plugin** registered with weight `1`. Logic:

- On `next()`: if the current step has any `.substep` children that aren't yet `.substep-visible`, reveal the next one and **abort the transition**. Otherwise let it proceed.
- On `prev()`: if any `.substep-visible` children exist, hide the most recent one and abort. Otherwise let prev() proceed.
- On `goto(target)` with default `reason: "goto"`: does **not** intercept. Goto-by-id bypasses substeps entirely.

Markup:
```html
<div class="step">
  <p class="substep">Orange</p>
  <p class="substep" data-substep-order="2">Mango</p>
  <p class="substep" data-substep-order="1">Apple</p>
</div>
```

Reveal order: substeps with `data-substep-order` go first in ascending integer order; remaining substeps follow in DOM order.

Classes added by the plugin:
- `.substep-visible` — accumulates as substeps are revealed.
- `.substep-active` — only on the most-recently-revealed substep.

Events: `impress:substep:enter`, `impress:substep:leave`, `impress:substep:stepleaveaborted`.

On stepenter, the plugin clears all `.substep-visible` classes so substeps reset to hidden.

### 3.3 Built-in keyboard navigation

From `src/plugins/navigation/navigation.js`:

- **Forward**: Space, PageDown, Right, Down, Tab.
- **Backward**: PageUp, Left, Up, Shift+Tab.
- Alt/Ctrl/Meta + key combinations are ignored (so OS shortcuts still work).
- Shift (except Shift+Tab) is ignored.
- **Home/End are NOT supported** by core. Use the `goto` plugin or custom JS.

The navigation plugin also intercepts clicks:
- An `<a href="#step-id">` anywhere uses `goto`.
- Clicking an inactive `.step` element navigates to it (prezi-style).

### 3.4 Touch / swipe

`src/plugins/touch/touch.js` threshold is `screenWidth / 20`. During the move it calls `impress().swipe(pct)` for real-time finger tracking; on end it commits via `next()` or `prev()`.

### 3.5 Programmatic navigation

```js
const api = impress();
api.goto(0);                                            // first step
api.goto(-1);                                           // last step (negative wraps)
api.goto("intro");                                      // by id
api.goto(document.querySelector("#big-reveal"), 4000);  // by element, custom duration
api.next();
api.prev();
api.tear(); api.init();                                 // hard refresh
```

Full signature: `goto(target, duration?, reason?, origEvent?)`. `reason` defaults to `"goto"` — important because preStepLeave plugins (substep, stop, skip) only intercept on `"next"` / `"prev"`. Use `"goto"` to deliberately bypass substeps.

### 3.6 Hooking nav events

Analytics:
```js
document.getElementById("impress").addEventListener("impress:stepenter", (e) => {
  analytics.track("slide", { id: e.target.id });
});
```

Custom progress UI:
```js
const steps = [...document.querySelectorAll("#impress .step")];
document.addEventListener("impress:stepenter", (e) => {
  const i = steps.indexOf(e.target);
  bar.style.width = `${(i / (steps.length - 1)) * 100}%`;
});
```

Or just enable the bundled `progress` plugin: `<div class="impress-progressbar"><div></div></div>`.

---

## 4. Plugins, extensions & gotchas

### 4.1 Bundled plugins (all included in v2.0.0's `js/impress.js`)

| Plugin | What it does | How to enable |
|---|---|---|
| `autoplay` | Auto-advance after N seconds | `data-autoplay="N"` on root or step; URL `?impress-autoplay=N` |
| `blackout` | Press `B` or `.` to black out | Always on |
| `bookmark` | Map hotkeys to steps | `data-bookmark-key-list="KeyA Digit1 ..."` |
| `extras` | Loads optional third-party plugins (highlight, mermaid, MathJax, markdown) | Add `<script>` tags |
| `form` | Stops nav from eating text input | Always on, transparent |
| `fullscreen` | F5 enters, Esc leaves | Always on |
| `goto` | Per-step "out-link" navigation (non-linear) | `data-goto`, `data-goto-next`, `data-goto-key-list` |
| `help` | Press `H` for help popup | `<div id="impress-help"></div>` |
| `impressConsole` | Press `P` for speaker console | `<div class="notes">...</div>` inside steps |
| `media` | Autoplay/autopause `<audio>`/`<video>` on stepenter/leave | `data-media-autoplay`, `-autopause`, `-autostop` |
| `mobile` | Detects mobile UA, marks `.prev`/`.next` | Always on; use CSS to opt in |
| `mouse-timeout` | `body.impress-mouse-timeout` after 3s idle | Always on |
| `navigation` | Keyboard + click navigation | Always on |
| `navigation-ui` | Renders ◀ / select / ▶ controls | `<div id="impress-toolbar">` |
| `progress` | Progress bar and "n/N" counter | `<div class="impress-progressbar"><div></div></div>` |
| `rel` | Relative coordinates; values inherit from previous step | Pre-init; always on. Use `data-rel-x/y/z`, `data-rel-to` |
| `resize` | Re-runs scale calc on window resize | Always on |
| `skip` | `<div class="step skip">` is skipped by next/prev | Add `skip` class |
| `stop` | `<div class="step stop">` disables next (no wrap) | Add `stop` class |
| `substep` | In-step reveals (see §3.2) | Add `.substep` to children |
| `toolbar` | Generic chrome bar for plugin widgets | `<div id="impress-toolbar"></div>` |
| `touch` | Swipe/edge-tap nav | Always on for touch devices |

### 4.2 Extras (not bundled)

Loaded via separate `<script>` tags and discovered by the `extras` plugin:
- `highlight` — highlight.js
- `mermaid` — mermaid.js
- `markdown` — Markdown-to-HTML conversion
- `mathjax` — LaTeX math

### 4.3 Gotchas (consolidated)

1. **No 3D = no presentation.** Author fallback under `.impress-not-supported`.
2. **`data-z` inherits from prior step** (rel plugin). Always be explicit when mixing 2D and 3D.
3. **Steps are 0-size divs.** No `%` widths.
4. **Overflow trap.** `transform` on a step creates a new stacking context — `position: fixed` inside won't be viewport-fixed.
5. **`id="impress"` is the default root id.**
6. **Text blur after rotation/scale.** Whole-degree rotations + `backface-visibility: hidden` help.
7. **Downscale aliasing** on viewports smaller than `data-width × data-height`. Author near your typical viewport.
8. **`em` vs `px`** is moot under CSS scaling — pick what's easier.
9. **Many high-res slides hurt performance.** Lazy-load images, prefer SVG, avoid box-shadow on animated elements.
10. **Cross-step z-index doesn't work.** Use `data-z` on the step itself.
11. **`<a href="#step-id">` triggers goto()** — capture-phase + stopImmediatePropagation to prevent.
12. **Hash routing is on by default.** `window.location.hash = "#/step-id"` on stepenter; `hashchange` triggers `goto()`. External code that toggles hashes will navigate.
13. **`impress:stepenter` is delayed** by transition duration. Use `stepleave` for immediate feedback.
14. **Tab key is hijacked** by navigation.

### 4.4 Accessibility

Keyboard nav is supported, but:
- No ARIA out of the box; steps are plain `<div>`s.
- Past/future steps remain in the DOM and on-screen (just translated off-camera), so screen readers may read everything up front.
- Suggested: add `aria-hidden="true"` to `.future`/`.past` via a custom `impress:stepenter`/`stepleave` listener; add `role="region"` + `aria-labelledby` per step.

### 4.5 Ecosystem

- **Active maintainer:** Henrik Ingo (@henrikingo).
- **Impressionist** (https://github.com/henrikingo/impressionist) — 3D GUI editor by the maintainer; lets you place steps visually.
- **impress-extras** — sibling repo for optional extras plugins.
- **Reveal.js comparison:** Reveal is much more popular (~70k vs ~38k stars) and uses a 2D grid of slides. Impress wins when the spatial arrangement is the message — which is exactly your A/I deck's hook.

---

## 5. How Draft 006 actually uses impress.js — verified

A few specifics from `anticon-talk-draft-006.html` that are worth knowing while editing:

**Loaded version**
- `<script src="https://cdn.jsdelivr.net/gh/impress/impress.js@2.0.0/js/impress.js">` (line 981)
- This is the v2.0.0 bundled build, including all bundled plugins listed in §4.1 — autoplay, navigation, substep, rel, etc.

**Root configuration** (line 749)
```html
<div id="impress"
     data-width="1920"
     data-height="1080"
     data-perspective="1000"
     data-transition-duration="1000"
     data-min-scale="0"
     data-max-scale="20">
```
- `data-max-scale="20"` is the load-bearing one — v2.0.0's default is `3`, which would clip your final reveal. The custom 20 lets the camera zoom out hard enough to reveal the A I composition. **Don't lower this without re-checking the reveal.**

**Spatial layout (world coords used in the deck)**
- Slides 1–10 (the "A") span roughly `x ∈ [0, 10500]`, `y ∈ [0, 12000]`.
- Slides 11–16 (the "I") are aligned at `x=14000`, `y ∈ [0..12000]`.
- The final reveal is at `data-x="61020" data-y="33480" data-scale="70"` with `data-transition-duration="4000"` — the camera centers far outside the content bbox at 70× zoom-out, producing the "now you see the letters" reveal. Math checks out: viewport at scale 70 spans ≈ 134k × 75k px, which more than encloses the actual letter bbox.
- A subslide at `data-x="0" data-y="12000" data-scale="0.3"` (line 763) is used for an early visual beat — `data-scale="0.3"` zooms the camera in 3.3× so the subslide reads "smaller" by sitting closer.

**Custom substep handler** (lines 994–1025)
- Uses `class="substep"` — the same class the **bundled** substep plugin operates on.
- The custom handler captures `keydown` in the **capture phase** with `stopImmediatePropagation()` + `preventDefault()`. This stops the key event before impress.js's navigation plugin sees it, so `impress().next()` is never called while substeps are unrevealed — which means the bundled substep plugin's preStepLeave hook never gets a chance to act. **Result: the two systems happen to be compatible**, because by the time the custom handler lets the key event through (all substeps revealed), every `.substep` already has `.substep-visible`, and the bundled plugin sees nothing left to reveal.
- The custom handler doesn't add `.substep-active`. If you later want a "most recent reveal" highlight, either add that class manually or switch to the bundled plugin entirely.
- If you want to start using `data-substep-order` for reveal ordering, you'd need to either replace the custom handler with the bundled one, or extend the custom handler to read that attribute.

**Things to be careful about while editing**
- Adding new slides — remember `rel` plugin inheritance: omitting `data-x/y/z` will inherit from the previous step, which can pull a new slide into the wrong place. Always be explicit.
- Per-step `data-transition-duration` — Slide 11 uses `1500` (line 879), reveal uses `4000` (line 964). Be deliberate.
- Hash routing — impress writes `#/step-id` on every stepenter. External JS that touches `location.hash` will navigate.
- Rotated/scaled text on extreme scales (the A-I reveal at scale 70) — the reveal text won't be readable from inside the reveal step itself; it's readable because the camera lands at scale 70, not because the text is huge. Worth a screenshot check after any change.

---

## Sources

- [impress.js repository](https://github.com/impress/impress.js)
- [README.md (master)](https://github.com/impress/impress.js/blob/master/README.md)
- [DOCUMENTATION.md (master)](https://github.com/impress/impress.js/blob/master/DOCUMENTATION.md)
- [GettingStarted.md (master)](https://github.com/impress/impress.js/blob/master/GettingStarted.md)
- [src/impress.js (core)](https://github.com/impress/impress.js/blob/master/src/impress.js)
- [js/impress.js (bundle)](https://github.com/impress/impress.js/blob/master/js/impress.js)
- [src/plugins/README.md](https://github.com/impress/impress.js/blob/master/src/plugins/README.md)
- [v2.0.0 release notes](https://github.com/impress/impress.js/releases/tag/v2.0.0)
- [v1.1.0 release notes](https://github.com/impress/impress.js/releases/tag/1.1.0)
- Plugin READMEs: [autoplay](https://github.com/impress/impress.js/blob/master/src/plugins/autoplay/README.md), [blackout](https://github.com/impress/impress.js/blob/master/src/plugins/blackout/README.md), [bookmark](https://github.com/impress/impress.js/blob/master/src/plugins/bookmark/README.md), [extras](https://github.com/impress/impress.js/blob/master/src/plugins/extras/README.md), [form](https://github.com/impress/impress.js/blob/master/src/plugins/form/README.md), [fullscreen](https://github.com/impress/impress.js/blob/master/src/plugins/fullscreen/README.md), [goto](https://github.com/impress/impress.js/blob/master/src/plugins/goto/README.md), [help](https://github.com/impress/impress.js/blob/master/src/plugins/help/README.md), [impressConsole](https://github.com/impress/impress.js/blob/master/src/plugins/impressConsole/README.md), [media](https://github.com/impress/impress.js/blob/master/src/plugins/media/README.md), [mobile](https://github.com/impress/impress.js/blob/master/src/plugins/mobile/README.md), [mouse-timeout](https://github.com/impress/impress.js/blob/master/src/plugins/mouse-timeout/README.md), [navigation](https://github.com/impress/impress.js/blob/master/src/plugins/navigation/README.md), [navigation-ui](https://github.com/impress/impress.js/blob/master/src/plugins/navigation-ui/README.md), [progress](https://github.com/impress/impress.js/blob/master/src/plugins/progress/README.md), [rel](https://github.com/impress/impress.js/blob/master/src/plugins/rel/README.md), [resize](https://github.com/impress/impress.js/blob/master/src/plugins/resize/README.md), [skip](https://github.com/impress/impress.js/blob/master/src/plugins/skip/README.md), [stop](https://github.com/impress/impress.js/blob/master/src/plugins/stop/README.md), [substep](https://github.com/impress/impress.js/blob/master/src/plugins/substep/README.md), [toolbar](https://github.com/impress/impress.js/blob/master/src/plugins/toolbar/README.md), [touch](https://github.com/impress/impress.js/blob/master/src/plugins/touch/README.md)
- [Impressionist visual editor](https://github.com/henrikingo/impressionist)
- [impress-extras](https://github.com/impress/impress-extras)
- [Issue #609 — scale aliasing on smaller windows](https://github.com/impress/impress.js/issues/609)
- [Issue #378 — em vs px for fonts](https://github.com/impress/impress.js/issues/378)
- [Mozilla bug 1626259 — blurred text on rotation](https://bugzilla.mozilla.org/show_bug.cgi?id=1626259)
- [Mozilla bug 1098275 — font rendering after animation](https://bugzilla.mozilla.org/show_bug.cgi?id=1098275)
- [MDN CSS perspective](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)
