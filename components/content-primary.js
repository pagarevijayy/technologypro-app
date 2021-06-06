import HeroPost from "../components/hero-post";
import PostPreview from "../components/post-preview";

/** This is the landing page content. Hero-posts are hard-coded.*/

const ContentPrimary = ({ posts }) => {
  console.log("posts", posts);
  const heroOne = {
    title: "Beginner’s Guide to the Programming Portfolio",
    publishedAt: "2017-02-24",
    summary:
      "Learn how to create your programming portfolio from the ground up, including tips and tricks I learned building my own. Learn how to create your programming portfolio from the ground up, including tips and tricks I learned building my own.",
    image:
      "/static/images/beginners-guide-to-the-programming-portfolio/banner.png",
    category: "android",
    readingTime: {
      text: "12 min read",
      minutes: 11.095,
      time: 665700,
      words: 2219,
    },
    slug: "guide-to-portfolio",
  };

  const heroTwo = {
    title: "Web Fonts in 2021",
    publishedAt: "2021-01-13",
    summary:
      "Learn the best practices for high-performance sites using web fonts, updated for 2021.",
    image: "/static/images/fonts/banner.png",
    category: "how-to",
    readingTime: {
      text: "5 min read",
      minutes: 4.205,
      time: 252300,
      words: 841,
    },
    slug: "fonts",
  };

  return (
    <div>
      <section className="space-y-4">
        {/* can hard code featured or most popular mosts here */}
        <HeroPost frontMatter={heroOne}></HeroPost>
        <HeroPost frontMatter={heroTwo}></HeroPost>
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
