import { CATEGORIES } from "../../constants/core";
import { getAllFilesFrontMatter } from "../../lib/mdx-to-post";
import Layout from "../../layouts/layout";
import Meta from "../../components/meta";
import { useRouter } from "next/router";
import ContentPrimary from "../../components/content-primary";

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
  /** Can be optimized by only asking for posts that are needed */
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
