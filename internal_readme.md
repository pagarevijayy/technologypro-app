# The Blog App

How to add and maintain posts in this repository.

Read these first:

1. [`docs/CONTENT_STYLE.md`](docs/CONTENT_STYLE.md) — positioning, voice, categories, frontmatter, checklist
2. [`docs/INDIA_TECH_PLATFORM_DIRECTION.md`](docs/INDIA_TECH_PLATFORM_DIRECTION.md) — strategy and MVP
3. Existing files under [`data/blog/`](data/blog/) — live MDX shape

## Positioning (do not drift)

Everything going on in the tech world, through an Indian lens — for curious learners and professionals.

## MDX mechanics

Posts live at `data/blog/<slug>.mdx` and render at `/blog/<slug>`.

Required frontmatter:

```yaml
title: "..."
summary: "At least two sentences."
publishedAt: "yyyy-mm-dd"
author: "Editorial Team – Technology Pro"
category: "news"
image: "/static/images/<slug>/hero.jpg"
slug: "<slug>"
```

`category` must be one of:

- `news` → India Tech
- `how-to` → Guides
- `social-media` → Creator Growth
- `stories` → Tech Stories

Optional: `seoTitle`, `smartCrop`, `smartCropMobile`, `featuredPost`, `featuredOrder`.

### Featured vs Latest

- **Latest** = every post, newest first. Do not skip posts.
- **Featured** = promo rail (editorial pick or paid). Default off.
- Cap at 1–3 featured posts sitewide. Overlap with Latest is allowed for a promoted story; do not flag every new post or Featured becomes a second Latest.
- `featuredOrder` (lower = earlier) pins a paid/older piece above a newer flagged one. See [`docs/CONTENT_STYLE.md`](docs/CONTENT_STYLE.md).

## Images

- Store under `public/static/images/<slug>/`
- Reference from the public root, e.g. `/static/images/<slug>/hero.jpg`
- Use the `Image` component for internal images
- Wrap in `<a>` only when the image itself is a link
- Width/height in MDX must match the file
- Avoid images with lots of text

## Links

- Root-relative internal links (`/blog/...`)
- `#` for in-page anchors
- Working `https` URLs in Sources

## Sitemap

Generated at build from `data/**/*.mdx` via `lib/generate-sitemap.js`. Do not commit hand-edits to `public/sitemap.xml`.

## Verification

`npm run build` is the check. Preview locally with `npm run dev`.
