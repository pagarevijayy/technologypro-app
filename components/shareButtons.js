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
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(currentUrl).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 800);
            }).catch(err => {
                console.error("Clipboard write failed:", err);
            });
        } else {
            console.warn("Clipboard API not available");
        }
    };

    const isCompact = variant === 'compact';
    const buttonSize = isCompact ? 'w-8 h-8' : 'w-10 h-10';
    const iconSize = isCompact ? 'w-4 h-4' : 'w-5 h-5';

    const baseClasses = `cursor-pointer flex items-center justify-center ${buttonSize} rounded-full transition-colors duration-200 relative`;

    return (
        <div className={`social-share-buttons ${!isCompact ? 'border-t border-gray-200 pt-6' : ''} ${className}`}>
            {!isCompact && (
                <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    Share this article
                </h3>
            )}
            <div className="flex items-center gap-2">

                <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${title} - ${currentUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClasses} bg-green-50 hover:bg-green-100 active:bg-green-200`}
                    title="Share on WhatsApp"
                >
                    <FaWhatsapp className={`${iconSize} text-green-600`} />
                </a>

                <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)} -`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClasses} bg-blue-50 hover:bg-blue-100 active:bg-blue-200`}
                    title="Share on Twitter"
                >
                    <FaTwitter className={`${iconSize} text-blue-500`} />
                </a>

                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClasses} bg-blue-50 hover:bg-blue-100 active:bg-blue-200`}
                    title="Share on LinkedIn"
                >
                    <FaLinkedin className={`${iconSize} text-blue-700`} />
                </a>

                <button
                    onClick={handleCopyUrl}
                    className={`${baseClasses} bg-gray-50 hover:bg-gray-200 active:bg-gray-300`}
                    title="Copy link"
                >
                    <HiLink className={`${iconSize} text-gray-600`} />
                    {copied && (
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded">
                            Copied!
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;