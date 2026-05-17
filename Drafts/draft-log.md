# Draft log

## Draft 001 — anticon-talk-draft-001.html

Created first full HTML draft from `Template/ai-deck-template.html` and `Research/presentation-working-notes.md`.

Changes included:
- Preserved impress.js AI-shaped spatial layout and correct jsDelivr GitHub CDN URL.
- Added 16-slide talk structure plus title, subslides, and final reveal.
- Added draft content for all slides.
- Added visual component styles: cards, diagrams, quote/source treatment, large numbers, image cards.
- Added TradingLab screenshot on Slide 13 from `Assets/trading labs.png`.
- Included source/reference treatment for Theo, Scott Brinker, Salesforce Headless 360, and Zapier SDK/MCP/Workflow API.
- Confirmed final Slide 16 line: “The next skill is not knowing every tool. It is knowing what you need — and how to shape the tools around it.”

Known iteration points:
- Slide 2 currently uses numbers/text, not the landscape image. Could swap in the actual landscape image or use it as a subslide.
- Slide 4/5 may need punchier visual simplification.
- Slide 11 quote/source may need exact source URL in tiny text.
- Slide 14 has many signals; may need pruning visually.
- Final reveal still says “Marketing” from the template; decide whether to keep, change, or remove.

Smoke test:
- Opened draft in browser via `agent-browser`.
- Title loaded correctly.
- `document.body.className` became `impress-supported impress-enabled impress-on-slide-0 ...`, confirming impress.js loaded and fallback was removed.
- Saved title screenshot: `draft-001-title-screenshot.png`.


## Draft 002 — anticon-talk-draft-002.html

Changes from Draft 001:
- Added Scott Brinker / Chiefmartec MarTech landscape screenshot asset to Slide 2.
- Reworked Slide 2 into image + interpretation card instead of two number cards.
- Kept the key line: “Because building was expensive, buying became the default.”

Asset used:
- `Assets/martech-landscape-20211-2025-768x431.jpg`

Smoke test Draft 002:
- Opened directly at `#/slide-2`.
- impress.js loaded correctly: `impress-supported impress-enabled impress-on-slide-2`.
- Saved screenshot: `draft-002-slide-2-screenshot.png`.


## Draft 003 — anticon-talk-draft-003.html

Changes from Draft 002:
- Rebuilt the slide visuals to feel more like individual HTML mini-sites rather than repeated title/card slides.
- Kept content strictly aligned to `Research/presentation-working-notes.md`.
- Slide 9 now uses the documented layered example: existing SaaS/infrastructure → pain layer → custom dashboard/automation/front-end/workflow layer.
- Slide 10 now uses the documented five-feature example: large SaaS → extract five real requirements → focused internal tool.
- Added slide-specific visual systems for feature bloat, cost inversion, decision process, buildable foundation, diagnostic fork, examples, hypertail, custom tools, TradingLab, Excel analogy, and recap.

No new concrete vendors, categories, or confidential details were added beyond the working notes.

Smoke test Draft 003:
- Opened directly at `#/slide-9` and `#/slide-10`.
- impress.js loaded correctly: `impress-supported impress-enabled impress-on-slide-9`.
- Saved screenshots:
  - `draft-003-slide-9-screenshot.png`
  - `draft-003-slide-10-screenshot.png`


## Draft 004 — anticon-talk-draft-004.html

Changes from Draft 003:
- Added a clearer presentation system: visible top titles, less reliance on bottom/footer labels, and more consistent slide numbering.
- Reduced information density on examples 9 and 10.
- Added large screenshot placeholder areas on Slides 9 and 10 so real example screenshots can be dropped in later.
- Kept Slide 9 content aligned to the working notes: good SaaS/infrastructure, bad user layer, build dashboard/front-end/automation/workflow layer on top.
- Kept Slide 10 content aligned to the working notes: large SaaS, only five useful features, extract requirements and build the focused subset.
- Reworked subslides 1.5, 3.5, 7.5, and 10.5 as visual beats instead of title/content slides, preserving the impress.js template flow and spatial direction.
- Simplified several slides so each feels more intentionally designed and less like repeated title/card layouts.

Known next iteration points:
- Replace Slide 9 and Slide 10 screenshot placeholders with real screenshots/assets when available.
- Decide whether to keep the final reveal “Marketing” label from the original template.
- Review projected readability and transition rhythm.

Smoke test Draft 004:
- Opened directly at `#/slide-9`, `#/slide-10`, and `#/slide-1-5`.
- impress.js loaded correctly: `impress-supported impress-enabled impress-on-slide-9`.
- Saved screenshots:
  - `draft-004-slide-9-screenshot.png`
  - `draft-004-slide-10-screenshot.png`
  - `draft-004-subslide-1-5-screenshot.png`


## Draft 005 — anticon-talk-draft-005.html

Approach reset from Draft 004:
- Started again from the original template rather than Draft 004.
- Removed narrative subslides `1.5`, `3.5`, `7.5`, and `10.5`; they were part of the original template drawing, not needed for this talk.
- Preserved the 16-slide working-notes flow across slides 1–16 plus the final reveal.
- Kept slide content close to `Research/presentation-working-notes.md` and avoided adding new concrete claims/vendors/examples.
- Improved design/readability without repeating titles in multiple places.
- Left screenshot placeholder space on Slides 9 and 10 for concrete example assets.
- Kept Slide 13 TradingLab screenshot asset.

Known next iteration points:
- Check whether removing subslides still gives the desired final AI-shape reveal.
- Replace screenshot placeholders for Slides 9 and 10 when real assets are available.
- Decide whether the final reveal should keep or remove the “Marketing” handwritten label.

Smoke test Draft 005:
- Opened directly at `#/slide-9`, `#/slide-10`, and `#/slide-reveal`.
- impress.js loaded correctly: `impress-supported impress-enabled impress-on-slide-9`.
- Confirmed narrative subslide IDs are removed.
- Saved screenshots:
  - `draft-005-slide-9-screenshot.png`
  - `draft-005-slide-10-screenshot.png`
  - `draft-005-reveal-screenshot.png`


## Draft 006 — anticon-talk-draft-006.html

Changes from Draft 005:
- Kept the Draft 005 direction for the first two slides.
- Reworked Slide 11 so the hypertail is shown as micro-apps/tools connected to main SaaS infrastructure, not as abstract bubbles only.
- Reworked Slide 12 into a cleaner “custom tools as a way of working” slide: dashboard, automation, custom interface, workflow agent.
- Reworked Slide 14 so the actual message is SaaS moving toward buildable infrastructure for self-building on top of integrations, using Salesforce Headless 360 / Agentforce and Zapier SDK/MCP/Workflow API as the content of the slide, not just tiny source signals.
- Reworked Slide 15 so “move horizontally” starts from marketing channel lanes and moves into adjacent skills: data, APIs, automation, workflow design.
- Restored final reveal contact/social details from the template and kept the final talk line as an italic quoted side line.

Known next iteration points:
- Review whether Slide 11 and Slide 14 are now too visually similar around platform/infrastructure.
- Decide if Slide 15 should include specific marketing channels shown here: Performance, CRM, Content, Lifecycle, Events.


## Draft 006 patch — restored Draft 003 Slides 1–2

Updated `anticon-talk-draft-006.html` in place:
- Replaced Slide 1 with the Draft 003 MarTech / 2012 / Why / Now design.
- Replaced Slide 2 with the Draft 003 landscape-wrap design and wording.
- Added the required Draft 003 CSS for those two slides into Draft 006.


## Draft 006 patch — feedback pass for slides 7, 11, 14, 15, reveal

Updated `anticon-talk-draft-006.html` in place:
- Slide 7 simplified around one communication goal: tool as buildable foundation.
- Slide 11 restored a tail-like bubble composition while keeping SaaS infrastructure as the head of the tail.
- Slide 14 redesigned like a website/browser with Salesforce and Zapier quote cards.
- Slide 15 redesigned as horizontal rows: marketing channel lanes → AI bridge → adjacent skills.
- Reveal updated with larger “Thank you” and contact/social details positioned bottom-right.

## Draft 006 patch — reveal alignment hotfix

Updated `anticon-talk-draft-006.html` in place:
- Centered the main quote + Thank you panel.
- Made “Thank you” larger.
- Moved contact/social block to bottom-right using absolute positioning inside the reveal slide, not fixed positioning.
- Added screenshot: `draft-006-reveal-alignment-hotfix-screenshot.png`.

## Draft 006 patch — final reveal layout fix

Updated `anticon-talk-draft-006.html` in place:
- Rebuilt reveal markup with separate `closing-layout` and `contact-corner` blocks.
- Prevented contact details from positioning relative to the thank-you panel.
- Contact/social block now aligns bottom-right.
- Thank-you and quote now align as a two-column center composition.
- Screenshot: `draft-006-reveal-final-layout-fix.png`.

## Draft 006 patch — reveal absolute layout correction

Updated `anticon-talk-draft-006.html` in place after alignment issue:
- Replaced reveal content with absolute-positioned blocks, avoiding template flex/panel conflicts.
- Separated Thank you, quote, and contact blocks.
- Adjusted quote further right to avoid overlap.
- Screenshot: `draft-006-reveal-absolute-final-fix-2.png`.

## Draft 006 patch — reveal user positioning feedback

Updated `anticon-talk-draft-006.html` in place:
- Moved Marketing label back toward original template position (`left: 19%`, larger size).
- Centered and enlarged “Thank you”.
- Moved quote to lower-left.
- Kept contact details bottom-right.
- Screenshot: `draft-006-reveal-user-position-feedback.png`.

## Draft 006 patch — quote lower-left alignment

Updated `anticon-talk-draft-006.html` in place:
- Moved final quote further left and lower, aligned visually with the contact block height.
- Increased quote width so it wraps into fewer lines.
- Screenshot: `draft-006-reveal-quote-lower-left.png`.

## Draft 006 patch — PostHog reference on Slide 14

Updated `anticon-talk-draft-006.html` in place:
- Added PostHog as a third quote/reference card on Slide 14.
- Quote used: “We think PostHog's future is headless.”
- Supporting note: MCP as a gateway for agents; dashboards created by agents via PostHog AI, MCP, API or onboarding wizard.
- Source: https://www.linkedin.com/pulse/posthogs-next-chapter-james-hawkins-l5mce/
- Screenshot: `draft-006-slide-14-posthog.png`.

## Draft 006 patch — Slide 15 website redesign

Updated `anticon-talk-draft-006.html` in place:
- Rebuilt Slide 15 as a browser/app-style interface instead of a traditional slide diagram.
- Left sidebar: marketing channel lanes.
- Main panel: “Use AI to move horizontally.”
- Right panel: adjacent skills — data, APIs, automation, workflow design.
- Screenshot: `draft-006-slide-15-website-redesign.png`.

## Draft 006 patch — Slide 15 web-section redesign

Updated `anticon-talk-draft-006.html` in place:
- Replaced literal browser/app UI with a website-inspired section/card design.
- All content now fits inside frame.
- Message: move from channel expertise to workflow building via AI.
- Screenshot: `draft-006-slide-15-web-section-redesign.png`.

## Archive — 2026-05-01

Archived previous drafts and screenshots into:

`Drafts/archive-2026-05-01-before-draft-006/`

Active files left in `Drafts/`:
- `anticon-talk-draft-006.html`
- `draft-log.md`

Use Draft 006 as the base for tomorrow's iterations.


## Draft 006 explorations — 2026-05-12

Three radically different design variants forked from Draft 006 to pick a direction. Same locked constraints across all three: color palette, `data-x/y/z/scale/rotate` spatial composition, font stack (Fraunces / Manrope / JetBrains Mono / Caveat), impress.js v2.0.0 plumbing, custom substep handler.

- `anticon-talk-draft-006-a.html` — **Editorial**. New-Yorker-style magazine: huge Fraunces display headlines with italic emphasis on key words, hairline rules in accent colors, generous whitespace, pull-quotes with hanging punctuation, single dominant element per slide. No cards, no shadows, no rounded corners.
- `anticon-talk-draft-006-b.html` — **Brutalist terminal**. JetBrains Mono dominant, ASCII box-drawing decoration, `$ ./slide-NN.md` prompts upper-left of every slide, status bar at the bottom, blinking accent caret on headlines, syntax-highlight-style colored keywords. Content reimagined as terminal artifacts: vim splits, `grep`/`wc` output, ASCII trees, `git diff` panes, `man tools(1)` page, three tmux-pane quote sessions, `[✓]/[▸]` checklist, figlet "THANK YOU".
- `anticon-talk-draft-006-c.html` — **Hand-drawn notebook**. Caveat-driven handwriting for headlines and annotations, faint dot-grid paper background, slight rotations on major elements, SVG hand-drawn arrows + scribbled circles + marker underlines, Post-it-style tilted quote cards on slide 14, sketched pyramid on slide 7, marginalia.

Plus a comprehensive `impress-js-reference.md` covering API, data attributes, plugins, gotchas, plus a §5 documenting how Draft 006 specifically uses impress.js (v2.0.0 from jsDelivr, `data-max-scale="20"`, reveal at `data-scale="70"`, custom substep handler interaction with bundled plugin).


## Draft 007 — anticon-talk-draft-007.html — 2026-05-16

Direction locked in: **Hand-drawn notebook** (006-c). Promoted to Draft 007 as the working version.

First Playwright-driven screenshot pass through all 18 slides identified:

Critical layout issues (deferred):
- Slide-reveal: `.marketing-label`, `.final-thanks`, `.final-quote-abs`, `.contact-abs` all overlap; layout needs a rebuild.
- Slide 7: buildable-foundation pyramid layers extend off the right edge (`.pyr-layer:nth-child(N)` width + margin-left overflow).
- Slide 13: slide footer collides with the bottom-left `.trading-annot`.

Sizing issues (deferred):
- Slides 6, 11, 12, 14, 15, 16 — content underfills the 1920×1080 canvas; inner containers don't span the full slide.

General (deferred):
- Hand-drawn SVG decorations on most slides are not well-positioned; needs an editorial pass.

Added tooling:
- `capture-deck.js` — Playwright script that drives `impress().goto()` for every slide and screenshots each at 1920×1080. Self-contained; uses a `keydown` blocker to prevent spurious advances and a 1.5s transition so impress.js fires `stepenter` and CSS enter-animations complete before capture. Reveal slide gets a 4s duration to match its `data-transition-duration`.


## Cleanup — 2026-05-16

Archived the 006 explorations into:

`Drafts/archive-2026-05-16-explorations/`

Removed `start-server.bat` (no longer needed — Playwright drives the deck via `file://` directly) and the intermediate `screenshots-007/` directory (regenerable via `capture-deck.js`).

Active files left in `Drafts/`:
- `anticon-talk-draft-007.html` — the working deck
- `capture-deck.js` — Playwright screenshot tool
- `CLAUDE.md` — orientation for future sessions
- `impress-js-reference.md` — impress.js v2.0.0 reference
- `draft-log.md` — this file

Use Draft 007 as the base for the next iteration. Open issues are listed in `CLAUDE.md` under "Known open issues".

