import React from "react";
import {
  Section,
  Animations,
  TextDefault,
  SecondaryText,
  ImageCard,
  Tabs,
  Tab,
} from "../../../components";

import Antelope from "../../../assets/images/antelope.png";
import CosmilanoWeb from "../../../assets/images/cosmilanoweb.png";
import CosmilanoShop from "../../../assets/images/cosmilano.png";
import NOC from "../../../assets/images/noc.png";

import Humanitas from "../../../assets/images/Humanitas.jpg";
import MySwayambar from "../../../assets/images/MySwayambar.jpg";
import Variety from "../../../assets/images/Variety.jpg";
import MyAsma from "../../../assets/images/MyAsma.jpg";

const Projects = () => {
  return (
    <Section
      className="py-5 center-vertically"
      minHeight="60vh"
      gradient={{
        isGradient: true,
        gradientDark: ["#1b242f", "#161c24"],
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
            I've worked on
          </SecondaryText>

          <TextDefault
            as="h1"
            className="display-5 text-lowercase fw-bold mb-5"
          >
            Portfolio Showcase
          </TextDefault>
        </Animations>

        <Tabs tabType="pills" active="home">
          <Tab name="Web Projects" tabKey="home">
            <div className="container d-grid grid-template-2x">
              <ImageCard
                featuredImage={Antelope}
                alt="Antelope Nepal"
                title="Antelope Nepal"
                height="300"
                rounded
                cardWidth="100%"
              />

              <ImageCard
                featuredImage={CosmilanoWeb}
                alt="COS Milano Shop"
                title="COS Milano Shop"
                link="https://cosmilano-shop-nightly.kotukodev.it"
                height="300"
                cardWidth="100%"
              />

              <ImageCard
                featuredImage={CosmilanoShop}
                alt="COS Milano Admin"
                title="COS Milano Admin"
                link="https://cosmilano-admin-nightly.kotukodev.it"
                height="300"
                cardWidth="100%"
              />

              <ImageCard
                featuredImage={NOC}
                alt="Nepal Oil Corporation"
                title="Nepal Oil Corporation"
                link="http://noc.org.np"
                height="300"
                cardWidth="100%"
              />
            </div>
          </Tab>

          <Tab name="Mobile Apps" tabKey="profile">
            <div className="container d-grid grid-template-3x">
              <ImageCard
                featuredImage={Humanitas}
                alt="HU Alumni"
                title="HU Alumni"
                height="300"
                rounded
                cardWidth="50%"
              />

              <ImageCard
                featuredImage={MyAsma}
                alt="MyAsma"
                title="MyAsma"
                height="300"
                rounded
                cardWidth="50%"
              />

              <ImageCard
                featuredImage={Variety}
                alt="Variety"
                title="Variety"
                height="300"
                rounded
                cardWidth="50%"
              />

              <ImageCard
                featuredImage={MySwayambar}
                alt="MySwayambar"
                title="MySwayambar"
                height="300"
                rounded
                cardWidth="50%"
              />
            </div>
          </Tab>
        </Tabs>
      </div>
    </Section>
  );
};

export default Projects;
