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
            Been's Info
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

        <p className="text-xl mt-5 mb-5">
          I am a person who is always ask questions about how things work. I have always been drawn to technology 
          and its potential to solve real-world problems. In addition to my academic pursuits, I have also been involved in various 
          extracurricular activities related to computer science. For example, I have participated in hackathons, 
          where I worked with a team to build a website solution for specific topic. 
        </p>

        <p className="text-xl mb-5">
        Looking to the future, I am excited to continue developing my skills and knowledge in computer science. 
        I hope to use my expertise to create technology that can make a positive impact on society, whether it be through 
        developing innovative software solutions or building cutting-edge computer systems.
        </p>

        <p className="text-xl">
          Thank you for taking the time to read my introduction. If you have
          any questions, please feel free to contact me at the bottom of the page.
        </p>
      </div>
    </div>
  );
};

export default About;
