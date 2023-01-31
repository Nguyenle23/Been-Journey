import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Brief about Been
          </p>
        </div>

        <p className="text-xl mt-20">
          My name is Nguyen Le a.k.a Been . I am a senior studying at
          Internation University - VNU. I am interested in technology and
          willing to figure out how it works. Until now, I have had a lot of
          opportunities to work in developing Back-end web. Besides, I am
          learning on my own path to expand more knowledge about implementing AI
          to reality.
        </p>

        <br />

        <p className="text-xl">
          I used to build and develop some projects with my friends. Those are
          below this section. Thank you for check out my portfolio. If you have
          any questions, please feel free to contact me. 
        </p>
      </div>
    </div>
  );
};

export default About;
