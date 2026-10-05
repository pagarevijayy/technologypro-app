import { COPYRIGHT_NAME, INSTAGRAM_URL, NEWSLETTER_URL } from "../constants/core";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 pb-8 text-center text-xs text-gray-500 font-poppins">
      <span>
        © {currentYear} {COPYRIGHT_NAME} All Rights Reserved
      </span>
      <span className="hidden md:inline md:mx-1">|</span>
      <span className="block md:inline mt-2 md:mt-0 space-x-3">
        <a
          href={NEWSLETTER_URL}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Newsletter
        </a>
        <a
          href={INSTAGRAM_URL}
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </span>
    </footer>
  );
};

export default Footer;
