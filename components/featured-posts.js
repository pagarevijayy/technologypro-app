// components/FeaturedPosts.js
import Carousel from './ui/carousel/carousel'
import HeroPost from './hero-post'

const FeaturedPosts = ({ heroFrontMatterData }) => {
  return (
    <Carousel
      items={heroFrontMatterData}
      sectionTitle="Featured Posts"
      renderItem={(postFrontMatter, index) => (
        <HeroPost frontMatter={postFrontMatter} key={`hero_${index}`} />
      )}
    />
  )
}

export default FeaturedPosts
