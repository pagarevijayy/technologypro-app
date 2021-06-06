import { getAllFilesFrontMatter } from "../lib/mdx-to-post";
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
export default function Home({ posts }) {
  return (
    <>
      <Meta />
      <Layout>
        <ContentPrimary posts={posts}></ContentPrimary>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
