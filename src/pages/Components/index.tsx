import React from "react";
import { EmptySpace, TextDefault } from "../../components";
import Typography from "./Typography";
import Container from "./Container";

const Components = () => {
  return (
    <div className="container">
      <EmptySpace height={100} />

      <TextDefault as="h1" className="display-2">
        Components
      </TextDefault>

      <TextDefault as="p">
        This is a list of all the components that are available in this project.
        The default font is <span className="fw-bold">Nunito Sans</span>
      </TextDefault>

      <hr />

      <EmptySpace height={20} />

      <Typography />

      <hr />

      <Container />
    </div>
  );
};

export default Components;
