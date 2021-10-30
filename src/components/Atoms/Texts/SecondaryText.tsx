import styled from "styled-components";

interface ITextDefault {
  color?: string;
  fontSize?: string;
  background?: string;
}

const SecondaryText = styled.span<ITextDefault>`
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.secondaryColor};
  font-weight: 300;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`;

export default SecondaryText;
