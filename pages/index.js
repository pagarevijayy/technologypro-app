import { getAllFilesFrontMatter } from "../lib/mdx-to-post";
import Layout from "../layouts/layout";
import Meta from "../components/meta";
import ContentPrimary from "../components/content-primary";

/** 
@description  
This is the landing page.
It uses getStaticProps to fetch all blog posts at build time.
*/
export default function Home({ posts, heroFrontMatterData }) {
  return (
    <>
      <Meta />
      <Layout>
        <ContentPrimary isHomePage={true} posts={posts} heroFrontMatterData={heroFrontMatterData}></ContentPrimary>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  // Featured is a promo slot (editorial or paid), not a second Latest feed.
  // Optional frontmatter `featuredOrder` (lower = earlier). Otherwise newest featured first.
  const heroFrontMatterData = posts
    .filter((post) => post.featuredPost === true)
    .sort((a, b) => {
      const orderA = Number.isFinite(a.featuredOrder) ? a.featuredOrder : Number.MAX_SAFE_INTEGER;
      const orderB = Number.isFinite(b.featuredOrder) ? b.featuredOrder : Number.MAX_SAFE_INTEGER;
      if (orderA !== orderB) return orderA - orderB;
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    })
    .slice(0, 3);

  return { props: { posts, heroFrontMatterData } };
}
