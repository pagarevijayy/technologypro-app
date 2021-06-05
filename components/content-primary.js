import HeroPost from "../components/hero-post";
import PostPreview from "../components/post-preview";

//  This is the landing page content.

const ContentPrimary = ({ posts }) => {
  console.log("posts", posts);

  return (
    <div>
      <section className="space-y-4">
        {/* can hard code featured or most popular mosts here */}
        <HeroPost></HeroPost>
        {/* <HeroPost></HeroPost> */}
      </section>
      <section className="md:grid md:grid-cols-2 gap-6 mt-6 space-y-6 md:space-y-0">
        {posts.map((post, index) => (
          <PostPreview
            key={`${post.title}_${index}`}
            frontMatter={post}
          ></PostPreview>
        ))}
      </section>
    </div>
  );
};

export default ContentPrimary;
