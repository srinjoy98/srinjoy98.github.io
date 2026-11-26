# srinjoy-site

Personal website built with [Astro](https://astro.build), deployed to GitHub Pages.
Site design and code were generated with AI (Claude); see the footer credit.

## Run it locally

```sh
npm install
npm run dev        # http://localhost:4321, reloads as you edit
```

## Where things live

| What | File |
|---|---|
| Home page (hero, research, teaching, off-axis) | `src/pages/index.astro` |
| Header, nav, footer, dark-mode toggle | `src/layouts/Base.astro` |
| Colours, fonts, spacing (light + dark) | `src/styles/global.css` |
| Notes: one Markdown file each, `$…$` / `$$…$$` for maths | `src/pages/notes/*.md` |
| Playground tools: one page each | `src/pages/playground/` |
| CV and other files served as-is | `public/` (e.g. `public/cv.pdf` → `/cv.pdf`) |

Search for `[` to find every placeholder still to fill in.

## Deploy

Every push to `main` rebuilds and publishes the site via `.github/workflows/deploy.yml`.

Custom domain: `srinjoysrimani.com`, set in the repo under Settings → Pages → Custom domain
(no CNAME file is needed when deploying with GitHub Actions).
