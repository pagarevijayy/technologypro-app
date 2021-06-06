import Image from "next/image";
import { parseISO, format } from "date-fns";
import { CATEGORIES } from "../constants/core";

const HeroPost = ({ frontMatter }) => {
  console.log("hero", frontMatter);
  let category = CATEGORIES.filter((c) =>
    c.route.includes(frontMatter.category)
  );

  return (
    <article className="md:flex p-6 bg-gray-100 rounded-lg shadow-sm overflow-hidden">
      <div>
        <figure
          className="-my-6 -ml-6 -mr-6 md:mr-0"
          style={{ position: "relative", height: "270px", width: "450px" }}
        >
          <Image
            alt={frontMatter.title}
            src={frontMatter.image}
            layout="fill"
            objectFit="cover"
            priority
          />
        </figure>
      </div>
      <div
        className="max-w-prose mt-10 md:pl-6 md:mt-0"
        style={{ minWidth: "450px" }}
      >
        <h1 className="line-clamp-2 text-2xl font-poppins font-bold">
          {frontMatter.title}
        </h1>

        {category[0] && (
          <aside className="mt-5 flex items-center font-bold text-xs text-indigo-600 uppercase">
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

        <p className="mt-3 line-clamp-3">{frontMatter.summary}</p>

        <div className="flex justify-between mt-5 text-xs text-gray-500">
          <p>{format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}</p>
          <p>{frontMatter.readingTime.text}</p>
        </div>
      </div>
    </article>
  );
};

export default HeroPost;

/* 
@todo:
2. Use Image tag
3. Date formatter
4. Dynamic data passing
*/
