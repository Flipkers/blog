# blog

Minimal personal blog built with [Astro](https://astro.build), TypeScript, and Markdown content collections. Styled for a clean, essay-first reading experience and deployed to GitHub Pages.

**Live URL (after Pages is enabled):** https://flipkers.github.io/blog

## Develop locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Add a post

1. Create a Markdown file in `src/content/blog/`, for example `src/content/blog/my-new-essay.md`.
2. Add frontmatter:

   ```md
   ---
   title: "My new essay"
   description: "One or two sentences for SEO and previews."
   pubDate: 2026-11-20
   draft: false
   ---

   Your essay here.
   ```

3. Commit and push to `main`. GitHub Actions will rebuild and deploy the site.

Set `draft: true` to keep a post out of production builds.

## Enable GitHub Pages

1. Open the repository on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the **Deploy to GitHub Pages** workflow manually). The first deploy creates the Pages site.

## Site URL

In `astro.config.mjs`, replace the placeholder `site` value (`https://flipkers.github.io/blog`) with your real site URL. Keep `base: '/blog'` for this GitHub Pages project site; adjust or remove `base` if you move to a custom domain at the root.
