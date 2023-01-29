import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line, RiCastFill } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Journey = () => {
  const menus = [
    { name: "Journey", link: "/journey", icon: MdOutlineDashboard },
    { name: "People", link: "/", icon: AiOutlineUser },
    { name: "Event", link: "/", icon: RiCastFill },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);

  const resources = [
    {
      id: "1",
      name: "Flower",
      src: "https://res.cloudinary.com/nguyenle23/image/upload/v1647678698/sample.jpg",
      alt: "Flower",
    },
    {
      id: "2",
      name: "Flower",
      src: "https://res.cloudinary.com/nguyenle23/image/upload/v1647678698/sample.jpg",
      alt: "Flower",
    },
    {
      id: "3",
      name: "Flower",
      src: "https://res.cloudinary.com/nguyenle23/image/upload/v1647678698/sample.jpg",
      alt: "Flower",
    },
    {
      id: "4",
      name: "Flower",
      src: "https://res.cloudinary.com/nguyenle23/image/upload/v1647678698/sample.jpg",
      alt: "Flower",
    },
    {
      id: "5",
      name: "Flower",
      src: "https://res.cloudinary.com/nguyenle23/image/upload/v1647678698/sample.jpg",
      alt: "Flower",
    },
    {
      id: "6",
      name: "Flower",
      src: "https://res.cloudinary.com/nguyenle23/image/upload/v1647678698/sample.jpg",
      alt: "Flower",
    },
    {
      id: "7",
      name: "Flower",
      src: "https://res.cloudinary.com/nguyenle23/image/upload/v1647678698/sample.jpg",
      alt: "Flower",
    },
  ];

  return (
    <section className="flex gap-6 bg-gray-800">
      <div
        className={`bg-[#0f0f1a] min-h-screen ${
          open ? "w-56" : "w-24"
        } duration-500 text-gray-100 px-4 py-4 fixed`}
      >
        <div className="flex justify-between">
          <h1 className={`${open ? "text-2xl font-semibold" : "hidden"} `}>
            Journeyyyyy
          </h1>
          <HiMenuAlt3
            size={open ? "30" : "25"}
            className="cursor-pointer justify-items-end"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                className={`${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`container mt-16 min-h-screen ${
          open ? "ml-64 mr-8" : "ml-32"
        } duration-500`}
      >
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          {resources?.map(({ id, name, src, alt }) => (
            <div
              key={id}
              className="w-full px-4 py-5 bg-[#0f0f1a] rounded-lg shadow"
            >
              <div className="text-sm font-medium text-gray-500 truncate">
                {name}
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                <img src={src} alt={alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
