import {
  TextDefault,
  SecondaryText,
  Section,
  Card,
  Button,
} from "../../../components";

const Services = () => {
  return (
    <Section
      className="container pb-0 d-flex justify-content-center align-items-center text-center"
      minHeight="60vh"
    >
      <div>
        <SecondaryText className="text-uppercase fw-bold" as="h5">
          Services
        </SecondaryText>

        <TextDefault as="h1" className="text-center display-4 fw-bold">
          What I do
        </TextDefault>

        <TextDefault
          as="h4"
          className="text-center fw-normal w-75 m-auto text-muted"
          fontSize="16px"
        >
          I specialize in building progressive web applications and mobile apps
          using current best practices.
        </TextDefault>

        <span className="w-25" />

        <div className="container d-grid grid-template-3x mt-5">
          <Card className="card">
            <div className="card-body text-start">
              <SecondaryText as="span" fontSize="48px" className="fw-bold">
                <i className="fab fa-react" />
              </SecondaryText>

              <TextDefault as="h4" className="fw-bold mt-4">
                React JS
              </TextDefault>

              <TextDefault as="p" className="text-small mt-4 mb-4">
                Lorem Ipsum is simply dummy text of the printing typesetting
                industry. simply dummy
              </TextDefault>

              <Button rounded background="#FF4A57" buttonType="secondary" className="button-portfolio-secondary">
                Projects <i className="fas fa-arrow-right ms-2" />
              </Button>
            </div>
          </Card>

          <Card className="card">
            <div className="card-body text-start">
              <SecondaryText as="span" fontSize="48px" className="fw-bold">
                <i className="fab fa-html5" />
              </SecondaryText>

              <TextDefault as="h4" className="fw-bold mt-4">
                HTML5 
              </TextDefault>

              <TextDefault as="p" className="text-small mt-4 mb-4">
                Lorem Ipsum is simply dummy text of the printing typesetting
                industry. simply dummy
              </TextDefault>

              <Button rounded background="#FF4A57" buttonType="secondary" className="button-portfolio-secondary">
                Projects <i className="fas fa-arrow-right ms-2" />
              </Button>
            </div>
          </Card>

          <Card className="card">
            <div className="card-body text-start">
              <SecondaryText as="span" fontSize="48px" className="fw-bold">
                <i className="fab fa-js-square" />
              </SecondaryText>

              <TextDefault as="h4" className="fw-bold mt-4">
                Javascript Frameworks
              </TextDefault>

              <TextDefault as="p" className="text-small mt-4 mb-4">
                Lorem Ipsum is simply dummy text of the printing typesetting
                industry. simply dummy
              </TextDefault>

              <Button rounded background="#FF4A57" buttonType="secondary" className="button-portfolio-secondary">
                Projects <i className="fas fa-arrow-right ms-2" />
              </Button>
            </div>
          </Card>

          <Card className="card">
            <div className="card-body text-start">
              <SecondaryText as="span" fontSize="48px" className="fw-bold">
                <i className="fab fa-css3" />
              </SecondaryText>

              <TextDefault as="h4" className="fw-bold mt-4">
                CSS3 / SASS / UI Library
              </TextDefault>

              <TextDefault as="p" className="text-small mt-4 mb-4">
                Lorem Ipsum is simply dummy text of the printing typesetting
                industry. simply dummy
              </TextDefault>

              <Button rounded background="#FF4A57" buttonType="secondary" className="button-portfolio-secondary">
                Projects <i className="fas fa-arrow-right ms-2" />
              </Button>
            </div>
          </Card>

          <Card className="card">
            <div className="card-body text-start">
              <SecondaryText as="span" fontSize="48px" className="fw-bold">
                <i className="fas fa-mobile" />
              </SecondaryText>

              <TextDefault as="h4" className="fw-bold mt-4">
                React Native Apps
              </TextDefault>

              <TextDefault as="p" className="text-small mt-4 mb-4">
                Lorem Ipsum is simply dummy text of the printing typesetting
                industry. simply dummy
              </TextDefault>

              <Button rounded background="#FF4A57" buttonType="secondary" className="button-portfolio-secondary">
                Projects <i className="fas fa-arrow-right ms-2" />
              </Button>
            </div>
          </Card>

          <Card className="card">
            <div className="card-body text-start">
              <SecondaryText as="span" fontSize="48px" className="fw-bold">
                <i className="fab fa-node-js" />
              </SecondaryText>

              <TextDefault as="h4" className="fw-bold mt-4">
                Node JS / Express
              </TextDefault>

              <TextDefault as="p" className="text-small mt-4 mb-4">
                Lorem Ipsum is simply dummy text of the printing typesetting
                industry. simply dummy
              </TextDefault>

              <Button rounded background="#FF4A57" buttonType="secondary" className="button-portfolio-secondary">
                Projects <i className="fas fa-arrow-right ms-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default Services;
