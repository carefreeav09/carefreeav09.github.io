import React from "react";
import {
  Section,
  Animations,
  TextDefault,
} from "../../../components";

const Projects = () => {
  return (
    <Section
      className="py-5 center-vertically"
      minHeight="80vh"
      gradient={{
        isGradient: true,
        gradientDark: ["#1b242f", "#161c24"],
        gradientLight: false,
      }}
    >
      <Animations
        targetClass="projects-showcase"
        animationType="fadeInUp"
        triggerHook={"onEnter"}
        className="text-center w-50 m-auto"
      >
        <TextDefault as="h1" className="display-5 text-uppercase fw-bold">
          Portfolio Showcase
        </TextDefault>

        <TextDefault
          as="h4"
          className="fw-normal w-100 text-muted"
          fontSize="16px"
        >
          I am a full stack developer with a passion for building applications.
          I have a strong background in front-end development and have worked
          with a wide range of technologies.
        </TextDefault>
      </Animations>


    </Section>
  );
};

export default Projects;
