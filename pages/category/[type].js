import Layout from "../../layouts/layout";
import ContentSnippet from "../../layouts/content-snippet";

import Meta from "../../components/meta";
import ContentPrimary from "../../components/content-primary";

export default function BlogCategory() {
  return (
    <>
      <Meta />
      <Layout>
        <h1 className="font-poppins font-bold text-3xl py-6">Android</h1>
        <ContentPrimary></ContentPrimary>
      </Layout>
    </>
  );
}

/*
- sort on the basis of subcategory
*/
