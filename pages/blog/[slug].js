import { MDXRemote } from "next-mdx-remote";
import { getFileNames, getFileBySlug } from "../../lib/mdx-to-post";
import { PROJECT_ROOT_URL } from "../../constants/core";
import Layout from "../../layouts/layout";
import ContentSnippet from "../../layouts/content-snippet";

import Meta from "../../components/meta";
import PostContent from "../../components/post-content";
import MDXComponents from "../../components/mdxComponents";

const BlogPost = ({ mdxSource, frontMatter }) => {
  const meta = {
    title: frontMatter.seoTitle || frontMatter.title,
    description: frontMatter.summary,
    date: frontMatter.publishedAt,
    image: `${PROJECT_ROOT_URL}${frontMatter.image}`,
  };

  return (
    <>
      <Meta
        title={meta.title}
        description={meta.description}
        date={meta.date}
        image={meta.image}
      />
      <Layout>
        <ContentSnippet>
          <PostContent frontMatter={frontMatter}>
            <MDXRemote
              {...mdxSource}
              components={{
                ...MDXComponents,
              }}
            />
          </PostContent>
        </ContentSnippet>
        {/* (extra content goes here.) */}
      </Layout>
    </>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const posts = await getFileNames("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);

  return { props: { ...post } };
}
