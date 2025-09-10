import { useState, useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';

const ShareButtons = ({ title, className = '', variant = 'full' }) => {
    const [copied, setCopied] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');
    const [clickedButton, setClickedButton] = useState(null);

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, []);

    const handleCopyUrl = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setClickedButton('copy');
        setTimeout(() => {
            setCopied(false);
            setClickedButton(null);
        }, 800);
    };

    const handleButtonClick = (event, buttonName, url) => {
        event.preventDefault(); // Prevent default link behavior
        setClickedButton(buttonName);
        setTimeout(() => {
            setClickedButton(null);
            // After the visual feedback, navigate to the URL
            window.open(url, '_blank', 'noopener,noreferrer');
        }, 300); // A shorter delay for navigation feels more responsive
    };

    const isCompact = variant === 'compact';
    const buttonSize = isCompact ? 'w-8 h-8' : 'w-10 h-10';
    const iconSize = isCompact ? 'w-4 h-4' : 'w-5 h-5';

    const getButtonClass = (buttonName, baseBgColor, clickedBgColor) => {
        const isClicked = clickedButton === buttonName;
        const clickedClass = isClicked ? clickedBgColor : baseBgColor;
        return `cursor-pointer flex items-center justify-center ${buttonSize} rounded-full transition-colors duration-200 ${clickedClass} group relative`;
    };

    return (
        <div className={`social-share-buttons ${!isCompact ? 'border-t border-gray-200 pt-6' : ''} ${className}`}>
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
                    onClick={(e) => handleButtonClick(e, 'whatsapp', `https://wa.me/?text=${encodeURIComponent(`${title} - ${currentUrl}`)}`)}
                    className={getButtonClass('whatsapp', 'bg-green-50 hover:bg-green-100', 'bg-green-200')}
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
                    onClick={(e) => handleButtonClick(e, 'twitter', `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)} -`)}
                    className={getButtonClass('twitter', 'bg-blue-50 hover:bg-blue-100', 'bg-blue-200')}
                    title="Share on Twitter"
                >
                    <FaTwitter className={`${iconSize} text-blue-500`} />
                </a>

                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleButtonClick(e, 'linkedin', `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`)}
                    className={getButtonClass('linkedin', 'bg-blue-50 hover:bg-blue-100', 'bg-blue-200')}
                    title="Share on LinkedIn"
                >
                    <FaLinkedin className={`${iconSize} text-blue-700`} />
                </a>

                <button
                    onClick={handleCopyUrl}
                    className={getButtonClass('copy', 'bg-gray-50 hover:bg-gray-200', 'bg-gray-200')}
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