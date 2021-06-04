import Head from "next/head";
import { useRouter } from "next/router";

import {
  PROJECT_TITLE,
  PROJECT_DESCRIPTION,
  PROJECT_ROOT_URL,
  PROJECT_TYPE,
  PROJECT_BANNER_URL,
  PROJECT_NAME,
  TWITTER_HANDLE,
} from "../constants/core";

export default function Meta(props) {
  const router = useRouter();

  const { ...customMeta } = props;

  let faviconEmoji = "🚀";
  let emojiFaviconURL = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22> ${faviconEmoji}</text></svg>`;

  const meta = {
    title: PROJECT_TITLE,
    description: PROJECT_DESCRIPTION,
    type: PROJECT_TYPE,
    image: PROJECT_BANNER_URL,
    rootURL: PROJECT_ROOT_URL,
    name: PROJECT_NAME,
    twitterHandle: TWITTER_HANDLE,
    ...customMeta,
  }; // additional meta field expected: date

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta property="og:url" content={`${meta.rootURL}${router.asPath}`} />
      <link rel="canonical" href={`${meta.rootURL}${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.name} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={meta.twitterHandle} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <meta property="article:published_time" content={meta.date} />
      )}
      <link rel="icon" href={emojiFaviconURL}></link>
    </Head>
  );
}
