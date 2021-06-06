import Image from "next/image";
import { parseISO, format } from "date-fns";
import { CATEGORIES } from "../constants/core";

const PostPreview = ({ frontMatter }) => {
  let category = CATEGORIES.filter((c) =>
    c.route.includes(frontMatter.category)
  );

  return (
    <article className="flex flex-col justify-between max-w-md mx-auto bg-gray-100 rounded-lg shadow-sm overflow-hidden">
      <div>
        <figure className="relative h-56 w-full">
          <Image
            alt={frontMatter.title}
            src={frontMatter.image}
            layout="fill"
            objectFit="cover"
          />
        </figure>
        <div className="p-6">
          {category[0] && (
            <aside className="flex items-center font-bold text-xs text-indigo-600 uppercase">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="px-0.5">{category[0].title}</span>
            </aside>
          )}
          <h1 className="mt-2.5 font-poppins font-bold text-2xl line-clamp-2">
            {frontMatter.title}
          </h1>
          <p className="mt-4 line-clamp-3">{frontMatter.summary}</p>
        </div>
      </div>
      <div className="px-6 pb-6 flex justify-between text-xs text-gray-500">
        <p>{format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}</p>
        <p>{frontMatter.readingTime.text}</p>
      </div>
    </article>
  );
};

export default PostPreview;

/* 
@todo:
1. Clamp text and add read more
2. Use Image tag
3. Date formatter
4. Dynamic data passing
*/
