import ContentSnippet from "../layouts/content-snippet";
import AdSnippet from "./ad-snippet";
import {
  PROJECT_NAME,
  PROJECT_DESCRIPTION_ALT,
  CONTACT_EMAIL,
} from "../constants/core";
import { FaInstagram } from 'react-icons/fa';

import { adPromotionsData } from "../constants/brand";

const ContentAsideRight = () => {
  return (
    <div className="space-y-4">
      <div className="introduction-block">
        <ContentSnippet>
          <div>
            <h4 className="font-medium text-lg">🚀 {PROJECT_NAME}</h4>
            <p className="mt-4 text-gray-600 text-sm">{PROJECT_DESCRIPTION_ALT}</p>
            <p className="">
              <a
                href="http://instagram.com/technologypro.in"
                className="mt-4 inline-flex items-center gap-2  transition-colors duration-200 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
                <span className="text-sm font-medium group-hover:underline">
                  Follow us on Instagram
                </span>
              </a>
            </p>
          </div>
        </ContentSnippet>
      </div>

      {adPromotionsData.map((ad, index) => (
        <AdSnippet
          key={`ad_${index}`}
          title={ad.title}
          description={ad.description}
          imageURL={ad.imageURL}
          redirectURL={ad.redirectURL}
          imageWidth={ad.imageWidth}
          imageHeight={ad.imageHeight}
          redirectTag={ad.redirectTag}
        />
      ))}

      <div className="bg-white p-4 rounded-lg bg-opacity-40 shadow-sm text-center text-sm">
        <p> Want to promote your brand here? </p>
        <p className="mt-1 text-indigo-500 underline">
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact us.</a>
        </p>
      </div>
    </div>
  );
};

export default ContentAsideRight;
