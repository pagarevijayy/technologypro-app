import { getAllFilesFrontMatter } from "../lib/mdx-to-post";
import { getHeroFrontMatterData } from "../constants/brand";
import Layout from "../layouts/layout";
import Meta from "../components/meta";
import ContentPrimary from "../components/content-primary";

/** 
@todo {features}: search and pagination

@description  
- Homepage of the site
- Display latest content
- Logic: get all front matter and sort as per date
*/
export default function Home({ posts, heroFrontMatterData }) {
  return (
    <>
      <Meta />
      <Layout>
        <ContentPrimary posts={posts} heroFrontMatterData={heroFrontMatterData}></ContentPrimary>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");
  const heroFrontMatterData = await getHeroFrontMatterData(posts);

  return { props: { posts, heroFrontMatterData } };
}
