import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import WorkExperiences from "./components/WorkExperiences";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <WorkExperiences />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
