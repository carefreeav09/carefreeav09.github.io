import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.background};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export default Title;
