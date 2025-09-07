# The Blog App

A comprehensive guide for maintaining and contributing to the Blog App project.

## Overview

This document outlines best practices, conventions, and rules for working with blog content, especially MDX files, within this repository.

## General Guidelines

- Keep content clear, concise, and accessible.
- Maintain a consistent tone and style throughout all posts.
- Review your changes before submitting a pull request.

## Note

- Avoid using images with excessive text, as it can negatively impact readability and aesthetics.

## MDX File Rules

1. **FrontMatter**
   - Double-check all **frontMatter** details and formatting.
   - Required fields:
     - `filename`: The slug for the post.
     - `title`: String.
     - `publishedAt`: Date in `yyyy-mm-dd` format.
     - `summary`: String, at least two lines.
     - `image`: Path from the public root, e.g., `"/images/example.jpg"`.
     - `category`: Route string, e.g., `'how-to'` or `'social-media'`.
   - *Sample frontMatter will be provided soon.*

2. **Internal Links**
   - Use `'/'` for root-relative links or `'#'` for anchor links within the same page.

3. **Images**
   - For internal images, use the `'next/Image'` component.
   - Avoid external images unless configured in `next.config.js`.
   - To wrap an `<Image>` in a link, use `<a>...</a>`. Otherwise, standard Markdown image syntax is acceptable.

4. **Components**
   - Declare new components as needed for custom functionality or formatting.

## Contribution

- Follow the above rules for all new or updated blog posts.
- Submit a pull request for review.
- For questions or suggestions, contact the project maintainers.

