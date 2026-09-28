---
version: 1
slug: "docs-index-html"
primary_target: "docs/index.html"
related_targets: []
---

## Scope and mode

`docs/index.html` presents the full learning guide as a single web page, published later with GitHub Pages from `/docs`. Visitor mode: **Read**.

## Audience and job

- **Primary:** beginners in a facilitated workshop who follow along beside the GitHub Copilot app.
- **Secondary:** facilitators.

Visitors read each step, copy each prompt exactly, tick each checkpoint, and come back later to continue where they stopped.

## Content and proof

- `README.md` is canonical, and the page mirrors it word for word.
- Credits come from `SOURCES.md`.
- The screenshots are copied to `docs/assets/`.
- Nothing on the page is invented. It contains no claims, statistics, or testimonials.

## Constraints

- No build step, no dependencies, and no external requests (fonts and scripts are all local).
- Works with a keyboard alone and at a 375-pixel width with no horizontal page scrolling.
- If browser storage is unavailable, the page says so honestly.
- Links to repository files (template, example, facilitator notes) only work for visitors with repository access.

## Direction

The owner chose the category-standard documentation page on 23 September 2026. The quality bar is Stripe Docs, GOV.UK step-by-step guidance, and MDN.

The layout is a sticky step list with times and progress, one readable column, prompt blocks with a copy button, and a tickable checkpoint at the end of each step.

Avoid anything that looks like an adventure guide.

## Memorable moment

Ticking a checkpoint updates the step list's progress. On a return visit, the page offers "Continue with step N".

## Unresolved

- The final GitHub Pages URL.
- Whether the repository becomes public.
- Whether the facilitator notes, template, or example plan should become pages of the site.
