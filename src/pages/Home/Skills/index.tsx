import React from "react";
import {
  Section,
  Animations,
  TextDefault,
  SecondaryText,
  Button,
  ProgressBar,
} from "../../../components";
import { AppThemeContext } from "../../../context/ThemeContext";

const Skills = () => {
  const { appBaseColor } = React.useContext(AppThemeContext);
  return (
    <Section
      className="py-5 center-vertically"
      minHeight="80vh"
      gradient={{
        isGradient: true,
        gradientDark: ["#161c24", "#1b242f"],
        gradientLight: false,
      }}
    >
      <div className="container d-grid grid-template-2x">
        <Animations
          targetClass="work-together"
          animationType="fadeInRight"
          triggerHook={"onEnter"}
          className="text-start"
        >
          <SecondaryText
            className="fw-bold text-uppercase text-start"
            as="span"
          >
            im good at
          </SecondaryText>

          <TextDefault
            as="h1"
            className="text-start display-5 fw-bold text-lowercase"
          >
            Lets work together
          </TextDefault>

          <TextDefault
            as="h4"
            className="text-start fw-normal w-75 m-right text-muted"
            fontSize="16px"
          >
            I am a full stack developer with a passion for building
            applications. I have a strong background in front-end development
            and have worked with a wide range of technologies.
          </TextDefault>

          <Button
            rounded
            background={appBaseColor}
            buttonType="secondary"
            className="button-portfolio-secondary mt-4"
            padding="0.5rem 2.5rem"
          >
            Hire me
          </Button>
        </Animations>

        <Animations
          targetClass="skills"
          animationType="fadeInRight"
          triggerHook={"onEnter"}
          className="center-vertically"
        >
          <div className="w-100">
            <ProgressBar title="React" width={80} className="mb-4" />
            <ProgressBar title="HTML5 & CSS3" width={90} className="mb-4" />
            <ProgressBar title="Node JS" width={60} className="mb-4" />
            <ProgressBar title="React Native" width={80} className="mb-4" />
          </div>
        </Animations>
      </div>
    </Section>
  );
};

export default Skills;
