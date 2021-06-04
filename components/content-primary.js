import ContentSnippet from "../layouts/content-snippet";
import HeroPost from "../components/hero-post";
import PostPreview from "../components/post-preview";

const ContentPrimary = () => {
  return (
    <div>
      <section className="space-y-4">
        <HeroPost></HeroPost>
        <HeroPost></HeroPost>
      </section>
      <section className="md:grid md:grid-cols-2 gap-4 mt-4 space-y-4 md:space-y-0">
        <div>
          <PostPreview></PostPreview>
        </div>
        <div>
          <PostPreview></PostPreview>
        </div>
      </section>
    </div>
  );
};

export default ContentPrimary;
