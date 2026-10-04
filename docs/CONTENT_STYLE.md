# Content Style

This repo publishes short, practical tech writing for an India-focused audience.

## Editorial stance

- Readers are not looking for novelty; they want signal.
- Filter the noise, explain the useful part, and make it actionable.
- Prefer local relevance when the topic allows it.
- Write like a helpful tech friend, not a corporate press release.
- Keep the read time around 3-5 minutes.

## Preferred categories

- Weekly Digest
- Tool Review
- Startup Case Study
- Tech Explainer

## Content mix

- 40% How-to / Tutorials
- 25% News / Trending
- 20% Tools / Reviews
- 10% Social Media Hacks
- 5% Opinion / Explainers

## Default structure

1. Catchy headline
2. 2-3 sentence intro that hooks the reader
3. 3-5 key insights or points
4. Short takeaway
5. CTA: "👉 For more such insights, follow us on Insta and join our newsletter!"

## Writing rules

- Short paragraphs, usually 2-4 sentences.
- Simple language. Explain jargon if you use it.
- Use light commentary to make the piece feel human.
- Format with markdown.
- 400-700 words for standard posts.
- Include 3-5 working sources at the bottom when relevant.
- Make it feel written, not assembled.

## Workflow

1. Gather source material from RSS, Twitter/X, Reddit, HackerNews, ProductHunt, or other trusted feeds.
2. Pick one hot topic or one evergreen topic.
3. Write the article with the style above.
4. Review the draft in Grok and update content only if needed.
5. Generate a relevant hero image for the article, or create a copy-paste image prompt and send it to ChatGPT/Grok.
6. Save the image under the matching `public/static/images/<slug>/` path and link it in the MDX frontmatter/body.
7. Publish as a new MDX file under `data/blog/`.
8. Update the sitemap.
9. Repurpose the post for Instagram/newsletter/social when needed.

## Image prompt template

Use this when you need to generate or request a hero image outside the repo:

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

- [ ] Article written in the repo's style
- [ ] Hero image created or requested
- [ ] Image saved under `public/static/images/<slug>/`
- [ ] MDX frontmatter image path is correct
- [ ] MDX hero dimensions match the saved image
- [ ] Review the draft in Grok and update content only if needed
- [ ] Sitemap updated
- [ ] Post linked in the relevant navigation/index if needed
- [ ] Quick preview check completed

## Prompt pattern

Use a prompt that asks for:

- a catchy headline
- a 2-3 sentence intro
- 3-5 insights
- a practical takeaway
- a CTA
- sources at the end

Keep the request tight. The goal is a short article that earns attention, not a long one that wastes it.
