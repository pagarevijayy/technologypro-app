import ContentSnippet from "../layouts/content-snippet";
import HeroPost from "../components/hero-post";

const ContentPrimary = () => {
  return (
    <div className="space-y-4">
      <ContentSnippet>
        <HeroPost></HeroPost>
      </ContentSnippet>
      <ContentSnippet>
        <HeroPost></HeroPost>
      </ContentSnippet>
      <ContentSnippet>
        <HeroPost></HeroPost>
      </ContentSnippet>
    </div>
  );
};

export default ContentPrimary;
