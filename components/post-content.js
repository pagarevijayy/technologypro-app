import Link from "next/link";
import { parseISO, format } from "date-fns";
import ShareButtons from "./shareButtons";

const PostContent = ({ frontMatter, children }) => {

  return (
    <div className="article-content max-w-prose mx-auto p-2 md:p-5">
      <div>
        {frontMatter.author && (
          <p className="text-xs text-gray-500 pb-2">By {frontMatter.author}</p>
        )}

        <Link legacyBehavior href={`/blog/${frontMatter.slug}`}>
          <a>
            <h1 className="text-2xl font-poppins font-bold">
              {frontMatter.title}
            </h1>
          </a>
        </Link>

        <div className="inline-grid grid-cols-2 divide-x divide-gray-500 divide-opacity-50 py-4 text-xs text-gray-500">
          <p className="pr-2">
            {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
          </p>
          <p className="pl-2">{frontMatter.readingTime.text}</p>
        </div>

        <ShareButtons
          title={frontMatter.title}
          variant="compact"
        />

      </div>

      <div className="prose">{children}</div>

      <ShareButtons
        title={frontMatter.title}
        className="mt-8"
      />

    </div>
  );
};

export default PostContent;
