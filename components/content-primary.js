import { useState } from "react";
import NotFound from "../components/not-found";
import { FeaturedPosts } from "../components/micro-components";
import PostPreview from "../components/post-preview";
import { IntroductionBlock } from "./micro-components";

/** This is the landing page (homepage) content.*/

const ContentPrimary = ({ posts, heroFrontMatterData, isHomePage, isCategoryRoute }) => {
  const [searchValue, setSearchValue] = useState("");

  if (!posts) {
    return null
  }

  const query = searchValue.trim().toLowerCase();
  const showFeatured = !query && !isCategoryRoute && heroFrontMatterData?.length > 0;

  const filteredBlogPosts = posts
    .slice()
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) => {
      if (!query) {
        return true;
      }

      const haystack =
        frontMatter.searchText ||
        [frontMatter.title, frontMatter.summary, frontMatter.category, frontMatter.author]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

      return haystack.includes(query);
    });

  return (
    <div>
      {isHomePage && <div className="pb-8 md:hidden">
        <IntroductionBlock />
      </div>}

      <div className="search-box relative w-full mb-4">
        <input
          aria-label="Search articles by title, summary, or topic"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search titles, topics, or keywords"
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
      {showFeatured && (
        <FeaturedPosts heroFrontMatterData={heroFrontMatterData} />
      )}

      <h3 className="font-bold text-2xl mb-4 mt-8">Latest Posts</h3>
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
