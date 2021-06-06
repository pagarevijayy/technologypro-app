import ContentSnippet from "../layouts/content-snippet";

const ContentAsideRight = () => {
  return (
    <div className="space-y-4 text-center">
      <ContentSnippet>
        <p>AD</p>
      </ContentSnippet>

      <ContentSnippet>
        <p>AD</p>
      </ContentSnippet>
      <div
        className="bg-white p-4 rounded-lg bg-opacity-40 shadow-sm text-center"
        style={{ position: "sticky", top: "80px" }}
      >
        <p> Want to display an ad here? </p>
        <p> Contact us.</p>
      </div>
    </div>
  );
};

export default ContentAsideRight;
