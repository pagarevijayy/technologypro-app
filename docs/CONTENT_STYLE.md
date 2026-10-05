# Content Style

Operating rules for every TechnologyPro post.

## Positioning

Everything going on in the tech world, through an Indian lens — for curious learners and professionals.

The job is not originality. It is taste: a short, high-signal read with a local brain. If a US recap would have said the same thing, the piece is not done.

## Reader

Curious learners and professionals in India (and Indians following tech from anywhere). They want to know what’s happening, why it matters here, and what to do with it.

Anything is in-scope if it hooks that reader, teaches something, or creates traffic, serendipity, or inbound opportunity. Gadgets and reviews are fine when they do that.

## Categories

Keep the existing routes. Only the labels change.

| Frontmatter `category` | Nav label | What goes here |
|---|---|---|
| `news` | India Tech | India-origin stories: products, companies, policy, local launches |
| `how-to` | Guides | Evergreen how-tos and explainers |
| `social-media` | Creator Growth | Social/creator stack: Instagram, YouTube, distribution tools |
| `stories` | Tech Stories | Hot global tech, told for an Indian reader |

Split: **India Tech = the event is here. Tech Stories = the event is elsewhere, the brain is here.** Do not invent new category strings.

## Mix (starting point, not a law)

We are in MVP. Experiment. Rough homepage diet:

- 40% India Tech
- 30% Guides
- 15% Creator Growth
- 15% Tech Stories

Fill Tech Stories; it is empty today. Change the mix when a metric says to.

## Publish / refuse

Publish:

- India-origin news and topics
- Evergreen guides people will still search for
- Creator/social tools that our audience actually uses
- Global tech stories with a real India consequence
- Product, startup, policy, or gadget pieces that hook learners and professionals

Refuse:

- Generic global recaps with a one-line “also in India”
- Hype with no takeaway
- Empty-calorie roundups

## Default structure

1. Catchy, specific headline
2. 2–3 sentence intro that states the interesting part
3. 3–5 insights
4. Short takeaway
5. CTA: `👉 For more such insights, follow us on [Insta](https://www.instagram.com/technologypro.in) and join our [newsletter](https://technologypro.substack.com/)!`
6. 3–5 working source URLs when the piece depends on facts

## Writing rules

- 400–700 words. 3–5 minute read.
- Short paragraphs, 2–4 sentences.
- Simple language. Explain jargon once.
- Light human commentary. Not a press release.
- Root-relative internal links only.
- `featuredPost: true` only when the post should occupy a homepage hero slot.

## Frontmatter

Required:

```yaml
title: "..."
summary: "Two or more sentences. What happened, and why an Indian reader should care."
publishedAt: "yyyy-mm-dd"
author: "Editorial Team – Technology Pro"
category: "news"   # news | how-to | social-media | stories
image: "/static/images/<slug>/hero.jpg"
slug: "<slug>"
```

Optional: `seoTitle`, `smartCrop`, `smartCropMobile`, `featuredPost`.

Hero image lives at `public/static/images/<slug>/`. MDX `width` / `height` must match the file. Use `next/Image`. Avoid text-heavy images.

The sitemap is generated at build time from `data/**/*.mdx`. Do not hand-edit `public/sitemap.xml`.

## Workflow

1. Pick a trending story or an evergreen topic that fits a nav bucket.
2. Gather 3–5 primary sources.
3. Write to this spec. Put the India lens in the piece, not in a closing sentence.
4. Review in Grok only if the draft needs a pass; do not swap the topic.
5. Generate or request a hero image; save it under the slug path.
6. Add the MDX file under `data/blog/`.
7. Recut for LinkedIn first, then Instagram / newsletter.

## Image prompt

```
Create a polished 16:9 editorial hero image for an Indian tech blog article about [TOPIC].

Style: modern flat vector infographic, minimal, clean, premium editorial look, suitable for a blog hero image.

Composition:
- [main visual element]
- [secondary visual element]
- [third visual element]
- Background: [color or mood]
- Accent colors: [1-3 colors]
- Keep it clean and not crowded
- No extra text except [allowed text]

Dimensions:
- 16:9 horizontal
- 1536x864 or 1536x1024
- leave safe space around key elements for blog cropping
```

## Publishing checklist

- [ ] Indian lens is in the piece, not bolted on
- [ ] Category matches the table above
- [ ] 400–700 words, sources work, CTA present
- [ ] Frontmatter matches the spec
- [ ] Hero image exists at the linked path with matching dimensions
- [ ] `featuredPost` is true only if it should be a homepage hero
