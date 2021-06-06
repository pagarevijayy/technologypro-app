import ContentSnippet from "../layouts/content-snippet";
import { PROJECT_NAME, PROJECT_DESCRIPTION } from "../constants/core";

const ContentAsideRight = () => {
  return (
    <div className="space-y-4">
      <ContentSnippet>
        <div>
          <h4 className="font-medium text-lg">{PROJECT_NAME}</h4>
          <p className="mt-4 text-gray-600 text-sm">{PROJECT_DESCRIPTION}</p>
        </div>
      </ContentSnippet>

      <ContentSnippet>
        <p className="text-center">AD</p>
      </ContentSnippet>
      <div className="bg-white p-4 rounded-lg bg-opacity-40 shadow-sm text-center text-sm">
        <p> Want to display an ad here? </p>
        <p> Contact us.</p>
      </div>
    </div>
  );
};

export default ContentAsideRight;
