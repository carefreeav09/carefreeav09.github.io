import React from "react";
import { TextDefault } from "../../components";

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
        <TextDefault className="display-1" as="div">Hi I'm Aabhushan Gautam</TextDefault>

        <TextDefault className="h2-1" as="div">
          Building this page, one item at a time.
        </TextDefault>
      </div>
    </section>
  );
};

export default Home;
