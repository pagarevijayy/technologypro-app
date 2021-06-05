import { MDXRemote } from "next-mdx-remote";

import { getFileNames, getFileBySlug } from "../../lib/mdx-to-post";

import Layout from "../../layouts/layout";
import ContentSnippet from "../../layouts/content-snippet";

import Meta from "../../components/meta";
import PostContent from "../../components/post-content";
import MDXComponents from "../../components/mdxComponents";

const BlogPost = ({ mdxSource, frontMatter }) => {
  return (
    <>
      <Meta />
      <Layout>
        <ContentSnippet>
          <PostContent>
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

  // const posts = await getAllFilesFrontMatter("blog");

  return { props: { ...post } };
}
