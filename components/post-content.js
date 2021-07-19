import Link from "next/link";
import { parseISO, format } from "date-fns";

const PostContent = ({ frontMatter, children }) => {
  // console.log("frontMatter", frontMatter);

  return (
    <div className="max-w-prose mx-auto p-2 md:p-5">
      <div>
        <Link href={`/blog/${frontMatter.slug}`}>
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
      </div>

      <div className="prose">{children}</div>
    </div>
  );
};

export default PostContent;
