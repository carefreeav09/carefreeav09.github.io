import {
  TextDefault,
  SecondaryText,
  Section,
  Card,
  Seperator,
  Animations,
} from "../../../components";

import "./service.styles.css";

const Services = () => {
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

        <div className="container d-grid grid-template-2x mt-5">
          <Animations targetClass="service-cards-1">
            <Card className="card services-card">
              <div className="card-body text-start p-5">
                <SecondaryText as="span" fontSize="48px" className="fw-bold">
                  <i className="fab fa-react" />
                </SecondaryText>

                <TextDefault as="h4" className="fw-bold mt-4">
                  React JS
                </TextDefault>

                <TextDefault as="p" className=" mt-2 mb-2">
                  <strong> Experience </strong>: 3 years.
                </TextDefault>
                <TextDefault as="p" className=" mt-2 mb-2">
                  <strong>Organizations </strong>: Touchware Nepal/ KOTUKO IT,
                  Citytech Nepal
                </TextDefault>
                <TextDefault as="p" className=" mt-2">
                  <strong>Projects </strong>: Antelope Nepal, RemitPulse, COS
                  Milano
                </TextDefault>
              </div>
            </Card>
          </Animations>

          <Animations targetClass="service-cards-2">
            <Card className="card services-card">
              <div className="card-body text-start p-5">
                <SecondaryText as="span" fontSize="48px" className="fw-bold">
                  <i className="fas fa-mobile" />
                </SecondaryText>

                <TextDefault as="h4" className="fw-bold mt-4">
                  React Native Apps
                </TextDefault>

                <TextDefault as="p" className=" mt-2 mb-2">
                  <strong> Experience </strong>: 1.5 years.
                </TextDefault>
                <TextDefault as="p" className=" mt-2 mb-2">
                  <strong>Organizations </strong>: Touchware Nepal/ KOTUKO IT,
                  MySwayambar
                </TextDefault>
                <TextDefault as="p" className="mt-2">
                  <strong>Projects </strong>: HU Alumni, MyAsma, MySwayambar,
                  Variety
                </TextDefault>
              </div>
            </Card>
          </Animations>
        </div>

        <div className="container d-grid grid-template-3x mt-5">
          <Animations targetClass="service-cards-3">
            <Card className="card services-card">
              <div className="card-body text-start p-5">
                <SecondaryText as="span" fontSize="48px" className="fw-bold">
                  <i className="fab fa-js-square" />
                </SecondaryText>

                <TextDefault as="h4" className="fw-bold mt-4">
                  Javascript Frameworks
                </TextDefault>

                <TextDefault as="p" className=" mt-2 mb-2">
                  <strong>Angular JS </strong>: Beginner
                </TextDefault>
                <TextDefault as="p" className=" mt-2 mb-2">
                  <strong>Vue JS </strong>: Beginner
                </TextDefault>
                <TextDefault as="p" className=" mt-2">
                  <strong>Ionic </strong>: Intermediate
                </TextDefault>
              </div>
            </Card>
          </Animations>

          <Animations targetClass="service-cards-4">
            <Card className="card services-card">
              <div className="card-body text-start p-5">
                <SecondaryText as="span" fontSize="48px" className="fw-bold">
                  <i className="fab fa-css3" />
                </SecondaryText>

                <TextDefault as="h4" className="fw-bold mt-4">
                  HTML5 / CSS3 / UI Library
                </TextDefault>

                <TextDefault as="p" className=" mt-2 mb-2">
                  <strong>HTML5 </strong>: Veteran
                </TextDefault>
                <TextDefault as="p" className=" mt-2 mb-2">
                  <strong>CSS3 </strong>: Verteran
                </TextDefault>
                <TextDefault as="p" className=" mt-2">
                  <strong>UI Libraries </strong>: Material UI, Material Design
                  Bootstrap, Bootstrap 5
                </TextDefault>
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

                <TextDefault as="p" className=" mt-2 mb-2">
                  <strong>NodeJS </strong>: Intermediate
                </TextDefault>
              </div>
            </Card>
          </Animations>
        </div>
      </div>
    </Section>
  );
};

export default Services;
