/** Default Meta */
export const PROJECT_TITLE =
  "Technology Pro – Everything in tech, through an Indian lens";
export const PROJECT_PUNCHLINE = "Everything in tech. Indian lens.";
export const PROJECT_DESCRIPTION =
  "What’s happening in technology, read from India — news, explainers, and stories worth your time. For curious learners and professionals.";
export const PROJECT_DESCRIPTION_ALT =
  "Everything going on in the tech world, through an Indian lens.";
export const PROJECT_DESCRIPTION_ALT_2 =
  "For curious learners and professionals. We cover what’s happening in tech worldwide, then say why it matters here.";
export const PROJECT_TYPE = "website";
export const PROJECT_ROOT_URL = "https://technologypro.in";
export const PROJECT_BANNER_URL =
  "https://technologypro.in/static/assets/banner_techpro.png";
export const TWITTER_HANDLE = "";
export const CONTACT_EMAIL = "pagarevijayy+techpro@gmail.com";
export const INSTAGRAM_URL = "https://www.instagram.com/technologypro.in";
export const NEWSLETTER_URL = "https://technologypro.substack.com/";

/** To be used at places other than Meta */
export const PROJECT_NAME = "Technology Pro";
export const COPYRIGHT_NAME = "Technology Pro";

export const CATEGORIES = [
  {
    title: "India Tech",
    route: "/category/news",
  },
  {
    title: "Guides",
    route: "/category/how-to",
  },
  {
    title: "Creator Growth",
    route: "/category/social-media",
  },
  {
    title: "Tech Stories",
    route: "/category/stories",
  },
];

export const getCategoryName = (categoryRoute) => {
  const category = CATEGORIES.filter((c) =>
    c.route.toLowerCase().includes(categoryRoute)
  );

  const categoryName = category?.[0].title;
  return categoryName || "";
};
