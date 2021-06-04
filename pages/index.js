import Layout from "../layouts/layout";
import Container from "../layouts/container";

import Meta from "../components/meta";
import ContentAsideRight from "../components/content-aside-right";
import ContentPrimary from "../components/content-primary";

export default function Home() {
  return (
    <>
      <Meta />
      <Layout>
        <Container>
          <div className="md:grid md:grid-cols-3 gap-6 my-4">
            <div className="col-span-2 my-4">
              <ContentPrimary></ContentPrimary>
            </div>
            <div className="col-span-1 my-4">
              <ContentAsideRight></ContentAsideRight>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
