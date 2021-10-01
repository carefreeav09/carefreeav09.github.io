import styled from "styled-components";

const AppContainer = styled.div`
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default AppContainer;
