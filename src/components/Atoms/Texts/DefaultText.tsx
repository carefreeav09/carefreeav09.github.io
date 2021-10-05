import styled from "styled-components";

interface ITextDefault {
  underlined?: boolean;
  color?: string;
  fontSize?: string;
  background?: string;
}

const TextDefault = styled.span<ITextDefault>`
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.textColor};
  background-color: ${(props) =>
    props.background ? props.background : props.theme.colors.background};
  font-weight: 300;
  ${(props) => props.underlined && `text-decoration: underline;`};
  ${(props) => props.fontSize && `font-size: ${props.fontSize};`}
`;

export default TextDefault;
