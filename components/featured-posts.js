import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import HeroPost from "./hero-post";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FeaturedPosts = ({ heroFrontMatterData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (!heroFrontMatterData || heroFrontMatterData.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center mb-4 mt-8">
        <h3 className="font-bold text-2xl">Featured Posts</h3>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300" onClick={scrollPrev}>
            <FaChevronLeft />
          </button>
          <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300" onClick={scrollNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {
            heroFrontMatterData?.map((postFrontMatter, index) => (
              <div className="flex-shrink-0 w-full" key={`hero_${index}`}>
                <div className="p-1">
                  <HeroPost
                    frontMatter={postFrontMatter}
                  ></HeroPost>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
