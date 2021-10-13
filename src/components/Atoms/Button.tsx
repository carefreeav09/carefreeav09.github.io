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
  buttonType?: "primary" | "secondary" | "tertiary" | "danger" | "success";
}

const StyledButton = styled.button<IStyledButtonProps>`
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 10%);
  font-weight: 500;
  padding: ${(props) =>
    props.padding ? `${props.padding}px` : ".625rem 1.5rem .5rem"};
  ${(props) =>
    props?.rounded || props?.roundedOutline
      ? "border-radius : 10rem"
      : "border-radius : 0rem"};
  ${(props) =>
    props.outline || props?.roundedOutline
      ? `border-color : ${props.color}`
      : `border-color :transparent`}
`;

const Button = ({
  outline,
  rounded,
  roundedOutline,
  children,
  padding,
  className,
  buttonType,
}: IStyledButtonProps) => {
  const getButtonClassName = () => {
    let classString: string = "";
    if (roundedOutline || outline) {
      classString = `btn-outline-${buttonType}`;
    } else {
      classString = `btn-${buttonType}`;
    }

    return classString;
  };

  return (
    <StyledButton
      outline={outline}
      rounded={rounded}
      roundedOutline={roundedOutline}
      padding={padding}
      className={`btn ${className} ${getButtonClassName()}`}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  buttonType: "primary",
};

export default Button;
