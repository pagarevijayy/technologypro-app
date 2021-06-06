import { useState } from "react";
import NotFound from "../components/not-found";
import HeroPost from "../components/hero-post";
import PostPreview from "../components/post-preview";

/** This is the landing page content. Hero-posts are hard-coded.*/

const ContentPrimary = ({ posts }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

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
      <div className="relative w-full mb-4">
        <input
          aria-label="Search articles"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="block w-full px-4 py-2 bg-gray-50 text-gray-800 outline-none border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500  rounded-md"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      {!searchValue && (
        <section className="space-y-4">
          <h3 className="font-bold text-2xl mb-4 mt-8">Featured Posts</h3>

          {/* can hard code featured or most popular mosts here */}
          <HeroPost frontMatter={heroOne}></HeroPost>
          <HeroPost frontMatter={heroTwo}></HeroPost>
        </section>
      )}
      <h3 className="font-bold text-2xl mb-4 mt-8">All Posts</h3>
      {!filteredBlogPosts.length && <NotFound />}

      <section className="md:grid md:grid-cols-2 gap-6 mt-6 space-y-6 md:space-y-0">
        {filteredBlogPosts.map((post, index) => (
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
