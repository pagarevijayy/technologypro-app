import Link from "next/link";
import Image from "next/image";

/** To wrap an Image tag inside an <a> (anchor tag) in the .mdx file*/
const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} legacyBehavior>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

/** Declare components to be used inside .mdx files in this object */
const MDXComponents = {
  Image,
  a: CustomLink,
};

export default MDXComponents;
