import React from "react";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          tempore sequi consequatur obcaecati soluta molestias nisi
          exercitationem perspiciatis explicabo cupiditate praesentium
          aspernatur voluptatem delectus dolor harum aut fugiat dicta, odio
          fugit dolorum! Aliquam est in maxime tempora illum mollitia nihil, id
          perferendis animi, beatae hic delectus possimus rem voluptatibus
          dignissimos.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae
          recusandae consectetur nobis voluptates voluptatum incidunt
          praesentium. Unde, aliquid quidem impedit neque quos, aliquam incidunt
          error ipsa recusandae, voluptate ratione.
        </p>
      </div>
    </div>
  );
};

export default About;