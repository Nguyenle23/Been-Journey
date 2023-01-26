import React from "react";
import useState from "../assets/portfolio/usestate.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: useState,
      alt: "useState",
      link: "https://github.com/Nguyenle23/WAD-Project-Course",
    },
    {
      id: 2,
      src: useState,
      alt: "useState",
      link: "https://github.com/Nguyenle23/WAD-Project-Course",
    },
    {
      id: 3,
      src: useState,
      alt: "useState",
      link: "https://github.com/Nguyenle23/WAD-Project-Course",
    },
    {
      id: 4,
      src: useState,
      alt: "useState",
      link: "https://github.com/Nguyenle23/WAD-Project-Course",
    },
    {
      id: 5,
      src: useState,
      alt: "useState",
      link: "https://github.com/Nguyenle23/WAD-Project-Course",
    },
    {
      id: 6,
      src: useState,
      alt: "useState",
      link: "https://github.com/Nguyenle23/WAD-Project-Course",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some examples</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, alt, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => window.open(link, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => window.open(link, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
