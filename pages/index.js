import Layout from "../layouts/layout";
import Container from "../layouts/container";
import Meta from "../components/meta";

export default function Home() {
  return (
    <>
      <Meta />
      <Layout>
        <Container>
          <p className="p-5 text-center">I Should be main content</p>
        </Container>

        {/* <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container> */}
      </Layout>
    </>
  );
}
