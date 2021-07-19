import { heroFrontMatterData } from "../constants/brand";
import HeroPost from "./hero-post";

const FeaturedPosts = () => {
  return (
    <section className="space-y-4">
      <h3 className="font-bold text-2xl mb-4 mt-8">Featured Posts</h3>

      {
        /* can hard code featured or most popular mosts here */
        heroFrontMatterData.map((postFrontMatter, index) => (
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
