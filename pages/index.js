import Layout from "../layouts/layout";
import Meta from "../components/meta";
import ContentPrimary from "../components/content-primary";

export default function Home() {
  return (
    <>
      <Meta />
      <Layout>
        <ContentPrimary></ContentPrimary>
      </Layout>
    </>
  );
}

/*
features: search and pagination

logic: 
- sort content on the basis of date.
*/
