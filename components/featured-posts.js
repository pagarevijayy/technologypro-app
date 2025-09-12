import { useCallback } from 'react'
import { DotButton, useDotButton } from './carousel/EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import HeroPost from "./hero-post";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const FeaturedPosts = ({ heroFrontMatterData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

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
          <button className="cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300" onClick={scrollPrev}>
            <FaChevronLeft />
          </button>
          <button className="cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300" onClick={scrollNext}>
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
      <div className="embla__dots mt-4 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot cursor-pointer h-2.5 w-2.5 rounded-full border-2 border-gray-400'.concat(
              index === selectedIndex ? ' embla__dot--selected border-indigo-600' : ''
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
