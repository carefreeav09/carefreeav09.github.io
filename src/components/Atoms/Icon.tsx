import styled from "styled-components";

interface ITextDefault {
  color?: string;
  fontSize?: string;
  background?: string;
  className: string;
}

const SecondaryText = styled.i<ITextDefault>`
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.textColor};
  font-weight: 300;
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`;

export default SecondaryText;
