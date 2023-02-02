import React from "react";
const reactOnMovie = require("../../assets/portfolio/reactOnMovie.png");
const hotel = require("../../assets/portfolio/hotel.png");
const app_cal = require("../../assets/portfolio/app_cal.png");
const game = require("../../assets/portfolio/game.png");

const WorkExperiences = () => {
  const workExperiences = [
    {
      id: 1,
      title: "Calculator-For-T.M.C",
      src: app_cal,
      alt: "Calculator-For-T.M.C",
      demo: "",
      code: "https://github.com/Nguyenle23/Calculator-For-T.M.C",
    },
    {
      id: 2,
      title: "React-Onmovie",
      src: reactOnMovie,
      alt: "react-onmovie",
      demo: "",
      code: "https://github.com/Nguyenle23/react-onmovie",
    },
    {
      id: 3,
      title: "WAD-Project-Course",
      src: "https://raw.githubusercontent.com/Nguyenle23/WAD-Project-Course/main/Images/Client/home.png",
      alt: "WAD-Project-Course",
      demo: "",
      code: "https://github.com/Nguyenle23/WAD-Project-Course",
    },
    {
      id: 4,
      title: "EcommerceWebsite-Nodejs",
      src: "https://raw.githubusercontent.com/Nguyenle23/Hotel-Management-System/main/src/public/img/ill_img.png",
      alt: "EcommerceWebsite_nodejs",
      demo: "https://glamourous-shop.herokuapp.com/",
      code: "https://github.com/Nguyenle23/EcommerceWebsite_nodejs",
    },
    {
      id: 5,
      title: "Hotel-Management-System",
      src: hotel,
      alt: "Hotel-Management-System",
      demo: "https://demo-hotel-live.herokuapp.com/",
      code: "https://github.com/Nguyenle23/Hotel-Management-System",
    },
    {
      id: 6,
      title: "OOP-Project-Course",
      src: game,
      alt: "OOP-Project-Course",
      demo: "https://drive.google.com/file/d/182sOYkuk1PEPbdTgXcFLstWkl30Jz1Yy/view?usp=share_link",
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
            Been's Journey
          </p>
          <p className="py-6">
            Those are some journeys that I used to develop, build, and design
            for course's project
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {workExperiences.map(({ id, src, alt, demo, code, title }) => (
            <div
              key={id}
              className="group shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-200"
            >
              <img
                src={src}
                alt={alt}
                className="group-rounded-md"
                title={title}
              />
              <div className="border-2 border-gray-500">
                <p className="text-sm font-bold text-center">{title}</p>
              </div>
              <div className="flex items-center justify-center">
                {demo === "" ? (
                  <button
                    onClick={() => window.open(code, "_blank")}
                    className="w-1/2 px-6 py-3 m-4"
                  >
                    Detail
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => window.open(demo, "_blank")}
                      className="w-1/2 px-6 py-3 m-4"
                    >
                      Demo
                    </button>
                    <button
                      onClick={() => window.open(code, "_blank")}
                      className="w-1/2 px-6 py-3 m-4"
                    >
                      Detail
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
