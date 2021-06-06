import Image from "next/image";

const NotFound = () => {
  return (
    <div className="p-6">
      <figure className="flex justify-center items-center">
        <Image
          src="/static/images/empty_result.svg"
          height={150}
          width={180}
        ></Image>
      </figure>
      <section className="text-gray-600 dark:text-gray-400 my-4 text-center">
        <p>No posts found.</p>
        <p className=" mt-2">Try a better keyword?</p>
      </section>
    </div>
  );
};

export default NotFound;
