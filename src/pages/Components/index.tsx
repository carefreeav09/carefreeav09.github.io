import React from "react";
import { EmptySpace, TextDefault, Title } from "../../components";

const Components = () => {
  return (
    <div className="container">
      <EmptySpace height={100} />

      <TextDefault as="h1" className="display-2">
        Components
      </TextDefault>

      <TextDefault as="p">
        This is a list of all the components that are available in this project.
        The font is <strong>Nunito Sans</strong>
      </TextDefault>

      <hr />

      <Title className="fw-bolder">
        Typography
      </Title>
    </div>
  );
};

export default Components;
