import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Work Experiences",
    },
    // {
    //   id: 4,
    //   link: "Experience",
    // },
    {
      id: 5,
      link: "Contact",
    },
    {
      id: 6,
      link: "Journey",
      path: "/journey",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
          <h1 className="text-5xl font-signature ml-2">Been</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link, path }) => {
            if (path) {
              return (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 hover:text-gray-500 duration-200"
                >
                  <Link to={path} duration={500}>
                    {link}
                  </Link>
                </li>
              );
            } else {
              return (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 hover:text-gray-500 duration-200"
                >
                  <LinkScroll to={link} smooth duration={500}>
                    {link}
                  </LinkScroll>
                </li>
              );
            }
          })}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-white-500 hover:scale-105 hover:text-gray-500 duration-200 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link, path }) => {
              if (path) {
                {
                  console.log(path);
                }
                return (
                  <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  >
                    <Link to={path} duration={500}>
                      {link}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  >
                    <LinkScroll
                      onClick={() => setNav(!nav)}
                      to={link}
                      smooth
                      duration={500}
                    >
                      {link}
                    </LinkScroll>
                  </li>
                );
              }
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavBar;
