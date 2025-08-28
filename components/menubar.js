import Link from "next/link";
import { useState } from "react";

import Container from "../layouts/container";
import { brandLogo } from "../constants/brand";
import { CATEGORIES } from "../constants/core";

const Menubar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const menuItems = [...CATEGORIES];

  const hamburgerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const getPremiumButton = (
    <li className="text-center md:pl-2">
      <button
        className="w-full md:w-32 px-4 py-2 font-medium focus:outline-none text-gray-200 bg-indigo-500 rounded-3xl 
        transform transition hover:-translate-y-0.5 hover:bg-indigo-400 active:bg-indigo-600"
      >
        Subscribe
      </button>
    </li>
  );

  return (
    <header className="py-4 bg-gray-900 text-gray-100 sticky top-0 z-10">
      <Container>
        <div className="flex justify-between items-center">
          <div className="font-poppins font-bold text-lg tracking-wide cursor-pointer select-none transform transition hover:-translate-y-0.5">
            <Link href="/" legacyBehavior>{brandLogo}</Link>
          </div>
          <div>
            <nav className="laptop-nav hidden md:block">
              <ul className="flex items-center space-x-6 font-medium">
                {menuItems.map((item, index) => {
                  return (
                    <li
                      key={item.title + `${index}`}
                      className="transform transition hover:-translate-y-0.5"
                    >
                      <Link legacyBehavior href={item.route}>
                        <a>{item.title}</a>
                      </Link>
                    </li>
                  );
                })}
                {getPremiumButton}
              </ul>
            </nav>
            <div className="hamburgerIcon md:hidden" onClick={toggleSidebar}>
              {hamburgerIcon}
            </div>
          </div>
        </div>
      </Container>

      <nav
        className={
          "mobile-nav fixed h-screen w-64 top-0 z-20 bg-gray-900" +
          " " +
          (showSidebar ? "right-0 duration-300" : "-right-full duration-500")
        }
      >
        <ul className="p-6 space-y-6">
          <li onClick={toggleSidebar}>{closeIcon}</li>

          {menuItems.map((item, index) => {
            return (
              <li
                className="py-2"
                key={item.title + `${index}`}
                onClick={toggleSidebar}
              >
                <Link legacyBehavior href={item.route}>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}

          {getPremiumButton}
        </ul>
      </nav>

      {showSidebar && (
        <div
          className="backdrop fixed h-screen w-full top-0 left-0 bg-black bg-opacity-75"
          onClick={toggleSidebar}
        ></div>
      )}
    </header>
  );
};

export default Menubar;
