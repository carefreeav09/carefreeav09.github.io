import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.background};
`;

export default Title;
