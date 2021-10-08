import React from "react";
import HeroSection from "./Hero";

const Home = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "100vw",
      }}
    >
      <HeroSection />
    </section>
  );
};

export default Home;
