import { useState } from "react";

import { getAllFilesFrontMatter } from "../lib/mdx-to-post";

import Layout from "../layouts/layout";

import Meta from "../components/meta";
import ContentPrimary from "../components/content-primary";

/** 
@todo {features}: search and pagination

@description  
- Homepage of the site
- Display latest content
- Logic: get all front matter and sort as per date
*/
export default function Home({ posts }) {
  const [searchValue, setSearchValue] = useState("");

  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Meta />
      <Layout>
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
        <ContentPrimary posts={posts}></ContentPrimary>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
