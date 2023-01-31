import React from "react";

import NavBar from "../NavBar";
import Introduce from "./Introduce";
import About from "./About";
import WorkExperiences from "./WorkExperiences";
import Experience from "./Experience";
import Contact from "./Contact";
import SocialLinks from "./SocialLinks";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Introduce />
      <About />
      <WorkExperiences />
      {/* <Experience /> */}
      <Contact />

      <SocialLinks />
    </>
  );
};

export default HomePage;
