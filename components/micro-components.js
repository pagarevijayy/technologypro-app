import ContentSnippet from "../layouts/content-snippet";
import {
    PROJECT_NAME,
    PROJECT_DESCRIPTION_ALT_2,
} from "../constants/core";

import { FaInstagram } from 'react-icons/fa';

export const IntroductionBlock = () => {
    return (
        <div className="introduction-block">
            <ContentSnippet>
                <div>
                    <h4 className="font-medium text-lg">🚀 {PROJECT_NAME}</h4>
                    <p className="mt-4 text-gray-600 text-sm">{PROJECT_DESCRIPTION_ALT_2}</p>
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
    )
}