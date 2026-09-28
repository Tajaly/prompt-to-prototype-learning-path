# Web version of the guide

This folder is a static website version of [`README.md`](../README.md), ready to publish with GitHub Pages. It has no build step and no dependencies.

On the web page:

- The whole guide is on one page, with a step list that follows you as you scroll.
- Every copy-ready prompt has a **Copy** button. The first prompt is collapsed until you expand it.
- Each step ends with a checkpoint you can tick. Ticks are saved **only in the learner's own browser** (`localStorage`), and progress shows in the step list. Nothing is sent anywhere. The page uses no analytics, web fonts, or other external requests.
- Screenshot credits and sources appear at the end of the page, as `SOURCES.md` requires.

| File | Purpose |
|---|---|
| `index.html` | The page content, mirrored from `README.md` and `SOURCES.md`. |
| `styles.css` | Layout and styling, including dark mode and a print style for paper handouts. |
| `app.js` | Copy buttons, the collapsible prompt, checkpoint progress, and step navigation. The page still reads correctly without JavaScript. |
| `favicon.svg` | The browser tab icon. |
| `assets/` | Copies of the screenshots in the repository's `assets/` folder. |
| `.nojekyll` | Tells GitHub Pages to serve the files exactly as they are. |

## Preview it locally

Open `docs/index.html` in your browser by double-clicking it. Everything works from the file.

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
