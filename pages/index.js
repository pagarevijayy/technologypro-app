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
show featured x2 and latest mixed. (allow pagination and search)
*/
