import ContentSnippet from "../layouts/content-snippet";
import {
    PROJECT_PUNCHLINE,
    PROJECT_DESCRIPTION_ALT_2,
    INSTAGRAM_URL,
    NEWSLETTER_URL,
} from "../constants/core";

import Carousel from './ui/carousel/carousel'
import HeroPost from './hero-post'


import { FaInstagram } from 'react-icons/fa';

export const IntroductionBlock = () => {
    return (
        <div className="introduction-block">
            <ContentSnippet>
                <div>
                    <h4 className="font-medium text-lg">{PROJECT_PUNCHLINE}</h4>
                    <p className="mt-4 text-gray-600 text-sm">{PROJECT_DESCRIPTION_ALT_2}</p>
                    <div className="mt-4 space-y-2">
                        <p>
                            <a
                                href={NEWSLETTER_URL}
                                className="inline-flex items-center text-sm font-medium text-indigo-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join the newsletter
                            </a>
                        </p>
                        <p>
                            <a
                                href={INSTAGRAM_URL}
                                className="inline-flex items-center gap-2 transition-colors duration-200 group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="w-5 h-5" />
                                <span className="text-sm font-medium group-hover:underline">
                                    Follow on Instagram
                                </span>
                            </a>
                        </p>
                    </div>
                </div>
            </ContentSnippet>
        </div>
    )
}

export const FeaturedPosts = ({ heroFrontMatterData }) => {
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
