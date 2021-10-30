import styled from "styled-components";

interface ISection {
  minHeight?: string;
  minWidth?: string;
  color?: string;
  backgroundColor?: string;
}

const Section = styled.div<ISection>`
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.textColor};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.background};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
  overflow-y: auto;
  overflow-x: hidden;
`;

Section.defaultProps = {
  minHeight: "100vh",
  minWidth: "100vw",
};

export default Section;
