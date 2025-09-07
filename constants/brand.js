import { getAllFilesFrontMatter } from '../lib/mdx-to-post';

export const brandLogo = (
  <a>
    Technology <span className="text-indigo-400">PRO</span>{" "}
  </a>
);

export async function getHeroFrontMatterData(allPosts) {
  if (!allPosts || allPosts.length === 0) {
    allPosts = await getAllFilesFrontMatter("blog");
  }

  const featuredPosts = allPosts
    .filter(post => post.featuredPost === true)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);

  return featuredPosts;
}

/** Advertisement/Brand Promotions Content */
export const adPromotionsData = [
  {
    title: "Weekly - Work Tracker",
    description: "Plan your week, track your goals, and stay productive.",
    redirectURL: "https://weekly-app.technologypro.in/",
    // redirectTag: "weekly-app.technologypro.in",
    imageURL: "/static/ads/eragap/weekly-work_tracker.png",
    imageWidth: "600",
    imageHeight: "200",
  },
  {
    title: "ezCreatives",
    description: "Auto-generate images for your social media feed.",
    redirectURL: "www.vijaypagare.in/app/ezcreatives",
    // redirectTag: "www.ezcreatives.in",
    imageURL: "/static/ads/eragap/ez_creatives.png",
    imageWidth: "600",
    imageHeight: "200",
  },
  {
    title: "We The Sapiens",
    description: "Philosophy across ages, cultures, and professions.",
    redirectURL: "https://www.instagram.com/wethesapiens_",
    redirectTag: "@wethesapiens_",
    imageURL: "/static/ads/eragap/wts.png",
    imageWidth: "600",
    imageHeight: "200",
  },
];
