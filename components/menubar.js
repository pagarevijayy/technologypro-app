import Link from "next/link";
import Container from "../layouts/container";
import { brandLogo } from "../constants/brand";

const Menubar = () => {
  const menuItems = [
    {
      title: "News",
      slug: "/news",
    },
    {
      title: "How to",
      slug: "/how-to",
    },
    {
      title: "Social Media",
      slug: "/social",
    },
  ];

  return (
    <header className="py-4 bg-gray-900 text-gray-100">
      <Container>
        <div className="flex justify-between items-center">
          <div className="font-poppins font-bold text-lg tracking-wide">
            <Link href="/">{brandLogo}</Link>
          </div>
          <div>
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-6 font-medium">
                {menuItems.map((item, index) => {
                  return (
                    <li key={item.title + `${index}`}>
                      <Link href={item.slug}>
                        <a>{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
                {
                  <li className="pl-4">
                    <Link href="some-where">
                      <button className="px-4 py-1.5 font-medium text-gray-200 bg-indigo-500 rounded-3xl">
                        {" "}
                        Get Premium{" "}
                      </button>
                    </Link>
                  </li>
                }
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Menubar;
