import React from "react";
import styled from "styled-components";
import { TextDefault } from "../../components";

const NotFoundItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const NotFound = () => {
  return (
    <NotFoundItem>
      <TextDefault as="h1" className="display-4">
        Not Found
      </TextDefault>
    </NotFoundItem>
  );
};

export default NotFound;
