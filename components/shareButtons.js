import { useState, useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';

const ShareButtons = ({ title, className = '', variant = 'full' }) => {
    const [copied, setCopied] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    const handleCopyUrl = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const isCompact = variant === 'compact';
    const buttonSize = isCompact ? 'w-8 h-8' : 'w-10 h-10';
    const iconSize = isCompact ? 'w-4 h-4' : 'w-5 h-5';

    return (
        <div className={`${!isCompact ? 'border-t border-gray-200 pt-6' : ''} ${className}`}>
            {!isCompact && (
                <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    Share this article
                </h3>
            )}
            <div className="flex items-center gap-2">

                <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                        `${title} - ${currentUrl}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center ${buttonSize} rounded-full bg-green-50 hover:bg-green-100 transition-colors duration-200`}
                    title="Share on WhatsApp"
                >
                    <FaWhatsapp className={`${iconSize} text-green-600`} />
                </a>

                <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        currentUrl
                    )}&text=${encodeURIComponent(title)} -`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center ${buttonSize} rounded-full bg-blue-50 hover:bg-blue-100 transition-colors duration-200`}
                    title="Share on Twitter"
                >
                    <FaTwitter className={`${iconSize} text-blue-500`} />
                </a>

                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center ${buttonSize} rounded-full bg-blue-50 hover:bg-blue-100 transition-colors duration-200`}
                    title="Share on LinkedIn"
                >
                    <FaLinkedin className={`${iconSize} text-blue-700`} />
                </a>

                <button
                    onClick={handleCopyUrl}
                    className={`cursor-pointer flex items-center justify-center ${buttonSize} rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group relative`}
                    title="Copy link"
                >
                    <HiLink className={`${iconSize} text-gray-600`} />
                    {copied && (
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Copied!
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;