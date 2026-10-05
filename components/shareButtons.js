import { useState, useEffect } from 'react';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';

const ShareButtons = ({ title, url = '', className = '', variant = 'full' }) => {
    const [copied, setCopied] = useState(false);
    const [shareUrl, setShareUrl] = useState(url);

    useEffect(() => {
        if (url) {
            setShareUrl(url);
            return;
        }
        if (typeof window !== 'undefined') {
            setShareUrl(window.location.href);
        }
    }, [url]);

    const handleCopyUrl = async () => {
        const text = shareUrl || (typeof window !== 'undefined' ? window.location.href : '');
        if (!text) return;

        try {
            if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
            } else if (typeof document !== 'undefined') {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'fixed';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch (err) {
            console.error('Clipboard write failed:', err);
        }
    };

    const isCompact = variant === 'compact';
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);
    const whatsappText = encodeURIComponent(shareUrl ? `${title} ${shareUrl}` : title);

    const hitArea =
        'relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-11 h-11 rounded-full touch-manipulation select-none';

    return (
        <div className={`social-share-buttons ${!isCompact ? 'border-t border-gray-200 pt-6' : ''} ${className}`}>
            {!isCompact && (
                <h3 className="text-sm font-semibold text-gray-800 mb-4">
                    Share this article
                </h3>
            )}
            <div className="flex items-center gap-3">
                <a
                    href={`https://api.whatsapp.com/send?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${hitArea} bg-green-50 hover:bg-green-100 active:bg-green-200`}
                    aria-label="Share on WhatsApp"
                    title="Share on WhatsApp"
                >
                    <FaWhatsapp className="pointer-events-none w-5 h-5 text-green-600" />
                </a>

                <a
                    href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${hitArea} bg-blue-50 hover:bg-blue-100 active:bg-blue-200`}
                    aria-label="Share on Twitter"
                    title="Share on Twitter"
                >
                    <FaTwitter className="pointer-events-none w-5 h-5 text-blue-500" />
                </a>

                <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${hitArea} bg-blue-50 hover:bg-blue-100 active:bg-blue-200`}
                    aria-label="Share on LinkedIn"
                    title="Share on LinkedIn"
                >
                    <FaLinkedin className="pointer-events-none w-5 h-5 text-blue-700" />
                </a>

                <button
                    type="button"
                    onClick={handleCopyUrl}
                    className={`${hitArea} bg-gray-50 hover:bg-gray-200 active:bg-gray-300`}
                    aria-label="Copy link"
                    title="Copy link"
                >
                    <HiLink className="pointer-events-none w-5 h-5 text-gray-600" />
                    {copied && (
                        <span className="absolute -top-10 left-1/2 z-20 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                            Copied!
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ShareButtons;
