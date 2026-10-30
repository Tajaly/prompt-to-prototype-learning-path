---
name: "From idea to your first GitHub project"
description: "A calm, canonical documentation page for a live GitHub Copilot workshop."
colors:
  bg: "#ffffff"
  bg-subtle: "#f7f8fa"
  bg-inset: "#f1f3f6"
  ink: "#1a1d21"
  ink-2: "#454d57"
  ink-3: "#5f6874"
  line: "#e3e6ea"
  line-strong: "#cdd3da"
  accent: "#2257c7"
  accent-hover: "#173f94"
  accent-soft: "#edf3fe"
  accent-line: "#c9daf8"
  done: "#1b7a45"
  done-soft: "#edf7f1"
  done-line: "#b9dfc8"
  on-done: "#ffffff"
  warn-ink: "#714800"
  warn-soft: "#fff7e6"
  warn-line: "#f0d7a3"
  warn-icon: "#a86200"
  ph-bg: "#fff0c7"
  ph-ink: "#5f3d00"
  ph-line: "#c58e22"
  selection: "#cfe0ff"
  focus: "#2257c7"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI Variable Display, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.35rem + 2.2vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI Variable Display, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.25rem + 0.9vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "-0.018em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI Variable Display, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI Variable Text, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI Variable Text, Segoe UI, system-ui, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
  mono:
    fontFamily: "ui-monospace, Cascadia Code, Cascadia Mono, SF Mono, Menlo, Consolas, Liberation Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  placeholder: "3px"
  focus: "4px"
  code: "6px"
  sm: "8px"
  md: "12px"
  pill: "999px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "3rem"
components:
  button-copy:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.25rem 0.75rem"
    height: "2.125rem"
  button-copy-copied:
    backgroundColor: "{colors.done-soft}"
    textColor: "{colors.done}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.bg-subtle}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "1rem 1.25rem"
  callout-note:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1.125rem"
  callout-warning:
    backgroundColor: "{colors.warn-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.875rem 1.125rem"
  prompt:
    backgroundColor: "{colors.bg-subtle}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  checkpoint-done:
    backgroundColor: "{colors.done-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
---

# Design System: From idea to your first GitHub project

## Overview

**Creative North Star: "The Workshop Canon"**

This system is a calm documentation room for a live beginner workshop. It behaves like a trusted reference page beside the GitHub Copilot app: one readable column, a persistent step list, copy-ready prompt blocks, and checkpoints that visibly remember progress. The owner deliberately chose the category-standard documentation look over a themed direction, with Stripe Docs, GOV.UK step-by-step guidance, and MDN as the quality bar.

The classic visual world is intentionally plain: white page, near-black ink, blue links, green completion, amber cautions and placeholders, system fonts, 1px hairlines, and 12px container corners. It refuses adventure metaphors, quest styling, decorative shadows, and marketing gloss. Light mode is the default use scene for a daytime workshop room; the initial theme follows the operating system. A Light/Dark/Pixel selector remembers the learner's choice. Pixel is an explicitly requested, opt-in variation, not a replacement for the two classic themes.

**Key Characteristics:**
- Single-column reading measure with a sticky progress sidebar on wide screens.
- Semantic color discipline: blue means navigation/action, green means done, amber means caution or replace-this placeholder.
- Flat surfaces with 1px borders and tonal background shifts instead of decorative depth.
- System sans everywhere except prompts and code, which use a monospace stack.
- Copy and checkpoint interactions are progressive enhancement, never required to understand the guide.

## Colors

The palette is a restrained documentation palette: neutral paper and ink, one link blue, green completion, and amber warnings/placeholders.

### Primary
- **Documentation Link Blue**: The only action/link accent. It colors links, active navigation markers, focus outlines, note callout icons, prompt toggles, and active sub-navigation.

### Secondary
- **Checkpoint Green**: Reserved for completed progress, done states, copied confirmation, and completion checkmarks.

### Tertiary
- **Workshop Amber**: Reserved for cautions and placeholder text such as `YOUR-ORG`; it is not a decorative accent.

### Neutral
- **Page White**: The default page and content background.
- **Subtle Canvas**: Sidebar, examples, prompt bodies, table headers, and neutral grouped surfaces.
- **Inset Canvas**: Prompt headers, inline code, active mobile step-toggle state, and other nested surfaces.
- **Near-Black Ink**: Primary text and filled step number circles.
- **Secondary Ink**: Descriptive copy, captions, and less-prominent navigation.
- **Tertiary Ink**: Hints, times, muted controls, and table labels.
- **Hairline**: Standard 1px dividers, borders, and table rules.
- **Strong Hairline**: Interactive outlines and stronger container borders.

### Named Rules
**The One Blue Rule.** Blue is the single navigation and action accent; do not introduce additional accent colors for ordinary emphasis.

**The Green Means Done Rule.** Green appears only when something is complete, copied, or checked off.

**The Amber Is Instructional Rule.** Amber is for placeholders and cautions; it must tell the learner to pay attention or replace something.

## Pixel theme (opt-in)

The third theme, requested on 30 October 2026, uses a cool light-blue canvas (`#eaf6ff`), navy text (`#183451`), and blue actions (`#215ca8`). Most overview panels are quiet; a pale gold goal panel and the artwork carry the extra color. Green completion and amber caution meanings stay intact.

The owner's refinement rejected repeated character strips and asked for natural, playful placements. A curious black-and-white dog with an empty muzzle sits beside the introduction, not in a mascot lineup. Its eye patch and floppy black ears preserve the reference's character without putting the photograph on the site. A second, sleeping pose appears only below the final checkpoint.

Each supporting sprite appears once, where it belongs: dice beside idea selection, flowers growing from the documentation checkpoint, a rubber duck beside the code-review prompt, and a squirrel near the upload checks. Some sections intentionally have no illustration. Only the first implementation prompt has the little colored window controls. Never recreate a banner or a row of characters for each step.

Sprites have transparent backgrounds and nearest-neighbor scaling, with no sound, continuous animation, or new game mechanics. Empty CSS pseudo-elements keep them out of screen-reader text and copied prompts. The intro uses a title-and-dog grid on wider screens; on mobile the title spans the full width and the smaller dog sits beside the subtitle. Completed step numbers retain their green state. Panels use 4px corners and controls use 2px corners. Text stays in the readable system stacks; character must not come at the expense of comprehension.

All variant rules are scoped to `data-theme="pixel"` and screen media. Light, Dark, and the print handout do not receive the pixel artwork or decorative treatments. Keep this variation optional rather than applying it to the whole product.

## Typography

**Display Font:** System display stack, starting with Apple system and Segoe UI Variable Display.  
**Body Font:** System text stack, starting with Apple system and Segoe UI Variable Text.  
**Label/Mono Font:** System text stack for labels; `ui-monospace`, Cascadia, SF Mono, Menlo, Consolas, and Liberation Mono for prompts and code.

**Character:** The type system is native, dependency-free, and deliberately unbranded. It favors readable workshop instruction over personality; the only visual distinction is that prompts and code switch to monospace because exact copying matters.

### Hierarchy
- **Display** (700, responsive clamp, 1.12 line-height): Page title only, with tight tracking for a canonical docs header.
- **Headline** (700, responsive clamp, 1.22 line-height): Major sections and numbered steps.
- **Title** (650, 1.25rem, 1.35 line-height): Subsections inside steps.
- **Body** (400, 1.0625rem, 1.65 line-height): Default prose inside a readable 42rem measure.
- **Lead** (400, 1.125rem, 1.6 line-height): Introductory paragraphs and step leads.
- **Label** (600, 0.8125rem-0.9375rem): Metadata, table headers, buttons, navigation labels, and time indicators.
- **Mono** (400, 0.875rem, 1.6 line-height): Prompt bodies and inline code; mobile prompt bodies reduce to 0.8125rem.

### Named Rules
**The System Stack Rule.** Do not add web fonts; the page makes no external font requests by design.

**The Monospace Means Exact Rule.** Use monospace only for prompts, code, file paths, and values the learner may copy.

## Layout

The page uses a two-column grid on wide screens: an 18rem sticky sidebar and a flexible content area. The top bar is sticky at 3.5rem high, with theme and language controls beside the sources link. Below the desktop breakpoint, the brand uses a compact "Learning path" / "Lernpfad" label. At 40rem and below, a 7.75rem two-row header places the brand and steps button above the theme group and language button, leaving space for German labels. Main content is centered in a 42rem reading measure and padded with `3.25rem clamp(1.5rem, 4vw, 4rem) 4rem`.

At widths below 63.99rem, the layout becomes a single column and the sidebar becomes a full-width mobile sheet under the top bar. At 40rem, the at-a-glance panel collapses from two columns to one. At 36rem, data tables become stacked label/value blocks and prompt text becomes denser. The minimum supported scene is a 375px viewport with no horizontal page scrolling.

Spacing follows documentation rhythm rather than marketing spacing: small controls use 0.25rem-0.75rem increments, grouped surfaces use 1rem-1.5rem padding, and major guide sections use 3rem top padding with a 1px divider. Scroll anchoring accounts for the sticky top bar.

### Named Rules
**The One Measure Rule.** Reading content, sources, and footer share the same 42rem measure; do not widen prose to fill the viewport.

**The Sidebar Is Progress Rule.** The left rail exists to show steps, time, active position, and checkpoint progress, not secondary marketing or decoration.

## Elevation & Depth

This system has no decorative shadows. Depth is conveyed by position, 1px borders, radius, tonal surfaces, sticky behavior, and state color. Prompt panels, callouts, tables, screenshots, examples, checkpoints, and glance cards are all flat at rest.

### Named Rules
**The Flat Canon Rule.** Do not add drop shadows, glows, or layered cards; a 1px hairline and subtle background shift are the depth language.

## Shapes

The form language is softly rectangular and practical. Containers use a 12px radius, compact controls use 8px, inline code and checkbox boxes use 6px, focus outlines use a 4px radius, placeholder highlights (such as `YOUR-ORG` or a `[fill-in]` part of a prompt) use 3px, and the progress track is fully rounded. Numbered step markers and nav markers are circles because they represent sequence and completion.

Borders are usually 1px; completion checkbox boxes use a 2px stroke for legibility. Images inherit the 12px container radius with a 1px border.

## Components

### Buttons
- **Shape:** Compact rounded rectangle (8px radius).
- **Copy button:** White background, near-black text, strong hairline border, 0.25rem by 0.75rem padding, 2.125rem minimum height.
- **Copied state:** Green soft background, green text, green border. The label changes to "Copied" and then resets.
- **Mobile steps button:** Same compact control language with a step icon and checkpoint count.
- **Preferences:** A labeled native radio group offers Light, Dark, and Pixel (Hell, Dunkel, Pixel in German), with 45px-minimum targets, visible selection borders, and focus outlines. A separate button offers the other language by its native name, "Deutsch" or "English", with a matching `lang` attribute. Choices are remembered independently of progress.
- **Hover / Focus:** Hover shifts the border or background; focus uses a 2px outline in the current focus blue.

### Cards / Containers
- **Glance panel:** A 2x2 bordered definition-list panel with 12px outer radius and internal 1px dividers.
- **Examples:** Subtle canvas background, 12px radius, 1px border, 1rem-1.25rem padding.
- **Tables:** A bordered 12px wrapper with horizontal overflow on larger screens and stacked rows on narrow screens.
- **Screenshots:** 1px hairline, 12px radius, white backing, captions in secondary ink.

### Callouts
- **Note callout:** Two-column icon/text grid with blue-soft background, blue border, and blue icon.
- **Warning callout:** Same structure with amber-soft background, amber border, and amber icon.
- **Behavior:** Callouts are instructional blocks, not promotional panels.

### Prompts
- **Panel:** Strong hairline border, 12px radius, subtle canvas body, inset header, and hidden overflow.
- **Header:** Flex row with title, optional meta, and copy button.
- **Body:** Monospace, pre-wrap, 0.875rem text, 1.6 line-height, and `overflow-wrap: anywhere`.
- **Long prompt state:** Starts collapsed with a fade mask and a full-width toggle; copying always uses the full text.
- **Language:** The whole guide and all nine prompts can switch between English and German without replacing interactive controls. English remains canonical; product labels and technical identifiers stay unchanged. Copy feedback, accessible labels, table labels, and actual prompt line counts follow the selected language.

### Checkpoints
- **Style:** A clickable 12px-radius card with a hidden checkbox, 1.5rem square check box, and clear text label.
- **Done state:** Green-soft background, green border, filled green checkbox, and animated check stroke.
- **Meaning:** Checkpoints represent learner progress saved only in this browser; color is paired with text and state labels.

### Navigation
- **Desktop:** Sticky sidebar with progress bar, step list, time estimates, active section state, and done checkmarks.
- **Active state:** Blue-soft background, stronger text weight, blue marker or sublink rule.
- **Done state:** Filled green marker with checkmark; the step number fades out.
- **Mobile:** A "Steps" button opens the sidebar as a sheet; Escape and link selection close it.

### Workflow Chips
- **Style:** Inline rounded rectangles with strong hairline borders and bold labels, separated by small arrow icons.
- **Purpose:** Shows the canonical `Describe -> Plan -> Document -> Build -> Test -> Review -> Push` sequence without turning it into a metaphor.

## Do's and Don'ts

### Do:
- **Do** preserve the category-standard documentation page: sticky step list, one readable column, copyable prompts, and visible checkpoints.
- **Do** keep colors semantic: blue for links/actions, green for completion, amber for cautions and placeholders.
- **Do** use the system font stacks so the GitHub Pages site makes no external font requests.
- **Do** keep borders at 1px unless the control needs stronger checkbox legibility.
- **Do** expand or stack complex content at narrow widths instead of allowing horizontal page scroll, except inside table wrappers where horizontal overflow is intentional.

### Don't:
- **Don't** introduce adventure, quest, trail, expedition, map, badge, or game styling.
- **Don't** add decorative shadows, gradients, glassmorphism, marketing gloss, or animated flourish. Decorative artwork is limited to the explicitly requested Pixel theme.
- **Don't** use green for anything that is not complete or copied.
- **Don't** use amber as brand color; it is only for cautions and placeholders.
- **Don't** add external fonts, icon packages, analytics, or third-party visual dependencies.
