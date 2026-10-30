# Web version of the guide

This folder is a static website version of [`README.md`](../README.md), ready to publish with GitHub Pages. It has no build step and no dependencies.

On the web page:

- The whole guide is on one page, with a step list that follows you as you scroll.
- The header offers **Light / Dark / Pixel** theme choices and a separate **Deutsch / English** language button. The theme follows the operating system until you choose one; an explicit choice takes precedence and is restored on your next visit.
- **Pixel** is a third theme with a light-blue background, a warm accent on the goal panel, crisp IT-themed pixel artwork, and square step markers. Light and Dark keep their original palettes. All artwork is local; the guide still uses readable system fonts.
- A black-and-white programmer dog, with glasses, headphones, and a laptop with a `</>` sticker, sits beside the introduction. Small, individually placed IT details replace repeated character rows: a lightbulb by idea selection, a Markdown file on the documentation checkpoint, a magnifier over code beside the review prompt, and a cloud upload by the push checks. Below the final checkpoint, the dog naps beside a laptop that shows a check mark. Some sections deliberately stay quiet; there is no mascot strip at every step.
- These are static decorations, not extra tasks or controls; they do not appear in Light, Dark, or print.
- The theme choices form a native radio group: Tab into it, then use the arrow keys to select a theme. The labels become **Hell / Dunkel / Pixel** in German.
- German covers the complete guide, all nine prompts, navigation, accessible labels, table labels, and feedback messages. Product control names, technical identifiers, file paths, links, and the original screenshots are preserved. Linked repository documents and external references are not translated by this switch.
- Every copy-ready prompt has a **Copy / Kopieren** button that copies the full prompt in the selected language. The first prompt is collapsed until you expand it, with the line count calculated from its current text.
- Each step ends with a checkpoint you can tick. Ticks are saved **only in the learner's own browser** (`localStorage`), and progress shows in the step list. Nothing is sent anywhere. The page uses no analytics, web fonts, or other external requests.
- Theme and language choices are also saved only in this browser, separately from checkpoints. Switching theme or language keeps your progress, expanded prompt, and reading position; resetting progress does not clear your preferences. If storage is blocked or full, the page explains that changes may not survive a reload.
- Screenshot credits and sources appear at the end of the page, as `SOURCES.md` requires.

| File | Purpose |
|---|---|
| `index.html` | The page content, mirrored from `README.md` and `SOURCES.md`. |
| `styles.css` | Layout, Light/Dark/Pixel palettes, and a quiet print style for paper handouts. |
| `app.js` | Theme and language switching, copy buttons, the collapsible prompt, checkpoint progress, and step navigation. |
| `i18n-de.js` | Bundled German content and interface messages, keyed by the `data-i18n` markers in `index.html`. No translation service or network API is used. |
| `favicon.svg` | The browser tab icon. |
| `assets/` | Copies of the repository screenshots. |
| `assets/pixel-friends/` | Six transparent sprites: the coding and napping programmer dogs (52×64 and 84×34 pixels) and four 24×24 IT icons: a lightbulb, a Markdown file, a code-review magnifier, and a cloud upload. Each is placed once. The cartoon dog was generated from a supplied reference; the original photo is not included in the repository. |
| `.nojekyll` | Tells GitHub Pages to serve the files exactly as they are. |

## Preview it locally

Open `docs/index.html` in your browser by double-clicking it. Everything works from the file.

Without JavaScript, the complete English guide remains readable, all prompts are expanded, and the theme follows the operating system. The preference controls and copy buttons are hidden. Browser support for saving preferences on `file:` URLs varies; use the local server below for a consistent origin.

If you prefer a local web address and Python is already installed, run this from the repository root, then open <http://127.0.0.1:8000/>:

```text
python -m http.server 8000 --bind 127.0.0.1 --directory docs
```

Press `Ctrl+C` in the terminal to stop it.

## Publish it later with GitHub Pages

1. On GitHub, open the repository's **Settings**, then **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose the `master` branch and the `/docs` folder, then select **Save**.
4. After a minute or two, the site appears at `https://tajaly.github.io/prompt-to-prototype-learning-path/`, and the Pages settings page shows the exact address.

Check these points before you publish:

- **Your plan.** This repository is currently private. GitHub Pages for a private repository needs a paid plan, such as GitHub Pro for a personal account. With GitHub Free, the repository must be public.
- **Visibility.** A published Pages site is public on the internet, even when the repository is private. Only GitHub Enterprise Cloud offers access-controlled Pages.
- **Links.** The **Plan template**, **Example plan**, and **Facilitator setup** links open the files on GitHub. While the repository is private, only people with access can open them.

## Keep the web page and the guide in sync

`README.md` is the source of truth. The web page is a hand-made copy, so update both in the same change:

- If you change the guide text in `README.md` or the credits in `SOURCES.md`, make the matching edit in `index.html`.
- If you change a prompt, keep the text inside the matching `<pre class="prompt-body"><code>` block word for word identical to the README. The **Copy** button copies exactly that text. Write `<`, `>`, and `&` as `&lt;`, `&gt;`, and `&amp;`.
- If you replace or add a screenshot in `assets/`, copy it into `docs/assets/` too.
- If you add or rename a step or subsection, update the step list in the sidebar of `index.html` as well.
- Keep `i18n-de.js` in sync with changed guide text and prompts. Preserve section IDs, link destinations, technical identifiers, and placeholder highlighting in the German markup.
- Translation markers belong on static content, not containers holding controls or other translation markers. The script keeps the original English markup and translates content in place without replacing interactive controls.
- Include translations for accessible attributes with `data-i18n-aria-label`, `data-i18n-alt`, and `data-i18n-content`. Keep English runtime messages in `app.js` and German runtime messages in `i18n-de.js` aligned; an incomplete catalog leaves the guide in English with a visible error rather than a mixed-language page.
- Keep artwork decorative: apply it through empty CSS pseudo-elements in Pixel mode, without adding text to headings, prompts, or accessible labels. Use nearest-neighbor scaling and transparent backgrounds, and size each box at exactly twice the sprite's pixel dimensions so every art pixel stays a crisp square. Place an IT-themed illustration only where it relates to the content; do not add a repeated illustration strip when adding a step.

## Check preference changes

Use the same local address and port when reloading:

1. With no saved theme, confirm that the page follows your system theme. Select each of Light, Dark, and Pixel and reload; the manual choice should win over the system setting, including Pixel on a dark system.
2. Switch to German and check the introduction, all seven steps, sources, image descriptions, and mobile table labels. Copy a collapsed prompt and confirm the full German text is copied. Switch back and confirm the original English text returns.
3. Tick a checkpoint, expand the first prompt, and switch languages. The checkpoint and expanded state should remain. Reload to check saved language, theme, and checkpoints; reset progress and confirm the two preferences remain.
4. Check both languages and all three themes at 375px and desktop widths, including the mobile steps sheet, keyboard focus, arrow-key theme selection, and print preview. Confirm that the introduction and small cameos fit without covering text or controls, and completed step numbers still turn green. Pixel artwork should not appear in Light, Dark, or print.
5. With browser storage unavailable, confirm that the preference controls still work for the current visit and that storage warnings appear. With JavaScript disabled, confirm the English guide and expanded prompts remain readable.
