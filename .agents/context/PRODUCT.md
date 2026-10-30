# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS, and JavaScript in `docs/`, with no build step and no dependencies. It will be published later with GitHub Pages: **Deploy from a branch**, `master`, `/docs`. The owner confirmed this on 23 September 2026.

## Users

- **Primary:** People with little or no software-development experience who are working through a facilitated 90-120 minute workshop with the standalone GitHub Copilot desktop app. The guide stays open next to the app. Learners copy prompts into it, replace placeholders, and check their progress at each checkpoint. The owner accepted this assumption on 23 September 2026.
- **Secondary:** Facilitators who prepare and run the session (`FACILITATOR.md`).

## Product Purpose

*From idea to your first GitHub project* is a beginner learning path. It teaches one workflow: **Describe -> Plan -> Document -> Build -> Test -> Review -> Push**. Each learner brings their own small idea and turns it into a working first version. Any kind of small project is allowed, and the build and test steps are tool-neutral (owner decision, 28 September 2026). They finish with a working, documented, reviewed project in their GitHub organization.

"Done" means four things: the agreed behavior works, evidence and limitations are documented, review findings are addressed, and the correct organization repository contains the project.

The web page presents the full guide in the browser. It covers all seven steps, has copy buttons on the prompts, and includes the checkpoints. The owner confirmed this scope on 23 September 2026.

## Positioning

The path teaches judgment, not syntax. The learner explains the goal, makes decisions, checks the result, and decides what gets shared. Copilot writes the code, but the learner stays responsible for the outcome.

The copy-ready prompts contain explicit boundaries, such as "do not commit, push, or publish" and "ask one question at a time and wait". They are the core teaching material. The guide covers the standalone GitHub Copilot app only. It does not cover Microsoft 365 Copilot, GitHub Desktop, or the VS Code extension.

## Operating Context

- Learners use the guide during a live, timeboxed workshop, switching between the guide and the Copilot app.
- Each step has a time allowance, copy-ready prompts, and a checkpoint.
- Placeholders such as `YOUR-ORG` and `YOUR-USERNAME` must be replaced by hand. Learners must never paste them as literal destinations.
- Examples use Windows-style paths. The screenshots are GitHub-published macOS examples, and some show older labels.
- Source files: `README.md` (the guide), `FACILITATOR.md`, `SOURCES.md`, `templates/PLAN-TEMPLATE.md`, `examples/PLAN-learning-tracker.md`, and `assets/*.png`.
- The documentation was last checked on 23 September 2026.

## Capabilities and Constraints

- `README.md` remains the source of truth. The web page mirrors it, so any change to the guide must also be made to the page.
- Prompts must be copied exactly as written.
- The guide offers an English/German language switch and Light/Dark/Pixel theme choices. German includes the complete guide and prompts; the original English remains canonical. Both preferences are saved locally and do not reset checkpoint progress.
- The repository is private and belongs to a personal account. GitHub Pages for a private repository requires a paid plan, and a published Pages site is public. Links from the site to repository files only work for visitors with repository access.
- Undecided: the final public URL and whether the repository will become public.

## Brand Commitments

- Title: "From idea to your first GitHub project". Subtitle: "A beginner learning path with the GitHub Copilot app".
- Voice: plain language, second person, calm, and direct. It is honest about limits, for example: "Copilot finished answering" is not the definition of done.
- The screenshots are GitHub, Inc. imagery. Their credits must stay with the materials, as recorded in `SOURCES.md`.
- **Standing visual preference (owner, 23 September 2026):** on the guide page, the owner chose the category standard over a themed direction. That means a calm, conventional documentation page executed at full craft, with no gimmicks. At the owner's request, Copilot picked the quality bar: Stripe Docs, GOV.UK step-by-step guidance, and MDN Web Docs.
- **Avoid (owner):** anything that looks like an adventure guide, such as trail maps, quests, or expedition styling.
- **Optional theme (owner, 30 October 2026):** a third Pixel theme with a light-blue background, colorful accents, and pixel-art elements. Light and Dark stay available as separate classic themes; the language switch remains independent.
- **Pixel character direction:** a playful, simplified dog based on the supplied reference, without a carrot or toy. Avoid repeated character rows; use a few content-related cameos with varied scale and placement. These are optional decorations, not gamification or changes to the teaching material.

## Evidence on Hand

- The full guide text, nine copy-ready prompts (the first is a fill-in template for the learner's own idea), a plan template, and an example plan for a different idea (the Learning Tracker).
- Five GitHub-published screenshots in `assets/`, with their provenance recorded in `SOURCES.md`.
- There are no testimonials, participant counts, completion rates, or outcome data. Do not invent any.

## Product Principles

1. The learner stays in charge. Every surface reinforces the sequence decide, check, then approve.
2. Use plain language. Define a term when it first matters.
3. Be honest about limits. Say what has not been verified, and never imply that a push is a review.
4. Keep steps small and checkable, with visible checkpoints.
5. The Markdown guide is canonical. The site must not drift from it.

## Accessibility & Inclusion

The site must meet the same standards the guide asks learners to test in their own app:

- It works with a keyboard alone, with visible focus.
- It has no horizontal page scrolling at a 375-pixel viewport.
- Its labels are understandable.
- Meaning is never carried by color alone.
