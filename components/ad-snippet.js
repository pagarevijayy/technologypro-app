import Image from "next/image";
import ContentSnippet from "../layouts/content-snippet";

export default function AdSnippet({
  title,
  description,
  redirectURL,
  imageURL,
  imageWidth,
  imageHeight,
  redirectTag,
}) {
  return (
    <div className="transform transition hover:-translate-y-0.5">
      <ContentSnippet>
        <a href={redirectURL} target="_blank" rel="noopener noreferrer">
          <Image
            className="rounded-md"
            alt={title}
            src={imageURL}
            width={imageWidth}
            height={imageHeight}
          />
          <p className="pt-2 px-1 text-center line-clamp-1 text-sm text-gray-700">
            {description}
          </p>
          <p className="pt-2 px-1 text-center line-clamp-1 text-xs text-gray-700">
            {redirectTag}
          </p>
        </a>
      </ContentSnippet>
    </div>
  );
}
