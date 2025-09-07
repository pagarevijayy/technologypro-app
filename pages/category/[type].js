import { CATEGORIES } from "../../constants/core";
import { getAllFilesFrontMatter } from "../../lib/mdx-to-post";
import Layout from "../../layouts/layout";
import Meta from "../../components/meta";
import { useRouter } from "next/router";
import ContentPrimary from "../../components/content-primary";

/**
 * Renders a blog category page, displaying posts filtered by the current category route.
 *
 * @component
 * @param {Object} props
 * @param {Array<Object>} props.posts - Array of post front matter objects to filter and display.
 * @returns {JSX.Element} The rendered category page with filtered posts.
 */
export default function BlogCategory({ posts }) {
  const router = useRouter();

  const currentRoute = router.query.type.toLowerCase();

  const categoryPosts = posts.filter((frontMatter) =>
    frontMatter.category.toLowerCase().includes(currentRoute)
  );

  let categoryName = CATEGORIES.filter((c) =>
    c.route.toLowerCase().includes(currentRoute)
  );

  return (
    <>
      <Meta />
      <Layout>
        <h3 className="font-poppins font-bold text-3xl py-6">
          {categoryName[0].title}
        </h3>
        {/* add no posts available notice */}
        <ContentPrimary
          posts={categoryPosts}
          isCategoryRoute={true}
        ></ContentPrimary>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: CATEGORIES.map((c) => ({
      params: {
        type: c.route.replace("/category/", ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps() {
  /** Enhacement: Can be optimized by only asking for posts that are needed */
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
