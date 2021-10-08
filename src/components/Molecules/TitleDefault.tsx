import { TextDefault } from "../index";

const Title = ({ as, className, children }: any) => {
  return (
    <TextDefault as={as} className={className}>
      {children}
    </TextDefault>
  );
};

Title.defaultProps = {
  as: "h3",
  className: "display-6",
};

export default Title;
