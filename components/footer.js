import { COPYRIGHT_NAME } from "../constants/core";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 pb-8 text-center text-xs text-gray-500 font-poppins">
      <span>
        © {currentYear} {COPYRIGHT_NAME} All Rights Reserved
      </span>
      <span className="hidden md:inline md:mx-1">|</span>
      <span>
        <a
          href="http://instagram.com/technologypro.in"
          className="mt-4 inline-flex items-center gap-2  transition-colors duration-200 group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="group-hover:underline">
            Follow us on Instagram: @technologypro.in
          </span>
        </a>
      </span>
    </footer>
  );
};

export default Footer;
