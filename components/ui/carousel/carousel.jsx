// components/Carousel.js
import { useCallback } from 'react'
import { DotButton, useDotButton } from './carousel-dot-button'
import useEmblaCarousel from 'embla-carousel-react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Carousel = ({ items, renderItem, sectionTitle }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    if (!items || items.length === 0) return null

    return (
        <section className="space-y-4">
            {/* Header */}
            {sectionTitle && (
                <div className="flex justify-between items-center mb-4 mt-8">
                    <h3 className="font-bold text-2xl">{sectionTitle}</h3>
                    <div className="flex items-center space-x-2">
                        <button
                            className="cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-300"
                            onClick={scrollPrev}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            className="cursor-pointer p-2 rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-300"
                            onClick={scrollNext}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            )}

            {/* Slides */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {items.map((item, index) => (
                        <div className="flex-shrink-0 w-full" key={index}>
                            <div className="p-1">{renderItem(item, index)}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots */}
            <div className="embla__dots mt-4 flex items-center justify-center gap-2">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={`embla__dot cursor-pointer h-2.5 w-2.5 rounded-full border-2 border-gray-400 ${index === selectedIndex ? 'embla__dot--selected border-indigo-600' : ''
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Carousel
