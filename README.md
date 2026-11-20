# blog

Minimal personal blog built with [Astro](https://astro.build), TypeScript, and Markdown content collections. Styled for a clean, essay-first reading experience and deployed to GitHub Pages.

**Live URL (after Pages is enabled):** https://flipkers.github.io/blog

## Develop locally

```bash
npm install
npm run dev
```

Open http://localhost:4321/blog/

```bash
npm run build
npm run preview
```

### Typography / bilingual preview branch

While design is in progress, use the preview branch (not `main`):

```bash
git clone https://github.com/Flipkers/blog.git
cd blog
git checkout preview/typography
npm install
npm run dev
```

Or with an existing clone:

```bash
git fetch origin
git checkout preview/typography
git pull origin preview/typography
npm install
npm run dev
```

Above the post list (right-aligned), filter with **All · EN · RU** (or `?lang=all|en|ru`). Choice can persist in `localStorage`. Sample posts: `/blog/typography-sample/` (EN) and `/blog/tipografika-obrazets/` (RU). Body type is the Iowan/Palatino system stack for both languages.

## Add a post

1. Create a Markdown file in `src/content/blog/`, for example `src/content/blog/my-new-essay.md`.
2. Add frontmatter:

   ```md
   ---
   title: "My new essay"
   description: "One or two sentences for SEO and previews."
   pubDate: 2026-11-20
   draft: false
   lang: en
   ---

   Your essay here.
   ```

   `lang` is `en` or `ru` (defaults to `en`). Posts are independent — not translation pairs. The home list filters by language; URLs stay `/blog/<slug>/`.

3. Commit and push to `main` when ready to ship. GitHub Actions will rebuild and deploy the site.

Set `draft: true` to keep a post out of production builds.

## Enable GitHub Pages

1. Open the repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually). The first deploy creates the Pages site.

## Site URL

In `astro.config.mjs`, replace the placeholder `site` value (`https://flipkers.github.io/blog`) with your real site URL. Keep `base: '/blog'` for this GitHub Pages project site; adjust or remove `base` if you move to a custom domain at the root.
