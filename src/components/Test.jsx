import React, { useState, useEffect } from "react";

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    isOpen ? sidebar.classList.add("open") : sidebar.classList.remove("open");
  }, [isOpen]);

  return (
    <>
      <button
        className="bg-gray-800 text-white p-2 rounded-full absolute top-0 left-20 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Open" : "Close"}
      </button>
      <div
        className={`sidebar bg-gray-200 h-screen w-64 ${
          isOpen
            ? "-translate-x-full ease-out duration-300"
            : "translate-x-0 ease-in duration-300"
        }`}
      >
        <nav className="p-4">
          <a
            href="/journey"
            className="block text-gray-800 font-medium hover:text-gray-600"
          >
            Home
          </a>
          <a
            href="/journey"
            className="block text-gray-800 font-medium hover:text-gray-600 mt-2"
          >
            About
          </a>
          <a
            href="/journey"
            className="block text-gray-800 font-medium hover:text-gray-600 mt-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </>
  );
};

export default Test;
