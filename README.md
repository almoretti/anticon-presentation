# Code is Cheap, Requirements are Expensive

An [impress.js](https://impress.js.org/) presentation for **Anticon 2026** by Alessandro Moretti.

> **Code is Cheap, Requirements are Expensive: The Shift from SaaS to Self-Building in MarTech**
>
> AI is changing the core skill set behind marketing technology. This talk argues that modern MarTech leadership is shifting from buying tools to designing systems, and walks through what that shift looks like in practice: how to think build vs. buy in an AI-driven landscape, how to define better requirements, and a practical framework to rethink your stack strategy.

## Watch it

The deck is a single-file HTML presentation driven by camera transforms (no slides flipping, the camera flies through a 2D plane). It is designed to render at **1920×1080**.

To run locally:

```bash
# from the repo root
npx http-server Drafts -p 8000
# then open http://localhost:8000/anticon-talk-draft-007.html
```

Or just open `Drafts/anticon-talk-draft-007.html` directly in a modern browser. Arrow keys / space advance; `Esc` to overview.

## Tech stack

| Layer | Tool / choice |
|---|---|
| Presentation engine | [**impress.js** v2.0.0](https://github.com/impress/impress.js) (CDN, pinned) |
| Display fonts | [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif), [Caveat](https://fonts.google.com/specimen/Caveat) (handwriting), [Manrope](https://fonts.google.com/specimen/Manrope) (body), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (rare code) |
| Visual direction | Hand-drawn notebook: cream / cool-grey paper backgrounds, dot-grid / lined / graph-paper textures, tilted Post-its as content containers, sketchy SVG annotations |
| Color palette | `--bg-slide-A` cream, `--bg-slide-I` cool-grey, `--accent-warm` rust, `--accent-cool` deep blue. Two-section A/I split, the camera zooms out at the end of the deck to reveal the letters **A** and **I** spelled by the slides' world coordinates |
| Screenshot capture | [Playwright](https://playwright.dev/) (Chromium), see `Drafts/capture-deck.js` |
| Image post-processing | [sharp](https://sharp.pixelplumbing.com/) (`Drafts/remove-green-background.js`) |
| Authoring style | Single-file HTML (one `<style>`, one `<script>`, all `.step` divs inline) for portability |

### Why impress.js (and not Reveal / a slide tool)?

impress.js controls the **camera**, not slide-by-slide content. Every `.step` is a positioned element in a shared 2D/3D plane (`data-x`, `data-y`, `data-z`, `data-scale`, `data-rotate`). Advancing the deck pans/zooms the viewport to the next step. This makes one specific thing trivial that is hard in normal slide tools: the **final reveal**, where the camera pulls back to scale `70` and the previously-visited slides resolve into the letters **A** and **I** in world space. That single visual is the spine of the deck; the rest of the talk is structured around getting there.

### Why a single-file deck?

The whole presentation lives in `Drafts/anticon-talk-draft-007.html`. Images from `Assets/` are referenced by relative path. The intent is that the deck can be dropped onto any static host (GitHub Pages, a USB stick, an offline laptop at the conference) and just work, with no build step.

## Repository layout

```
.
├── Drafts/
│   ├── anticon-talk-draft-007.html   ← the deck
│   ├── capture-deck.js               ← Playwright screenshot driver
│   ├── screenshot-slide0.js          ← single-slide screenshot helper
│   ├── remove-green-background.js    ← asset cleanup tool
│   ├── package.json                  ← Playwright + sharp deps
│   ├── CLAUDE.md                     ← locked design constraints + open issues
│   ├── draft-log.md                  ← history of every draft and patch
│   ├── impress-js-reference.md       ← API reference + how this deck uses impress.js
│   └── docs/
│       └── gotchas.md                ← hard-won lessons (CSS, SVG, Playwright)
├── Assets/                           ← images, post-it PNGs, hand-drawn SVGs
├── Research/                         ← talk outline and working notes
├── Template/
│   └── ai-deck-template.html         ← minimal impress.js template
└── .claude/skills/anticon-slide-review/
    └── SKILL.md                      ← Claude Code skill used to build the deck
```

## The `anticon-slide-review` skill

This deck was built iteratively with [Claude Code](https://claude.com/claude-code) using a custom **Skill** that turns slide review into a structured ritual. The skill is included in this repo at `.claude/skills/anticon-slide-review/SKILL.md` so anyone using Claude Code in this directory automatically gets the workflow.

What it does:

1. **One slide at a time.** No batching, no jumping ahead. Each pass produces exactly four labelled sections in a single message:
   1. **Content summary**, what's literally on the slide right now.
   2. **Intent**, sourced from `Research/presentation-working-notes.md`, not reverse-engineered from the render.
   3. **Design suggestions**, 2–4 concrete bullets against the rendered screenshot, cross-checked against the locked constraints in `CLAUDE.md`.
   4. **Awaiting feedback**, and then the assistant stops.
2. **Agent-critique loop after every code change.** After applying an edit, the skill re-renders the slide with `capture-deck.js`, then spawns a sub-agent to give a brutally honest critique of the screenshot. The sub-agent hasn't been arguing about the design, so it sees the image cold. Its feedback is treated as **signal, not directive** (one of the lessons baked into the skill came from blindly applying a sub-agent suggestion that made a slide worse).
3. **Locked-constraint awareness.** The palette, fontstack, and camera coordinates are documented as load-bearing in `CLAUDE.md` and the skill refuses to silently rewrite them.

The skill is invoked simply by saying something like *"let's review the deck"* or *"next slide"* inside this directory.

## Working with the deck

If you want to iterate on this deck yourself:

```bash
cd Drafts
npm install                        # one-time
npx playwright install chromium    # one-time
node capture-deck.js               # screenshots every slide → screenshots-draft-007/
node capture-deck.js --slide 7     # just slide 7
node capture-deck.js --slide reveal
```

Editing the deck itself: open `Drafts/anticon-talk-draft-007.html` in any editor. Each slide is a `<div class="step" id="slide-N">…</div>` block; inside each step you have plain HTML+CSS (flexbox, grid, transforms, the works). impress.js only governs the camera between steps.

Before making non-trivial changes, read `Drafts/docs/gotchas.md`. It documents the CSS / SVG / Playwright traps that ate days of work, percentage padding on absolute elements resolving against the wrong containing block, post-it PNGs with non-uniform tape positions, Playwright settle-time gotchas, and so on.

## Credits

- Presentation engine: [impress.js](https://github.com/impress/impress.js) by Bartek Szopka and contributors.
- Fonts: Fraunces, Caveat, Manrope, JetBrains Mono via [Google Fonts](https://fonts.google.com/).
- State of MarTech 2025 (referenced on the hypertail slide): Scott Brinker & Frans Riemersma.
- Built with [Claude Code](https://claude.com/claude-code) using the `anticon-slide-review` skill checked into this repo.

## License

The presentation content (text, narrative, slide design choices) is © Alessandro Moretti, all rights reserved. The accompanying tooling (`capture-deck.js`, `remove-green-background.js`, the `anticon-slide-review` skill, this README) is released under the MIT License, you can lift any of it for your own decks.
