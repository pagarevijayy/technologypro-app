import HeroPost from "./hero-post";

const FeaturedPosts = ({ heroFrontMatterData }) => {

  if (!heroFrontMatterData || heroFrontMatterData.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <h3 className="font-bold text-2xl mb-4 mt-8">Featured Posts</h3>

      {
        heroFrontMatterData?.map((postFrontMatter, index) => (
          <HeroPost
            key={`hero_${index}`}
            frontMatter={postFrontMatter}
          ></HeroPost>
        ))
      }
    </section>
  );
};

export default FeaturedPosts;
