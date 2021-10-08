import React from "react";
import { EmptySpace, TextDefault, TitleDefault } from "../../components";
import Typography from "./Typography";

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
    </div>
  );
};

export default Components;
