import React from "react";
import css from "../../assets/css.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: css,
      title: "css",
      style: "shadow-blue-500",
      alt: "css",
    },
    {
      id: 2,
      src: css,
      title: "css",
      style: "shadow-blue-500",
      alt: "css",
    },
    {
      id: 3,
      src: css,
      title: "css",
      style: "shadow-blue-500",
      alt: "css",
    },
    {
      id: 4,
      src: css,
      title: "css",
      style: "shadow-blue-500",
      alt: "css",
    },
    {
      id: 5,
      src: css,
      title: "css",
      style: "shadow-blue-500",
      alt: "css",
    },
    {
      id: 6,
      src: css,
      title: "css",
      style: "shadow-blue-500",
      alt: "css",
    },
    {
      id: 7,
      src: css,
      title: "css",
      style: "shadow-blue-500",
      alt: "css",
    },
    {
      id: 8,
      src: css,
      title: "css",
      style: "shadow-blue-500",
      alt: "css",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="py-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">Skill tahtahtdsahjfsdfjdsajfhasdjfa</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {experiences.map(({id, src, title, style, alt}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={alt} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
