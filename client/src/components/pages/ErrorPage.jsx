import React from "react";

const ErrorPage = () => {
  return (
    <>
      <div className="bg-gray-800 h-screen">
        <h1 className="py-80 text-center text-5xl font-bold text-white">
          Oops!
          <p className="py-10 text-3xl">
            The page you are looking for does not exist. Please back to the home
            page.
          </p>
          <a href="/journey-gallery" className="text-3xl text-blue-500 hover:text-green-500">
            {" "}
            ---&gt; Home &lt;---
          </a>
        </h1>
      </div>
    </>
  );
};

export default ErrorPage;
