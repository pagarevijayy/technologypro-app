import ContentSnippet from "../layouts/content-snippet";
const PostContent = ({ frontMatter, children }) => {
  return (
    <div className="max-w-prose mx-auto p-2 md:p-5">
      <div>
        <h1 className="text-2xl font-poppins font-bold">
          How to Approve iPhone from PC
        </h1>
        <p className="mt-2 text-xs text-gray-500">
          May 25, 2021 8:22 pm by Rippal Vyas
        </p>
      </div>

      <div className="prose prose-indigo">{children}</div>
    </div>
  );
};

export default PostContent;
