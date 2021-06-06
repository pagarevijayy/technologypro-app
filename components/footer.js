import { COPYRIGHT_NAME } from "../constants/core";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 pb-6 text-center text-xs text-gray-500 font-poppins">
      <span>
        © {currentYear} {COPYRIGHT_NAME} All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
