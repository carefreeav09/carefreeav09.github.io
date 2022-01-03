import React from "react";
import {
  Animations,
  Card,
  SecondaryText,
  Section,
  Social,
  TextDefault,
} from "../../components";

const Contact = () => {
  return (
    <Section
      className="py-5 center-vertically"
      minHeight="60vh"
      gradient={{
        isGradient: true,
        gradientDark: ["#161c24", "#1b242f"],
        gradientLight: false,
      }}
    >
      <div className="container">
        <Animations
          targetClass="projects-showcase"
          animationType="fadeInUp"
          triggerHook={"onEnter"}
          className="text-center w-100 m-auto"
        >
          <SecondaryText className="fw-bold text-uppercase" as="h6">
            find me
          </SecondaryText>

          <TextDefault
            as="h1"
            className="display-5 text-lowercase fw-bold mb-5"
          >
            Contact
          </TextDefault>
        </Animations>

        <div className="d-grid grid-template-3x">
          <Card className="card">
            <div className="card-body text-start p-2 px-5">
              <div className="row">
                <div className="col-2">
                  <SecondaryText as="span" fontSize="32px" className="fw-bold">
                    <i className="fas fa-map-marker-alt"></i>
                  </SecondaryText>
                </div>

                <div className="col-10">
                  <TextDefault as="span" className="fw-bold h3">
                    Location
                  </TextDefault>

                  <TextDefault as="p" className="text-small mt-2 h5">
                    Kapan, Kathmandu
                  </TextDefault>
                </div>
              </div>
            </div>
          </Card>

          <Card className="card">
            <div className="card-body text-start p-2 px-5">
              <div className="row">
                <div className="col-2">
                  <SecondaryText as="span" fontSize="32px" className="fw-bold">
                    <i className="fas fa-phone"></i>
                  </SecondaryText>
                </div>

                <div className="col-10">
                  <TextDefault as="span" className="fw-bold h3">
                    Phone
                  </TextDefault>

                  <TextDefault as="p" className="text-small mt-2 h5">
                    9861551591
                  </TextDefault>
                </div>
              </div>
            </div>
          </Card>

          <Card className="card">
            <div className="card-body text-start p-2 px-5">
              <div className="row">
                <div className="col-2">
                  <SecondaryText as="span" fontSize="32px" className="fw-bold">
                    <i className="fas fa-envelope"></i>
                  </SecondaryText>
                </div>

                <div className="col-10">
                  <TextDefault as="span" className="fw-bold h3">
                    Email
                  </TextDefault>

                  <TextDefault as="p" className="text-small mt-2 h5">
                    carefreeav09@gmail.com
                  </TextDefault>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Social
          showMessage={false}
          facebook
          twitter
          instagram
          linkedin
          github
          position="center"
          classNames="app-secondary-text fs-3 mt-5"
        />
      </div>
    </Section>
  );
};

export default Contact;
