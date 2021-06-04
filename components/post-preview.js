import ContentSnippet from "../layouts/content-snippet";

const PostPreview = () => {
  return (
    <ContentSnippet>
      <article className="p-2">
        <h1 className="text-2xl font-poppins font-bold">
          How to Approve iPhone from PC
        </h1>
        <p className="mt-1 text-xs text-gray-500">
          May 25, 2021 8:22 pm by Rippal Vyas
        </p>
        <section className="mt-10">
          <figure>
            <img
              className="rounded-md"
              src="https://3nions.com/wp-content/uploads/2020/06/ios13-iphone-xs-ipad-pro-two-factor-authentication-hero-scaled.jpg?ezimgfmt=ng:webp/ngcb4"
              alt=""
            />
          </figure>
          <div className="mt-10">
            <p className="line-clamp-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Veritatis minus placeat labore, sed, eveniet laudantium pariatur
              molestiae corrupti consectetur at, non expedita reprehenderit
              eligendi quod sunt impedit cum quasi repellat.
            </p>
            <aside className="flex items-center mt-3 font-bold text-xs text-indigo-600 uppercase">
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
              <span className="px-0.5">How to</span>
            </aside>
          </div>
        </section>
      </article>
    </ContentSnippet>
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
