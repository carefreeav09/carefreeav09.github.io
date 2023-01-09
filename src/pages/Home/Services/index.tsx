import React from "react";
import {
  TextDefault,
  SecondaryText,
  Section,
  Card,
  Button,
  Seperator,
  Animations,
} from "../../../components";
import { AppThemeContext } from "../../../context/ThemeContext";

const Services = () => {
  const { appBaseColor } = React.useContext(AppThemeContext);
  return (
    <Section
      className="container py-5 px-5 center-vertically text-center"
      minHeight="60vh"
    >
      <div>
        <SecondaryText className="fw-bold text-uppercase" as="h5">
          services
        </SecondaryText>

        <Animations
          targetClass="service-title"
          animationType="fadeInUp"
          triggerHook={"onEnter"}
        >
          <TextDefault
            as="h1"
            className="text-center display-5 fw-bold text-lowercase"
          >
            What I do
          </TextDefault>

          <TextDefault
            as="h4"
            className="text-center fw-normal w-75 m-auto text-muted"
            fontSize="16px"
          >
            I specialize in building progressive web applications and mobile
            apps using current best practices.
          </TextDefault>

          <Seperator />
        </Animations>

        <div className="container d-grid grid-template-3x mt-5">
          <Animations targetClass="service-cards-1">
            <Card className="card">
              <div className="card-body text-start p-5">
                <SecondaryText as="span" fontSize="48px" className="fw-bold">
                  <i className="fab fa-react" />
                </SecondaryText>

                <TextDefault as="h4" className="fw-bold mt-4">
                  React JS
                </TextDefault>

                <TextDefault as="p" className="text-small mt-4 mb-4">
                  Lorem Ipsum is simply dummy text of the printing typesetting
                  industry. simply dummy
                </TextDefault>

                <Button
                  rounded
                  background={appBaseColor}
                  buttonType="secondary"
                  className="button-portfolio-secondary"
                  padding="0.5 1rem"
                >
                  Projects <i className="fas fa-arrow-right ms-2" />
                </Button>
              </div>
            </Card>
          </Animations>

          <Animations targetClass="service-cards-2">
            <Card className="card">
              <div className="card-body text-start p-5">
                <SecondaryText as="span" fontSize="48px" className="fw-bold">
                  <i className="fab fa-html5" />
                </SecondaryText>

                <TextDefault as="h4" className="fw-bold mt-4">
                  HTML5
                </TextDefault>

                <TextDefault as="p" className="text-small mt-4 mb-4">
                  Lorem Ipsum is simply dummy text of the printing typesetting
                  industry. simply dummy
                </TextDefault>

                <Button
                  rounded
                  background={appBaseColor}
                  buttonType="secondary"
                  className="button-portfolio-secondary"
                  padding="0.5 1rem"
                >
                  Projects <i className="fas fa-arrow-right ms-2" />
                </Button>
              </div>
            </Card>
          </Animations>

          <Animations targetClass="service-cards-3">
            <Card className="card">
              <div className="card-body text-start p-5">
                <SecondaryText as="span" fontSize="48px" className="fw-bold">
                  <i className="fab fa-js-square" />
                </SecondaryText>

                <TextDefault as="h4" className="fw-bold mt-4">
                  Javascript Frameworks
                </TextDefault>

                <TextDefault as="p" className="text-small mt-4 mb-4">
                  Lorem Ipsum is simply dummy text of the printing typesetting
                  industry. simply dummy
                </TextDefault>

                <Button
                  rounded
                  background={appBaseColor}
                  buttonType="secondary"
                  className="button-portfolio-secondary"
                  padding="0.5 1rem"
                >
                  Projects <i className="fas fa-arrow-right ms-2" />
                </Button>
              </div>
            </Card>
          </Animations>

          <Animations targetClass="service-cards-4">
            <Card className="card">
              <div className="card-body text-start p-5">
                <SecondaryText as="span" fontSize="48px" className="fw-bold">
                  <i className="fab fa-css3" />
                </SecondaryText>

                <TextDefault as="h4" className="fw-bold mt-4">
                  CSS3 / UI Library
                </TextDefault>

                <TextDefault as="p" className="text-small mt-4 mb-4">
                  Lorem Ipsum is simply dummy text of the printing typesetting
                  industry. simply dummy
                </TextDefault>

                <Button
                  rounded
                  background={appBaseColor}
                  buttonType="secondary"
                  className="button-portfolio-secondary"
                  padding="0.5 1rem"
                >
                  Projects <i className="fas fa-arrow-right ms-2" />
                </Button>
              </div>
            </Card>
          </Animations>

          <Animations targetClass="service-cards-5">
            <Card className="card">
              <div className="card-body text-start p-5">
                <SecondaryText as="span" fontSize="48px" className="fw-bold">
                  <i className="fas fa-mobile" />
                </SecondaryText>

                <TextDefault as="h4" className="fw-bold mt-4">
                  React Native Apps
                </TextDefault>

                <TextDefault as="p" className="text-small mt-4 mb-4">
                  Lorem Ipsum is simply dummy text of the printing typesetting
                  industry. simply dummy
                </TextDefault>

                <Button
                  rounded
                  background={appBaseColor}
                  buttonType="secondary"
                  className="button-portfolio-secondary"
                  padding="0.5 1rem"
                >
                  Projects <i className="fas fa-arrow-right ms-2" />
                </Button>
              </div>
            </Card>
          </Animations>

          <Animations targetClass="service-cards-6">
            <Card className="card">
              <div className="card-body text-start p-5">
                <SecondaryText as="span" fontSize="48px" className="fw-bold">
                  <i className="fab fa-node-js" />
                </SecondaryText>

                <TextDefault as="h4" className="fw-bold mt-4">
                  Node JS / Express
                </TextDefault>

                <TextDefault as="p" className="text-small mt-4 mb-4">
                  Lorem Ipsum is simply dummy text of the printing typesetting
                  industry. simply dummy
                </TextDefault>

                <Button
                  rounded
                  background={appBaseColor}
                  buttonType="secondary"
                  className="button-portfolio-secondary"
                  padding="0.5 1rem"
                >
                  Projects <i className="fas fa-arrow-right ms-2" />
                </Button>
              </div>
            </Card>
          </Animations>
        </div>
      </div>
    </Section>
  );
};

export default Services;
