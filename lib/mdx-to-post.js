import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkCodeTitles from "remark-code-titles";

const root = process.cwd();

function remarkStaticImageAttributes() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === "mdxJsxFlowElement" && node.name === "Image") {
        node.attributes = node.attributes.map((attribute) => {
          if (
            attribute.type !== "mdxJsxAttribute" ||
            attribute.value === null ||
            typeof attribute.value !== "object"
          ) {
            return attribute;
          }

          const expression = attribute.value.value;
          const template = expression.match(/^`([^`$]*)`$/);
          const quoted = expression.match(/^(?:"([^"]*)"|'([^']*)')$/);

          if (template) {
            attribute.value = template[1];
          } else if (quoted) {
            attribute.value = quoted[1] ?? quoted[2];
          } else if (/^\d+$/.test(expression)) {
            attribute.value = expression;
          }

          return attribute;
        });
      }

      for (const child of node.children || []) {
        visit(child);
      }
    };

    visit(tree);
  };
}

/**
 * Read file names from the data subdirectory.
 * Use: Get slugs (file names)
 *
 * @param {string} type Name of the subdirectory.
 * @return {string[]} List of file names.
 */
export async function getFileNames(type) {
  return fs.readdirSync(path.join(root, "data", type));
}

/**
 * Read an MDX file from the data subdirectory.
 * Use: Get (mdx) file  content
 *
 * @param {string} type Name of the subdirectory.
 * @param {string} slug Name of the file w/o extension.
 *
 * @typedef {Object} returnData
 * @property {Object} mdxSource The parsed data from the mdx-remote package
 * @property {Object} frontMatter - FrontMatter data from the file
 * @return {returnData} Data from the frontMatter and mdx
 */
export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8");

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkStaticImageAttributes,
        remarkCodeTitles, // Keep this if still needed
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, {
          behavior: "prepend",
          properties: { className: ["anchor"] },
          content: { type: "text", value: "" }, // optional; you can also keep the default icon
        }],
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

/**
 * Read frontMatter content from all the files
 * Use: Preview the file
 *
 * @param {string} type Name of the subdirectory.
 * @return {Object[]} Array of objects containing the frontMatter data.
 */
export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, "data", type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8"
    );
    const { data, content } = matter(source);
    const slug = postSlug.replace(".mdx", "");
    const searchableBody = content
      .replace(/<[^>]+>/g, " ")
      .replace(/[#*_`>[\]]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const searchText = [
      data.title,
      data.summary,
      data.category,
      data.author,
      data.seoTitle,
      slug,
      searchableBody,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return [
      {
        ...data,
        readingTime: readingTime(content),
        slug,
        searchText,
      },
      ...allPosts,
    ];
  }, []);
}
