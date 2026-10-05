import Image from "next/legacy/image";

const NotFound = () => {
  return (
    <div className="p-6">
      <figure className="flex justify-center items-center">
        <Image
          src="/static/assets/empty_result.svg"
          height={150}
          width={180}
        ></Image>
      </figure>
      <section className="text-gray-600 dark:text-gray-400 my-4 text-center">
        <p>No matching posts.</p>
        <p className=" mt-4 text-xs italic">
          Try a title, or browse India Tech and Guides.
        </p>
      </section>
    </div>
  );
};

export default NotFound;
