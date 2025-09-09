import { IntroductionBlock } from "./micro-components";
import AdSnippet from "./ad-snippet";
import { CONTACT_EMAIL } from "../constants/core";

import { adPromotionsData } from "../constants/brand";

const ContentAsideRight = () => {
  return (
    <div className="space-y-4">
      <IntroductionBlock />

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
