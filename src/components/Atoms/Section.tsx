import styled from "styled-components";

interface IGradient {
  isGradient: boolean;
  gradientLight?: string[] | boolean;
  gradientDark?: string[] | boolean;
}

interface ISection {
  minHeight?: string;
  minWidth?: string;
  color?: string;
  backgroundColor?: string;
  gradientLight?: string[] | boolean;
  gradientDark?: string[] | boolean;
  gradient?: IGradient;
}

const getBackgroundProperty = (
  gradient: IGradient | undefined,
  backgroundColor: string | undefined,
  themeColor: string,
  currentTheme: string
) => {
  console.log(currentTheme);

  if (gradient && gradient.isGradient) {
    if (currentTheme === "dark" && gradient.gradientDark instanceof Array) {
      return `linear-gradient(${gradient?.gradientDark?.map(
        (item: any) => item
      )})`;
    } else if (
      currentTheme === "light" &&
      gradient.gradientLight instanceof Array
    ) {
      return `linear-gradient(${gradient?.gradientLight?.map(
        (item: any) => item
      )})`;
    } else {
      return backgroundColor ? backgroundColor : themeColor;
    }
  } else {
    return backgroundColor ? backgroundColor : themeColor;
  }
};

const Section = styled.div<ISection>`
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.textColor};
  background: ${(props) =>
    getBackgroundProperty(
      props.gradient,
      props.backgroundColor,
      props.theme.colors.backgroundColor,
      props.theme.colors.theme
    )};
  min-height: ${(props) => props.minHeight};
  min-width: ${(props) => props.minWidth};
  overflow-y: auto;
  overflow-x: hidden;
`;

Section.defaultProps = {
  minHeight: "100vh",
  minWidth: "100vw",
  gradientDark: false,
  gradientLight: false,
  gradient: {
    isGradient: false,
    gradientLight: false,
    gradientDark: false,
  },
};

export default Section;
