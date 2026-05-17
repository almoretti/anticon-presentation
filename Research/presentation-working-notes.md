# Presentation — Working Notes

These notes capture the presentation decisions and learning from the discussion so far. They are not final slide copy. They are the current shared understanding of Alessandro's full presentation.

## Official session framing

**Session title:**

Code is Cheap, Requirements are Expensive: The Shift from SaaS to Self-Building in MarTech

**Session description:**

AI is changing the core skill set behind marketing technology. Alessandro Moretti, Head of Marketing Technology at Quantum, explains why modern MarTech leadership is shifting from buying tools to designing systems. Learn how to think build vs. buy in an AI-driven landscape, define better requirements, and apply a practical framework to rethink your stack strategy.

## Overall framing decision

This presentation should be framed as Alessandro's **personal experience and personal shift in mentality**, not as a generic industry essay and not as a fully finished universal framework.

The talk is not primarily:

> Here is the definitive future of SaaS.

The talk is closer to:

> Here is how my own MarTech mindset is shifting: from searching for another SaaS, to defining requirements and considering what can be built on top of the tools we already have.

Important tone:

> This is not a finished framework yet. It is a direction of travel and a shift in mentality that I am personally experiencing.

This caveat should be introduced early, in the opening speaker notes, not as a separate slide.

## Core personal transformation

The transformation is mainly **A + B** from the earlier options:

- Alessandro stopped looking for the perfect SaaS tool.
- Alessandro stopped waiting for SaaS vendors to build every missing requirement.

The future/direction he sees is:

- SaaS increasingly becomes infrastructure people can build on top of.
- The decision becomes: does this SaaS/tool expose the right infrastructure, API, data, documentation, or integration layer to support our requirements?

This is the end-goal idea, not the starting claim.

## Important nuance on SaaS

The presentation should not claim that SaaS literally disappears.

Better framing:

> SaaS is not dead; the way we use SaaS is shifting.

Or:

> The old SaaS model — buying finished tools and waiting for vendors to meet your requirements — is being challenged by AI-assisted self-building on top of SaaS infrastructure.

The final direction should suggest that SaaS companies may shift toward supporting infrastructure, APIs, data access, agentic/customizable layers, and build-on-top use cases.

## What “self-building” means right now

Do **not** over-define self-building too early.

Self-building is still emerging and can mean multiple things:

- Individual marketers building small tools with AI.
- Marketing teams building internal tools/workflows on top of existing platforms.
- SaaS vendors exposing agentic/customizable layers so users can build or adapt functionality.
- Tools like Salesforce Agentforce / Agent 360-style direction may be examples of vendors pushing this direction.

Avoid presenting self-building as a clean, fully-defined category. Instead:

> Self-building is an emerging behaviour and a direction of travel.

For Alessandro personally, it means shifting toward:

> Looking more at building, self-building, and training people to build on top of SaaS, instead of immediately searching for a new SaaS.

## The old/default MarTech process

This format was liked by the user and should be preserved as a possible slide/section format.

**Old/default MarTech process:**

1. We have a new requirement.
2. Can the current SaaS do it?
3. Can the vendor change/build it?
4. If not, do we need another tool?
5. Run RFI / compare vendors.
6. Consider migration.
7. Accept cost, disruption, implementation, and compromise.

This reflects the traditional pattern: a missing requirement often triggers vendor requests, workaround conversations, RFI processes, tool comparison, migration consideration, and compromise.

## The new personal direction

This format was also liked and should be preserved.

**New personal direction:**

1. We have a new requirement.
2. Can the current SaaS already do it?
3. If not, does the current SaaS expose the right infrastructure/data/API?
4. Can we build the missing requirement alongside the current stack?
5. Only migrate/buy if:
   - current platform is too expensive
   - infrastructure is weak
   - access/API/data model is bad
   - another platform gives a better foundation
   - the requirement is genuinely new and cannot be layered on top

Key principle:

> Build becomes a serious option earlier in the decision tree.

Or:

> Migration should not happen just because one requirement is missing; first ask whether the missing requirement can be built alongside the current stack.

## Placement of old/new decision process slide

Chosen option: **Option B**.

The old/new process should appear **after** the “Code is cheap, requirements are expensive” slide.

Reason:

- First explain the SaaS problem and the economic inversion.
- Then show how Alessandro's decision process is changing.

Likely first-section flow:

1. Personal intro / why this is Alessandro's lens
2. MarTech explosion
3. Old Build vs Buy model
4. SaaS feature problem / buying everyone else’s requirements
5. Code is cheap, requirements are expensive
6. My decision process is changing
7. SaaS as infrastructure / self-building direction
8. Examples / proof points

## Slide 1 — Personal intro / speaker notes

Slide 1 should include the official title and establish a personal lens.

Possible slide content:

**Code is Cheap, Requirements are Expensive**  
**The Shift from SaaS to Self-Building in MarTech**

Possible small subtitle:

**A personal shift in how I think about marketing technology**

### Speaker-note material from Alessandro

Alessandro wants to say:

- He has been working in MarTech since its inception.
- He fell in love with the concept/framework Scott Brinker put into play when he first saw it in a presentation in 2012.
- Since then he shifted from performance marketing into trying to drive the concept of marketing technology.
- The key interest was the intersection between marketing and technology.
- The goal was facilitating and driving marketing objectives using technology.
- He has seen the first shift: the growth of marketing technologies and marketing becoming dependent on technology.
- Now he sees another shift starting.
- He is starting to build in his head a new framework / new way of actioning different questions.
- This is not yet a finished framework.
- It is his personal experience in how he is working toward this change.
- It is about what he is doing differently compared with how he worked for the last 14 years.

### Draft speaker note synthesized from the discussion

> I’ve been working in MarTech almost since its inception.
>
> I remember seeing Scott Brinker’s MarTech landscape around 2012, and I fell in love with the concept: this intersection between marketing and technology, and the idea that technology could be used deliberately to facilitate and drive marketing objectives.
>
> That changed the direction of my career. I moved from performance marketing into marketing technology, trying to understand how tools, data, integrations, and systems could help marketing teams work better.
>
> Since then, I’ve seen the MarTech landscape grow dramatically. I’ve seen the first big shift: marketing becoming more and more dependent on technology.
>
> And now I think we are entering another shift.
>
> What I’m sharing today is not a finished framework. It is more personal than that. It is the shift I’m going through in how I think about tools, requirements, SaaS, and building.
>
> It is how I am starting to work differently from the way I worked for the last 14 years.

Resolved language decision:

- Alessandro wants to explicitly say **“I fell in love with MarTech.”** This is true to his experience and should stay in the opening.

What he fell in love with was not just the visual landscape or the tools themselves. It was the way MarTech explained a real marketing problem:

- Marketing had lots of money and ambition, but getting anything done took too long.
- Teams started buying many tools, but there was little management or structure around them.
- There needed to be a framework and a role responsible for managing the intersection between marketing and technology.
- That role needed to collect marketing requirements, translate them for technology teams, and make sure they were understood, implemented, and prioritised.

This is important because it connects directly to the current talk thesis: requirements were always central to MarTech, and now AI makes requirements even more important.

## Slide 2 — MarTech evolution

Purpose:

- Show the scale of the MarTech explosion.
- Connect directly from Alessandro's 2012 Scott Brinker memory.
- Set up why “buy” became the default answer to new requirements.

Visual:

- Use asset: `C:\Users\alemo\Desktop\AI Playground\Anticon\Presentation\Assets\martech-landscape-20211-2025-768x431.jpg`
- The image shows the MarTech landscape growing from ~150 tools in 2011 to 15,384 in 2025.

Confirmed key line:

> Because building was expensive, buying became the default.

Core idea:

- The MarTech landscape grew from hundreds of tools to 15,000+ tools.
- This explosion created more and more things to buy.
- Because building was historically expensive, the natural response to a new marketing technology requirement became looking for a tool.
- This supports the transition into the Build vs Buy slide.

Possible title:

> The MarTech explosion made “buy” the default

Speaker-note direction:

> When I first saw this landscape, what struck me was not only the number of tools. It was that marketing had clearly become a technology function.
>
> Over time, the landscape exploded: from hundreds of tools to more than 15,000.
>
> And that explosion shaped the way we worked. If building was expensive, and the market kept giving us more products to buy, then the natural answer to a new requirement became: let’s find the right tool.

## Possible bridge between Slide 2 and Slide 3 — First shift vs second shift

This idea was confirmed as useful.

Core contrast:

### First MarTech shift

MarTech emerged because marketing needed a way to translate business/marketing requirements into technology execution.

- Marketing had budget and ambition, but execution was slow.
- Tools were being bought, but not managed coherently.
- A role/framework was needed at the intersection of marketing and technology.
- That role gathered requirements, translated them for technology, and helped make sure they were understood, prioritised, implemented, and used.

### Current AI shift

AI is changing that translation layer again.

- If code becomes cheaper/easier to generate, the requirement becomes even more important.
- The skill shifts further toward knowing what needs to be built, what data is needed, and how the workflow should operate.
- This creates the bridge into the old Build vs Buy model.

Potential spoken line:

> The first MarTech shift was about managing the intersection between marketing requirements and technology execution. Now AI is changing that intersection again.

Open placement:

- Could be a spoken bridge between Slide 2 and Slide 3.
- Could become its own small slide if the flow needs more clarity.

## Slide 3 — Old Build vs Buy model

Purpose:

- Introduce the traditional MarTech decision model Alessandro operated in.
- Show that Build vs Buy was never a perfectly equal choice.

Confirmed emotional point:

> Build gave you control, but it was expensive. Buy gave you speed, but it came with compromise. So for years, the practical answer was usually buy.

Core idea:

- The old job was often deciding whether to build or buy.
- Build meant custom/control, but high effort.
- Buy meant faster adoption, but generic and compromised.
- Because build was historically expensive, buying usually became the pragmatic/default path.

Possible visual:

Two bars or columns: **Build** vs **Buy**.

Build side:

- Control/custom fit
- Code effort
- Requirements effort
- Maintenance
- Integration
- Slowness / dependency on engineering

Buy side:

- Faster adoption
- Vendor maintained
- But not made specifically for us
- Unused features
- Missing features
- Vendor roadmap dependency

Transition to next slide:

> But buying always came with a hidden cost: you were buying a product shaped by everybody else's requirements too.

## Slide 4 — SaaS feature problem / buying everyone else’s requirements

Purpose:

- Explain why SaaS creates compromise.
- Use Theo’s 50/1000 feature argument, but do not mention Theo verbally because the audience likely will not know him.
- Add the video/source as a small reference at the bottom of the slide.

Confirmed slide title:

> We buy 1,000 features to use 50

Core idea:

> Buying SaaS means buying everyone else’s requirements too.

Possible visual:

A SaaS product with 1,000 features:

- 25 common/core features everyone needs
- 25 features your team/company actually needs
- 950 features built because other customers needed them

Alternative simplified version:

- 1,000 features in the product
- 50 features we actually use
- 950 features shaped by everyone else's needs
- 1 missing feature can still block us

Confirmed visual/punchline to include:

> Are we really migrating for feature #51?

Possible visual structure:

### Current SaaS

- 1,000 features
- 50 useful to us
- 1 missing requirement

↓ vendor requests / workarounds / hacks / RFI / migration pressure

### New SaaS?

- 1,000+ features
- 51 useful to us
- Massive migration

Key absurdity:

> For one extra useful feature, we may consider a huge migration.

Important speaker point:

- SaaS products win by accumulating features.
- But each customer uses only a small subset.
- The issue is not just too many features; it is that the specific missing requirement you need may not be vendor priority.
- The feature we need is often missing.
- That missing feature drives vendor requests, workarounds, hacks, and internal compromises.
- If the pain grows, it can trigger an RFI to fill the gap with another technology.
- In the worst case, one missing feature can push the company to consider migrating to another SaaS that has 51 useful features instead of 50.
- This is the absurdity/pain point: for one extra feature, we may consider a massive migration.

Source handling:

- Do not mention Theo in the spoken presentation.
- Add a small source/reference at the bottom of the slide: Theo / “A letter to tech CEOs” / YouTube, or simply `Source inspiration: Theo, “A letter to tech CEOs”`.

Connection to research:

- Theo’s example: Salesforce-style SaaS can have 1,000 features; a customer may only use 50; the long tail of features creates lock-in because each customer needs a different 50.

Transition from Slide 4 to Slide 5:

Preferred emphasis: AI changes the cost of building the missing feature.

Important nuance:

- AI is not just another tool in the stack.
- AI as a new tool we can use is driving a change in how Alessandro thinks about all tools.
- The point is not simply “AI can code”; the point is that AI changes the economics and mentality around whether a missing requirement must become a vendor request, workaround, RFI, or migration.

Possible transition line:

> But AI changes the cost of building the missing feature.

## Slide 5 — Code is cheap, requirements are expensive

Confirmed title:

> Code is cheap, requirements are expensive

Confirmed subtitle:

> AI changes the cost of feature #51

Purpose:

- Explain the central inversion and why Alessandro’s decision process changes.
- Shift attention from “who will code this?” to “can we explain the requirement clearly enough to build it?”

Core idea from Alessandro:

- AI means you can build a lot of things much more easily if you can explain clearly what you need.
- If you understand what data you need, what information you want, how you want to visualise/use it, and you have basic user knowledge of the workflow, you can describe it in plain English and AI can help build something quickly.
- Tools/examples include Claude Code, Codex, Lovable, and more user-friendly building environments.
- Deployment and enterprise-readiness are still considerations.
- This is not all solved yet.
- But the direction of travel is clear.

Important caveat:

- Do not present this as fully enterprise-ready or as a finished operating model.
- Say as a note/consideration:

> We are all still learning what the right model is, how to govern it, and how to support it.

Main claim:

> Because code is becoming cheaper, we can start to think differently. Requirements become more important.

More specific articulation:

> The work moves earlier. Instead of spending time writing a requirement, handing it to developers, and waiting for someone else to build the functionality or integration, more of our time goes into understanding and explaining exactly what we need. If we can describe feature #51 clearly enough, we may be able to build it ourselves with AI.

Potential plain-English explanation:

> If a requirement is only useful for one person or a small team, it may not justify a migration, a new SaaS contract, or months of vendor negotiation. With AI, that requirement might become something you can build locally or alongside the existing stack.

Confirmed key phrasing for Slide 5:

> The bottleneck moves from building to explaining.

Secondary speaker-note phrasing:

> Our time becomes the requirement.

Meaning:

- The scarce part is not necessarily waiting for someone to write the code.
- The scarce part is knowing what should exist, what data it needs, how it should behave, and how it should fit the workflow.
- Feature #51 becomes personal/customizable enough that the value is in explaining it well and building it for our own need.

## Slide 6 — My decision process is changing

Purpose:

- Show Alessandro’s personal shift in a concrete before/after format.
- Use the old/default process and new personal direction lists above.

Confirmed title direction:

> My MarTech decision process is changing: from vendor search to requirement design

Possible shorter slide title:

> From vendor search to requirement design

Speaker framing should keep it personal:

> This is how my MarTech decision process is changing.

Earlier title options considered:

- **My MarTech decision process is changing**
- **The build option moved earlier**
- **From vendor search to requirement design**

Confirmed column labels:

- **Old default process**
- **New personal direction**

The user liked the numbered format, so keep it.

Important principle:

> The shift is not “never buy SaaS.” The shift is “before I search or migrate, I ask whether the missing requirement can be built on top of the stack we already have.”

## Slide 7 — SaaS as infrastructure / self-building direction

Confirmed title:

> Before buying the next tool, I look for the buildable foundation

Earlier title considered:

> The SaaS shift: from finished product to buildable foundation

Purpose:

- Move from Alessandro’s personal decision process into the future direction.

Core idea:

- Before looking for new tools, Alessandro is starting to look at what can be built on top of the existing MarTech stack.
- When judging new tools, he is starting to prioritise how open/buildable they are: how easily he can access information, data, APIs, and integration points.
- SaaS may shift from being only finished feature-bundles to becoming infrastructure people can build on top of.
- This requires strong APIs, accessible data, documentation, integrations, and potentially agentic/customizable interfaces.

Confirmed main wording direction:

> Before I look at new tools, I start by asking what can be built on top of the stack I already have.

Secondary wording:

> When I judge new tools, I prioritise how open they are: can I access the data, the API, and the information I need to build on top?

Supporting questions:

- Can I access the data?
- Is the API usable?
- Is the documentation clear enough?
- Can I build the workflow/interface I need?
- Can AI help me turn the requirement into the missing layer?

This is a direction of travel, not a finished framework.

Potential connection to Scott Brinker:

- Scott’s future view of MarTech growth can be interpreted not only as more SaaS vendors, but also more self-built/internal/custom tools.
- Growth may come from specific requirements becoming specific internal tools built on top of existing platforms.

## Intermediate slide after Slide 7 — Current foundation thinking

Purpose:

- Explain Alessandro's current thinking when he looks at the MarTech foundation before showing the two examples.
- Bridge the conceptual shift into the two practical branches.

Core decision lens:

When looking at an existing tool in the stack, ask what kind of foundation it is.

### Branch 1 — Deeply embedded, strong foundation

- The tool is deeply embedded in the company.
- Migration would be long, painful, and expensive.
- But the foundation is strong:
  - great API
  - great data
  - great integrations
  - valuable information already inside it
- Direction:

> Build on top of it.

Meaning:

- Do not migrate just because the user layer or missing feature is poor.
- Keep the foundation and build the missing dashboard, workflow, automation, or interface.

### Branch 2 — Barely used, weak fit

- The tool was bought because the company needed a few features.
- It never really found success or adoption.
- It is barely used.
- The team only needs a small number of features from it.
- Direction:

> Extract the useful requirements and build something bespoke.

Meaning:

- Analyse the five features that matter.
- Build something specific to the company/team need.
- Avoid continuing to pay for and customise a large product that is not actually being used.

Confirmed slide title:

> Strong foundation or weak fit?

Relationship to Slide 7:

- Slide 7 is the mindset shift: **Before buying the next tool, I look for the buildable foundation**.
- Slide 8 is the diagnostic lens: **Strong foundation or weak fit?**

Possible framing:

> Is this a strong foundation with a bad layer, or a weak-fit tool with only a few useful features?

## Slide 8 — Examples / proof points

Purpose:

- Show that this is not purely theoretical.
- Use examples after the conceptual arc.
- Keep examples practical and user-led: this is not only about evaluating tools differently, but about actually using/building differently.

Confirmed two practical examples after the introduction/conceptual section:

These are **two separate examples** that come after the first-section introduction/conceptual arc. They should not be forced into the intro slide itself. First explain the shift briefly, then show these two examples.

1. **Remove the painful migration — build what we need on top of a good foundation**
   - The SaaS/tool is good and the infrastructure/API is good.
   - The problem is the user layer: poor UX, poor visualisation, outdated workflows, or missing modern features.
   - There has not been enough vendor time spent on building what Alessandro/the team needs or showing it in the way users need.
   - Instead of migrating away from a good tool, build a better front end / dashboard / automation / user layer on top of the existing infrastructure.
   - Message: remove the painful migration; keep the good foundation and build the missing layer.

2. **Stop overpaying for a huge SaaS — rebuild the five features actually needed**
   - The company spends too much money on a large SaaS.
   - The team only uses a small number of features that really matter.
   - Historically, the response would be to find something cheaper, migrate, or search for another SaaS that fits the needs slightly better.
   - But if the requirements are clear, it may be easier to rebuild the five needed features and integrate them into the current stack.
   - The result can be easier to maintain, easier to use, cheaper, and closer to what users actually need.
   - Message: when the product is mostly unnecessary surface area, build the focused functionality instead of adapting the business around the SaaS.

Important principle from Alessandro:

> If you only need five features from a SaaS, it may be easier to build those five features than onboard and customise a 1,000-feature SaaS around them.

Why this matters:

- Before AI, rebuilding something that already existed sounded irrational because the infrastructure/code effort was too high.
- With AI-assisted building, once the requirements are clear, rebuilding a focused subset can become a realistic option.
- The decision depends on whether the SaaS is a strong foundation or whether it is too much product for the few requirements you actually need.
- Those five features may not be a vendor priority inside a large SaaS, but they can be the only features that matter to your team.
- This reinforces the talk's central point: the value shifts to knowing exactly what is needed.

Earlier possible example/refinement:

- Previous note mentioned an old tool around 25 years old with poor UI but strong API. Clarify whether this is the same as the affiliate/partner tool API dashboard example or a separate example.

Potential broader examples/implications:

3. **CDP/integration implications**
   - Some tools like CDPs became popular partly because they handle many integrations.
   - But if teams can build custom integrations or layers themselves, some CDP-style use cases may become less dependent on waiting for vendor-built integrations.
   - This is not a fully formed claim yet, but a direction worth exploring.

4. **Theo / building block economy**
   - Old SaaS moat: 1,000 features, each customer uses 50, everyone needs a different 50.
   - AI makes it easier to build the missing feature/custom layer.
   - Infrastructure, APIs, CLIs, and open/buildable primitives become more valuable.

## Upskilling message

This should become a key takeaway later in the talk:

- People need to move beyond only plug-and-play visual interfaces.
- They need to learn how to define requirements better.
- They need to understand the data they need, the information they want, and how workflows should operate.
- They need enough understanding of tools, APIs, integrations, and AI-assisted building to express and shape what should be built.
- The goal is not necessarily for every marketer to become a full software engineer.
- The goal is for marketing technology people and advanced marketing users to become better system designers and requirement writers.

Potential wording:

> The new skill is not just knowing which button to press in a SaaS interface. It is knowing how to describe what you need clearly enough that it can be built.

## Claims to avoid or handle carefully

Avoid saying:

- SaaS is literally dead.
- Everyone should build everything.
- This is enterprise-ready today.
- CDPs are definitely redundant.
- AI removes the need for engineering, governance, security, or maintenance.
- This is a finished framework.

Better language:

- SaaS is shifting.
- The way we use SaaS is changing.
- Build becomes an option earlier.
- Requirements become more valuable.
- Infrastructure/API/data access becomes more important.
- We are still learning the right model.
- This is a personal shift and direction of travel.

## Open questions still to resolve

1. What is the exact visual for the MarTech evolution slide?
3. Should Slide 4 use Theo’s 50/1000 example directly, or more generally refer to feature bloat?
4. What exact title should be used for Slide 6: “My decision process is changing,” “The build option moved earlier,” or another phrase?
5. How much detail should go into the CDP/integration implication?
6. Which examples belong in section one versus section two?
7. What is the precise closing line of the first section before moving into examples?

## Next section direction — Custom / personal tools, not only MarTech

Important correction from Alessandro:

- Do not make the next section only about MarTech.
- Keep it as a personal view and a broader example of the direction of travel.
- MarTech is the context of the talk, but the custom-tool shift can be shown through personal workflows and non-marketing examples too.

## Hypertail / custom tools slide

Need a slide on Scott Brinker's **hypertail** idea.

Purpose:

- Show that the technology landscape may grow beyond the 15,000-vendor MarTech map.
- The next growth is potentially toward millions/billions of custom tools, workflows, internal apps, and personal agents.
- This should use a direct quote or source detail from Scott Brinker's article/research if possible.

Known research already captured:

- MarTech grew from ~8,000 to 15,000+ tools.
- “Hypertail” = massive long tail of niche/custom tools.
- Prediction of billions of custom apps built by non-developers.
- “Vibe coding” = building apps through natural language.
- Big Ops = operational challenge of managing all these tools.

Need to verify exact quote/wording from source before final slide.

Possible slide title:

> From 15,000 tools to the hypertail

Possible message:

> The next explosion may not be only more SaaS vendors. It may be millions of small tools, workflows, dashboards, automations, and agents built for very specific needs.

## Use cases / examples of custom tools with AI

Need to show what this looks like in practice, using examples beyond marketing.

Possible examples:

- People using AI tools like Claude Code / Codex / Lovable / similar builder tools to build their own dashboards.
- Custom automations.
- Personal agents.
- Personal scheduling workflows.
- Small workflows that connect data and API endpoints.
- Agentic automations built on top of available APIs and data.

## Personal non-marketing example — trading agent

Alessandro wants to use a personal example that is not directly marketing-related:

- He is building an agent for trading.
- Reference repo: https://github.com/almoretti/tradinglab
- This could be shown as a screenshot of the repo; asset to be added later.
- The point is not trading itself. The point is the pattern:
  - Give an agent access to data and API endpoints.
  - Talk to it every day.
  - Use it to support decisions.
  - Optimise a strategy over time.
  - Discuss how it is making decisions.
  - Refine the decision-making process.
  - Move toward a self-healing / self-improving workflow.

Possible message:

> This is not a marketing example, but it shows the behaviour: a personal tool/agent built around my own workflow, my own data, my own decisions, and my own optimisation loop.

Important caveat:

- The correlation between marketing and trading is not one-to-one.
- Use it as a personal illustration of the broader custom-tool direction, not as proof that marketing and trading are the same.

## No-code → low-code → agentic automation

Potential framing for the evolution of personal/custom tool building:

1. No-code: build with visual blocks and predefined components.
2. Low-code: extend with scripts/configuration.
3. Agentic automation: describe requirements and let AI help build workflows, integrations, agents, or interfaces.

Possible examples/tools to verify:

- Salesforce / Agentforce 360 or related “headless/agentic” Salesforce direction. Need to verify exact name before using; user mentioned “sales for headless360,” likely needs confirmation.
- Zapier SDK / Zapier developer platform / agentic automation direction.
- Claude Code, Codex, Lovable, and similar tools.

Potential point:

> The next layer is not just visual automation. It is people creating their own small agents and workflows around specific data, APIs, and personal/team tasks.

## Suggested placement after first section

After the current first-section/conceptual arc and two examples, move into:

1. Hypertail slide — from 15,000 tools to millions/billions of custom tools.
2. What this looks like — AI-built dashboards, workflows, automations, agents.
3. Personal example — trading agent / TradingLab repo screenshot.
4. Evolution slide — no-code → low-code → agentic automation.
5. Implication — the skill becomes defining requirements, data, workflow, and decision logic.

## Updated full presentation flow as of latest discussion

Current planned flow is around 16 slides.

### Section 1 — Personal shift in MarTech thinking

1. **Title / personal intro**
   - Official title: `Code is Cheap, Requirements are Expensive: The Shift from SaaS to Self-Building in MarTech`.
   - Personal framing: Alessandro fell in love with MarTech because it explained the problem of translating marketing requirements into technology execution.
   - This is not a finished universal framework; it is his personal shift in how he is starting to work and think.

2. **MarTech explosion**
   - Use Scott Brinker landscape evolution image.
   - Key line: `Because building was expensive, buying became the default.`

3. **Old Build vs Buy**
   - Build gave control but was expensive.
   - Buy gave speed but came with compromise.

4. **We buy 1,000 features to use 50**
   - Use Theo-inspired model with source/reference at bottom, but do not mention Theo verbally.
   - Include punchline: `Are we really migrating for feature #51?`

5. **Code is cheap, requirements are expensive**
   - Subtitle: `AI changes the cost of feature #51`.
   - Key line: `The bottleneck moves from building to explaining.`

6. **My MarTech decision process is changing: from vendor search to requirement design**
   - Two columns:
     - Old default process
     - New personal direction

7. **Before buying the next tool, I look for the buildable foundation**
   - Main idea: before searching for a new SaaS, look at what can be built on top of the existing stack.
   - When judging new tools, prioritise openness/buildability: data access, APIs, documentation, integrations.

8. **Strong foundation or weak fit?**
   - Diagnostic lens:
     - Strong foundation, bad layer → build on top.
     - Weak fit, only a few useful features → build the subset.

### Section 2 — Practical examples

9. **Example 1 — Remove the painful migration**
   - Good SaaS/infrastructure, bad user layer.
   - Build dashboard/front-end/automation on top instead of migrating.

10. **Example 2 — Stop overpaying for a huge SaaS**
   - Only need five features from a large SaaS.
   - Rebuild the useful subset instead of searching, migrating, or customising an oversized product.

### Section 3 — Custom tools / personal workflows

11. **From 15,000 tools to the hypertail**
   - Use Scott Brinker's hypertail idea.
   - Need exact quote/detail from the article before final slide.
   - Message: next growth may be custom/internal/personal tools, not only more vendors.

12. **Custom tools are becoming a way of working**
   - Show AI-built dashboards, personal automations, workflow agents, custom interfaces, small tools around specific needs.
   - Tone: custom tools are the direction of travel Alessandro sees and how he is starting to work.

13. **Personal example — trading agent**
   - Use repo reference: https://github.com/almoretti/tradinglab
   - Add screenshot of repo to assets later.
   - Not a marketing example; it shows the behaviour/pattern.
   - Pattern: data + APIs + daily dialogue + decision support + optimisation loop + refining the agent over time.

14. **From no-code to low-code to agentic automation**
   - No-code: visual builders/predefined blocks.
   - Low-code: scripts/config/APIs.
   - Agentic automation: describe requirements, connect tools/data/APIs, and let AI help build/operate workflows.
   - Potential examples to verify before final use: Salesforce Agentforce/Agentforce 360, Zapier SDK/developer platform/agentic automation direction, Claude Code, Codex, Lovable.

### Final takeaway / ending

15. **This is becoming a basic marketing skill**
   - Subtitle: `Like Excel, but for building workflows`.
   - Main line: `Use AI to move horizontally.`
   - Keep simple and directional; do not turn this into a detailed training framework.
   - Explanation:
     - Like Excel, depth will vary by person.
     - Some people will use it lightly; others will go deep.
     - But marketers need to start expanding beyond their lane and use AI to bridge the gap between their work and the tools/systems around it.
   - Avoid detailed bullets about APIs/data/workflows unless used only as verbal explanation.

16. **Recap / final landing**
   - Purpose: clean landing after the call to action.
   - Possible title: `The shift is not from SaaS to no SaaS`.
   - Possible bullets:
     - SaaS is not dead — but the way we use it is changing.
     - Code is cheaper — requirements matter more.
     - Before buying the next tool, look for the buildable foundation.
     - Custom tools will become more personal.
     - Start practising now.
   - Possible final line:
     - `The future skill is not knowing every tool. It is knowing what you need — and how to build around it.`

## Remaining refinements / open questions

1. Verify exact Scott Brinker quote/wording for hypertail and the prediction around millions/billions of custom apps/tools.
2. Verify exact naming/examples for Salesforce direction: user mentioned “Headless360”; likely needs checking against current Salesforce Agentforce/Agentforce 360 terminology.
3. Verify Zapier SDK / Zapier agentic automation examples before using on a slide.
4. Decide whether Slide 16 final line should be exactly: `The future skill is not knowing every tool. It is knowing what you need — and how to build around it.`
5. Add screenshot asset for TradingLab repo.
6. Decide how visually detailed examples 9 and 10 should be.

## Six refinement points — resolved / drafted

### 1. Scott Brinker hypertail quote / wording

Verified from Scott Brinker article: `In 2020, I made 5 predictions about marketing and martech for this decade. Here’s how they’re going…`

Useful quote/excerpt:

> “But we predicted that The Great App Explosion would be even bigger. Not thousands of apps. Billions of apps. The vast majority custom built by organizations, tailored to their own operations and customer experiences. While we expect the long tail of commercial martech will continue to grow, it will be dwarfed by the hypertail of custom martech.”

Additional useful line:

> “AI has delivered The Great App Explosion, and the hypertail is already thriving today.”

Additional useful “vibe coding” excerpt:

> “As Andrej Karpathy said, ‘The hottest new programming language is English.’”

> “The vibe coding phenomenon of 2025 — a term coined by Karpathy — pushed this into hyperdrive. Bolt, Lovable, Replit, and Vercel made it insanely easy for non-engineers to create apps and agents.”

Slide use:

- Use this on Slide 11: **From 15,000 tools to the hypertail**.
- Use `Billions of apps` and `hypertail of custom martech` as the key phrases.
- Keep Scott as the source/authority here.
- Raw extracted article text saved to: `Research/raw-export/scott-brinker-2026-predictions-article-text.txt`.

### 2. Salesforce Headless 360 / Agentforce direction

Correction from Alessandro: the relevant announcement is **Salesforce Headless 360**, not a mistaken reference. It is connected to the broader Agentforce/agentic direction.

Useful public Salesforce wording from structured page data:

> “Agentforce is the only enterprise agentic AI solution that elevates every experience by bringing together humans, applications, AI agents, and data.”

> “Teams can manage the complete agent development lifecycle with a robust set of tools to build, test, deploy, manage, and orchestrate AI agents at scale.”

Useful FAQ wording:

> “Businesses can build agents with Agent Builder using existing Agentforce 360 Platform tools to create standard and custom subagents and actions.”

> “You can use MuleSoft API connectors to connect Agents to any system.”

Additional verified Headless 360 source: `https://www.salesforce.com/uk/news/stories/salesforce-headless-360-announcement/`

Useful quote/excerpt:

> “Why should you ever log into Salesforce again?”

Useful article wording/paraphrase:

- For 25 years, using Salesforce meant working inside Salesforce.
- In the Agentic Enterprise, agents do not go to a browser or click through UIs. They call APIs, invoke MCP tools, and run CLI commands directly.
- Humans and agents need the same thing: the data, workflows, and trust layer. The surface changes; the platform does not.

Useful direct excerpt:

> “For developers, headless means you can build on Salesforce any way you want.”

> “More than 60 new MCP tools and 30+ preconfigured coding skills give your coding agent complete, live access to your entire platform, including all of your data, workflows, and business logic, directly in the coding agents you already use like Claude Code, Cursor, Codex, Windsurf, and more.”

Slide use:

- Mention as an example that major SaaS platforms are moving toward headless/agentic/build-on-top usage.
- Correct wording: **Salesforce Headless 360** and **Agentforce**.
- This supports the talk point: the surface changes, the platform/foundation remains valuable.

### 3. Zapier SDK / agentic automation direction

Correction/addition from Alessandro: the relevant Zapier SDK source is `https://docs.zapier.com/sdk`.

Verified relevant Zapier platform wording from `https://zapier.com/platform`, redirected/positioned as `developer-platform`:

> “Power your product or AI agent with 8,000 app integrations.”

> “Use Zapier's Workflow API and 8,000 integrations to power a built-in automation experience, integration marketplace, or AI workflows.”

> “Zapier handles auth, infrastructure, and support, so you can move fast, at enterprise scale.”

> “Zapier MCP platform — Use Zapier MCP to connect your AI agent or tool to 8,000 apps.”

Slide use:

- Use Zapier as an example that integration/automation platforms are positioning themselves as infrastructure for products and AI agents.
- Correct wording can include: **Zapier SDK**, **Zapier Platform CLI**, **Zapier Workflow API**, **Zapier MCP**, **Zapier developer platform / Powered by Zapier**.
- SDK docs include AI-agent-oriented setup language for tools like Claude Code / Windsurf and terminal setup with `@zapier/zapier-sdk` and `@zapier/zapier-sdk-cli`.

### 4. Final recap wording

Final Slide 16 title:

> The shift is not from SaaS to no SaaS

Confirmed final line:

> The next skill is not knowing every tool. It is knowing what you need — and how to shape the tools around it.

Reason:

- This softer version matches the exploratory, personal tone of the talk.
- It avoids making the ending sound too absolute.

### 5. TradingLab repo screenshot

Asset found in the assets folder:

- `C:\Users\alemo\Desktop\AI Playground\Anticon\Presentation\Assets\trading labs.png`

This appears to be a screenshot of the private `tradinglab` GitHub repo and is suitable for Slide 13.

Visible structure in screenshot:

- repo: `tradinglab` marked `Private`
- folders: `agents`, `apis`, `data`, `decisions`, `experiments`, `indicators`, `journal`, `prompts`, `reviews`, `scripts`, `strategies`, `tests`
- files: `MEMORY.md`, `README.md`, `docs-note.txt`

Slide use:

- Use as a visual proof point for the personal agent/workflow example.
- Speaker should explain that the point is not trading itself, but the pattern: agents + APIs + data + decisions + prompts + review loop.

Note:

- Attempted browser capture of `https://github.com/almoretti/tradinglab` returned a GitHub 404, probably because the repo is private/inaccessible from the browser session. The bad 404 screenshot was deleted.

### 6. Visual detail for examples 9 and 10

#### Slide 9 — Example 1: Remove the painful migration

Title:

> Remove the painful migration

Subtitle:

> When the foundation is strong, build the missing layer.

Visual concept:

- Left: existing SaaS/tool foundation
  - API
  - data
  - integrations
  - embedded in the company
- Pain layer on top:
  - poor UX
  - weak visualisation
  - missing workflow
- New layer:
  - custom dashboard
  - automation
  - better front end / user layer

Speaker point:

> We did not need to replace the foundation. We needed to make the foundation usable for the way we worked.

#### Slide 10 — Example 2: Stop overpaying for a huge SaaS

Title:

> Stop overpaying for a huge SaaS

Subtitle:

> When you only need five features, build the five features.

Visual concept:

- Left: big SaaS block
  - 1,000 features
  - expensive
  - low adoption
  - only five useful features
- Middle: extract requirements
  - feature 1
  - feature 2
  - feature 3
  - feature 4
  - feature 5
- Right: bespoke internal tool
  - focused
  - cheaper/simpler
  - integrated
  - fits actual workflow

Speaker point:

> If the tool is mostly unnecessary surface area, the requirement is not “find another thousand-feature SaaS.” The requirement may be to build the five features the team actually needs.

## Detailed slide notes — Slides 9 to 16 brought up to section-one detail level

The first 8 slides already have detailed notes above. This section expands Slides 9–16 to a similar level of detail: purpose, title, message, visual, speaker direction, transition, and caveats.

---

## Slide 9 — Example 1: Remove the painful migration

### Purpose

- Show the first practical branch of Alessandro's new decision process.
- Demonstrate that a SaaS/tool can still be valuable even if the user-facing layer is poor.
- Make the idea of “buildable foundation” concrete.
- Show that self-building does not always mean replacing SaaS; sometimes it means making the existing foundation usable.

### Confirmed title

> Remove the painful migration

### Subtitle

> When the foundation is strong, build the missing layer.

### Core idea

Some tools are deeply embedded in the business and are painful to migrate away from. If the tool has a strong API, useful data, and valuable integrations, the problem may not be the foundation. The problem may be the layer users interact with.

In that situation, the new question is not:

> What tool should replace this?

It becomes:

> What layer can we build on top of it so people can actually use the value already inside it?

### Visual concept

Show a layered diagram.

Bottom layer: **Existing SaaS / infrastructure**

- API
- data
- integrations
- embedded workflows
- valuable information

Middle pain layer: **What users struggle with**

- poor UX
- weak visualisation
- outdated interface
- missing workflow
- manual effort

Top new layer: **What we build**

- dashboard
- automation
- front end
- workflow layer
- decision/support interface

Possible visual phrase:

> Keep the foundation. Rebuild the layer.

### Speaker-note direction

> This is one of the first ways my thinking is changing. If a tool is deeply embedded and the infrastructure is good, I do not immediately think about migration anymore.
>
> Migration is painful. It is expensive. It creates disruption. And sometimes the thing that is broken is not the foundation — it is the way people access it.
>
> So if the API is strong, the data is useful, and the integrations are there, the better question becomes: can I build the missing layer on top?
>
> In this example, the value was already inside the tool. The problem was that users could not access or visualise it in the way they needed. So the answer was not to replace the tool. The answer was to build a better way to use it.

### Transition into Slide 10

> But there is another situation where the opposite is true: the tool is not a strong foundation. It is expensive, barely used, and only a few features matter.

### Caveat

- Do not over-explain the company/tool details unless safe.
- Keep the example framed around the pattern, not the vendor.
- This is a “build on top” example, not a “SaaS is bad” example.

---

## Slide 10 — Example 2: Stop overpaying for a huge SaaS

### Purpose

- Show the second practical branch of Alessandro's decision process.
- Demonstrate that sometimes the right answer is not to build on top, but to rebuild the small useful subset.
- Connect back to Slide 4: “We buy 1,000 features to use 50” — and sometimes the number is even smaller.

### Confirmed title

> Stop overpaying for a huge SaaS

### Subtitle

> When you only need five features, build the five features.

### Core idea

Some SaaS products are bought because they seem like the only available option. But the business may only use a tiny fraction of them.

If the team only needs five features, and the product is expensive, underused, or poorly aligned with the business model, then the requirement may not be:

> Find another SaaS with the same five features.

It may be:

> Understand the five features properly and build exactly those.

### Visual concept

Three-part visual.

Left: **Large SaaS**

- 1,000 features
- expensive
- low adoption
- hard to customise
- not aligned with workflow

Middle: **Extract the real requirements**

- feature 1
- feature 2
- feature 3
- feature 4
- feature 5

Right: **Focused internal tool**

- bespoke
- simpler
- integrated
- easier to use
- easier to maintain
- matches actual workflow

Possible visual phrase:

> Do not migrate to another 1,000-feature product if the real need is five features.

### Speaker-note direction

> The second case is different. Sometimes the problem is not just the user layer. Sometimes the whole product is too much for what you actually need.
>
> You are paying for a thousand-feature SaaS, but only five features matter. The adoption is low, the workflow does not really fit, and the business model is different from the way the SaaS expects you to operate.
>
> In the past, rebuilding those five features sounded irrational. Why would you rebuild something that already exists?
>
> But if code becomes cheaper and the requirements are clear, the question changes. Maybe it is easier to build the five features you actually need than to keep customising a product that was never really designed for your way of working.

### Transition into Slide 11

> Once you see these two examples, the bigger question appears: if more people can build these specific tools, what happens to the technology landscape itself?

### Caveat

- Do not imply every SaaS should be rebuilt.
- This applies when usage is narrow, adoption is low, and the required feature set is clear.
- The core decision remains: is this tool a strong foundation or a weak fit?

---

## Slide 11 — From 15,000 tools to the hypertail

### Purpose

- Widen the argument from Alessandro's two examples to the broader direction of custom tools.
- Bring Scott Brinker back as the authority for the idea that the landscape may expand beyond commercial vendors.
- Explain that the next technology explosion may come from bespoke/internal/personal tools.

### Confirmed title

> From 15,000 tools to the hypertail

### Core idea

The MarTech landscape grew from hundreds of tools to more than 15,000. But Scott Brinker’s hypertail idea suggests the next growth may be much larger: not only thousands of commercial vendors, but billions of custom apps/tools built by organisations for their own operations and experiences.

### Key quote to use

> “Not thousands of apps. Billions of apps. The vast majority custom built by organizations, tailored to their own operations and customer experiences.”

Optional second quote:

> “While we expect the long tail of commercial martech will continue to grow, it will be dwarfed by the hypertail of custom martech.”

### Visual concept

Left side:

- 2011: ~150 tools
- 2025: 15,384 tools
- commercial MarTech landscape

Right side:

- internal tools
- team workflows
- personal dashboards
- custom automations
- agents
- bespoke apps
- “hypertail”

Possible visual:

`150 → 15,384 → billions?`

Or:

`Vendor landscape → long tail → hypertail`

### Speaker-note direction

> Scott Brinker has a useful concept here: the hypertail. The idea is that the landscape does not only grow through more companies selling more SaaS.
>
> It grows because organisations start creating their own tools, tailored to their own operations and customer experiences.
>
> This connects directly to what I am seeing personally. Once building becomes easier, the number of things that are worth building expands dramatically. Not every tool needs to become a company. Some tools only need to solve one workflow, for one team, or even one person.

### Transition into Slide 12

> So what does that actually look like? It does not always look like a traditional SaaS product.

### Caveat

- Keep this as direction of travel, not certainty.
- Scott’s “billions” is a quoted prediction/framing; use the quote with source.

---

## Slide 12 — Custom tools are becoming a way of working

### Purpose

- Make “custom tools” tangible.
- Show that the custom-tool direction is not abstract and not only MarTech-specific.
- Bridge from Scott’s macro hypertail idea into Alessandro's personal TradingLab example.
- Explain what the hypertail looks like in practice before showing a specific personal workflow.

### Confirmed title

> Custom tools are becoming a way of working

### Core idea

Custom tools are not necessarily polished SaaS products or large internal engineering projects. They can be small dashboards, automations, workflow agents, custom interfaces, or single-purpose tools built around a specific person, team, workflow, decision, or requirement.

The important shift is that tools can start being shaped around the person/team and the work, rather than forcing the person/team to adapt to a generic SaaS interface.

### Main message

> AI makes it easier to shape tools around a specific person, team, workflow, or decision — instead of adapting the work to a generic SaaS interface.

### Visual concept

Show a person/team/requirement at the centre, surrounded by small purpose-built tools:

- AI-built dashboard
- personal automation
- workflow agent
- custom interface
- small tool around one need
- API/data workflow

Possible visual phrase:

> Not every tool needs to become a product.

### Speaker-note direction

> When I say custom tools, I do not only mean big internal software projects. I mean smaller tools around specific work.
>
> A dashboard that answers one recurring question. An automation that removes one painful step. An agent that supports one decision loop. A custom interface over data or APIs.
>
> This is the practical version of the hypertail idea. The number of useful tools expands because a tool no longer needs to be a full SaaS company. It can simply solve one specific workflow for one person or one team.
>
> And that is why this is not only a MarTech story. MarTech is my lens, but the behaviour is broader: people are starting to shape tools around how they work.

### Transition into Slide 13

> Let me show a personal example outside marketing, because the pattern is easier to see when it is not hidden inside MarTech language.

### Caveat

- Do not make this only about MarTech.
- Do not imply all custom tools are production-grade software.
- Keep it as a direction of travel and a behaviour Alessandro is starting to practise.

---

## Slide 13 — Personal example: my trading agent

### Purpose

- Make the custom-tool shift concrete and personal.
- Show a non-marketing example of the same behaviour.
- Demonstrate that the key pattern is not the domain; it is the workflow around data, APIs, decisions, prompts, review, and optimisation.

### Confirmed title

> Personal example — trading agent

Alternative title:

> A personal example: building around my own decisions

### Asset

Use:

`C:\Users\alemo\Desktop\AI Playground\Anticon\Presentation\Assets\trading labs.png`

Visible repo structure:

- `agents`
- `apis`
- `data`
- `decisions`
- `experiments`
- `indicators`
- `journal`
- `prompts`
- `reviews`
- `scripts`
- `strategies`
- `tests`
- `MEMORY.md`
- `README.md`
- `docs-note.txt`

### Core idea

This is not a marketing example. It is an example of the behaviour: building a personal tool/agent around Alessandro’s own workflow, data, decisions, and optimisation loop.

### Key line

> The point is not trading. The point is the pattern.

### Pattern to show

- Give an agent access to data and API endpoints.
- Talk to it every day / regularly.
- Use it to support decisions.
- Discuss how it is making decisions.
- Refine the decision-making process.
- Optimise a strategy over time.
- Move toward a self-healing / self-improving workflow.

Shorter pattern version for slide design:

- data
- APIs
- daily dialogue
- decision support
- review
- optimisation loop

### Speaker-note direction

> This example is personal and it is not about marketing. I am building an agent for trading.
>
> The reason I want to show it is not because trading maps perfectly to marketing. It does not.
>
> The reason I want to show it is because the behaviour is the same: I have data, API endpoints, prompts, memory, decisions, a journal, reviews, and a loop where I keep refining how the system helps me make decisions.
>
> This is what I mean by a custom tool becoming personal. It is not a SaaS I bought. It is not a generic dashboard. It is a tool shaped around how I work and how I want to make decisions.

### Transition into Slide 14

> This did not appear out of nowhere. We have been moving toward more accessible tool-building for years: from no-code, to low-code, and now toward agentic automation.

### Caveat

- Do not claim trading results or performance.
- Do not suggest marketing and trading are the same.
- Use it only as a personal illustration of a broader tool-building behaviour.

---

## Slide 14 — From no-code to low-code to agentic automation

### Purpose

- Place AI-assisted custom tool building into a longer evolution.
- Show that this shift is not sudden; it continues the move toward more accessible building.
- Connect personal/custom tooling to broader market signals like Salesforce Headless 360, Zapier SDK/MCP/Workflow API, Claude Code, Codex, Lovable, Replit, Vercel, and similar tools.

### Confirmed title

> From no-code to low-code to agentic automation

### Core idea

The interface for building keeps moving closer to natural language and requirements.

No-code made building more accessible through visual blocks and predefined components. Low-code added scripts, configuration, APIs, and custom logic. Agentic automation moves the interface closer to describing requirements, connecting tools/data/APIs, and letting AI help build or operate workflows.

### Three-stage model

1. **No-code**
   - visual builders
   - predefined blocks
   - templates

2. **Low-code**
   - scripts
   - configuration
   - APIs
   - custom logic

3. **Agentic automation**
   - describe requirements
   - connect tools, data, APIs
   - use AI/coding agents to build workflows, integrations, agents, or interfaces
   - potentially operate or refine workflows over time

### Supporting signals / examples

Use as evidence of direction, not as the core story:

- **Salesforce Headless 360 / Agentforce**
  - Agents do not need to click through UIs; they call APIs, invoke MCP tools, and run CLI commands.
  - “The surface changes. The platform doesn’t.”
  - Supports the idea that major SaaS platforms are moving toward headless/agentic/build-on-top usage.

- **Zapier SDK / Zapier Platform CLI / Workflow API / MCP**
  - Zapier positions itself as infrastructure for products and AI agents.
  - Useful phrase: “Power your product or AI agent with 8,000 app integrations.”

- **Claude Code, Codex, Lovable, Replit, Vercel, similar builder tools**
  - These make it easier for non-traditional developers to describe and build small apps, workflows, and agents.

### Speaker-note direction

> We have been moving in this direction for a while. No-code made it possible to build with visual blocks. Low-code made it possible to extend those blocks with scripts, configuration, and APIs.
>
> What feels different now is that AI moves the interface closer to the requirement itself. You can describe what you need, connect it to data and APIs, and use AI to help create the workflow.
>
> Salesforce talking about Headless 360 and Zapier talking about SDKs, MCP, and workflows for AI agents are signals of this direction. The surface changes, but the underlying data, integration, and platform layer becomes even more important.

### Transition into Slide 15

> If this is the direction, then the skill set for marketers has to change too.

### Caveat

- Do not say no-code or low-code disappears.
- Position agentic automation as the next layer, not a replacement for everything.
- Keep Salesforce/Zapier as signals, not as the centre of the talk.

---

## Slide 15 — This is becoming a basic marketing skill

### Purpose

- Deliver the practical call to action.
- Make the upskilling message relevant to all marketers, not only MarTech specialists.
- Keep the message simple and directional, not a detailed training framework.

### Confirmed title

> This is becoming a basic marketing skill

### Confirmed subtitle

> Like Excel, but for building workflows

### Confirmed main line

> Use AI to move horizontally.

### Core idea

The skill is not “become a developer.” The skill is learning to move horizontally: using AI to understand and bridge the adjacent layers around your work — tools, systems, data, workflows, and automation.

Like Excel, depth will vary. Some people will use it lightly; others will go deep. But marketers need to start expanding beyond their lane and using AI to bridge the gap between the work they know and the tools/systems around it.

### What “move horizontally” means

- Do not stay only in your performance / CRM / content / channel lane.
- Use AI to understand the adjacent technical layer.
- Learn enough about data, integrations, APIs, and workflows to explain what you need.
- Connect what you know from doing the job with how tools and data can be wired together.
- Go as deep as your work requires.

### Slide content direction

Keep the slide simple. Suggested visible content:

- **This is becoming a basic marketing skill**
- **Like Excel, but for building workflows**
- **Use AI to move horizontally**

Optional light supporting bullets:

- You already understand the work and the requirements.
- Start expanding beyond your lane.
- Use AI to bridge the gap between your role and the tools around it.
- Go as deep as your work requires.

Avoid detailed bullets about APIs/data/workflows on the slide unless used only verbally.

### Speaker-note direction

> Not everyone needs the same level of depth. It is like Excel: some people only need to navigate a spreadsheet, some people build advanced models.
>
> But everyone in business had to learn enough Excel to work differently. I think the same thing is starting to happen here.
>
> Marketers already understand the work and the requirement. The next step is to use AI to move horizontally — to understand more of the tools and systems around their role, and to build or shape what they need.
>
> You do not need to become a developer. But you do need to start bridging your work with the technical layer around it.

### Transition into Slide 16

> So to land this: the point is not that SaaS disappears. The point is that our relationship with SaaS changes.

### Caveat

- Do not turn this into a detailed training curriculum.
- Do not make it only about MarTech leaders.
- This is for all marketers, with different levels of depth.

---

## Slide 16 — Recap / final landing

### Purpose

- Give the audience a clean landing after the call to action.
- Resolve the “SaaS is dead” risk.
- Restate the personal thesis and final takeaway.

### Confirmed title

> The shift is not from SaaS to no SaaS

### Core idea

This is not a claim that SaaS disappears. It is a claim that the way we use SaaS changes.

The shift is from buying tools only as finished products toward using tools as foundations for what we need to build.

### Possible bullets

- SaaS is not dead — but the way we use it is changing.
- Code is cheaper — requirements matter more.
- Before buying the next tool, look for the buildable foundation.
- Custom tools will become more personal.
- Start practising now.

### Confirmed final line

> The next skill is not knowing every tool. It is knowing what you need — and how to shape the tools around it.

### Speaker-note direction

> I do not think this is about SaaS disappearing. It is about our relationship with SaaS changing.
>
> We spent years buying tools because building was expensive. Now AI changes the cost of building the missing piece.
>
> That makes requirements more important. It makes the foundation more important. It makes custom tools more possible. And it means marketers need to start building the muscle to work horizontally with AI.
>
> The next skill is not knowing every tool. It is knowing what you need — and how to shape the tools around it.

### Caveat

- Keep the ending personal and directional.
- Do not say this is a fully solved operating model.
- Do not claim everyone should build everything.
- End with practice and upskilling, not certainty.
