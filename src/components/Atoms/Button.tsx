import styled from "styled-components";

interface IStyledButtonProps {
  background?: string;
  color?: string;
  outline?: boolean;
  rounded?: boolean;
  roundedOutline?: boolean;
  children: string | React.ReactNode;
  padding?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const StyledButton = styled.button<IStyledButtonProps>`
  cursor: pointer;
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.textColor};
  background-color: ${(props) =>
    props.outline ? "transparent" : props.background};
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 10%);
  font-weight: 500;
  padding: ${(props) =>
    props.padding ? `${props.padding}px` : ".625rem 1.5rem .5rem"};
  ${(props) =>
    props?.rounded || props?.roundedOutline ? "border-radius : 10rem" : "0rem"};
  ${(props) =>
    props.outline || props?.roundedOutline
      ? `border-color : ${props.color}`
      : `${props.background}`}
`;

const Button = ({
  background,
  color,
  outline,
  rounded,
  roundedOutline,
  children,
  padding,
  className,
}: IStyledButtonProps) => {
  return (
    <StyledButton
      background={background}
      color={color}
      outline={outline}
      rounded={rounded}
      roundedOutline={roundedOutline}
      padding={padding}
      className={className}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
