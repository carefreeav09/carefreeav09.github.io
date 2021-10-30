import { TextDefault, Social, Section } from "../../../components";

const HeroSection = () => {
  return (
    <Section className="container pb-0 d-flex justify-content-center" minHeight="70vh">
      <div className="mt-4 mb-3 d-flex justify-content-center align-items-center">
        <div>
          <Social
            facebook
            youtube
            github
            instagram
            linkedin
            twitter
            showMessage={false}
            position="left"
            classNames="p-0 mt-0 mb-2"
          />
          <TextDefault as="h1" className="display-3 fw-bold mb-2">
            I’m <span className="fw-bold">Aabhushan Gautam</span>
          </TextDefault>
          <TextDefault as="h4" className="fw-light text-muted">
            React JS Developer at <span className="fw-bold">KOTUKO SRL</span>
          </TextDefault>
        </div>
      </div>

      {/* <img
        src={aabhushan}
        className="image-lg"
        alt="Profile"
        height="400"
        width="300"
      /> */}
    </Section>
  );
};

export default HeroSection;
