import React from "react";
import styled from "styled-components";
import { AppThemeContext } from "../../context/ThemeContext";

const Spacer = styled.div<{
  height?: number;
}>`
  height: ${(props) => (props.height ? `${props.height}px` : 0)};
`;

const EmptySpace = ({ height }: { height?: number }) => {
  const { appLayout } = React.useContext(AppThemeContext);
  return <Spacer height={height ?? appLayout.size} />;
};

export default EmptySpace;
