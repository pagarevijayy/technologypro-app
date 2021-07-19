# The Blog App

(update later!)

## Note

1. Hero post is hard-coded (featured or most popular)
2. Don't use images with too much text (looks ugly)

## MDX File Rules

1. Double check **frontMatter** details and format.
2. FrontMatter:
   1. `filename is the slug.`
   2. `title {string}, publishedAt {yyyy-mm-dd}, summary {string - at least two lines}, image{"/path-to-image-from-public-root"}, category:{"route-string" e.g. 'how-to' or 'social-media'}`
   3. Sample (link later)
3. Internal Links start with `'/'` or `'#'`
4. For internal images, use `'next/Image'` component.
5. External image needs to be configured in `next.cong.js`, so avoid.
6. To wrap an `<Image>` inside an link use `<a> </a>`. Else the normal .md format will do.
7. Declare new components if needed.
