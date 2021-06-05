import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
// import mdxPrism from "mdx-prism";

const root = process.cwd();

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
        require("remark-slug"),
        [
          require("remark-autolink-headings"),
          {
            linkProperties: {
              className: ["anchor"],
            },
          },
        ],
        require("remark-code-titles"),
      ],
      rehypePlugins: [],
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
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
}
