import React from "react";
import HeroSection from "./Hero";
import ServiceSection from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "../Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
