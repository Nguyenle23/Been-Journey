import React from "react";
import useState from "../assets/portfolio/usestate.jpg";

const WorkExperiences = () => {
  const workExperiences = [
    {
      id: 1,
      src: useState,
      alt: "Calculator-For-T.M.C",
      demo: "",
      code: "https://github.com/Nguyenle23/Calculator-For-T.M.C",
    },
    {
      id: 2,
      src: useState,
      alt: "react-onmovie",
      demo: "",
      code: "https://github.com/Nguyenle23/react-onmovie",
    },
    {
      id: 3,
      src: useState,
      alt: "WAD-Project-Course",
      demo: "",
      code: "https://github.com/Nguyenle23/WAD-Project-Course",
    },
    {
      id: 4,
      src: useState,
      alt: "EcommerceWebsite_nodejs",
      demo: "https://glamourous-shop.herokuapp.com/",
      code: "https://github.com/Nguyenle23/EcommerceWebsite_nodejs",
    },
    {
      id: 5,
      src: "https://raw.githubusercontent.com/Nguyenle23/Hotel-Management-System/main/src/public/img/ill_img.png",
      alt: "Hotel-Management-System",
      demo: "https://demo-hotel-live.herokuapp.com/",
      code: "https://github.com/Nguyenle23/Hotel-Management-System",
    },
    {
      id: 6,
      src: useState,
      alt: "OOP-Project-Course",
      demo: "",
      code: "https://github.com/Nguyenle23/OOP-Project-Course",
    },
  ];

  return (
    <div
      name="Work Experiences"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work Experiences
          </p>
          <p className="py-6">Check out some projects I built.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {workExperiences.map(({ id, src, alt, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button onClick={() => window.open(demo, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button onClick={() => window.open(code, "_blank")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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

export default WorkExperiences;
