import { useState } from "react";
import NotFound from "../components/not-found";
import FeaturedPosts from "../components/featured-posts";
import PostPreview from "../components/post-preview";
import ContentSnippet from "../layouts/content-snippet";
import { FaInstagram } from 'react-icons/fa';
import {
  PROJECT_NAME,
  PROJECT_DESCRIPTION_ALT,
} from "../constants/core";

/** This is the landing page content.*/

const ContentPrimary = ({ posts, heroFrontMatterData, isHomePage, isCategoryRoute }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  // console.log('get data for hero post #heroPostData', posts);

  return (
    <div>
      {isHomePage && <div className="introduction-block pb-8 md:hidden">
        <ContentSnippet>
          <div>
            <h4 className="font-medium text-lg">🚀 {PROJECT_NAME}</h4>
            <p className="mt-4 text-gray-600 text-sm">{PROJECT_DESCRIPTION_ALT}</p>
            <p className="">
              <a
                href="http://instagram.com/technologypro.in"
                className="mt-4 inline-flex items-center gap-2  transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="text-sm font-medium group-hover:underline">
                  Follow us on Instagram
                </span>
              </a>
            </p>
          </div>
        </ContentSnippet>
      </div>}

      <div className="search-box relative w-full mb-4">
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
      {!searchValue && !isCategoryRoute && <FeaturedPosts heroFrontMatterData={heroFrontMatterData} />}

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
