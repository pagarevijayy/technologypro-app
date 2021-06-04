import Layout from "../../layouts/layout";
import ContentSnippet from "../../layouts/content-snippet";
import Meta from "../../components/meta";
import PostContent from "../../components/post-content";

const BlogPost = () => {
  return (
    <>
      <Meta />
      <Layout>
        <ContentSnippet>
          <PostContent />
        </ContentSnippet>
        {/* (extra content goes here.) */}
      </Layout>
    </>
  );
};

export default BlogPost;

/*
- return actual post


todo
- update meta

*/
