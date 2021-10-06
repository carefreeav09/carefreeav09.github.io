import React from "react";
import HeroSection from "./Hero";

const Home = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "100vw",
      }}
    >
      <div>
        <HeroSection />
      </div>
    </section>
  );
};

export default Home;
