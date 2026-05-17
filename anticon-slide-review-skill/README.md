# anticon-slide-review skill

The Claude Code skill used to build and iterate on this deck. See [`SKILL.md`](./SKILL.md) for the full skill content.

## What it is

A [Claude Code skill](https://docs.claude.com/en/docs/claude-code/skills) that turns slide review into a structured, repeatable ritual:

- One slide at a time, four labelled sections per pass (content summary, intent from working notes, design suggestions, awaiting feedback).
- Cross-references the locked design constraints in `Drafts/CLAUDE.md` and the authored intent in `Research/presentation-working-notes.md` before suggesting changes.
- After every code change, screenshots the slide with Playwright and spawns a sub-agent to give an outside-eye critique of the render.

The full workflow is documented inside `SKILL.md`.

## Install

To use the skill yourself in Claude Code:

**Per-project (recommended for this repo):**

```bash
mkdir -p .claude/skills
cp -r anticon-slide-review-skill .claude/skills/anticon-slide-review
```

Then open Claude Code in the repo root. The skill activates when you say *"let's review the deck"*, *"next slide"*, or similar.

**Globally (across all your projects):**

On macOS / Linux:

```bash
mkdir -p ~/.claude/skills
cp -r anticon-slide-review-skill ~/.claude/skills/anticon-slide-review
```

On Windows (PowerShell):

```powershell
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills" | Out-Null
Copy-Item anticon-slide-review-skill "$env:USERPROFILE\.claude\skills\anticon-slide-review" -Recurse
```

## Adapt it

The skill is written around the specific files in this repo (`Drafts/anticon-talk-draft-007.html`, `Research/presentation-working-notes.md`, etc.). To adapt it to your own deck, edit `SKILL.md` and swap those paths for your own deck file, working notes, screenshot folder, and design-constraints doc.

The structural ideas, four-section per-slide ritual, authored-intent loaded before design feedback, sub-agent critique after every screenshot, transfer cleanly to any deck.
