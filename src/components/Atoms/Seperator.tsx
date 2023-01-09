import styled from "styled-components";

interface ISeperatorProps {
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  margin?: string;
  width?: string;
}

const Seperator = styled.p<ISeperatorProps>`
  border-width: ${(props) => props.borderWidth};
  border-color: ${(props) =>
    props.borderColor || props.theme.colors.secondaryColor};
  border-style: ${(props) => props.borderStyle};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;

Seperator.defaultProps = {
  borderWidth: "3px",
  borderStyle: "solid",
  width: "6%",
  margin: "2rem auto",
};

export default Seperator;
